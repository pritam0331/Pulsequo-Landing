/**
 * Product Detail Page: AI and Automation Engine
 * Route: /products/ai-automation
 * Section-based architecture matching PulseQuo enterprise design standards:
 * - Alternating White / Slate rhythm with crisp hairline borders
 * - Elevated Flow Runtime Console in Hero (matching user-provided UI specification)
 * - AI Telemetry & SLA Strip (< 2s Latency, 100% Grounded, Native MCP Standard, 78% Deflection)
 * - Interactive Visual Flow Designer with Drag-and-Drop canvas representation
 * - Model Context Protocol (MCP) Live Tooling Console with JSON-RPC inspector
 * - Enterprise AI Architecture Bento Grid (RAG Grounding, Entity Extraction, Guardrails, Multi-Channel)
 * - Measurable Business ROI with Quantifiable Metrics
 * - Clamped Scrollable FAQ Accordion with Top Header Badge
 * - Final Closing CTA matching the enterprise platform console
 * - Strict 4-color palette (White, Blue #155dfc, Dark Blue #070d24, Purple micro-accents)
 * - Strict ZERO pill shapes (rounded-sm tags, font-mono tracking-wider uppercase)
 */

import { useState } from 'react'
import { Link } from 'react-router'
import { motion, AnimatePresence } from 'motion/react'
import {
  GitBranch,
  Cpu,
  Workflow,
  Bot,
  Zap,
  CheckCircle2,
  ArrowRight,
  CalendarCheck,
  Terminal,
  Code2,
  ShieldCheck,
  FileText,
  Copy,
  Check,
  Layers,
  Lock,
  ExternalLink,
  MessageSquare,
  Activity,
} from 'lucide-react'
import { SEO } from '../../components/common/SEO'
import { Breadcrumbs } from '../../components/common/Breadcrumbs'
import { SectionHeading } from '../../components/common/SectionHeading'
import { CTASection } from '../../components/common/CTASection'
import { FAQAccordion } from '../../components/common/FAQAccordion'
import { BackgroundAnimation } from '../../components/common/BackgroundAnimation'
import { siteConfig } from '../../config/siteConfig'
import type { FAQItem } from '../../data/faqs'

const easeOutCurve = [0.22, 1, 0.36, 1] as const

// Flow preset types for the interactive Flow Runtime Card in the Hero
interface FlowPreset {
  id: string
  name: string
  model: string
  nodes: {
    type: 'trigger' | 'rag' | 'mcp' | 'action'
    category: string
    title: string
    status: string
    statusColor: string
    detail?: string
  }[]
  footerTag: string
  executionTime: string
}

const flowPresets: FlowPreset[] = [
  {
    id: 'inbound-assistant',
    name: 'Flow: Inbound Assistant',
    model: 'Claude 3.5 / OpenAI',
    footerTag: 'Visual Flow Engine',
    executionTime: '1.4s Latency',
    nodes: [
      {
        type: 'trigger',
        category: 'Trigger Node',
        title: 'Inbound WhatsApp Message',
        status: 'Active',
        statusColor: 'text-emerald-400',
        detail: 'Event: message.received · Provider: Meta Cloud API',
      },
      {
        type: 'rag',
        category: 'Agent RAG Node',
        title: 'Knowledge Document Lookup',
        status: 'Grounding OK',
        statusColor: 'text-purple-300',
        detail: 'Match: Enterprise SLA Policy (Cosine 0.94)',
      },
      {
        type: 'mcp',
        category: 'MCP Tool Execution',
        title: 'appointment-server: BookSlot',
        status: 'Success (200)',
        statusColor: 'text-emerald-300',
        detail: 'Tool: book_calendar_slot · Output: 2026-11-20T14:30:00Z',
      },
    ],
  },
  {
    id: 'lead-qualifier',
    name: 'Flow: B2B Lead Qualifier',
    model: 'Claude 3.5 Sonnet',
    footerTag: 'Sales Pipeline Engine',
    executionTime: '1.8s Latency',
    nodes: [
      {
        type: 'trigger',
        category: 'Trigger Node',
        title: 'Website Inbound Chat / WhatsApp',
        status: 'Active',
        statusColor: 'text-emerald-400',
        detail: 'Captured source: campaign_enterprise_q4',
      },
      {
        type: 'rag',
        category: 'Entity Extraction Node',
        title: 'Intent & Budget Scoring (AI)',
        status: 'Score: 94/100',
        statusColor: 'text-purple-300',
        detail: 'Extracted: 50+ seats · Budget: $25k+ · Ready: Immediate',
      },
      {
        type: 'mcp',
        category: 'MCP Tool Execution',
        title: 'salesforce-crm: CreateDeal',
        status: 'Success (201)',
        statusColor: 'text-emerald-300',
        detail: 'Deal ID: opp_8849102 · Stage: Discovery Scheduled',
      },
    ],
  },
  {
    id: 'support-triage',
    name: 'Flow: Support SLA Triage',
    model: 'GPT-4o Enterprise',
    footerTag: 'Support Helpdesk Engine',
    executionTime: '0.9s Latency',
    nodes: [
      {
        type: 'trigger',
        category: 'Trigger Node',
        title: 'High-Priority Support Ticket',
        status: 'Active',
        statusColor: 'text-emerald-400',
        detail: 'Customer Tier: Tier-1 Enterprise · SLA Target: < 15m',
      },
      {
        type: 'rag',
        category: 'Agent RAG Node',
        title: 'Engineering Runbook Match',
        status: 'Grounding OK',
        statusColor: 'text-purple-300',
        detail: 'Doc: Webhook Retry & Idempotency Playbook',
      },
      {
        type: 'action',
        category: 'Deterministic Handoff',
        title: 'dispatch: EscalationDesk',
        status: 'Assigned',
        statusColor: 'text-blue-300',
        detail: 'Assigned to: Level-2 Solutions Engineer with full context',
      },
    ],
  },
]

