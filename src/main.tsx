import { StrictMode, Suspense, lazy, type ComponentType } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router'
import './index.css'

import { MarketingLayout } from '@/components/layout/MarketingLayout'
import { RouteErrorBoundary } from '@/components/common/ErrorBoundary'
import { MarketingHomePage } from '@/pages/HomePage'

function lazyNamed<T extends Record<string, ComponentType>>(
  loader: () => Promise<T>,
  exportName: keyof T
) {
  return lazy(() => loader().then((mod) => ({ default: mod[exportName] })))
}

const CommunicationCloudPage = lazyNamed(() => import('@/pages/products/CommunicationCloudPage'), 'CommunicationCloudPage')
const SalesCRMPage = lazyNamed(() => import('@/pages/products/SalesCRMPage'), 'SalesCRMPage')
const SupportCRMPage = lazyNamed(() => import('@/pages/products/SupportCRMPage'), 'SupportCRMPage')
const AIAutomationPage = lazyNamed(() => import('@/pages/products/AIAutomationPage'), 'AIAutomationPage')
const SolutionsPage = lazyNamed(() => import('@/pages/solutions/SolutionsPage'), 'SolutionsPage')
const SalesTeamsPage = lazyNamed(() => import('@/pages/solutions/SalesTeamsPage'), 'SalesTeamsPage')
const CustomerSupportPage = lazyNamed(() => import('@/pages/solutions/CustomerSupportPage'), 'CustomerSupportPage')
const MarketingTeamsPage = lazyNamed(() => import('@/pages/solutions/MarketingTeamsPage'), 'MarketingTeamsPage')
const StartupsPage = lazyNamed(() => import('@/pages/solutions/StartupsPage'), 'StartupsPage')
const EnterprisesPage = lazyNamed(() => import('@/pages/solutions/EnterprisesPage'), 'EnterprisesPage')
const IntegrationsPage = lazyNamed(() => import('@/pages/IntegrationsPage'), 'IntegrationsPage')
const PricingPage = lazyNamed(() => import('@/pages/PricingPage'), 'PricingPage')
const AboutPage = lazyNamed(() => import('@/pages/AboutPage'), 'AboutPage')
const ContactPage = lazyNamed(() => import('@/pages/ContactPage'), 'ContactPage')
const CareersPage = lazyNamed(() => import('@/pages/CareersPage'), 'CareersPage')
const ResourcesPage = lazyNamed(() => import('@/pages/resources/ResourcesPage'), 'ResourcesPage')
const BlogListingPage = lazyNamed(() => import('@/pages/resources/BlogListingPage'), 'BlogListingPage')
const BlogDetailPage = lazyNamed(() => import('@/pages/resources/BlogDetailPage'), 'BlogDetailPage')
const GuidesPage = lazyNamed(() => import('@/pages/resources/GuidesPage'), 'GuidesPage')
const DevelopersPage = lazyNamed(() => import('@/pages/developers/DevelopersPage'), 'DevelopersPage')
const ApiDocsPage = lazyNamed(() => import('@/pages/developers/ApiDocsPage'), 'ApiDocsPage')
const WebhooksDocsPage = lazyNamed(() => import('@/pages/developers/WebhooksDocsPage'), 'WebhooksDocsPage')
const BookDemoPage = lazyNamed(() => import('@/pages/BookDemoPage'), 'BookDemoPage')
const FreeTrialPage = lazyNamed(() => import('@/pages/FreeTrialPage'), 'FreeTrialPage')
const NotFoundPage = lazyNamed(() => import('@/pages/NotFoundPage'), 'NotFoundPage')
const TermsPage = lazyNamed(() => import('@/pages/legal/TermsPage'), 'TermsPage')
const PrivacyPage = lazyNamed(() => import('@/pages/legal/PrivacyPage'), 'PrivacyPage')
const TraiDltPolicyPage = lazyNamed(() => import('@/pages/legal/TraiDltPolicyPage'), 'TraiDltPolicyPage')
const TraiGuidelinesPage = lazyNamed(() => import('@/pages/legal/TraiGuidelinesPage'), 'TraiGuidelinesPage')
const SecurityGdprPage = lazyNamed(() => import('@/pages/legal/SecurityGdprPage'), 'SecurityGdprPage')

