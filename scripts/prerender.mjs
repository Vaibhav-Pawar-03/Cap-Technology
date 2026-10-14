import { mkdir, readFile, writeFile } from 'node:fs/promises'
import { join } from 'node:path'
import { fileURLToPath } from 'node:url'

const projectRoot = fileURLToPath(new URL('../', import.meta.url))
const outputRoot = join(projectRoot, 'dist')
const template = await readFile(join(outputRoot, 'index.html'), 'utf8')
const sitemap = await readFile(join(projectRoot, 'public/sitemap.xml'), 'utf8')
const server = await import('../dist/server/entry-server.js')
const origin = new URL(sitemap.match(/<loc>([^<]+)<\/loc>/)?.[1] ?? 'https://captechnology.in').origin
const routes = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map(([, url]) => new URL(url).pathname)

const escapeAttribute = value => value.replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;')
const safeJson = value => JSON.stringify(value).replaceAll('<', '\\u003c')

for (const pathname of routes) {
  const data = server.blogPosts && pathname.startsWith('/blog/')
    ? server.blogPosts
    : undefined
  const markup = server.render(pathname, data)
  const metadata = server.getPageMetadata(pathname)
  const canonical = `${origin}${pathname}`
  const schema = safeJson(server.getPageSchema(pathname, origin))
  const headTags = [
    `<link rel="canonical" href="${escapeAttribute(canonical)}" />`,
    `<meta property="og:title" content="${escapeAttribute(metadata.title)}" />`,
    `<meta property="og:description" content="${escapeAttribute(metadata.description)}" />`,
    '<meta property="og:type" content="website" />',
    '<meta property="og:site_name" content="CAP Technology" />',
    `<meta property="og:url" content="${escapeAttribute(canonical)}" />`,
    '<meta name="twitter:card" content="summary_large_image" />',
    `<meta name="twitter:title" content="${escapeAttribute(metadata.title)}" />`,
    `<meta name="twitter:description" content="${escapeAttribute(metadata.description)}" />`,
    `<script id="cap-schema" type="application/ld+json">${schema}</script>`,
  ].join('\n    ')

  let html = template
    .replace(/<title>[^<]*<\/title>/, `<title>${metadata.title}</title>`)
    .replace(/<meta name="description" content="[^"]*"\s*\/>/, `<meta name="description" content="${escapeAttribute(metadata.description)}" />`)
    .replace('</head>', `    ${headTags}\n  </head>`)
    .replace('<div id="root"></div>', `<div id="root">${markup}</div>`)

  if (data) {
    html = html.replace('</body>', `  <script id="cap-blog-data" type="application/json">${safeJson(data)}</script>\n</body>`)
  }

  const routeDirectory = pathname === '/' ? outputRoot : join(outputRoot, ...pathname.split('/').filter(Boolean))
  await mkdir(routeDirectory, { recursive: true })
  await writeFile(join(routeDirectory, 'index.html'), html)
}

console.log(`Prerendered ${routes.length} routes.`)
