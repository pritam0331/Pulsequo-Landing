import { useState, useEffect, useCallback } from 'react'
import { motion } from 'motion/react'
import {
  Truck,
  Bot,
  Radio,
  TrendingUp,
  Headphones,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react'
import type { FanoutCard } from './CardFanout'
import { SplitReveal } from './SplitReveal'

const DEFAULT_3D_CARDS: FanoutCard[] = [
  {
    id: 'shipping-alert',
    category: 'Shipment & Delivery WhatsApp',
    title: 'Bluedart Express · AWB #BD-99201',
    subtitle: 'Order #8841 · Nike Air Max 90',
    badge: 'Delivered (420ms)',
    badgeColor: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    icon: Truck,
    iconColor: 'text-blue-600',
    iconBg: 'bg-blue-50 border-blue-200',
    description:
      'Instant WhatsApp broadcast sent upon carrier hub scan. Live tracking link clicked 3 times with zero delivery friction.',
    metric: '99.98%',
    metricLabel: 'Delivery Receipt Rate',
    channel: 'WhatsApp Business API',
    channelIconColor: 'text-emerald-500',
    timestamp: 'Just now',
    accentBorder: 'hover:border-blue-500',
    gradientHeader: 'from-blue-600 to-indigo-600',
  },
  {
    id: 'ai-lead',
    category: 'Autonomous Conversational AI',
    title: 'Inbound Enterprise Lead Qualified',
    subtitle: 'Apex Retail · VP Technology',
    badge: '89% Autonomous',
    badgeColor: 'bg-purple-50 text-purple-700 border-purple-200',
    icon: Bot,
    iconColor: 'text-purple-600',
    iconBg: 'bg-purple-50 border-purple-200',
    description:
      'AI Agent extracted budget (₹2.4L/mo) and intent for WhatsApp Cloud API. Automatically reserved calendar demo slot via MCP.',
    metric: '< 1.4s',
    metricLabel: 'Response Latency',
    channel: 'Gemini 2.5 Flash + MCP',
    channelIconColor: 'text-purple-500',
    timestamp: '2m ago',
    accentBorder: 'hover:border-purple-500',
    gradientHeader: 'from-purple-600 to-indigo-600',
  },
  {
    id: 'smpp-otp',
    category: 'Direct Carrier Telemetry',
    title: 'Carrier Route 1 · Transactional OTP',
    subtitle: 'FinEdge Pay · ₹12,500 Transfer',
    badge: 'TRAI DLT Verified',
    badgeColor: 'bg-indigo-50 text-indigo-700 border-indigo-200',
    icon: Radio,
    iconColor: 'text-indigo-600',
    iconBg: 'bg-indigo-50 border-indigo-200',
    description:
      'High-throughput SMPP direct pipe with Airtel & Jio gateways. Sub-second delivery receipts with zero dropouts.',
    metric: '250 msg/s',
    metricLabel: 'Throughput Speed',
    channel: 'Direct SMPP v3.4',
    channelIconColor: 'text-blue-500',
    timestamp: '5m ago',
    accentBorder: 'hover:border-indigo-500',
    gradientHeader: 'from-indigo-600 to-blue-600',
  },
  {
    id: 'sales-deal',
    category: 'Conversational Sales CRM',
    title: 'Apex Retail · Omnichannel Rollout',
    subtitle: 'Deal Value: ₹18,40,000',
    badge: 'Closing Stage',
    badgeColor: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    icon: TrendingUp,
    iconColor: 'text-emerald-600',
    iconBg: 'bg-emerald-50 border-emerald-200',
    description:
      'Generated 1-click WhatsApp quote directly in conversation. Customer accepted via digital signature and synced to CRM.',
    metric: '+48%',
    metricLabel: 'Conversion Uplift',
    channel: 'Sales CRM & WhatsApp',
    channelIconColor: 'text-emerald-500',
    timestamp: '12m ago',
    accentBorder: 'hover:border-emerald-500',
    gradientHeader: 'from-emerald-600 to-teal-600',
  },
  {
    id: 'support-sla',
    category: 'Omnichannel Support SLA',
    title: 'Priority Queue · Instant Escalation',
    subtitle: 'NovaHealth · Ticket #4920',
    badge: 'SLA 03m Left',
    badgeColor: 'bg-amber-50 text-amber-700 border-amber-200',
    icon: Headphones,
    iconColor: 'text-amber-600',
    iconBg: 'bg-amber-50 border-amber-200',
    description:
      'Merged WhatsApp, email, and live chat into a single continuous thread with skill-based routing and automated Tier-1 resolution.',
    metric: '4.9 / 5',
    metricLabel: 'Verified CSAT Score',
    channel: 'Unified Support Desk',
    channelIconColor: 'text-amber-500',
    timestamp: '16m ago',
    accentBorder: 'hover:border-amber-500',
    gradientHeader: 'from-amber-500 to-rose-500',
  },
]

interface Card3DCarouselProps {
  cards?: FanoutCard[]
  headline?: string
  subheadline?: string
  className?: string
}

export function Card3DCarousel({
  cards = DEFAULT_3D_CARDS,
  headline = 'Delivery Tracking, AI Bots & Sales CRM in One Synced Stack',
  subheadline = 'Experience the power of unified omnichannel architecture. Browse how WhatsApp alerts, autonomous bots, and carrier OTPs dispatch in real time.',
  className = '',
}: Card3DCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const total = cards.length

  const goNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % total)
  }, [total])

  const goPrev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + total) % total)
  }, [total])

  useEffect(() => {
    if (isPaused) return
    const timer = setInterval(goNext, 5000)
    return () => clearInterval(timer)
  }, [isPaused, goNext])

  const getRelativeOffset = (index: number) => {
    let diff = index - activeIndex
    if (diff > total / 2) diff -= total
    if (diff < -total / 2) diff += total
    return diff
  }

  return (
    <div
      className={`relative w-full mx-auto ${className}`}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onKeyDown={(e) => {
        if (e.key === 'ArrowLeft') goPrev()
        if (e.key === 'ArrowRight') goNext()
      }}
      tabIndex={0}
      role="region"
      aria-roledescription="carousel"
      aria-label={headline}
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        className="mb-8 sm:mb-10 text-center max-w-3xl mx-auto"
      >
        <SplitReveal
          as="h2"
          text={headline}
          trigger="inView"
          delay={0.04}
          stagger={0.038}
          duration={0.55}
          className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight leading-tight text-balance"
        />
        <p className="mt-2.5 text-sm sm:text-base text-slate-600 leading-relaxed text-pretty">
          {subheadline}
        </p>
      </motion.div>

      {/* 3D Perspective Stage with Left & Right Carets */}
      <div className="relative flex items-center justify-center">
        {/* Left Caret Button */}
        <motion.button
          type="button"
          onClick={goPrev}
          aria-label="Previous card"
          whileHover={{ scale: 1.08, x: -2 }}
          whileTap={{ scale: 0.92 }}
          transition={{ type: 'spring', stiffness: 400, damping: 22 }}
          className="absolute left-1 sm:left-4 lg:left-8 z-40 size-10 sm:size-12 rounded-xl bg-white/95 hover:bg-blue-600 text-slate-700 hover:text-white border border-slate-200/90 hover:border-blue-600 shadow-lg flex items-center justify-center transition-colors cursor-pointer backdrop-blur-sm"
        >
          <ChevronLeft className="size-5 sm:size-6" />
        </motion.button>

        {/* 3D Viewport with Horizontal Swipe Support */}
        <motion.div
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.12}
          onDragEnd={(_, info) => {
            if (info.offset.x < -45) goNext()
            else if (info.offset.x > 45) goPrev()
          }}
          className="relative w-full h-[340px] sm:h-[370px] flex items-center justify-center overflow-hidden select-none cursor-grab active:cursor-grabbing"
          style={{ perspective: '1200px' }}
        >
          {/* Subtle animated ambient radial glow */}
          <motion.div
            animate={{ scale: [1, 1.08, 1], opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
          >
            <div className="w-[65%] h-[220px] bg-gradient-to-r from-blue-400/14 via-purple-400/14 to-indigo-400/14 blur-3xl rounded-full" />
          </motion.div>

          <div
            className="relative w-full h-full flex items-center justify-center"
            style={{ transformStyle: 'preserve-3d' }}
          >
            {cards.map((card, idx) => {
              const offset = getRelativeOffset(idx)
              const absOffset = Math.abs(offset)
              const isCenter = offset === 0
              const isVisible = absOffset <= 2
              const CardIcon = card.icon

              const xShift = offset * 265
              const zShift = -absOffset * 130
              const rotateY = offset * -25
              const scale = isCenter ? 1 : absOffset === 1 ? 0.88 : 0.74
              const opacity = !isVisible ? 0 : isCenter ? 1 : absOffset === 1 ? 0.85 : 0.42

              return (
                <motion.div
                  key={card.id}
                  animate={{
                    x: xShift,
                    z: zShift,
                    rotateY,
                    scale,
                    opacity,
                    y: isCenter ? 0 : 6,
                  }}
                  whileHover={
                    isCenter
                      ? { y: -6, scale: 1.02 }
                      : isVisible
                        ? { y: 0, scale: scale + 0.03 }
                        : undefined
                  }
                  transition={{
                    type: 'spring',
                    stiffness: 240,
                    damping: 25,
                  }}
                  onClick={() => {
                    if (!isCenter) setActiveIndex(idx)
                  }}
                  style={{
                    zIndex: 30 - absOffset * 10,
                    transformStyle: 'preserve-3d',
                    pointerEvents: isVisible ? 'auto' : 'none',
                  }}
                  data-cursor="glass"
                  className={`group absolute w-[280px] sm:w-[360px] lg:w-[410px] rounded-2xl bg-white/95 backdrop-blur-xs border overflow-hidden transition-all duration-300 ${
                    isCenter
                      ? 'border-blue-400/90 ring-2 ring-blue-600/15 shadow-2xl shadow-blue-900/12 cursor-default'
                      : 'border-slate-200/90 shadow-lg hover:shadow-xl hover:border-blue-300/80 cursor-pointer'
                  }`}
                >
                  {/* Top Gradient Accent Bar */}
                  <div className={`h-1.5 w-full bg-gradient-to-r ${card.gradientHeader}`} />

                  <div className="p-5 sm:p-6">
                    {/* Category & Status */}
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="text-[11px] font-medium text-slate-500 truncate">
                        {card.category}
                      </span>
                      <span
                        className={`text-[10px] font-mono font-semibold px-2 py-0.5 rounded-sm border shrink-0 ${card.badgeColor}`}
                      >
                        {card.badge}
                      </span>
                    </div>

                    {/* Icon & Title */}
                    <div className="flex items-start gap-3">
                      <div
                        className={`size-10 rounded-xl border flex items-center justify-center shrink-0 ${card.iconBg} ${card.iconColor}`}
                      >
                        <CardIcon className="size-5" />
                      </div>
                      <div className="min-w-0">
                        <h4 className="text-sm sm:text-base font-bold text-slate-900 leading-tight truncate">
                          {card.title}
                        </h4>
                        <p className="text-xs text-slate-500 truncate mt-0.5 font-medium">
                          {card.subtitle}
                        </p>
                      </div>
                    </div>

                    {/* Description */}
                    <div className="mt-4 p-3 rounded-xl bg-slate-50/90 border border-slate-100 text-xs sm:text-[13px] text-slate-600 leading-relaxed line-clamp-2">
                      {card.description}
                    </div>

                    {/* Footer Metric & Channel */}
                    <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between gap-3">
                      <div>
                        <span className="text-base font-black font-mono tabular-nums text-slate-900 block leading-none">
                          {card.metric}
                        </span>
                        <span className="text-[11px] font-medium text-slate-400 block mt-1">
                          {card.metricLabel}
                        </span>
                      </div>

                      <div className="flex items-center gap-1.5 text-xs font-medium text-slate-600">
                        <span className={`size-1.5 rounded-full bg-current ${card.channelIconColor}`} />
                        <span className="text-[11px] font-mono truncate max-w-[148px]">
                          {card.channel}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* Right Caret Button */}
        <motion.button
          type="button"
          onClick={goNext}
          aria-label="Next card"
          whileHover={{ scale: 1.08, x: 2 }}
          whileTap={{ scale: 0.92 }}
          transition={{ type: 'spring', stiffness: 400, damping: 22 }}
          className="absolute right-1 sm:right-4 lg:right-8 z-40 size-10 sm:size-12 rounded-xl bg-white/95 hover:bg-blue-600 text-slate-700 hover:text-white border border-slate-200/90 hover:border-blue-600 shadow-lg flex items-center justify-center transition-colors cursor-pointer backdrop-blur-sm"
        >
          <ChevronRight className="size-5 sm:size-6" />
        </motion.button>
      </div>

      {/* Minimal Indicator Controls */}
      <div className="mt-4 flex items-center justify-center gap-2">
        {cards.map((card, idx) => (
          <button
            key={card.id}
            type="button"
            onClick={() => setActiveIndex(idx)}
            aria-label={`View ${card.title}`}
            className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
              idx === activeIndex
                ? 'w-8 bg-blue-600'
                : 'w-2 bg-slate-300 hover:bg-slate-400'
            }`}
          />
        ))}
      </div>
    </div>
  )
}
