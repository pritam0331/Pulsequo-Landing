/**
 * Breadcrumbs Component
 * Route breadcrumbs intentionally omitted for clean, uncluttered section headers.
 */

export interface BreadcrumbItem {
  label: string
  href?: string
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[]
  className?: string
}

export function Breadcrumbs(_props: BreadcrumbsProps) {
  return null
}
