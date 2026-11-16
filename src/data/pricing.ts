/**
 * PulseQuo Pricing Structure Data
 * Production-ready enterprise tiers with transparent feature matrices and Contact Sales / Custom Quote models.
 */

export interface PricingPlan {
  id: string
  name: string
  category: string
  badge?: string
  description: string
  priceDisplay: string
  priceSubtext: string
  popular?: boolean
  features: string[]
  limitsInfo: string
  ctaText: string
  ctaHref: string
}

export const pricingPlans: PricingPlan[] = [
  {
    id: 'comm-cloud',
    name: 'Communication Cloud',
    category: 'CPaaS & Messaging',
    badge: 'High Throughput',
    description: 'For organizations needing carrier-grade WhatsApp Business API, SMS gateway, and unified omnichannel routing.',
    priceDisplay: 'Tailored by Volume',
    priceSubtext: 'Direct carrier pass-through rates + platform throughput fee',
    features: [
      'Official WhatsApp Business Platform API access',
      'DLT-compliant transactional & promotional SMS gateway',
      'High-speed SMPP v3.4 connectivity support',
      'Omnichannel team inbox with multi-agent assignment',
      'Template manager & broadcast campaign scheduling',
      'Real-time delivery receipts (DLR) & webhook callbacks',
      'Interactive quick-replies, buttons, and media templates',
      'Standard email & webhook technical support',
    ],
    limitsInfo: 'Custom throughput tier based on monthly message volume (OTPs, notifications, and marketing).',
    ctaText: 'Get Volume Pricing',
    ctaHref: '/book-demo?product=Communication+Cloud',
  },
  {
    id: 'sales-crm',
    name: 'Sales CRM',
    category: 'Revenue & Pipeline',
    badge: 'Deal Velocity',
    description: 'For growing sales teams managing leads, pipeline stages, and multi-channel customer communications.',
    priceDisplay: 'Contact Sales',
    priceSubtext: 'Billed per seat / month with annual commitment discounts',
    features: [
      'Multi-source lead capture (WhatsApp, chat, forms, API)',
      'Customizable sales pipeline Kanban stages',
      'Centralized contact database with interaction history',
      'Follow-up reminders and scheduled sales tasks',
      'One-click WhatsApp & SMS communication from contact cards',
      'Automated lead qualification and round-robin routing',
      'Sales performance, conversion, and response time reports',
      'HubSpot CRM bi-directional synchronization',
    ],
    limitsInfo: 'Tiered based on active sales rep seats and contact volume.',
    ctaText: 'Talk to Sales',
    ctaHref: '/book-demo?product=Sales+CRM',
  },
  {
    id: 'support-crm',
    name: 'Support CRM',
    category: 'Customer Service',
    badge: 'Omnichannel Helpdesk',
    description: 'For customer service teams managing multi-channel inquiries, SLA compliance, and agent productivity.',
    priceDisplay: 'Contact Sales',
    priceSubtext: 'Flexible agent seat licensing with volume support',
    features: [
      'Multi-channel ticket creation from WhatsApp, web chat, and email',
      'Configurable SLA policies for response and resolution times',
      'Agent availability states, skill queues, and work distribution',
      'Bot-to-human seamless conversation handoff',
      'Internal notes and collaborative ticket mentions',
      'Integrated knowledge base article repository',
      'First Contact Resolution (FCR) and handle time analytics',
      'Customer history timeline across past tickets',
    ],
    limitsInfo: 'Priced per support agent seat with unlimited customer ticket archiving.',
    ctaText: 'Request Support Demo',
    ctaHref: '/book-demo?product=Support+CRM',
  },
  {
    id: 'unified-platform',
    name: 'Unified Business Platform',
    category: 'All-In-One Suite',
    badge: 'Most Popular',
    popular: true,
    description: 'The complete PulseQuo suite uniting Communication Cloud, Sales CRM, Support CRM, and AI & Automation.',
    priceDisplay: 'Custom Enterprise Suite',
    priceSubtext: 'Consolidated software licensing with priority onboarding',
    features: [
      'Everything in Communication Cloud, Sales CRM & Support CRM',
      'Visual Flow Builder with drag-and-drop conversational branching',
      'Autonomous AI conversational agents powered by Claude / OpenAI',
      'Model Context Protocol (MCP) tool server connectivity',
      'Document RAG knowledge grounding from company PDFs & docs',
      'Automated cross-channel workflow triggers and webhooks',
      'Shared team workspace with cross-departmental handoffs',
      'Dedicated Customer Success Manager and onboarding engineer',
    ],
    limitsInfo: 'Custom package structured for high-growth businesses seeking total platform unification.',
    ctaText: 'Request Platform Walkthrough',
    ctaHref: '/book-demo?product=Complete+PulseQuo+Platform',
  },
  {
    id: 'enterprise-custom',
    name: 'Enterprise / Custom Deployment',
    category: 'Bespoke Infrastructure',
    badge: 'Dedicated SLA',
    description: 'For large enterprises requiring dedicated infrastructure, customized carrier routes, and bespoke integrations.',
    priceDisplay: 'Custom Contract',
    priceSubtext: 'Dedicated infrastructure with enterprise SLA guarantees',
    features: [
      'Dedicated tenant isolation or on-premises deployment options',
      'Custom carrier trunk routing and direct operator agreements',
      '99.95% uptime Service Level Agreement (SLA)',
      'Custom Model Context Protocol (MCP) server development',
      'Single Sign-On (SSO / SAML) and enterprise access audit logs',
      'Strict data residency and compliance consulting',
      '24/7 priority emergency telephone and Slack engineering support',
      'Quarterly executive business reviews and roadmap prioritization',
    ],
    limitsInfo: 'Tailored to enterprise security, compliance, and multi-million message throughput demands.',
    ctaText: 'Contact Enterprise Team',
    ctaHref: '/contact',
  },
]

