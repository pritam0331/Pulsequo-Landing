import React from 'react'
import { motion } from 'motion/react'
import { ShieldCheck } from 'lucide-react'

interface Brand {
  name: string
  category: string
  metric: string
  logo: React.ReactNode
}

const BRANDS: Brand[] = [
  {
    name: 'Apex Retail',
    category: 'Omnichannel Retail',
    metric: '48% Higher Sales',
    logo: (
      <svg className="size-6 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 2 22 22 22" />
        <line x1="12" y1="12" x2="12" y2="18" />
      </svg>
    ),
  },
  {
    name: 'FinEdge Pay',
    category: 'Fintech & Banking',
    metric: '99.98% DLR SLA',
    logo: (
      <svg className="size-6 text-indigo-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="14" x="2" y="5" rx="2" />
        <line x1="2" x2="22" y1="10" y2="10" />
      </svg>
    ),
  },
  {
    name: 'NovaHealth',
    category: 'Healthcare Network',
    metric: '78% Auto Deflected',
    logo: (
      <svg className="size-6 text-emerald-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
      </svg>
    ),
  },
  {
    name: 'ZeptoLogix',
    category: 'Quick Commerce',
    metric: '10x Faster Alerts',
    logo: (
      <svg className="size-6 text-amber-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
  },
  {
    name: 'UrbanCart',
    category: 'Global D2C Brand',
    metric: '3.4M Monthly Chats',
    logo: (
      <svg className="size-6 text-purple-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
        <path d="M3 6h18" />
        <path d="M16 10a4 4 0 0 1-8 0" />
      </svg>
    ),
  },
  {
    name: 'HyperCloud',
    category: 'Cloud Infrastructure',
    metric: 'Sub-120ms Latency',
    logo: (
      <svg className="size-6 text-cyan-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
      </svg>
    ),
  },
  {
    name: 'RazorLoop',
    category: 'SaaS Subscriptions',
    metric: '99.9% Uptime',
    logo: (
      <svg className="size-6 text-blue-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="m10 15 5-3-5-3v6Z" />
      </svg>
    ),
  },
  {
    name: 'TitanPay',
    category: 'Cross-Border Payments',
    metric: 'SOC2 & TRAI Ready',
    logo: (
      <svg className="size-6 text-emerald-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
      </svg>
    ),
  },
  {
    name: 'OmniPulse',
    category: 'Customer Intelligence',
    metric: 'Real-time Telemetry',
    logo: (
      <svg className="size-6 text-violet-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
  },
  {
    name: 'CloudScale',
    category: 'Enterprise Logistics',
    metric: '45M+ Transactions',
    logo: (
      <svg className="size-6 text-teal-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      </svg>
    ),
  },
]

export function BrandCarousel({ className = '' }: { className?: string }) {
  // Duplicate for continuous seamless marquee scroll
  const marqueeItems = [...BRANDS, ...BRANDS]

  return (
    <section className={`relative py-5 sm:py-6 bg-white overflow-hidden select-none ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left"
        >
          <div className="flex items-center gap-2.5">
            <span className="h-[2px] w-5 rounded-full bg-blue-600 shrink-0" />
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500">
              Trusted by 500+ High-Growth Enterprises & Leading Brands
            </span>
          </div>

          <div className="flex items-center gap-3 text-[11px] font-mono text-slate-500">
            <span className="inline-flex items-center gap-1.5 text-emerald-700 font-semibold">
              <ShieldCheck className="size-3.5 text-emerald-600" />
              Meta Official Partner
            </span>
            <span className="hidden md:inline text-slate-300" aria-hidden="true">·</span>
            <span className="hidden md:inline-flex items-center text-blue-700 font-semibold">
              TRAI DLT Verified
            </span>
          </div>
        </motion.div>
      </div>

      {/* Infinite Carousel Container with Smooth Alpha-Fade Edge Masks */}
      <div
        className="relative w-full overflow-hidden"
        style={{
          maskImage: 'linear-gradient(to right, transparent 0%, black 7%, black 93%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 7%, black 93%, transparent 100%)',
        }}
      >
        <div className="flex animate-marquee hover:[animation-play-state:paused] whitespace-nowrap py-2">
          {marqueeItems.map((brand, idx) => (
            <div
              key={`${brand.name}-${idx}`}
              data-cursor="glass"
              className="inline-flex items-center gap-3.5 mx-3 px-4 py-2.5 rounded-xl bg-white border border-slate-200/80 shadow-2xs hover:-translate-y-0.5 hover:border-blue-400/80 hover:shadow-md hover:shadow-blue-600/5 transition-[transform,border-color,box-shadow] duration-200 group cursor-default"
            >
              <div className="size-8 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center group-hover:scale-110 group-hover:-rotate-3 group-hover:bg-blue-50/50 transition-all duration-200">
                {brand.logo}
              </div>
              <div className="text-left">
                <div className="flex items-center gap-2">
                  <span className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                    {brand.name}
                  </span>
                  <span className="text-slate-300 text-[10px]" aria-hidden="true">·</span>
                  <span className="text-[10.5px] font-mono font-bold text-emerald-600 tabular-nums">
                    {brand.metric}
                  </span>
                </div>
                <span className="text-[11px] text-slate-500 font-medium block">
                  {brand.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
