import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router'
import './index.css'

// Marketing Website Pages & Layout
import { MarketingLayout } from '@/components/layout/MarketingLayout'
import { MarketingHomePage } from '@/pages/HomePage'
import { CommunicationCloudPage } from '@/pages/products/CommunicationCloudPage'
import { SalesCRMPage } from '@/pages/products/SalesCRMPage'
import { SupportCRMPage } from '@/pages/products/SupportCRMPage'
import { AIAutomationPage } from '@/pages/products/AIAutomationPage'
import { SolutionsPage } from '@/pages/solutions/SolutionsPage'
import { SalesTeamsPage } from '@/pages/solutions/SalesTeamsPage'
import { CustomerSupportPage } from '@/pages/solutions/CustomerSupportPage'
import { MarketingTeamsPage } from '@/pages/solutions/MarketingTeamsPage'
import { StartupsPage } from '@/pages/solutions/StartupsPage'
import { EnterprisesPage } from '@/pages/solutions/EnterprisesPage'
import { IntegrationsPage } from '@/pages/IntegrationsPage'
import { PricingPage } from '@/pages/PricingPage'
import { AboutPage } from '@/pages/AboutPage'
import { ContactPage } from '@/pages/ContactPage'
import { CareersPage } from '@/pages/CareersPage'
import { ResourcesPage } from '@/pages/resources/ResourcesPage'
import { BlogListingPage } from '@/pages/resources/BlogListingPage'
import { BlogDetailPage } from '@/pages/resources/BlogDetailPage'
import { GuidesPage } from '@/pages/resources/GuidesPage'
import { DevelopersPage } from '@/pages/developers/DevelopersPage'
import { ApiDocsPage } from '@/pages/developers/ApiDocsPage'
import { WebhooksDocsPage } from '@/pages/developers/WebhooksDocsPage'
import { BookDemoPage } from '@/pages/BookDemoPage'
import { NotFoundPage } from '@/pages/NotFoundPage'

const router = createBrowserRouter([
  {
    element: <MarketingLayout />,
    children: [
      { path: '/', element: <MarketingHomePage /> },
      // Product Detail Pages
      { path: '/products/communication-cloud', element: <CommunicationCloudPage /> },
      { path: '/products/sales-crm', element: <SalesCRMPage /> },
      { path: '/products/support-crm', element: <SupportCRMPage /> },
      { path: '/products/ai-automation', element: <AIAutomationPage /> },
      // Solutions Pages
      { path: '/solutions', element: <SolutionsPage /> },
      { path: '/solutions/sales-teams', element: <SalesTeamsPage /> },
      { path: '/solutions/customer-support', element: <CustomerSupportPage /> },
      { path: '/solutions/marketing-teams', element: <MarketingTeamsPage /> },
      { path: '/solutions/startups', element: <StartupsPage /> },
      { path: '/solutions/enterprises', element: <EnterprisesPage /> },
      // Directory & Commercial Pages
      { path: '/integrations', element: <IntegrationsPage /> },
      { path: '/pricing', element: <PricingPage /> },
      // Company Pages
      { path: '/about', element: <AboutPage /> },
      { path: '/contact', element: <ContactPage /> },
      { path: '/careers', element: <CareersPage /> },
      // Resources & Developer Pages
      { path: '/resources', element: <ResourcesPage /> },
      { path: '/resources/blog', element: <BlogListingPage /> },
      { path: '/resources/blog/:slug', element: <BlogDetailPage /> },
      { path: '/resources/guides', element: <GuidesPage /> },
      { path: '/developers', element: <DevelopersPage /> },
      { path: '/developers/api-documentation', element: <ApiDocsPage /> },
      { path: '/developers/webhooks', element: <WebhooksDocsPage /> },
      // Demo Conversion
      { path: '/book-demo', element: <BookDemoPage /> },
      // 404 Catch-All
      { path: '*', element: <NotFoundPage /> },
    ],
  },
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)

