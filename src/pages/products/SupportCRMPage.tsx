/**
 * Product Detail Page: Customer Support CRM
 * Route: /products/support-crm
 * Fully fledged Shiprocket-inspired landing page with Card Fanout, Brand Carousel, Testimonial Carousel, and Ambient Background.
 */

import { Link } from 'react-router'
import { motion } from 'motion/react'
import {
  CheckCircle2,
  CalendarCheck,
  ArrowRight,
  Clock,
  Users,
  Bot,
  MessageSquare,
} from 'lucide-react'
import { SEO } from '../../components/common/SEO'
import { Breadcrumbs } from '../../components/common/Breadcrumbs'
import { SectionHeading } from '../../components/common/SectionHeading'
import { BackgroundAnimation } from '../../components/common/BackgroundAnimation'
import { BrandCarousel } from '../../components/common/BrandCarousel'
import { CardFanout, type FanoutCard } from '../../components/common/CardFanout'
import { TestimonialsCarousel } from '../../components/common/TestimonialsCarousel'
import { CTASection } from '../../components/common/CTASection'
import { FAQAccordion } from '../../components/common/FAQAccordion'
import { productsData } from '../../data/products'
import { siteConfig } from '../../config/siteConfig'

const easeOutCurve = [0.22, 1, 0.36, 1] as const

const supportFanoutCards: FanoutCard[] = [
  {
    id: 'sla-timer',
    category: 'SLA Response Enforcement',
    title: 'VIP Ticket · 03m 18s SLA Countdown',
    subtitle: 'NovaHealth · Premium Patient Queue',
    badge: 'Urgent SLA (15m)',
    badgeColor: 'bg-rose-50 text-rose-700 border-rose-200',
    icon: Clock,
    iconColor: 'text-rose-600',
    iconBg: 'bg-rose-50 border-rose-200',
    description: 'Enforceable SLA timer countdown. Automatically escalates to tier-2 team lead if first response exceeds 15 minutes.',
    metric: '< 45s',
    metricLabel: 'First Response Time',
    channel: 'Priority Helpdesk Queue',
    channelIconColor: 'text-rose-500',
    timestamp: 'Active now',
    accentBorder: 'hover:border-rose-500',
    gradientHeader: 'from-rose-600 to-amber-600',
  },
  {
    id: 'ai-deflection',
    category: 'Autonomous Ticket Deflection',
    title: 'Tier-1 Support Sentinel Bot',
    subtitle: 'Order Tracking & Return Request',
    badge: '78% Autonomous',
    badgeColor: 'bg-purple-50 text-purple-700 border-purple-200',
    icon: Bot,
    iconColor: 'text-purple-600',
    iconBg: 'bg-purple-50 border-purple-200',
    description: 'AI agent looked up courier tracking status via Bluedart API, generated instant return label, and closed inquiry with zero human agent workload.',
    metric: '78%',
    metricLabel: 'Autonomous Resolution',
    channel: 'PulseQuo AI Support Bot',
    channelIconColor: 'text-purple-500',
    timestamp: '2m ago',
    accentBorder: 'hover:border-purple-500',
    gradientHeader: 'from-purple-600 to-indigo-600',
  },
  {
    id: 'unified-inbox',
    category: 'Omnichannel Ticket Consolidation',
    title: 'Customer #9021 Continuous History',
    subtitle: 'WhatsApp + Website Live Chat + Email',
    badge: 'Single Thread',
    badgeColor: 'bg-blue-50 text-blue-700 border-blue-200',
    icon: MessageSquare,
    iconColor: 'text-blue-600',
    iconBg: 'bg-blue-50 border-blue-200',
    description: 'Agent has complete conversational timeline, purchase receipts, and past support tickets unified in one single screen.',
    metric: '4.9 / 5',
    metricLabel: 'Verified CSAT Score',
    channel: 'Unified Support Console',
    channelIconColor: 'text-blue-500',
    timestamp: '10m ago',
    accentBorder: 'hover:border-blue-500',
    gradientHeader: 'from-blue-600 to-teal-600',
  },
  {
    id: 'skill-routing',
    category: 'Intelligent Agent Work Distribution',
    title: 'Skill-Based Routing Engine',
    subtitle: 'Technical Escalation · Kubernetes Pods',
    badge: 'Assigned in 2s',
    badgeColor: 'bg-violet-50 text-violet-700 border-violet-200',
    icon: Users,
    iconColor: 'text-violet-600',
    iconBg: 'bg-violet-50 border-violet-200',
    description: 'Matches incoming issue keywords with certified solution architects, preventing misrouted tickets and repetitive customer explanations.',
    metric: '94%',
    metricLabel: 'First Contact Resolution',
    channel: 'Smart Router Engine',
    channelIconColor: 'text-violet-500',
    timestamp: '18m ago',
    accentBorder: 'hover:border-violet-500',
    gradientHeader: 'from-violet-600 to-purple-600',
  },
]

