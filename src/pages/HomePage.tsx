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

import { useRef } from 'react'
import { Link } from 'react-router'
import { motion, useScroll, useTransform } from 'motion/react'
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
import { Card3DCarousel } from '../components/common/Card3DCarousel'
import { SplitReveal } from '../components/common/SplitReveal'
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
  const heroRef = useRef<HTMLElement>(null)
  const { scrollYProgress: heroScrollProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  })
  const heroBgY = useTransform(heroScrollProgress, [0, 1], ['0%', '18%'])
  const heroContentOpacity = useTransform(heroScrollProgress, [0, 0.85], [1, 0.25])

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
        ref={heroRef}
        id="hero"
        data-cursor-zone="hero"
        className="relative flex flex-col justify-center items-center px-4 sm:px-6 lg:px-10 pt-24 sm:pt-28 pb-12 sm:pb-16 overflow-hidden bg-white"
      >
        {/* GPU Ambient Background with Subtle Scroll Parallax */}
        <motion.div style={{ y: heroBgY }} className="absolute inset-0 pointer-events-none">
          <BackgroundAnimation variant="hero" showGrid={true} showBeams={true} />
        </motion.div>

        <motion.div
          style={{ opacity: heroContentOpacity }}
          className="relative z-10 max-w-6xl mx-auto text-center flex flex-col items-center justify-center"
        >

          {/* Main Command Headline with SplitReveal */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[64px] xl:text-[72px] font-black tracking-[-0.035em] leading-[1.08] max-w-5xl mx-auto text-slate-900 text-balance">
            <SplitReveal
              as="span"
              text="One intelligent platform for"
              trigger="mount"
              delay={0.04}
              stagger={0.055}
              duration={0.58}
              className="block"
            />
            <SplitReveal
              as="span"
              text="every customer conversation."
              trigger="mount"
              delay={0.22}
              stagger={0.06}
              duration={0.6}
              className="block pb-1"
              tokenClassName="text-gradient-hero"
            />
          </h1>

          {/* Clear, Authoritative Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.14, ease: easeOutCurve }}
            className="mt-5 sm:mt-6 text-base sm:text-lg md:text-xl lg:text-[21px] text-slate-600 leading-relaxed max-w-3xl mx-auto font-normal text-balance"
          >
            Connect every message directly to revenue and resolution. PulseQuo unifies{' '}
            <span className="text-slate-900 font-bold">official WhatsApp & SMS CPaaS</span>,{' '}
            <span className="text-slate-900 font-bold">sales pipelines</span>,{' '}
            <span className="text-slate-900 font-bold">support helpdesk</span>, and{' '}
            <span className="text-slate-900 font-bold">autonomous AI agents</span> in a single synchronized workspace.
          </motion.p>

          {/* Primary Action Buttons with Spring & Shine Micro-Interactions */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.2, ease: easeOutCurve }}
            className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 w-full sm:w-auto"
          >
            <motion.div
              whileHover={{ y: -2, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: 'spring', stiffness: 400, damping: 24 }}
              className="w-full sm:w-auto"
            >
              <Link
                to="/book-demo"
                className="btn-shine w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 text-sm sm:text-base font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-xl transition-colors shadow-lg shadow-blue-500/25 group"
              >
                <CalendarCheck className="size-4.5" />
                <span>Book a personalized demo</span>
                <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>

            <motion.div
              whileHover={{ y: -2, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: 'spring', stiffness: 400, damping: 24 }}
              className="w-full sm:w-auto"
            >
              <a
                href="#platform-overview"
                className="group w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 text-sm sm:text-base font-bold text-slate-800 bg-white/95 hover:bg-slate-50 border border-slate-200 hover:border-blue-300 rounded-xl transition-colors shadow-xs backdrop-blur-xs"
              >
                <span>Explore the 4 engines</span>
                <ArrowRight className="size-4 text-slate-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
              </a>
            </motion.div>
          </motion.div>

          {/* Quick Compliance Reassurance Strip */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.26, ease: easeOutCurve }}
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

          {/* 4 Connected Platform Engines (Interactive Glass Strip) */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.32, ease: easeOutCurve }}
            data-cursor="glass"
            className="mt-8 sm:mt-10 flex items-center justify-center gap-1.5 sm:gap-2.5 select-none p-2 rounded-2xl bg-white/85 border border-slate-200/80 shadow-sm hover:shadow-md hover:border-blue-200/90 backdrop-blur-sm transition-all duration-200"
          >
            <Link
              to="/products/communication-cloud"
              className="group flex items-center gap-2 px-3 py-1.5 rounded-lg text-slate-600 hover:text-blue-600 hover:bg-blue-50/80 hover:-translate-y-0.5 transition-all duration-200"
              title="Official WhatsApp & SMS CPaaS"
            >
              <MessageSquareText className="size-4.5 sm:size-5 text-blue-600 group-hover:scale-110 transition-transform duration-200" strokeWidth={1.75} />
              <span className="text-xs font-bold text-slate-800 group-hover:text-blue-700 hidden sm:inline transition-colors">CPaaS</span>
            </Link>

            <div className="relative w-7 sm:w-10 flex items-center justify-center">
              <div className="w-full border-b border-dotted border-slate-300" />
              <motion.div
                animate={{ x: [-12, 12], opacity: [0, 1, 0] }}
                transition={{ duration: 1.9, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute size-1.5 rounded-full bg-blue-500 shadow-xs shadow-blue-500/50"
              />
            </div>

            <Link
              to="/products/sales-crm"
              className="group flex items-center gap-2 px-3 py-1.5 rounded-lg text-slate-600 hover:text-indigo-600 hover:bg-indigo-50/80 hover:-translate-y-0.5 transition-all duration-200"
              title="Sales Pipelines & Workflows"
            >
              <GitBranch className="size-4.5 sm:size-5 text-indigo-600 group-hover:scale-110 transition-transform duration-200" strokeWidth={1.75} />
              <span className="text-xs font-bold text-slate-800 group-hover:text-indigo-700 hidden sm:inline transition-colors">Sales CRM</span>
            </Link>

            <div className="relative w-7 sm:w-10 flex items-center justify-center">
              <div className="w-full border-b border-dotted border-slate-300" />
              <motion.div
                animate={{ x: [-12, 12], opacity: [0, 1, 0] }}
                transition={{ duration: 1.9, repeat: Infinity, ease: 'easeInOut', delay: 0.65 }}
                className="absolute size-1.5 rounded-full bg-indigo-500 shadow-xs shadow-indigo-500/50"
              />
            </div>

            <Link
              to="/products/support-crm"
              className="group flex items-center gap-2 px-3 py-1.5 rounded-lg text-slate-600 hover:text-blue-600 hover:bg-blue-50/80 hover:-translate-y-0.5 transition-all duration-200"
              title="Support Helpdesk"
            >
              <Headset className="size-4.5 sm:size-5 text-blue-600 group-hover:scale-110 transition-transform duration-200" strokeWidth={1.75} />
              <span className="text-xs font-bold text-slate-800 group-hover:text-blue-700 hidden sm:inline transition-colors">Support</span>
            </Link>

            <div className="relative w-7 sm:w-10 flex items-center justify-center">
              <div className="w-full border-b border-dotted border-slate-300" />
              <motion.div
                animate={{ x: [-12, 12], opacity: [0, 1, 0] }}
                transition={{ duration: 1.9, repeat: Infinity, ease: 'easeInOut', delay: 1.3 }}
                className="absolute size-1.5 rounded-full bg-purple-500 shadow-xs shadow-purple-500/50"
              />
            </div>

            <Link
              to="/products/ai-automation"
              className="group flex items-center gap-2 px-3 py-1.5 rounded-lg text-slate-600 hover:text-purple-600 hover:bg-purple-50/80 hover:-translate-y-0.5 transition-all duration-200"
              title="Autonomous AI Agents"
            >
              <Brain className="size-4.5 sm:size-5 text-purple-600 group-hover:scale-110 transition-transform duration-200" strokeWidth={1.75} />
              <span className="text-xs font-bold text-slate-800 group-hover:text-purple-700 hidden sm:inline transition-colors">AI Agents</span>
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          2. BRAND MARQUEE CAROUSEL (TRUSTED BY 500+ ENTERPRISES)
         ───────────────────────────────────────────────────────────── */}
      <BrandCarousel />

      {/* ─────────────────────────────────────────────────────────────
          3. PLATFORM WORKSPACE SHOWCASE & LIVE TELEMETRY
         ───────────────────────────────────────────────────────────── */}
      <section id="workspace-preview" className="py-12 sm:py-16 lg:py-20 section-fade-tint">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Inside the PulseQuo Command Center"
            description="A synchronized console unifying omnichannel team inboxes, autonomous AI agents, live CPaaS telemetry, and customer CRM records."
          />

          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.99 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.55, ease: easeOutCurve }}
            data-cursor="glass"
            className="mt-8 sm:mt-10 relative w-full max-w-full overflow-hidden rounded-2xl border border-slate-200/90 bg-white p-2 sm:p-3 shadow-lg shadow-slate-200/50 hover:border-blue-300/70 hover:shadow-xl transition-all duration-300"
          >
            <PlatformComposition />
          </motion.div>

          {/* Telemetry Strip inside the workspace showcase */}
          <div id="telemetry" className="mt-8 sm:mt-12 pt-8 sm:pt-10">
            <div className="fade-divider-x mb-8 sm:mb-10" />
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 items-stretch">
              {achievements.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.45, delay: idx * 0.07, ease: easeOutCurve }}
                  whileHover={{ y: -5, transition: { type: 'spring', stiffness: 360, damping: 24 } }}
                  data-cursor="glass"
                  className="group relative overflow-hidden flex flex-col justify-between p-5 sm:p-6 min-h-[146px] rounded-xl bg-white border border-slate-200/80 shadow-2xs hover:border-blue-300/90 hover:shadow-lg hover:shadow-blue-900/5 transition-all duration-200"
                >
                  <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-3xl sm:text-4xl font-black text-slate-900 group-hover:text-blue-700 tracking-tight font-mono tabular-nums transition-colors duration-200">
                      {item.stat}
                    </span>
                    <div className={`p-2 rounded-lg border ${item.bgColor} group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-200`}>
                      <item.icon className={`size-4.5 ${item.color}`} />
                    </div>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-800 mt-1">
                      {item.label}
                    </p>
                    <p className="text-xs text-slate-500 mt-0.5">
                      {item.sublabel}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          3.5. 3D CARD CAROUSEL SHOWCASE
         ───────────────────────────────────────────────────────────── */}
      <section className="py-12 sm:py-16 section-fade-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card3DCarousel
            headline="Delivery Tracking, AI Bots & Sales CRM in One Synced Stack"
            subheadline="Experience the power of unified omnichannel architecture. Browse how WhatsApp alerts, autonomous bots, and carrier OTPs dispatch in real time."
          />
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          4. 4-COLUMN PRODUCT ENGINES GRID
         ───────────────────────────────────────────────────────────── */}
      <section id="platform-overview" className="py-12 sm:py-16 section-fade-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Core Product Suite"
            title="Four Synchronized Engines. One Cohesive Workspace."
            description="Replace fragmented point solutions with an enterprise stack connecting every customer message directly to revenue and resolution."
          />

          <div className="mt-9 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 items-stretch">
            {/* Product Card 1: Communication Cloud */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.45, delay: 0.04, ease: easeOutCurve }}
              whileHover={{ y: -6, transition: { type: 'spring', stiffness: 340, damping: 24 } }}
              data-cursor="glass"
              className="relative overflow-hidden rounded-2xl border border-slate-200/90 bg-white p-6 min-h-[282px] shadow-2xs hover:border-blue-400 hover:shadow-xl hover:shadow-blue-900/8 transition-all duration-200 flex flex-col justify-between group"
            >
              <div className="absolute inset-x-0 top-0 h-[2.5px] bg-gradient-to-r from-blue-600 to-cyan-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex size-10 items-center justify-center rounded-xl bg-blue-600 text-white shadow-xs group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-200">
                    <MessageSquare className="size-5" />
                  </div>
                  <span className="text-[11px] font-mono tabular-nums font-semibold text-blue-600">
                    250 msg/s
                  </span>
                </div>
                <h3 className="text-base font-bold text-slate-900 group-hover:text-blue-700 tracking-tight transition-colors">Communication Cloud</h3>
                <p className="mt-2 text-xs sm:text-[13px] text-slate-600 leading-relaxed">
                  Official Meta WhatsApp API, TRAI DLT SMS gateways, voice hooks, and a shared omnichannel inbox.
                </p>
                <div className="mt-4 space-y-2 text-xs text-slate-700 font-medium">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="size-3.5 text-emerald-600 shrink-0" />
                    <span>Meta Cloud API & SMPP v3.4</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="size-3.5 text-emerald-600 shrink-0" />
                    <span>Sub-second delivery DLR</span>
                  </div>
                </div>
              </div>

              <div className="mt-5 pt-3.5 border-t border-slate-100">
                <Link
                  to="/products/communication-cloud"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 hover:text-blue-700"
                >
                  <span>Explore CPaaS</span>
                  <ArrowRight className="size-3.5 transition-transform duration-200 group-hover:translate-x-1.5" />
                </Link>
              </div>
            </motion.div>

            {/* Product Card 2: Sales CRM */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.45, delay: 0.1, ease: easeOutCurve }}
              whileHover={{ y: -6, transition: { type: 'spring', stiffness: 340, damping: 24 } }}
              data-cursor="glass"
              className="relative overflow-hidden rounded-2xl border border-slate-200/90 bg-white p-6 min-h-[282px] shadow-2xs hover:border-indigo-400 hover:shadow-xl hover:shadow-indigo-900/8 transition-all duration-200 flex flex-col justify-between group"
            >
              <div className="absolute inset-x-0 top-0 h-[2.5px] bg-gradient-to-r from-indigo-600 to-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex size-10 items-center justify-center rounded-xl bg-indigo-600 text-white shadow-xs group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-200">
                    <TrendingUp className="size-5" />
                  </div>
                  <span className="text-[11px] font-mono tabular-nums font-semibold text-indigo-600">
                    +48% Win Rate
                  </span>
                </div>
                <h3 className="text-base font-bold text-slate-900 group-hover:text-indigo-700 tracking-tight transition-colors">Sales CRM</h3>
                <p className="mt-2 text-xs sm:text-[13px] text-slate-600 leading-relaxed">
                  Turn chats into closed revenue with visual Kanban pipelines, lead scoring, and 1-click WhatsApp quotes.
                </p>
                <div className="mt-4 space-y-2 text-xs text-slate-700 font-medium">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="size-3.5 text-emerald-600 shrink-0" />
                    <span>Multi-channel lead capture</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="size-3.5 text-emerald-600 shrink-0" />
                    <span>Automated follow-up drips</span>
                  </div>
                </div>
              </div>

              <div className="mt-5 pt-3.5 border-t border-slate-100">
                <Link
                  to="/products/sales-crm"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-600 hover:text-indigo-700"
                >
                  <span>Explore Sales CRM</span>
                  <ArrowRight className="size-3.5 transition-transform duration-200 group-hover:translate-x-1.5" />
                </Link>
              </div>
            </motion.div>

            {/* Product Card 3: Support CRM (Vibrant Violet matching sibling cards) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.45, delay: 0.16, ease: easeOutCurve }}
              whileHover={{ y: -6, transition: { type: 'spring', stiffness: 340, damping: 24 } }}
              data-cursor="glass"
              className="relative overflow-hidden rounded-2xl border border-slate-200/90 bg-white p-6 min-h-[282px] shadow-2xs hover:border-violet-400 hover:shadow-xl hover:shadow-violet-900/8 transition-all duration-200 flex flex-col justify-between group"
            >
              <div className="absolute inset-x-0 top-0 h-[2.5px] bg-gradient-to-r from-violet-600 to-indigo-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex size-10 items-center justify-center rounded-xl bg-violet-600 text-white shadow-xs group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-200">
                    <Headphones className="size-5" />
                  </div>
                  <span className="text-[11px] font-mono tabular-nums font-semibold text-violet-600">
                    &lt; 45s SLA
                  </span>
                </div>
                <h3 className="text-base font-bold text-slate-900 group-hover:text-violet-700 tracking-tight transition-colors">Support CRM</h3>
                <p className="mt-2 text-xs sm:text-[13px] text-slate-600 leading-relaxed">
                  Resolve tickets faster with shared queues, SLA countdown timers, and skill-based routing.
                </p>
                <div className="mt-4 space-y-2 text-xs text-slate-700 font-medium">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="size-3.5 text-emerald-600 shrink-0" />
                    <span>Unified ticket inbox & SLAs</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="size-3.5 text-emerald-600 shrink-0" />
                    <span>Bot-to-human context handoff</span>
                  </div>
                </div>
              </div>

              <div className="mt-5 pt-3.5 border-t border-slate-100">
                <Link
                  to="/products/support-crm"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-violet-600 hover:text-violet-700"
                >
                  <span>Explore Support CRM</span>
                  <ArrowRight className="size-3.5 transition-transform duration-200 group-hover:translate-x-1.5" />
                </Link>
              </div>
            </motion.div>

            {/* Product Card 4: AI & Automation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.45, delay: 0.22, ease: easeOutCurve }}
              whileHover={{ y: -6, transition: { type: 'spring', stiffness: 340, damping: 24 } }}
              data-cursor="glass"
              className="relative overflow-hidden rounded-2xl border border-slate-200/90 bg-white p-6 min-h-[282px] shadow-2xs hover:border-purple-400 hover:shadow-xl hover:shadow-purple-900/8 transition-all duration-200 flex flex-col justify-between group"
            >
              <div className="absolute inset-x-0 top-0 h-[2.5px] bg-gradient-to-r from-purple-600 to-indigo-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex size-10 items-center justify-center rounded-xl bg-purple-600 text-white shadow-xs group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-200">
                    <Bot className="size-5" />
                  </div>
                  <span className="text-[11px] font-mono font-semibold text-purple-700">
                    Native MCP
                  </span>
                </div>
                <h3 className="text-base font-bold text-slate-900 group-hover:text-purple-700 tracking-tight transition-colors">AI & Automation</h3>
                <p className="mt-2 text-xs sm:text-[13px] text-slate-600 leading-relaxed">
                  Zero-code visual flow builder and autonomous AI agents grounded in enterprise docs via MCP.
                </p>
                <div className="mt-4 space-y-2 text-xs text-slate-700 font-medium">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="size-3.5 text-emerald-600 shrink-0" />
                    <span>Zero-hallucination RAG engine</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="size-3.5 text-emerald-600 shrink-0" />
                    <span>Drag-and-drop flow designer</span>
                  </div>
                </div>
              </div>

              <div className="mt-5 pt-3.5 border-t border-slate-100">
                <Link
                  to="/products/ai-automation"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-purple-600 hover:text-purple-700"
                >
                  <span>Explore AI & Flows</span>
                  <ArrowRight className="size-3.5 transition-transform duration-200 group-hover:translate-x-1.5" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          5. VISUAL WORKFLOW BUILDER SHOWCASE
         ───────────────────────────────────────────────────────────── */}
      <section id="workflows" className="py-12 sm:py-16 lg:py-20 section-fade-tint overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Column: Lead Qualification Workflow Canvas */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.55, ease: easeOutCurve }}
              data-cursor="glass"
              className="lg:col-span-7 order-2 lg:order-1"
            >
              <WorkflowCanvas className="bg-white/95 backdrop-blur-xs shadow-md hover:shadow-xl hover:border-blue-300/80 transition-all duration-300 border border-slate-200" />
            </motion.div>

            {/* Right Column: Visual Flow Automation Details */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.55, delay: 0.1, ease: easeOutCurve }}
              className="lg:col-span-5 order-1 lg:order-2"
            >
              <SplitReveal
                as="h2"
                text="Visual flow automation. Built for scale."
                trigger="inView"
                delay={0.06}
                stagger={0.045}
                duration={0.55}
                className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-[1.12] text-balance"
              />

              <p className="mt-4 text-base text-slate-600 leading-relaxed font-normal text-pretty">
                Build multi-step conversational journeys in minutes. Trigger routing on WhatsApp, qualify leads with autonomous AI, and orchestrate handoffs between sales and support.
              </p>

              {/* Feature Highlights with Interactive Hover Shift */}
              <div className="mt-8 space-y-2.5">
                <div className="group flex items-start gap-3.5 p-2.5 -mx-2.5 rounded-xl hover:bg-white hover:shadow-xs hover:translate-x-1 transition-all duration-200">
                  <div className="size-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 mt-0.5 border border-blue-100 group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-200">
                    <Zap className="size-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 group-hover:text-blue-700 transition-colors">Instant Omnichannel Triggers</h4>
                    <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">
                      Launch flows instantly upon WhatsApp incoming chats, SMS keywords, or webhook events.
                    </p>
                  </div>
                </div>

                <div className="group flex items-start gap-3.5 p-2.5 -mx-2.5 rounded-xl hover:bg-white hover:shadow-xs hover:translate-x-1 transition-all duration-200">
                  <div className="size-8 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center shrink-0 mt-0.5 border border-purple-100 group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-200">
                    <Sparkles className="size-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 group-hover:text-purple-700 transition-colors">Autonomous Intent Qualification</h4>
                    <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">
                      AI agents extract intent, company size, and urgency with zero hallucination.
                    </p>
                  </div>
                </div>

                <div className="group flex items-start gap-3.5 p-2.5 -mx-2.5 rounded-xl hover:bg-white hover:shadow-xs hover:translate-x-1 transition-all duration-200">
                  <div className="size-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5 border border-emerald-100 group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-200">
                    <CheckCircle2 className="size-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">Dynamic Multi-Branch Routing</h4>
                    <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">
                      Auto-route high-intent leads to CRM sales pipelines or support queues in real time.
                    </p>
                  </div>
                </div>
              </div>

              {/* Action Links */}
              <div className="mt-7 flex flex-wrap items-center gap-3">
                <Link
                  to="/products/ai-automation"
                  className="group btn-shine inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 hover:-translate-y-0.5 text-white text-xs sm:text-sm font-semibold shadow-sm shadow-blue-500/20 hover:shadow-md transition-all duration-200"
                >
                  <span>Explore AI & Automation</span>
                  <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-1" />
                </Link>

                <Link
                  to="/book-demo"
                  className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white border border-slate-300 hover:border-blue-300 hover:bg-slate-50 hover:-translate-y-0.5 text-slate-700 text-xs sm:text-sm font-semibold shadow-2xs transition-all duration-200"
                >
                  <CalendarCheck className="size-4 text-blue-600 group-hover:scale-110 transition-transform duration-200" />
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
      <section id="integrations" className="py-12 sm:py-16 section-fade-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Connected With Your Existing Enterprise Stack"
            description="Native bi-directional connectors, carrier SMPP bindings, and Model Context Protocol (MCP) tooling."
          />

          <div className="mt-8 sm:mt-10">
            <IntegrationsCarousel />
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          7. SOLUTIONS BY TEAM & COMPANY STAGE
         ───────────────────────────────────────────────────────────── */}
      <section id="solutions" className="py-12 sm:py-16 section-fade-tint">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Operational Solutions"
            title="Tailored for Every Operational Growth Stage"
            description="Discover how PulseQuo aligns specifically with your team’s KPIs and operational priorities."
          />

          <div className="mt-8 sm:mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {growthSolutions.map((sol, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.45, delay: idx * 0.06, ease: easeOutCurve }}
                whileHover={{ y: -5, transition: { type: 'spring', stiffness: 350, damping: 24 } }}
                data-cursor="glass"
                className="relative overflow-hidden rounded-xl border border-slate-200/90 bg-white/95 backdrop-blur-xs p-5 sm:p-6 hover:border-blue-400 hover:shadow-xl hover:shadow-blue-900/8 transition-all duration-200 flex flex-col justify-between group"
              >
                <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                <div>
                  <div className={`flex size-9 items-center justify-center rounded-lg border ${sol.iconBg} mb-3.5 group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-200`}>
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
                  <span>{sol.linkText}</span>
                  <ArrowRight className="size-3.5 transition-transform duration-200 group-hover:translate-x-1.5" />
                </Link>
              </motion.div>
            ))}

            {/* Custom Architecture Card (6th card) */}
            <motion.div
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.45, delay: 5 * 0.06, ease: easeOutCurve }}
              whileHover={{ y: -5, transition: { type: 'spring', stiffness: 350, damping: 24 } }}
              data-cursor="glass"
              data-cursor-theme="dark"
              className="rounded-xl border border-blue-950 hover:border-blue-500/60 bg-[#070d24] text-white p-5 sm:p-6 flex flex-col justify-between shadow-sm hover:shadow-xl hover:shadow-blue-950/30 transition-all duration-200 relative overflow-hidden group"
            >
              <motion.div
                animate={{ scale: [1, 1.2, 1], opacity: [0.12, 0.24, 0.12] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute top-0 right-0 size-36 bg-blue-500 rounded-full blur-2xl pointer-events-none"
              />
              <div className="relative z-10">
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
                className="relative z-10 mt-5 inline-flex items-center gap-1.5 text-xs font-semibold text-blue-400 hover:text-white transition-colors"
              >
                <span>Browse all use cases</span>
                <ArrowRight className="size-3.5 transition-transform duration-200 group-hover:translate-x-1.5" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          8. VERIFIED CUSTOMER IMPACT TESTIMONIALS CAROUSEL
         ───────────────────────────────────────────────────────────── */}
      <section id="reviews" className="py-12 sm:py-16 section-fade-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Trusted by Fast-Growing Enterprise Leaders"
            description="See how enterprise teams rely on PulseQuo every day to accelerate revenue and deliver stellar customer support."
          />

          <div className="mt-8 sm:mt-10">
            <TestimonialsCarousel />
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          9. TRANSPARENT PRICING PLANS
         ───────────────────────────────────────────────────────────── */}
      <section id="pricing" className="relative py-14 sm:py-16 lg:py-20 section-fade-tint overflow-hidden">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-44 bg-[radial-gradient(ellipse_at_top,_rgba(21,93,252,0.06),_transparent_70%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Simple, Transparent Plans Built to Scale"
            description="Predictable pricing with no hidden seat fees. Start with a 14-day free trial or contact us for bespoke enterprise clusters."
          />

          <div className="mt-8 sm:mt-10">
            <PricingCards defaultAnnual={true} showAdditionalSupport={false} />
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          10. FREQUENTLY ASKED QUESTIONS (SPLIT TWO-COLUMN LAYOUT)
         ───────────────────────────────────────────────────────────── */}
      <section id="faqs" className="py-12 sm:py-16 section-fade-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            {/* Left Column: Heading, Subhead & Contact Action */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, ease: easeOutCurve }}
              className="lg:col-span-5 lg:sticky lg:top-28"
            >
              <SplitReveal
                as="h2"
                text="Everything you need to know"
                trigger="inView"
                delay={0.05}
                stagger={0.045}
                duration={0.55}
                className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-[1.12] text-balance"
              />
              <p className="mt-4 text-base text-slate-600 leading-relaxed font-normal text-pretty">
                Clear answers about PulseQuo’s architecture, carrier onboarding, DLT registration, and capabilities.
              </p>

              {/* Consultation Card */}
              <motion.div
                whileHover={{ y: -4, transition: { type: 'spring', stiffness: 360, damping: 24 } }}
                data-cursor="glass"
                className="group relative overflow-hidden mt-8 p-5 sm:p-6 rounded-xl bg-slate-50/90 backdrop-blur-xs border border-slate-200/90 hover:border-blue-300/90 hover:bg-white hover:shadow-lg hover:shadow-blue-900/5 shadow-2xs transition-all duration-200"
              >
                <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                <h4 className="text-sm font-bold text-slate-900 group-hover:text-blue-700 transition-colors">Have questions about your setup?</h4>
                <p className="mt-1.5 text-xs text-slate-600 leading-relaxed">
                  Our solution engineers can review your existing telecom routes, WhatsApp templates, and CRM integration requirements.
                </p>
                <Link
                  to="/book-demo"
                  className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-700 transition-colors"
                >
                  <span>Schedule a technical consultation</span>
                  <ArrowRight className="size-3.5 transition-transform duration-200 group-hover:translate-x-1.5" />
                </Link>
              </motion.div>
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
                <span className="text-xs font-semibold text-slate-700">
                  Platform & Architecture Answers
                </span>
                <span className="text-xs font-mono tabular-nums text-slate-500">
                  {generalFaqs.length} topics
                </span>
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
        headline="Unify every customer conversation in one workspace."
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
