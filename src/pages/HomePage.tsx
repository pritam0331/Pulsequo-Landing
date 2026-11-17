/**
 * PulseQuo Marketing Home Page - Clean Enterprise Edition
 * Route: /
 * Sections: Hero (flat crisp preview), Telemetry Bar, Product Engines Bento Grid,
 *           Visual Workflow Builder, Integrations & Ecosystem Grid, Solutions Navigator,
 *           Customer Impact Case Studies, FAQs, Final Closing CTA.
 */

import { Link } from 'react-router'
import { motion } from 'motion/react'
import {
  MessageSquare,
  TrendingUp,
  Headphones,
  Bot,
  ArrowRight,
  CalendarCheck,
  CheckCircle2,
  Zap,
  Sparkles,
  Building,
  Rocket,
  Radio,
  Cloud,
  Target,
  KeyRound,
  Hash,
  FileSpreadsheet,
  ShoppingBag,
  Code2,
} from 'lucide-react'
import { SEO } from '../components/common/SEO'
import { SectionHeading } from '../components/common/SectionHeading'
import { PlatformComposition } from '../components/common/PlatformComposition'
import { WorkflowCanvas } from '../components/common/WorkflowCanvas'
import { CTASection } from '../components/common/CTASection'
import { FAQAccordion } from '../components/common/FAQAccordion'
import { generalFaqs } from '../data/faqs'

const easeOutCurve = [0.22, 1, 0.36, 1] as const

