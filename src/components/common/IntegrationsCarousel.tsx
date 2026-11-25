import { useState } from 'react'
import { Link } from 'react-router'
import { motion, AnimatePresence } from 'motion/react'
import {
  MessageSquare,
  Radio,
  Cloud,
  Target,
  Bot,
  KeyRound,
  Hash,
  FileSpreadsheet,
  ShoppingBag,
  Code2,
  Headphones,
  CreditCard,
  Database,
  Zap,
} from 'lucide-react'

interface IntegrationItem {
  name: string
  tag: string
  category: 'cpaas' | 'crm' | 'ai' | 'ecommerce'
  icon: typeof MessageSquare
  accent: 'blue' | 'purple' | 'emerald' | 'amber'
  link: string
}

const ALL_INTEGRATIONS: IntegrationItem[] = [
  // Track 1 Items
  {
    name: 'WhatsApp Business API',
    tag: 'Meta Official Cloud Partner',
    category: 'cpaas',
    icon: MessageSquare,
    accent: 'emerald',
    link: '/products/communication-cloud',
  },
  {
    name: 'Carrier SMS SMPP',
    tag: 'TRAI DLT Engine',
    category: 'cpaas',
    icon: Radio,
    accent: 'blue',
    link: '/products/communication-cloud',
  },
  {
    name: 'Salesforce CRM',
    tag: 'Bi-Directional Sync',
    category: 'crm',
    icon: Cloud,
    accent: 'blue',
    link: '/integrations',
  },
  {
    name: 'Model Context Protocol',
    tag: 'Native MCP Standard',
    category: 'ai',
    icon: Bot,
    accent: 'purple',
    link: '/products/ai-automation',
  },
  {
    name: 'HubSpot',
    tag: 'Automated Deals & Leads',
    category: 'crm',
    icon: Target,
    accent: 'amber',
    link: '/integrations',
  },
  {
    name: 'Slack Connect',
    tag: 'Internal Team Escalations',
    category: 'crm',
    icon: Hash,
    accent: 'purple',
    link: '/integrations',
  },
  {
    name: 'Google Sheets & Drive',
    tag: 'Real-Time Sync',
    category: 'crm',
    icon: FileSpreadsheet,
    accent: 'emerald',
    link: '/integrations',
  },
  {
    name: 'Stripe Payments',
    tag: 'In-Chat PayLinks',
    category: 'ecommerce',
    icon: CreditCard,
    accent: 'blue',
    link: '/integrations',
  },
  // Track 2 Items
  {
    name: 'Shopify & WooCommerce',
    tag: 'Order & Cart Sync',
    category: 'ecommerce',
    icon: ShoppingBag,
    accent: 'emerald',
    link: '/integrations',
  },
  {
    name: 'HMAC Webhooks',
    tag: 'Signed Secure Callbacks',
    category: 'ai',
    icon: KeyRound,
    accent: 'purple',
    link: '/developers/webhooks',
  },
  {
    name: 'Zendesk Support',
    tag: 'Two-Way Ticket Sync',
    category: 'crm',
    icon: Headphones,
    accent: 'blue',
    link: '/integrations',
  },
  {
    name: 'PostgreSQL & MySQL',
    tag: 'Direct DB Connectors',
    category: 'ai',
    icon: Database,
    accent: 'blue',
    link: '/developers/api-documentation',
  },
  {
    name: 'RESTful Core API',
    tag: 'OpenAPI 3.1 Spec',
    category: 'ai',
    icon: Code2,
    accent: 'blue',
    link: '/developers/api-documentation',
  },
  {
    name: 'Zapier & Make.com',
    tag: '5,000+ App Triggers',
    category: 'crm',
    icon: Zap,
    accent: 'amber',
    link: '/integrations',
  },
]

