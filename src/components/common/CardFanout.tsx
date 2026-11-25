import React, { useState, useEffect, useCallback } from 'react'
import { motion } from 'motion/react'
import {
  Truck,
  Bot,
  Radio,
  TrendingUp,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react'
import { SplitReveal } from './SplitReveal'

export interface FanoutCard {
  id: string
  category: string
  title: string
  subtitle: string
  badge: string
  badgeColor: string
  icon: React.ElementType
  iconColor: string
  iconBg: string
  description: string
  metric: string
  metricLabel: string
  channel: string
  channelIconColor: string
  timestamp: string
  accentBorder: string
  gradientHeader: string
}

const DEFAULT_CARDS: FanoutCard[] = [
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
    description: 'Instant WhatsApp broadcast sent upon carrier hub scan. Live tracking link clicked 3 times with zero delivery friction.',
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
    description: 'AI Agent extracted budget (₹2.4L/mo) and intent for WhatsApp Cloud API. Automatically reserved calendar demo slot via MCP.',
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
    description: 'High-throughput SMPP direct pipe with Airtel & Jio gateways. Sub-second delivery receipts with zero dropouts.',
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
    description: 'Generated 1-click WhatsApp quote directly in conversation. Customer accepted via digital signature and synced to CRM.',
    metric: '+48%',
    metricLabel: 'Conversion Uplift',
    channel: 'Sales CRM & WhatsApp',
    channelIconColor: 'text-emerald-500',
    timestamp: '12m ago',
    accentBorder: 'hover:border-emerald-500',
    gradientHeader: 'from-emerald-600 to-teal-600',
  },
]

const AUTO_ADVANCE_MS = 3600

interface CardFanoutProps {
  cards?: FanoutCard[]
  className?: string
  headline?: string
  subheadline?: string
  hideHeader?: boolean
  compact?: boolean
}

/**
 * Queue Auto Carousel (replaces legacy fan-out deck)
 * Cycles cards automatically through a depth-layered vertical queue.
 * - Front card displays cleanly with zero rotated text overlap
 * - Upcoming queued cards peek smoothly behind with stepped depth & scale
 * - Auto-advances every 3.6s, pauses on hover, supports click-to-advance & prev/next controls
 */