function PageFallback() {
  return <div className="min-h-[60vh] bg-white" aria-busy="true" />
}

const withSuspense = (Component: ComponentType) => (
  <Suspense fallback={<PageFallback />}>
    <Component />
  </Suspense>
)

const router = createBrowserRouter([
  {
    element: <MarketingLayout />,
    errorElement: <RouteErrorBoundary />,
    children: [
      { path: '/', element: <MarketingHomePage /> },
      { path: '/products/communication-cloud', element: withSuspense(CommunicationCloudPage) },
      { path: '/products/sales-crm', element: withSuspense(SalesCRMPage) },
      { path: '/products/support-crm', element: withSuspense(SupportCRMPage) },
      { path: '/products/ai-automation', element: withSuspense(AIAutomationPage) },
      { path: '/solutions', element: withSuspense(SolutionsPage) },
      { path: '/solutions/sales-teams', element: withSuspense(SalesTeamsPage) },
      { path: '/solutions/customer-support', element: withSuspense(CustomerSupportPage) },
      { path: '/solutions/marketing-teams', element: withSuspense(MarketingTeamsPage) },
      { path: '/solutions/startups', element: withSuspense(StartupsPage) },
      { path: '/solutions/enterprises', element: withSuspense(EnterprisesPage) },
      { path: '/integrations', element: withSuspense(IntegrationsPage) },
      { path: '/pricing', element: withSuspense(PricingPage) },
      { path: '/about', element: withSuspense(AboutPage) },
      { path: '/contact', element: withSuspense(ContactPage) },
      { path: '/careers', element: withSuspense(CareersPage) },
      { path: '/resources', element: withSuspense(ResourcesPage) },
      { path: '/resources/blog', element: withSuspense(BlogListingPage) },
      { path: '/resources/blog/:slug', element: withSuspense(BlogDetailPage) },
      { path: '/resources/guides', element: withSuspense(GuidesPage) },
      { path: '/developers', element: withSuspense(DevelopersPage) },
      { path: '/developers/api-documentation', element: withSuspense(ApiDocsPage) },
      { path: '/developers/webhooks', element: withSuspense(WebhooksDocsPage) },
      { path: '/book-demo', element: withSuspense(BookDemoPage) },
      { path: '/free-trial', element: withSuspense(FreeTrialPage) },
      { path: '/signup', element: withSuspense(FreeTrialPage) },
      { path: '/free-forever', element: withSuspense(FreeTrialPage) },
      { path: '/terms', element: withSuspense(TermsPage) },
      { path: '/terms-of-service', element: withSuspense(TermsPage) },
      { path: '/privacy', element: withSuspense(PrivacyPage) },
      { path: '/privacy-policy', element: withSuspense(PrivacyPage) },
      { path: '/trai-dlt-policy', element: withSuspense(TraiDltPolicyPage) },
      { path: '/dlt-policy', element: withSuspense(TraiDltPolicyPage) },
      { path: '/trai-guidelines', element: withSuspense(TraiGuidelinesPage) },
      { path: '/guidelines/trai', element: withSuspense(TraiGuidelinesPage) },
      { path: '/security-gdpr', element: withSuspense(SecurityGdprPage) },
      { path: '/security', element: withSuspense(SecurityGdprPage) },
      { path: '*', element: withSuspense(NotFoundPage) },
    ],
  },
])

const rootContainer = document.getElementById('root')!
const globalWindow = window as typeof window & { __pulsequoRoot?: ReturnType<typeof createRoot> }
const root = globalWindow.__pulsequoRoot ?? createRoot(rootContainer)
globalWindow.__pulsequoRoot = root

root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
