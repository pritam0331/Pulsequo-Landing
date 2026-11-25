/**
 * PulseQuo Pricing Structure Data
 * Production-ready tiered plans and comprehensive feature comparison matrix.
 */

export interface PricingPlanTier {
  id: 'starter' | 'growth' | 'enterprise'
  name: string
  badge?: string
  popular?: boolean
  targetAudience: string
  monthlyRate: number | 'Custom'
  annualRate: number | 'Custom'
  discountText: string
  features: string[]
  ctaText: string
  ctaHref: string
}

export const pricingTiers: PricingPlanTier[] = [
  {
    id: 'starter',
    name: 'Starter',
    targetAudience: 'For small businesses getting started with omnichannel automation',
    monthlyRate: 29,
    annualRate: 23,
    discountText: '20% discount applied',
    features: [
      '1,000 conversations / month',
      '1 WhatsApp Number',
      'Basic Analytics & Reporting',
      'Standard Email Support',
      'Visual Chatbot Builder',
      'Web Chat Widget',
    ],
    ctaText: 'Start Free Trial',
    ctaHref: '/book-demo?plan=starter',
  },
  {
    id: 'growth',
    name: 'Growth',
    badge: 'Most Popular',
    popular: true,
    targetAudience: 'For growing businesses expanding across multiple messaging channels',
    monthlyRate: 79,
    annualRate: 63,
    discountText: 'Save 20%',
    features: [
      '5,000 conversations / month',
      'WhatsApp + RCS + Web Chat',
      'Advanced Analytics & Handoff',
      'Priority 24/7 Support',
      'Full API Access & Webhooks',
      'HubSpot & Shopify Integrations',
      'Unlimited Broadcast Campaigns',
    ],
    ctaText: 'Start Free Trial',
    ctaHref: '/book-demo?plan=growth',
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    badge: 'Custom Scale',
    targetAudience: 'For large teams and enterprise organizations needing dedicated scale',
    monthlyRate: 'Custom',
    annualRate: 'Custom',
    discountText: 'Tailored SLAs & Volume Discounts',
    features: [
      'Unlimited Conversations',
      'All Messaging Channels',
      'Custom Integrations & APIs',
      'Dedicated Account Manager',
      'Custom SLA & Governance',
      'Single Sign-On (SSO / SAML)',
      'Onboarding & Training',
    ],
    ctaText: 'Book Enterprise Demo',
    ctaHref: '/book-demo?plan=enterprise',
  },
]

export const pricingAdditionalSupport = {
  headline: 'Not sure which plan is right for you?',
  description:
    'Book a free 1-on-1 demo with automation experts to build a custom plan tailored to business needs.',
  phone: '+91 98765 43210',
  email: 'support@chatsphere.com',
  ctaText: 'Book a Demo',
  ctaHref: '/book-demo',
}

export const pricingComparisonCategories = [
  {
    category: 'Messaging & Conversations',
    features: [
      { name: 'Monthly Included Conversations', starter: '1,000', growth: '5,000', enterprise: 'Unlimited' },
      { name: 'WhatsApp Business Numbers', starter: '1 Number', growth: 'Multiple Numbers', enterprise: 'Unlimited Trunks' },
      { name: 'Supported Channels', starter: 'WhatsApp & Web Chat', growth: 'WhatsApp + RCS + Web Chat', enterprise: 'All Channels (WhatsApp, RCS, SMS, Voice)' },
      { name: 'Broadcast & Outbound Campaigns', starter: 'Standard Queue', growth: 'Unlimited Campaigns', enterprise: 'High-Throughput Dedicated SMPP' },
    ],
  },
  {
    category: 'Automation & AI',
    features: [
      { name: 'Visual Chatbot Builder', starter: true, growth: true, enterprise: true },
      { name: 'Web Chat Widget', starter: true, growth: true, enterprise: true },
      { name: 'Bot-to-Human Live Handoff', starter: false, growth: true, enterprise: true },
      { name: 'Model Context Protocol (MCP) AI Agents', starter: false, growth: 'Standard Tools', enterprise: 'Bespoke Tool Server Development' },
    ],
  },
  {
    category: 'APIs & Ecosystem Integrations',
    features: [
      { name: 'REST APIs & Real-Time Webhooks', starter: 'Basic Webhooks', growth: 'Full API Access', enterprise: 'Custom Integrations & Triggers' },
      { name: 'HubSpot & Shopify Integrations', starter: false, growth: true, enterprise: true },
      { name: 'Salesforce & Custom Enterprise ERPs', starter: false, growth: false, enterprise: true },
    ],
  },
  {
    category: 'Support & Governance',
    features: [
      { name: 'Support SLA & Response Time', starter: 'Standard Email (24-48h)', growth: 'Priority 24/7 Response', enterprise: 'Dedicated Account Manager & Custom SLA' },
      { name: 'Single Sign-On (SSO / SAML)', starter: false, growth: false, enterprise: true },
      { name: 'Dedicated Onboarding & Team Training', starter: false, growth: false, enterprise: true },
      { name: 'Role-Based Access Control (RBAC)', starter: true, growth: true, enterprise: true },
    ],
  },
]
