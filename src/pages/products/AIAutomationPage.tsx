import { useState } from 'react';
import { Link } from 'react-router';
import { motion } from 'motion/react';
import {
  Activity,
  ArrowRight,
  Bot,
  CalendarCheck,
  Check,
  CheckCircle2,
  Code2,
  Copy,
  Cpu,
  ExternalLink,
  FileText,
  GitBranch,
  Layers,
  Lock,
  MessageSquare,
  ShieldCheck,
  Sparkles,
  Terminal,
  Workflow,
  Zap,
} from 'lucide-react';
import { SEO } from '../../components/common/SEO';
import { Breadcrumbs } from '../../components/common/Breadcrumbs';
import { BackgroundAnimation } from '../../components/common/BackgroundAnimation';
import { BrandCarousel } from '../../components/common/BrandCarousel';
import { CardFanout, type FanoutCard } from '../../components/common/CardFanout';
import { SectionHeading } from '../../components/common/SectionHeading';
import { HorizontalCardCarousel } from '../../components/common/HorizontalCardCarousel';
import { TestimonialsCarousel } from '../../components/common/TestimonialsCarousel';
import { FAQAccordion } from '../../components/common/FAQAccordion';
import { CTASection } from '../../components/common/CTASection';
import { CardSectionHydrator, CardGridSkeleton } from '../../components/common/CardSkeleton';
import type { FAQItem } from '../../data/faqs';

const easeOutCurve = [0.22, 1, 0.36, 1] as const;

const aiFanoutCards: FanoutCard[] = [
  {
    id: 'ai-lead-mcp',
    category: 'Autonomous Conversational AI',
    title: 'Inbound Lead Qualified via MCP',
    subtitle: 'Claude 3.5 Sonnet · Enterprise RAG',
    badge: '89% Autonomous',
    badgeColor: 'bg-purple-50 text-purple-700 border-purple-200',
    icon: Bot,
    iconColor: 'text-purple-600',
    iconBg: 'bg-purple-50 border-purple-200',
    description:
      'Extracted buyer intent and budget (₹2.4L/mo) conversationally on WhatsApp. Executed MCP tool to reserve slot on Google Calendar.',
    metric: '< 1.4s',
    metricLabel: 'Response Latency',
    channel: 'Gemini & Claude RAG',
    channelIconColor: 'text-purple-500',
    timestamp: 'Just now',
    accentBorder: 'hover:border-purple-500',
    gradientHeader: 'from-purple-600 to-indigo-600',
  },
  {
    id: 'support-sentinel',
    category: 'Tier-1 Ticket Deflection',
    title: 'Order Status & Return Sentinel',
    subtitle: 'Bluedart Logistics MCP Server',
    badge: 'Zero Hallucination',
    badgeColor: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    icon: Sparkles,
    iconColor: 'text-emerald-600',
    iconBg: 'bg-emerald-50 border-emerald-200',
    description:
      'Safely fetched courier tracking details via mTLS MCP bridge without hallucinating data. Generated instant WhatsApp return label.',
    metric: '78%',
    metricLabel: 'Auto Deflection',
    channel: 'Logistics MCP Tool',
    channelIconColor: 'text-emerald-500',
    timestamp: '2m ago',
    accentBorder: 'hover:border-emerald-500',
    gradientHeader: 'from-emerald-600 to-teal-600',
  },
  {
    id: 'salesforce-sync',
    category: 'CRM Tool Execution',
    title: 'Bi-Directional Opportunity Sync',
    subtitle: 'CreateDeal · opp_crm_44120',
    badge: '201 Created',
    badgeColor: 'bg-blue-50 text-blue-700 border-blue-200',
    icon: Code2,
    iconColor: 'text-blue-600',
    iconBg: 'bg-blue-50 border-blue-200',
    description:
      'Autonomous agent updated 14 fields in Salesforce CRM with contact phone, estimated seats, and conversational summary notes.',
    metric: '100%',
    metricLabel: 'Schema Verification',
    channel: 'Salesforce MCP Bridge',
    channelIconColor: 'text-blue-500',
    timestamp: '5m ago',
    accentBorder: 'hover:border-blue-500',
    gradientHeader: 'from-blue-600 to-indigo-600',
  },
  {
    id: 'visual-flow',
    category: 'Deterministic Journey',
    title: 'Visual Flow Runtime Engine',
    subtitle: 'Multi-Branch Conditional Routing',
    badge: 'Live Active',
    badgeColor: 'bg-amber-50 text-amber-700 border-amber-200',
    icon: GitBranch,
    iconColor: 'text-amber-600',
    iconBg: 'bg-amber-50 border-amber-200',
    description:
      'Drag-and-drop conversational designer compiled to deterministic JSON. Deploys seamlessly to WhatsApp, SMS, and website live chat.',
    metric: '0 Sprints',
    metricLabel: 'Engineering Cost',
    channel: 'Visual Flow Designer',
    channelIconColor: 'text-amber-500',
    timestamp: '12m ago',
    accentBorder: 'hover:border-amber-500',
    gradientHeader: 'from-amber-500 to-rose-500',
  },
];