export function IntegrationsCarousel({ className = '' }: { className?: string }) {
  const [activeCategory, setActiveCategory] = useState<'all' | 'cpaas' | 'crm' | 'ai' | 'ecommerce'>('all')

  const track1 = ALL_INTEGRATIONS.slice(0, 7)
  const track2 = ALL_INTEGRATIONS.slice(7)

  const marqueeTrack1 = [...track1, ...track1]
  const marqueeTrack2 = [...track2, ...track2]

  const filteredItems = activeCategory === 'all'
    ? ALL_INTEGRATIONS
    : ALL_INTEGRATIONS.filter(item => item.category === activeCategory)

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={`relative w-full ${className}`}
    >
      {/* Category Segmented Filter Bar */}
      <div className="flex justify-center mb-8 overflow-x-auto pb-1 no-scrollbar">
        <div className="inline-flex flex-wrap sm:flex-nowrap items-center justify-center gap-1 p-1 rounded-xl bg-slate-100/90 border border-slate-200/80">
          {[
            { key: 'all', label: 'All 50+ Integrations' },
            { key: 'cpaas', label: 'CPaaS & Telecom' },
            { key: 'crm', label: 'CRMs & Team Inboxes' },
            { key: 'ai', label: 'AI & Developer APIs' },
            { key: 'ecommerce', label: 'E-Commerce & Payments' },
          ].map((tab) => {
            const isActive = activeCategory === tab.key
            return (
              <button
                key={tab.key}
                type="button"
                onClick={() => setActiveCategory(tab.key as 'all' | 'cpaas' | 'crm' | 'ai' | 'ecommerce')}
                className={`relative px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer whitespace-nowrap ${
                  isActive
                    ? 'text-white'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="integrations-active-tab"
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
        {activeCategory === 'all' ? (
          /* Dual-Track Infinite Carousel */
          <motion.div
            key="all-marquee"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-4 relative overflow-hidden py-2"
          >
            {/* Gradient Edge Masks for Smooth Fade In/Out */}
            <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-white via-white/80 to-transparent z-10" />
            <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-white via-white/80 to-transparent z-10" />

            {/* Track 1 (Left Scrolling) */}
            <div className="flex animate-marquee hover:[animation-play-state:paused] whitespace-nowrap py-1">
              {marqueeTrack1.map((item, idx) => {
                const Icon = item.icon
                return (
                  <Link
                    key={`t1-${item.name}-${idx}`}
                    to={item.link}
                    className="inline-flex items-center gap-3 mx-2.5 px-4 py-3 rounded-xl bg-slate-50/80 border border-slate-200/90 hover:border-blue-500 hover:bg-white hover:-translate-y-0.5 hover:shadow-md transition-all duration-200 group"
                  >
                    <div
                      className={`size-8 rounded-lg flex items-center justify-center border shadow-2xs group-hover:scale-110 group-hover:-rotate-3 transition-all duration-200 ${
                        item.accent === 'emerald'
                          ? 'bg-emerald-50 border-emerald-200 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white'
                          : item.accent === 'purple'
                          ? 'bg-purple-50 border-purple-200 text-purple-600 group-hover:bg-purple-600 group-hover:text-white'
                          : item.accent === 'amber'
                          ? 'bg-amber-50 border-amber-200 text-amber-600 group-hover:bg-amber-500 group-hover:text-white'
                          : 'bg-blue-50 border-blue-200 text-blue-600 group-hover:bg-blue-600 group-hover:text-white'
                      }`}
                    >
                      <Icon className="size-4" />
                    </div>
                    <div className="text-left">
                      <span className="text-xs font-bold text-slate-900 group-hover:text-blue-600 transition-colors block">
                        {item.name}
                      </span>
                      <span className="text-[10px] text-slate-500 font-medium block">
                        {item.tag}
                      </span>
                    </div>
                  </Link>
                )
              })}
            </div>

            {/* Track 2 (Right Scrolling - Reverse Marquee) */}
            <div className="flex animate-marquee-reverse hover:[animation-play-state:paused] whitespace-nowrap py-1">
              {marqueeTrack2.map((item, idx) => {
                const Icon = item.icon
                return (
                  <Link
                    key={`t2-${item.name}-${idx}`}
                    to={item.link}
                    className="inline-flex items-center gap-3 mx-2.5 px-4 py-3 rounded-xl bg-slate-50/80 border border-slate-200/90 hover:border-blue-500 hover:bg-white hover:-translate-y-0.5 hover:shadow-md transition-all duration-200 group"
                  >
                    <div
                      className={`size-8 rounded-lg flex items-center justify-center border shadow-2xs group-hover:scale-110 group-hover:-rotate-3 transition-all duration-200 ${
                        item.accent === 'emerald'
                          ? 'bg-emerald-50 border-emerald-200 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white'
                          : item.accent === 'purple'
                          ? 'bg-purple-50 border-purple-200 text-purple-600 group-hover:bg-purple-600 group-hover:text-white'
                          : item.accent === 'amber'
                          ? 'bg-amber-50 border-amber-200 text-amber-600 group-hover:bg-amber-500 group-hover:text-white'
                          : 'bg-blue-50 border-blue-200 text-blue-600 group-hover:bg-blue-600 group-hover:text-white'
                      }`}
                    >
                      <Icon className="size-4" />
                    </div>
                    <div className="text-left">
                      <span className="text-xs font-bold text-slate-900 group-hover:text-blue-600 transition-colors block">
                        {item.name}
                      </span>
                      <span className="text-[10px] text-slate-500 font-medium block">
                        {item.tag}
                      </span>
                    </div>
                  </Link>
                )
              })}
            </div>
          </motion.div>
        ) : (
          /* Filtered Grid Display */
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3.5"
          >
            {filteredItems.map((item, idx) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.32, delay: idx * 0.04, ease: [0.22, 1, 0.36, 1] }}
                  whileHover={{ y: -4, transition: { type: 'spring', stiffness: 360, damping: 24 } }}
                >
                  <Link
                    to={item.link}
                    className="group flex items-center gap-3 p-4 rounded-xl bg-slate-50/80 border border-slate-200/90 hover:border-blue-500 hover:bg-white hover:shadow-md transition-all duration-200"
                  >
                    <div
                      className={`size-9 rounded-lg flex items-center justify-center border shadow-2xs group-hover:scale-110 group-hover:-rotate-3 transition-all duration-200 ${
                        item.accent === 'emerald'
                          ? 'bg-emerald-50 border-emerald-200 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white'
                          : item.accent === 'purple'
                          ? 'bg-purple-50 border-purple-200 text-purple-600 group-hover:bg-purple-600 group-hover:text-white'
                          : item.accent === 'amber'
                          ? 'bg-amber-50 border-amber-200 text-amber-600 group-hover:bg-amber-500 group-hover:text-white'
                          : 'bg-blue-50 border-blue-200 text-blue-600 group-hover:bg-blue-600 group-hover:text-white'
                      }`}
                    >
                      <Icon className="size-4.5" />
                    </div>
                    <div className="text-left">
                      <h4 className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                        {item.name}
                      </h4>
                      <p className="text-[11px] text-slate-500 font-medium">
                        {item.tag}
                      </p>
                    </div>
                  </Link>
                </motion.div>
              )
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}
