/**
 * Product Detail Page: Sales CRM
 * Route: /products/sales-crm
 * Landing page with Card Fanout, Brand Carousel, Testimonial Carousel, and Ambient Background.
 */

import { Link } from 'react-router'
import { motion } from 'motion/react'
import {
  CheckCircle2,
  CalendarCheck,
  ArrowRight,
  Kanban,
  MessageSquare,
  Zap,
  DollarSign,
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

const salesFanoutCards: FanoutCard[] = [
  {
    id: 'inbound-lead',
    category: 'Instant WhatsApp Lead Capture',
    title: 'New High-Intent Enterprise Lead',
    subtitle: 'Apex Retail · VP of Commerce',
    badge: 'Qualified (30s)',
    badgeColor: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    icon: MessageSquare,
    iconColor: 'text-emerald-600',
    iconBg: 'bg-emerald-50 border-emerald-200',
    description: 'Captured directly from inbound WhatsApp chat. AI extracted company size (250+ reps) and requirements, creating a qualified deal automatically.',
    metric: '10x Faster',
    metricLabel: 'First Response Time',
    channel: 'WhatsApp Sales Channel',
    channelIconColor: 'text-emerald-500',
    timestamp: 'Just now',
    accentBorder: 'hover:border-emerald-500',
    gradientHeader: 'from-emerald-600 to-teal-600',
  },
  {
    id: 'kanban-deal',
    category: 'Visual Pipeline Tracking',
    title: 'Omnichannel Expansion Deal',
    subtitle: 'FinEdge Pay · Contract Value: ₹18.4L',
    badge: 'Closing Stage',
    badgeColor: 'bg-indigo-50 text-indigo-700 border-indigo-200',
    icon: Kanban,
    iconColor: 'text-indigo-600',
    iconBg: 'bg-indigo-50 border-indigo-200',
    description: 'Visual drag-and-drop deal management. Tracked through Demo, Security Review, and Contract stages with automated reminders.',
    metric: '+48%',
    metricLabel: 'Win Rate Uplift',
    channel: 'Custom Sales Kanban',
    channelIconColor: 'text-indigo-500',
    timestamp: '5m ago',
    accentBorder: 'hover:border-indigo-500',
    gradientHeader: 'from-indigo-600 to-purple-600',
  },
  {
    id: 'instant-quote',
    category: 'Conversational Quotation',
    title: '1-Click WhatsApp Quote Generated',
    subtitle: 'UrbanCart · 50,000 Monthly Dispatches',
    badge: 'Signed & Approved',
    badgeColor: 'bg-blue-50 text-blue-700 border-blue-200',
    icon: DollarSign,
    iconColor: 'text-blue-600',
    iconBg: 'bg-blue-50 border-blue-200',
    description: 'Sales reps generated an official formatted rate card PDF and payment link inside WhatsApp. Customer approved with digital signature.',
    metric: '4-Day',
    metricLabel: 'Deal Cycle Average',
    channel: 'Dynamic Rate Engine',
    channelIconColor: 'text-blue-500',
    timestamp: '15m ago',
    accentBorder: 'hover:border-blue-500',
    gradientHeader: 'from-blue-600 to-indigo-600',
  },
  {
    id: 'automated-nudge',
    category: 'Stagnant Deal Automation',
    title: 'Automated Drip Re-engagement',
    subtitle: 'NovaHealth · 3 Days Inactive',
    badge: 'Replied in 12m',
    badgeColor: 'bg-purple-50 text-purple-700 border-purple-200',
    icon: Zap,
    iconColor: 'text-purple-600',
    iconBg: 'bg-purple-50 border-purple-200',
    description: 'Smart trigger alerted assigned account executive and sent a tailored WhatsApp check-in with new customer case study link.',
    metric: '32%',
    metricLabel: 'Stagnant Reactivation',
    channel: 'Automated Sales Drip',
    channelIconColor: 'text-purple-500',
    timestamp: '25m ago',
    accentBorder: 'hover:border-purple-500',
    gradientHeader: 'from-purple-600 to-pink-600',
  },
]

export function SalesCRMPage() {
  const product = productsData['sales-crm']

  return (
    <div className="relative bg-white text-slate-900 selection:bg-indigo-600 selection:text-white">
      <SEO
        title="Sales CRM · Lead Management & Deal Pipelines | PulseQuo"
        description="Turn every lead into closed revenue. Capture leads from chat and WhatsApp, track custom Kanban pipelines, and automate follow-ups with PulseQuo Sales CRM."
        canonicalPath="/products/sales-crm"
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
              { label: 'Sales CRM' },
            ]}
            className="mb-8"
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: easeOutCurve }}
              className="lg:col-span-6"
            >
              <div className="inline-flex items-center gap-2.5 mb-5">
                <span className="h-[2px] w-6 rounded-full bg-indigo-600" />
                <span className="text-xs font-semibold tracking-wide text-indigo-600">
                  Conversational Sales CRM & Deal Pipelines
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-[-0.035em] leading-[1.08] text-balance">
                Turn every conversation into{' '}
                <span className="text-gradient-hero">
                  closed revenue.
                </span>
              </h1>

              <p className="mt-6 text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl font-normal text-pretty">
                Manage your entire sales journey from lead generation to deal closure with PulseQuo Sales CRM. Connect
                inbound WhatsApp and website chats directly to custom deal stages, automate follow-up reminders, and
                forecast pipeline revenue with confidence.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row items-center gap-3.5">
                <Link
                  to="/book-demo?product=Sales+CRM"
                  className="btn-shine w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-bold text-white bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 rounded-xl transition-all shadow-md shadow-indigo-500/20"
                >
                  <CalendarCheck className="size-4" />
                  <span>Schedule sales CRM demo</span>
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
                  <span>Custom Kanban Stages</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-emerald-600 shrink-0" />
                  <span>WhatsApp 1-Click Chat</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-emerald-600 shrink-0" />
                  <span>Automated Rep Routing</span>
                </div>
              </div>
            </motion.div>

            {/* Right Column: Interactive Fanout Deck */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.55, delay: 0.15, ease: easeOutCurve }}
              className="lg:col-span-6 relative"
            >
              <CardFanout
                cards={salesFanoutCards}
                hideHeader={true}
                compact={true}
                className="max-w-full"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          2. BRAND TRUST MARQUEE CAROUSEL
         ───────────────────────────────────────────────────────────── */}
      <BrandCarousel />

      {/* ─────────────────────────────────────────────────────────────
          4. CUSTOMER TESTIMONIALS CAROUSEL
         ───────────────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-20 bg-slate-50/70 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="PROVEN REVENUE ACCELERATION"
            title="Trusted by High-Velocity Sales Teams"
            description="See how revenue leaders close deals 10x faster with unified WhatsApp & CRM pipelines."
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
            title="Why High-Growth Sales Teams Choose PulseQuo"
            description="Eliminate deal leakage and shorten your sales cycles from weeks down to hours."
          />

          <div className="mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {product.benefits.map((benefit, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.45, delay: i * 0.08, ease: easeOutCurve }}
                className="rounded-2xl bg-white border border-slate-200/90 p-6 shadow-xs hover:border-indigo-400 hover:shadow-md transition-all"
              >
                <CheckCircle2 className="size-6 text-indigo-600 mb-4" />
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
            title="Sales CRM Questions Answered"
            description="Common technical and implementation questions regarding pipeline setup and WhatsApp linking."
          />

          <div className="mt-10 sm:mt-12">
            <FAQAccordion items={product.faqs.map((f, i) => ({ id: `sales-faq-${i}`, ...f, category: 'CRM' as const }))} />
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          7. CLOSING CTA
         ───────────────────────────────────────────────────────────── */}
      <CTASection
        headline="Ready to Accelerate Your Sales Velocity?"
        subheadline="Connect your WhatsApp numbers, capture high-intent inbound prospects, and close more deals with PulseQuo Sales CRM."
        primaryCtaText="Get Started"
        secondaryCtaText="Schedule Sales Demo"
        secondaryCtaHref="/book-demo?product=Sales+CRM"
      />
    </div>
  )
}
