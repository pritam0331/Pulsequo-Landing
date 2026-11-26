import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import {
  Star,
  Quote,
  CheckCircle2,
  Building2,
  TrendingUp,
  Clock,
  Sparkles,
} from 'lucide-react'
import { TestimonialsCarouselSkeleton, useCardHydration } from './CardSkeleton'

export interface Testimonial {
  id: string
  name: string
  role: string
  company: string
  industry: string
  avatar: string
  metric: string
  metricLabel: string
  quote: string
  highlights: string[]
  verified: boolean
  impactIcon: typeof TrendingUp
}

const TESTIMONIALS: Testimonial[] = [
  {
    id: 'apex-retail',
    name: 'Aditi Sharma',
    role: 'Head of Growth',
    company: 'Apex Retail',
    industry: 'Omnichannel Commerce',
    avatar: 'AS',
    metric: '+48%',
    metricLabel: 'WhatsApp Conversion Rate',
    impactIcon: TrendingUp,
    quote:
      'Switching to PulseQuo reduced our customer acquisition response time from 35 minutes down to 45 seconds on WhatsApp. Having our Sales CRM and WhatsApp in one synchronized screen is a game changer for our conversion funnel.',
    highlights: ['45-second first response', 'Unified CRM + WhatsApp inbox', '12,000+ weekly sales chats'],
    verified: true,
  },
  {
    id: 'finedge-pay',
    name: 'Vikramaditya Roy',
    role: 'VP Engineering',
    company: 'FinEdge Pay',
    industry: 'Fintech & Payments',
    avatar: 'VR',
    metric: '99.98%',
    metricLabel: 'Carrier DLR Delivery SLA',
    impactIcon: Clock,
    quote:
      'We dispatch over 2 million transactional OTPs every month. PulseQuo’s TRAI DLT compliance and direct carrier SMPP routing give us an unbeatable 99.98% delivery receipt rate with zero operational headaches.',
    highlights: ['2M+ monthly OTP alerts', 'Sub-second SMS delivery', 'Zero DLT compliance rejections'],
    verified: true,
  },
  {
    id: 'nova-health',
    name: 'Pooja Venkatesh',
    role: 'Chief Customer Officer',
    company: 'NovaHealth',
    industry: 'Healthcare Network',
    avatar: 'PV',
    metric: '78%',
    metricLabel: 'Autonomous AI Deflection',
    impactIcon: Sparkles,
    quote:
      'The AI agents handle 78% of tier-1 support inquiries automatically, grounded in our medical policies. When human handoff occurs, our specialists have the complete patient timeline right in front of them.',
    highlights: ['Sub-2s AI response time', 'Zero hallucination grounding', 'Seamless agent handoff'],
    verified: true,
  },
  {
    id: 'zepto-logix',
    name: 'Devendra Singhania',
    role: 'Head of Customer Operations',
    company: 'ZeptoLogix',
    industry: 'Quick Commerce Logistics',
    avatar: 'DS',
    metric: '3.4x',
    metricLabel: 'Support Pipeline Velocity',
    impactIcon: TrendingUp,
    quote:
      'Real-time delivery notifications on WhatsApp paired with autonomous order tracking bots saved our human support agents over 300 hours every week while elevating CSAT scores to 4.9 out of 5.',
    highlights: ['Automated delivery tracking', '300+ support hours saved/wk', '4.9/5 verified CSAT'],
    verified: true,
  },
  {
    id: 'urban-cart',
    name: 'Dr. Ananya Iyer',
    role: 'VP of Technology & CX',
    company: 'UrbanCart Global',
    industry: 'DTC Retail & Fashion',
    avatar: 'AI',
    metric: '< 15s',
    metricLabel: 'VIP Resolution SLA',
    impactIcon: Clock,
    quote:
      'Consolidating six fragmented point solutions—helpdesk, bulk SMS gateway, WhatsApp CRM, and AI bots—into PulseQuo trimmed our SaaS bill by 40% while unlocking instant multi-channel reporting.',
    highlights: ['40% SaaS spend reduction', 'Multi-channel unified queues', 'Strict VIP SLA enforcement'],
    verified: true,
  },
]

