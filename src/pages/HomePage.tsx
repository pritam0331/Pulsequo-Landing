/**
 * PulseQuo Marketing Home Page - Redesigned Enterprise Edition
 * Route: /
 * Sections: Hero, Interactive Persona Switcher, Platform Command Center, Telemetry Bar,
 *           Bento Grid Product Suites, Interactive ROI Calculator, Solutions Navigator,
 *           Enterprise Architecture, 5-Step Pipeline, Social Proof, FAQs, Final CTA.
 */

import { useState, useRef } from 'react'
import { Link } from 'react-router'
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from 'motion/react'
import {
  MessageSquare,
  TrendingUp,
  Headphones,
  Bot,
  ArrowRight,
  CalendarCheck,
  CheckCircle2,
  Zap,
  BarChart3,
  Globe2,
  Workflow,
  Sparkles,
  Database,
  Building,
  Rocket,
  Lock,
  Star,
  CheckCheck,
  Cpu,
  Activity,
  Clock,
  ChevronRight,
} from 'lucide-react'
import { SEO } from '../components/common/SEO'
import { SectionHeading } from '../components/common/SectionHeading'
import { PlatformComposition } from '../components/common/PlatformComposition'
import { WorkflowCanvas } from '../components/common/WorkflowCanvas'
import { CTASection } from '../components/common/CTASection'
import { FAQAccordion } from '../components/common/FAQAccordion'
import { generalFaqs } from '../data/faqs'

type PersonaType = 'sales' | 'support' | 'marketing' | 'enterprise'

const easeOutCurve = [0.22, 1, 0.36, 1] as const