const mcpServers = [
  {
    id: 'appointment-server',
    name: 'appointment-server',
    version: 'v1.4.2',
    transport: 'stdio / HTTPS (SSE)',
    tools: [
      {
        name: 'BookSlot',
        description:
          'Verifies calendar availability and reserves a dedicated demonstration slot.',
        inputSchema: {
          type: 'object',
          properties: {
            attendeeEmail: { type: 'string', format: 'email' },
            preferredSlotIso: { type: 'string', format: 'date-time' },
            topic: {
              type: 'string',
              enum: ['AI Demo', 'Enterprise Architecture', 'Billing'],
            },
            hostTeam: { type: 'string', default: 'solutions-engineering' },
          },
          required: ['attendeeEmail', 'preferredSlotIso'],
        },
        sampleOutput: {
          status: 'success',
          code: 200,
          reservationId: 'res_apt_9921',
          confirmedTime: '2026-11-20T14:30:00+05:30',
          calendarEventUrl: 'https://calendar.google.com/event?eid=cHVsXzk5Mg',
          assignedHost: 'Aarav Patel (Enterprise Solutions Architect)',
        },
      },
      {
        name: 'CheckAvailability',
        description:
          'Queries real-time calendar slots for solutions engineers across timezones.',
        inputSchema: {
          type: 'object',
          properties: {
            date: { type: 'string', format: 'date' },
            timezone: { type: 'string', default: 'Asia/Kolkata' },
          },
          required: ['date'],
        },
        sampleOutput: {
          date: '2026-11-20',
          availableSlots: [
            '11:00 AM IST',
            '02:30 PM IST',
            '04:00 PM IST',
            '06:30 PM IST',
          ],
        },
      },
    ],
  },
  {
    id: 'crm-sync-server',
    name: 'salesforce-crm-server',
    version: 'v2.1.0',
    transport: 'OAuth 2.0 / MCP HTTPS',
    tools: [
      {
        name: 'CreateDeal',
        description:
          'Creates or updates a B2B opportunity stage in CRM with AI qualification scores.',
        inputSchema: {
          type: 'object',
          properties: {
            contactPhone: { type: 'string' },
            companyName: { type: 'string' },
            estimatedSeats: { type: 'number' },
            qualificationScore: { type: 'number', minimum: 0, maximum: 100 },
          },
          required: ['contactPhone', 'companyName'],
        },
        sampleOutput: {
          status: 'created',
          code: 201,
          dealId: 'opp_crm_44120',
          pipeline: 'Enterprise Inbound Funnel',
          stage: 'Qualification Verified',
          syncedFields: 14,
        },
      },
    ],
  },
  {
    id: 'order-tracking-server',
    name: 'order-logistics-server',
    version: 'v1.1.8',
    transport: 'mTLS / REST MCP Bridge',
    tools: [
      {
        name: 'LookupShippingStatus',
        description:
          'Queries ERP and courier APIs for package dispatch telemetry and AWB tracking.',
        inputSchema: {
          type: 'object',
          properties: {
            orderNumber: { type: 'string' },
            customerPhone: { type: 'string' },
          },
          required: ['orderNumber'],
        },
        sampleOutput: {
          orderId: 'ORD-2026-8941',
          carrier: 'BlueDart Air Express',
          awbNumber: 'BLUED_99182310',
          currentStatus: 'OUT_FOR_DELIVERY',
          expectedDelivery: 'Today by 04:00 PM',
          deliveryAddressCity: 'Bengaluru, KA',
        },
      },
    ],
  },
];

const aiFaqs: FAQItem[] = [
  {
    id: 'ai-faq-1',
    category: 'AI & Automation',
    question:
      'What is Model Context Protocol (MCP) and why is it important in PulseQuo?',
    answer:
      'Model Context Protocol (MCP) is an open industry standard championed by Anthropic that allows AI agents to safely read from and write to external tools (such as live database lookups, calendar scheduling, and CRM syncing) via sandboxed, modular protocols. PulseQuo includes native MCP server support, meaning your agents can securely execute enterprise actions without hardcoded scripts.',
  },
  {
    id: 'ai-faq-2',
    category: 'AI & Automation',
    question:
      'How do PulseQuo AI agents avoid hallucinations when answering customer questions?',
    answer:
      'PulseQuo utilizes strict Retrieval-Augmented Generation (RAG) coupled with deterministic zero-hallucination guardrails. Responses are strictly grounded in your uploaded enterprise documents (PDFs, knowledge base articles, warranty policies). When a customer query falls outside the confidence threshold of your verified documents, the agent gracefully admits lack of data or triggers a human handoff.',
  },
  {
    id: 'ai-faq-3',
    category: 'AI & Automation',
    question:
      'Does our team need technical coding knowledge to build conversational flows?',
    answer:
      'No. The PulseQuo Visual Flow Builder provides an intuitive drag-and-drop React Flow canvas. Non-technical marketing and operations teams can configure keyword listeners, interactive WhatsApp quick-reply buttons, conditional logic branches, and automated drip sequences visually in minutes.',
  },
  {
    id: 'ai-faq-4',
    category: 'AI & Automation',
    question:
      'Can we switch dynamically between Anthropic Claude and OpenAI models?',
    answer:
      'Yes. PulseQuo offers dynamic model provider selection in workspace settings. You can route complex reasoning and multi-step tool calls to Claude 3.5 Sonnet, fast conversational queries to GPT-4o, or utilize local fallback modes based on latency, cost, and task complexity.',
  },
  {
    id: 'ai-faq-5',
    category: 'AI & Automation',
    question:
      'What happens when an AI agent encounters a query it cannot resolve?',
    answer:
      'PulseQuo enforces automatic bot-to-human escalation. When sentiment analysis detects customer frustration or an unknown intent is triggered, the system dispatches a [conversation.handoff] webhook and transfers the chat to an active human agent with the complete summarized conversation transcript.',
  },
  {
    id: 'ai-faq-6',
    category: 'AI & Automation',
    question:
      'Can we connect private internal MCP servers running inside our enterprise VPC?',
    answer:
      'Yes. PulseQuo supports both cloud-hosted MCP servers via authenticated HTTPS/SSE endpoints and on-premise MCP servers communicating over secure mTLS tunnels, allowing agents to query private databases without exposing endpoints to the public internet.',
  },
  {
    id: 'ai-faq-7',
    category: 'AI & Automation',
    question:
      'How is customer conversational data secured and isolated in PulseQuo?',
    answer:
      'All customer data is encrypted in transit via TLS 1.3 and at rest with AES-256 encryption. PulseQuo never trains foundational models on your enterprise data or customer conversation logs. Each enterprise workspace has isolated database partitioning and strict role-based access control (RBAC).',
  },
  {
    id: 'ai-faq-8',
    category: 'AI & Automation',
    question:
      'Do visual flows support official WhatsApp interactive buttons and rich media?',
    answer:
      'Yes. Visual Flow Builder has native support for Meta Official WhatsApp interactive components including quick-reply buttons (up to 3 per message), list pickers (up to 10 options), call-to-action web links, and PDF/image headers, fully compliant with WhatsApp Business policies.',
  },
];