// MCP Server specifications for interactive tab switcher in Section 4
interface McpServerSpec {
  id: string
  name: string
  version: string
  transport: string
  tools: {
    name: string
    description: string
    inputSchema: Record<string, unknown>
    sampleOutput: Record<string, unknown>
  }[]
}

const mcpServers: McpServerSpec[] = [
  {
    id: 'appointment-server',
    name: 'appointment-server',
    version: 'v1.4.2',
    transport: 'stdio / HTTPS (SSE)',
    tools: [
      {
        name: 'BookSlot',
        description: 'Verifies calendar availability and reserves a dedicated demonstration slot.',
        inputSchema: {
          type: 'object',
          properties: {
            attendeeEmail: { type: 'string', format: 'email' },
            preferredSlotIso: { type: 'string', format: 'date-time' },
            topic: { type: 'string', enum: ['AI Demo', 'Enterprise Architecture', 'Billing'] },
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
        description: 'Queries real-time calendar slots for solutions engineers across timezones.',
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
          availableSlots: ['11:00 AM IST', '02:30 PM IST', '04:00 PM IST', '06:30 PM IST'],
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
        description: 'Creates or updates a B2B opportunity stage in CRM with AI qualification scores.',
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
        description: 'Queries ERP and courier APIs for package dispatch telemetry and AWB tracking.',
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
]

// Comprehensive AI & Automation FAQs
const aiFaqs: FAQItem[] = [
  {
    id: 'ai-faq-1',
    category: 'AI & Automation',
    question: 'What is Model Context Protocol (MCP) and why is it important in PulseQuo?',
    answer:
      'Model Context Protocol (MCP) is an open industry standard championed by Anthropic that allows AI agents to safely read from and write to external tools (such as live database lookups, calendar scheduling, and CRM syncing) via sandboxed, modular protocols. PulseQuo includes native MCP server support, meaning your agents can securely execute enterprise actions without hardcoded scripts.',
  },
  {
    id: 'ai-faq-2',
    category: 'AI & Automation',
    question: 'How do PulseQuo AI agents avoid hallucinations when answering customer questions?',
    answer:
      'PulseQuo utilizes strict Retrieval-Augmented Generation (RAG) coupled with deterministic zero-hallucination guardrails. Responses are strictly grounded in your uploaded enterprise documents (PDFs, knowledge base articles, warranty policies). When a customer query falls outside the confidence threshold of your verified documents, the agent gracefully admits lack of data or triggers a human handoff.',
  },
  {
    id: 'ai-faq-3',
    category: 'AI & Automation',
    question: 'Does our team need technical coding knowledge to build conversational flows?',
    answer:
      'No. The PulseQuo Visual Flow Builder provides an intuitive drag-and-drop React Flow canvas. Non-technical marketing and operations teams can configure keyword listeners, interactive WhatsApp quick-reply buttons, conditional logic branches, and automated drip sequences visually in minutes.',
  },
  {
    id: 'ai-faq-4',
    category: 'AI & Automation',
    question: 'Can we switch dynamically between Anthropic Claude and OpenAI models?',
    answer:
      'Yes. PulseQuo offers dynamic model provider selection in workspace settings. You can route complex reasoning and multi-step tool calls to Claude 3.5 Sonnet, fast conversational queries to GPT-4o, or utilize local fallback modes based on latency, cost, and task complexity.',
  },
  {
    id: 'ai-faq-5',
    category: 'AI & Automation',
    question: 'What happens when an AI agent encounters a query it cannot resolve?',
    answer:
      'PulseQuo enforces automatic bot-to-human escalation. When sentiment analysis detects customer frustration or an unknown intent is triggered, the system dispatches a [conversation.handoff] webhook and transfers the chat to an active human agent with the complete summarized conversation transcript.',
  },
  {
    id: 'ai-faq-6',
    category: 'AI & Automation',
    question: 'Can we connect private internal MCP servers running inside our enterprise VPC?',
    answer:
      'Yes. PulseQuo supports both cloud-hosted MCP servers via authenticated HTTPS/SSE endpoints and on-premise MCP servers communicating over secure mTLS tunnels, allowing agents to query private databases without exposing endpoints to the public internet.',
  },
  {
    id: 'ai-faq-7',
    category: 'AI & Automation',
    question: 'How is customer conversational data secured and isolated in PulseQuo?',
    answer:
      'All customer data is encrypted in transit via TLS 1.3 and at rest with AES-256 encryption. PulseQuo never trains foundational models on your enterprise data or customer conversation logs. Each enterprise workspace has isolated database partitioning and strict role-based access control (RBAC).',
  },
  {
    id: 'ai-faq-8',
    category: 'AI & Automation',
    question: 'Do visual flows support official WhatsApp interactive buttons and rich media?',
    answer:
      'Yes. Visual Flow Builder has native support for Meta Official WhatsApp interactive components including quick-reply buttons (up to 3 per message), list pickers (up to 10 options), call-to-action web links, and PDF/image headers, fully compliant with WhatsApp Business policies.',
  },
]

export function AIAutomationPage() {
  const [activeFlowIndex, setActiveFlowIndex] = useState(0)
  const [activeMcpIndex, setActiveMcpIndex] = useState(0)
  const [copiedMcpSchema, setCopiedMcpSchema] = useState(false)

  const activeFlow = flowPresets[activeFlowIndex]
  const activeMcp = mcpServers[activeMcpIndex]
  const activeTool = activeMcp.tools[0]

  const handleCopySchema = () => {
    navigator.clipboard.writeText(JSON.stringify(activeTool.inputSchema, null, 2))
    setCopiedMcpSchema(true)
    setTimeout(() => setCopiedMcpSchema(false), 2000)
  }

  return (
    <div className="relative bg-white text-slate-900">
      <SEO
        title="AI & Automation · Visual Flow Builder & MCP Agents | PulseQuo"
        description="Autonomous conversational AI agents, zero-code drag-and-drop visual flow builders, and native Model Context Protocol (MCP) tool execution. Grounded enterprise intelligence with zero hallucination."
        canonicalPath="/products/ai-automation"
      />

      {/* =========================================================================
          SECTION 1: HERO (#hero)
          Strict Section-Based Architecture with Elevated Flow Runtime Card
          ========================================================================= */}
      <section
        id="hero"
        className="relative bg-white pt-10 pb-16 sm:pt-14 sm:pb-20 lg:pt-16 lg:pb-24 overflow-hidden"
      >
        <BackgroundAnimation variant="hero" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: 'Products', href: '/#platform-overview' },
              { label: 'AI & Automation' },
            ]}
            className="mb-8"
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Column: Headline, Narrative & Enterprise CTAs */}
            <div className="lg:col-span-7">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-[-0.035em] leading-[1.08]">
                Autonomous AI & Visual Flows.{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700">
                  Engineered for Scale.
                </span>
              </h1>

              <p className="mt-6 text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
                Automate mission-critical workflows with zero-code visual flow builders, autonomous Claude & OpenAI
                conversational agents, intelligent lead scoring, and Model Context Protocol (MCP) tool integrations.
                Ground responses in verified enterprise documents with zero hallucination.
              </p>

              {/* Action Buttons */}
              <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
                <Link
                  to="/book-demo?product=AI+%26+Automation"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-800 rounded-md transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
                >
                  <CalendarCheck className="size-4 shrink-0" />
                  <span>Request AI automation demo</span>
                </Link>

                <a
                  href="#mcp-agents"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-slate-700 bg-white hover:bg-slate-50 border border-slate-300 rounded-md transition-colors shadow-2xs focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
                >
                  <Cpu className="size-4 text-purple-600 shrink-0" />
                  <span>Explore MCP architecture</span>
                  <ArrowRight className="size-3.5 text-slate-400" />
                </a>
              </div>

              {/* Trust & Guarantee Markers */}
              <div className="mt-8 pt-6 border-t border-slate-200/80 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-medium text-slate-600">
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
                  <span>RAG Grounding (Zero Hallucination)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-emerald-600 shrink-0" />
                  <span>Deterministic Guardrails</span>
                </div>
              </div>
            </div>

            {/* Right Column: Elevated Interactive Flow Card (Matching User Screenshot) */}
            <div className="lg:col-span-5">
              <div className="relative">
                {/* Subtle Ambient Glow */}
                <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-blue-500/20 blur-xl opacity-60 pointer-events-none" />

                {/* Main Dark Console Window */}
                <div className="relative rounded-2xl border border-slate-800 bg-[#070d24] text-white shadow-2xl overflow-hidden">
                  {/* Top Hairline Gradient Accent Line */}
                  <div className="h-[2.5px] w-full bg-gradient-to-r from-blue-500 via-purple-500 to-emerald-400" />

                  {/* Window Titlebar */}
                  <div className="px-4 py-3 border-b border-slate-800/90 flex items-center justify-between bg-[#040817]">
                    <div className="flex items-center gap-2">
                      <div className="flex items-center gap-1.5 mr-2">
                        <span className="size-2.5 rounded-full bg-rose-500/80 inline-block" />
                        <span className="size-2.5 rounded-full bg-amber-500/80 inline-block" />
                        <span className="size-2.5 rounded-full bg-emerald-500/80 inline-block" />
                      </div>
                      <GitBranch className="size-4 text-purple-400 shrink-0" />
                      <span className="text-xs font-bold text-slate-200 font-mono tracking-tight">
                        {activeFlow.name}
                      </span>
                    </div>

                    <span className="rounded-sm bg-purple-950/80 text-purple-300 border border-purple-800/80 px-2 py-0.5 text-[10px] font-mono font-semibold tracking-wide">
                      Model: {activeFlow.model}
                    </span>
                  </div>

                  {/* Flow Presets Selector Pills */}
                  <div className="px-4 pt-3 pb-2 border-b border-slate-800/60 bg-[#060b1e] flex items-center gap-1.5 overflow-x-auto thin-scrollbar">
                    {flowPresets.map((preset, idx) => (
                      <button
                        key={preset.id}
                        type="button"
                        onClick={() => setActiveFlowIndex(idx)}
                        className={`text-[10px] font-mono font-medium px-2.5 py-1 rounded-sm transition-colors whitespace-nowrap cursor-pointer ${
                          activeFlowIndex === idx
                            ? 'bg-blue-600/30 text-blue-300 border border-blue-500/50'
                            : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60 border border-transparent'
                        }`}
                      >
                        {preset.name.replace('Flow: ', '')}
                      </button>
                    ))}
                  </div>

                  {/* Flow Nodes Canvas Body */}
                  <div className="p-4 sm:p-5 space-y-3 font-sans text-xs">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={activeFlow.id}
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.25, ease: easeOutCurve }}
                        className="space-y-2.5"
                      >
                        {activeFlow.nodes.map((node, nodeIdx) => (
                          <div key={nodeIdx} className="space-y-2.5">
                            {/* Visual Connecting Arrow between nodes */}
                            {nodeIdx > 0 && (
                              <div className="flex justify-center items-center py-0.5">
                                <div className="relative flex flex-col items-center">
                                  <div className="w-px h-3 bg-slate-700" />
                                  <span className="text-slate-500 text-xs font-mono select-none">↓</span>
                                </div>
                              </div>
                            )}

                            {/* Node Card */}
                            <div
                              className={`rounded-xl p-3.5 transition-all ${
                                node.type === 'trigger'
                                  ? 'bg-slate-900/90 border border-slate-800 hover:border-blue-500/50'
                                  : node.type === 'rag'
                                  ? 'bg-slate-900/90 border border-purple-900/60 hover:border-purple-500/50'
                                  : node.type === 'mcp'
                                  ? 'bg-slate-900/90 border border-emerald-900/60 hover:border-emerald-500/50'
                                  : 'bg-slate-900/90 border border-blue-900/60 hover:border-blue-500/50'
                              }`}
                            >
                              <div className="flex items-start justify-between gap-3">
                                <div className="space-y-0.5">
                                  <span
                                    className={`text-[10px] font-bold font-mono tracking-wider uppercase block ${
                                      node.type === 'trigger'
                                        ? 'text-blue-400'
                                        : node.type === 'rag'
                                        ? 'text-purple-400'
                                        : node.type === 'mcp'
                                        ? 'text-emerald-400'
                                        : 'text-blue-400'
                                    }`}
                                  >
                                    {node.category}
                                  </span>
                                  <p className="text-white font-semibold text-xs sm:text-sm font-sans tracking-tight">
                                    {node.title}
                                  </p>
                                  {node.detail && (
                                    <p className="text-[11px] text-slate-400 font-mono pt-0.5">
                                      {node.detail}
                                    </p>
                                  )}
                                </div>

                                <div className="flex items-center gap-1.5 shrink-0 pt-0.5">
                                  {node.status === 'Active' && (
                                    <span className="relative flex size-2">
                                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                                      <span className="relative inline-flex rounded-full size-2 bg-emerald-500" />
                                    </span>
                                  )}
                                  <span className={`text-[10px] font-mono font-semibold ${node.statusColor}`}>
                                    {node.status}
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </motion.div>
                    </AnimatePresence>
                  </div>

                  {/* Card Bottom Status Bar */}
                  <div className="px-4 py-3 border-t border-slate-800/90 bg-[#040817] flex items-center justify-between text-[11px] text-slate-400 font-sans">
                    <div className="flex items-center gap-2">
                      <span className="size-1.5 rounded-full bg-emerald-400" />
                      <span>{activeFlow.footerTag}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-slate-500 font-mono">Zero Code Needed</span>
                      <span className="text-slate-700">·</span>
                      <span className="text-purple-400 font-mono font-semibold">
                        {activeFlow.executionTime}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: AI TELEMETRY & SLA STRIP (#telemetry)
          ========================================================================= */}
      <section id="telemetry" className="bg-slate-50/70 py-8 sm:py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-slate-200/80">
            {/* Metric 1 */}
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

            {/* Metric 2 */}
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

            {/* Metric 3 */}
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

            {/* Metric 4 */}
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

      {/* =========================================================================
          SECTION 3: VISUAL FLOW DESIGNER (#flow-builder)
          ========================================================================= */}
      <section id="flow-builder" className="py-6 sm:py-8 lg:py-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="VISUAL FLOW DESIGNER"
            title="Zero-Code Drag & Drop Conversational Journeys"
            description="Empower growth, support, and revenue operations to design sophisticated conversational trees with live branching logic, rich buttons, and external webhook triggers."
          />

          <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Column: 4 Core Builder Capabilities */}
            <div className="lg:col-span-5 space-y-4">
              <div className="rounded-xl border border-slate-200/90 bg-white p-5 shadow-xs hover:border-blue-400 hover:shadow-sm transition-all">
                <div className="flex items-center gap-3">
                  <div className="size-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 border border-blue-100">
                    <Workflow className="size-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">React Flow Node Canvas</h4>
                    <p className="text-xs text-slate-500 mt-0.5 font-mono">Infinite drag-and-drop workspace</p>
                  </div>
                </div>
                <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Visually connect triggers, AI intent classifiers, condition routers, and API webhooks without writing a line of code.
                </p>
              </div>

              <div className="rounded-xl border border-slate-200/90 bg-white p-5 shadow-xs hover:border-blue-400 hover:shadow-sm transition-all">
                <div className="flex items-center gap-3">
                  <div className="size-10 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center shrink-0 border border-purple-100">
                    <MessageSquare className="size-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">WhatsApp Interactive Elements</h4>
                    <p className="text-xs text-slate-500 mt-0.5 font-mono">Buttons, lists & media headers</p>
                  </div>
                </div>
                <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Design quick-reply buttons (up to 3), interactive list selectors (up to 10), and document attachments with 1-click preview.
                </p>
              </div>

              <div className="rounded-xl border border-slate-200/90 bg-white p-5 shadow-xs hover:border-blue-400 hover:shadow-sm transition-all">
                <div className="flex items-center gap-3">
                  <div className="size-10 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 border border-emerald-100">
                    <Terminal className="size-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Simulated Flow Sandbox</h4>
                    <p className="text-xs text-slate-500 mt-0.5 font-mono">Test & debug before publishing</p>
                  </div>
                </div>
                <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Test draft journeys in an interactive browser simulator to verify condition branches and webhook payloads before going live.
                </p>
              </div>

              <div className="rounded-xl border border-slate-200/90 bg-white p-5 shadow-xs hover:border-blue-400 hover:shadow-sm transition-all">
                <div className="flex items-center gap-3">
                  <div className="size-10 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0 border border-indigo-100">
                    <Zap className="size-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Keyword & Regex Listeners</h4>
                    <p className="text-xs text-slate-500 mt-0.5 font-mono">Instant conversational shortcuts</p>
                  </div>
                </div>
                <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Listen for customer keywords like “demo”, “support”, or “pricing” to trigger dedicated sub-flows immediately.
                </p>
              </div>
            </div>

            {/* Right Column: Visual Flow Builder Live Diagram */}
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

                {/* Simulated Flowchart Nodes */}
                <div className="space-y-4 max-w-lg mx-auto">
                  {/* Step 1: Trigger Node */}
                  <div className="bg-white rounded-xl border border-slate-300/80 p-4 shadow-2xs hover:border-blue-500 transition-colors">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="size-8 rounded-md bg-blue-50 text-blue-600 flex items-center justify-center font-mono text-xs font-bold">
                          01
                        </div>
                        <div>
                          <span className="text-[10px] font-mono font-bold text-blue-600 uppercase">Trigger</span>
                          <h5 className="text-sm font-bold text-slate-900">WhatsApp Inbound &quot;Pricing&quot;</h5>
                        </div>
                      </div>
                      <span className="text-[10px] font-mono bg-slate-100 text-slate-600 px-2 py-0.5 rounded-sm">
                        Regex / Keyword
                      </span>
                    </div>
                  </div>

                  {/* Flow Arrow */}
                  <div className="flex justify-center items-center text-slate-400 font-mono text-xs">
                    <div className="w-0.5 h-4 bg-slate-300" />
                  </div>

                  {/* Step 2: AI Intent Router */}
                  <div className="bg-white rounded-xl border-2 border-purple-500/80 p-4 shadow-sm hover:border-purple-600 transition-colors">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="size-8 rounded-md bg-purple-50 text-purple-600 flex items-center justify-center font-mono text-xs font-bold">
                          02
                        </div>
                        <div>
                          <span className="text-[10px] font-mono font-bold text-purple-600 uppercase">AI Intent Classification</span>
                          <h5 className="text-sm font-bold text-slate-900">Evaluate Team Size &amp; Budget</h5>
                        </div>
                      </div>
                      <span className="text-[10px] font-mono bg-purple-50 text-purple-700 border border-purple-200 px-2 py-0.5 rounded-sm font-semibold">
                        Claude 3.5 Sonnet
                      </span>
                    </div>
                    <div className="mt-3 pt-2.5 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                      <span>Condition: Budget &gt; $10k</span>
                      <span className="text-emerald-600 font-mono font-bold">Confidence 98.7%</span>
                    </div>
                  </div>

                  {/* Flow Split T-Junction */}
                  <div className="relative h-6">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0.5 h-3 bg-purple-400" />
                    <div className="absolute top-3 left-[25%] right-[25%] h-0.5 bg-purple-400" />
                    <div className="absolute top-3 left-[25%] -translate-x-1/2 w-0.5 h-3 bg-purple-400" />
                    <div className="absolute top-3 right-[25%] translate-x-1/2 w-0.5 h-3 bg-purple-400" />
                  </div>

                  {/* Step 3: Branch Outcomes */}
                  <div className="grid grid-cols-2 gap-3.5">
                    {/* Branch A: High Intent */}
                    <div className="bg-white rounded-xl border border-emerald-300 p-3.5 shadow-2xs">
                      <span className="text-[10px] font-mono font-bold text-emerald-600 uppercase block">Branch A: High Intent</span>
                      <h6 className="text-xs font-bold text-slate-900 mt-0.5">MCP Book Demo</h6>
                      <p className="text-[11px] text-slate-500 mt-1">Book slot on calendar &amp; alert sales executive</p>
                    </div>

                    {/* Branch B: Self Serve */}
                    <div className="bg-white rounded-xl border border-slate-200 p-3.5 shadow-2xs">
                      <span className="text-[10px] font-mono font-bold text-slate-500 uppercase block">Branch B: Self Serve</span>
                      <h6 className="text-xs font-bold text-slate-900 mt-0.5">Dispatch Rate Card</h6>
                      <p className="text-[11px] text-slate-500 mt-1">Send PDF brochure &amp; trial signup link</p>
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

      {/* =========================================================================
          SECTION 4: MODEL CONTEXT PROTOCOL (MCP) LIVE CONSOLE (#mcp-agents)
          ========================================================================= */}
      <section id="mcp-agents" className="py-6 sm:py-8 lg:py-10 bg-slate-50/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="MODEL CONTEXT PROTOCOL"
            title="Autonomous Agents Connected to Real Enterprise Tools"
            description="PulseQuo implements Anthropic's Model Context Protocol (MCP) standard, enabling Claude and OpenAI models to safely query databases, reserve calendar slots, and execute verified CRM actions."
          />

          {/* MCP Server Inspector Console */}
          <div className="mt-14 rounded-2xl border border-slate-800 bg-[#070d24] text-white shadow-2xl overflow-hidden">
            {/* Top Hairline Accent Line */}
            <div className="h-[2px] w-full bg-gradient-to-r from-blue-600 via-purple-500 to-emerald-400" />

            {/* Console Titlebar */}
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

              {/* Server Selector Tabs */}
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

            {/* Console Two-Column Split (Tool Contract Schema vs Live Execution Trace) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-slate-800">
              {/* Left Column: Tool JSON Schema (tools/list) */}
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
                  <pre className="text-blue-300">{`// JSON-RPC 2.0 tools/list definition`}</pre>
                  <pre className="text-slate-400">{`{
  "name": "${activeTool.name}",
  "server": "${activeMcp.name}",
  "version": "${activeMcp.version}",
  "transport": "${activeMcp.transport}",
  "inputSchema": ${JSON.stringify(activeTool.inputSchema, null, 4).replace(/\n/g, '\n  ')}
}`}</pre>
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

              {/* Right Column: Live Execution Output (tools/call) */}
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
                  Deterministic sandbox output returned to Claude / OpenAI agent context for customer reply formulation.
                </p>

                <div className="rounded-xl bg-[#030612] border border-slate-800/80 p-4 font-mono text-[11px] text-emerald-400 overflow-x-auto thin-scrollbar">
                  <pre className="text-slate-500">{`// JSON-RPC 2.0 tools/call response`}</pre>
                  <pre>{JSON.stringify(activeTool.sampleOutput, null, 2)}</pre>
                </div>

                <div className="pt-2 flex items-center justify-between text-[11px] text-slate-400 font-mono">
                  <span>Execution Latency: 42ms</span>
                  <span className="text-purple-300">Auth: OAuth 2.0 Bearer</span>
                </div>
              </div>
            </div>

            {/* Console Footer Banner */}
            <div className="px-5 py-3 border-t border-slate-800 bg-[#040817] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400 font-sans">
              <div className="flex items-center gap-2">
                <span className="size-2 rounded-full bg-emerald-400" />
                <span>Anthropic Model Context Protocol compliant · Zero model retraining needed</span>
              </div>
              <a
                href={siteConfig.appUrl}
                className="text-blue-400 hover:text-blue-300 font-semibold font-mono inline-flex items-center gap-1.5"
              >
                <span>Connect your own MCP server</span>
                <ExternalLink className="size-3.5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 5: ENTERPRISE CAPABILITIES BENTO GRID (#capabilities)
          ========================================================================= */}
      <section id="capabilities" className="py-6 sm:py-8 lg:py-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="ENTERPRISE CAPABILITIES"
            title="Engineered for Enterprise Security & Reliability"
            description="The PulseQuo AI runtime delivers enterprise-grade guardrails, document grounding, and human-in-the-loop controls."
          />

          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
            {/* Bento Card 1: Document RAG Knowledge Grounding (Span 7) */}
            <div className="lg:col-span-7 rounded-2xl border border-slate-200/90 bg-white p-6 sm:p-8 shadow-xs hover:border-blue-400 hover:shadow-sm transition-all flex flex-col justify-between">
              <div>
                <div className="size-11 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center border border-purple-100 mb-5">
                  <FileText className="size-5" />
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-mono font-bold text-purple-600 uppercase tracking-wider">
                    KNOWLEDGE GROUNDING
                  </span>
                  <span className="text-[10px] font-mono bg-purple-50 text-purple-700 px-2 py-0.5 rounded-sm">
                    RAG Vector Engine
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                  Document RAG Grounding with Zero Hallucination
                </h3>
                <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                  Upload PDF manuals, enterprise policies, rate cards, and internal FAQs. PulseQuo indexes documentation
                  using vector embeddings and ensures agents cite exact passages. If a query falls outside the knowledge base,
                  the agent deterministically escalates.
                </p>
              </div>

              <div className="mt-6 pt-5 border-t border-slate-100 grid grid-cols-3 gap-3 text-xs font-mono text-slate-600">
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

            {/* Bento Card 2: Natural Entity Extraction (Span 5) */}
            <div className="lg:col-span-5 rounded-2xl border border-slate-200/90 bg-white p-6 sm:p-8 shadow-xs hover:border-blue-400 hover:shadow-sm transition-all flex flex-col justify-between">
              <div>
                <div className="size-11 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center border border-blue-100 mb-5">
                  <Bot className="size-5" />
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-mono font-bold text-blue-600 uppercase tracking-wider">
                    ENTITY EXTRACTION
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                  Natural Language Lead Extraction
                </h3>
                <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                  Extracts names, emails, phone numbers, and enterprise intent even from unstructured, casual, or multilingual
                  conversations across WhatsApp and SMS.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 space-y-2 text-xs font-mono">
                <div className="flex items-center justify-between bg-slate-50 p-2 rounded-sm border border-slate-200/60">
                  <span className="text-slate-500">Extracted Name:</span>
                  <span className="text-slate-900 font-bold">Vikram Mehta</span>
                </div>
                <div className="flex items-center justify-between bg-slate-50 p-2 rounded-sm border border-slate-200/60">
                  <span className="text-slate-500">Contact:</span>
                  <span className="text-blue-600 font-bold">+91 98110 02233</span>
                </div>
              </div>
            </div>

            {/* Bento Card 3: Deterministic Guardrails (Span 6) */}
            <div className="lg:col-span-6 rounded-2xl border border-slate-200/90 bg-white p-6 sm:p-8 shadow-xs hover:border-blue-400 hover:shadow-sm transition-all">
              <div className="size-11 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center border border-emerald-100 mb-5">
                <ShieldCheck className="size-5" />
              </div>
              <span className="text-xs font-mono font-bold text-emerald-600 uppercase tracking-wider block mb-2">
                DETERMINISTIC GUARDRAILS
              </span>
              <h3 className="text-xl font-bold text-slate-900 tracking-tight">
                Human-in-the-Loop &amp; Handoff Safeguards
              </h3>
              <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                High-impact CRM mutations (like issuing refunds or modifying contracts) require one-tap human agent approval.
                Sentiment drops trigger instantaneous bot-to-human ticket escalation.
              </p>
              <div className="mt-5 flex items-center gap-3 text-xs text-slate-500">
                <span className="flex items-center gap-1.5 font-mono">
                  <CheckCircle2 className="size-4 text-emerald-600" />
                  <span>Configurable confidence cut-offs</span>
                </span>
                <span className="flex items-center gap-1.5 font-mono">
                  <CheckCircle2 className="size-4 text-emerald-600" />
                  <span>Audit logging</span>
                </span>
              </div>
            </div>

            {/* Bento Card 4: Multi-Channel Orchestration (Span 6) */}
            <div className="lg:col-span-6 rounded-2xl border border-slate-200/90 bg-white p-6 sm:p-8 shadow-xs hover:border-blue-400 hover:shadow-sm transition-all">
              <div className="size-11 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center border border-indigo-100 mb-5">
                <Layers className="size-5" />
              </div>
              <span className="text-xs font-mono font-bold text-indigo-600 uppercase tracking-wider block mb-2">
                OMNICHANNEL RUNTIME
              </span>
              <h3 className="text-xl font-bold text-slate-900 tracking-tight">
                Deploy One Flow Across WhatsApp, SMS &amp; Web
              </h3>
              <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                Build your conversational logic once. PulseQuo automatically adapts payloads to match WhatsApp Cloud API interactive
                buttons, carrier SMS text limits, and website chat widgets seamlessly.
              </p>
              <div className="mt-5 flex items-center gap-3 text-xs text-slate-500">
                <span className="flex items-center gap-1.5 font-mono">
                  <CheckCircle2 className="size-4 text-indigo-600" />
                  <span>Meta Official Cloud API</span>
                </span>
                <span className="flex items-center gap-1.5 font-mono">
                  <CheckCircle2 className="size-4 text-indigo-600" />
                  <span>TRAI DLT Engine</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 6: MEASURABLE BUSINESS ROI (#impact)
          ========================================================================= */}
      <section id="impact" className="py-6 sm:py-8 lg:py-10 bg-slate-50/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="MEASURABLE IMPACT"
            title="Smarter Operations with Proven Business Gains"
            description="Proven business metrics achieved by high-volume enterprises using PulseQuo's AI and automation runtime."
          />

          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* ROI 1 */}
            <div className="rounded-xl bg-white border border-slate-200/90 p-6 shadow-xs hover:border-blue-300 hover:shadow-md transition-all">
              <span className="text-3xl sm:text-4xl font-black text-blue-600 font-mono tracking-tight block">
                85%
              </span>
              <h4 className="text-base font-bold text-slate-900 mt-2">Deflection of Routine Queries</h4>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                Allow AI agents to handle standard pricing queries, opening hours, and status lookups automatically.
              </p>
            </div>

            {/* ROI 2 */}
            <div className="rounded-xl bg-white border border-slate-200/90 p-6 shadow-xs hover:border-purple-300 hover:shadow-md transition-all">
              <span className="text-3xl sm:text-4xl font-black text-purple-600 font-mono tracking-tight block">
                3.8x
              </span>
              <h4 className="text-base font-bold text-slate-900 mt-2">Faster Inbound Response</h4>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                Instant pre-qualification and routing reduces lead drop-off and books meetings before prospects go cold.
              </p>
            </div>

            {/* ROI 3 */}
            <div className="rounded-xl bg-white border border-slate-200/90 p-6 shadow-xs hover:border-emerald-300 hover:shadow-md transition-all">
              <span className="text-3xl sm:text-4xl font-black text-emerald-600 font-mono tracking-tight block">
                100%
              </span>
              <h4 className="text-base font-bold text-slate-900 mt-2">Grounded Zero Hallucination</h4>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                Strict RAG document grounding guarantees compliance with enterprise security and brand messaging standards.
              </p>
            </div>

            {/* ROI 4 */}
            <div className="rounded-xl bg-white border border-slate-200/90 p-6 shadow-xs hover:border-blue-300 hover:shadow-md transition-all">
              <span className="text-3xl sm:text-4xl font-black text-slate-900 font-mono tracking-tight block">
                0 Sprints
              </span>
              <h4 className="text-base font-bold text-slate-900 mt-2">Engineering Overhead</h4>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                Marketing, support, and sales teams update conversational flows visually in seconds without engineering deployments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 7: FREQUENTLY ASKED QUESTIONS (#faqs)
          Scrollable Clamped Accordion with Header Tag on Top
          ========================================================================= */}
      <section id="faqs" className="py-6 sm:py-8 lg:py-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Column: Context & Support Link */}
            <div className="lg:col-span-5">
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-[-0.03em] leading-tight">
                AI &amp; Automation Questions Answered.
              </h2>

              <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed">
                Clear technical details on Model Context Protocol, visual flow builders, Claude / OpenAI model routing,
                and enterprise hallucination guardrails.
              </p>

              <div className="mt-8 p-6 rounded-2xl bg-slate-50 border border-slate-200/80">
                <h4 className="text-sm font-bold text-slate-900">Need a custom MCP tool integration?</h4>
                <p className="mt-1.5 text-xs text-slate-600 leading-relaxed">
                  Our enterprise solution architects can help connect your proprietary internal APIs, ERP systems,
                  or Postgres databases directly into PulseQuo AI agents.
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

            {/* Right Column: Scrollable Clamped Accordion with Header Tag on Top */}
            <div className="lg:col-span-7 flex flex-col">
              <div className="flex items-center justify-between pb-3 px-1">
                <span className="text-xs font-mono font-bold tracking-wider text-slate-800 uppercase">
                  Frequently Asked Questions
                </span>
                <span className="text-xs text-slate-400 font-mono">
                  Scroll to view all ({aiFaqs.length})
                </span>
              </div>
              <FAQAccordion items={aiFaqs} maxHeight="max-h-[380px] sm:max-h-[420px]" />
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 8: CLOSING CTA (#get-started)
          ========================================================================= */}
      <CTASection
        headline="Ready to Make Your Business Smarter with AI?"
        subheadline="Schedule a tailored walkthrough of PulseQuo's visual flow builder and autonomous MCP agents with our engineering team."
        primaryCtaText="Book an AI Demo"
        primaryCtaHref="/book-demo?product=AI+%26+Automation"
        secondaryCtaText="Explore Developer Docs"
        secondaryCtaHref="/developers/webhooks"
      />
    </div>
  )
}