export function TestimonialsCarousel({
  className = '',
  isLoading,
}: {
  className?: string
  isLoading?: boolean
}) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState<'left' | 'right'>('right')
  const [isPaused, setIsPaused] = useState(false)
  const timerRef = useRef<number | null>(null)
  const isHydrated = useCardHydration(200)
  const showSkeleton = isLoading ?? !isHydrated

  const activeTestimonial = TESTIMONIALS[currentIndex]

  // Autoplay functionality with 6.5s interval
  useEffect(() => {
    if (showSkeleton || isPaused) return

    timerRef.current = window.setInterval(() => {
      setDirection('right')
      setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length)
    }, 6500)

    return () => {
      if (timerRef.current) clearInterval(timerRef.current)
    }
  }, [showSkeleton, isPaused, currentIndex])

  const handleSelect = (idx: number) => {
    setDirection(idx > currentIndex ? 'right' : 'left')
    setCurrentIndex(idx)
  }

  const slideVariants = {
    enter: (dir: 'left' | 'right') => ({
      x: dir === 'right' ? 40 : -40,
      opacity: 0,
      scale: 0.98,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.45,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
    exit: (dir: 'left' | 'right') => ({
      x: dir === 'right' ? -40 : 40,
      opacity: 0,
      scale: 0.98,
      transition: {
        duration: 0.35,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    }),
  }

  if (showSkeleton) {
    return (
      <div aria-busy="true" aria-label="Loading customer testimonials">
        <TestimonialsCarouselSkeleton className={className} />
      </div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className={`relative w-full max-w-4xl mx-auto ${className}`}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Brand Tabs / Segmented Switcher */}
      <div className="flex justify-center mb-5 overflow-x-auto pb-1 no-scrollbar">
        <div className="inline-flex items-center gap-1 p-1 rounded-xl bg-slate-100/90 border border-slate-200/80">
          {TESTIMONIALS.map((item, idx) => {
            const isActive = idx === currentIndex
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => handleSelect(idx)}
                className={`relative px-3 sm:px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-colors duration-200 cursor-pointer whitespace-nowrap ${
                  isActive
                    ? 'text-white'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="testimonial-active-tab"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    className="absolute inset-0 rounded-lg bg-blue-600 shadow-sm"
                  />
                )}
                <span className="relative z-10">{item.company}</span>
              </button>
            )
          })}
        </div>
      </div>

      {/* Compact Reviews Card Container */}
      <div
        data-cursor="glass"
        className="group relative rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:-translate-y-0.5 hover:border-blue-300/80 hover:shadow-lg hover:shadow-blue-900/5 transition-[transform,border-color,box-shadow] duration-200 overflow-hidden p-5 sm:p-6"
      >
        {/* Animated Autoplay Progress Bar */}
        <div className="absolute top-0 left-0 right-0 h-[3px] bg-slate-100">
          {!isPaused && (
            <motion.div
              key={`progress-${currentIndex}`}
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 6.5, ease: 'linear' }}
              className="h-full w-full bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 origin-left"
            />
          )}
          {isPaused && (
            <div className="h-full w-full bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600" />
          )}
        </div>

        {/* Ambient background watermark quote */}
        <Quote className="absolute right-4 bottom-4 size-16 sm:size-20 text-slate-100/70 pointer-events-none -rotate-12" />

        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={activeTestimonial.id}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 items-center"
          >
            {/* Left 8 cols: Quote, Stars, and Author */}
            <div className="lg:col-span-8 flex flex-col justify-between">
              <div>
                {/* 5-Star Rating & Unboxed Industry Metadata */}
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <div className="flex items-center gap-0.5 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="size-3.5 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-xs font-bold text-slate-800 font-mono tabular-nums">5.0</span>
                  <span className="text-slate-300">·</span>
                  <span className="text-xs font-medium text-slate-500">
                    {activeTestimonial.industry}
                  </span>
                </div>

                {/* Compact Testimonial Quote */}
                <p className="text-sm sm:text-base font-normal text-slate-800 leading-relaxed text-pretty">
                  “{activeTestimonial.quote}”
                </p>

                {/* Key Highlights (Clean Unboxed Inline Checklist) */}
                <div className="mt-3.5 flex flex-wrap gap-x-4 gap-y-1.5 text-[11.5px] font-medium text-slate-600">
                  {activeTestimonial.highlights.map((highlight, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center gap-1.5 text-slate-700"
                    >
                      <CheckCircle2 className="size-3 text-emerald-600 shrink-0" />
                      <span>{highlight}</span>
                    </span>
                  ))}
                </div>
              </div>

              {/* Author Info */}
              <div className="mt-4 pt-3.5 border-t border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="size-9 rounded-lg bg-gradient-to-br from-slate-900 to-slate-800 text-white font-bold text-xs flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform duration-200">
                    {activeTestimonial.avatar}
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5">
                      <h4 className="text-sm font-bold text-slate-900">
                        {activeTestimonial.name}
                      </h4>
                      {activeTestimonial.verified && (
                        <span title="Verified Customer">
                          <CheckCircle2 className="size-3.5 text-blue-600" />
                        </span>
                      )}
                    </div>
                    <p className="text-[11.5px] text-slate-500">
                      {activeTestimonial.role} · <span className="font-semibold text-slate-700">{activeTestimonial.company}</span>
                    </p>
                  </div>
                </div>

                <div className="hidden sm:flex items-center gap-1.5 text-[11px] text-slate-400 font-mono">
                  <Building2 className="size-3 text-slate-400" />
                  <span>Enterprise Client</span>
                </div>
              </div>
            </div>

            {/* Right 4 cols: Compact Impact Metric Card */}
            <div className="lg:col-span-4 flex flex-col justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                whileHover={{ y: -3, transition: { type: 'spring', stiffness: 360, damping: 24 } }}
                transition={{ duration: 0.4, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="p-4 sm:p-5 rounded-xl bg-gradient-to-br from-blue-50/70 via-slate-50 to-indigo-50/40 border border-blue-200/70 hover:border-blue-300 shadow-xs relative overflow-hidden transition-colors"
              >
                <div className="absolute top-2 right-2 size-12 rounded-full bg-blue-500/10 blur-xl pointer-events-none" />

                <span className="text-[11px] font-semibold text-blue-600 flex items-center gap-1.5">
                  <activeTestimonial.impactIcon className="size-3.5 text-blue-600" />
                  Verified Impact
                </span>

                <div className="mt-2">
                  <span className="text-3xl sm:text-4xl font-black text-slate-900 font-mono tabular-nums tracking-tight block">
                    {activeTestimonial.metric}
                  </span>
                  <span className="text-xs font-semibold text-slate-700 mt-0.5 block">
                    {activeTestimonial.metricLabel}
                  </span>
                </div>

                <p className="mt-3 text-[11px] text-slate-500 leading-relaxed pt-2.5 border-t border-slate-200/80">
                  90-day production CPaaS & CRM telemetry.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.div>
  )
}