export function AIAutomationPage() {
  const [activeMcpIndex, setActiveMcpIndex] = useState(0);
  const [copiedMcpSchema, setCopiedMcpSchema] = useState(false);

  const activeMcp = mcpServers[activeMcpIndex];
  const activeTool = activeMcp.tools[0];

  const handleCopySchema = () => {
    navigator.clipboard.writeText(JSON.stringify(activeTool.inputSchema, null, 2));
    setCopiedMcpSchema(true);
    setTimeout(() => setCopiedMcpSchema(false), 2000);
  };

  return (
    <div className="relative bg-white text-slate-900">
      <SEO
        title="AI & Automation · Visual Flow Builder & MCP Agents | PulseQuo"
        description="Autonomous conversational AI agents, zero-code drag-and-drop visual flow builders, and native Model Context Protocol (MCP) tool execution. Grounded enterprise intelligence with zero hallucination."
        canonicalPath="/products/ai-automation"
      />

      <section
        id="hero"
        data-cursor-zone="hero"
        className="relative bg-white pt-8 pb-12 sm:pt-12 sm:pb-16 overflow-hidden"
      >
        <BackgroundAnimation variant="hero" showGrid={true} showBeams={true} />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: 'Products', href: '/#platform-overview' },
              { label: 'AI & Automation' },
            ]}
            className="mb-8"
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            <div className="lg:col-span-6 xl:col-span-6 min-w-0">
              <h1 className="text-3xl sm:text-4xl lg:text-[42px] xl:text-[50px] font-black text-slate-900 tracking-[-0.03em] leading-[1.16] text-balance">
                Autonomous AI &amp; Visual Flows.{' '}
                <span className="text-gradient-hero">
                  Engineered for Scale.
                </span>
              </h1>

              <p className="mt-4 sm:mt-6 text-sm sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
                Automate mission-critical workflows with zero-code visual flow builders,
                autonomous Claude &amp; OpenAI conversational agents, intelligent lead scoring,
                and Model Context Protocol (MCP) tool integrations. Ground responses in verified
                enterprise documents with zero hallucination.
              </p>

              <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <Link
                  to="/book-demo?product=AI+%26+Automation"
                  className="btn-shine inline-flex items-center justify-center gap-2 px-6 py-3 sm:py-3.5 text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-800 rounded-xl transition-colors shadow-md shadow-blue-500/20 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
                >
                  <CalendarCheck className="size-4 shrink-0" />
                  <span>Request AI automation demo</span>
                </Link>
                <Link
                  to="/book-demo?product=AI+%26+Automation"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 sm:py-3.5 text-sm font-bold text-slate-700 bg-white hover:bg-slate-50 border border-slate-300 rounded-xl transition-colors shadow-2xs focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
                >
                  <Cpu className="size-4 text-purple-600 shrink-0" />
                  <span>Get started free</span>
                  <ArrowRight className="size-3.5 text-slate-400" />
                </Link>
              </div>

              <div className="mt-6 sm:mt-8 pt-5 sm:pt-6 border-t border-slate-200/80 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 text-xs font-medium text-slate-600">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-blue-600 shrink-0" />
                  <span>Model Context Protocol</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-blue-600 shrink-0" />
                  <span>Visual Flow Canvas</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-purple-600 shrink-0" />
                  <span>RAG Grounding</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-emerald-600 shrink-0" />
                  <span>Deterministic Guardrails</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 xl:col-span-6 relative">
              <CardFanout cards={aiFanoutCards} hideHeader={true} compact={true} />
            </div>
          </div>
        </div>
      </section>

      <BrandCarousel />

      <section id="telemetry" className="section-fade-tint py-8 sm:py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-slate-200/80">
            <div className="pt-4 sm:pt-0 sm:px-4 first:pt-0 first:pl-0">
              <span className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight font-mono block">
                &lt; 2s
              </span>
              <span className="text-xs sm:text-sm font-bold text-slate-800 block mt-1">
                Grounded AI Latency
              </span>
              <span className="text-xs text-slate-500 block mt-0.5">
                Sub-second inference with RAG retrieval
              </span>
            </div>

            <div className="pt-4 sm:pt-0 sm:px-4">
              <span className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight font-mono block">
                100%
              </span>
              <span className="text-xs sm:text-sm font-bold text-slate-800 block mt-1">
                Document Grounded
              </span>
              <span className="text-xs text-slate-500 block mt-0.5">
                Zero hallucination policy with fallback
              </span>
            </div>

            <div className="pt-4 sm:pt-0 sm:px-4">
              <span className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight font-mono block">
                Native MCP
              </span>
              <span className="text-xs sm:text-sm font-bold text-slate-800 block mt-1">
                Standardized Tool Contract
              </span>
              <span className="text-xs text-slate-500 block mt-0.5">
                Anthropic Model Context Protocol
              </span>
            </div>

            <div className="pt-4 sm:pt-0 sm:px-4">
              <span className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight font-mono block">
                78%
              </span>
              <span className="text-xs sm:text-sm font-bold text-slate-800 block mt-1">
                Autonomous Deflection
              </span>
              <span className="text-xs text-slate-500 block mt-0.5">
                Tier-1 queries resolved without human
              </span>
            </div>
          </div>
        </div>
      </section>

      <section id="flow-builder" className="py-10 sm:py-14 section-fade-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="VISUAL FLOW DESIGNER"
            title="Zero-Code Drag & Drop Conversational Journeys"
            description="Empower growth, support, and revenue operations to design sophisticated conversational trees with live branching logic, rich buttons, and external webhook triggers."
          />

          <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <CardSectionHydrator
              className="lg:col-span-5"
              ariaLabel="Loading visual flow builder capabilities"
              skeleton={
                <CardGridSkeleton
                  count={4}
                  variant="flow-capability"
                  columnsClassName="grid-cols-1 gap-4"
                />
              }
            >
              <div className="space-y-4">
                <div className="rounded-xl border border-slate-200/90 bg-white p-5 shadow-xs hover:border-blue-400 hover:shadow-sm transition-all">
                  <div className="flex items-center gap-3">
                    <div className="size-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 border border-blue-100">
                      <Workflow className="size-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900">
                        React Flow Node Canvas
                      </h4>
                      <p className="text-xs text-slate-500 mt-0.5 font-mono">
                        Infinite drag-and-drop workspace
                      </p>
                    </div>
                  </div>
                  <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Visually connect triggers, AI intent classifiers, condition routers, and
                    API webhooks without writing a line of code.
                  </p>
                </div>

                <div className="rounded-xl border border-slate-200/90 bg-white p-5 shadow-xs hover:border-blue-400 hover:shadow-sm transition-all">
                  <div className="flex items-center gap-3">
                    <div className="size-10 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center shrink-0 border border-purple-100">
                      <MessageSquare className="size-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900">
                        WhatsApp Interactive Elements
                      </h4>
                      <p className="text-xs text-slate-500 mt-0.5 font-mono">
                        Buttons, lists &amp; media headers
                      </p>
                    </div>
                  </div>
                  <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Design quick-reply buttons (up to 3), interactive list selectors (up to
                    10), and document attachments with 1-click preview.
                  </p>
                </div>

                <div className="rounded-xl border border-slate-200/90 bg-white p-5 shadow-xs hover:border-blue-400 hover:shadow-sm transition-all">
                  <div className="flex items-center gap-3">
                    <div className="size-10 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 border border-emerald-100">
                      <Terminal className="size-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900">
                        Simulated Flow Sandbox
                      </h4>
                      <p className="text-xs text-slate-500 mt-0.5 font-mono">
                        Test &amp; debug before publishing
                      </p>
                    </div>
                  </div>
                  <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Test draft journeys in an interactive browser simulator to verify condition
                    branches and webhook payloads before going live.
                  </p>
                </div>

                <div className="rounded-xl border border-slate-200/90 bg-white p-5 shadow-xs hover:border-blue-400 hover:shadow-sm transition-all">
                  <div className="flex items-center gap-3">
                    <div className="size-10 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0 border border-indigo-100">
                      <Zap className="size-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900">
                        Keyword &amp; Regex Listeners
                      </h4>
                      <p className="text-xs text-slate-500 mt-0.5 font-mono">
                        Instant conversational shortcuts
                      </p>
                    </div>
                  </div>
                  <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Listen for customer keywords like &ldquo;demo&rdquo;, &ldquo;support&rdquo;,
                    or &ldquo;pricing&rdquo; to trigger dedicated sub-flows immediately.
                  </p>
                </div>
              </div>
            </CardSectionHydrator>

            <div className="lg:col-span-7">
              <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-6 sm:p-8 shadow-xs">
                <div className="flex items-center justify-between border-b border-slate-200/80 pb-4 mb-6">
                  <div className="flex items-center gap-2">
                    <span className="size-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-xs font-mono font-bold text-slate-800 uppercase tracking-wider">
                      CANVAS: ENTERPRISE_QUALIFIER_V3
                    </span>
                  </div>
                  <span className="text-xs font-mono text-slate-500">Auto-saved 2s ago</span>
                </div>

                <div className="space-y-4 max-w-lg mx-auto">
                  <div className="bg-white rounded-xl border border-slate-300/80 p-4 shadow-2xs hover:border-blue-500 transition-colors">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="size-8 rounded-md bg-blue-50 text-blue-600 flex items-center justify-center font-mono text-xs font-bold">
                          01
                        </div>
                        <div>
                          <span className="text-[10px] font-mono font-bold text-blue-600 uppercase">
                            Trigger
                          </span>
                          <h5 className="text-sm font-bold text-slate-900">
                            WhatsApp Inbound &quot;Pricing&quot;
                          </h5>
                        </div>
                      </div>
                      <span className="text-[10px] font-mono bg-slate-100 text-slate-600 px-2 py-0.5 rounded-sm">
                        Regex / Keyword
                      </span>
                    </div>
                  </div>

                  <div className="flex justify-center items-center text-slate-400 font-mono text-xs">
                    <div className="w-0.5 h-4 bg-slate-300" />
                  </div>

                  <div className="bg-white rounded-xl border-2 border-purple-500/80 p-4 shadow-sm hover:border-purple-600 transition-colors">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="size-8 rounded-md bg-purple-50 text-purple-600 flex items-center justify-center font-mono text-xs font-bold">
                          02
                        </div>
                        <div>
                          <span className="text-[10px] font-mono font-bold text-purple-600 uppercase">
                            AI Intent Classification
                          </span>
                          <h5 className="text-sm font-bold text-slate-900">
                            Evaluate Team Size &amp; Budget
                          </h5>
                        </div>
                      </div>
                      <span className="text-[10px] font-mono bg-purple-50 text-purple-700 border border-purple-200 px-2 py-0.5 rounded-sm font-semibold">
                        Claude 3.5 Sonnet
                      </span>
                    </div>
                    <div className="mt-3 pt-2.5 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                      <span>Condition: Budget &gt; $10k</span>
                      <span className="text-emerald-600 font-mono font-bold">
                        Confidence 98.7%
                      </span>
                    </div>
                  </div>

                  <div className="relative h-6">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0.5 h-3 bg-purple-400" />
                    <div className="absolute top-3 left-[25%] right-[25%] h-0.5 bg-purple-400" />
                    <div className="absolute top-3 left-[25%] -translate-x-1/2 w-0.5 h-3 bg-purple-400" />
                    <div className="absolute top-3 right-[25%] translate-x-1/2 w-0.5 h-3 bg-purple-400" />
                  </div>

                  <div className="grid grid-cols-2 gap-3.5">
                    <div className="bg-white rounded-xl border border-emerald-300 p-3.5 shadow-2xs">
                      <span className="text-[10px] font-mono font-bold text-emerald-600 uppercase block">
                        Branch A: High Intent
                      </span>
                      <h6 className="text-xs font-bold text-slate-900 mt-0.5">
                        MCP Book Demo
                      </h6>
                      <p className="text-[11px] text-slate-500 mt-1">
                        Book slot on calendar &amp; alert sales executive
                      </p>
                    </div>

                    <div className="bg-white rounded-xl border border-slate-200 p-3.5 shadow-2xs">
                      <span className="text-[10px] font-mono font-bold text-slate-500 uppercase block">
                        Branch B: Self Serve
                      </span>
                      <h6 className="text-xs font-bold text-slate-900 mt-0.5">
                        Dispatch Rate Card
                      </h6>
                      <p className="text-[11px] text-slate-500 mt-1">
                        Send PDF brochure &amp; trial signup link
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200/80 flex items-center justify-between text-xs text-slate-500">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="size-4 text-emerald-600" />
                    <span>Visual logic compiles to deterministic JSON workflows</span>
                  </div>
                  <Link
                    to="/book-demo?product=AI+%26+Automation"
                    className="font-semibold text-blue-600 hover:text-blue-700 inline-flex items-center gap-1"
                  >
                    <span>Request live canvas walkthrough</span>
                    <ArrowRight className="size-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="mcp-agents" className="py-10 sm:py-14 section-fade-tint">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="MODEL CONTEXT PROTOCOL"
            title="Autonomous Agents Connected to Real Enterprise Tools"
            description="PulseQuo implements Anthropic's Model Context Protocol (MCP) standard, enabling Claude and OpenAI models to safely query databases, reserve calendar slots, and execute verified CRM actions."
          />

          <div className="mt-14 rounded-2xl border border-slate-800 bg-[#070d24] text-white shadow-2xl overflow-hidden">
            <div className="h-[2px] w-full bg-gradient-to-r from-blue-600 via-purple-500 to-emerald-400" />

            <div className="px-5 py-3.5 border-b border-slate-800 bg-[#040817] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1.5">
                  <span className="size-2.5 rounded-full bg-rose-500 inline-block" />
                  <span className="size-2.5 rounded-full bg-amber-500 inline-block" />
                  <span className="size-2.5 rounded-full bg-emerald-500 inline-block" />
                </div>
                <div className="flex items-center gap-2">
                  <Cpu className="size-4 text-purple-400" />
                  <span className="text-xs font-mono font-bold text-slate-200 tracking-tight">
                    MCP TOOL REGISTRY &amp; RUNTIME TRACE
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-1.5 overflow-x-auto thin-scrollbar">
                {mcpServers.map((server, idx) => (
                  <button
                    key={server.id}
                    type="button"
                    onClick={() => setActiveMcpIndex(idx)}
                    className={`text-xs font-mono font-semibold px-3 py-1 rounded-sm transition-colors cursor-pointer whitespace-nowrap ${
                      activeMcpIndex === idx
                        ? 'bg-blue-600 text-white shadow-xs'
                        : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
                    }`}
                  >
                    {server.name}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-slate-800">
              <div className="lg:col-span-6 p-5 sm:p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Code2 className="size-4 text-blue-400" />
                    <span className="text-xs font-mono font-bold text-slate-300 uppercase tracking-wider">
                      MCP Tool Schema: {activeTool.name}
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={handleCopySchema}
                    className="inline-flex items-center gap-1.5 text-[11px] font-mono text-slate-400 hover:text-white px-2 py-1 rounded-sm bg-slate-800/80 border border-slate-700 transition-colors cursor-pointer"
                  >
                    {copiedMcpSchema ? (
                      <>
                        <Check className="size-3 text-emerald-400" />
                        <span className="text-emerald-400">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="size-3 text-slate-400" />
                        <span>Copy Schema</span>
                      </>
                    )}
                  </button>
                </div>

                <p className="text-xs text-slate-400 leading-relaxed font-sans">
                  {activeTool.description}
                </p>

                <div className="rounded-xl bg-[#030612] border border-slate-800/80 p-4 font-mono text-[11px] text-slate-300 overflow-x-auto thin-scrollbar">
                  <pre className="text-blue-300">{'// JSON-RPC 2.0 tools/list definition'}</pre>
                  <pre className="text-slate-400">
                    {`{
  "name": "${activeTool.name}",
  "server": "${activeMcp.name}",
  "version": "${activeMcp.version}",
  "transport": "${activeMcp.transport}",
  "inputSchema": ${JSON.stringify(activeTool.inputSchema, null, 4).replace(/\n/g, '\n  ')}
}`}
                  </pre>
                </div>

                <div className="flex items-center gap-4 text-[11px] text-slate-400 font-mono">
                  <span className="flex items-center gap-1">
                    <ShieldCheck className="size-3.5 text-emerald-400" />
                    <span>Sandboxed Process</span>
                  </span>
                  <span className="flex items-center gap-1">
                    <Lock className="size-3.5 text-purple-400" />
                    <span>Deterministic Permissions</span>
                  </span>
                </div>
              </div>

              <div className="lg:col-span-6 p-5 sm:p-6 space-y-4 bg-[#05091b]">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Activity className="size-4 text-emerald-400" />
                    <span className="text-xs font-mono font-bold text-slate-300 uppercase tracking-wider">
                      Live Tool Execution Result
                    </span>
                  </div>
                  <span className="text-[10px] font-mono bg-emerald-950/80 text-emerald-300 border border-emerald-800/80 px-2 py-0.5 rounded-sm font-semibold">
                    STATUS: 200 OK
                  </span>
                </div>

                <p className="text-xs text-slate-400 leading-relaxed font-sans">
                  Deterministic sandbox output returned to Claude / OpenAI agent context for
                  customer reply formulation.
                </p>

                <div className="rounded-xl bg-[#030612] border border-slate-800/80 p-4 font-mono text-[11px] text-emerald-400 overflow-x-auto thin-scrollbar">
                  <pre className="text-slate-500">{'// JSON-RPC 2.0 tools/call response'}</pre>
                  <pre>{JSON.stringify(activeTool.sampleOutput, null, 2)}</pre>
                </div>

                <div className="pt-2 flex items-center justify-between text-[11px] text-slate-400 font-mono">
                  <span>Execution Latency: 42ms</span>
                  <span className="text-purple-300">Auth: OAuth 2.0 Bearer</span>
                </div>
              </div>
            </div>

            <div className="px-5 py-3 border-t border-slate-800 bg-[#040817] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400 font-sans">
              <div className="flex items-center gap-2">
                <span className="size-2 rounded-full bg-emerald-400" />
                <span>
                  Anthropic Model Context Protocol compliant · Zero model retraining needed
                </span>
              </div>
              <Link
                to="/book-demo?product=AI+%26+Automation"
                className="text-blue-400 hover:text-blue-300 font-semibold font-mono inline-flex items-center gap-1.5"
              >
                <span>Connect your own MCP server</span>
                <ExternalLink className="size-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="capabilities" className="py-12 sm:py-16 section-fade-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Engineered for Enterprise Security & Reliability"
            description="The PulseQuo AI runtime delivers enterprise-grade guardrails, document grounding, and human-in-the-loop controls."
          />

          <div className="mt-8 sm:mt-10">
            <HorizontalCardCarousel
              mode="mobile"
              itemCount={4}
              ariaLabel="Enterprise AI Capabilities"
              counterLabel="Capabilities"
              desktopGridClassName="lg:grid lg:grid-cols-2 lg:gap-5 lg:overflow-visible"
              skeletonVariant="capability-wide"
            >
              <div
                data-cursor="glass"
                className="snap-start shrink-0 w-[82vw] max-w-[320px] sm:w-[340px] lg:w-auto lg:max-w-none h-full min-h-[240px] sm:min-h-[272px] rounded-2xl border border-slate-200/90 bg-white p-5 sm:p-7 shadow-2xs hover:border-purple-400 hover:shadow-lg transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="size-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center border border-purple-200/80 mb-4">
                    <FileText className="size-5" />
                  </div>
                  <h3 className="text-base sm:text-xl font-bold text-slate-900 tracking-tight">
                    Document RAG Grounding with Zero Hallucination
                  </h3>
                  <p className="mt-2.5 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Upload PDF manuals, enterprise policies, rate cards, and internal FAQs.
                    PulseQuo indexes documentation using vector embeddings and ensures agents
                    cite exact passages or escalate cleanly.
                  </p>
                </div>
                <div className="mt-5 pt-4 border-t border-slate-100 grid grid-cols-3 gap-2 text-xs font-mono text-slate-600">
                  <div>
                    <span className="font-bold text-slate-900 block">PDF / DOCX</span>
                    <span className="text-slate-500 text-[11px]">Instant parsing</span>
                  </div>
                  <div>
                    <span className="font-bold text-slate-900 block">Cosine &gt; 0.85</span>
                    <span className="text-slate-500 text-[11px]">Strict threshold</span>
                  </div>
                  <div>
                    <span className="font-bold text-slate-900 block">Zero Leakage</span>
                    <span className="text-slate-500 text-[11px]">Tenant isolation</span>
                  </div>
                </div>
              </div>

              <div
                data-cursor="glass"
                className="snap-start shrink-0 w-[82vw] max-w-[320px] sm:w-[340px] lg:w-auto lg:max-w-none h-full min-h-[240px] sm:min-h-[272px] rounded-2xl border border-slate-200/90 bg-white p-5 sm:p-7 shadow-2xs hover:border-blue-400 hover:shadow-lg transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="size-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center border border-blue-200/80 mb-4">
                    <Bot className="size-5" />
                  </div>
                  <h3 className="text-base sm:text-xl font-bold text-slate-900 tracking-tight">
                    Natural Language Lead Extraction
                  </h3>
                  <p className="mt-2.5 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Extracts names, emails, phone numbers, and enterprise intent even from
                    unstructured, casual, or multilingual conversations across WhatsApp and SMS.
                  </p>
                </div>
                <div className="mt-5 pt-4 border-t border-slate-100 grid grid-cols-2 gap-2 text-xs font-mono">
                  <div className="bg-slate-50 px-3 py-2 rounded-lg border border-slate-200/60">
                    <span className="text-slate-500 block text-[10px]">Extracted Name</span>
                    <span className="text-slate-900 font-bold">Vikram Mehta</span>
                  </div>
                  <div className="bg-slate-50 px-3 py-2 rounded-lg border border-slate-200/60">
                    <span className="text-slate-500 block text-[10px]">Contact</span>
                    <span className="text-blue-600 font-bold">+91 98110 02233</span>
                  </div>
                </div>
              </div>

              <div
                data-cursor="glass"
                className="snap-start shrink-0 w-[82vw] max-w-[320px] sm:w-[340px] lg:w-auto lg:max-w-none h-full min-h-[240px] sm:min-h-[272px] rounded-2xl border border-slate-200/90 bg-white p-5 sm:p-7 shadow-2xs hover:border-emerald-400 hover:shadow-lg transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="size-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center border border-emerald-200/80 mb-4">
                    <ShieldCheck className="size-5" />
                  </div>
                  <h3 className="text-base sm:text-xl font-bold text-slate-900 tracking-tight">
                    Human-in-the-Loop &amp; Handoff Safeguards
                  </h3>
                  <p className="mt-2.5 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    High-impact CRM mutations (like issuing refunds or modifying contracts)
                    require one-tap human agent approval. Sentiment drops trigger instantaneous
                    bot-to-human ticket escalation.
                  </p>
                </div>
                <div className="mt-5 pt-4 border-t border-slate-100 flex flex-wrap items-center gap-4 text-xs text-slate-600">
                  <span className="flex items-center gap-1.5 font-mono">
                    <CheckCircle2 className="size-4 text-emerald-600 shrink-0" />
                    <span>Confidence cut-offs</span>
                  </span>
                  <span className="flex items-center gap-1.5 font-mono">
                    <CheckCircle2 className="size-4 text-emerald-600 shrink-0" />
                    <span>Full audit logging</span>
                  </span>
                </div>
              </div>

              <div
                data-cursor="glass"
                className="snap-start shrink-0 w-[82vw] max-w-[320px] sm:w-[340px] lg:w-auto lg:max-w-none h-full min-h-[240px] sm:min-h-[272px] rounded-2xl border border-slate-200/90 bg-white p-5 sm:p-7 shadow-2xs hover:border-indigo-400 hover:shadow-lg transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="size-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center border border-indigo-200/80 mb-4">
                    <Layers className="size-5" />
                  </div>
                  <h3 className="text-base sm:text-xl font-bold text-slate-900 tracking-tight">
                    Deploy One Flow Across WhatsApp, SMS &amp; Web
                  </h3>
                  <p className="mt-2.5 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Build your conversational logic once. PulseQuo automatically adapts
                    payloads to match WhatsApp Cloud API interactive buttons, carrier SMS text
                    limits, and website chat widgets seamlessly.
                  </p>
                </div>
                <div className="mt-5 pt-4 border-t border-slate-100 flex flex-wrap items-center gap-4 text-xs text-slate-600">
                  <span className="flex items-center gap-1.5 font-mono">
                    <CheckCircle2 className="size-4 text-indigo-600 shrink-0" />
                    <span>Meta Cloud API</span>
                  </span>
                  <span className="flex items-center gap-1.5 font-mono">
                    <CheckCircle2 className="size-4 text-indigo-600 shrink-0" />
                    <span>TRAI DLT Engine</span>
                  </span>
                </div>
              </div>
            </HorizontalCardCarousel>
          </div>
        </div>
      </section>

      <section id="impact" className="py-12 sm:py-16 section-fade-tint">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Smarter Operations with Proven Business Gains"
            description="Proven business metrics achieved by high-volume enterprises using PulseQuo's AI and automation runtime."
          />

          <div className="mt-8 sm:mt-10">
            <HorizontalCardCarousel
              mode="mobile"
              itemCount={4}
              ariaLabel="AI Automation ROI Metrics"
              counterLabel="Impact"
              desktopGridClassName="lg:grid lg:grid-cols-4 lg:gap-5 lg:overflow-visible"
              skeletonVariant="roi"
            >
              <div
                data-cursor="glass"
                className="snap-start shrink-0 w-[76vw] max-w-[290px] sm:w-[300px] lg:w-auto lg:max-w-none h-full min-h-[180px] sm:min-h-[212px] flex flex-col justify-between rounded-2xl bg-white border border-slate-200/90 p-5 sm:p-6 shadow-2xs hover:border-blue-300 hover:shadow-lg transition-all"
              >
                <div>
                  <span className="text-2xl sm:text-4xl font-black text-blue-600 font-mono tracking-tight block">
                    85%
                  </span>
                  <h4 className="text-sm sm:text-base font-bold text-slate-900 mt-2">
                    Deflection of Routine Queries
                  </h4>
                  <p className="mt-1.5 sm:mt-2 text-xs sm:text-[13px] text-slate-600 leading-relaxed">
                    Allow AI agents to handle standard pricing queries, opening hours, and
                    status lookups automatically.
                  </p>
                </div>
              </div>

              <div
                data-cursor="glass"
                className="snap-start shrink-0 w-[76vw] max-w-[290px] sm:w-[300px] lg:w-auto lg:max-w-none h-full min-h-[180px] sm:min-h-[212px] flex flex-col justify-between rounded-2xl bg-white border border-slate-200/90 p-5 sm:p-6 shadow-2xs hover:border-purple-300 hover:shadow-lg transition-all"
              >
                <div>
                  <span className="text-2xl sm:text-4xl font-black text-purple-600 font-mono tracking-tight block">
                    3.8x
                  </span>
                  <h4 className="text-sm sm:text-base font-bold text-slate-900 mt-2">
                    Faster Inbound Response
                  </h4>
                  <p className="mt-1.5 sm:mt-2 text-xs sm:text-[13px] text-slate-600 leading-relaxed">
                    Instant pre-qualification and routing reduces lead drop-off and books
                    meetings before prospects go cold.
                  </p>
                </div>
              </div>

              <div
                data-cursor="glass"
                className="snap-start shrink-0 w-[76vw] max-w-[290px] sm:w-[300px] lg:w-auto lg:max-w-none h-full min-h-[180px] sm:min-h-[212px] flex flex-col justify-between rounded-2xl bg-white border border-slate-200/90 p-5 sm:p-6 shadow-2xs hover:border-emerald-300 hover:shadow-lg transition-all"
              >
                <div>
                  <span className="text-2xl sm:text-4xl font-black text-emerald-600 font-mono tracking-tight block">
                    100%
                  </span>
                  <h4 className="text-sm sm:text-base font-bold text-slate-900 mt-2">
                    Grounded Zero Hallucination
                  </h4>
                  <p className="mt-1.5 sm:mt-2 text-xs sm:text-[13px] text-slate-600 leading-relaxed">
                    Strict RAG document grounding guarantees compliance with enterprise
                    security and brand messaging standards.
                  </p>
                </div>
              </div>

              <div
                data-cursor="glass"
                className="snap-start shrink-0 w-[76vw] max-w-[290px] sm:w-[300px] lg:w-auto lg:max-w-none h-full min-h-[180px] sm:min-h-[212px] flex flex-col justify-between rounded-2xl bg-white border border-slate-200/90 p-5 sm:p-6 shadow-2xs hover:border-blue-300 hover:shadow-lg transition-all"
              >
                <div>
                  <span className="text-2xl sm:text-4xl font-black text-slate-900 font-mono tracking-tight block">
                    0 Sprints
                  </span>
                  <h4 className="text-sm sm:text-base font-bold text-slate-900 mt-2">
                    Engineering Overhead
                  </h4>
                  <p className="mt-1.5 sm:mt-2 text-xs sm:text-[13px] text-slate-600 leading-relaxed">
                    Marketing, support, and sales teams update conversational flows visually in
                    seconds without engineering deployments.
                  </p>
                </div>
              </div>
            </HorizontalCardCarousel>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 section-fade-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Trusted for Autonomous Customer AI"
            description="Leading companies achieve 78% autonomous deflection and sub-2s response latency with zero hallucinations."
          />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.5, ease: easeOutCurve }}
            className="mt-8 sm:mt-10"
          >
            <TestimonialsCarousel />
          </motion.div>
        </div>
      </section>

      <section id="faqs" className="py-12 sm:py-16 section-fade-tint">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            <div className="lg:col-span-4">
              <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-black text-slate-900 tracking-[-0.025em] leading-[1.18] text-balance">
                AI &amp; Automation Questions Answered.
              </h2>
              <p className="mt-3 sm:mt-4 text-sm sm:text-base text-slate-600 leading-relaxed">
                Clear technical details on Model Context Protocol, visual flow builders, Claude
                / OpenAI model routing, and enterprise hallucination guardrails.
              </p>

              <div className="mt-6 sm:mt-8 p-5 sm:p-6 rounded-2xl bg-white border border-slate-200/80 shadow-2xs">
                <h4 className="text-sm font-bold text-slate-900">
                  Need a custom MCP tool integration?
                </h4>
                <p className="mt-1.5 text-xs text-slate-600 leading-relaxed">
                  Our enterprise solution architects can help connect your proprietary internal
                  APIs, ERP systems, or Postgres databases directly into PulseQuo AI agents.
                </p>
                <Link
                  to="/book-demo?product=AI+%26+Automation"
                  className="mt-4 inline-flex items-center gap-2 text-xs font-bold text-blue-600 hover:text-blue-700 font-mono uppercase tracking-wider"
                >
                  <span>Talk with an AI Architect</span>
                  <ArrowRight className="size-3.5" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-8 w-full flex flex-col">
              <div className="flex items-center justify-between pb-3 px-1">
                <span className="text-xs font-mono font-bold tracking-wider text-slate-800 uppercase">
                  Frequently Asked Questions
                </span>
                <span className="text-xs text-slate-400 font-mono">
                  {aiFaqs.length} topics
                </span>
              </div>
              <FAQAccordion items={aiFaqs} maxHeight="max-h-[420px] sm:max-h-[480px]" />
            </div>
          </div>
        </div>
      </section>

      <CTASection
        headline="Ready to Make Your Business Smarter with AI?"
        subheadline="Schedule a tailored walkthrough of PulseQuo's visual flow builder and autonomous MCP agents with our engineering team."
        primaryCtaText="Book an AI Demo"
        primaryCtaHref="/book-demo?product=AI+%26+Automation"
        secondaryCtaText="Explore Developer Docs"
        secondaryCtaHref="/developers/webhooks"
      />
    </div>
  );
}
