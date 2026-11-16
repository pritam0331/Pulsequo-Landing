/**
 * PulseQuo Technical SEO & Metadata Component
 * Updates page title, meta description, canonical tags, Open Graph, Twitter, and injects Schema.org JSON-LD.
 */

import { useEffect } from 'react'
import { siteConfig } from '../../config/siteConfig'

export interface SEOProps {
  title: string
  description?: string
  canonicalPath?: string
  ogImage?: string
  schemaType?: 'Organization' | 'SoftwareApplication' | 'WebSite' | 'FAQPage' | 'Article'
  schemaData?: Record<string, any>
}

export function SEO({
  title,
  description = siteConfig.description,
  canonicalPath = '',
  ogImage = '/pulsequo-logo.png',
  schemaType = 'SoftwareApplication',
  schemaData,
}: SEOProps) {
  const fullTitle = title.includes(siteConfig.name) ? title : `${title} | ${siteConfig.name}`
  const canonicalUrl = `${siteConfig.marketingUrl}${canonicalPath.startsWith('/') ? canonicalPath : `/${canonicalPath}`}`
  const fullOgImage = ogImage.startsWith('http') ? ogImage : `${siteConfig.marketingUrl}${ogImage}`

  useEffect(() => {
    // 1. Page Title
    document.title = fullTitle

    // 2. Helper to set or create meta tag
    const setMetaTag = (attribute: 'name' | 'property', attrValue: string, content: string) => {
      let element = document.querySelector(`meta[${attribute}="${attrValue}"]`)
      if (!element) {
        element = document.createElement('meta')
        element.setAttribute(attribute, attrValue)
        document.head.appendChild(element)
      }
      element.setAttribute('content', content)
    }

    // 3. Helper for link canonical
    let linkCanonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null
    if (!linkCanonical) {
      linkCanonical = document.createElement('link')
      linkCanonical.setAttribute('rel', 'canonical')
      document.head.appendChild(linkCanonical)
    }
    linkCanonical.setAttribute('href', canonicalUrl)

    // Standard Meta
    setMetaTag('name', 'description', description)
    setMetaTag('name', 'robots', 'index, follow')

    // Open Graph
    setMetaTag('property', 'og:site_name', siteConfig.name)
    setMetaTag('property', 'og:title', fullTitle)
    setMetaTag('property', 'og:description', description)
    setMetaTag('property', 'og:url', canonicalUrl)
    setMetaTag('property', 'og:image', fullOgImage)
    setMetaTag('property', 'og:type', schemaType === 'Article' ? 'article' : 'website')

    // Twitter Card
    setMetaTag('name', 'twitter:card', 'summary_large_image')
    setMetaTag('name', 'twitter:title', fullTitle)
    setMetaTag('name', 'twitter:description', description)
    setMetaTag('name', 'twitter:image', fullOgImage)

    // Structured Data JSON-LD
    let scriptTag = document.getElementById('json-ld-schema') as HTMLScriptElement | null
    if (!scriptTag) {
      scriptTag = document.createElement('script')
      scriptTag.id = 'json-ld-schema'
      scriptTag.type = 'application/ld+json'
      document.head.appendChild(scriptTag)
    }

    const defaultSchema = {
      '@context': 'https://schema.org',
      '@type': schemaType === 'SoftwareApplication' ? 'SoftwareApplication' : 'Organization',
      name: siteConfig.name,
      url: siteConfig.marketingUrl,
      description: siteConfig.description,
      applicationCategory: 'BusinessApplication, CommunicationApplication, CRMApplication',
      operatingSystem: 'All modern web browsers, Cloud Hosted',
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'USD',
        description: 'Tailored enterprise and volume pricing available upon inquiry',
      },
      ...schemaData,
    }

    scriptTag.text = JSON.stringify(defaultSchema)
  }, [fullTitle, description, canonicalUrl, fullOgImage, schemaType, schemaData])

  return null
}
