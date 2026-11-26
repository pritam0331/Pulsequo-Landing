import { useState, type CSSProperties } from 'react'
import { Link } from 'react-router'
import { motion } from 'motion/react'
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
  ArrowRight,
  CheckCircle2,
} from 'lucide-react'
import { groupBy, indexBy } from '../../lib/dsa'
import { IntegrationsCarouselSkeleton, useCardHydration } from './CardSkeleton'

type CategoryKey = 'all' | 'cpaas' | 'crm' | 'ai' | 'ecommerce'

interface IntegrationNode {
  id: string
  name: string
  shortName: string
  tag: string
  category: Exclude<CategoryKey, 'all'>
  ring: 'inner' | 'outer'
  icon: typeof MessageSquare
  accent: 'blue' | 'purple' | 'emerald' | 'amber'
  link: string
  protocol: string
}

const ALL_INTEGRATIONS: readonly IntegrationNode[] = [
  {
    id: 'whatsapp',
    name: 'WhatsApp Business API',
    shortName: 'WhatsApp',
    tag: 'Meta Official Cloud Partner',
    category: 'cpaas',
    ring: 'inner',
    icon: MessageSquare,
    accent: 'emerald',
    link: '/products/communication-cloud',
    protocol: 'Cloud API v20',
  },
  {
    id: 'smpp',
    name: 'Carrier SMS SMPP',
    shortName: 'SMS SMPP',
    tag: 'TRAI DLT Engine',
    category: 'cpaas',
    ring: 'inner',
    icon: Radio,
    accent: 'blue',
    link: '/products/communication-cloud',
    protocol: 'SMPP v3.4 / DLT',
  },
  {
    id: 'salesforce',
    name: 'Salesforce CRM',
    shortName: 'Salesforce',
    tag: 'Bi-Directional Sync',
    category: 'crm',
    ring: 'inner',
    icon: Cloud,
    accent: 'blue',
    link: '/integrations',
    protocol: 'REST / OAuth 2.0',
  },
  {
    id: 'mcp',
    name: 'Model Context Protocol',
    shortName: 'MCP Tools',
    tag: 'Native MCP Standard',
    category: 'ai',
    ring: 'inner',
    icon: Bot,
    accent: 'purple',
    link: '/products/ai-automation',
    protocol: 'JSON-RPC 2.0',
  },
  {
    id: 'hubspot',
    name: 'HubSpot',
    shortName: 'HubSpot',
    tag: 'Automated Deals & Leads',
    category: 'crm',
    ring: 'inner',
    icon: Target,
    accent: 'amber',
    link: '/integrations',
    protocol: 'CRM v3 Sync',
  },
  {
    id: 'slack',
    name: 'Slack Connect',
    shortName: 'Slack',
    tag: 'Internal Team Escalations',
    category: 'crm',
    ring: 'inner',
    icon: Hash,
    accent: 'purple',
    link: '/integrations',
    protocol: 'Events API',
  },
  {
    id: 'sheets',
    name: 'Google Sheets & Drive',
    shortName: 'Sheets',
    tag: 'Real-Time Sync',
    category: 'crm',
    ring: 'outer',
    icon: FileSpreadsheet,
    accent: 'emerald',
    link: '/integrations',
    protocol: 'Workspace API',
  },
  {
    id: 'stripe',
    name: 'Stripe Payments',
    shortName: 'Stripe',
    tag: 'In-Chat PayLinks',
    category: 'ecommerce',
    ring: 'outer',
    icon: CreditCard,
    accent: 'blue',
    link: '/integrations',
    protocol: 'Webhooks + Checkout',
  },
  {
    id: 'shopify',
    name: 'Shopify & WooCommerce',
    shortName: 'Shopify',
    tag: 'Order & Cart Sync',
    category: 'ecommerce',
    ring: 'outer',
    icon: ShoppingBag,
    accent: 'emerald',
    link: '/integrations',
    protocol: 'GraphQL / Webhooks',
  },
  {
    id: 'webhooks',
    name: 'HMAC Webhooks',
    shortName: 'Webhooks',
    tag: 'Signed Secure Callbacks',
    category: 'ai',
    ring: 'outer',
    icon: KeyRound,
    accent: 'purple',
    link: '/developers/webhooks',
    protocol: 'HMAC SHA-256',
  },
  {
    id: 'zendesk',
    name: 'Zendesk Support',
    shortName: 'Zendesk',
    tag: 'Two-Way Ticket Sync',
    category: 'crm',
    ring: 'outer',
    icon: Headphones,
    accent: 'blue',
    link: '/integrations',
    protocol: 'Ticketing API',
  },
  {
    id: 'postgres',
    name: 'PostgreSQL & MySQL',
    shortName: 'SQL DB',
    tag: 'Direct DB Connectors',
    category: 'ai',
    ring: 'outer',
    icon: Database,
    accent: 'blue',
    link: '/developers/api-documentation',
    protocol: 'Sandboxed MCP',
  },
  {
    id: 'rest-api',
    name: 'RESTful Core API',
    shortName: 'REST API',
    tag: 'OpenAPI 3.1 Spec',
    category: 'ai',
    ring: 'outer',
    icon: Code2,
    accent: 'blue',
    link: '/developers/api-documentation',
    protocol: 'HTTPS / TLS 1.3',
  },
  {
    id: 'zapier',
    name: 'Zapier & Make.com',
    shortName: 'Zapier',
    tag: '5,000+ App Triggers',
    category: 'crm',
    ring: 'outer',
    icon: Zap,
    accent: 'amber',
    link: '/integrations',
    protocol: 'REST Hooks',
  },
]

