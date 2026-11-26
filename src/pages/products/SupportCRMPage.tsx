import { Link } from 'react-router'
import { motion } from 'motion/react'
import {
  ArrowRight,
  Bot,
  CalendarCheck,
  CheckCircle2,
  Clock,
  MessageSquare,
  Users,
} from 'lucide-react'
import { SEO } from '../../components/common/SEO'
import { Breadcrumbs } from '../../components/common/Breadcrumbs'
import { BackgroundAnimation } from '../../components/common/BackgroundAnimation'
import { BrandCarousel } from '../../components/common/BrandCarousel'
import { CardFanout, type FanoutCard } from '../../components/common/CardFanout'
import { SectionHeading } from '../../components/common/SectionHeading'
import { TestimonialsCarousel } from '../../components/common/TestimonialsCarousel'
import { HorizontalCardCarousel } from '../../components/common/HorizontalCardCarousel'
import { FAQAccordion } from '../../components/common/FAQAccordion'
import { CTASection } from '../../components/common/CTASection'
import { productsData } from '../../data/products'

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
    description:
      'Enforceable SLA timer countdown. Automatically escalates to tier-2 team lead if first response exceeds 15 minutes.',
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
    description:
      'AI agent looked up courier tracking status via Bluedart API, generated instant return label, and closed inquiry with zero human agent workload.',
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
    description:
      'Agent has complete conversational timeline, purchase receipts, and past support tickets unified in one single screen.',
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
    description:
      'Matches incoming issue keywords with certified solution architects, preventing misrouted tickets and repetitive customer explanations.',
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
      <section
        data-cursor-zone="hero"
        className="relative overflow-hidden bg-white pt-8 pb-12 sm:pt-12 sm:pb-16"
      >
        <BackgroundAnimation variant="hero" showGrid={true} showBeams={true} />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: 'Products', href: '/#platform-overview' },
              { label: 'Support CRM' },
            ]}
            className="mb-8"
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: easeOutCurve }}
              className="lg:col-span-6 min-w-0"
            >
              <h1 className="text-3xl sm:text-4xl lg:text-[42px] xl:text-[50px] font-black text-slate-900 tracking-[-0.03em] leading-[1.16] text-balance">
                Deliver customer support that{' '}
                <span className="text-gradient-hero">
                  drives resolution.
                </span>
              </h1>

              <p className="mt-4 sm:mt-6 text-sm sm:text-lg text-slate-600 leading-relaxed max-w-2xl font-normal text-pretty">
                Manage customer queries, support tickets, agents, and multi-channel conversations through one centralized
                support platform. Enforce rigorous SLA standards, automate Tier-1 resolutions, and co-pilot agents with
                intelligent knowledge bases.
              </p>

              <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center gap-3">
                <Link
                  to="/book-demo?product=Support+CRM"
                  className="btn-shine w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 text-sm font-bold text-white bg-violet-600 hover:bg-violet-700 active:bg-violet-800 rounded-xl transition-all shadow-md shadow-violet-500/20"
                >
                  <CalendarCheck className="size-4" />
                  <span>Request support CRM demo</span>
                </Link>

                <Link
                  to="/book-demo?product=Support+CRM"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 text-sm font-bold text-slate-700 bg-white hover:bg-slate-50 border border-slate-300 rounded-xl transition-all shadow-2xs"
                >
                  <span>Get started free</span>
                  <ArrowRight className="size-4" />
                </Link>
              </div>

              <div className="mt-6 sm:mt-8 grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 border-t border-slate-200/80 pt-5 sm:pt-6 text-xs font-medium text-slate-600">
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

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.55, delay: 0.15, ease: easeOutCurve }}
              className="lg:col-span-6 relative"
            >
              <CardFanout cards={supportFanoutCards} hideHeader={true} compact={true} />
            </motion.div>
          </div>
        </div>
      </section>

      <BrandCarousel />

      <section className="py-12 sm:py-16 section-fade-tint">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Trusted by World-Class Support Teams"
            description="Achieve 78% autonomous deflection and sub-45s response latency across every channel."
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

      <section className="py-12 sm:py-16 section-fade-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Why Support Leaders Choose PulseQuo"
            description="Eliminate ticket backlogs and empower support agents with synchronized intelligence."
          />

          <div className="mt-8 sm:mt-10">
            <HorizontalCardCarousel
              mode="mobile"
              itemCount={product.benefits.length}
              ariaLabel="Support CRM benefits"
              counterLabel="Benefits"
              desktopGridClassName="lg:grid lg:grid-cols-4 lg:gap-5 lg:overflow-visible"
              skeletonVariant="benefit"
            >
              {product.benefits.map((benefit, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.45, delay: i * 0.06, ease: easeOutCurve }}
                  whileHover={{ y: -5, transition: { type: 'spring', stiffness: 350, damping: 24 } }}
                  data-cursor="glass"
                  className="snap-start shrink-0 w-[76vw] max-w-[290px] sm:w-[300px] lg:w-auto lg:max-w-none group relative overflow-hidden h-full min-h-[180px] sm:min-h-[212px] flex flex-col justify-between rounded-2xl bg-white border border-slate-200/90 p-5 sm:p-6 shadow-2xs hover:border-violet-400 hover:shadow-lg hover:shadow-violet-950/5 transition-all duration-200"
                >
                  <div className="absolute inset-x-0 top-0 h-[2.5px] bg-gradient-to-r from-violet-600 to-purple-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                  <div>
                    <div className="size-9 sm:size-10 rounded-xl bg-violet-50 text-violet-600 border border-violet-200/80 flex items-center justify-center mb-3.5 sm:mb-4 group-hover:scale-105 transition-transform">
                      <CheckCircle2 className="size-4.5 sm:size-5" />
                    </div>
                    <h4 className="text-sm sm:text-base font-bold text-slate-900">{benefit.title}</h4>
                    <p className="mt-1.5 sm:mt-2 text-xs sm:text-[13px] text-slate-600 leading-relaxed font-normal">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </HorizontalCardCarousel>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 section-fade-tint">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Support CRM Questions Answered"
            description="Common technical and implementation questions regarding ticketing channels and SLA timers."
          />

          <div className="mt-8 sm:mt-10">
            <FAQAccordion items={product.faqs.map((f, i) => ({ id: `support-faq-${i}`, ...f, category: 'CRM' as const }))} />
          </div>
        </div>
      </section>

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
