/**
 * Integrations Directory Page
 * Route: /integrations
 */

import { useState } from 'react'
import { Link } from 'react-router'
import {
  Search,
  CheckCircle2,
  Code2,
  Webhook,
  ArrowRight,
} from 'lucide-react'
import { SEO } from '../components/common/SEO'
import { Breadcrumbs } from '../components/common/Breadcrumbs'
import { SectionHeading } from '../components/common/SectionHeading'
import { CTASection } from '../components/common/CTASection'
import { integrationsData } from '../data/integrations'

export function IntegrationsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All')
  const [searchQuery, setSearchQuery] = useState('')

  const categories = [
    'All',
    'Messaging',
    'CRM',
    'Automation',
    'Developer APIs',
    'Email',
    'Voice',
  ]

  const filteredIntegrations = integrationsData.filter((item) => {
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory
    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <div className="relative">
      <SEO
        title="Integrations Directory · Verified Connectors & APIs | PulseQuo"
        description="Explore PulseQuo’s verified integration ecosystem: WhatsApp Business API, SMPP SMS gateways, HubSpot CRM, Model Context Protocol (MCP), and real-time event webhooks."
        canonicalPath="/integrations"
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-blue-50/70 via-white to-white pt-10 pb-16 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <Breadcrumbs items={[{ label: 'Integrations' }]} className="justify-center mb-6" />

          <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-100/80 border border-blue-200 px-3.5 py-1 text-xs font-semibold text-blue-800 mb-6">
            <span>Verified Connectors & Open Protocols</span>
          </span>

          <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Connect Your Existing Stack to PulseQuo
          </h1>

          <p className="mt-6 text-base sm:text-lg text-slate-600 leading-relaxed">
            Synchronize customer dialogues, automate database lookups via Model Context Protocol, and push events to
            your CRM in real-time.
          </p>

          {/* Search Box */}
          <div className="mt-8 max-w-md mx-auto relative">
            <Search className="size-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by protocol, tool, or channel..."
              className="w-full rounded-2xl border border-slate-300 bg-white pl-11 pr-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 focus:outline-none shadow-xs"
            />
          </div>
        </div>
      </section>

      {/* Directory & Filter Tabs */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`rounded-xl px-4 py-2 text-xs font-semibold transition-all ${
                  selectedCategory === cat
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredIntegrations.map((item) => (
              <div
                key={item.id}
                className="rounded-3xl border border-slate-200/90 bg-white p-7 flex flex-col justify-between hover:border-blue-400/80 hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                      {item.category}
                    </span>
                    <span
                      className={`rounded-full px-2.5 py-0.5 text-[10px] font-semibold ${
                        item.status === 'Live & Supported'
                          ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                          : item.status === 'Supported via Webhook'
                            ? 'bg-blue-50 text-blue-700 border border-blue-200'
                            : item.status === 'Beta'
                              ? 'bg-amber-50 text-amber-700 border border-amber-200'
                              : 'bg-slate-100 text-slate-600 border border-slate-200'
                      }`}
                    >
                      {item.status}
                    </span>
                  </div>

                  <h3 className="mt-4 text-lg font-bold text-slate-900">{item.name}</h3>
                  <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">{item.description}</p>

                  <div className="mt-5 border-t border-slate-100 pt-4">
                    <ul className="space-y-1.5">
                      {item.highlights.map((h, i) => (
                        <li key={i} className="flex items-center gap-2 text-xs text-slate-600">
                          <CheckCircle2 className="size-3.5 text-blue-600 shrink-0" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100">
                  {item.documentationUrl ? (
                    <Link
                      to={item.documentationUrl}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 hover:underline"
                    >
                      <span>View Documentation</span>
                      <ArrowRight className="size-3.5" />
                    </Link>
                  ) : (
                    <span className="text-xs text-slate-400">Connector details on request</span>
                  )}
                </div>
              </div>
            ))}
          </div>

          {filteredIntegrations.length === 0 && (
            <div className="text-center py-16 text-slate-500">
              <p className="text-base font-semibold">No integrations found matching your criteria.</p>
              <p className="mt-1 text-xs">Try selecting a different category or clearing your search term.</p>
            </div>
          )}
        </div>
      </section>

      {/* Developer API & Webhooks Section */}
      <section className="py-20 bg-slate-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            dark
            badge="For Developers & Architects"
            title="Extensible REST APIs & Real-time Webhooks"
            description="Build custom integrations, synchronize internal data warehouses, or subscribe to platform lifecycle events."
          />

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8">
              <div className="flex size-12 items-center justify-center rounded-2xl bg-blue-900/60 text-blue-400 mb-6">
                <Code2 className="size-6" />
              </div>
              <h3 className="text-xl font-bold text-white">RESTful Core API</h3>
              <p className="mt-3 text-sm text-slate-400 leading-relaxed">
                Full programmatic control over messaging dispatch, conversation threads, contacts, template querying,
                and balance reports using JSON payloads and API tokens.
              </p>
              <div className="mt-6">
                <Link
                  to="/developers/api-documentation"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-blue-400 hover:text-white transition-colors"
                >
                  <span>Explore REST API Reference</span>
                  <ArrowRight className="size-4" />
                </Link>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8">
              <div className="flex size-12 items-center justify-center rounded-2xl bg-emerald-900/60 text-emerald-400 mb-6">
                <Webhook className="size-6" />
              </div>
              <h3 className="text-xl font-bold text-white">Event Webhook Subscriptions</h3>
              <p className="mt-3 text-sm text-slate-400 leading-relaxed">
                Receive instant notifications when events occur: message.sent, lead.created, appointment.booked, and
                conversation.handoff with HMAC SHA-256 signature verification.
              </p>
              <div className="mt-6">
                <Link
                  to="/developers/webhooks"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-400 hover:text-white transition-colors"
                >
                  <span>Explore Webhooks Reference</span>
                  <ArrowRight className="size-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        headline="Need a Custom Enterprise Integration?"
        subheadline="Our solutions engineering team can help develop custom Model Context Protocol (MCP) tool servers or proprietary API bridges."
        primaryCtaText="Contact Integrations Desk"
        secondaryCtaText="Book a Demo"
        secondaryCtaHref="/book-demo"
      />
    </div>
  )
}