const INNER_NODES = ALL_INTEGRATIONS.filter((n) => n.ring === 'inner')
const OUTER_NODES = ALL_INTEGRATIONS.filter((n) => n.ring === 'outer')
const INTEGRATION_BY_ID = indexBy(ALL_INTEGRATIONS, (n) => n.id)
const INTEGRATIONS_BY_CATEGORY = groupBy(ALL_INTEGRATIONS, (n) => n.category)

const CATEGORY_TABS: readonly { key: CategoryKey; label: string }[] = [
  { key: 'all', label: 'All 50+ Integrations' },
  { key: 'cpaas', label: 'CPaaS & Telecom' },
  { key: 'crm', label: 'CRMs & Team Inboxes' },
  { key: 'ai', label: 'AI & Developer APIs' },
  { key: 'ecommerce', label: 'E-Commerce & Payments' },
]

const ACCENT_STYLES: Record<IntegrationNode['accent'], { box: string; activeBox: string }> = {
  emerald: {
    box: 'bg-emerald-50 border-emerald-200 text-emerald-600',
    activeBox: 'bg-emerald-600 border-emerald-600 text-white',
  },
  purple: {
    box: 'bg-purple-50 border-purple-200 text-purple-600',
    activeBox: 'bg-purple-600 border-purple-600 text-white',
  },
  amber: {
    box: 'bg-amber-50 border-amber-200 text-amber-600',
    activeBox: 'bg-amber-500 border-amber-500 text-white',
  },
  blue: {
    box: 'bg-blue-50 border-blue-200 text-blue-600',
    activeBox: 'bg-blue-600 border-blue-600 text-white',
  },
}