export function CardFanout({
  cards = DEFAULT_CARDS,
  className = '',
  headline = 'Interactive Omnichannel Engine',
  subheadline = 'Watch live WhatsApp broadcasts, AI agents, carrier SMS, and CRM pipelines cycle in real time.',
  hideHeader = false,
  compact = false,
}: CardFanoutProps) {
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
    if (isPaused || total <= 1) return
    const timer = window.setInterval(goNext, AUTO_ADVANCE_MS)
    return () => window.clearInterval(timer)
  }, [isPaused, goNext, total])

  const nextCard = cards[(activeIndex + 1) % total]

  return (
    <div
      className={`relative ${compact ? 'w-full max-w-lg mx-auto' : 'w-full max-w-xl mx-auto'} ${className}`}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      role="region"
      aria-roledescription="carousel"
      aria-label={headline}
    >
      {/* Optional Header */}
      {!hideHeader && (
        <div className="mb-8 text-center">
          <SplitReveal
            as="h3"
            text={headline}
            trigger="inView"
            delay={0.04}
            stagger={0.04}
            duration={0.55}
            className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight text-balance"
          />
          <p className="mt-1.5 text-xs sm:text-sm text-slate-600 max-w-xl mx-auto text-pretty">
            {subheadline}
          </p>
        </div>
      )}

      {/* Queue Auto Carousel Stage */}
      <div className="relative pt-10 sm:pt-12 pb-2 select-none">
        {/* Ambient soft glow backdrop (zero-blur radial gradient for smooth scrolling) */}
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-2 bottom-2 rounded-full pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse 72% 62% at 50% 54%, rgba(37, 99, 235, 0.13) 0%, rgba(99, 102, 241, 0.08) 45%, transparent 78%)',
          }}
        />

        {/* Depth-Stacked Queue Deck (taller stacked cards) */}
        <div className={`relative w-full ${compact ? 'h-[304px] sm:h-[348px]' : 'h-[316px] sm:h-[364px]'}`}>
          {cards.map((card, idx) => {
            // Queue position: 0 = active front card, 1 = next in queue, 2 = 2nd in queue, etc.
            const queuePos = (idx - activeIndex + total) % total
            const isFront = queuePos === 0
            const visibleDepth = Math.min(queuePos, 3)
            const isHidden = queuePos > 3

            const CardIcon = card.icon

            return (
              <motion.div
                key={card.id}
                layout={false}
                animate={{
                  y: isHidden ? -56 : -visibleDepth * 18,
                  scale: isHidden ? 0.84 : 1 - visibleDepth * 0.048,
                  opacity: isHidden ? 0 : isFront ? 1 : Math.max(0.3, 0.88 - visibleDepth * 0.22),
                }}
                whileHover={
                  isFront
                    ? { y: -4, transition: { type: 'spring', stiffness: 360, damping: 24 } }
                    : !isHidden
                      ? { y: -visibleDepth * 18 - 5, transition: { type: 'spring', stiffness: 360, damping: 24 } }
                      : undefined
                }
                transition={{
                  type: 'spring',
                  stiffness: 260,
                  damping: 26,
                  mass: 0.9,
                }}
                onClick={() => {
                  if (isFront) {
                    goNext()
                  } else {
                    setActiveIndex(idx)
                  }
                }}
                data-cursor="glass"
                style={{
                  zIndex: 40 - queuePos * 10,
                  pointerEvents: isHidden ? 'none' : 'auto',
                  transformOrigin: 'top center',
                }}
                className={`group absolute inset-x-0 bottom-0 flex flex-col justify-between ${
                  compact ? 'min-h-[250px] sm:min-h-[292px]' : 'min-h-[262px] sm:min-h-[308px]'
                } rounded-2xl bg-white border overflow-hidden transition-shadow duration-300 cursor-pointer ${
                  isFront
                    ? 'border-blue-300/90 ring-1 ring-blue-600/12 shadow-2xl shadow-blue-950/10'
                    : 'border-slate-200/90 shadow-md hover:border-blue-300/70'
                }`}
              >
                {/* Top Gradient Accent Bar + Live Auto-Cycle Progress */}
                <div className="relative h-1.5 w-full bg-slate-100 overflow-hidden shrink-0">
                  <div className={`absolute inset-0 bg-gradient-to-r ${card.gradientHeader} ${isFront ? 'opacity-25' : 'opacity-100'}`} />
                  {isFront && !isPaused && (
                    <motion.div
                      key={`queue-progress-${activeIndex}`}
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: AUTO_ADVANCE_MS / 1000, ease: 'linear' }}
                      className={`absolute inset-0 bg-gradient-to-r ${card.gradientHeader} origin-left`}
                    />
                  )}
                  {isFront && isPaused && (
                    <div className={`absolute inset-0 bg-gradient-to-r ${card.gradientHeader}`} />
                  )}
                </div>

                <div className={`flex flex-col flex-1 justify-between ${compact ? 'p-4 sm:p-6' : 'p-5 sm:p-6'}`}>
                  <div>
                    {/* Category & Status Tag */}
                    <div className="flex items-center justify-between gap-2 mb-3.5">
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
                        className="size-9 sm:size-10 rounded-xl border flex items-center justify-center shrink-0 transition-transform duration-200 group-hover:scale-110 group-hover:-rotate-3 ${card.iconBg} ${card.iconColor}"
                        style={{ display: 'none' }}
                      />
                      <div
                        className={`size-9 sm:size-10 rounded-xl border flex items-center justify-center shrink-0 transition-transform duration-200 group-hover:scale-110 group-hover:-rotate-3 ${card.iconBg} ${card.iconColor}`}
                      >
                        <CardIcon className="size-4.5 sm:size-5" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <h4 className="text-sm sm:text-base font-bold text-slate-900 leading-tight truncate">
                          {card.title}
                        </h4>
                        <p className="text-xs text-slate-500 truncate mt-0.5 font-medium">
                          {card.subtitle}
                        </p>
                      </div>
                    </div>

                    {/* Description */}
                    <div className="mt-3.5 sm:mt-4 p-3 sm:p-3.5 rounded-xl bg-slate-50/90 border border-slate-100 text-xs sm:text-[13px] text-slate-600 leading-relaxed line-clamp-3">
                      {card.description}
                    </div>
                  </div>

                  {/* Footer Metric and Channel */}
                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
                    <div>
                      <span className="text-base sm:text-lg font-black font-mono tabular-nums text-slate-900 block leading-none">
                        {card.metric}
                      </span>
                      <span className="text-[10.5px] font-medium text-slate-500 block mt-1">
                        {card.metricLabel}
                      </span>
                    </div>

                    <div className="flex items-center gap-1.5 text-xs font-medium text-slate-600">
                      <span className={`size-1.5 rounded-full bg-current ${card.channelIconColor}`} />
                      <span className="text-[11px] font-mono truncate max-w-[140px]">
                        {card.channel}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Compact Queue Controls & Up-Next Bar */}
        <div className="mt-4 flex items-center justify-between gap-3 px-1">
          <div className="flex items-center gap-2 min-w-0">
            <span className="text-[11px] font-mono tabular-nums font-bold text-slate-400 shrink-0">
              0{activeIndex + 1}/0{total}
            </span>
            <span className="text-slate-300 text-xs" aria-hidden="true">·</span>
            <span className="text-[11px] text-slate-500 truncate">
              Next: <span className="font-semibold text-slate-700">{nextCard?.category}</span>
            </span>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <div className="flex items-center gap-1">
              {cards.map((c, idx) => (
                <button
                  key={c.id}
                  type="button"
                  onClick={() => setActiveIndex(idx)}
                  aria-label={`View ${c.title}`}
                  className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                    idx === activeIndex
                      ? 'w-5 bg-blue-600'
                      : 'w-1.5 bg-slate-300 hover:bg-slate-400'
                  }`}
                />
              ))}
            </div>

            <div className="flex items-center gap-1 ml-1">
              <motion.button
                type="button"
                onClick={goPrev}
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.92 }}
                aria-label="Previous card in queue"
                className="size-7 rounded-lg border border-slate-200/90 bg-white hover:bg-blue-50 hover:border-blue-300 text-slate-600 hover:text-blue-600 flex items-center justify-center shadow-2xs transition-colors cursor-pointer"
              >
                <ChevronLeft className="size-3.5" />
              </motion.button>
              <motion.button
                type="button"
                onClick={goNext}
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.92 }}
                aria-label="Next card in queue"
                className="size-7 rounded-lg border border-slate-200/90 bg-white hover:bg-blue-50 hover:border-blue-300 text-slate-600 hover:text-blue-600 flex items-center justify-center shadow-2xs transition-colors cursor-pointer"
              >
                <ChevronRight className="size-3.5" />
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
