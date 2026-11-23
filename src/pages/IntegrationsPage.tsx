/**
 * Integrations Directory Page
 * Route: /integrations
 * Fully fledged Shiprocket-inspired landing page with Dual-Track Integrations Marquee,
 * Brand Carousel, Card Fanout, Testimonials Carousel, and Ambient Background.
 */

import { useState } from 'react'
import { Link } from 'react-router'
import { motion } from 'motion/react'
import {
  Search,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react'
import { SEO } from '../components/common/SEO'
import { Breadcrumbs } from '../components/common/Breadcrumbs'
import { SectionHeading } from '../components/common/SectionHeading'
import { BackgroundAnimation } from '../components/common/BackgroundAnimation'
import { BrandCarousel } from '../components/common/BrandCarousel'
import { IntegrationsCarousel } from '../components/common/IntegrationsCarousel'
import { CardFanout } from '../components/common/CardFanout'
import { TestimonialsCarousel } from '../components/common/TestimonialsCarousel'
import { CTASection } from '../components/common/CTASection'
import { integrationsData } from '../data/integrations'

const easeOutCurve = [0.22, 1, 0.36, 1] as const

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
    <div className="relative bg-white text-slate-900 selection:bg-blue-600 selection:text-white">
      <SEO
        title="Integrations Directory · Verified Connectors & APIs | PulseQuo"
        description="Explore PulseQuo’s verified integration ecosystem: WhatsApp Business API, SMPP SMS gateways, HubSpot CRM, Model Context Protocol (MCP), and real-time event webhooks."
        canonicalPath="/integrations"
      />

      {/* ─────────────────────────────────────────────────────────────
          1. HERO SECTION: AMBIENT LIGHTING & SEARCH
         ───────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-white pt-10 pb-16 sm:pt-14 sm:pb-20 border-b border-slate-100">
        <BackgroundAnimation variant="hero" showGrid={true} showBeams={true} />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <Breadcrumbs items={[{ label: 'Integrations' }]} className="justify-center mb-6" />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: easeOutCurve }}
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 border border-blue-200/90 px-3.5 py-1 text-xs font-semibold text-blue-800 mb-6 shadow-2xs">
              <span className="flex size-2 rounded-full bg-blue-600 animate-pulse" />
              <span>50+ Verified Connectors & Open Standard Protocols</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-[-0.035em] leading-[1.08]">
              Connect your existing stack to{' '}
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 bg-clip-text text-transparent">
                PulseQuo.
              </span>
            </h1>

            <p className="mt-6 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              Synchronize customer dialogues, automate database lookups via Model Context Protocol, and push events to
              your CRM in real-time with verified enterprise connectors.
            </p>

            {/* Search Box */}
            <div className="mt-8 max-w-md mx-auto relative">
              <Search className="size-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search connectors, protocols, or tools..."
                className="w-full rounded-2xl border border-slate-200 bg-white pl-11 pr-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 focus:outline-none shadow-sm"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          2. BRAND TRUST MARQUEE CAROUSEL
         ───────────────────────────────────────────────────────────── */}
      <BrandCarousel />

      {/* ─────────────────────────────────────────────────────────────
          3. DUAL-TRACK INFINITE MARQUEE INTEGRATIONS CAROUSEL
         ───────────────────────────────────────────────────────────── */}
      <section className="py-12 sm:py-16 bg-white border-b border-slate-200/80 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="LIVE CONNECTORS IN ACTION"
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

      {/* ─────────────────────────────────────────────────────────────
          4. SHIPROCKET-INSPIRED CARD FANOUT SHOWCASE
         ───────────────────────────────────────────────────────────── */}
      <section className="py-12 sm:py-16 bg-slate-50/70 border-b border-slate-200/80 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <CardFanout
            headline="Synchronized Enterprise Connectors"
            subheadline="See how events flow from Shopify checkout to WhatsApp shipping alerts, Salesforce deals, and autonomous support tickets."
            badgeText="SHIPROCKET-STYLE ECOSYSTEM SYNC"
          />
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          5. DIRECTORY & FILTER TABS
         ───────────────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-20 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`rounded-xl px-4 py-2 text-xs font-semibold transition-all cursor-pointer border ${
                  selectedCategory === cat
                    ? 'bg-blue-600 text-white border-blue-600 shadow-xs'
                    : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredIntegrations.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.45, delay: (idx % 6) * 0.06, ease: easeOutCurve }}
                className="rounded-2xl border border-slate-200/90 bg-white p-6 flex flex-col justify-between hover:border-blue-400 hover:shadow-md transition-all group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-mono font-bold tracking-wider uppercase text-blue-600 bg-blue-50 px-2 py-0.5 rounded-md border border-blue-100">
                      {item.category}
                    </span>
                    <span className="text-xs font-mono font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-sm">
                      Official Connector
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                    {item.name}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {item.description}
                  </p>

                  <div className="mt-5 border-t border-slate-100 pt-4">
                    <span className="text-[10px] font-mono font-bold tracking-wider text-slate-400 uppercase block mb-2">
                      Key Highlights
                    </span>
                    <ul className="space-y-1.5">
                      {item.highlights.map((h, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-slate-700">
                          <CheckCircle2 className="size-3.5 shrink-0 text-emerald-600 mt-0.5" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[11px] font-mono text-slate-400">Sub-120ms Event Relay</span>
                  <Link
                    to="/book-demo"
                    className="inline-flex items-center gap-1 text-xs font-bold text-blue-600 hover:text-blue-700 transition-colors"
                  >
                    <span>Configure Integration</span>
                    <ArrowRight className="size-3.5" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          6. CUSTOMER TESTIMONIALS CAROUSEL
         ───────────────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-20 bg-slate-50/70 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="PROVEN INTEGRATION RELIABILITY"
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

      {/* ─────────────────────────────────────────────────────────────
          7. CLOSING CTA
         ───────────────────────────────────────────────────────────── */}
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