export function IntegrationsCarousel({
  className = '',
  isLoading,
}: {
  className?: string
  isLoading?: boolean
}) {
  const [activeCategory, setActiveCategory] = useState<CategoryKey>('all')
  const [selectedId, setSelectedId] = useState<string>('whatsapp')
  const isHydrated = useCardHydration(200)
  const showSkeleton = isLoading ?? !isHydrated

  const visibleItems =
    activeCategory === 'all'
      ? ALL_INTEGRATIONS
      : (INTEGRATIONS_BY_CATEGORY.get(activeCategory) ?? ALL_INTEGRATIONS)

  const activeNode = INTEGRATION_BY_ID.get(selectedId) ?? ALL_INTEGRATIONS[0]
  const ActiveIcon = activeNode.icon

  const handleCategoryChange = (key: CategoryKey) => {
    setActiveCategory(key)
    if (key !== 'all') {
      const bucket = INTEGRATIONS_BY_CATEGORY.get(key)
      if (bucket && bucket.length > 0 && activeNode.category !== key) {
        setSelectedId(bucket[0].id)
      }
    }
  }

  if (showSkeleton) {
    return (
      <div aria-busy="true" aria-label="Loading enterprise integrations orbit">
        <IntegrationsCarouselSkeleton className={className} />
      </div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={`relative w-full ${className}`}
    >
      <div className="flex justify-center mb-8 overflow-x-auto pb-1 no-scrollbar">
        <div className="inline-flex flex-wrap sm:flex-nowrap items-center justify-center gap-1 p-1 rounded-xl bg-slate-100/90 border border-slate-200/80">
          {CATEGORY_TABS.map((tab) => {
            const isActive = activeCategory === tab.key
            return (
              <button
                key={tab.key}
                type="button"
                onClick={() => handleCategoryChange(tab.key)}
                className={`relative px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer whitespace-nowrap ${
                  isActive ? 'text-white' : 'text-slate-600 hover:text-slate-900'
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

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
        {/* Concentric Orbital Ecosystem Stage */}
        <div className="lg:col-span-7 flex items-center justify-center">
          <div className="group/orbit relative w-[310px] h-[310px] sm:w-[430px] sm:h-[430px] flex items-center justify-center select-none [--orbit-inner:92px] sm:[--orbit-inner:126px] [--orbit-outer:138px] sm:[--orbit-outer:192px]">
            {/* Ambient Radial Orbit Guides */}
            <div className="pointer-events-none absolute inset-3 sm:inset-4 rounded-full border border-dashed border-slate-200/90" />
            <div className="pointer-events-none absolute inset-[62px] sm:inset-[89px] rounded-full border border-blue-200/80 bg-blue-50/20" />
            <div className="pointer-events-none absolute inset-[108px] sm:inset-[148px] rounded-full border border-slate-200/70" />

            {/* Central PulseQuo Hub */}
            <div className="relative z-20 size-20 sm:size-24 rounded-2xl bg-[#070d24] border border-blue-500/40 shadow-xl shadow-blue-900/20 flex flex-col items-center justify-center text-white">
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-tr from-blue-600/25 via-indigo-500/15 to-purple-500/25 pointer-events-none" />
              <span className="relative text-xs sm:text-sm font-black tracking-tight">PulseQuo</span>
              <span className="relative mt-0.5 text-[9px] sm:text-[10px] font-mono text-blue-300">
                Core Hub
              </span>
            </div>

            {/* Inner Orbit Ring (Clockwise) */}
            <div className="pq-orbit-ring pq-orbit-cw absolute inset-0 pointer-events-none">
              {INNER_NODES.map((node, idx) => {
                const Icon = node.icon
                const angle = (360 / INNER_NODES.length) * idx
                const isSelected = node.id === activeNode.id
                const isHighlighted = activeCategory === 'all' || node.category === activeCategory
                const accent = ACCENT_STYLES[node.accent]

                return (
                  <div
                    key={node.id}
                    className="absolute top-1/2 left-1/2 pointer-events-none"
                    style={
                      {
                        transform: `rotate(${angle}deg) translate(var(--orbit-inner)) rotate(-${angle}deg)`,
                      } as CSSProperties
                    }
                  >
                    <div className="pq-orbit-counter-cw -translate-x-1/2 -translate-y-1/2 pointer-events-auto">
                      <button
                        type="button"
                        onMouseEnter={() => setSelectedId(node.id)}
                        onFocus={() => setSelectedId(node.id)}
                        onClick={() => setSelectedId(node.id)}
                        aria-label={node.name}
                        title={node.name}
                        className={`relative size-10 sm:size-12 rounded-xl border flex items-center justify-center transition-all duration-200 cursor-pointer shadow-sm ${
                          isSelected
                            ? `${accent.activeBox} scale-115 shadow-lg ring-4 ring-blue-500/20 z-30`
                            : isHighlighted
                            ? `${accent.box} bg-white hover:scale-110 hover:border-blue-500 hover:shadow-md`
                            : 'bg-white/80 border-slate-200 text-slate-300 opacity-35 scale-90'
                        }`}
                      >
                        <Icon className="size-4 sm:size-5" />
                      </button>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Outer Orbit Ring (Counter-Clockwise) */}
            <div className="pq-orbit-ring pq-orbit-ccw absolute inset-0 pointer-events-none">
              {OUTER_NODES.map((node, idx) => {
                const Icon = node.icon
                const angle = (360 / OUTER_NODES.length) * idx + 22.5
                const isSelected = node.id === activeNode.id
                const isHighlighted = activeCategory === 'all' || node.category === activeCategory
                const accent = ACCENT_STYLES[node.accent]

                return (
                  <div
                    key={node.id}
                    className="absolute top-1/2 left-1/2 pointer-events-none"
                    style={
                      {
                        transform: `rotate(${angle}deg) translate(var(--orbit-outer)) rotate(-${angle}deg)`,
                      } as CSSProperties
                    }
                  >
                    <div className="pq-orbit-counter-ccw -translate-x-1/2 -translate-y-1/2 pointer-events-auto">
                      <button
                        type="button"
                        onMouseEnter={() => setSelectedId(node.id)}
                        onFocus={() => setSelectedId(node.id)}
                        onClick={() => setSelectedId(node.id)}
                        aria-label={node.name}
                        title={node.name}
                        className={`relative size-9 sm:size-11 rounded-xl border flex items-center justify-center transition-all duration-200 cursor-pointer shadow-sm ${
                          isSelected
                            ? `${accent.activeBox} scale-115 shadow-lg ring-4 ring-blue-500/20 z-30`
                            : isHighlighted
                            ? `${accent.box} bg-white hover:scale-110 hover:border-blue-500 hover:shadow-md`
                            : 'bg-white/80 border-slate-200 text-slate-300 opacity-35 scale-90'
                        }`}
                      >
                        <Icon className="size-4 sm:size-4.5" />
                      </button>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* Active Orbit Node Inspector & Selector */}
        <div className="lg:col-span-5 space-y-4 text-left">
          <div className="rounded-2xl border border-slate-200/90 bg-white p-5 sm:p-6 shadow-md">
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-center gap-3 min-w-0">
                <div
                  className={`size-11 rounded-xl border flex items-center justify-center shrink-0 ${ACCENT_STYLES[activeNode.accent].box}`}
                >
                  <ActiveIcon className="size-5" />
                </div>
                <div className="min-w-0">
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 truncate">
                    {activeNode.name}
                  </h3>
                  <p className="text-xs text-slate-500 font-medium">{activeNode.tag}</p>
                </div>
              </div>
              <span className="text-[10px] font-mono font-semibold text-blue-700 bg-blue-50 border border-blue-200/80 px-2 py-0.5 rounded-sm shrink-0">
                {activeNode.protocol}
              </span>
            </div>

            <div className="mt-4 pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3 text-xs">
              <span className="inline-flex items-center gap-1.5 font-medium text-emerald-700">
                <CheckCircle2 className="size-3.5 text-emerald-600" />
                <span>Sub-120ms Bi-Directional Sync</span>
              </span>

              <Link
                to={activeNode.link}
                className="inline-flex items-center gap-1 font-bold text-blue-600 hover:text-blue-700 transition-colors"
              >
                <span>Explore Connector</span>
                <ArrowRight className="size-3.5" />
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2">
            {visibleItems.slice(0, 8).map((item) => {
              const Icon = item.icon
              const isSelected = item.id === activeNode.id
              return (
                <button
                  key={item.id}
                  type="button"
                  onMouseEnter={() => setSelectedId(item.id)}
                  onClick={() => setSelectedId(item.id)}
                  className={`flex items-center gap-2.5 p-2.5 rounded-xl border text-left transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-blue-50/80 border-blue-400 text-blue-900 shadow-2xs'
                      : 'bg-slate-50/70 border-slate-200/80 text-slate-700 hover:bg-white hover:border-slate-300'
                  }`}
                >
                  <div
                    className={`size-7 rounded-lg border flex items-center justify-center shrink-0 ${
                      isSelected ? ACCENT_STYLES[item.accent].activeBox : ACCENT_STYLES[item.accent].box
                    }`}
                  >
                    <Icon className="size-3.5" />
                  </div>
                  <span className="text-xs font-semibold truncate">{item.shortName}</span>
                </button>
              )
            })}
          </div>
        </div>
      </div>
    </motion.div>
  )
}
