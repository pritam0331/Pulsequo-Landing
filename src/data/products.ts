/**
 * PulseQuo Product Catalog Data
 * Comprehensive details, features, architecture, use cases, and technical specs.
 */

export interface ProductFeature {
  title: string
  description: string
  implemented: boolean
  tag?: string
}

export interface ProductModule {
  id: string
  name: string
  headline: string
  description: string
  features: ProductFeature[]
}

export interface ProductDetail {
  id: 'communication-cloud' | 'sales-crm' | 'support-crm' | 'ai-automation'
  slug: string
  title: string
  badge: string
  tagline: string
  heroHeadline: string
  heroDescription: string
  summary: string
  modules: ProductModule[]
  benefits: { title: string; description: string; stat?: string }[]
  useCases: { role: string; challenge: string; solution: string }[]
  faqs: { question: string; answer: string }[]
}

export const productsData: Record<string, ProductDetail> = {
  'communication-cloud': {
    id: 'communication-cloud',
    slug: 'communication-cloud',
    title: 'Communication Cloud',
    badge: 'Enterprise CPaaS & Omnichannel',
    tagline: 'Every Conversation. One Powerful Communication Platform.',
    heroHeadline: 'Every Conversation. One Powerful Communication Platform.',
    heroDescription:
      'Scale your customer reach across WhatsApp Business Platform, high-throughput SMS gateways, business email, and voice. Centralize all customer dialogues into an unified omnichannel inbox with automated channel routing.',
    summary:
      'PulseQuo Communication Cloud bridges the gap between disconnected carrier networks, messaging APIs, and enterprise customer service, giving your team a single operational console.',
    modules: [
      {
        id: 'whatsapp-business-api',
        name: 'WhatsApp Business API',
        headline: 'Official WhatsApp Platform Connectivity',
        description:
          'Connect directly via Meta Cloud API or On-Premises Business Solution Providers for verified green-badge communication, interactive buttons, rich media, and 24-hour customer care sessions.',
        features: [
          { title: 'Official Meta Platform Connectivity', description: 'Enterprise-grade uptime and direct API compliance with WhatsApp policies.', implemented: true },
          { title: 'Rich Media & Interactive Templates', description: 'Quick-reply buttons, call-to-action buttons, lists, carousel headers, and catalogs.', implemented: true },
          { title: 'Broadcast Campaign Manager', description: 'Segment audiences and broadcast verified marketing, utility, and authentication templates.', implemented: true },
          { title: 'Delivery & Read Tracking', description: 'Real-time webhook events for sent, delivered, read, and failed statuses with error diagnosis.', implemented: true },
          { title: 'Multi-Account Management', description: 'Manage multiple WhatsApp Business Phone Numbers (WABA) under one enterprise console.', implemented: true },
        ],
      },
      {
        id: 'sms-gateway',
        name: 'SMS Gateway & DLT Engine',
        headline: 'Carrier-Grade Bulk & Transactional SMS',
        description:
          'High-speed SMS routing engine built for transactional alerts, OTP passcodes, and targeted promotional broadcasts with native Telecom Regulatory Authority (TRAI) DLT compliance.',
        features: [
          { title: 'Transactional & OTP Routes', description: 'Sub-second latency with prioritized carrier bands for mission-critical OTPs and security alerts.', implemented: true },
          { title: 'Promotional Bulk Messaging', description: 'Scheduled high-volume promotional runs with time-window filtering and dynamic personalization tags.', implemented: true },
          { title: 'DLT Compliance Workflows', description: 'Indian carrier entity registration, sender ID (Header) binding, and template matching.', implemented: true, tag: 'India Telecom Compliant' },
          { title: 'SMPP v3.4 Connectivity', description: 'Direct Short Message Peer-to-Peer protocol sessions for telecom aggregators and enterprise switches.', implemented: true },
          { title: 'Detailed Delivery Analytics', description: 'Real-time DLR (Delivery Receipts), operator error code categorization, and retry mechanisms.', implemented: true },
        ],
      },
      {
        id: 'omnichannel-inbox',
        name: 'Omnichannel Team Inbox',
        headline: 'Unified Multi-Channel Agent Workspace',
        description:
          'Consolidate WhatsApp, SMS, web live chat, and incoming inquiries into a real-time collaborative workspace with automated conversation assignment, internal notes, and AI co-pilots.',
        features: [
          { title: 'Centralized Customer Timeline', description: 'Unified customer view across all channels with full message history and past touchpoints.', implemented: true },
          { title: 'Intelligent Routing & Assignment', description: 'Route incoming chats based on agent skills, availability status, round-robin, or customer account tier.', implemented: true },
          { title: 'Internal Collaboration & Mentions', description: 'Private internal notes, teammate tagging, and cross-departmental escalations without customer visibility.', implemented: true },
          { title: 'Quick Canned Responses', description: 'Keyboard shortcuts and standardized answers to answer frequent questions consistently.', implemented: true },
        ],
      },
      {
        id: 'email-voice',
        name: 'Email & Voice Communication',
        headline: 'Transactional Email & Cloud Voice Services',
        description:
          'Complement instant messaging with high-deliverability transactional emails, system notifications, and integrated cloud telephony hooks.',
        features: [
          { title: 'Transactional Email Delivery', description: 'DKIM, SPF, and DMARC verified sender infrastructure for account notifications, invoices, and password resets.', implemented: true },
          { title: 'Dynamic Email HTML Templates', description: 'Responsive email design templates with variable substitution and click-through tracking.', implemented: true },
          { title: 'Voice API & Telephony Hooks', description: 'Webhooks for click-to-call, call recording callbacks, IVR routing, and agent call logs.', implemented: true, tag: 'Supported via Telephony APIs' },
        ],
      },
      {
        id: 'api-webhooks',
        name: 'Developer APIs & Real-time Webhooks',
        headline: 'Programmable Communications Infrastructure',
        description:
          'Integrate messaging capabilities into your proprietary software, mobile apps, or backend CRM in minutes using RESTful APIs and secure event webhooks.',
        features: [
          { title: 'RESTful Messaging API', description: 'JSON-based HTTP endpoints for sending messages, querying balances, and managing templates.', implemented: true },
          { title: 'Bidirectional Webhooks', description: 'Receive inbound customer replies, status updates, and opt-out notifications with HMAC signature validation.', implemented: true },
          { title: 'Rate Limiting & Queueing', description: 'Automatic buffering and backpressure handling for high-throughput messaging bursts.', implemented: true },
        ],
      },
    ],
    benefits: [
      { title: '3x Faster Response Velocity', description: 'Unify incoming channels so agents never have to juggle multiple browser tabs or disconnected phones.' },
      { title: 'Enterprise DLT & Meta Compliance', description: 'Pre-validated template verification prevents message rejections, spam flagging, and account bans.' },
      { title: 'High Throughput & Resilient Routing', description: 'Carrier failover and intelligent routing ensure critical OTPs and transactional notifications deliver without delay.' },
      { title: 'End-to-End Delivery Visibility', description: 'Gain granular delivery telemetry from carrier handover to handset acknowledgment.' },
    ],
    useCases: [
      {
        role: 'High-Volume E-Commerce',
        challenge: 'Sending order confirmations, tracking alerts, and delivery OTPs across WhatsApp and SMS reliably.',
        solution: 'PulseQuo automates template-based WhatsApp shipping updates and falls back to SMS OTP if data network is unavailable.',
      },
      {
        role: 'Financial & FinTech Services',
        challenge: 'Strict regulatory compliance, instant 2FA authentication, and zero-leakage transactional logging.',
        solution: 'DLT-registered SMPP channels and audited REST APIs ensure high deliverability with strict access controls.',
      },
    ],
    faqs: [
      {
        question: 'How do we connect our WhatsApp Business number to PulseQuo?',
        answer: 'PulseQuo integrates with official Meta Cloud API and BSP partners. You can onboard your verified Facebook Business Manager and existing phone number directly through our dashboard.',
      },
      {
        question: 'Is PulseQuo compliant with Indian DLT regulations for SMS?',
        answer: 'Yes. PulseQuo provides native DLT template headers and entity registration binding, ensuring all transactional and promotional messages adhere to TRAI guidelines.',
      },
      {
        question: 'Can multiple agents respond to customer chats simultaneously?',
        answer: 'Yes. The Omnichannel Inbox supports team seats with custom roles (Admin, Manager, Agent), department queues, and automatic assignment rules.',
      },
    ],
  },

  'sales-crm': {
    id: 'sales-crm',
    slug: 'sales-crm',
    title: 'Sales CRM',
    badge: 'Lead & Pipeline Management',
    tagline: 'Turn Every Lead Into an Opportunity.',
    heroHeadline: 'Turn Every Lead Into an Opportunity.',
    heroDescription:
      'Manage your entire sales journey from acquisition to deal closure. Capture leads from chat widgets, WhatsApp, social channels, and APIs, track customizable pipeline stages, and automate follow-ups.',
    summary:
      'PulseQuo Sales CRM combines conversational context with structured deal pipelines, eliminating data silos between communications and sales operations.',
    modules: [
      {
        id: 'lead-management',
        name: 'Lead Capture & Enrichment',
        headline: 'Automated Multi-Channel Lead Ingestion',
        description:
          'Capture qualified leads automatically from incoming WhatsApp inquiries, website chat flows, appointment bookings, and public webhooks with zero manual data entry.',
        features: [
          { title: 'Multi-Source Lead Capture', description: 'Instant ingestion from chat widgets, inbound messages, landing page forms, and webhook integrations.', implemented: true },
          { title: 'Intelligent Lead Assignment', description: 'Distribute new prospects to sales reps based on geography, product interest, deal value, or round-robin.', implemented: true },
          { title: 'Lead Status & Lifecycle Stages', description: 'Track leads from New, Contacted, Qualified, Demo Scheduled, to Proposal and Won/Lost.', implemented: true },
          { title: 'Full Activity Timeline', description: 'Every phone call, WhatsApp conversation, email exchange, and meeting automatically logged to the lead record.', implemented: true },
        ],
      },
      {
        id: 'pipeline-management',
        name: 'Deal & Pipeline Management',
        headline: 'Visual Kanban Deal Stages & Revenue Forecasting',
        description:
          'Customize multiple sales pipelines for different business units, visualize deal progression, estimate weighted revenue, and spot bottlenecks before they hurt quarterly goals.',
        features: [
          { title: 'Custom Sales Pipelines', description: 'Tailor pipeline stages to match your enterprise B2B sales cycles or rapid inbound transactional flows.', implemented: true },
          { title: 'Deal Value & Probability Tracking', description: 'Assign currency values and win probabilities to calculate weighted sales forecasts accurately.', implemented: true },
          { title: 'Stagnant Deal Alerts', description: 'Visual indicators when a deal sits in a single stage longer than defined SLA thresholds.', implemented: true },
        ],
      },
      {
        id: 'task-activity',
        name: 'Task & Follow-Up Automation',
        headline: 'Never Let a High-Value Lead Go Cold',
        description:
          'Schedule automated follow-up reminders, task assignments, meeting invitations, and automated WhatsApp nudges when prospects pause responding.',
        features: [
          { title: 'Follow-Up Task Reminders', description: 'Automated calendar and notification reminders for reps to follow up at the agreed time.', implemented: true },
          { title: 'One-Click Communication', description: 'Initiate WhatsApp chats, send SMS templates, or dispatch emails directly from the contact card.', implemented: true },
          { title: 'Meeting & Demo Scheduling', description: 'Sync booking calendar links directly into chat conversations for automated calendar invites.', implemented: true },
        ],
      },
      {
        id: 'sales-analytics',
        name: 'Sales Performance & Analytics',
        headline: 'Real-Time Visibility into Revenue & Rep Efficiency',
        description:
          'Understand which channels drive the highest conversion rates, monitor individual rep response times, and identify revenue trends over 7, 30, and 90-day windows.',
        features: [
          { title: 'Conversion Funnel Reports', description: 'Analyze drop-offs from lead capture to proposal signed to optimize your sales funnel.', implemented: true },
          { title: 'Rep Response Time Telemetry', description: 'Monitor how quickly your sales agents respond to inbound customer inquiries.', implemented: true },
          { title: 'Win/Loss Reason Analysis', description: 'Capture structured loss reasons to refine product packaging, pricing, and positioning.', implemented: true },
        ],
      },
    ],
    benefits: [
      { title: '40% Reduction in Lead Response Time', description: 'Instant multi-channel routing brings response latency down from hours to seconds.' },
      { title: 'Zero Lost Opportunities', description: 'Every chat, form submission, and inbound call is permanently saved with full historical context.' },
      { title: 'Synchronized Communications', description: 'Sales reps see the full AI conversation history before jumping onto a discovery call.' },
      { title: 'Predictable Revenue Forecasting', description: 'Clear pipeline visibility allows founders and sales leaders to forecast cash flow with confidence.' },
    ],
    useCases: [
      {
        role: 'B2B Software & SaaS',
        challenge: 'Sales reps wasting 20% of their day manually copying contact details from chat into separate CRM tools.',
        solution: 'PulseQuo captures lead details through AI pre-qualification flows and places them directly into the sales pipeline.',
      },
      {
        role: 'Real Estate & High-Ticket Consulting',
        challenge: 'Slow initial response to buyers causes them to reach out to competing brokerages.',
        solution: 'Instant automated WhatsApp qualification with direct appointment booking straight into the CRM calendar.',
      },
    ],
    faqs: [
      {
        question: 'Can we create custom fields for our leads and deals?',
        answer: 'Yes, PulseQuo supports custom properties such as industry, annual budget, preferred communication channel, and customized qualification tags.',
      },
      {
        question: 'How does PulseQuo Sales CRM integrate with WhatsApp?',
        answer: 'Incoming WhatsApp chats can automatically create or update lead records. Sales reps can message leads directly from the CRM interface without switching windows.',
      },
      {
        question: 'Can we import existing customer data from our old CRM?',
        answer: 'Yes, PulseQuo provides standard CSV import tools and developer REST APIs to migrate your existing contacts, companies, and historical records.',
      },
    ],
  },

  'support-crm': {
    id: 'support-crm',
    slug: 'support-crm',
    title: 'Customer Support CRM',
    badge: 'Ticketing & Omnichannel Helpdesk',
    tagline: 'Deliver Customer Support That Builds Loyalty.',
    heroHeadline: 'Deliver Customer Support That Builds Loyalty.',
    heroDescription:
      'Manage customer inquiries, support tickets, agent work queues, and multi-channel conversations through one centralized helpdesk platform with automated SLA tracking and knowledge bases.',
    summary:
      'PulseQuo Support CRM blends automated AI resolution with human agent efficiency, ensuring customer issues are resolved quickly with zero channel switching.',
    modules: [
      {
        id: 'ticket-management',
        name: 'Multi-Channel Ticket Lifecycle',
        headline: 'Unified Ticket Workflow from Creation to Resolution',
        description:
          'Convert customer messages from WhatsApp, email, web chat, and SMS into organized support tickets with configurable priorities, tags, and status tracking.',
        features: [
          { title: 'Automated Ticket Generation', description: 'Inbound messages can trigger new ticket creation or automatically thread into existing open issues.', implemented: true },
          { title: 'Priority & Severity Tiers', description: 'Classify issues as Low, Medium, High, or Urgent with distinct visual cues and escalation timers.', implemented: true },
          { title: 'Custom Ticket Categories', description: 'Organize tickets by Billing, Technical Bug, Product Inquiry, Account Access, or Feedback.', implemented: true },
          { title: 'Audit Trail & Event Log', description: 'Full chronological record of every status transition, agent assignment, and note.', implemented: true },
        ],
      },
      {
        id: 'agent-collaboration',
        name: 'Agent Management & Work Queues',
        headline: 'Optimize Support Team Productivity & Workload',
        description:
          'Distribute support tickets intelligently across specialized teams, monitor agent availability, and support seamless co-piloting between human agents and AI assistants.',
        features: [
          { title: 'Skill-Based Routing', description: 'Direct complex technical queries to Level-2 engineers and billing questions to the accounts department.', implemented: true },
          { title: 'Real-Time Availability States', description: 'Track whether agents are Active, Busy, Away, or Offline to prevent unassigned bottlenecks.', implemented: true },
          { title: 'Bot-to-Human Handover', description: 'AI chatbot transfers context-rich transcripts to human agents instantly when issues exceed bot capabilities.', implemented: true },
          { title: 'Internal Discussion Notes', description: 'Collaborate within the ticket thread without exposing internal troubleshooting to the customer.', implemented: true },
        ],
      },
      {
        id: 'sla-knowledge',
        name: 'SLA Engine & Knowledge Base',
        headline: 'Enforce Service Commitments & Enable Self-Service',
        description:
          'Set up Service Level Agreements (SLAs) for First Response Time (FRT) and Resolution Time. Empower customers with searchable knowledge articles to deflect repetitive tickets.',
        features: [
          { title: 'Configurable SLA Policies', description: 'Define response time targets based on customer tier (Enterprise, Standard) and ticket urgency.', implemented: true },
          { title: 'Knowledge Base Article Library', description: 'Host customer-facing FAQs and internal agent resolution playbooks in Markdown format.', implemented: true },
          { title: 'AI-Powered Article Retrieval', description: 'AI agents automatically search knowledge documents to supply instant, verified answers.', implemented: true },
        ],
      },
      {
        id: 'support-reporting',
        name: 'Helpdesk Analytics & CSAT',
        headline: 'Comprehensive Support Metrics & Quality Insights',
        description:
          'Measure team health with granular reports on ticket volume, resolution times, agent workload distribution, and recurring customer complaints.',
        features: [
          { title: 'First Contact Resolution (FCR)', description: 'Track the percentage of customer queries resolved without requiring secondary follow-ups.', implemented: true },
          { title: 'Average Handle Time (AHT)', description: 'Measure time spent per customer conversation to identify training opportunities.', implemented: true },
          { title: 'Top Question & Keyword Clustering', description: 'Identify emerging product bugs and common confusion points in real-time.', implemented: true },
        ],
      },
    ],
    benefits: [
      { title: '60% Faster Ticket Resolution', description: 'AI provides agents with relevant knowledge base snippets and drafted replies instantly.' },
      { title: '24/7 Always-On First Response', description: 'AI bots acknowledge tickets immediately and solve common Tier-1 queries after business hours.' },
      { title: 'Unified Customer History', description: 'Agents see previous purchases, past tickets, and conversation transcripts on a single screen.' },
      { title: 'Strict SLA Adherence', description: 'Automated warnings notify managers before tickets breach contractual resolution guarantees.' },
    ],
    useCases: [
      {
        role: 'Consumer Tech & Retail Support',
        challenge: 'Seasonal ticket spikes overwhelm support teams, causing long response queues on WhatsApp and email.',
        solution: 'PulseQuo AI resolves common return, delivery, and warranty status inquiries automatically, routing only edge cases to agents.',
      },
      {
        role: 'Enterprise SaaS Helpdesk',
        challenge: 'Maintaining enterprise SLAs with dedicated account managers across global timezones.',
        solution: 'Automated priority queues, SLA escalation timers, and bi-directional integration with developer webhook systems.',
      },
    ],
    faqs: [
      {
        question: 'What channels does the Support CRM support?',
        answer: 'PulseQuo unifies WhatsApp Business, SMS, website chat widgets, and email into a single ticketing interface.',
      },
      {
        question: 'How does the bot hand over a ticket to a human agent?',
        answer: 'When a customer requests a human agent or the AI detects high sentiment frustration, the system dispatches a [HANDOFF_TO_HUMAN] event and alerts online support agents.',
      },
      {
        question: 'Can we upload private internal documentation for agents?',
        answer: 'Yes, PulseQuo Knowledge Base allows categorizing documentation as public (searchable by AI and customers) or internal (restricted to agent reference).',
      },
    ],
  },

  'ai-automation': {
    id: 'ai-automation',
    slug: 'ai-automation',
    title: 'AI & Automation Engine',
    badge: 'Visual Flow Builder & Autonomous Agents',
    tagline: 'Make Your Business Smarter with AI.',
    heroHeadline: 'Make Your Business Smarter with AI.',
    heroDescription:
      'Automate mission-critical workflows with zero-code visual flow builders, autonomous conversational AI agents, intelligent lead scoring, and Model Context Protocol (MCP) tool integrations.',
    summary:
      'PulseQuo AI & Automation empowers non-technical operators and engineers alike to design complex multi-step dialog flows, query backend databases, and execute actions autonomously.',
    modules: [
      {
        id: 'flow-builder',
        name: 'Visual Flow Builder',
        headline: 'Drag-and-Drop Decision Trees & Conversational Logic',
        description:
          'Design interactive conversational flows visually with decision branching, buttons, condition checks, keyword listeners, and external API webhooks.',
        features: [
          { title: 'Node-Based Canvas', description: 'Visual drag-and-drop workspace built on React Flow for building customer interaction journeys.', implemented: true },
          { title: 'Dynamic Branching & Conditions', description: 'Route customers based on user attributes, message sentiment, previous answers, or time of day.', implemented: true },
          { title: 'Interactive Message Nodes', description: 'Configure WhatsApp buttons, quick replies, list pickers, and rich media cards visually.', implemented: true },
          { title: 'Live Test Sandbox', description: 'Test and debug draft flows in a simulated browser playground before publishing to live channels.', implemented: true },
        ],
      },
      {
        id: 'ai-agents-mcp',
        name: 'Autonomous AI Agents & MCP Servers',
        headline: 'LLM Agents Powered by Model Context Protocol',
        description:
          'Equip intelligent Claude and OpenAI agents with real-world business tools via standard Model Context Protocol (MCP) servers, enabling secure CRM lookups and live actions.',
        features: [
          { title: 'State-of-the-Art LLM Support', description: 'Native support for Anthropic Claude and OpenAI models with configurable temperature and guardrails.', implemented: true },
          { title: 'Model Context Protocol (MCP)', description: 'Connect external tool servers (Leads DB, Appointment Calendars, Custom REST APIs) securely.', implemented: true },
          { title: 'Document RAG Knowledge Grounding', description: 'Ground responses in your uploaded PDFs, DOCX files, and manuals to prevent hallucination.', implemented: true },
          { title: 'Tool Execution Safeguards', description: 'Deterministic validation before executing high-impact actions like updating billing records.', implemented: true },
        ],
      },
      {
        id: 'lead-qualification-ai',
        name: 'AI Lead Qualification & Scoring',
        headline: 'Automated Prospect Scoring in Natural Language',
        description:
          'Let AI conversationally ask qualifying questions (budget, timeline, company size), confirm contact details, and calculate lead readiness before human handoff.',
        features: [
          { title: 'Natural Language Fact Extraction', description: 'Extracts names, emails, phone numbers, and requirements even from casual, unstructured responses.', implemented: true },
          { title: 'Confirmation Verification Step', description: 'Summarizes captured details back to the user for one-tap verification before creating CRM records.', implemented: true },
          { title: 'Automated Lead Routing', description: 'Instantly dispatches hot leads to available sales reps via SMS/WhatsApp alerts and CRM tasks.', implemented: true },
        ],
      },
      {
        id: 'workflow-triggers',
        name: 'Event-Driven Workflows & Webhooks',
        headline: 'Connect PulseQuo to Your Entire Enterprise Stack',
        description:
          'Trigger automated actions based on conversation events, lead creation, appointment confirmations, payment notifications, and custom webhook callbacks.',
        features: [
          { title: 'Configurable Webhook Events', description: 'Subscribe to message.sent, lead.created, appointment.booked, and conversation.handoff.', implemented: true },
          { title: 'Payload Transformation', description: 'Format webhook JSON payloads to match Zapier, Make, HubSpot, Salesforce, or proprietary APIs.', implemented: true },
          { title: 'Automated Drip Follow-ups', description: 'Schedule timed re-engagement messages after 1 hour, 24 hours, or 3 days of customer silence.', implemented: true },
        ],
      },
    ],
    benefits: [
      { title: '85% Deflection of Repetitive Queries', description: 'Allow AI agents to handle standard pricing queries, opening hours, and status lookups automatically.' },
      { title: 'Standardized Model Context Protocol', description: 'Plug-and-play architecture allows plugging in new enterprise database tools without re-coding bots.' },
      { title: 'Zero Hallucination Guardrails', description: 'Strict fallback to human agents whenever the bot encounters ambiguous or out-of-scope requests.' },
      { title: 'No-Code Agility for Growth Teams', description: 'Update marketing bot copy and branching logic in seconds without requiring developer sprints.' },
    ],
    useCases: [
      {
        role: 'Healthcare & Appointment Scheduling',
        challenge: 'Patients needing to book, reschedule, or cancel consultations across WhatsApp without phone queues.',
        solution: 'PulseQuo AI agent checks calendar availability via MCP tools, books the slot, and sends calendar invites automatically.',
      },
      {
        role: 'Education & EdTech Admissions',
        challenge: 'Evaluating hundreds of student queries daily regarding course eligibility, fees, and batch schedules.',
        solution: 'Visual flows qualify prospective students, collect test scores, and route top candidates directly to admission counselors.',
      },
    ],
    faqs: [
      {
        question: 'What is Model Context Protocol (MCP) in PulseQuo?',
        answer: 'MCP is an open standard that allows PulseQuo AI agents to safely read from and write to external tools (like checking a database or booking an appointment) in a modular, sandboxed way.',
      },
      {
        question: 'Does the AI need technical coding to build flows?',
        answer: 'No. The Visual Flow Builder features an intuitive drag-and-drop interface where you can assemble decision nodes, message bubbles, and actions without writing code.',
      },
      {
        question: 'Can we switch between Claude and OpenAI models?',
        answer: 'Yes, PulseQuo supports dynamic provider selection in Settings, allowing you to choose Anthropic Claude, OpenAI, or local demo modes.',
      },
    ],
  },
}
