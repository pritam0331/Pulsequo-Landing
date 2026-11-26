import { useState } from 'react'
import { Link } from 'react-router'
import { motion, AnimatePresence } from 'motion/react'
import {
  ArrowRight,
  CalendarCheck,
  CheckCircle2,
  Inbox,
  MessageSquare,
  Radio,
  Truck,
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

const commFanoutCards: FanoutCard[] = [
  {
    id: 'wa-shipping',
    category: 'WhatsApp Commerce',
    title: 'Order Dispatch & Tracking Alert',
    subtitle: 'Bluedart Express · AWB #BD-99201',
    badge: 'Delivered (320ms)',
    badgeColor: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    icon: Truck,
    iconColor: 'text-emerald-600',
    iconBg: 'bg-emerald-50 border-emerald-200',
    description:
      'Automated WhatsApp shipping template dispatched upon warehouse fulfillment. Real-time delivery receipt (DLR) confirmed with live tracking button.',
    metric: '99.98%',
    metricLabel: 'Delivery Rate',
    channel: 'Meta Cloud API v20',
    channelIconColor: 'text-emerald-500',
    timestamp: 'Just now',
    accentBorder: 'hover:border-emerald-500',
    gradientHeader: 'from-emerald-600 to-teal-600',
  },
  {
    id: 'smpp-otp',
    category: 'Carrier SMPP Trunk',
    title: 'Transactional 2FA Banking OTP',
    subtitle: 'FinEdge Pay · Direct Pipeline',
    badge: 'TRAI DLT Verified',
    badgeColor: 'bg-blue-50 text-blue-700 border-blue-200',
    icon: Radio,
    iconColor: 'text-blue-600',
    iconBg: 'bg-blue-50 border-blue-200',
    description:
      'Prioritized SMPP v3.4 carrier routing through Tier-1 telecom switches. Sub-second delivery latency with zero dropped packets.',
    metric: '250 msg/s',
    metricLabel: 'Throughput Capacity',
    channel: 'SMPP v3.4 Trunk',
    channelIconColor: 'text-blue-500',
    timestamp: '1m ago',
    accentBorder: 'hover:border-blue-500',
    gradientHeader: 'from-blue-600 to-indigo-600',
  },
  {
    id: 'team-inbox',
    category: 'Omnichannel Helpdesk',
    title: 'Shared Inbox Conversation',
    subtitle: 'Customer #4901 · WhatsApp + Web',
    badge: 'Escalated to Agent',
    badgeColor: 'bg-purple-50 text-purple-700 border-purple-200',
    icon: Inbox,
    iconColor: 'text-purple-600',
    iconBg: 'bg-purple-50 border-purple-200',
    description:
      'Multi-agent shared inbox with round-robin distribution and private internal notes. All channels merged into a single continuous thread.',
    metric: '< 45s',
    metricLabel: 'First Response SLA',
    channel: 'Unified Team Inbox',
    channelIconColor: 'text-purple-500',
    timestamp: '4m ago',
    accentBorder: 'hover:border-purple-500',
    gradientHeader: 'from-purple-600 to-indigo-600',
  },
  {
    id: 'broadcast-promo',
    category: 'Targeted Marketing',
    title: 'Pre-Approved Festive Promo Broadcast',
    subtitle: 'Segment: VIP Shoppers (50k)',
    badge: '98.4% Read Rate',
    badgeColor: 'bg-amber-50 text-amber-700 border-amber-200',
    icon: Zap,
    iconColor: 'text-amber-600',
    iconBg: 'bg-amber-50 border-amber-200',
    description:
      'Interactive button cards with 1-click CTA checkout. Integrated with Shopify & WooCommerce catalogs for real-time inventory.',
    metric: '4.8x ROI',
    metricLabel: 'Campaign Return',
    channel: 'WhatsApp Catalogs',
    channelIconColor: 'text-amber-500',
    timestamp: '10m ago',
    accentBorder: 'hover:border-amber-500',
    gradientHeader: 'from-amber-500 to-rose-500',
  },
]

const COMM_MODULES = {
  whatsapp: {
    icon: MessageSquare,
    iconClass: 'bg-emerald-50 text-emerald-600 border-emerald-200/80',
    hoverBorder: 'hover:border-emerald-300',
    accentText: 'text-emerald-700',
    title: 'WhatsApp Business API',
    description:
      'Official WhatsApp Business Platform connectivity. Send verified green-badge messages, broadcast pre-approved marketing templates, dispatch interactive quick-reply buttons, and provide 24/7 care.',
    highlights: ['Meta Cloud API Verified', 'Template Manager', '24h Care Window'],
    cards: [
      {
        title: 'Interactive Templates',
        desc: 'Rich media cards, CTA buttons, quick replies, list pickers, and product catalogs.',
      },
      {
        title: 'Broadcast Campaigns',
        desc: 'Filter customer segments and broadcast pre-approved promotional or utility templates.',
      },
      {
        title: 'Delivery & Read Webhooks',
        desc: 'Real-time status tracking for sent, delivered, read, and failed events with error diagnostics.',
      },
      {
        title: 'Multi-Account Management',
        desc: 'Manage multiple phone numbers and brands from one unified enterprise admin console.',
      },
    ],
  },
  sms: {
    icon: Zap,
    iconClass: 'bg-blue-50 text-blue-600 border-blue-200/80',
    hoverBorder: 'hover:border-blue-300',
    accentText: 'text-blue-700',
    title: 'SMS Gateway & DLT Compliance',
    description:
      'Carrier-grade SMS routing for transactional alerts, high-speed OTP authentication, and marketing broadcasts with strict Telecom Regulatory Authority of India (TRAI) DLT compliance.',
    highlights: ['DLT Entity & Header Binding', 'SMPP v3.4 Support', 'Sub-second OTP Latency'],
    cards: [
      {
        title: 'Transactional & OTP Delivery',
        desc: 'Prioritized carrier paths engineered for security codes, bank alerts, and 2FA authentication.',
      },
      {
        title: 'Promotional Bulk SMS',
        desc: 'Time-window restricted broadcasts complying with DND (Do Not Disturb) telecom regulations.',
      },
      {
        title: 'DLT Template Matching',
        desc: 'Pre-validates template IDs and dynamic text variables before submission to carrier switches.',
      },
      {
        title: 'Direct SMPP Sessions',
        desc: 'Connect high-volume internal applications directly via Short Message Peer-to-Peer protocol.',
      },
    ],
  },
  inbox: {
    icon: Inbox,
    iconClass: 'bg-indigo-50 text-indigo-600 border-indigo-200/80',
    hoverBorder: 'hover:border-indigo-300',
    accentText: 'text-indigo-700',
    title: 'Omnichannel Team Inbox',
    description:
      'Consolidate customer dialogues from WhatsApp, live chat, SMS, and email into a collaborative shared workspace with automated assignment and internal notes.',
    highlights: ['Multi-Agent Workspace', 'Round-Robin Assignment', 'Private Internal Notes'],
    cards: [
      {
        title: 'Unified Conversation History',
        desc: 'View previous messages across all connected channels in one single continuous thread.',
      },
      {
        title: 'Agent Assignment Rules',
        desc: 'Direct incoming inquiries based on agent skills, department queues, or round-robin rotation.',
      },
      {
        title: 'Canned Snippets & Macros',
        desc: 'Insert pre-written standard responses with keyboard shortcuts to maintain brand consistency.',
      },
      {
        title: 'Bot-to-Human Handover',
        desc: 'AI bots escalate complex conversations to human agents instantly with full context preserved.',
      },
    ],
  },
} as const

type ModuleKey = keyof typeof COMM_MODULES

const MODULE_TABS: { id: ModuleKey; label: string }[] = [
  { id: 'whatsapp', label: 'WhatsApp Business API' },
  { id: 'sms', label: 'SMS Gateway & DLT' },
  { id: 'inbox', label: 'Omnichannel Team Inbox' },
]

export function CommunicationCloudPage() {
  const product = productsData['communication-cloud']
  const [activeModule, setActiveModule] = useState<ModuleKey>('whatsapp')
  const currentModule = COMM_MODULES[activeModule]
  const ModuleIcon = currentModule.icon

  return (
    <div className="relative bg-white text-slate-900 selection:bg-blue-600 selection:text-white">
      <SEO
        title="Communication Cloud · Unified Business CPaaS & WhatsApp API | PulseQuo"
        description="Scale business communication with official WhatsApp Business API, TRAI DLT-compliant SMS gateway, transactional email, voice hooks, and unified omnichannel inbox."
        canonicalPath="/products/communication-cloud"
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
              { label: 'Communication Cloud' },
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
                Every conversation on one{' '}
                <span className="text-gradient-hero">
                  carrier-grade platform.
                </span>
              </h1>

              <p className="mt-4 sm:mt-6 text-sm sm:text-lg text-slate-600 leading-relaxed max-w-2xl font-normal text-pretty">
                Scale customer reach across official WhatsApp Business Platform, high-throughput SMS gateways, business
                email, and voice. Centralize all customer dialogues into a unified omnichannel inbox with automated
                channel routing.
              </p>

              <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center gap-3">
                <Link
                  to="/book-demo?product=Communication+Cloud"
                  className="btn-shine w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-800 rounded-xl transition-all shadow-md shadow-blue-500/20"
                >
                  <CalendarCheck className="size-4" />
                  <span>Book communication demo</span>
                </Link>

                <Link
                  to="/book-demo?product=Communication+Cloud"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 text-sm font-bold text-slate-700 bg-white hover:bg-slate-50 border border-slate-300 rounded-xl transition-all shadow-2xs"
                >
                  <span>Get started free</span>
                  <ArrowRight className="size-4" />
                </Link>
              </div>

              <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-4 border-t border-slate-200/80 pt-6 text-xs font-medium text-slate-600">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-emerald-600 shrink-0" />
                  <span>Official Meta Cloud API</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-emerald-600 shrink-0" />
                  <span>India TRAI DLT Compliant</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-emerald-600 shrink-0" />
                  <span>SMPP v3.4 Direct Session</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.55, delay: 0.15, ease: easeOutCurve }}
              className="lg:col-span-6 relative"
            >
              <CardFanout cards={commFanoutCards} hideHeader={true} compact={true} />
            </motion.div>
          </div>
        </div>
      </section>

      <BrandCarousel />

      <section className="py-10 sm:py-16 section-fade-tint">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Comprehensive Multi-Channel Infrastructure"
            description="Built to handle high-concurrency enterprise messaging across all primary customer communication touchpoints."
          />

          <div className="mt-7 sm:mt-8 flex justify-center">
            <div className="inline-flex flex-wrap sm:flex-nowrap items-center justify-center gap-1 p-1 rounded-xl bg-white border border-slate-200/90 shadow-2xs">
              {MODULE_TABS.map((tab) => {
                const isActive = activeModule === tab.id
                return (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setActiveModule(tab.id)}
                    className={`relative px-3.5 sm:px-5 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-colors cursor-pointer whitespace-nowrap ${
                      isActive ? 'text-white' : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="comm-module-tab"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                        className="absolute inset-0 rounded-lg bg-blue-600 shadow-sm"
                      />
                    )}
                    <span className="relative z-10">{tab.label}</span>
                  </button>
                )
              })}
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeModule}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3, ease: easeOutCurve }}
              className="mt-8 sm:mt-10 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start"
            >
              <div className="lg:col-span-5">
                <div
                  className={`flex size-10 sm:size-11 items-center justify-center rounded-xl mb-3.5 sm:mb-4 border ${currentModule.iconClass}`}
                >
                  <ModuleIcon className="size-5" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                  {currentModule.title}
                </h3>
                <p className="mt-2.5 sm:mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  {currentModule.description}
                </p>
                <div className="mt-4 sm:mt-5 flex flex-wrap items-center gap-x-3 gap-y-1.5 text-xs font-medium text-slate-500">
                  {currentModule.highlights.map((h, i) => (
                    <span key={h} className="inline-flex items-center gap-3">
                      <span className={i === 0 ? `${currentModule.accentText} font-semibold` : ''}>
                        {h}
                      </span>
                      {i < currentModule.highlights.length - 1 && (
                        <span className="text-slate-300" aria-hidden="true">
                          ·
                        </span>
                      )}
                    </span>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-7">
                <HorizontalCardCarousel
                  mode="mobile"
                  itemCount={currentModule.cards.length}
                  ariaLabel={currentModule.title}
                  counterLabel="Capabilities"
                  desktopGridClassName="lg:grid lg:grid-cols-2 lg:gap-4 lg:overflow-visible"
                  skeletonVariant="module-card"
                >
                  {currentModule.cards.map((card) => (
                    <div
                      key={card.title}
                      data-cursor="glass"
                      className={`snap-start shrink-0 w-[76vw] max-w-[280px] sm:w-[300px] lg:w-auto lg:max-w-none h-full min-h-[136px] sm:min-h-[152px] flex flex-col justify-between rounded-2xl border border-slate-200/90 bg-white p-4 sm:p-6 shadow-2xs hover:-translate-y-1 ${currentModule.hoverBorder} hover:shadow-md transition-all duration-200`}
                    >
                      <div>
                        <h4 className="text-sm sm:text-base font-bold text-slate-900">
                          {card.title}
                        </h4>
                        <p className="mt-1.5 sm:mt-2 text-xs sm:text-[13px] text-slate-600 leading-relaxed">
                          {card.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </HorizontalCardCarousel>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      <section className="py-12 sm:py-16 section-fade-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Trusted for Critical Customer Communications"
            description="Leading companies achieve 99.98% delivery receipts and sub-second SLAs on PulseQuo."
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

      <section className="py-12 sm:py-16 section-fade-tint">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Why Leading Brands Trust PulseQuo Communication Cloud"
            description="Proven advantages of unifying multi-channel customer messaging."
          />

          <div className="mt-8 sm:mt-10">
            <HorizontalCardCarousel
              mode="mobile"
              itemCount={product.benefits.length}
              ariaLabel="Communication Cloud benefits"
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
                  className="snap-start shrink-0 w-[76vw] max-w-[290px] sm:w-[300px] lg:w-auto lg:max-w-none group relative overflow-hidden h-full min-h-[180px] sm:min-h-[212px] flex flex-col justify-between rounded-2xl bg-white border border-slate-200/90 p-5 sm:p-6 shadow-2xs hover:border-blue-400 hover:shadow-lg hover:shadow-blue-950/5 transition-all duration-200"
                >
                  <div className="absolute inset-x-0 top-0 h-[2.5px] bg-gradient-to-r from-blue-600 to-cyan-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                  <div>
                    <div className="size-9 sm:size-10 rounded-xl bg-blue-50 text-blue-600 border border-blue-200/80 flex items-center justify-center mb-3.5 sm:mb-4 group-hover:scale-105 transition-transform">
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

      <section className="py-12 sm:py-16 section-fade-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Communication Cloud Questions Answered"
            description="Common technical and implementation questions regarding WhatsApp Business and SMS gateways."
          />

          <div className="mt-10 sm:mt-12">
            <FAQAccordion items={product.faqs.map((f, i) => ({ id: `comm-faq-${i}`, ...f, category: 'Communication' }))} />
          </div>
        </div>
      </section>

      <CTASection
        headline="Ready to Unify Your Customer Communications?"
        subheadline="Talk to our CPaaS solutions team to configure your verified WhatsApp Business account and DLT-compliant SMS routing."
        primaryCtaText="Get Started"
        secondaryCtaText="Book a CPaaS Demo"
        secondaryCtaHref="/book-demo?product=Communication+Cloud"
      />
    </div>
  )
}
