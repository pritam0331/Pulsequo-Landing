/**
 * PulseQuo Marketing Site Configuration
 * Centralized settings for environment URLs, endpoints, metadata and brand details.
 */

export const siteConfig = {
  name: 'PulseQuo',
  tagline: 'One Platform. Complete Customer Experience.',
  altTagline: 'Connect, Communicate, Manage and Grow — All with PulseQuo.',
  description:
    'AI-powered business communication, CRM, customer engagement, and intelligent automation platform for high-growth teams and enterprises.',

  // Environment-based URLs with safe production defaults
  marketingUrl: (import.meta.env.VITE_MARKETING_URL as string) || 'https://www.pulsequo.com',
  appUrl: (import.meta.env.VITE_APP_URL as string) || (import.meta.env.DEV ? '/app' : 'https://app.pulsequo.com'),
  apiBaseUrl: (import.meta.env.VITE_API_BASE_URL as string) || '',

  // Endpoints
  demoEndpoint: '/api/public/demo-requests',
  contactEndpoint: '/api/public/contact',

  // Contact details (editable placeholders where exact corporate details are pending)
  contactEmail: 'contact@pulsequo.com',
  salesEmail: 'sales@pulsequo.com',
  supportEmail: 'support@pulsequo.com',
  phonePlaceholder: '+91 (Business Inquiries · Connect with Sales)',
  addressPlaceholder: 'PulseQuo AI Technologies PVT LTD.· Delhi, Delhi, India',

  // Social Links
  social: {
    linkedin: 'https://www.linkedin.com/company/pulsequo',
    twitter: 'https://twitter.com/pulsequo',
    github: 'https://github.com/pulsequo',
    youtube: 'https://youtube.com/@pulsequo',
  },

  statusPage: 'https://status.pulsequo.com',

  // Analytics configurations
  analytics: {
    gaId: (import.meta.env.VITE_GA_MEASUREMENT_ID as string) || '',
    gtmId: (import.meta.env.VITE_GTM_ID as string) || '',
  },

  // Navigation Links
  nav: {
    products: [
      {
        name: 'Communication Cloud',
        href: '/products/communication-cloud',
        description: 'Omnichannel messaging, WhatsApp Business API, SMS gateway, voice, and central inbox.',
        badge: 'Enterprise CPaaS',
      },
      {
        name: 'Sales CRM',
        href: '/products/sales-crm',
        description: 'Lead tracking, deal pipelines, interaction histories, and intelligent sales follow-ups.',
        badge: 'Revenue Engine',
      },
      {
        name: 'Customer Support CRM',
        href: '/products/support-crm',
        description: 'Multi-channel ticketing, SLA management, agent routing, and knowledge base.',
        badge: 'Support Hub',
      },
      {
        name: 'AI & Automation',
        href: '/products/ai-automation',
        description: 'Visual flow builder, autonomous AI agents, smart qualification, and automated triggers.',
        badge: 'Intelligent Workflows',
      },
    ],
    solutions: [
      {
        name: 'Sales Teams',
        href: '/solutions/sales-teams',
        description: 'Accelerate deal velocity and automate pipeline follow-ups across chat and SMS.',
      },
      {
        name: 'Customer Support',
        href: '/solutions/customer-support',
        description: 'Resolve customer queries faster with unified inboxes and bot-to-agent handoffs.',
      },
      {
        name: 'Marketing Teams',
        href: '/solutions/marketing-teams',
        description: 'Launch high-converting WhatsApp & SMS campaigns with rich delivery analytics.',
      },
      {
        name: 'Startups',
        href: '/solutions/startups',
        description: 'Scale lean operations with automated customer acquisition and support.',
      },
      {
        name: 'Enterprises',
        href: '/solutions/enterprises',
        description: 'Security, compliance, custom integrations, and high-throughput messaging.',
      },
    ],
    resources: [
      { name: 'Blog & Articles', href: '/resources/blog', description: 'Insights on CPaaS, CRM best practices, and AI automation.' },
      { name: 'API Reference', href: '/developers/api-documentation', description: 'REST APIs for messaging, webhooks, and data synchronization.' },
      { name: 'Webhooks & Events', href: '/developers/webhooks', description: 'Real-time event subscriptions and callback delivery.' },
    ],
  },
} as const
