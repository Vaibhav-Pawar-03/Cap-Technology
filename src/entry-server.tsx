import { renderToString } from 'react-dom/server'
import { MemoryRouter } from 'react-router-dom'
import { blogPosts } from './blogPosts'
import type { BlogPost } from './blogPosts'
import { App, getPageMetadata, getPageSchema } from './site'

export function render(pathname: string, initialBlogPosts?: BlogPost[]) {
  return renderToString(
    <MemoryRouter initialEntries={[pathname]}>
      <App initialBlogPosts={initialBlogPosts} />
    </MemoryRouter>,
  )
}

export { blogPosts, getPageMetadata, getPageSchema }
