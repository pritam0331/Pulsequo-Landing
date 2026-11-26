import { Link } from 'react-router'
import { motion } from 'motion/react'
import {
  Activity,
  ArrowRight,
  Bot,
  Building,
  CalendarCheck,
  CheckCircle2,
  Headphones,
  MessageSquare,
  Rocket,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  Zap,
} from 'lucide-react'
import { SEO } from '../components/common/SEO'
import { BackgroundAnimation } from '../components/common/BackgroundAnimation'
import { BrandCarousel } from '../components/common/BrandCarousel'
import { SectionHeading } from '../components/common/SectionHeading'
import { PlatformComposition } from '../components/common/PlatformComposition'
import { Card3DCarousel } from '../components/common/Card3DCarousel'
import { HorizontalCardCarousel } from '../components/common/HorizontalCardCarousel'
import { WorkflowCanvas } from '../components/common/WorkflowCanvas'
import { IntegrationsCarousel } from '../components/common/IntegrationsCarousel'
import { TestimonialsCarousel } from '../components/common/TestimonialsCarousel'
import { PricingCards } from '../components/pricing/PricingCards'
import { FAQAccordion } from '../components/common/FAQAccordion'
import { CTASection } from '../components/common/CTASection'
import { SplitReveal } from '../components/common/SplitReveal'
import { FlipRollText } from '../components/common/FlipRollText'
import { CardGridSkeleton, CardSectionHydrator } from '../components/common/CardSkeleton'
import { generalFaqs } from '../data/faqs'

const easeOutCurve = [0.22, 1, 0.36, 1] as const

const ACHIEVEMENTS = [
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
] as const

const GROWTH_SOLUTIONS = [
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
] as const

