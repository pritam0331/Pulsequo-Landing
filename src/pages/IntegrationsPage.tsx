import { useMemo, useState } from 'react'
import { Link } from 'react-router'
import { motion } from 'motion/react'
import { Search, CheckCircle2, ArrowRight } from 'lucide-react'
import { SEO } from '../components/common/SEO'
import { Breadcrumbs } from '../components/common/Breadcrumbs'
import { SectionHeading } from '../components/common/SectionHeading'
import { BackgroundAnimation } from '../components/common/BackgroundAnimation'
import { BrandCarousel } from '../components/common/BrandCarousel'
import { IntegrationsCarousel } from '../components/common/IntegrationsCarousel'
import { Card3DCarousel } from '../components/common/Card3DCarousel'
import { HorizontalCardCarousel } from '../components/common/HorizontalCardCarousel'
import { TestimonialsCarousel } from '../components/common/TestimonialsCarousel'
import { CTASection } from '../components/common/CTASection'
import { CodeShowcaseCard } from '../components/common/CodeShowcaseCard'
import { integrationsData } from '../data/integrations'
import { indexBy, IndexedSearch } from '../lib/dsa'

const easeOutCurve = [0.22, 1, 0.36, 1] as const

const HERO_CODE_SNIPPETS = [
  {
    id: 'whatsapp',
    label: 'WhatsApp API',
    filename: 'dispatch-whatsapp.ts',
    statusBadge: 'HTTP 200 OK',
    comment: '// Outbound Meta Cloud API template dispatch via PulseQuo',
    verb: 'POST',
    endpoint: '/v1/messages/whatsapp',
    protocol: 'HTTP/1.1',
    headers: [
      { key: 'Host', value: 'api.pulsequo.com', tone: 'text-slate-200' },
      { key: 'Authorization', value: 'Bearer pq_live_98xK2m...', tone: 'text-emerald-400' },
      { key: 'X-PulseQuo-Channel', value: 'whatsapp_official_api', tone: 'text-blue-400' },
    ],
    latencyLabel: 'Dispatched in 18ms',
    code: `{
  "to": "+919876543210",
  "template": "order_dispatched_v2",
  "crmDealId": "deal_84920",
  "params": ["Aarav", "PQ-40912", "Out for delivery"],
  "dlrWebhook": "https://api.enterprise.com/callbacks"
}`,
    copyText: `const res = await fetch('https://api.pulsequo.com/v1/messages/whatsapp', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer pq_live_98xK2m...',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    to: '+919876543210',
    template: 'order_dispatched_v2',
    crmDealId: 'deal_84920',
    params: ['Aarav', 'PQ-40912', 'Out for delivery'],
  }),
});`,
  },
  {
    id: 'webhook',
    label: 'Webhook Sync',
    filename: 'webhook-verifier.ts',
    statusBadge: 'HMAC VERIFIED',
    comment: '// Real-time signed event relay to your CRM or warehouse',
    verb: 'POST',
    endpoint: '/api/v1/pulsequo-webhook',
    protocol: 'HTTP/1.1',
    headers: [
      { key: 'Host', value: 'api.enterprise.com', tone: 'text-slate-200' },
      { key: 'X-PulseQuo-Signature', value: 'sha256=8f9b4c03847291a0...', tone: 'text-emerald-400' },
      { key: 'X-PulseQuo-Event', value: 'lead.qualified', tone: 'text-blue-400' },
    ],
    latencyLabel: 'Verified in 1.4ms',
    code: `{
  "event": "lead.qualified",
  "eventId": "evt_98f4a12c",
  "timestamp": "2026-11-25T09:30:15.000Z",
  "data": {
    "leadId": "ld_8f9321",
    "crmSync": "hubspot_deal_4410",
    "qualificationScore": 94
  }
}`,
    copyText: `import crypto from 'node:crypto';

export function verifyPulseQuoWebhook(rawBody: string, sig: string) {
  const expected = crypto
    .createHmac('sha256', process.env.PULSEQUO_WEBHOOK_SECRET!)
    .update(rawBody)
    .digest('hex');

  return crypto.timingSafeEqual(
    Buffer.from(sig),
    Buffer.from(\`sha256=\${expected}\`)
  );
}`,
  },
  {
    id: 'mcp',
    label: 'MCP Server',
    filename: 'mcp-erp-server.ts',
    statusBadge: 'SANDBOX ACTIVE',
    comment: '// JSON-RPC 2.0 Model Context Protocol tool invocation',
    verb: 'RPC',
    endpoint: 'tools/call · erp_orders.lookup_order',
    protocol: 'MCP/2.0',
    headers: [
      { key: 'Namespace', value: 'erp_orders', tone: 'text-slate-200' },
      { key: 'Sandbox-Mode', value: 'strict · zero-retention', tone: 'text-emerald-400' },
      { key: 'Auth-Scope', value: 'orders:read', tone: 'text-blue-400' },
    ],
    latencyLabel: 'Executed in 42ms',
    code: `{
  "jsonrpc": "2.0",
  "method": "tools/call",
  "params": {
    "name": "lookup_order",
    "arguments": { "orderId": "PQ-40912" }
  },
  "result": { "status": "out_for_delivery", "eta": "Today, 6:00 PM" }
}`,
    copyText: `import { PulseQuoMCP } from '@pulsequo/mcp-sdk';

export const orderServer = new PulseQuoMCP({
  namespace: 'erp_orders',
  sandbox: 'strict',
}).tool('lookup_order', async ({ orderId }) => {
  const order = await db.orders.findUnique({ where: { id: orderId } });
  return { status: order.status, eta: order.deliveryEta };
});`,
  },
] as const

