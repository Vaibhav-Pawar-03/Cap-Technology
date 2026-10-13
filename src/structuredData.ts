type ServiceSummary = { slug: string; title: string; description: string }
type ArticleSummary = { slug: string; title: string; category: string; description: string; keywords: string[] }
type PageSchemaInput = {
  origin: string
  pathname: string
  title: string
  description: string
  serviceList: ServiceSummary[]
  service?: ServiceSummary
  articles: ArticleSummary[]
  article?: ArticleSummary
}

export function buildPageStructuredData(input: PageSchemaInput) {
  const { origin, pathname, title, description, serviceList, service, articles, article } = input
  const organizationId = `${origin}/#organization`
  const websiteId = `${origin}/#website`
  const pageUrl = `${origin}${pathname}`
  const pageId = `${pageUrl}#webpage`
  const organization = {
    '@type': 'Organization',
    '@id': organizationId,
    name: 'CAP Technology',
    url: origin,
    logo: { '@type': 'ImageObject', url: `${origin}/logo.png` },
    email: 'info@captechnology.in',
    description: 'Digital marketing services from CAP Technology in Viman Nagar, Pune.',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Viman Nagar',
      addressRegion: 'Maharashtra',
      addressCountry: 'IN',
    },
  }
  const website = {
    '@type': 'WebSite',
    '@id': websiteId,
    url: origin,
    name: 'CAP Technology',
    publisher: { '@id': organizationId },
    inLanguage: 'en-IN',
  }
  const graph: Record<string, unknown>[] = []
  if (pathname === '/' || pathname === '/about') graph.push(organization)
  if (pathname === '/') graph.push(website)

  const pageType = pathname === '/about' ? 'AboutPage'
    : pathname === '/contact' ? 'ContactPage'
      : pathname === '/services' || pathname === '/blog' || pathname === '/customers' ? 'CollectionPage'
        : 'WebPage'
  const page: Record<string, unknown> = {
    '@type': pageType,
    '@id': pageId,
    url: pageUrl,
    name: title,
    description,
    isPartOf: { '@id': websiteId },
    about: { '@id': organizationId },
    inLanguage: 'en-IN',
  }

  const breadcrumb = (items: { name: string; url?: string }[]) => ({
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      ...(item.url ? { item: item.url } : {}),
    })),
  })
  const list = (items: { name: string; url: string }[]) => ({
    '@type': 'ItemList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem', position: index + 1, name: item.name, url: item.url,
    })),
  })

  if (pathname === '/services') {
    page.mainEntity = list(serviceList.map(item => ({ name: item.title, url: `${origin}/services/${item.slug}` })))
  } else if (service) {
    const serviceId = `${pageUrl}#service`
    graph.push({
      '@type': 'Service',
      '@id': serviceId,
      name: service.title,
      serviceType: service.title,
      description: service.description,
      url: pageUrl,
      provider: { '@id': organizationId },
      areaServed: { '@type': 'City', name: 'Pune' },
    })
    page.mainEntity = { '@id': serviceId }
    page.breadcrumb = breadcrumb([
      { name: 'Home', url: origin },
      { name: 'Services', url: `${origin}/services` },
      { name: service.title },
    ])
  } else if (pathname === '/blog') {
    page.mainEntity = list(articles.map(item => ({ name: item.title, url: `${origin}/blog/${item.slug}` })))
  } else if (article) {
    const articleId = `${pageUrl}#article`
    graph.push({
      '@type': 'BlogPosting',
      '@id': articleId,
      headline: article.title,
      description: article.description,
      mainEntityOfPage: { '@id': pageUrl },
      author: { '@id': organizationId },
      publisher: { '@id': organizationId },
      keywords: article.keywords,
      articleSection: article.category,
      inLanguage: 'en-IN',
    })
    page.mainEntity = { '@id': articleId }
    page.breadcrumb = breadcrumb([
      { name: 'Home', url: origin },
      { name: 'Blog', url: `${origin}/blog` },
      { name: article.category },
    ])
  } else if (pathname === '/customers') {
    page.mainEntity = list([
      { name: 'PayPerfectHR', url: 'https://payperfecthr.com' },
      { name: 'Mealqube', url: 'https://mealqube.in' },
    ])
  } else if (pathname === '/contact') {
    page.mainEntity = { '@id': organizationId }
  }

  graph.push(page)
  return { '@context': 'https://schema.org', '@graph': graph }
}