export const pricingComparisonCategories = [
  {
    category: 'Core Capabilities',
    features: [
      { name: 'Unified Omnichannel Inbox', comm: true, sales: true, support: true, unified: true, enterprise: true },
      { name: 'Official WhatsApp Business API', comm: true, sales: 'Add-on', support: 'Add-on', unified: true, enterprise: true },
      { name: 'DLT-Compliant SMS Gateway', comm: true, sales: 'Add-on', support: 'Add-on', unified: true, enterprise: true },
      { name: 'Visual Flow Builder', comm: false, sales: false, support: false, unified: true, enterprise: true },
      { name: 'AI Autonomous Agents & MCP', comm: false, sales: false, support: 'Tier-1 AI', unified: true, enterprise: true },
    ],
  },
  {
    category: 'Sales & Pipeline',
    features: [
      { name: 'Custom Deal Pipelines', comm: false, sales: true, support: false, unified: true, enterprise: true },
      { name: 'Automated Lead Qualification', comm: false, sales: true, support: false, unified: true, enterprise: true },
      { name: 'Follow-up Task Scheduling', comm: false, sales: true, support: false, unified: true, enterprise: true },
      { name: 'Sales Revenue Forecasting', comm: false, sales: true, support: false, unified: true, enterprise: true },
    ],
  },
  {
    category: 'Customer Support',
    features: [
      { name: 'Multi-Channel Ticketing', comm: false, sales: false, support: true, unified: true, enterprise: true },
      { name: 'SLA Response & Resolution Timers', comm: false, sales: false, support: true, unified: true, enterprise: true },
      { name: 'Agent Availability & Skill Routing', comm: false, sales: false, support: true, unified: true, enterprise: true },
      { name: 'Knowledge Base Article Library', comm: false, sales: false, support: true, unified: true, enterprise: true },
    ],
  },
  {
    category: 'Security & Governance',
    features: [
      { name: 'Role-Based Access Control (RBAC)', comm: true, sales: true, support: true, unified: true, enterprise: true },
      { name: 'Two-Factor Authentication', comm: true, sales: true, support: true, unified: true, enterprise: true },
      { name: 'HMAC Webhook Signatures', comm: true, sales: true, support: true, unified: true, enterprise: true },
      { name: 'Single Sign-On (SAML / SSO)', comm: false, sales: false, support: false, unified: 'Available', enterprise: true },
      { name: 'Dedicated Infrastructure', comm: false, sales: false, support: false, unified: false, enterprise: true },
    ],
  },
]