const SNIPPET_BY_ID = indexBy(HERO_CODE_SNIPPETS, (s) => s.id)
const INTEGRATIONS_SEARCH = new IndexedSearch(
  integrationsData,
  (item) => `${item.name} ${item.description} ${item.category}`,
  (item) => item.category
)
const CATEGORIES = [
  'All',
  'Messaging',
  'CRM',
  'Automation',
  'Developer APIs',
  'Email',
  'Voice',
] as const

export function IntegrationsPage() {
  const [selectedCategory, setSelectedCategory] = useState<(typeof CATEGORIES)[number]>('All')
  const [searchQuery, setSearchQuery] = useState('')
  const [activeSnippetId, setActiveSnippetId] = useState<(typeof HERO_CODE_SNIPPETS)[number]['id']>('whatsapp')

  const activeSnippet = SNIPPET_BY_ID.get(activeSnippetId) ?? HERO_CODE_SNIPPETS[0]

  const filteredIntegrations = useMemo(
    () => INTEGRATIONS_SEARCH.query(searchQuery, selectedCategory),
    [searchQuery, selectedCategory]
  )

  return (
    <div className="relative bg-white text-slate-900 selection:bg-blue-600 selection:text-white">
      <SEO
        title="Integrations Directory · Verified Connectors & APIs | PulseQuo"
        description="Explore PulseQuo’s verified integration ecosystem: WhatsApp Business API, SMPP SMS gateways, HubSpot CRM, Model Context Protocol (MCP), and real-time event webhooks."
        canonicalPath="/integrations"
      />

      <section
        data-cursor-zone="hero"
        className="relative overflow-hidden bg-white pt-10 pb-14 sm:pt-14 sm:pb-18"
      >
        <BackgroundAnimation variant="hero" showGrid={true} showBeams={true} />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: easeOutCurve }}
              className="lg:col-span-6 text-left"
            >
              <Breadcrumbs items={[{ label: 'Integrations' }]} className="mb-6" />

              <h1 className="text-3xl sm:text-4xl lg:text-[42px] xl:text-[50px] font-black text-slate-900 tracking-[-0.03em] leading-[1.16] text-balance">
                Connect your existing stack to{' '}
                <span className="text-gradient-hero">PulseQuo.</span>
              </h1>

              <p className="mt-5 text-base sm:text-lg text-slate-600 leading-relaxed font-normal max-w-xl text-pretty">
                Synchronize customer dialogues, automate database lookups via Model Context Protocol, and push events to your CRM in real-time with verified enterprise connectors.
              </p>

              <div className="mt-7 max-w-md relative">
                <Search className="size-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search connectors, protocols, or tools..."
                  className="w-full rounded-xl border border-slate-200 bg-white pl-11 pr-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 focus:outline-none shadow-sm transition-shadow"
                />
              </div>

              <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-slate-500 font-medium">
                <span>REST &amp; Webhooks</span>
                <span aria-hidden="true">·</span>
                <span>HMAC SHA-256 Verified</span>
                <span aria-hidden="true">·</span>
                <span>Native MCP Tooling</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.08, ease: easeOutCurve }}
              className="lg:col-span-6"
            >
              <div
                data-cursor="glass"
                data-cursor-theme="dark"
                className="relative rounded-2xl bg-[#070d24] border border-blue-950/90 shadow-2xl overflow-hidden"
              >
                <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-blue-600 via-purple-500 to-blue-500" />
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 blur-3xl pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-600/10 blur-3xl pointer-events-none" />

                <div className="relative z-10 flex items-center justify-between gap-2 px-4 py-3 border-b border-blue-950/80 bg-[#070d24]">
                  <div className="flex items-center gap-2 min-w-0">
                    <span className="size-2.5 rounded-full bg-red-500/80 shrink-0" />
                    <span className="size-2.5 rounded-full bg-yellow-500/80 shrink-0" />
                    <span className="size-2.5 rounded-full bg-emerald-500/80 shrink-0" />
                    <span className="ml-2 font-mono text-xs text-slate-400 truncate">
                      {activeSnippet.filename}
                    </span>
                  </div>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-sm bg-blue-950 text-blue-300 border border-blue-800/60 font-mono text-[11px] font-semibold shrink-0">
                    <span className="size-1.5 rounded-xs bg-emerald-400" />
                    {activeSnippet.statusBadge}
                  </span>
                </div>

                <div className="relative z-10 flex flex-wrap items-center justify-between gap-2 px-4 py-2.5 border-b border-blue-950/80 bg-[#040817]">
                  <div className="flex items-center gap-1.5">
                    {HERO_CODE_SNIPPETS.map((snippet) => {
                      const isActive = snippet.id === activeSnippet.id
                      return (
                        <button
                          key={snippet.id}
                          type="button"
                          onClick={() => {
                            setActiveSnippetId(snippet.id)
                            setCopied(false)
                          }}
                          className={`px-3 py-1 rounded-sm text-xs font-mono font-semibold transition-colors cursor-pointer whitespace-nowrap ${
                            isActive
                              ? 'bg-blue-600 text-white shadow-2xs'
                              : 'bg-blue-950/60 text-slate-400 hover:text-white hover:bg-blue-900/60'
                          }`}
                        >
                          {snippet.label}
                        </button>
                      )
                    })}
                  </div>

                  <button
                    type="button"
                    onClick={handleCopyCode}
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-sm bg-blue-950/80 hover:bg-blue-900/80 text-slate-300 hover:text-white border border-blue-800/60 text-xs font-mono transition-colors cursor-pointer whitespace-nowrap"
                  >
                    {copied ? (
                      <>
                        <Check className="size-3.5 text-emerald-400" />
                        <span className="text-emerald-400">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="size-3.5" />
                        <span>Copy Code</span>
                      </>
                    )}
                  </button>
                </div>

                <div className="relative z-10 p-4 sm:p-5 font-mono text-xs text-slate-300 leading-relaxed overflow-x-auto space-y-2 thin-scrollbar">
                  <p className="text-slate-500">{activeSnippet.comment}</p>
                  <p className="text-purple-400">
                    {activeSnippet.verb}{' '}
                    <span className="text-slate-200">{activeSnippet.endpoint}</span>{' '}
                    <span className="text-slate-400">{activeSnippet.protocol}</span>
                  </p>
                  {activeSnippet.headers.map((header) => (
                    <p key={header.key} className="text-slate-400">
                      {header.key}: <span className={header.tone}>{header.value}</span>
                    </p>
                  ))}
                  <div className="pt-2 border-t border-blue-950/70 text-slate-300">
                    <pre className="text-[11px] text-blue-100/90 leading-snug whitespace-pre">
                      <code>{activeSnippet.code}</code>
                    </pre>
                  </div>
                </div>

                <div className="relative z-10 px-4 py-2.5 border-t border-blue-950/80 bg-[#040817] flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span className="flex items-center gap-1.5">
                    <span className="size-1.5 rounded-xs bg-emerald-400" />
                    {activeSnippet.latencyLabel}
                  </span>
                  <Link
                    to="/developers/api-documentation"
                    className="inline-flex items-center gap-1 text-purple-300 hover:text-blue-300 transition-colors"
                  >
                    <span>Full API Docs</span>
                    <ArrowRight className="size-3" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <BrandCarousel />

      <section className="py-12 sm:py-16 section-fade-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Bi-Directional Ecosystem Stream"
            description="High-throughput sync across CPaaS carriers, enterprise CRMs, payment gateways, and Model Context Protocol servers."
          />

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.55, ease: easeOutCurve }}
            className="mt-8 sm:mt-10"
          >
            <IntegrationsCarousel />
          </motion.div>
        </div>
      </section>

      <section className="py-12 sm:py-16 section-fade-tint overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card3DCarousel
            headline="Synchronized Enterprise Connectors"
            subheadline="See how events flow from Shopify checkout to WhatsApp shipping alerts, Salesforce deals, and autonomous support tickets."
          />
        </div>
      </section>

      <section className="py-14 sm:py-18 section-fade-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`rounded-xl px-4 py-2 text-xs font-semibold transition-all cursor-pointer border whitespace-nowrap ${
                  selectedCategory === cat
                    ? 'bg-blue-600 text-white border-blue-600 shadow-xs'
                    : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {filteredIntegrations.length === 0 ? (
            <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-10 text-center max-w-lg mx-auto">
              <p className="text-sm font-semibold text-slate-900">No matching connectors found</p>
              <p className="mt-1.5 text-xs text-slate-600">
                Try clearing your search filter or contact our team to build a custom MCP integration.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSelectedCategory('All')
                  setSearchQuery('')
                }}
                className="mt-4 inline-flex items-center justify-center rounded-xl bg-blue-600 px-4 py-2 text-xs font-semibold text-white hover:bg-blue-700 transition-colors cursor-pointer"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <HorizontalCardCarousel
              mode="always"
              itemCount={filteredIntegrations.length}
              ariaLabel="Enterprise integrations directory"
              counterLabel="Connectors"
              skeletonVariant="connector"
            >
              {filteredIntegrations.map((item, idx) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.4, delay: Math.min(idx * 0.04, 0.2), ease: easeOutCurve }}
                  className="snap-start shrink-0 w-[82vw] max-w-[320px] sm:w-[340px] lg:w-[360px] rounded-2xl border border-slate-200/90 bg-white p-6 flex flex-col justify-between hover:border-blue-400 hover:shadow-md transition-all group"
                >
                  <div>
                    <div className="flex items-center gap-2 text-xs font-medium text-slate-500 mb-3">
                      <span className="font-semibold text-blue-600">{item.category}</span>
                      <span aria-hidden="true">·</span>
                      <span className="text-emerald-700 font-medium">Official Connector</span>
                    </div>

                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                      {item.name}
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                      {item.description}
                    </p>

                    <div className="mt-5 border-t border-slate-100 pt-4">
                      <span className="text-[11px] font-semibold text-slate-400 block mb-2.5">
                        Key Highlights
                      </span>
                      <ul className="space-y-2">
                        {item.highlights.map((h, i) => (
                          <li key={i} className="flex items-start gap-2 text-xs text-slate-700">
                            <CheckCircle2 className="size-3.5 shrink-0 text-emerald-600 mt-0.5" />
                            <span className="leading-snug">{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between gap-2">
                    <span className="text-[11px] font-mono text-slate-400">Sub-120ms Relay</span>
                    <Link
                      to="/book-demo"
                      className="inline-flex items-center gap-1 text-xs font-bold text-blue-600 hover:text-blue-700 transition-colors whitespace-nowrap"
                    >
                      <span>Configure</span>
                      <ArrowRight className="size-3.5" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </HorizontalCardCarousel>
          )}
        </div>
      </section>

      <section className="py-14 sm:py-18 section-fade-tint">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Trusted for Multi-System Customer Synchronization"
            description="See how fast-growing engineering teams replace brittle webhooks with PulseQuo."
          />

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.55, ease: easeOutCurve }}
            className="mt-8 sm:mt-10"
          >
            <TestimonialsCarousel />
          </motion.div>
        </div>
      </section>

      <CTASection
        headline="Don’t See Your CRM or Tech Stack?"
        subheadline="PulseQuo provides an open REST API, Model Context Protocol (MCP) tool servers, and HMAC webhooks to connect any internal database or proprietary backend."
        primaryCtaText="Explore Developer API Docs"
        primaryCtaHref="/developers/api-documentation"
        secondaryCtaText="Request Custom Integration"
        secondaryCtaHref="/contact"
      />
    </div>
  )
}
