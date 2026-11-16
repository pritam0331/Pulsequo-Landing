/**
 * Developer Portal Landing Page
 * Route: /developers
 */

import { Link } from 'react-router'
import {
  Code2,
  Webhook,
  Terminal,
  Cpu,
  ArrowRight,
} from 'lucide-react'
import { SEO } from '../../components/common/SEO'
import { Breadcrumbs } from '../../components/common/Breadcrumbs'
import { SectionHeading } from '../../components/common/SectionHeading'
import { CTASection } from '../../components/common/CTASection'

export function DevelopersPage() {
  return (
    <div className="relative">
      <SEO
        title="Developer Platform · REST APIs, Webhooks & MCP Tools | PulseQuo"
        description="Comprehensive developer documentation for PulseQuo: RESTful messaging APIs, real-time webhook subscriptions, and Model Context Protocol (MCP) server tooling."
        canonicalPath="/developers"
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-blue-50/70 via-white to-white pt-10 pb-16 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <Breadcrumbs items={[{ label: 'Developers' }]} className="justify-center mb-6" />

          <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-100/80 border border-blue-200 px-3.5 py-1 text-xs font-semibold text-blue-800 mb-6">
            <Code2 className="size-3.5 text-blue-600" />
            <span>Programmable Communications & Webhooks</span>
          </span>

          <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Build on the PulseQuo Platform
          </h1>

          <p className="mt-6 text-base sm:text-lg text-slate-600 leading-relaxed">
            Integrate enterprise messaging, trigger automated conversational flows, query CRM leads, and connect
            custom AI tools via Model Context Protocol.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/developers/api-documentation"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-xs hover:bg-blue-700"
            >
              <span>Explore REST API Docs</span>
              <ArrowRight className="size-4" />
            </Link>

            <Link
              to="/developers/webhooks"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50"
            >
              <span>Webhook Events Reference</span>
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Developer Pillars */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="rounded-3xl border border-slate-200 p-8 shadow-xs flex flex-col justify-between hover:border-blue-300 transition-all">
              <div>
                <div className="flex size-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 mb-6">
                  <Terminal className="size-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">RESTful Core APIs</h3>
                <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                  JSON-over-HTTP endpoints to dispatch WhatsApp messages, trigger transactional SMS alerts, query
                  conversation histories, and fetch lead statuses.
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-slate-100">
                <Link to="/developers/api-documentation" className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 hover:underline">
                  <span>View API Reference</span> <ArrowRight className="size-4" />
                </Link>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 p-8 shadow-xs flex flex-col justify-between hover:border-emerald-300 transition-all">
              <div>
                <div className="flex size-12 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600 mb-6">
                  <Webhook className="size-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">Event-Driven Webhooks</h3>
                <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                  Subscribe to platform events including lead.created, message.sent, and conversation.handoff with
                  tamper-proof HMAC SHA-256 signatures.
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-slate-100">
                <Link to="/developers/webhooks" className="inline-flex items-center gap-1.5 text-sm font-semibold text-emerald-600 hover:underline">
                  <span>View Webhooks Spec</span> <ArrowRight className="size-4" />
                </Link>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 p-8 shadow-xs flex flex-col justify-between hover:border-purple-300 transition-all">
              <div>
                <div className="flex size-12 items-center justify-center rounded-2xl bg-purple-50 text-purple-600 mb-6">
                  <Cpu className="size-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">Model Context Protocol (MCP)</h3>
                <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                  Build and connect sandboxed MCP tool servers to give conversational Claude & OpenAI agents access to
                  your internal databases and ERPs.
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-slate-100">
                <Link to="/products/ai-automation" className="inline-flex items-center gap-1.5 text-sm font-semibold text-purple-600 hover:underline">
                  <span>Learn About MCP</span> <ArrowRight className="size-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quickstart Code Snippet */}
      <section className="py-20 bg-slate-950 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            dark
            badge="Quick Integration"
            title="Embed Website Chat in 60 Seconds"
            description="Add our embed.js snippet to any HTML page to deploy AI live chat immediately."
          />

          <div className="mt-12 rounded-2xl bg-slate-900 border border-slate-800 p-6 font-mono text-xs text-slate-300 overflow-x-auto">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-slate-500 mb-3">
              <span>index.html</span>
              <span>JavaScript Embed Tag</span>
            </div>
            <pre>
              {`<!-- PulseQuo Live Customer Chat Widget -->
<script
  src="https://app.pulsequo.com/embed.js"
  async
  defer
></script>`}
            </pre>
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  )
}