export function MarketingHomePage() {
  const heroRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress: heroScroll } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  })
  const previewScale = useTransform(heroScroll, [0, 0.6], [0.97, 1.02])
  const previewRotateX = useTransform(heroScroll, [0, 0.6], [6, 0])
  const previewY = useTransform(heroScroll, [0, 0.6], [0, -25])
  const smoothScale = useSpring(previewScale, { stiffness: 120, damping: 25 })
  const smoothRotateX = useSpring(previewRotateX, { stiffness: 120, damping: 25 })
  const smoothY = useSpring(previewY, { stiffness: 120, damping: 25 })

  // Interactive Hero Persona State
  const [activePersona, setActivePersona] = useState<PersonaType>('sales')

  const personaDetails = {
    sales: {
      badge: 'Sales & Revenue Teams',
      title: 'Accelerate lead qualification & WhatsApp deal pipelines',
      description:
        'Engage high-intent inbound leads within seconds on WhatsApp. Qualify prospects conversationally, log interaction histories automatically, and push deals across Kanban stages.',
      stats: '10x Faster First Contact',
      kpi: '+48% Close Rate',
      link: '/solutions/sales-teams',
      ctaText: 'Explore Sales Solution',
    },
    support: {
      badge: 'Support & Success Leaders',
      title: 'Deflect 78% of tier-1 tickets with verified AI agents',
      description:
        'Eliminate repetitive inquiries. Deploy autonomous AI agents grounded in your official documentation, with intelligent skill-based routing and seamless bot-to-human escalation.',
      stats: '< 2s Response Latency',
      kpi: '78% Auto-Deflection',
      link: '/solutions/customer-support',
      ctaText: 'Explore Support Solution',
    },
    marketing: {
      badge: 'Growth & Marketing Heads',
      title: 'Execute verified WhatsApp broadcasts with 99.9% DLR',
      description:
        'Launch targeted promotional and re-engagement campaigns via official WhatsApp Business APIs. Track real-time delivery receipts, click rates, and segmentation tags.',
      stats: '99.98% Carrier DLR',
      kpi: '3.8x Higher Open Rate',
      link: '/solutions/marketing-teams',
      ctaText: 'Explore Marketing Solution',
    },
    enterprise: {
      badge: 'Enterprise CTOs & Architects',
      title: 'Connect WhatsApp, SMS SMPP & custom MCP servers',
      description:
        'Built for high throughput and security. Enjoy dedicated carrier SMPP routes, TRAI DLT compliance, multi-tenant row isolation, and Model Context Protocol integrations.',
      stats: '99.99% Carrier SLA',
      kpi: 'Zero Data Leakage',
      link: '/solutions/enterprises',
      ctaText: 'Explore Enterprise Specs',
    },
  }

  const achievements = [
    {
      icon: Activity,
      stat: '99.99%',
      label: 'Carrier Uptime SLA',
      sublabel: 'Direct SMPP & Meta Cloud routes',
      color: 'bg-blue-100/70 text-blue-600',
    },
    {
      icon: Zap,
      stat: '45M+',
      label: 'Messages Dispatched',
      sublabel: 'Transactional OTPs & campaigns',
      color: 'bg-purple-100/70 text-purple-600',
    },
    {
      icon: Clock,
      stat: '< 2s',
      label: 'AI Response Latency',
      sublabel: 'Grounded in enterprise docs',
      color: 'bg-indigo-100/70 text-indigo-600',
    },
    {
      icon: TrendingUp,
      stat: '10x',
      label: 'Faster Sales Follow-up',
      sublabel: 'Instant WhatsApp conversion funnel',
      color: 'bg-violet-100/70 text-violet-600',
    },
  ]

  const marqueeIntegrations = [
    { name: 'WhatsApp Business API', tag: 'Meta Official', color: 'text-emerald-700 bg-emerald-50 border-emerald-200' },
    { name: 'Carrier SMS SMPP', tag: 'TRAI DLT Engine', color: 'text-blue-700 bg-blue-50 border-blue-200' },
    { name: 'HubSpot CRM', tag: 'Bi-Directional', color: 'text-orange-700 bg-orange-50 border-orange-200' },
    { name: 'Salesforce', tag: 'Live Sync', color: 'text-sky-700 bg-sky-50 border-sky-200' },
    { name: 'Model Context Protocol', tag: 'Native MCP Standard', color: 'text-purple-700 bg-purple-50 border-purple-200' },
    { name: 'HMAC Webhooks', tag: 'Signed Callbacks', color: 'text-indigo-700 bg-indigo-50 border-indigo-200' },
    { name: 'Slack Connect', tag: 'Escalations', color: 'text-amber-700 bg-amber-50 border-amber-200' },
    { name: 'Google Sheets & Drive', tag: 'Auto Export', color: 'text-emerald-800 bg-emerald-50 border-emerald-200' },
    { name: 'RESTful Core API', tag: 'OpenAPI Spec', color: 'text-violet-700 bg-violet-50 border-violet-200' },
    { name: 'Zapier Automation', tag: '5,000+ Apps', color: 'text-rose-700 bg-rose-50 border-rose-200' },
  ]

  const enterprisePillars = [
    {
      icon: Globe2,
      title: 'Unified customer chronology',
      description:
        'Every touchpoint across WhatsApp, SMS, web chat, CRM deals, and tickets lives in one synchronized customer history.',
    },
    {
      icon: MessageSquare,
      title: 'Omnichannel CPaaS',
      description:
        'Direct Meta Cloud API and telecom operator SMPP routes with sub-second delivery receipts and automatic carrier fallbacks.',
    },
    {
      icon: Cpu,
      title: 'Autonomous AI with MCP',
      description:
        'Autonomous LLM agents equipped with Model Context Protocol tools to safely read inventories, book slots, and update CRM records.',
    },
    {
      icon: Workflow,
      title: 'Visual flow builder',
      description:
        'Drag-and-drop visual logic designer to build multi-branch decision trees, conditional broadcasts, and automated drip sequences.',
    },
    {
      icon: Database,
      title: 'Centralized tenant store',
      description:
        'Eliminate isolated data silos. Contacts, past interactions, order history, and deal stages reside in a shared tenant database.',
    },
    {
      icon: Zap,
      title: 'Carrier-grade throughput',
      description:
        'Carrier-grade infrastructure capable of reliably blasting millions of transactional notifications without throttling.',
    },
    {
      icon: BarChart3,
      title: 'Real-time telemetry',
      description:
        'Granular delivery receipts (DLR), conversion funnels, agent velocity, and automated SLA resolution reporting.',
    },
    {
      icon: Lock,
      title: 'Enterprise governance',
      description:
        'Role-based access control (RBAC), multi-tenant data isolation, HMAC webhook validation, and strict TRAI compliance.',
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
      iconBg: 'bg-violet-50 text-violet-600',
      title: 'Support teams',
      description:
        'Consolidate multi-channel inquiries into a unified ticketing inbox, automate Tier-1 answers via AI agents, and enforce strict SLA timers.',
      link: '/solutions/customer-support',
      linkText: 'View support solution',
      textColor: 'text-violet-600 hover:text-violet-700',
    },
    {
      icon: Sparkles,
      iconBg: 'bg-indigo-50 text-indigo-600',
      title: 'Marketing teams',
      description:
        'Broadcast pre-approved WhatsApp marketing templates and bulk promotional SMS with real-time delivery DLR telemetry and segment tagging.',
      link: '/solutions/marketing-teams',
      linkText: 'View marketing solution',
      textColor: 'text-indigo-600 hover:text-indigo-700',
    },
    {
      icon: Rocket,
      iconBg: 'bg-emerald-50 text-emerald-600',
      title: 'Startups & scaleups',
      description:
        'Consolidate communication, CRM, and AI bots into one predictable monthly bill, automating customer acquisition without hiring large teams.',
      link: '/solutions/startups',
      linkText: 'View startup solution',
      textColor: 'text-emerald-600 hover:text-emerald-700',
    },
    {
      icon: Building,
      iconBg: 'bg-amber-50 text-amber-600',
      title: 'Global enterprises',
      description:
        'High-throughput carrier routing, custom Model Context Protocol (MCP) server integrations, dedicated SLAs, and multi-tenant isolation.',
      link: '/solutions/enterprises',
      linkText: 'View enterprise solution',
      textColor: 'text-amber-600 hover:text-amber-700',
    },
  ]

  const fiveSteps = [
    {
      step: '01',
      title: 'Connect channels',
      description:
        'Connect official WhatsApp business numbers, carrier SMS headers, email SMTP, and live website chat widgets.',
    },
    {
      step: '02',
      title: 'Organize conversations',
      description:
        'Unify inbound dialogues and customer profiles into a central omnichannel workspace with full chronological context.',
    },
    {
      step: '03',
      title: 'Automate with AI agents',
      description:
        'Deploy drag-and-drop conversational decision trees and autonomous AI agents grounded in verified enterprise docs.',
    },
    {
      step: '04',
      title: 'Accelerate pipelines & tickets',
      description:
        'Track deals across customizable Kanban stages and assign support tickets with enforceable SLA resolution timers.',
    },
    {
      step: '05',
      title: 'Analyze telemetry & scale',
      description:
        'Monitor delivery telemetry, conversation deflection rates, agent efficiency, and pipeline conversion metrics.',
    },
  ]

  const customerReviews = [
    {
      name: 'Aditi Sharma',
      role: 'Head of Growth at Apex Retail',
      avatar: 'AS',
      text: 'Switching to PulseQuo reduced our customer acquisition response time from 35 minutes down to 45 seconds on WhatsApp. Having our Sales CRM and WhatsApp in one screen is a game changer.',
      rating: 5,
      metric: '+48% Conversion Rate',
    },
    {
      name: 'Vikramaditya Roy',
      role: 'VP Engineering at FinEdge Pay',
      avatar: 'VR',
      text: 'We dispatch over 2 million transactional OTPs every month. PulseQuo’s TRAI DLT compliance and SMPP routing give us an unbeatable 99.98% delivery receipt rate with zero headaches.',
      rating: 5,
      metric: '99.98% DLR Reliability',
    },
    {
      name: 'Pooja Venkatesh',
      role: 'Chief Customer Officer at NovaHealth',
      avatar: 'PV',
      text: 'The AI agents handle 78% of tier-1 support tickets automatically, and when human handoff occurs, our agents have the complete conversational history right in front of them.',
      rating: 5,
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
          1. HERO SECTION: HIGH-CONVERSION ENTERPRISE ARCHITECTURE
         ───────────────────────────────────────────────────────────── */}
      <section ref={heroRef} className="relative overflow-hidden bg-gradient-to-b from-slate-50/80 via-blue-50/25 to-white pt-10 pb-16 sm:pt-16 sm:pb-24 lg:pt-20 lg:pb-32 border-b border-slate-100">
        {/* Soft Ambient Technical Glow */}
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[360px] bg-gradient-to-r from-blue-500/20 via-blue-600/15 to-indigo-500/15 blur-[120px] rounded-3xl pointer-events-none" />
        <div className="absolute top-1/4 -left-20 w-80 h-80 bg-blue-400/10 blur-[100px] rounded-3xl pointer-events-none" />
        <div className="absolute top-1/3 -right-20 w-80 h-80 bg-indigo-400/10 blur-[100px] rounded-3xl pointer-events-none" />

        {/* Technical Sub-grid Background */}
        <div className="absolute inset-0 bg-[radial-gradient(#94a3b8_1px,transparent_1px)] [background-size:32px_32px] opacity-25 pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            {/* Main Command Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: easeOutCurve }}
              className="text-4xl xs:text-5xl sm:text-6xl lg:text-[68px] font-black text-slate-900 tracking-[-0.035em] leading-[1.08] max-w-4xl mx-auto"
            >
              One intelligent platform for{' '}
              <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 bg-clip-text text-transparent">
                every customer conversation.
              </span>
            </motion.h1>

            {/* Clear, Authoritative Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: easeOutCurve }}
              className="mt-6 text-base sm:text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto font-normal text-balance"
            >
              Connect every message directly to revenue and resolution. PulseQuo unifies{' '}
              <span className="text-slate-900 font-semibold">official WhatsApp & SMS CPaaS</span>,{' '}
              <span className="text-slate-900 font-semibold">sales pipelines</span>,{' '}
              <span className="text-slate-900 font-semibold">support helpdesk</span>, and{' '}
              <span className="text-slate-900 font-semibold">autonomous AI agents</span> in a single synchronized workspace.
            </motion.p>

            {/* Primary Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: easeOutCurve }}
              className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3.5"
            >
              <Link
                to="/book-demo"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors shadow-sm hover:shadow"
              >
                <CalendarCheck className="size-4.5" />
                <span>Book a personalized demo</span>
              </Link>

              <a
                href="#platform-overview"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-semibold text-slate-700 bg-white hover:bg-slate-50 border border-slate-300 hover:border-slate-400 rounded-lg transition-colors shadow-2xs"
              >
                <span>Explore the 4 engines</span>
                <ArrowRight className="size-4 text-slate-400" />
              </a>
            </motion.div>

            {/* Interactive Role Switcher Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: easeOutCurve }}
            >
              <div className="mt-10 inline-flex flex-wrap items-center justify-center gap-1.5 p-1 rounded-lg bg-slate-100 border border-slate-200/80">
                {(['sales', 'support', 'marketing', 'enterprise'] as PersonaType[]).map((p) => (
                  <button
                    key={p}
                    type="button"
                    onClick={() => setActivePersona(p)}
                    className={`relative px-3.5 py-1.5 rounded-md text-xs font-semibold transition-colors cursor-pointer ${
                      activePersona === p
                        ? 'text-slate-900'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    {activePersona === p && (
                      <motion.div
                        layoutId="active-persona-bg"
                        className="absolute inset-0 bg-white shadow-xs border border-slate-200 rounded-md -z-10"
                        transition={{ type: 'spring', stiffness: 500, damping: 35 }}
                      />
                    )}
                    For {p === 'enterprise' ? 'Enterprise CTOs' : `${p.charAt(0).toUpperCase() + p.slice(1)} teams`}
                  </button>
                ))}
              </div>

              {/* Live Contextual Dynamic Banner for Selected Persona with Fluid Transition */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activePersona}
                  initial={{ opacity: 0, y: 8, scale: 0.99 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -8, scale: 0.99 }}
                  transition={{ duration: 0.22, ease: easeOutCurve }}
                  className="mt-4 max-w-2xl mx-auto rounded-xl bg-white border border-slate-200 p-4 text-left shadow-xs"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-2.5 mb-2.5">
                    <span className="text-xs font-bold text-blue-700">
                      {personaDetails[activePersona].badge}
                    </span>
                  </div>
                  <h3 className="text-sm font-semibold text-slate-900 mb-1">
                    {personaDetails[activePersona].title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {personaDetails[activePersona].description}
                  </p>
                  <div className="mt-3 pt-2.5 border-t border-slate-100 flex items-center justify-between text-xs">
                    <span className="font-medium text-slate-500">
                      Benchmark: {personaDetails[activePersona].stats}
                    </span>
                    <Link
                      to={personaDetails[activePersona].link}
                      className="inline-flex items-center gap-1 font-semibold text-blue-600 hover:text-blue-700 group"
                    >
                      <span>{personaDetails[activePersona].ctaText}</span>
                      <ChevronRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
                    </Link>
                  </div>
                </motion.div>
              </AnimatePresence>
            </motion.div>
          </div>

          {/* Interactive Live Platform Showcase with Scroll-Driven Perspective */}
          <motion.div
            style={{
              scale: smoothScale,
              rotateX: smoothRotateX,
              y: smoothY,
              transformPerspective: 1200,
            }}
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease: easeOutCurve }}
            className="mt-14 sm:mt-18 relative will-change-transform"
          >
            <PlatformComposition />
          </motion.div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          2. ENTERPRISE ACHIEVEMENTS & TELEMETRY STRIP (FLOATING CARD DESIGN)
         ───────────────────────────────────────────────────────────── */}
      <section className="py-8 sm:py-12 bg-slate-50/70 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, ease: easeOutCurve }}
            className="bg-white rounded-2xl sm:rounded-3xl border border-slate-200/80 shadow-[0_12px_40px_rgba(0,0,0,0.06)] p-6 sm:p-7 lg:px-8 lg:py-7"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 lg:divide-x divide-slate-100 gap-6 lg:gap-0">
              {achievements.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 18, scale: 0.94 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1, ease: easeOutCurve }}
                  whileHover={{ y: -3, transition: { duration: 0.15 } }}
                  className="flex items-center gap-4 lg:px-6 first:lg:pl-2 last:lg:pr-2 pt-6 sm:pt-0 first:pt-0 cursor-default"
                >
                  <div
                    className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl ${item.color} flex items-center justify-center shrink-0 shadow-xs`}
                  >
                    <item.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight leading-none">
                      {item.stat}
                    </p>
                    <p className="text-xs sm:text-sm font-semibold text-slate-600 mt-1">
                      {item.label}
                    </p>
                    <p className="text-[11px] text-slate-400 mt-0.5">
                      {item.sublabel}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          3. PRODUCT ENGINES BENTO GRID
         ───────────────────────────────────────────────────────────── */}
      <section id="platform-overview" className="py-20 sm:py-28 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.55, ease: easeOutCurve }}
          >
            <SectionHeading
              title="Four Synchronized Engines. One Cohesive Workspace."
              description="Replace fragmented point solutions with a carrier-grade platform engineered to connect every customer message directly to revenue and resolution."
            />
          </motion.div>

          <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-7">
            {/* Bento Card 1: Communication Cloud (7 Columns) */}
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.55, delay: 0.05, ease: easeOutCurve }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="lg:col-span-7 rounded-2xl border border-slate-200 bg-gradient-to-br from-blue-50/40 via-white to-slate-50 p-8 shadow-xs hover:border-blue-300 hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
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

                {/* Micro Visual Preview: WhatsApp message mock */}
                <div className="mt-6 rounded-xl border border-slate-200 bg-white p-4 shadow-2xs">
                  <div className="flex items-center justify-between border-b border-slate-100 pb-2 mb-3">
                    <span className="text-xs font-semibold text-slate-800 flex items-center gap-1.5">
                      <span className="size-2 rounded-xs bg-emerald-500" /> WhatsApp Live Chat
                    </span>
                    <span className="text-[11px] font-mono text-slate-400">Delivered in 120ms</span>
                  </div>
                  <div className="space-y-2 text-xs">
                    <motion.div
                      initial={{ opacity: 0, x: -16 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.45, delay: 0.15 }}
                      className="bg-slate-100 text-slate-800 rounded-lg p-2.5 max-w-[80%]"
                    >
                      "Hi! I want to integrate PulseQuo with our CRM. Can we talk to sales?"
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, x: 16 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.45, delay: 0.35 }}
                      className="bg-blue-600 text-white rounded-lg p-2.5 max-w-[85%] ml-auto flex items-center justify-between gap-2 shadow-xs"
                    >
                      <span>"Routing you to an enterprise specialist now. Lead #4092 created."</span>
                      <CheckCheck className="size-4 shrink-0 text-blue-200" />
                    </motion.div>
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
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.55, delay: 0.12, ease: easeOutCurve }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="lg:col-span-5 rounded-2xl border border-slate-200 bg-gradient-to-br from-indigo-50/40 via-white to-slate-50 p-8 shadow-xs hover:border-indigo-300 hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="mb-6">
                  <div className="flex size-12 items-center justify-center rounded-xl bg-indigo-600 text-white shadow-md shadow-indigo-600/20">
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
                    <span className="text-indigo-600 font-mono">₹1,842,000</span>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-center text-[10px] font-bold">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.15 }}
                      className="bg-slate-100 p-1.5 rounded-md"
                    >
                      New (18)
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.25 }}
                      className="bg-indigo-50 text-indigo-700 p-1.5 rounded-md border border-indigo-200"
                    >
                      Demo (7)
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.35 }}
                      className="bg-emerald-50 text-emerald-700 p-1.5 rounded-md border border-emerald-200"
                    >
                      Closing (4)
                    </motion.div>
                  </div>
                  <div className="h-1.5 w-full rounded-xs bg-slate-100 overflow-hidden mt-3">
                    <motion.div
                      initial={{ width: '0%' }}
                      whileInView={{ width: '78%' }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.25, ease: easeOutCurve }}
                      className="h-full bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xs"
                    />
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
                  className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-600 hover:text-indigo-700"
                >
                  <span>View sales CRM features</span>
                  <ArrowRight className="size-4" />
                </Link>
              </div>
            </motion.div>

            {/* Bento Card 3: Support CRM (5 Columns) */}
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.55, delay: 0.05, ease: easeOutCurve }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="lg:col-span-5 rounded-2xl border border-slate-200 bg-gradient-to-br from-violet-50/40 via-white to-slate-50 p-8 shadow-xs hover:border-violet-300 hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="mb-6">
                  <div className="flex size-12 items-center justify-center rounded-xl bg-violet-600 text-white shadow-md shadow-violet-600/20">
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
                    <span className="text-violet-600 font-mono">03m : 18s left</span>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-center text-[10px] font-bold">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.15 }}
                      className="bg-slate-100 p-1.5 rounded-md"
                    >
                      Queued (9)
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.25 }}
                      className="bg-violet-50 text-violet-700 p-1.5 rounded-md border border-violet-200"
                    >
                      Active (14)
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.35 }}
                      className="bg-emerald-50 text-emerald-700 p-1.5 rounded-md border border-emerald-200"
                    >
                      Resolved (52)
                    </motion.div>
                  </div>
                  <div className="h-1.5 w-full rounded-xs bg-slate-100 overflow-hidden mt-3">
                    <motion.div
                      initial={{ width: '0%' }}
                      whileInView={{ width: '92%' }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.25, ease: easeOutCurve }}
                      className="h-full bg-gradient-to-r from-violet-600 to-purple-600 rounded-xs"
                    />
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
                  className="inline-flex items-center gap-2 text-sm font-semibold text-violet-600 hover:text-violet-700"
                >
                  <span>View support CRM specs</span>
                  <ArrowRight className="size-4" />
                </Link>
              </div>
            </motion.div>

            {/* Bento Card 4: AI & Automation (7 Columns) */}
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.55, delay: 0.12, ease: easeOutCurve }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="lg:col-span-7 rounded-2xl border border-slate-200 bg-gradient-to-br from-purple-50/40 via-white to-slate-50 p-8 shadow-xs hover:border-purple-300 hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
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

                {/* Visual Flow Simulator */}
                <div className="mt-6 rounded-xl border border-slate-200 bg-white p-4 shadow-2xs">
                  <div className="flex items-center justify-between border-b border-slate-100 pb-2 mb-3">
                    <span className="text-xs font-semibold text-slate-800 flex items-center gap-1.5">
                      <span className="size-2 rounded-xs bg-purple-500" /> Flow: Order status inquiry
                    </span>
                    <span className="text-[11px] font-mono text-slate-400">
                      MCP Tool Connected
                    </span>
                  </div>
                  <div className="space-y-2 text-xs">
                    <motion.div
                      initial={{ opacity: 0, x: -14 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.45, delay: 0.15 }}
                      className="bg-slate-100 text-slate-800 rounded-lg p-2.5 max-w-[80%] flex items-center justify-between"
                    >
                      <span>Trigger: WhatsApp "Where is my order?"</span>
                      <span className="text-[10px] font-mono text-slate-400">Inbound</span>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.96 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.45, delay: 0.3 }}
                      className="bg-purple-50 border border-purple-200/80 text-purple-900 rounded-lg px-2.5 py-1.5 text-[11px] flex items-center justify-between max-w-[90%]"
                    >
                      <span className="font-semibold flex items-center gap-1.5">
                        <Sparkles className="size-3 text-purple-600" /> AI Agent: Lookup Database
                      </span>
                      <span className="text-[10px] font-mono text-emerald-700 font-bold">MCP 200 OK</span>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, x: 14 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.45, delay: 0.45 }}
                      className="bg-purple-600 text-white rounded-lg p-2.5 max-w-[85%] ml-auto flex items-center justify-between gap-2 shadow-xs"
                    >
                      <span>Instant reply with tracking link</span>
                      <CheckCheck className="size-4 shrink-0 text-purple-200" />
                    </motion.div>
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
          4. VISUAL WORKFLOW BUILDER SHOWCASE (LEAD QUALIFICATION FLOW)
         ───────────────────────────────────────────────────────────── */}
      <section className="py-20 sm:py-28 bg-gradient-to-b from-white via-slate-50/50 to-white border-t border-slate-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Column: Lead Qualification Workflow Canvas */}
            <motion.div
              initial={{ opacity: 0, x: -28, scale: 0.98 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, ease: easeOutCurve }}
              className="lg:col-span-7 order-2 lg:order-1"
            >
              <WorkflowCanvas className="bg-white shadow-xl shadow-slate-900/5 border-slate-200" />
            </motion.div>

            {/* Right Column: Visual Flow Automation Details */}
            <motion.div
              initial={{ opacity: 0, x: 28 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: 0.1, ease: easeOutCurve }}
              className="lg:col-span-5 order-1 lg:order-2"
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-[1.12]">
                Visual Flow Automation. Built for Scale.
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
                  <div className="size-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5 border border-emerald-100">
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
                  <div className="size-8 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center shrink-0 mt-0.5 border border-purple-100">
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
          5. INTEGRATIONS TICKER MARQUEE
         ───────────────────────────────────────────────────────────── */}
      <section className="py-14 bg-slate-50 border-y border-slate-200/80 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5, ease: easeOutCurve }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-8"
        >
          <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
            Seamlessly Connected With Modern Enterprise Channels & Stacks
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="relative w-full overflow-hidden"
        >
          <div className="animate-marquee flex items-center gap-6">
            {[...marqueeIntegrations, ...marqueeIntegrations].map((item, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 bg-white border border-slate-200 rounded-xl px-5 py-3 shadow-2xs hover:shadow-md transition-shadow shrink-0"
              >
                <div className="size-1.5 rounded-xs bg-blue-600" />
                <span className="text-sm font-bold text-slate-900">{item.name}</span>
                <span className="text-xs text-slate-400 font-medium">· {item.tag}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5, delay: 0.15, ease: easeOutCurve }}
          className="mt-8 text-center"
        >
          <Link
            to="/integrations"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-blue-600 hover:text-blue-700"
          >
            <span>Explore All 50+ Verified Integrations & API Specs</span>
            <ArrowRight className="size-4" />
          </Link>
        </motion.div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          6. THE PULSEQUO ADVANTAGE (8 ENTERPRISE PILLARS)
         ───────────────────────────────────────────────────────────── */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.55, ease: easeOutCurve }}
          >
            <SectionHeading
              title="Engineered for Scaled Enterprise Operations"
              description="Discover why high-growth enterprises replace disjointed single-purpose tools with PulseQuo's unified customer experience suite."
            />
          </motion.div>

          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {enterprisePillars.map((pillar, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.45, delay: idx * 0.05, ease: easeOutCurve }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="rounded-xl border border-slate-200/90 p-6 bg-white hover:border-slate-300 hover:shadow-xs transition-all duration-200 group"
              >
                <div className="flex size-10 items-center justify-center rounded-lg bg-slate-100 text-slate-800 group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors mb-4">
                  <pillar.icon className="size-5" />
                </div>
                <h4 className="text-sm font-bold text-slate-900">{pillar.title}</h4>
                <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                  {pillar.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          7. SOLUTIONS BY TEAM & COMPANY STAGE
         ───────────────────────────────────────────────────────────── */}
      <section className="py-20 sm:py-28 bg-slate-50/70 border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.55, ease: easeOutCurve }}
          >
            <SectionHeading
              title="Tailored for Every Operational Growth Stage"
              description="Discover how PulseQuo aligns specifically with your team’s KPIs and operational priorities."
            />
          </motion.div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {growthSolutions.map((sol, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.45, delay: idx * 0.07, ease: easeOutCurve }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
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
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.45, delay: 5 * 0.07, ease: easeOutCurve }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="rounded-xl border border-slate-800/80 bg-[#020618] text-white p-7 flex flex-col justify-between shadow-sm"
            >
              <div>
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
          8. HOW PULSEQUO WORKS (5 SEQUENTIAL STAGES)
         ───────────────────────────────────────────────────────────── */}
      <section className="py-20 sm:py-28 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.55, ease: easeOutCurve }}
          >
            <SectionHeading
              title="How PulseQuo Operates in 5 Steps"
              description="From carrier onboarding to automated, scaled enterprise customer operations."
            />
          </motion.div>

          <div className="relative mt-16">
            {/* Desktop sequential connecting track */}
            <div className="hidden lg:block absolute top-9 left-12 right-12 h-0.5 bg-slate-200/80">
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 1.1, ease: easeOutCurve }}
                className="h-full bg-gradient-to-r from-blue-600 via-indigo-600 to-emerald-500 origin-left"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 relative z-10">
              {fiveSteps.map((s, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.45, delay: idx * 0.1, ease: easeOutCurve }}
                  whileHover={{ y: -6, transition: { duration: 0.2 } }}
                  className="relative rounded-xl bg-white border border-slate-200/90 p-5 hover:border-blue-300 hover:shadow-md transition-all duration-200 group"
                >
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="size-8 rounded-md bg-slate-900 text-white font-mono text-xs font-bold flex items-center justify-center mb-4 shadow-2xs group-hover:bg-blue-600 transition-colors"
                  >
                    {s.step}
                  </motion.div>
                  <h4 className="text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors">{s.title}</h4>
                  <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                    {s.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          9. CUSTOMER SUCCESS STORIES & SOCIAL PROOF
         ───────────────────────────────────────────────────────────── */}
      <section className="py-20 sm:py-28 bg-slate-50/80 border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.55, ease: easeOutCurve }}
          >
            <SectionHeading
              title="Trusted by Fast-Growing Companies"
              description="See how enterprise teams rely on PulseQuo every day to drive revenue and deliver stellar customer support."
            />
          </motion.div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
            {customerReviews.map((rev, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: easeOutCurve }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="rounded-xl bg-white border border-slate-200 p-7 shadow-xs hover:border-slate-300 hover:shadow-sm transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-1">
                      {[...Array(rev.rating)].map((_, s) => (
                        <Star key={s} className="size-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <span className="text-xs font-bold text-emerald-600 font-mono">
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
          10. FREQUENTLY ASKED QUESTIONS (SPLIT TWO-COLUMN SCROLLABLE LAYOUT)
         ───────────────────────────────────────────────────────────── */}
      <section className="py-20 sm:py-28 bg-white border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            {/* Left Column: Heading, Subhead & Contact Action */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, ease: easeOutCurve }}
              className="lg:col-span-5 lg:sticky lg:top-28"
            >
              <span className="text-xs font-bold uppercase tracking-wider text-blue-600 font-mono block mb-2.5">
                Frequently Asked Questions
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-[1.12]">
                Everything You Need to Know
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

            {/* Right Column: Scrollable Flex Container with FAQs */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: 0.1, ease: easeOutCurve }}
              className="lg:col-span-7"
            >
              <div className="max-h-[580px] overflow-y-auto pr-2 sm:pr-4 rounded-xl focus:outline-none">
                <FAQAccordion items={generalFaqs} />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          11. FINAL HIGH-CONVERTING CLOSING CTA
         ───────────────────────────────────────────────────────────── */}
      <CTASection
        headline="Ready to Accelerate Your Customer Experience?"
        subheadline="Join forward-thinking businesses using PulseQuo to unify omnichannel messaging, automate sales pipelines, and scale customer support with AI."
        primaryCtaText="Book a Personalized Demo"
        primaryCtaHref="/book-demo"
        secondaryCtaText="Explore Developer APIs"
        secondaryCtaHref="/developers"
      />
    </div>
  )
}