export function MarketingHomePage() {
  const achievements = [
    {
      stat: '99.99%',
      label: 'Carrier Uptime SLA',
      sublabel: 'Direct SMPP & Meta Cloud routes',
    },
    {
      stat: '45M+',
      label: 'Messages Dispatched',
      sublabel: 'Transactional OTPs & campaigns',
    },
    {
      stat: '< 2s',
      label: 'AI Response Latency',
      sublabel: 'Grounded in enterprise docs',
    },
    {
      stat: '10x',
      label: 'Faster Sales Follow-up',
      sublabel: 'Instant WhatsApp conversion funnel',
    },
  ]

  const integrations = [
    {
      name: 'WhatsApp Business API',
      tag: 'Meta Official Partner',
      icon: MessageSquare,
      accent: 'blue',
      link: '/products/communication-cloud',
    },
    {
      name: 'Carrier SMS SMPP',
      tag: 'TRAI DLT Engine',
      icon: Radio,
      accent: 'blue',
      link: '/products/communication-cloud',
    },
    {
      name: 'Salesforce CRM',
      tag: 'Bi-Directional Sync',
      icon: Cloud,
      accent: 'blue',
      link: '/integrations',
    },
    {
      name: 'HubSpot',
      tag: 'Automated Deals & Leads',
      icon: Target,
      accent: 'blue',
      link: '/integrations',
    },
    {
      name: 'Model Context Protocol',
      tag: 'Native MCP Tools',
      icon: Bot,
      accent: 'purple',
      link: '/products/ai-automation',
    },
    {
      name: 'HMAC Webhooks',
      tag: 'Signed Secure Callbacks',
      icon: KeyRound,
      accent: 'purple',
      link: '/developers/webhooks',
    },
    {
      name: 'Slack Connect',
      tag: 'Internal Team Escalations',
      icon: Hash,
      accent: 'blue',
      link: '/integrations',
    },
    {
      name: 'Google Sheets & Drive',
      tag: 'Real-Time Data Sync',
      icon: FileSpreadsheet,
      accent: 'blue',
      link: '/integrations',
    },
    {
      name: 'Shopify & WooCommerce',
      tag: 'Order & Cart Sync',
      icon: ShoppingBag,
      accent: 'blue',
      link: '/integrations',
    },
    {
      name: 'RESTful Core API',
      tag: 'OpenAPI 3.1 Spec',
      icon: Code2,
      accent: 'blue',
      link: '/developers/api-documentation',
    },
  ]

  const growthSolutions = [
    {
      icon: TrendingUp,
      iconBg: 'bg-blue-50 text-blue-600',
      title: 'Sales teams',
      description:
        'Engage high-intent inbound prospects instantly on WhatsApp, qualify leads conversationally with AI, and accelerate deals across Kanban stages.',
      link: '/solutions/sales-teams',
      linkText: 'View sales solution',
      textColor: 'text-blue-600 hover:text-blue-700',
    },
    {
      icon: Headphones,
      iconBg: 'bg-purple-50 text-purple-600',
      title: 'Support teams',
      description:
        'Consolidate multi-channel inquiries into a unified ticketing inbox, automate Tier-1 answers via AI agents, and enforce strict SLA timers.',
      link: '/solutions/customer-support',
      linkText: 'View support solution',
      textColor: 'text-purple-600 hover:text-purple-700',
    },
    {
      icon: Sparkles,
      iconBg: 'bg-blue-50 text-blue-600',
      title: 'Marketing teams',
      description:
        'Broadcast pre-approved WhatsApp marketing templates and bulk promotional SMS with real-time delivery DLR telemetry and segment tagging.',
      link: '/solutions/marketing-teams',
      linkText: 'View marketing solution',
      textColor: 'text-blue-600 hover:text-blue-700',
    },
    {
      icon: Rocket,
      iconBg: 'bg-purple-50 text-purple-600',
      title: 'Startups & scaleups',
      description:
        'Consolidate communication, CRM, and AI bots into one predictable monthly bill, automating customer acquisition without hiring large teams.',
      link: '/solutions/startups',
      linkText: 'View startup solution',
      textColor: 'text-purple-600 hover:text-purple-700',
    },
    {
      icon: Building,
      iconBg: 'bg-blue-50 text-blue-600',
      title: 'Global enterprises',
      description:
        'High-throughput carrier routing, custom Model Context Protocol (MCP) server integrations, dedicated SLAs, and multi-tenant isolation.',
      link: '/solutions/enterprises',
      linkText: 'View enterprise solution',
      textColor: 'text-blue-600 hover:text-blue-700',
    },
  ]

  const customerReviews = [
    {
      name: 'Aditi Sharma',
      role: 'Head of Growth · Apex Retail',
      avatar: 'AS',
      text: 'Switching to PulseQuo reduced our customer acquisition response time from 35 minutes down to 45 seconds on WhatsApp. Having our Sales CRM and WhatsApp in one screen is a game changer.',
      metric: '+48% Conversion Rate',
    },
    {
      name: 'Vikramaditya Roy',
      role: 'VP Engineering · FinEdge Pay',
      avatar: 'VR',
      text: 'We dispatch over 2 million transactional OTPs every month. PulseQuo’s TRAI DLT compliance and SMPP routing give us an unbeatable 99.98% delivery receipt rate with zero headaches.',
      metric: '99.98% DLR Reliability',
    },
    {
      name: 'Pooja Venkatesh',
      role: 'Chief Customer Officer · NovaHealth',
      avatar: 'PV',
      text: 'The AI agents handle 78% of tier-1 support tickets automatically, and when human handoff occurs, our agents have the complete conversational history right in front of them.',
      metric: '78% Autonomous Deflection',
    },
  ]

  return (
    <div className="relative overflow-hidden bg-white text-slate-900 selection:bg-blue-600 selection:text-white">
      <SEO
        title="PulseQuo · One Platform. Complete Customer Experience."
        description="Unified enterprise platform connecting official WhatsApp & SMS CPaaS, intelligent Sales CRM pipelines, Support helpdesk, and autonomous AI agents."
        canonicalPath="/"
      />

      {/* ─────────────────────────────────────────────────────────────
          1. HERO SECTION: CLEAN, FOCUSED, HIGH-CONVERSION ARCHITECTURE
         ───────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-50/70 via-white to-white pt-3 sm:pt-5 lg:pt-6 pb-6 sm:pb-8 lg:pb-10 border-b border-slate-100">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            {/* Main Command Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: easeOutCurve }}
              className="text-2xl sm:text-4xl lg:text-[44px] xl:text-[48px] font-black text-slate-900 tracking-[-0.03em] leading-[1.12] max-w-3xl mx-auto break-words"
            >
              One intelligent platform for{' '}
              <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-blue-700 bg-clip-text text-transparent">
                every customer conversation.
              </span>
            </motion.h1>

            {/* Clear, Authoritative Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1, ease: easeOutCurve }}
              className="mt-3 sm:mt-3.5 text-xs sm:text-sm lg:text-[15px] text-slate-600 leading-relaxed max-w-2xl mx-auto font-normal text-balance"
            >
              Connect every message directly to revenue and resolution. PulseQuo unifies{' '}
              <span className="text-slate-900 font-semibold">official WhatsApp & SMS CPaaS</span>,{' '}
              <span className="text-slate-900 font-semibold">sales pipelines</span>,{' '}
              <span className="text-slate-900 font-semibold">support helpdesk</span>, and{' '}
              <span className="text-slate-900 font-semibold">autonomous AI agents</span> in a single synchronized workspace.
            </motion.p>

            {/* Primary Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2, ease: easeOutCurve }}
              className="mt-4 sm:mt-5 flex flex-col sm:flex-row items-center justify-center gap-3"
            >
              <Link
                to="/book-demo"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 text-xs sm:text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors shadow-sm"
              >
                <CalendarCheck className="size-4" />
                <span>Book a personalized demo</span>
              </Link>

              <a
                href="#platform-overview"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 text-xs sm:text-sm font-semibold text-slate-700 bg-white hover:bg-slate-50 border border-slate-300 hover:border-slate-400 rounded-lg transition-colors shadow-2xs"
              >
                <span>Explore the 4 engines</span>
                <ArrowRight className="size-4 text-slate-400" />
              </a>
            </motion.div>
          </div>

          {/* Clean, Flat, Interactive Platform Workspace Preview */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: easeOutCurve }}
            className="mt-5 sm:mt-6 relative w-full max-w-full overflow-hidden"
          >
            <PlatformComposition />
          </motion.div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          2. ENTERPRISE TELEMETRY & PROOF STRIP
         ───────────────────────────────────────────────────────────── */}
      <section className="py-10 bg-slate-50/60 border-y border-slate-200/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {achievements.map((item, idx) => (
              <div key={idx} className="flex flex-col">
                <p className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight font-mono">
                  {item.stat}
                </p>
                <p className="text-sm font-semibold text-slate-800 mt-1">
                  {item.label}
                </p>
                <p className="text-xs text-slate-500 mt-0.5">
                  {item.sublabel}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          3. PRODUCT ENGINES BENTO GRID
         ───────────────────────────────────────────────────────────── */}
      <section id="platform-overview" className="py-20 sm:py-28 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Four Synchronized Engines. One Cohesive Workspace."
            description="Replace fragmented point solutions with an enterprise infrastructure engineered to connect every customer message directly to revenue and resolution."
          />

          <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-7">
            {/* Bento Card 1: Communication Cloud (7 Columns) */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: 0.05, ease: easeOutCurve }}
              className="lg:col-span-7 rounded-2xl border border-slate-200 bg-gradient-to-br from-blue-50/30 via-white to-slate-50 p-8 shadow-xs hover:border-blue-300 hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="mb-6">
                  <div className="flex size-12 items-center justify-center rounded-xl bg-blue-600 text-white shadow-md shadow-blue-600/20">
                    <MessageSquare className="size-6" />
                  </div>
                </div>
                <h3 className="text-2xl font-black text-slate-900 tracking-tight">Communication Cloud</h3>
                <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                  Direct Meta WhatsApp Business API, carrier-grade SMS routing with TRAI DLT registration, voice calling, and a unified omnichannel inbox for your team.
                </p>

                {/* Architecture Spec Highlights */}
                <div className="mt-6 rounded-xl border border-slate-200 bg-white p-4 shadow-2xs">
                  <div className="flex items-center justify-between border-b border-slate-100 pb-2.5 mb-3">
                    <span className="text-xs font-semibold text-slate-800 flex items-center gap-1.5">
                      <span className="size-2 rounded-xs bg-emerald-500" /> Carrier Connection Status
                    </span>
                    <span className="text-[11px] font-mono text-slate-500">Sub-second Routing</span>
                  </div>
                  <div className="grid grid-cols-2 gap-3 text-xs">
                    <div className="p-2 rounded-lg bg-slate-50 border border-slate-100">
                      <span className="text-[10px] text-slate-400 block font-medium">Throughput</span>
                      <span className="font-mono font-bold text-slate-800 text-xs">250 msg/sec</span>
                    </div>
                    <div className="p-2 rounded-lg bg-slate-50 border border-slate-100">
                      <span className="text-[10px] text-slate-400 block font-medium">Compliance</span>
                      <span className="font-mono font-bold text-blue-600 text-xs">DLT & V20 Verified</span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-2 gap-3 text-xs font-medium text-slate-700">
                  <div className="flex items-center gap-1.5"><CheckCircle2 className="size-4 text-emerald-600" /> Meta Official Cloud API</div>
                  <div className="flex items-center gap-1.5"><CheckCircle2 className="size-4 text-emerald-600" /> TRAI DLT Compliant SMS</div>
                  <div className="flex items-center gap-1.5"><CheckCircle2 className="size-4 text-emerald-600" /> Sub-second delivery DLR</div>
                  <div className="flex items-center gap-1.5"><CheckCircle2 className="size-4 text-emerald-600" /> Pre-approved templates</div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-200/80">
                <Link
                  to="/products/communication-cloud"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700"
                >
                  <span>View communication cloud specs</span>
                  <ArrowRight className="size-4" />
                </Link>
              </div>
            </motion.div>

            {/* Bento Card 2: Sales CRM (5 Columns) */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: 0.1, ease: easeOutCurve }}
              className="lg:col-span-5 rounded-2xl border border-slate-200 bg-gradient-to-br from-blue-50/20 via-white to-slate-50 p-8 shadow-xs hover:border-blue-300 hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="mb-6">
                  <div className="flex size-12 items-center justify-center rounded-xl bg-blue-600 text-white shadow-md shadow-blue-600/20">
                    <TrendingUp className="size-6" />
                  </div>
                </div>
                <h3 className="text-2xl font-black text-slate-900 tracking-tight">Sales CRM</h3>
                <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                  Turn chat interactions into closed revenue. Drag-and-drop visual Kanban pipelines, lead scoring, deal forecasts, and 1-click WhatsApp quotes.
                </p>

                {/* Pipeline Stages Mini Indicator */}
                <div className="mt-6 space-y-2 rounded-xl border border-slate-200 bg-white p-4 shadow-2xs">
                  <div className="flex justify-between text-xs font-bold text-slate-700">
                    <span>Active Pipeline</span>
                    <span className="text-blue-600 font-mono">₹1,842,000</span>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-center text-[10px] font-bold">
                    <div className="bg-slate-100 p-1.5 rounded-md">New (18)</div>
                    <div className="bg-purple-50 text-purple-700 p-1.5 rounded-md border border-purple-200">Demo (7)</div>
                    <div className="bg-blue-50 text-blue-700 p-1.5 rounded-md border border-blue-200">Closing (4)</div>
                  </div>
                  <div className="h-1.5 w-full rounded-xs bg-slate-100 overflow-hidden mt-3">
                    <div className="h-full bg-gradient-to-r from-blue-600 to-purple-600 rounded-xs w-[78%]" />
                  </div>
                </div>

                <div className="mt-6 space-y-2 text-xs font-medium text-slate-700">
                  <div className="flex items-center gap-1.5"><CheckCircle2 className="size-4 text-emerald-600" /> Multi-channel lead capture</div>
                  <div className="flex items-center gap-1.5"><CheckCircle2 className="size-4 text-emerald-600" /> Stagnant deal alerts</div>
                  <div className="flex items-center gap-1.5"><CheckCircle2 className="size-4 text-emerald-600" /> 1-click WhatsApp follow-ups</div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-200/80">
                <Link
                  to="/products/sales-crm"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700"
                >
                  <span>View sales CRM features</span>
                  <ArrowRight className="size-4" />
                </Link>
              </div>
            </motion.div>

            {/* Bento Card 3: Support CRM (5 Columns) */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: 0.05, ease: easeOutCurve }}
              className="lg:col-span-5 rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-50 via-white to-blue-50/20 p-8 shadow-xs hover:border-blue-300 hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="mb-6">
                  <div className="flex size-12 items-center justify-center rounded-xl bg-[#070d24] text-white shadow-md shadow-[#070d24]/20">
                    <Headphones className="size-6" />
                  </div>
                </div>
                <h3 className="text-2xl font-black text-slate-900 tracking-tight">Support CRM</h3>
                <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                  Resolve tickets faster with shared queues, SLA breach countdown timers, automated knowledge bases, and intelligent agent routing.
                </p>

                {/* Support SLA Queue Mini Indicator */}
                <div className="mt-6 space-y-2 rounded-xl border border-slate-200 bg-white p-4 shadow-2xs">
                  <div className="flex justify-between text-xs font-bold text-slate-700">
                    <span>SLA Response Countdown</span>
                    <span className="text-blue-600 font-mono">03m : 18s left</span>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-center text-[10px] font-bold">
                    <div className="bg-slate-100 p-1.5 rounded-md">Queued (9)</div>
                    <div className="bg-purple-50 text-purple-700 p-1.5 rounded-md border border-purple-200">Active (14)</div>
                    <div className="bg-blue-50 text-blue-700 p-1.5 rounded-md border border-blue-200">Resolved (52)</div>
                  </div>
                  <div className="h-1.5 w-full rounded-xs bg-slate-100 overflow-hidden mt-3">
                    <div className="h-full bg-gradient-to-r from-blue-600 to-purple-600 rounded-xs w-[92%]" />
                  </div>
                </div>

                <div className="mt-6 space-y-2 text-xs font-medium text-slate-700">
                  <div className="flex items-center gap-1.5"><CheckCircle2 className="size-4 text-emerald-600" /> Automated ticket creation from all channels</div>
                  <div className="flex items-center gap-1.5"><CheckCircle2 className="size-4 text-emerald-600" /> Enforceable first-response & resolution SLAs</div>
                  <div className="flex items-center gap-1.5"><CheckCircle2 className="size-4 text-emerald-600" /> Skill-based agent work distribution</div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-200/80">
                <Link
                  to="/products/support-crm"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700"
                >
                  <span>View support CRM specs</span>
                  <ArrowRight className="size-4" />
                </Link>
              </div>
            </motion.div>

            {/* Bento Card 4: AI & Automation (7 Columns) */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: 0.1, ease: easeOutCurve }}
              className="lg:col-span-7 rounded-2xl border border-slate-200 bg-gradient-to-br from-purple-50/30 via-white to-slate-50 p-8 shadow-xs hover:border-purple-300 hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="mb-6">
                  <div className="flex size-12 items-center justify-center rounded-xl bg-purple-600 text-white shadow-md shadow-purple-600/20">
                    <Bot className="size-6" />
                  </div>
                </div>
                <h3 className="text-2xl font-black text-slate-900 tracking-tight">AI & Automation</h3>
                <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                  Design complex multi-step customer journeys visually. Deploy autonomous AI agents grounded in enterprise knowledge bases with native Model Context Protocol (MCP) tool execution.
                </p>

                {/* Architecture Spec Highlights */}
                <div className="mt-6 rounded-xl border border-slate-200 bg-white p-4 shadow-2xs">
                  <div className="flex items-center justify-between border-b border-slate-100 pb-2 mb-3">
                    <span className="text-xs font-semibold text-slate-800 flex items-center gap-1.5">
                      <span className="size-2 rounded-xs bg-purple-500" /> Autonomous Agent Engine
                    </span>
                    <span className="text-[11px] font-mono text-purple-600 font-semibold">Native MCP Standard</span>
                  </div>
                  <div className="grid grid-cols-2 gap-3 text-xs">
                    <div className="p-2 rounded-lg bg-slate-50 border border-slate-100">
                      <span className="text-[10px] text-slate-400 block font-medium">Grounding</span>
                      <span className="font-mono font-bold text-slate-800 text-xs">Vector RAG + Docs</span>
                    </div>
                    <div className="p-2 rounded-lg bg-slate-50 border border-slate-100">
                      <span className="text-[10px] text-slate-400 block font-medium">Execution</span>
                      <span className="font-mono font-bold text-emerald-600 text-xs">Zero-Hallucination Tools</span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-2 gap-3 text-xs font-medium text-slate-700">
                  <div className="flex items-center gap-1.5"><CheckCircle2 className="size-4 text-emerald-600" /> Drag-and-drop conversational designer</div>
                  <div className="flex items-center gap-1.5"><CheckCircle2 className="size-4 text-emerald-600" /> Enterprise RAG vector grounding</div>
                  <div className="flex items-center gap-1.5"><CheckCircle2 className="size-4 text-emerald-600" /> Model Context Protocol (MCP) support</div>
                  <div className="flex items-center gap-1.5"><CheckCircle2 className="size-4 text-emerald-600" /> Webhook triggers & drip sequences</div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-200/80">
                <Link
                  to="/products/ai-automation"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-purple-600 hover:text-purple-700"
                >
                  <span>View AI & automation specs</span>
                  <ArrowRight className="size-4" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          4. VISUAL WORKFLOW BUILDER SHOWCASE
         ───────────────────────────────────────────────────────────── */}
      <section className="py-20 sm:py-28 bg-gradient-to-b from-white via-slate-50/50 to-white border-t border-slate-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Column: Lead Qualification Workflow Canvas */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.55, ease: easeOutCurve }}
              className="lg:col-span-7 order-2 lg:order-1"
            >
              <WorkflowCanvas className="bg-white shadow-xl shadow-slate-900/5 border-slate-200" />
            </motion.div>

            {/* Right Column: Visual Flow Automation Details */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.55, delay: 0.1, ease: easeOutCurve }}
              className="lg:col-span-5 order-1 lg:order-2"
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-[1.12]">
                Visual flow automation. Built for scale.
              </h2>

              <p className="mt-4 text-base text-slate-600 leading-relaxed font-normal">
                Build multi-step conversational journeys in minutes. Trigger routing on WhatsApp, qualify leads with autonomous AI, and orchestrate handoffs between sales and support.
              </p>

              {/* Feature Highlights */}
              <div className="mt-8 space-y-4">
                <div className="flex items-start gap-3.5">
                  <div className="size-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 mt-0.5 border border-blue-100">
                    <Zap className="size-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Instant Omnichannel Triggers</h4>
                    <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">
                      Launch flows instantly upon WhatsApp incoming chats, SMS keywords, or webhook events.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="size-8 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center shrink-0 mt-0.5 border border-purple-100">
                    <Sparkles className="size-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Autonomous Intent Qualification</h4>
                    <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">
                      AI agents extract intent, company size, and urgency with zero hallucination.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="size-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 mt-0.5 border border-blue-100">
                    <CheckCircle2 className="size-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Dynamic Multi-Branch Routing</h4>
                    <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">
                      Auto-route high-intent leads to CRM sales pipelines or support queues in real time.
                    </p>
                  </div>
                </div>
              </div>

              {/* Action Links */}
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Link
                  to="/products/ai-automation"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm font-semibold shadow-xs transition-colors"
                >
                  <span>Explore AI & Automation</span>
                  <ArrowRight className="size-4" />
                </Link>

                <Link
                  to="/book-demo"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white border border-slate-300 hover:bg-slate-50 text-slate-700 text-xs sm:text-sm font-semibold shadow-2xs transition-colors"
                >
                  <CalendarCheck className="size-4 text-blue-600" />
                  <span>Book Demo</span>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          5. INTEGRATIONS & ECOSYSTEM GRID (QUIET, TRUSTWORTHY ARCHITECTURE)
         ───────────────────────────────────────────────────────────── */}
      <section className="py-20 sm:py-24 bg-slate-50/70 border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <span className="text-xs font-semibold text-blue-600 block mb-2 font-mono uppercase tracking-wider">
              Ecosystem & Integrations
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">
              Connected with your existing enterprise stack
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
              Native bi-directional connectors, carrier SMPP bindings, and Model Context Protocol (MCP) tooling.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {integrations.map((item, idx) => {
              const isPurple = item.accent === 'purple'
              const IconComponent = item.icon

              return (
                <Link
                  key={idx}
                  to={item.link}
                  className="group flex flex-col p-4.5 rounded-xl bg-white border border-slate-200/90 hover:border-blue-500 hover:shadow-xs transition-all duration-200"
                >
                  <div
                    className={`size-10 rounded-lg flex items-center justify-center border transition-all duration-200 shadow-2xs ${
                      isPurple
                        ? 'bg-purple-50/80 border-purple-200/80 text-purple-600 group-hover:bg-purple-600 group-hover:text-white group-hover:border-purple-600'
                        : 'bg-blue-50/80 border-blue-200/80 text-blue-600 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600'
                    }`}
                  >
                    <IconComponent className="size-5" />
                  </div>

                  <h3 className="mt-4 text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors tracking-tight leading-snug">
                    {item.name}
                  </h3>

                  <p className="mt-1 text-xs text-slate-500 font-medium">
                    {item.tag}
                  </p>
                </Link>
              )
            })}
          </div>

          {/* Ecosystem Trust & Spec Bar */}
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 p-4.5 rounded-xl bg-white border border-slate-200 shadow-xs">
            <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-600">
              <span className="flex items-center gap-2">
                <span className="size-2 rounded-xs bg-emerald-500 inline-block" />
                <span className="font-bold text-slate-900">50+ Enterprise Connectors</span>
              </span>
              <span className="text-slate-300">·</span>
              <span>Sub-120ms Event Relay</span>
              <span className="text-slate-300 hidden md:inline">·</span>
              <span className="hidden md:inline">OpenAPI 3.1 & SDKs</span>
              <span className="text-slate-300 hidden lg:inline">·</span>
              <span className="hidden lg:inline text-purple-700 font-semibold">Model Context Protocol</span>
            </div>

            <Link
              to="/integrations"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 hover:text-blue-700 transition-colors"
            >
              <span>Explore all integrations & developer specs</span>
              <ArrowRight className="size-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          6. SOLUTIONS BY TEAM & COMPANY STAGE
         ───────────────────────────────────────────────────────────── */}
      <section className="py-20 sm:py-28 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Tailored for Every Operational Growth Stage"
            description="Discover how PulseQuo aligns specifically with your team’s KPIs and operational priorities."
          />

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {growthSolutions.map((sol, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.45, delay: idx * 0.05, ease: easeOutCurve }}
                className="rounded-xl border border-slate-200 bg-white p-7 hover:border-slate-300 hover:shadow-xs transition-all duration-200 flex flex-col justify-between group"
              >
                <div>
                  <div className={`flex size-11 items-center justify-center rounded-lg ${sol.iconBg} mb-5`}>
                    <sol.icon className="size-5" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">{sol.title}</h3>
                  <p className="mt-2.5 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {sol.description}
                  </p>
                </div>
                <Link to={sol.link} className={`mt-6 inline-flex items-center gap-1.5 text-xs font-semibold ${sol.textColor}`}>
                  <span>{sol.linkText}</span> <ArrowRight className="size-3.5" />
                </Link>
              </motion.div>
            ))}

            {/* Custom Architecture Card (6th card) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.45, delay: 5 * 0.05, ease: easeOutCurve }}
              className="rounded-xl border border-blue-950 bg-[#070d24] text-white p-7 flex flex-col justify-between shadow-sm"
            >
              <div>
                <span className="text-xs font-mono text-purple-400 font-semibold block mb-2">Custom Architecture</span>
                <h3 className="text-xl font-bold text-white">Explore all solutions</h3>
                <p className="mt-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed">
                  See how PulseQuo integrates with your specific industry stack, data warehouse, and technical compliance needs.
                </p>
              </div>
              <Link
                to="/solutions"
                className="mt-6 inline-flex items-center gap-1.5 text-xs font-semibold text-blue-400 hover:text-white transition-colors"
              >
                <span>Browse all use cases</span> <ArrowRight className="size-3.5" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          7. VERIFIED CUSTOMER IMPACT STORIES (NO STAR RATINGS)
         ───────────────────────────────────────────────────────────── */}
      <section className="py-20 sm:py-28 bg-slate-50/70 border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Trusted by Fast-Growing Companies"
            description="See how enterprise teams rely on PulseQuo every day to drive revenue and deliver stellar customer support."
          />

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
            {customerReviews.map((rev, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.45, delay: i * 0.08, ease: easeOutCurve }}
                className="rounded-xl bg-white border border-slate-200 p-7 shadow-xs hover:border-slate-300 hover:shadow-sm transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="mb-4">
                    <span className="text-xs font-bold text-blue-600 font-mono bg-blue-50 border border-blue-200/80 px-2.5 py-1 rounded-sm">
                      {rev.metric}
                    </span>
                  </div>

                  <p className="text-sm text-slate-700 leading-relaxed italic">
                    “{rev.text}”
                  </p>
                </div>

                <div className="mt-6 pt-5 border-t border-slate-100 flex items-center gap-3">
                  <div className="size-10 rounded-lg bg-slate-900 text-white font-semibold text-xs flex items-center justify-center shadow-2xs">
                    {rev.avatar}
                  </div>
                  <div>
                    <h5 className="text-sm font-bold text-slate-900">{rev.name}</h5>
                    <p className="text-xs text-slate-500">{rev.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          8. FREQUENTLY ASKED QUESTIONS (SPLIT TWO-COLUMN LAYOUT)
         ───────────────────────────────────────────────────────────── */}
      <section id="faqs" className="py-20 sm:py-28 bg-white border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            {/* Left Column: Heading, Subhead & Contact Action */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, ease: easeOutCurve }}
              className="lg:col-span-5 lg:sticky lg:top-28"
            >
              <span className="text-xs font-semibold text-blue-600 font-mono block mb-2">
                Frequently Asked Questions
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-[1.12]">
                Everything you need to know
              </h2>
              <p className="mt-4 text-base text-slate-600 leading-relaxed font-normal">
                Clear answers about PulseQuo’s architecture, carrier onboarding, DLT registration, and capabilities.
              </p>

              {/* Consultation Card */}
              <div className="mt-8 p-5 rounded-xl bg-slate-50 border border-slate-200">
                <h4 className="text-sm font-bold text-slate-900">Have questions about your setup?</h4>
                <p className="mt-1.5 text-xs text-slate-600 leading-relaxed">
                  Our solution engineers can review your existing telecom routes, WhatsApp templates, and CRM integration requirements.
                </p>
                <Link
                  to="/book-demo"
                  className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-700 transition-colors"
                >
                  <span>Schedule a technical consultation</span>
                  <ArrowRight className="size-3.5" />
                </Link>
              </div>
            </motion.div>

            {/* Right Column: All FAQs in a Single Bordered Flexbox Container */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: 0.1, ease: easeOutCurve }}
              className="lg:col-span-7"
            >
              <FAQAccordion items={generalFaqs} />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          9. FINAL HIGH-CONVERTING CLOSING CTA
         ───────────────────────────────────────────────────────────── */}
      <CTASection
        headline="Ready to Accelerate Your Customer Experience?"
        subheadline="Join forward-thinking businesses using PulseQuo to unify omnichannel messaging, automate sales pipelines, and scale customer support with AI."
        primaryCtaText="Book a Personalized Demo"
        primaryCtaHref="/book-demo"
        secondaryCtaText="Explore Developer APIs"
        secondaryCtaHref="/developers"
        showTrustBadges={false}
      />
    </div>
  )
}
