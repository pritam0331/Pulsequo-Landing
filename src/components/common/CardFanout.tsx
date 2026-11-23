import React, { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import {
  Truck,
  Bot,
  Radio,
  TrendingUp,
  Layers,
  Sparkles,
} from 'lucide-react'

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

interface CardFanoutProps {
  cards?: FanoutCard[]
  className?: string
  headline?: string
  subheadline?: string
  badgeText?: string
}

export function CardFanout({
  cards = DEFAULT_CARDS,
  className = '',
  headline = 'Interactive Omnichannel Engine',
  subheadline = 'Hover or tap any card to inspect how WhatsApp, AI agents, carrier SMS, and CRM pipelines synchronize in real time.',
  badgeText = 'SHIPROCKET-INSPIRED DYNAMIC FANOUT',
}: CardFanoutProps) {
  const [isFanned, setIsFanned] = useState(true)
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null)
  const [selectedIdx, setSelectedIdx] = useState<number>(0)

  // Fanout rotational and translational calculations based on index
  // 4 cards fanning out smoothly: angles -9, -3, 3, 9 degrees
  const getFanoutTransform = (index: number, total: number, isHovered: boolean) => {
    if (!isFanned) {
      return {
        x: 0,
        y: index * 6,
        rotate: 0,
        scale: isHovered ? 1.03 : 1 - (total - index - 1) * 0.02,
        zIndex: isHovered ? 30 : index + 1,
      }
    }

    const midpoint = (total - 1) / 2
    const offset = index - midpoint
    const rotation = offset * 5.5 // degrees
    const xOffset = offset * 68 // pixels spread
    const yOffset = Math.abs(offset) * 8 // subtle curved fan arch

    if (isHovered) {
      return {
        x: xOffset,
        y: -18,
        rotate: 0,
        scale: 1.05,
        zIndex: 40,
      }
    }

    return {
      x: xOffset,
      y: yOffset,
      rotate: rotation,
      scale: 1,
      zIndex: index + 1,
    }
  }

  const activeCard = cards[selectedIdx] || cards[0]

  return (
    <div className={`relative w-full max-w-6xl mx-auto ${className}`}>
      {/* Top Header & Interactive Fanout Controller */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8 text-center sm:text-left">
        <div>
          <div className="inline-flex items-center gap-2 mb-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/80 text-blue-700 text-xs font-semibold">
            <Sparkles className="size-3 text-blue-600" />
            <span>{badgeText}</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
            {headline}
          </h3>
          <p className="mt-1 text-xs sm:text-sm text-slate-600 max-w-xl">
            {subheadline}
          </p>
        </div>

        {/* Fanout Toggle Pill */}
        <div className="flex items-center gap-2 bg-slate-100 p-1.5 rounded-xl border border-slate-200/80 shadow-2xs">
          <button
            type="button"
            onClick={() => setIsFanned(true)}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
              isFanned
                ? 'bg-white text-blue-600 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Layers className="size-3.5" />
            <span>Fan Out Deck</span>
          </button>
          <button
            type="button"
            onClick={() => setIsFanned(false)}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
              !isFanned
                ? 'bg-white text-blue-600 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <span>Stacked</span>
          </button>
        </div>
      </div>

      {/* Main Fanout Stage Area */}
      <div className="relative min-h-[380px] sm:min-h-[420px] flex items-center justify-center py-6 overflow-visible select-none">
        {/* Glow backdrop behind cards */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[80%] h-[260px] bg-gradient-to-r from-blue-400/10 via-indigo-400/10 to-purple-400/10 blur-3xl rounded-full" />
        </div>

        {/* Fanning Cards Container */}
        <div className="relative w-full max-w-md h-[340px] flex items-center justify-center">
          {cards.map((card, idx) => {
            const isHovered = hoveredIdx === idx
            const isSelected = selectedIdx === idx
            const CardIcon = card.icon
            const transform = getFanoutTransform(idx, cards.length, isHovered)

            return (
              <motion.div
                key={card.id}
                animate={transform}
                transition={{
                  type: 'spring',
                  stiffness: 260,
                  damping: 22,
                }}
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
                onClick={() => setSelectedIdx(idx)}
                className={`absolute w-[300px] sm:w-[350px] rounded-2xl bg-white border cursor-pointer transition-shadow duration-300 overflow-hidden ${
                  isSelected
                    ? 'ring-2 ring-blue-600 border-blue-400 shadow-xl'
                    : 'border-slate-200/90 shadow-md hover:shadow-xl'
                } ${card.accentBorder}`}
                style={{
                  top: '10px',
                }}
              >
                {/* Header Gradient Top Stripe */}
                <div className={`h-1.5 w-full bg-gradient-to-r ${card.gradientHeader}`} />

                <div className="p-4 sm:p-5">
                  {/* Category & Status Badge */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-[10px] font-mono font-bold tracking-wider text-slate-500 uppercase truncate">
                      {card.category}
                    </span>
                    <span
                      className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded-full border shrink-0 ${card.badgeColor}`}
                    >
                      {card.badge}
                    </span>
                  </div>

                  {/* Icon & Title */}
                  <div className="flex items-start gap-3">
                    <div
                      className={`size-9 rounded-xl border flex items-center justify-center shrink-0 ${card.iconBg} ${card.iconColor}`}
                    >
                      <CardIcon className="size-4.5" />
                    </div>
                    <div className="min-w-0">
                      <h4 className="text-sm font-bold text-slate-900 leading-tight truncate">
                        {card.title}
                      </h4>
                      <p className="text-xs text-slate-500 truncate mt-0.5 font-medium">
                        {card.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Description Box */}
                  <div className="mt-3.5 p-3 rounded-xl bg-slate-50 border border-slate-100 text-xs text-slate-600 leading-relaxed font-sans">
                    {card.description}
                  </div>

                  {/* Footer Metric and Channel Tag */}
                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                    <div>
                      <span className="text-sm font-black font-mono text-slate-900 block leading-none">
                        {card.metric}
                      </span>
                      <span className="text-[10px] font-medium text-slate-400 block mt-0.5">
                        {card.metricLabel}
                      </span>
                    </div>

                    <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-700">
                      <span className={`size-1.5 rounded-full bg-current ${card.channelIconColor} animate-pulse`} />
                      <span className="text-[11px] font-mono truncate max-w-[120px]">
                        {card.channel}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>

      {/* Selected Card Live Inspection Bar */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeCard.id}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.3 }}
          className="mt-6 p-4 rounded-xl bg-slate-50/90 border border-slate-200/90 shadow-2xs flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <div className="flex items-center gap-3">
            <span className="size-2 rounded-full bg-emerald-500 animate-pulse shrink-0" />
            <div className="text-xs">
              <span className="font-bold text-slate-900">Active Inspect: </span>
              <span className="text-slate-600">{activeCard.title}</span>
              <span className="text-slate-400 mx-2">·</span>
              <span className="font-mono text-blue-600 font-semibold">{activeCard.channel}</span>
            </div>
          </div>

          <div className="flex items-center gap-4 text-xs font-mono text-slate-500">
            <span>Verified SLA: {activeCard.metric}</span>
            <span className="text-slate-300">·</span>
            <span>Status: {activeCard.badge}</span>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
