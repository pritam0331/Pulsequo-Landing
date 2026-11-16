/**
 * PulseQuo Comprehensive FAQs Data
 * Real technical and business questions with clear answers for accordions and SEO FAQ schema.
 */

export interface FAQItem {
  id: string
  question: string
  answer: string
  category: 'Platform' | 'Communication' | 'CRM' | 'AI & Automation' | 'Security & Deployment'
}

export const generalFaqs: FAQItem[] = [
  {
    id: 'what-is-pulsequo',
    category: 'Platform',
    question: 'What is PulseQuo and how does it fit into our tech stack?',
    answer:
      'PulseQuo is an AI-powered enterprise customer experience platform that consolidates CPaaS communication (WhatsApp Business API, SMS, voice, email), sales CRM, customer support ticketing, and intelligent AI automation into a single unified console. It replaces fragmented point solutions with one coherent data and messaging hub.',
  },
  {
    id: 'do-we-keep-existing-numbers',
    category: 'Communication',
    question: 'Can we use our existing business phone number for WhatsApp and SMS?',
    answer:
      'Yes. You can onboard your existing landline or mobile numbers onto the official WhatsApp Business Platform (via Meta Cloud API) and register standard sender headers on Indian Telecom DLT portals for SMS broadcasting.',
  },
  {
    id: 'how-ai-agents-work',
    category: 'AI & Automation',
    question: 'How do PulseQuo AI agents avoid hallucinations when answering customer questions?',
    answer:
      'PulseQuo grounds AI responses using Retrieval-Augmented Generation (RAG) strictly tied to your uploaded company documents, PDFs, and knowledge articles. When an incoming question falls outside your documented knowledge or requires human judgment, the system executes a graceful handoff to your team.',
  },
  {
    id: 'what-is-mcp-support',
    category: 'AI & Automation',
    question: 'What is Model Context Protocol (MCP) and why is it important in PulseQuo?',
    answer:
      'Model Context Protocol is an open standard that allows LLMs to interact securely with external tools and databases. PulseQuo uses MCP servers for operations like checking booking schedules, reading lead status, or fetching order details without hardcoded backend integrations.',
  },
  {
    id: 'how-fast-is-onboarding',
    category: 'Platform',
    question: 'How quickly can our team get started with PulseQuo?',
    answer:
      'The website live chat widget can be deployed in minutes by adding a lightweight script tag. WhatsApp Business onboarding typically takes 24 to 48 hours for Meta verification and template approvals. Our solution engineers assist through every step of configuration.',
  },
  {
    id: 'data-privacy-security',
    category: 'Security & Deployment',
    question: 'How does PulseQuo handle data security and tenant isolation?',
    answer:
      'PulseQuo enforces strict multi-tenant data boundaries, encrypted database storage, role-based access controls (RBAC), and authenticated HTTPS API sessions. Enterprise customers can opt for dedicated tenant deployments with custom data retention policies.',
  },
  {
    id: 'dlt-compliance-india',
    category: 'Communication',
    question: 'How does PulseQuo handle Indian Telecom DLT compliance for SMS?',
    answer:
      'PulseQuo includes native DLT support, mapping your Principal Entity ID, registered sender headers, and pre-approved DLT content template IDs directly to your SMS campaigns and transactional triggers.',
  },
  {
    id: 'crm-sync-capabilities',
    category: 'CRM',
    question: 'Can PulseQuo synchronize customer data with our existing CRM?',
    answer:
      'Yes. PulseQuo features built-in HubSpot integration, bi-directional webhook callbacks for events like lead.created and conversation.handoff, and full REST API access for custom integrations.',
  },
]
