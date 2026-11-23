import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import {
  ChevronLeft,
  ChevronRight,
  Star,
  Quote,
  CheckCircle2,
  Building2,
  TrendingUp,
  Clock,
  Sparkles,
} from 'lucide-react'

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

export function TestimonialsCarousel({ className = '' }: { className?: string }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState<'left' | 'right'>('right')
  const [isPaused, setIsPaused] = useState(false)
  const timerRef = useRef<number | null>(null)

  const activeTestimonial = TESTIMONIALS[currentIndex]

  // Autoplay functionality with 6.5s interval
  useEffect(() => {
    if (isPaused) return

    timerRef.current = window.setInterval(() => {
      setDirection('right')
      setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length)
    }, 6500)

    return () => {
      if (timerRef.current) clearInterval(timerRef.current)
    }
  }, [isPaused, currentIndex])

  const handleNext = () => {
    setDirection('right')
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length)
  }

  const handlePrev = () => {
    setDirection('left')
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)
  }

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

  return (
    <div
      className={`relative w-full max-w-5xl mx-auto ${className}`}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Brand Tabs / Quick Selectors */}
      <div className="flex items-center justify-center gap-1.5 sm:gap-2 mb-6 sm:mb-8 overflow-x-auto pb-2 scrollbar-none">
        {TESTIMONIALS.map((item, idx) => {
          const isActive = idx === currentIndex
          return (
            <button
              key={item.id}
              onClick={() => handleSelect(idx)}
              className={`px-3 sm:px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 cursor-pointer whitespace-nowrap flex items-center gap-1.5 border ${
                isActive
                  ? 'bg-blue-600 text-white border-blue-600 shadow-xs scale-105'
                  : 'bg-white text-slate-600 border-slate-200 hover:border-slate-300 hover:bg-slate-50'
              }`}
            >
              <span>{item.company}</span>
              {isActive && (
                <span className="size-1.5 rounded-full bg-white animate-pulse" />
              )}
            </button>
          )
        })}
      </div>

      {/* Main Carousel Card Container */}
      <div className="relative rounded-2xl bg-white border border-slate-200/90 shadow-sm overflow-hidden p-6 sm:p-8 md:p-10">
        {/* Subtle top gradient accent */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600" />

        {/* Ambient background watermark quote */}
        <Quote className="absolute right-6 bottom-6 size-24 sm:size-32 text-slate-100/60 pointer-events-none -rotate-12" />

        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={activeTestimonial.id}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
          >
            {/* Left 7 cols: Quote, Stars, and Author */}
            <div className="lg:col-span-7 flex flex-col justify-between">
              <div>
                {/* 5-Star Rating & Industry Badge */}
                <div className="flex flex-wrap items-center gap-2.5 mb-4">
                  <div className="flex items-center gap-0.5 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="size-4 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-xs font-bold text-slate-700 font-mono">5.0</span>
                  <span className="text-slate-300">•</span>
                  <span className="text-xs font-medium text-slate-500 bg-slate-100 px-2.5 py-0.5 rounded-full">
                    {activeTestimonial.industry}
                  </span>
                </div>

                {/* Testimonial Quote */}
                <p className="text-base sm:text-lg md:text-xl font-normal text-slate-800 leading-relaxed italic">
                  “{activeTestimonial.quote}”
                </p>

                {/* Key Bullet Highlights */}
                <div className="mt-5 flex flex-wrap gap-2 text-xs font-medium text-slate-600">
                  {activeTestimonial.highlights.map((highlight, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-50 border border-slate-200/80 text-slate-700"
                    >
                      <CheckCircle2 className="size-3.5 text-emerald-600" />
                      {highlight}
                    </span>
                  ))}
                </div>
              </div>

              {/* Author Info */}
              <div className="mt-6 pt-5 border-t border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="size-11 rounded-xl bg-gradient-to-br from-slate-900 to-slate-800 text-white font-bold text-sm flex items-center justify-center shadow-xs">
                    {activeTestimonial.avatar}
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5">
                      <h4 className="text-sm sm:text-base font-bold text-slate-900">
                        {activeTestimonial.name}
                      </h4>
                      {activeTestimonial.verified && (
                        <span title="Verified Customer">
                          <CheckCircle2 className="size-4 text-blue-600" />
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-slate-500">
                      {activeTestimonial.role} · <span className="font-semibold text-slate-700">{activeTestimonial.company}</span>
                    </p>
                  </div>
                </div>

                <div className="hidden sm:flex items-center gap-1.5 text-xs text-slate-400 font-mono">
                  <Building2 className="size-3.5 text-slate-400" />
                  <span>Enterprise Client</span>
                </div>
              </div>
            </div>

            {/* Right 5 cols: Prominent Impact Metric Card */}
            <div className="lg:col-span-5 flex flex-col justify-center">
              <div className="p-6 sm:p-7 rounded-xl bg-gradient-to-br from-blue-50/70 via-slate-50 to-indigo-50/40 border border-blue-200/70 shadow-xs relative overflow-hidden">
                <div className="absolute top-3 right-3 size-16 rounded-full bg-blue-500/10 blur-xl pointer-events-none" />

                <span className="text-xs font-mono font-bold tracking-wider text-blue-600 uppercase flex items-center gap-1.5">
                  <activeTestimonial.impactIcon className="size-4 text-blue-600" />
                  Verified Business Impact
                </span>

                <div className="mt-3">
                  <span className="text-4xl sm:text-5xl font-black text-slate-900 font-mono tracking-tight block">
                    {activeTestimonial.metric}
                  </span>
                  <span className="text-sm font-semibold text-slate-700 mt-1 block">
                    {activeTestimonial.metricLabel}
                  </span>
                </div>

                <p className="mt-4 text-xs text-slate-500 leading-relaxed pt-3 border-t border-slate-200/80">
                  Measured across 90 days of production customer traffic using official PulseQuo CPaaS and CRM telemetry.
                </p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Controls Bar */}
        <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
          {/* Dot Indicators */}
          <div className="flex items-center gap-1.5">
            {TESTIMONIALS.map((_, idx) => (
              <button
                key={idx}
                onClick={() => handleSelect(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`transition-all duration-200 cursor-pointer ${
                  idx === currentIndex
                    ? 'w-6 h-2 bg-blue-600 rounded-full'
                    : 'w-2 h-2 bg-slate-300 hover:bg-slate-400 rounded-full'
                }`}
              />
            ))}
          </div>

          {/* Slide Counter & Buttons */}
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono text-slate-400">
              0{currentIndex + 1} / 0{TESTIMONIALS.length}
            </span>

            <div className="flex items-center gap-1.5">
              <button
                onClick={handlePrev}
                aria-label="Previous testimonial"
                className="size-8 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 flex items-center justify-center text-slate-600 hover:text-slate-900 shadow-2xs transition-colors cursor-pointer active:scale-95"
              >
                <ChevronLeft className="size-4" />
              </button>
              <button
                onClick={handleNext}
                aria-label="Next testimonial"
                className="size-8 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 flex items-center justify-center text-slate-600 hover:text-slate-900 shadow-2xs transition-colors cursor-pointer active:scale-95"
              >
                <ChevronRight className="size-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