export function SupportCRMPage() {
  const product = productsData['support-crm']

  return (
    <div className="relative bg-white text-slate-900 selection:bg-violet-600 selection:text-white">
      <SEO
        title="Customer Support CRM · Omnichannel Ticketing & Helpdesk | PulseQuo"
        description="Deliver customer support that builds loyalty. Manage customer queries, support tickets, SLA alerts, and omnichannel conversations through one centralized support platform."
        canonicalPath="/products/support-crm"
      />

      {/* ─────────────────────────────────────────────────────────────
          1. HERO SECTION: AMBIENT LIGHTING & TELEMETRY
         ───────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-white pt-10 pb-16 sm:pt-14 sm:pb-20 border-b border-slate-100">
        <BackgroundAnimation variant="hero" showGrid={true} showBeams={true} />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: 'Products', href: '/#platform-overview' },
              { label: 'Support CRM' },
            ]}
            className="mb-8"
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: easeOutCurve }}
              className="lg:col-span-7"
            >
              <div className="inline-flex items-center gap-2 rounded-full bg-violet-50 border border-violet-200/90 px-3.5 py-1 text-xs font-semibold text-violet-800 mb-6 shadow-2xs">
                <span className="flex size-2 rounded-full bg-violet-600 animate-pulse" />
                <span>Omnichannel Helpdesk & Ticket SLA Engine</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-[-0.035em] leading-[1.08]">
                Deliver customer support that{' '}
                <span className="bg-gradient-to-r from-violet-600 via-indigo-600 to-purple-700 bg-clip-text text-transparent">
                  drives resolution.
                </span>
              </h1>

              <p className="mt-6 text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl font-normal">
                Manage customer queries, support tickets, agents, and multi-channel conversations through one centralized
                support platform. Enforce rigorous SLA standards, automate Tier-1 resolutions, and co-pilot agents with
                intelligent knowledge bases.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row items-center gap-3.5">
                <Link
                  to="/book-demo?product=Support+CRM"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-bold text-white bg-violet-600 hover:bg-violet-700 active:bg-violet-800 rounded-xl transition-all shadow-md shadow-violet-500/20"
                >
                  <CalendarCheck className="size-4" />
                  <span>Request support CRM demo</span>
                </Link>

                <a
                  href={siteConfig.appUrl}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-bold text-slate-700 bg-white hover:bg-slate-50 border border-slate-300 rounded-xl transition-all shadow-2xs"
                >
                  <span>Explore app</span>
                  <ArrowRight className="size-4" />
                </a>
              </div>

              <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-4 border-t border-slate-200/80 pt-6 text-xs font-medium text-slate-600">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-emerald-600 shrink-0" />
                  <span>SLA Response Timers</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-emerald-600 shrink-0" />
                  <span>Bot-to-Human Handover</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-emerald-600 shrink-0" />
                  <span>Searchable Knowledge Base</span>
                </div>
              </div>
            </motion.div>

            {/* Support Helpdesk Mockup Preview */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.55, delay: 0.15, ease: easeOutCurve }}
              className="lg:col-span-5"
            >
              <div className="rounded-2xl border border-slate-800/80 bg-[#020618] p-6 text-white shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-violet-500 via-indigo-500 to-rose-400" />
                <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                  <div className="flex items-center gap-2">
                    <span className="size-2 rounded-xs bg-rose-500 animate-pulse" />
                    <span className="text-xs font-bold text-slate-200 font-mono">SLA Response Countdown</span>
                  </div>
                  <span className="rounded-md bg-rose-950/80 text-rose-300 px-2 py-0.5 text-xs font-mono font-bold border border-rose-800">
                    03m : 18s left
                  </span>
                </div>

                <div className="mt-4 space-y-3 font-mono text-xs">
                  <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800">
                    <div className="flex justify-between items-center text-[11px] text-slate-400">
                      <span>Ticket #4920 · WhatsApp</span>
                      <span className="text-emerald-400 font-semibold">Active Agent: Sarah</span>
                    </div>
                    <p className="mt-1 text-slate-200 font-sans text-xs">Order delayed in transit · Bluedart AWB BD-99201</p>
                    <div className="mt-2.5 flex items-center justify-between text-[11px] text-slate-500 font-sans">
                      <span>Customer: Vikramaditya Roy</span>
                      <span className="text-violet-400">View Timeline →</span>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800">
                    <div className="flex justify-between items-center text-[11px] text-slate-400">
                      <span>Ticket #4918 · Webhook Event</span>
                      <span className="text-purple-400 font-semibold">AI Handled (1.2s)</span>
                    </div>
                    <p className="mt-1 text-slate-200 font-sans text-xs">Address update request · Validated and synced</p>
                    <div className="mt-2.5 flex items-center justify-between text-[11px] text-slate-500 font-sans">
                      <span>Customer: Aditi Sharma</span>
                      <span className="text-emerald-400 font-mono">Status: Resolved</span>
                    </div>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400 font-mono">
                  <span>Queued: 9 · Active: 14</span>
                  <span className="text-emerald-400 font-bold">Resolved Today: 52</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          2. BRAND TRUST MARQUEE CAROUSEL
         ───────────────────────────────────────────────────────────── */}
      <BrandCarousel />

      {/* ─────────────────────────────────────────────────────────────
          3. SHIPROCKET-INSPIRED CARD FANOUT SHOWCASE
         ───────────────────────────────────────────────────────────── */}
      <section className="py-12 sm:py-16 bg-white border-b border-slate-200/80 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <CardFanout
            cards={supportFanoutCards}
            headline="Omnichannel Support Tickets & SLA Workflows"
            subheadline="Inspect how priority tickets, SLA countdowns, and automated deflection bots resolve inquiries faster while maintaining 4.9/5 CSAT scores."
            badgeText="SHIPROCKET-INSPIRED SUPPORT HELPDESK"
          />
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          4. CUSTOMER TESTIMONIALS CAROUSEL
         ───────────────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-20 bg-slate-50/70 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="PROVEN CUSTOMER SATISFACTION"
            title="Trusted by World-Class Support Teams"
            description="Achieve 78% autonomous deflection and sub-45s response latency across every channel."
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
          5. BENEFITS MATRIX
         ───────────────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-20 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Tangible Business Impact"
            title="Why Support Leaders Choose PulseQuo"
            description="Eliminate ticket backlogs and empower support agents with synchronized intelligence."
          />

          <div className="mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {product.benefits.map((benefit, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.45, delay: i * 0.08, ease: easeOutCurve }}
                className="rounded-2xl bg-white border border-slate-200/90 p-6 shadow-xs hover:border-violet-400 hover:shadow-md transition-all"
              >
                <CheckCircle2 className="size-6 text-violet-600 mb-4" />
                <h4 className="text-base font-bold text-slate-900">{benefit.title}</h4>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          6. PRODUCT FAQS
         ───────────────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-20 bg-slate-50/70 border-b border-slate-200/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Product FAQs"
            title="Support CRM Questions Answered"
            description="Common technical and implementation questions regarding ticketing channels and SLA timers."
          />

          <div className="mt-10 sm:mt-12">
            <FAQAccordion items={product.faqs.map((f, i) => ({ id: `support-faq-${i}`, ...f, category: 'CRM' as const }))} />
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          7. CLOSING CTA
         ───────────────────────────────────────────────────────────── */}
      <CTASection
        headline="Ready to Elevate Your Support Experience?"
        subheadline="Centralize WhatsApp, live chat, and email tickets into a synchronized support workspace with strict SLA enforcement."
        primaryCtaText="Get Started"
        secondaryCtaText="Request Support Demo"
        secondaryCtaHref="/book-demo?product=Support+CRM"
      />
    </div>
  )
}