export function MarketingHomePage() {
  return (
    <div className="-mt-[3.75rem] sm:-mt-[4.25rem] relative overflow-hidden bg-white text-slate-900 selection:bg-blue-600 selection:text-white">
      <SEO
        title="PulseQuo · One Platform. Complete Customer Experience."
        description="Unified enterprise platform connecting official WhatsApp & SMS CPaaS, intelligent Sales CRM pipelines, Support helpdesk, and autonomous AI agents."
        canonicalPath="/"
      />

      <section
        id="hero"
        data-cursor-zone="hero"
        className="relative flex flex-col justify-center items-center px-4 sm:px-6 lg:px-10 pt-24 sm:pt-28 pb-8 sm:pb-10 overflow-hidden bg-white"
      >
        <div className="absolute inset-0 pointer-events-none">
          <BackgroundAnimation variant="hero" showGrid={true} showBeams={true} />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto text-center flex flex-col items-center justify-center">
          <h1 className="pq-flip-heading text-4xl sm:text-5xl md:text-6xl lg:text-[62px] font-extrabold tracking-[-0.025em] leading-[1.14] max-w-5xl mx-auto text-slate-900 text-balance">
            <FlipRollText
              text="One intelligent platform for"
              delay={0.04}
              stagger={0.055}
              className="block"
              frontClassName="text-slate-900"
              flipClassName="text-blue-600"
            />
            <FlipRollText
              text="every customer conversation."
              delay={0.22}
              stagger={0.06}
              className="block pb-1"
              frontClassName="text-gradient-hero"
              flipClassName="text-[#070d24]"
            />
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.14, ease: easeOutCurve }}
            className="mt-5 sm:mt-6 text-base sm:text-lg md:text-xl lg:text-[21px] text-slate-600 leading-relaxed max-w-3xl mx-auto font-normal text-balance"
          >
            Connect every message directly to revenue and resolution. PulseQuo unifies{' '}
            <span className="text-slate-900 font-bold">official WhatsApp &amp; SMS CPaaS</span>,{' '}
            <span className="text-slate-900 font-bold">sales pipelines</span>,{' '}
            <span className="text-slate-900 font-bold">support helpdesk</span>, and{' '}
            <span className="text-slate-900 font-bold">autonomous AI agents</span> in a single
            synchronized workspace.
          </motion.p>

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
                className="group w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 text-sm sm:text-base font-bold text-slate-800 bg-white hover:bg-slate-50 border border-slate-200 hover:border-blue-300 rounded-xl transition-colors shadow-xs"
              >
                <span>Explore the 4 engines</span>
                <ArrowRight className="size-4 text-slate-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
              </a>
            </motion.div>
          </motion.div>

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
        </div>
      </section>

      <BrandCarousel />

      <section id="workspace-preview" className="py-6 sm:py-8 lg:py-9 section-fade-tint">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Inside the PulseQuo Command Center"
            description="A synchronized console unifying omnichannel team inboxes, autonomous AI agents, live CPaaS telemetry, and customer CRM records."
          />

          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.99 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.12 }}
            transition={{ duration: 0.5, ease: easeOutCurve }}
            data-cursor="glass"
            className="mt-5 sm:mt-7 w-full overflow-hidden rounded-2xl border border-slate-200/90 bg-white p-1.5 sm:p-2 shadow-lg shadow-slate-200/50 hover:border-blue-300/70 hover:shadow-xl transition-all duration-300"
          >
            <PlatformComposition />
          </motion.div>

          <div id="telemetry" className="mt-6 sm:mt-8 max-w-7xl mx-auto">
            <CardSectionHydrator
              ariaLabel="Loading platform telemetry metrics"
              skeleton={
                <CardGridSkeleton
                  count={ACHIEVEMENTS.length}
                  variant="metric"
                  columnsClassName="grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5 items-stretch"
                />
              }
            >
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5 items-stretch">
                {ACHIEVEMENTS.map((item, idx) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.15 }}
                    transition={{ duration: 0.45, delay: idx * 0.07, ease: easeOutCurve }}
                    whileHover={{ y: -5, transition: { type: 'spring', stiffness: 360, damping: 24 } }}
                    data-cursor="glass"
                    className="group relative overflow-hidden flex flex-col justify-between p-3.5 sm:p-6 min-h-[116px] sm:min-h-[146px] rounded-xl bg-white border border-slate-200/80 shadow-2xs hover:border-blue-300/90 hover:shadow-lg hover:shadow-blue-900/5 transition-all duration-200"
                  >
                    <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                    <div className="flex items-center justify-between mb-1.5 sm:mb-2">
                      <span className="text-2xl sm:text-4xl font-black text-slate-900 group-hover:text-blue-700 tracking-tight font-mono tabular-nums transition-colors duration-200">
                        {item.stat}
                      </span>
                      <div
                        className={`p-1.5 sm:p-2 rounded-lg border ${item.bgColor} group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-200`}
                      >
                        <item.icon className={`size-4 sm:size-4.5 ${item.color}`} />
                      </div>
                    </div>
                    <div>
                      <p className="text-xs sm:text-sm font-bold text-slate-800 mt-0.5 sm:mt-1">
                        {item.label}
                      </p>
                      <p className="text-[11px] sm:text-xs text-slate-500 mt-0.5 leading-snug">
                        {item.sublabel}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </CardSectionHydrator>
          </div>
        </div>
      </section>

      <section className="py-6 sm:py-8 lg:py-10 section-fade-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card3DCarousel
            headline="Delivery Tracking, AI Bots & Sales CRM in One Synced Stack"
            subheadline="Experience the power of unified omnichannel architecture. Browse how WhatsApp alerts, autonomous bots, and carrier OTPs dispatch in real time."
          />
        </div>
      </section>

      <section id="platform-overview" className="py-6 sm:py-8 lg:py-10 section-fade-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Core Product Suite"
            title="Four Synchronized Engines. One Cohesive Workspace."
            description="Replace fragmented point solutions with an enterprise stack connecting every customer message directly to revenue and resolution."
          />

          <div className="mt-6 sm:mt-8">
            <HorizontalCardCarousel
              mode="mobile"
              itemCount={4}
              ariaLabel="Core Product Suite"
              counterLabel="Swipe engines"
              desktopGridClassName="lg:grid lg:grid-cols-4 lg:gap-5 lg:overflow-visible"
              skeletonVariant="product"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.45, delay: 0.04, ease: easeOutCurve }}
                whileHover={{ y: -6, transition: { type: 'spring', stiffness: 340, damping: 24 } }}
                data-cursor="glass"
                className="snap-start shrink-0 w-[78vw] max-w-[300px] sm:w-[310px] lg:w-auto lg:max-w-none relative overflow-hidden rounded-2xl border border-slate-200/90 bg-white p-5 sm:p-6 min-h-[246px] sm:min-h-[282px] shadow-2xs hover:border-blue-400 hover:shadow-xl hover:shadow-blue-900/8 transition-all duration-200 flex flex-col justify-between group"
              >
                <div className="absolute inset-x-0 top-0 h-[2.5px] bg-gradient-to-r from-blue-600 to-cyan-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                <div>
                  <div className="flex items-center justify-between mb-3.5 sm:mb-4">
                    <div className="flex size-9 sm:size-10 items-center justify-center rounded-xl bg-blue-600 text-white shadow-xs group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-200">
                      <MessageSquare className="size-4.5 sm:size-5" />
                    </div>
                    <span className="text-[11px] font-mono tabular-nums font-semibold text-blue-600">
                      250 msg/s
                    </span>
                  </div>
                  <h3 className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-blue-700 tracking-tight transition-colors">
                    Communication Cloud
                  </h3>
                  <p className="mt-1.5 sm:mt-2 text-xs sm:text-[13px] text-slate-600 leading-relaxed">
                    Official Meta WhatsApp API, TRAI DLT SMS gateways, voice hooks, and a shared omnichannel inbox.
                  </p>
                  <div className="mt-3.5 sm:mt-4 space-y-1.5 sm:space-y-2 text-xs text-slate-700 font-medium">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="size-3.5 text-emerald-600 shrink-0" />
                      <span>Meta Cloud API &amp; SMPP v3.4</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="size-3.5 text-emerald-600 shrink-0" />
                      <span>Sub-second delivery DLR</span>
                    </div>
                  </div>
                </div>
                <div className="mt-4 sm:mt-5 pt-3 sm:pt-3.5 border-t border-slate-100">
                  <Link
                    to="/products/communication-cloud"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 hover:text-blue-700"
                  >
                    <span>Explore CPaaS</span>
                    <ArrowRight className="size-3.5 transition-transform duration-200 group-hover:translate-x-1.5" />
                  </Link>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.45, delay: 0.1, ease: easeOutCurve }}
                whileHover={{ y: -6, transition: { type: 'spring', stiffness: 340, damping: 24 } }}
                data-cursor="glass"
                className="snap-start shrink-0 w-[78vw] max-w-[300px] sm:w-[310px] lg:w-auto lg:max-w-none relative overflow-hidden rounded-2xl border border-slate-200/90 bg-white p-5 sm:p-6 min-h-[246px] sm:min-h-[282px] shadow-2xs hover:border-indigo-400 hover:shadow-xl hover:shadow-indigo-900/8 transition-all duration-200 flex flex-col justify-between group"
              >
                <div className="absolute inset-x-0 top-0 h-[2.5px] bg-gradient-to-r from-indigo-600 to-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                <div>
                  <div className="flex items-center justify-between mb-3.5 sm:mb-4">
                    <div className="flex size-9 sm:size-10 items-center justify-center rounded-xl bg-indigo-600 text-white shadow-xs group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-200">
                      <TrendingUp className="size-4.5 sm:size-5" />
                    </div>
                    <span className="text-[11px] font-mono tabular-nums font-semibold text-indigo-600">
                      +48% Win Rate
                    </span>
                  </div>
                  <h3 className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-indigo-700 tracking-tight transition-colors">
                    Sales CRM
                  </h3>
                  <p className="mt-1.5 sm:mt-2 text-xs sm:text-[13px] text-slate-600 leading-relaxed">
                    Turn chats into closed revenue with visual Kanban pipelines, lead scoring, and 1-click WhatsApp quotes.
                  </p>
                  <div className="mt-3.5 sm:mt-4 space-y-1.5 sm:space-y-2 text-xs text-slate-700 font-medium">
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
                <div className="mt-4 sm:mt-5 pt-3 sm:pt-3.5 border-t border-slate-100">
                  <Link
                    to="/products/sales-crm"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-600 hover:text-indigo-700"
                  >
                    <span>Explore Sales CRM</span>
                    <ArrowRight className="size-3.5 transition-transform duration-200 group-hover:translate-x-1.5" />
                  </Link>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.45, delay: 0.16, ease: easeOutCurve }}
                whileHover={{ y: -6, transition: { type: 'spring', stiffness: 340, damping: 24 } }}
                data-cursor="glass"
                className="snap-start shrink-0 w-[78vw] max-w-[300px] sm:w-[310px] lg:w-auto lg:max-w-none relative overflow-hidden rounded-2xl border border-slate-200/90 bg-white p-5 sm:p-6 min-h-[246px] sm:min-h-[282px] shadow-2xs hover:border-violet-400 hover:shadow-xl hover:shadow-violet-900/8 transition-all duration-200 flex flex-col justify-between group"
              >
                <div className="absolute inset-x-0 top-0 h-[2.5px] bg-gradient-to-r from-violet-600 to-indigo-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                <div>
                  <div className="flex items-center justify-between mb-3.5 sm:mb-4">
                    <div className="flex size-9 sm:size-10 items-center justify-center rounded-xl bg-violet-600 text-white shadow-xs group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-200">
                      <Headphones className="size-4.5 sm:size-5" />
                    </div>
                    <span className="text-[11px] font-mono tabular-nums font-semibold text-violet-600">
                      &lt; 45s SLA
                    </span>
                  </div>
                  <h3 className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-violet-700 tracking-tight transition-colors">
                    Support CRM
                  </h3>
                  <p className="mt-1.5 sm:mt-2 text-xs sm:text-[13px] text-slate-600 leading-relaxed">
                    Resolve tickets faster with shared queues, SLA countdown timers, and skill-based routing.
                  </p>
                  <div className="mt-3.5 sm:mt-4 space-y-1.5 sm:space-y-2 text-xs text-slate-700 font-medium">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="size-3.5 text-emerald-600 shrink-0" />
                      <span>Unified ticket inbox &amp; SLAs</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="size-3.5 text-emerald-600 shrink-0" />
                      <span>Bot-to-human context handoff</span>
                    </div>
                  </div>
                </div>
                <div className="mt-4 sm:mt-5 pt-3 sm:pt-3.5 border-t border-slate-100">
                  <Link
                    to="/products/support-crm"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-violet-600 hover:text-violet-700"
                  >
                    <span>Explore Support CRM</span>
                    <ArrowRight className="size-3.5 transition-transform duration-200 group-hover:translate-x-1.5" />
                  </Link>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.45, delay: 0.22, ease: easeOutCurve }}
                whileHover={{ y: -6, transition: { type: 'spring', stiffness: 340, damping: 24 } }}
                data-cursor="glass"
                className="snap-start shrink-0 w-[78vw] max-w-[300px] sm:w-[310px] lg:w-auto lg:max-w-none relative overflow-hidden rounded-2xl border border-slate-200/90 bg-white p-5 sm:p-6 min-h-[246px] sm:min-h-[282px] shadow-2xs hover:border-purple-400 hover:shadow-xl hover:shadow-purple-900/8 transition-all duration-200 flex flex-col justify-between group"
              >
                <div className="absolute inset-x-0 top-0 h-[2.5px] bg-gradient-to-r from-purple-600 to-indigo-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                <div>
                  <div className="flex items-center justify-between mb-3.5 sm:mb-4">
                    <div className="flex size-9 sm:size-10 items-center justify-center rounded-xl bg-purple-600 text-white shadow-xs group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-200">
                      <Bot className="size-4.5 sm:size-5" />
                    </div>
                    <span className="text-[11px] font-mono font-semibold text-purple-700">
                      Native MCP
                    </span>
                  </div>
                  <h3 className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-purple-700 tracking-tight transition-colors">
                    AI &amp; Automation
                  </h3>
                  <p className="mt-1.5 sm:mt-2 text-xs sm:text-[13px] text-slate-600 leading-relaxed">
                    Zero-code visual flow builder and autonomous AI agents grounded in enterprise docs via MCP.
                  </p>
                  <div className="mt-3.5 sm:mt-4 space-y-1.5 sm:space-y-2 text-xs text-slate-700 font-medium">
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
                <div className="mt-4 sm:mt-5 pt-3 sm:pt-3.5 border-t border-slate-100">
                  <Link
                    to="/products/ai-automation"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-purple-600 hover:text-purple-700"
                  >
                    <span>Explore AI &amp; Flows</span>
                    <ArrowRight className="size-3.5 transition-transform duration-200 group-hover:translate-x-1.5" />
                  </Link>
                </div>
              </motion.div>
            </HorizontalCardCarousel>
          </div>
        </div>
      </section>

      <section id="workflows" className="py-6 sm:py-8 lg:py-10 section-fade-tint overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 'some' }}
              transition={{ duration: 0.55, ease: easeOutCurve }}
              data-cursor="glass"
              className="lg:col-span-7 order-2 lg:order-1"
            >
              <WorkflowCanvas className="bg-white shadow-md hover:shadow-xl hover:border-blue-300/80 transition-all duration-300 border border-slate-200" />
            </motion.div>

            <div className="lg:col-span-5 order-1 lg:order-2">
              <SplitReveal
                as="h2"
                text="Visual flow automation. Built for scale."
                trigger="inView"
                delay={0.04}
                stagger={0.04}
                duration={0.5}
                className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-black tracking-[-0.02em] leading-[1.18] text-balance"
              />
              <p className="mt-4 text-base text-slate-600 leading-relaxed font-normal text-pretty">
                Build multi-step conversational journeys in minutes. Trigger routing on WhatsApp, qualify leads with autonomous AI, and orchestrate handoffs between sales and support.
              </p>

              <div className="mt-8 space-y-2.5">
                <div className="group flex items-start gap-3.5 p-2.5 -mx-2.5 rounded-xl hover:bg-white hover:shadow-xs hover:translate-x-1 transition-all duration-200">
                  <div className="size-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 mt-0.5 border border-blue-100 group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-200">
                    <Zap className="size-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 group-hover:text-blue-700 transition-colors">
                      Instant Omnichannel Triggers
                    </h4>
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
                    <h4 className="text-sm font-bold text-slate-900 group-hover:text-purple-700 transition-colors">
                      Autonomous Intent Qualification
                    </h4>
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
                    <h4 className="text-sm font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                      Dynamic Multi-Branch Routing
                    </h4>
                    <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">
                      Auto-route high-intent leads to CRM sales pipelines or support queues in real time.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-7 flex flex-wrap items-center gap-3">
                <Link
                  to="/products/ai-automation"
                  className="group btn-shine inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 hover:-translate-y-0.5 text-white text-xs sm:text-sm font-semibold shadow-sm shadow-blue-500/20 hover:shadow-md transition-all duration-200"
                >
                  <span>Explore AI &amp; Automation</span>
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
            </div>
          </div>
        </div>
      </section>

      <section id="integrations" className="py-6 sm:py-8 lg:py-10 section-fade-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Connected With Your Existing Enterprise Stack"
            description="Native bi-directional connectors, carrier SMPP bindings, and Model Context Protocol (MCP) tooling."
          />

          <div className="mt-6 sm:mt-8">
            <IntegrationsCarousel />
          </div>
        </div>
      </section>

      <section id="solutions" className="py-6 sm:py-8 lg:py-10 section-fade-tint">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Operational Solutions"
            title="Tailored for Every Operational Growth Stage"
            description="Discover how PulseQuo aligns specifically with your team’s KPIs and operational priorities."
          />

          <div className="mt-6 sm:mt-8">
            <HorizontalCardCarousel
              mode="mobile"
              itemCount={GROWTH_SOLUTIONS.length}
              ariaLabel="Solutions by team and growth stage"
              counterLabel="Solutions"
              desktopGridClassName="lg:grid lg:grid-cols-5 lg:gap-3.5 lg:overflow-visible"
              skeletonVariant="solution"
            >
              {GROWTH_SOLUTIONS.map((sol, idx) => (
                <motion.div
                  key={sol.title}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.35, delay: Math.min(idx * 0.04, 0.16), ease: easeOutCurve }}
                  whileHover={{ y: -4, transition: { type: 'spring', stiffness: 360, damping: 24 } }}
                  data-cursor="glass"
                  className="snap-start shrink-0 w-[66vw] max-w-[232px] sm:w-[238px] lg:w-auto lg:max-w-none relative overflow-hidden rounded-xl border border-slate-200/90 bg-white p-4 min-h-[164px] sm:min-h-[172px] hover:border-blue-400 hover:shadow-lg hover:shadow-blue-900/8 transition-[border-color,box-shadow] duration-200 flex flex-col justify-between group"
                >
                  <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                  <div>
                    <div
                      className={`flex size-8 items-center justify-center rounded-lg border ${sol.iconBg} mb-2.5 group-hover:scale-105 transition-transform duration-200`}
                    >
                      <sol.icon className="size-4" />
                    </div>
                    <h3 className="text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                      {sol.title}
                    </h3>
                    <p className="mt-1.5 text-xs text-slate-600 leading-snug line-clamp-3">
                      {sol.description}
                    </p>
                  </div>
                  <Link
                    to={sol.link}
                    className={`mt-3 inline-flex items-center gap-1 text-[11.5px] font-semibold ${sol.textColor}`}
                  >
                    <span>{sol.linkText}</span>
                    <ArrowRight className="size-3 transition-transform duration-200 group-hover:translate-x-1" />
                  </Link>
                </motion.div>
              ))}
            </HorizontalCardCarousel>
          </div>
        </div>
      </section>

      <section id="reviews" className="py-6 sm:py-8 lg:py-10 section-fade-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Trusted by Fast-Growing Enterprise Leaders"
            description="See how enterprise teams rely on PulseQuo every day to accelerate revenue and deliver stellar customer support."
          />

          <div className="mt-6 sm:mt-8">
            <TestimonialsCarousel />
          </div>
        </div>
      </section>

      <section id="pricing" className="relative py-6 sm:py-8 lg:py-10 section-fade-tint overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Simple, Transparent Plans Built to Scale"
            description="Predictable pricing with no hidden seat fees. Start with a 14-day free trial or contact us for bespoke enterprise clusters."
          />

          <div className="mt-6 sm:mt-8">
            <PricingCards defaultAnnual={true} showAdditionalSupport={false} />
          </div>
        </div>
      </section>

      <section id="faqs" className="py-6 sm:py-8 lg:py-10 section-fade-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            <div className="lg:col-span-4 lg:sticky lg:top-28">
              <SplitReveal
                as="h2"
                text="Everything you need to know"
                trigger="inView"
                delay={0.04}
                stagger={0.04}
                duration={0.5}
                className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-black tracking-[-0.02em] leading-[1.18] text-balance"
              />
              <p className="mt-3 sm:mt-4 text-sm sm:text-base text-slate-600 leading-relaxed font-normal text-pretty">
                Clear answers about PulseQuo’s architecture, carrier onboarding, DLT registration, and capabilities.
              </p>

              <motion.div
                whileHover={{ y: -4, transition: { type: 'spring', stiffness: 360, damping: 24 } }}
                data-cursor="glass"
                className="group relative overflow-hidden mt-6 sm:mt-8 p-4 sm:p-6 rounded-xl bg-slate-50/90 border border-slate-200/90 hover:border-blue-300/90 hover:bg-white hover:shadow-lg hover:shadow-blue-900/5 shadow-2xs transition-all duration-200"
              >
                <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                <h4 className="text-sm font-bold text-black group-hover:text-blue-700 transition-colors">
                  Have questions about your setup?
                </h4>
                <p className="mt-1.5 text-xs text-slate-600 leading-relaxed">
                  Our solution engineers can review your existing telecom routes, WhatsApp templates, and CRM integration requirements.
                </p>
                <Link
                  to="/book-demo"
                  className="mt-3.5 inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-700 transition-colors"
                >
                  <span>Schedule a technical consultation</span>
                  <ArrowRight className="size-3.5 transition-transform duration-200 group-hover:translate-x-1.5" />
                </Link>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: 0.1, ease: easeOutCurve }}
              className="lg:col-span-8 w-full"
            >
              <div className="flex items-center justify-between mb-3 px-0.5">
                <span className="text-xs font-semibold text-slate-700">
                  Platform &amp; Architecture Answers
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
