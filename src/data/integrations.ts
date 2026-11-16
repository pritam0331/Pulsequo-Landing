/**
 * PulseQuo Integrations Directory Data
 * Categorized by capability, with explicit implementation status labels.
 */

export interface IntegrationItem {
  id: string
  name: string
  category: 'Messaging' | 'CRM' | 'Email' | 'Voice' | 'Analytics' | 'Automation' | 'Developer APIs'
  description: string
  status: 'Live & Supported' | 'Supported via Webhook' | 'Integration via API' | 'Beta' | 'Available on Request'
  documentationUrl?: string
  highlights: string[]
}

export const integrationsData: IntegrationItem[] = [
  // Messaging
  {
    id: 'whatsapp-business',
    name: 'WhatsApp Business Platform',
    category: 'Messaging',
    description: 'Official Meta Cloud API connectivity for green-badge messaging, interactive buttons, and template broadcasts.',
    status: 'Live & Supported',
    documentationUrl: '/developers/api-documentation',
    highlights: ['Interactive quick-replies', 'Template campaign manager', 'Real-time DLR webhooks'],
  },
  {
    id: 'sms-smpp',
    name: 'Carrier SMS Gateway & SMPP',
    category: 'Messaging',
    description: 'Direct SMPP v3.4 and REST protocol integration with Indian telecom DLT compliance for OTPs and notifications.',
    status: 'Live & Supported',
    documentationUrl: '/developers/api-documentation',
    highlights: ['DLT entity & template binding', 'High-throughput OTP routing', 'Real-time operator delivery receipts'],
  },
  {
    id: 'web-chat-widget',
    name: 'Embeddable Web Chat Widget',
    category: 'Messaging',
    description: 'Lightweight JavaScript embed script (embed.js) providing real-time AI and human customer chat on any website.',
    status: 'Live & Supported',
    documentationUrl: '/developers/api-documentation',
    highlights: ['Zero-dependency script tag', 'Customizable brand colors', 'Persistent visitor sessions'],
  },
  {
    id: 'rcs-messaging',
    name: 'RCS Business Messaging',
    category: 'Messaging',
    description: 'Rich Communication Services protocol for interactive Android messaging with rich cards and verified sender badges.',
    status: 'Beta',
    documentationUrl: '/developers/webhooks',
    highlights: ['Verified sender branding', 'Rich cards and carousels', 'Dedicated webhook dispatcher'],
  },
  {
    id: 'instagram-messaging',
    name: 'Instagram Direct Messaging',
    category: 'Messaging',
    description: 'Connect incoming Instagram Direct inquiries and story replies directly to your PulseQuo team inbox.',
    status: 'Beta',
    documentationUrl: '/developers/webhooks',
    highlights: ['Inbound DM routing', 'Story mention notifications', 'Automated quick responses'],
  },

  // CRM
  {
    id: 'hubspot',
    name: 'HubSpot CRM',
    category: 'CRM',
    description: 'Bi-directional contact synchronization and conversation history push into HubSpot timeline records.',
    status: 'Live & Supported',
    documentationUrl: '/developers/api-documentation',
    highlights: ['Auto-create HubSpot contacts', 'Sync conversation transcripts', 'Deal timeline logging'],
  },
  {
    id: 'salesforce',
    name: 'Salesforce CRM',
    category: 'CRM',
    description: 'Push verified leads, conversation transcripts, and customer activity to Salesforce standard objects via webhooks.',
    status: 'Supported via Webhook',
    documentationUrl: '/developers/webhooks',
    highlights: ['Lead creation webhooks', 'Activity timeline synchronization', 'JSON payload mapping'],
  },
  {
    id: 'zoho-crm',
    name: 'Zoho CRM',
    category: 'CRM',
    description: 'Integrate PulseQuo lead capture flows and WhatsApp customer tickets into Zoho CRM modules.',
    status: 'Supported via Webhook',
    documentationUrl: '/developers/webhooks',
    highlights: ['Custom module mapping', 'Inbound lead webhook', 'Status synchronization'],
  },

  // Automation & AI
  {
    id: 'model-context-protocol',
    name: 'Model Context Protocol (MCP)',
    category: 'Automation',
    description: 'Open standard for connecting AI models to external tools, databases, and enterprise services safely.',
    status: 'Live & Supported',
    documentationUrl: '/developers/api-documentation',
    highlights: ['Sandboxed tool execution', 'Leads and appointments servers', 'Custom internal MCP connectors'],
  },
  {
    id: 'zapier-make',
    name: 'Zapier & Make (Integromat)',
    category: 'Automation',
    description: 'Connect PulseQuo webhook events to 5,000+ business applications using standardized JSON payloads.',
    status: 'Supported via Webhook',
    documentationUrl: '/developers/webhooks',
    highlights: ['Catch Hook triggers', 'Custom headers authentication', 'Instant event delivery'],
  },

  // Developer APIs
  {
    id: 'rest-api',
    name: 'PulseQuo RESTful Core API',
    category: 'Developer APIs',
    description: 'Full programmatic access to dispatch messages, query delivery telemetry, fetch leads, and trigger flows.',
    status: 'Live & Supported',
    documentationUrl: '/developers/api-documentation',
    highlights: ['JSON HTTP endpoints', 'API key authentication', 'Comprehensive Swagger schema'],
  },
  {
    id: 'webhooks-engine',
    name: 'Real-time Event Webhooks',
    category: 'Developer APIs',
    description: 'Secure, event-driven webhooks for message.sent, lead.created, appointment.booked, and handoff events.',
    status: 'Live & Supported',
    documentationUrl: '/developers/webhooks',
    highlights: ['HMAC SHA-256 signature verification', 'Automatic retry backoff', 'Endpoint health telemetry'],
  },

  // Email & Voice
  {
    id: 'email-gateways',
    name: 'SMTP & Transactional Email',
    category: 'Email',
    description: 'High-deliverability email dispatch for system notifications, billing receipts, and password resets.',
    status: 'Live & Supported',
    documentationUrl: '/developers/api-documentation',
    highlights: ['DKIM and SPF compliance', 'Custom HTML templates', 'Delivery event tracking'],
  },
  {
    id: 'cloud-telephony',
    name: 'Cloud Telephony & Voice APIs',
    category: 'Voice',
    description: 'Programmable voice webhooks for click-to-call, call recording callbacks, and agent routing.',
    status: 'Available on Request',
    documentationUrl: '/developers/api-documentation',
    highlights: ['Inbound call webhooks', 'Agent forwarding', 'Call duration logging'],
  },
]
