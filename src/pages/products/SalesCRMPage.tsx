import { Link } from 'react-router'
import { motion } from 'motion/react'
import {
  ArrowRight,
  CalendarCheck,
  CheckCircle2,
  DollarSign,
  Kanban,
  MessageSquare,
  Zap,
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
    description:
      'Captured directly from inbound WhatsApp chat. AI extracted company size (250+ reps) and requirements, creating a qualified deal automatically.',
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
    description:
      'Visual drag-and-drop deal management. Tracked through Demo, Security Review, and Contract stages with automated reminders.',
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
    description:
      'Sales reps generated an official formatted rate card PDF and payment link inside WhatsApp. Customer approved with digital signature.',
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
    description:
      'Smart trigger alerted assigned account executive and sent a tailored WhatsApp check-in with new customer case study link.',
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
      <section
        data-cursor-zone="hero"
        className="relative overflow-hidden bg-white pt-8 pb-12 sm:pt-12 sm:pb-16"
      >
        <BackgroundAnimation variant="hero" showGrid={true} showBeams={true} />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: 'Products', href: '/#platform-overview' },
              { label: 'Sales CRM' },
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
                Turn every conversation into{' '}
                <span className="text-gradient-hero">
                  closed revenue.
                </span>
              </h1>

              <p className="mt-4 sm:mt-6 text-sm sm:text-lg text-slate-600 leading-relaxed max-w-2xl font-normal text-pretty">
                Manage your entire sales journey from lead generation to deal closure with PulseQuo Sales CRM. Connect
                inbound WhatsApp and website chats directly to custom deal stages, automate follow-up reminders, and
                forecast pipeline revenue with confidence.
              </p>

              <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center gap-3">
                <Link
                  to="/book-demo?product=Sales+CRM"
                  className="btn-shine w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 text-sm font-bold text-white bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 rounded-xl transition-all shadow-md shadow-indigo-500/20"
                >
                  <CalendarCheck className="size-4" />
                  <span>Schedule sales CRM demo</span>
                </Link>

                <Link
                  to="/book-demo?product=Sales+CRM"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 text-sm font-bold text-slate-700 bg-white hover:bg-slate-50 border border-slate-300 rounded-xl transition-all shadow-2xs"
                >
                  <span>Get started free</span>
                  <ArrowRight className="size-4" />
                </Link>
              </div>

              <div className="mt-6 sm:mt-8 grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 border-t border-slate-200/80 pt-5 sm:pt-6 text-xs font-medium text-slate-600">
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
                  <span>Automated Rep Assignment</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.55, delay: 0.15, ease: easeOutCurve }}
              className="lg:col-span-6 relative"
            >
              <CardFanout cards={salesFanoutCards} hideHeader={true} compact={true} />
            </motion.div>
          </div>
        </div>
      </section>

      <BrandCarousel />

      <section className="py-12 sm:py-16 section-fade-tint">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Trusted by High-Velocity Sales Teams"
            description="See how revenue leaders close deals 10x faster with unified WhatsApp & CRM pipelines."
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
            title="Why High-Growth Sales Teams Choose PulseQuo"
            description="Eliminate deal leakage and shorten your sales cycles from weeks down to hours."
          />

          <div className="mt-8 sm:mt-10">
            <HorizontalCardCarousel
              mode="mobile"
              itemCount={product.benefits.length}
              ariaLabel="Sales CRM benefits"
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
                  className="snap-start shrink-0 w-[76vw] max-w-[290px] sm:w-[300px] lg:w-auto lg:max-w-none group relative overflow-hidden h-full min-h-[180px] sm:min-h-[212px] flex flex-col justify-between rounded-2xl bg-white border border-slate-200/90 p-5 sm:p-6 shadow-2xs hover:border-indigo-400 hover:shadow-lg hover:shadow-indigo-950/5 transition-all duration-200"
                >
                  <div className="absolute inset-x-0 top-0 h-[2.5px] bg-gradient-to-r from-indigo-600 to-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                  <div>
                    <div className="size-9 sm:size-10 rounded-xl bg-indigo-50 text-indigo-600 border border-indigo-200/80 flex items-center justify-center mb-3.5 sm:mb-4 group-hover:scale-105 transition-transform">
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
            title="Sales CRM Questions Answered"
            description="Common technical and implementation questions regarding pipeline setup and WhatsApp linking."
          />

          <div className="mt-8 sm:mt-10">
            <FAQAccordion items={product.faqs.map((f, i) => ({ id: `sales-faq-${i}`, ...f, category: 'CRM' as const }))} />
          </div>
        </div>
      </section>

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
