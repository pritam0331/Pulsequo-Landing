/**
 * PulseQuo Marketing Home Page - High-Conversion Enterprise Edition
 * Route: /
 * Sections:
 *   1. Hero Section with GPU Ambient Background, Staggered Fade-in, and Interactive Engine Connectors
 *   2. Brand Marquee Carousel (Trusted by 500+ High-Growth Enterprises)
 *   3. Platform Command Center Showcase & Live Telemetry
 *   4. Four Synchronized Product Engines Bento Grid
 *   5. Visual Flow Automation Showcase
 *   6. Integrations & Ecosystem Infinite Carousel
 *   7. Operational Solutions Navigator
 *   8. Customer Impact & Verified Testimonials Carousel
 *   9. Transparent Pricing Matrix
 *  10. Two-Column Interactive FAQs
 *  11. Final Closing Enterprise CTA
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
  MessageSquareText,
  GitBranch,
  Headset,
  Brain,
  ShieldCheck,
  Activity,
  ChevronRight,
} from 'lucide-react'
import { SEO } from '../components/common/SEO'
import { SectionHeading } from '../components/common/SectionHeading'
import { BackgroundAnimation } from '../components/common/BackgroundAnimation'
import { BrandCarousel } from '../components/common/BrandCarousel'
import { CardFanout } from '../components/common/CardFanout'
import { TestimonialsCarousel } from '../components/common/TestimonialsCarousel'
import { IntegrationsCarousel } from '../components/common/IntegrationsCarousel'
import { PlatformComposition } from '../components/common/PlatformComposition'
import { WorkflowCanvas } from '../components/common/WorkflowCanvas'
import { CTASection } from '../components/common/CTASection'
import { FAQAccordion } from '../components/common/FAQAccordion'
import { PricingCards } from '../components/pricing/PricingCards'
import { generalFaqs } from '../data/faqs'

const easeOutCurve = [0.22, 1, 0.36, 1] as const

export function MarketingHomePage() {
  const achievements = [
    {
      stat: '99.99%',
      label: 'Carrier Uptime SLA',
      sublabel: 'Direct SMPP & Meta Cloud routes',
      icon: ShieldCheck,
      color: 'text-emerald-600',
      bgColor: 'bg-emerald-50 border-emerald-200/80',
    },
    {
      stat: '45M+',
      label: 'Messages Dispatched',
      sublabel: 'Transactional OTPs & campaigns',
      icon: Activity,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50 border-blue-200/80',
    },
    {
      stat: '< 2s',
      label: 'AI Response Latency',
      sublabel: 'Grounded in enterprise docs',
      icon: Sparkles,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50 border-purple-200/80',
    },
    {
      stat: '10x',
      label: 'Faster Sales Follow-up',
      sublabel: 'Instant WhatsApp conversion funnel',
      icon: Zap,
      color: 'text-amber-500',
      bgColor: 'bg-amber-50 border-amber-200/80',
    },
  ]

  const growthSolutions = [
    {
      icon: TrendingUp,
      iconBg: 'bg-blue-50 text-blue-600 border-blue-200/70',
      title: 'Sales teams',
      description:
        'Engage high-intent inbound prospects instantly on WhatsApp, qualify leads conversationally with AI, and accelerate deals across Kanban stages.',
      link: '/solutions/sales-teams',
      linkText: 'View sales solution',
      textColor: 'text-blue-600 hover:text-blue-700',
    },
    {
      icon: Headphones,
      iconBg: 'bg-purple-50 text-purple-600 border-purple-200/70',
      title: 'Support teams',
      description:
        'Consolidate multi-channel inquiries into a unified ticketing inbox, automate Tier-1 answers via AI agents, and enforce strict SLA timers.',
      link: '/solutions/customer-support',
      linkText: 'View support solution',
      textColor: 'text-purple-600 hover:text-purple-700',
    },
    {
      icon: Sparkles,
      iconBg: 'bg-blue-50 text-blue-600 border-blue-200/70',
      title: 'Marketing teams',
      description:
        'Broadcast pre-approved WhatsApp marketing templates and bulk promotional SMS with real-time delivery DLR telemetry and segment tagging.',
      link: '/solutions/marketing-teams',
      linkText: 'View marketing solution',
      textColor: 'text-blue-600 hover:text-blue-700',
    },
    {
      icon: Rocket,
      iconBg: 'bg-purple-50 text-purple-600 border-purple-200/70',
      title: 'Startups & scaleups',
      description:
        'Consolidate communication, CRM, and AI bots into one predictable monthly bill, automating customer acquisition without hiring large teams.',
      link: '/solutions/startups',
      linkText: 'View startup solution',
      textColor: 'text-purple-600 hover:text-purple-700',
    },
    {
      icon: Building,
      iconBg: 'bg-blue-50 text-blue-600 border-blue-200/70',
      title: 'Global enterprises',
      description:
        'High-throughput carrier routing, custom Model Context Protocol (MCP) server integrations, dedicated SLAs, and multi-tenant isolation.',
      link: '/solutions/enterprises',
      linkText: 'View enterprise solution',
      textColor: 'text-blue-600 hover:text-blue-700',
    },
  ]

  return (
    <div className="-mt-[3.75rem] sm:-mt-[4.25rem] relative overflow-hidden bg-white text-slate-900 selection:bg-blue-600 selection:text-white">
      <SEO
        title="PulseQuo · One Platform. Complete Customer Experience."
        description="Unified enterprise platform connecting official WhatsApp & SMS CPaaS, intelligent Sales CRM pipelines, Support helpdesk, and autonomous AI agents."
        canonicalPath="/"
      />

      {/* ─────────────────────────────────────────────────────────────
          1. HERO SECTION: AMBIENT LIGHTING & STAGGERED FADE-IN ENTRANCE
         ───────────────────────────────────────────────────────────── */}
      <section
        id="hero"
        className="relative min-h-[92vh] flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 pb-14 sm:pb-16 overflow-hidden bg-white"
      >
        {/* GPU Ambient Background with Floating Brand Orbs and Dot Grid */}
        <BackgroundAnimation variant="hero" showGrid={true} showBeams={true} />

        <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center justify-center my-auto">
          {/* Top Announcement Pill with Pulsing Status */}
          <motion.div
            initial={{ opacity: 0, y: -12, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.5, ease: easeOutCurve }}
            className="mb-5 sm:mb-6 inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-blue-50/80 border border-blue-200/90 shadow-2xs backdrop-blur-sm"
          >
            <span className="flex size-2 rounded-full bg-blue-600 animate-pulse" />
            <span className="text-xs font-semibold text-slate-800">
              PulseQuo Enterprise Engine v3.0
            </span>
            <span className="text-slate-300">|</span>
            <Link
              to="/products/ai-automation"
              className="text-xs text-blue-600 font-semibold flex items-center gap-1 hover:underline"
            >
              <span>Model Context Protocol (MCP) Live</span>
              <ChevronRight className="size-3" />
            </Link>
          </motion.div>

          {/* Main Command Headline with Subtle Word Fade-In */}
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.06, ease: easeOutCurve }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-[62px] xl:text-[68px] font-black tracking-[-0.035em] leading-[1.12] max-w-5xl mx-auto text-slate-900"
          >
            <span className="block">One intelligent platform for</span>
            <span className="block bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 bg-clip-text text-transparent">
              every customer conversation.
            </span>
          </motion.h1>

          {/* Clear, Authoritative Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.12, ease: easeOutCurve }}
            className="mt-6 sm:mt-7 text-base sm:text-lg md:text-xl lg:text-[21px] text-slate-600 leading-relaxed max-w-3xl mx-auto font-normal text-balance"
          >
            Connect every message directly to revenue and resolution. PulseQuo unifies{' '}
            <span className="text-slate-900 font-bold">official WhatsApp & SMS CPaaS</span>,{' '}
            <span className="text-slate-900 font-bold">sales pipelines</span>,{' '}
            <span className="text-slate-900 font-bold">support helpdesk</span>, and{' '}
            <span className="text-slate-900 font-bold">autonomous AI agents</span> in a single synchronized workspace.
          </motion.p>

          {/* Primary Action Buttons with Glow Effects */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.18, ease: easeOutCurve }}
            className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 w-full sm:w-auto"
          >
            <Link
              to="/book-demo"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 text-sm sm:text-base font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-xl transition-all shadow-md shadow-blue-500/25 active:scale-[0.99] group"
            >
              <CalendarCheck className="size-4.5" />
              <span>Book a personalized demo</span>
              <ArrowRight className="size-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>

            <a
              href="#platform-overview"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 text-sm sm:text-base font-bold text-slate-800 bg-white/90 hover:bg-slate-50 border border-slate-200 hover:border-slate-300 rounded-xl transition-all shadow-xs active:scale-[0.99] backdrop-blur-xs"
            >
              <span>Explore the 4 engines</span>
              <ArrowRight className="size-4 text-slate-400" />
            </a>
          </motion.div>

          {/* Quick Compliance Reassurance Strip */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.24, ease: easeOutCurve }}
            className="mt-6 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs font-medium text-slate-500"
          >
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="size-3.5 text-emerald-600" />
              Meta Official Cloud Partner
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="size-3.5 text-emerald-600" />
              TRAI DLT Registered
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="size-3.5 text-emerald-600" />
              Sub-second Carrier Routing
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="size-3.5 text-emerald-600" />
              Zero Hallucination Grounding
            </span>
          </motion.div>

          {/* 4 Connected Platform Engines (Refined, Compact Aesthetic) */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3, ease: easeOutCurve }}
            className="mt-8 sm:mt-10 flex items-center justify-center gap-1.5 sm:gap-2.5 select-none p-2 rounded-2xl bg-white/80 border border-slate-200/70 shadow-2xs backdrop-blur-xs"
          >
            {/* Engine 1: WhatsApp & SMS CPaaS */}
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-slate-600 hover:text-blue-600 hover:bg-blue-50/60 transition-all cursor-default" title="Official WhatsApp & SMS CPaaS">
              <MessageSquareText className="size-4.5 sm:size-5 text-blue-600" strokeWidth={1.75} />
              <span className="text-xs font-bold text-slate-800 hidden sm:inline">CPaaS</span>
            </div>

            {/* Dotted Connector 1 */}
            <div className="relative w-7 sm:w-10 flex items-center justify-center">
              <div className="w-full border-b border-dotted border-slate-300" />
              <motion.div
                animate={{ x: [-10, 10], opacity: [0, 1, 0] }}
                transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute size-1.5 rounded-full bg-blue-500 shadow-xs shadow-blue-500/50"
              />
            </div>

            {/* Engine 2: Sales Pipelines */}
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-slate-600 hover:text-blue-600 hover:bg-blue-50/60 transition-all cursor-default" title="Sales Pipelines & Workflows">
              <GitBranch className="size-4.5 sm:size-5 text-indigo-600" strokeWidth={1.75} />
              <span className="text-xs font-bold text-slate-800 hidden sm:inline">Sales CRM</span>
            </div>

            {/* Dotted Connector 2 */}
            <div className="relative w-7 sm:w-10 flex items-center justify-center">
              <div className="w-full border-b border-dotted border-slate-300" />
              <motion.div
                animate={{ x: [-10, 10], opacity: [0, 1, 0] }}
                transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut', delay: 0.7 }}
                className="absolute size-1.5 rounded-full bg-blue-500 shadow-xs shadow-blue-500/50"
              />
            </div>

            {/* Engine 3: Support Helpdesk */}
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-slate-600 hover:text-blue-600 hover:bg-blue-50/60 transition-all cursor-default" title="Support Helpdesk">
              <Headset className="size-4.5 sm:size-5 text-blue-600" strokeWidth={1.75} />
              <span className="text-xs font-bold text-slate-800 hidden sm:inline">Support</span>
            </div>

            {/* Dotted Connector 3 */}
            <div className="relative w-7 sm:w-10 flex items-center justify-center">
              <div className="w-full border-b border-dotted border-slate-300" />
              <motion.div
                animate={{ x: [-10, 10], opacity: [0, 1, 0] }}
                transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut', delay: 1.4 }}
                className="absolute size-1.5 rounded-full bg-purple-500 shadow-xs shadow-purple-500/50"
              />
            </div>

            {/* Engine 4: Autonomous AI Agents */}
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-slate-600 hover:text-purple-600 hover:bg-purple-50/60 transition-all cursor-default" title="Autonomous AI Agents">
              <Brain className="size-4.5 sm:size-5 text-purple-600" strokeWidth={1.75} />
              <span className="text-xs font-bold text-slate-800 hidden sm:inline">AI Agents</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          2. BRAND MARQUEE CAROUSEL (TRUSTED BY 500+ ENTERPRISES)
         ───────────────────────────────────────────────────────────── */}
      <BrandCarousel />

      {/* ─────────────────────────────────────────────────────────────
          3. PLATFORM WORKSPACE SHOWCASE & LIVE TELEMETRY
         ───────────────────────────────────────────────────────────── */}
      <section id="workspace-preview" className="py-10 sm:py-14 lg:py-16 bg-slate-50/70 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="UNIFIED WORKSPACE"
            title="Inside the PulseQuo Command Center"
            description="A synchronized console unifying omnichannel team inboxes, autonomous AI agents, live CPaaS telemetry, and customer CRM records."
          />

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, ease: easeOutCurve }}
            className="mt-8 sm:mt-10 relative w-full max-w-full overflow-hidden rounded-2xl border border-slate-200/90 bg-white p-2 sm:p-3 shadow-lg shadow-slate-200/50"
          >
            <PlatformComposition />
          </motion.div>

          {/* Telemetry Strip inside the workspace showcase */}
          <div id="telemetry" className="mt-8 sm:mt-12 pt-8 sm:pt-10 border-t border-slate-200/80">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {achievements.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.45, delay: idx * 0.08, ease: easeOutCurve }}
                  className="flex flex-col p-4 sm:p-5 rounded-xl bg-white border border-slate-200/80 shadow-2xs hover:border-slate-300 hover:shadow-xs transition-all"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight font-mono">
                      {item.stat}
                    </span>
                    <div className={`p-2 rounded-lg border ${item.bgColor}`}>
                      <item.icon className={`size-4.5 ${item.color}`} />
                    </div>
                  </div>
                  <p className="text-sm font-bold text-slate-800 mt-1">
                    {item.label}
                  </p>
                  <p className="text-xs text-slate-500 mt-0.5">
                    {item.sublabel}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          3.5. SHIPROCKET-INSPIRED INTERACTIVE CARD FANOUT SHOWCASE
         ───────────────────────────────────────────────────────────── */}
      <section className="py-12 sm:py-16 bg-white border-b border-slate-200/80 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <CardFanout
            headline="Delivery Tracking, AI Bots & Sales CRM in One Synced Stack"
            subheadline="Experience the power of unified omnichannel architecture. Hover or tap any card to inspect how WhatsApp alerts, autonomous bots, and carrier OTPs dispatch in real time."
            badgeText="SHIPROCKET-INSPIRED DYNAMIC FANOUT"
          />
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          4. PRODUCT ENGINES BENTO GRID
         ───────────────────────────────────────────────────────────── */}
      <section id="platform-overview" className="py-10 sm:py-14 lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="CORE PRODUCT SUITE"
            title="Four Synchronized Engines. One Cohesive Workspace."
            description="Replace fragmented point solutions with an enterprise infrastructure engineered to connect every customer message directly to revenue and resolution."
          />

          <div className="mt-8 sm:mt-10 grid grid-cols-1 lg:grid-cols-12 gap-5">
            {/* Bento Card 1: Communication Cloud (7 Columns) */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: 0.05, ease: easeOutCurve }}
              className="lg:col-span-7 rounded-2xl border border-slate-200 bg-gradient-to-br from-blue-50/30 via-white to-slate-50 p-5 sm:p-6 shadow-xs hover:border-blue-400 hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="mb-4">
                  <div className="flex size-10 items-center justify-center rounded-lg bg-blue-600 text-white shadow-sm shadow-blue-600/20 group-hover:scale-105 transition-transform">
                    <MessageSquare className="size-5" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-slate-900 tracking-tight">Communication Cloud</h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Direct Meta WhatsApp Business API, carrier-grade SMS routing with TRAI DLT registration, voice calling, and a unified omnichannel inbox for your team.
                </p>

                {/* Architecture Spec Highlights */}
                <div className="mt-4 rounded-lg border border-slate-200 bg-white p-3 shadow-2xs">
                  <div className="flex items-center justify-between border-b border-slate-100 pb-2 mb-2.5">
                    <span className="text-xs font-semibold text-slate-800 flex items-center gap-1.5">
                      <span className="size-2 rounded-xs bg-emerald-500 animate-pulse" /> Carrier Connection Status
                    </span>
                    <span className="text-[11px] font-mono text-slate-500">Sub-second Routing</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div className="p-2 rounded-md bg-slate-50 border border-slate-100">
                      <span className="text-[10px] text-slate-400 block font-medium">Throughput</span>
                      <span className="font-mono font-bold text-slate-800 text-xs">250 msg/sec</span>
                    </div>
                    <div className="p-2 rounded-md bg-slate-50 border border-slate-100">
                      <span className="text-[10px] text-slate-400 block font-medium">Compliance</span>
                      <span className="font-mono font-bold text-blue-600 text-xs">DLT & V20 Verified</span>
                    </div>
                  </div>
                </div>

                <div className="mt-4 grid grid-cols-2 gap-2 text-xs font-medium text-slate-700">
                  <div className="flex items-center gap-1.5"><CheckCircle2 className="size-3.5 text-emerald-600" /> Meta Official Cloud API</div>
                  <div className="flex items-center gap-1.5"><CheckCircle2 className="size-3.5 text-emerald-600" /> TRAI DLT Compliant SMS</div>
                  <div className="flex items-center gap-1.5"><CheckCircle2 className="size-3.5 text-emerald-600" /> Sub-second delivery DLR</div>
                  <div className="flex items-center gap-1.5"><CheckCircle2 className="size-3.5 text-emerald-600" /> Pre-approved templates</div>
                </div>
              </div>

              <div className="mt-5 pt-4 border-t border-slate-200/80">
                <Link
                  to="/products/communication-cloud"
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-blue-600 hover:text-blue-700"
                >
                  <span>View communication cloud specs</span>
                  <ArrowRight className="size-3.5" />
                </Link>
              </div>
            </motion.div>

            {/* Bento Card 2: Sales CRM (5 Columns) */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: 0.1, ease: easeOutCurve }}
              className="lg:col-span-5 rounded-2xl border border-slate-200 bg-gradient-to-br from-blue-50/20 via-white to-slate-50 p-5 sm:p-6 shadow-xs hover:border-blue-400 hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="mb-4">
                  <div className="flex size-10 items-center justify-center rounded-lg bg-indigo-600 text-white shadow-sm shadow-indigo-600/20 group-hover:scale-105 transition-transform">
                    <TrendingUp className="size-5" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-slate-900 tracking-tight">Sales CRM</h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Turn chat interactions into closed revenue. Drag-and-drop visual Kanban pipelines, lead scoring, deal forecasts, and 1-click WhatsApp quotes.
                </p>

                {/* Pipeline Stages Mini Indicator */}
                <div className="mt-4 space-y-2 rounded-lg border border-slate-200 bg-white p-3 shadow-2xs">
                  <div className="flex justify-between text-xs font-bold text-slate-700">
                    <span>Active Pipeline</span>
                    <span className="text-blue-600 font-mono">₹1,842,000</span>
                  </div>
                  <div className="grid grid-cols-3 gap-1.5 text-center text-[10px] font-bold">
                    <div className="bg-slate-100 p-1.5 rounded-md">New (18)</div>
                    <div className="bg-purple-50 text-purple-700 p-1.5 rounded-md border border-purple-200">Demo (7)</div>
                    <div className="bg-blue-50 text-blue-700 p-1.5 rounded-md border border-blue-200">Closing (4)</div>
                  </div>
                  <div className="h-1.5 w-full rounded-xs bg-slate-100 overflow-hidden mt-2">
                    <div className="h-full bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xs w-[78%]" />
                  </div>
                </div>

                <div className="mt-4 space-y-1.5 text-xs font-medium text-slate-700">
                  <div className="flex items-center gap-1.5"><CheckCircle2 className="size-3.5 text-emerald-600" /> Multi-channel lead capture</div>
                  <div className="flex items-center gap-1.5"><CheckCircle2 className="size-3.5 text-emerald-600" /> Stagnant deal alerts</div>
                  <div className="flex items-center gap-1.5"><CheckCircle2 className="size-3.5 text-emerald-600" /> 1-click WhatsApp follow-ups</div>
                </div>
              </div>

              <div className="mt-5 pt-4 border-t border-slate-200/80">
                <Link
                  to="/products/sales-crm"
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-blue-600 hover:text-blue-700"
                >
                  <span>View sales CRM features</span>
                  <ArrowRight className="size-3.5" />
                </Link>
              </div>
            </motion.div>

            {/* Bento Card 3: Support CRM (5 Columns) */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: 0.05, ease: easeOutCurve }}
              className="lg:col-span-5 rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-50 via-white to-blue-50/20 p-5 sm:p-6 shadow-xs hover:border-blue-400 hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="mb-4">
                  <div className="flex size-10 items-center justify-center rounded-lg bg-[#070d24] text-white shadow-sm shadow-[#070d24]/20 group-hover:scale-105 transition-transform">
                    <Headphones className="size-5" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-slate-900 tracking-tight">Support CRM</h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Resolve tickets faster with shared queues, SLA breach countdown timers, automated knowledge bases, and intelligent agent routing.
                </p>

                {/* Support SLA Queue Mini Indicator */}
                <div className="mt-4 space-y-2 rounded-lg border border-slate-200 bg-white p-3 shadow-2xs">
                  <div className="flex justify-between text-xs font-bold text-slate-700">
                    <span>SLA Response Countdown</span>
                    <span className="text-blue-600 font-mono">03m : 18s left</span>
                  </div>
                  <div className="grid grid-cols-3 gap-1.5 text-center text-[10px] font-bold">
                    <div className="bg-slate-100 p-1.5 rounded-md">Queued (9)</div>
                    <div className="bg-purple-50 text-purple-700 p-1.5 rounded-md border border-purple-200">Active (14)</div>
                    <div className="bg-blue-50 text-blue-700 p-1.5 rounded-md border border-blue-200">Resolved (52)</div>
                  </div>
                  <div className="h-1.5 w-full rounded-xs bg-slate-100 overflow-hidden mt-2">
                    <div className="h-full bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xs w-[92%]" />
                  </div>
                </div>

                <div className="mt-4 space-y-1.5 text-xs font-medium text-slate-700">
                  <div className="flex items-center gap-1.5"><CheckCircle2 className="size-3.5 text-emerald-600" /> Automated ticket creation from all channels</div>
                  <div className="flex items-center gap-1.5"><CheckCircle2 className="size-3.5 text-emerald-600" /> Enforceable first-response & resolution SLAs</div>
                  <div className="flex items-center gap-1.5"><CheckCircle2 className="size-3.5 text-emerald-600" /> Skill-based agent work distribution</div>
                </div>
              </div>

              <div className="mt-5 pt-4 border-t border-slate-200/80">
                <Link
                  to="/products/support-crm"
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-blue-600 hover:text-blue-700"
                >
                  <span>View support CRM specs</span>
                  <ArrowRight className="size-3.5" />
                </Link>
              </div>
            </motion.div>

            {/* Bento Card 4: AI & Automation (7 Columns) */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: 0.1, ease: easeOutCurve }}
              className="lg:col-span-7 rounded-2xl border border-slate-200 bg-gradient-to-br from-purple-50/30 via-white to-slate-50 p-5 sm:p-6 shadow-xs hover:border-purple-400 hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="mb-4">
                  <div className="flex size-10 items-center justify-center rounded-lg bg-purple-600 text-white shadow-sm shadow-purple-600/20 group-hover:scale-105 transition-transform">
                    <Bot className="size-5" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-slate-900 tracking-tight">AI & Automation</h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Design complex multi-step customer journeys visually. Deploy autonomous AI agents grounded in enterprise knowledge bases with native Model Context Protocol (MCP) tool execution.
                </p>

                {/* Architecture Spec Highlights */}
                <div className="mt-4 rounded-lg border border-slate-200 bg-white p-3 shadow-2xs">
                  <div className="flex items-center justify-between border-b border-slate-100 pb-2 mb-2.5">
                    <span className="text-xs font-semibold text-slate-800 flex items-center gap-1.5">
                      <span className="size-2 rounded-xs bg-purple-500 animate-pulse" /> Autonomous Agent Engine
                    </span>
                    <span className="text-[11px] font-mono text-purple-600 font-semibold">Native MCP Standard</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div className="p-2 rounded-md bg-slate-50 border border-slate-100">
                      <span className="text-[10px] text-slate-400 block font-medium">Grounding</span>
                      <span className="font-mono font-bold text-slate-800 text-xs">Vector RAG + Docs</span>
                    </div>
                    <div className="p-2 rounded-md bg-slate-50 border border-slate-100">
                      <span className="text-[10px] text-slate-400 block font-medium">Execution</span>
                      <span className="font-mono font-bold text-emerald-600 text-xs">Zero-Hallucination Tools</span>
                    </div>
                  </div>
                </div>

                <div className="mt-4 grid grid-cols-2 gap-2 text-xs font-medium text-slate-700">
                  <div className="flex items-center gap-1.5"><CheckCircle2 className="size-3.5 text-emerald-600" /> Drag-and-drop conversational designer</div>
                  <div className="flex items-center gap-1.5"><CheckCircle2 className="size-3.5 text-emerald-600" /> Enterprise RAG vector grounding</div>
                  <div className="flex items-center gap-1.5"><CheckCircle2 className="size-3.5 text-emerald-600" /> Model Context Protocol (MCP) support</div>
                  <div className="flex items-center gap-1.5"><CheckCircle2 className="size-3.5 text-emerald-600" /> Webhook triggers & drip sequences</div>
                </div>
              </div>

              <div className="mt-5 pt-4 border-t border-slate-200/80">
                <Link
                  to="/products/ai-automation"
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-purple-600 hover:text-purple-700"
                >
                  <span>View AI & automation specs</span>
                  <ArrowRight className="size-3.5" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          5. VISUAL WORKFLOW BUILDER SHOWCASE
         ───────────────────────────────────────────────────────────── */}
      <section id="workflows" className="py-10 sm:py-14 lg:py-16 bg-slate-50/70 border-y border-slate-200/80 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Column: Lead Qualification Workflow Canvas */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.55, ease: easeOutCurve }}
              className="lg:col-span-7 order-2 lg:order-1"
            >
              <WorkflowCanvas className="bg-white shadow-md border border-slate-200" />
            </motion.div>

            {/* Right Column: Visual Flow Automation Details */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.55, delay: 0.1, ease: easeOutCurve }}
              className="lg:col-span-5 order-1 lg:order-2"
            >
              <div className="inline-flex items-center gap-2 mb-3 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold">
                <Sparkles className="size-3 text-blue-600" />
                <span>Zero-Code Journey Designer</span>
              </div>

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
                  <div className="size-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5 border border-emerald-100">
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
          6. INTEGRATIONS & ECOSYSTEM INFINITE CAROUSEL
         ───────────────────────────────────────────────────────────── */}
      <section id="integrations" className="py-10 sm:py-14 lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="INTEGRATIONS & ECOSYSTEM"
            title="Connected With Your Existing Enterprise Stack"
            description="Native bi-directional connectors, carrier SMPP bindings, and Model Context Protocol (MCP) tooling."
          />

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.55, ease: easeOutCurve }}
            className="mt-8 sm:mt-10"
          >
            <IntegrationsCarousel />
          </motion.div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          7. SOLUTIONS BY TEAM & COMPANY STAGE
         ───────────────────────────────────────────────────────────── */}
      <section id="solutions" className="py-10 sm:py-14 lg:py-16 bg-slate-50/70 border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="OPERATIONAL SOLUTIONS"
            title="Tailored for Every Operational Growth Stage"
            description="Discover how PulseQuo aligns specifically with your team’s KPIs and operational priorities."
          />

          <div className="mt-8 sm:mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {growthSolutions.map((sol, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.45, delay: idx * 0.06, ease: easeOutCurve }}
                className="rounded-xl border border-slate-200 bg-white p-5 sm:p-6 hover:border-blue-400 hover:shadow-sm transition-all duration-200 flex flex-col justify-between group"
              >
                <div>
                  <div className={`flex size-9 items-center justify-center rounded-lg border ${sol.iconBg} mb-3.5 group-hover:scale-105 transition-transform`}>
                    <sol.icon className="size-4.5" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                    {sol.title}
                  </h3>
                  <p className="mt-1.5 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {sol.description}
                  </p>
                </div>
                <Link to={sol.link} className={`mt-5 inline-flex items-center gap-1.5 text-xs font-semibold ${sol.textColor}`}>
                  <span>{sol.linkText}</span> <ArrowRight className="size-3.5" />
                </Link>
              </motion.div>
            ))}

            {/* Custom Architecture Card (6th card) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.45, delay: 5 * 0.06, ease: easeOutCurve }}
              className="rounded-xl border border-blue-950 bg-[#070d24] text-white p-5 sm:p-6 flex flex-col justify-between shadow-sm relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 size-32 bg-blue-600/10 rounded-full blur-2xl pointer-events-none" />
              <div>
                <span className="text-xs font-mono text-purple-400 font-semibold block mb-1.5">Custom Architecture</span>
                <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors">
                  Explore all solutions
                </h3>
                <p className="mt-1.5 text-xs sm:text-sm text-slate-300 leading-relaxed">
                  See how PulseQuo integrates with your specific industry stack, data warehouse, and technical compliance needs.
                </p>
              </div>
              <Link
                to="/solutions"
                className="mt-5 inline-flex items-center gap-1.5 text-xs font-semibold text-blue-400 hover:text-white transition-colors"
              >
                <span>Browse all use cases</span> <ArrowRight className="size-3.5" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          8. VERIFIED CUSTOMER IMPACT TESTIMONIALS CAROUSEL
         ───────────────────────────────────────────────────────────── */}
      <section id="reviews" className="py-10 sm:py-14 lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="CUSTOMER STORIES & TESTIMONIALS"
            title="Trusted by Fast-Growing Enterprise Leaders"
            description="See how enterprise teams rely on PulseQuo every day to accelerate revenue and deliver stellar customer support."
          />

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.55, ease: easeOutCurve }}
            className="mt-8 sm:mt-10"
          >
            <TestimonialsCarousel />
          </motion.div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          9. TRANSPARENT PRICING PLANS
         ───────────────────────────────────────────────────────────── */}
      <section id="pricing" className="py-10 sm:py-14 lg:py-16 bg-slate-50/70 border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="FLEXIBLE PRICING"
            title="Simple, Transparent Plans Built to Scale"
            description="Predictable pricing with no hidden seat fees. Start with a 14-day free trial or contact us for bespoke enterprise clusters."
          />

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.55, ease: easeOutCurve }}
            className="mt-8 sm:mt-10"
          >
            <PricingCards defaultAnnual={true} showAdditionalSupport={false} />
          </motion.div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          10. FREQUENTLY ASKED QUESTIONS (SPLIT TWO-COLUMN LAYOUT)
         ───────────────────────────────────────────────────────────── */}
      <section id="faqs" className="py-10 sm:py-14 lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            {/* Left Column: Heading, Subhead & Contact Action */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, ease: easeOutCurve }}
              className="lg:col-span-5 lg:sticky lg:top-28"
            >
              <div className="inline-flex items-center gap-2 mb-3 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold">
                <span>Frequently Asked Questions</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-[1.12]">
                Everything you need to know
              </h2>
              <p className="mt-4 text-base text-slate-600 leading-relaxed font-normal">
                Clear answers about PulseQuo’s architecture, carrier onboarding, DLT registration, and capabilities.
              </p>

              {/* Consultation Card */}
              <div className="mt-8 p-5 sm:p-6 rounded-xl bg-slate-50/80 border border-slate-200 shadow-2xs">
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

            {/* Right Column: All FAQs in a Single Bordered Container */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: 0.1, ease: easeOutCurve }}
              className="lg:col-span-7"
            >
              <div className="flex items-center justify-between mb-3 px-0.5">
                <span className="text-xs font-mono font-bold tracking-wider text-slate-800 uppercase">
                  Frequently Asked Questions
                </span>
                <span className="text-xs font-mono text-slate-500">Scroll to view all (8)</span>
              </div>
              <FAQAccordion items={generalFaqs} />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          11. FINAL HIGH-CONVERTING CLOSING CTA
         ───────────────────────────────────────────────────────────── */}
      <CTASection
        id="get-started"
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
