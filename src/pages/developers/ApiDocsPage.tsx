/**
 * API Documentation Page
 * Route: /developers/api-documentation
 */

import { useState } from 'react'
import { Terminal, Copy, Check, ArrowRight } from 'lucide-react'
import { SEO } from '../../components/common/SEO'
import { Breadcrumbs } from '../../components/common/Breadcrumbs'
import { CTASection } from '../../components/common/CTASection'
import { siteConfig } from '../../config/siteConfig'
import { ScrollReveal } from '../../components/common/ScrollReveal'

export function ApiDocsPage() {
  const [copiedId, setCopiedId] = useState<string | null>(null)

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text)
    setCopiedId(id)
    setTimeout(() => setCopiedId(null), 2000)
  }

  return (
    <div className="relative">
      <SEO
        title="REST API Reference & Technical Endpoints | PulseQuo Developers"
        description="Official REST API reference for PulseQuo: Chat interaction endpoints, widget configuration, public submission routes, and carrier messaging interfaces."
        canonicalPath="/developers/api-documentation"
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-blue-50/70 via-white to-white pt-10 pb-16 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <ScrollReveal direction="down" duration={0.4}>
            <Breadcrumbs
              items={[
                { label: 'Developers', href: '/developers' },
                { label: 'API Reference' },
              ]}
              className="justify-center mb-6"
            />

            <span className="inline-flex items-center gap-1.5 rounded-md bg-blue-100/80 border border-blue-200 px-3.5 py-1 text-xs font-semibold text-blue-800 mb-6">
              <Terminal className="size-3.5 text-blue-600" />
              <span>RESTful Endpoints Reference</span>
            </span>

            <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-[-0.03em] leading-tight">
              PulseQuo Core API Documentation
            </h1>

            <p className="mt-6 text-base sm:text-lg text-slate-600 leading-relaxed">
              Genuine HTTP endpoints for interacting with the conversational AI engine, chat widgets, and lead ingestion.
            </p>

            <div className="mt-8 rounded-lg bg-white border border-slate-200 p-4 max-w-lg mx-auto flex items-center justify-between text-xs font-mono text-slate-700 shadow-xs">
              <span>Base URL: https://api.pulsequo.com</span>
              <span className="rounded bg-emerald-50 text-emerald-700 px-2 py-0.5 text-[10px] font-bold">HTTPS Only</span>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* API Endpoints */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Endpoint 1: POST /api/chat */}
          <ScrollReveal direction="up" delay={0.05}>
            <div className="rounded-xl border border-slate-200/80 p-8 shadow-xs hover:border-slate-300 transition-colors">
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-100 pb-4">
                <div className="flex items-center gap-3">
                  <span className="rounded-md bg-blue-600 px-3 py-1 font-mono text-xs font-bold text-white">POST</span>
                  <span className="font-mono text-sm sm:text-base font-bold text-slate-900">/api/chat</span>
                </div>
                <span className="text-xs text-slate-500 font-mono">Rate Limit: 30 req / min</span>
              </div>

              <p className="mt-4 text-sm text-slate-600 leading-relaxed">
                Dispatches a message into the conversational flow engine. Handles RAG knowledge base lookup, MCP tool calls,
                and generates conversational replies with interactive buttons.
              </p>

              <div className="mt-6">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Request Body (JSON)</h4>
                <div className="rounded-lg bg-[#020618] border border-slate-800 p-4 font-mono text-xs text-slate-200 overflow-x-auto relative">
                  <button
                    type="button"
                    onClick={() =>
                      copyToClipboard(
                        JSON.stringify(
                          {
                            message: 'What are your enterprise CPaaS pricing options?',
                            sessionId: 'user-session-uuid-1234',
                            channel: 'widget',
                          },
                          null,
                          2
                        ),
                        'chat-req'
                      )
                    }
                    className="absolute right-3 top-3 text-slate-400 hover:text-white"
                  >
                    {copiedId === 'chat-req' ? <Check className="size-4 text-emerald-400" /> : <Copy className="size-4" />}
                  </button>
                  <pre>
                    {`{
  "message": "What are your enterprise CPaaS pricing options?",
  "sessionId": "user-session-uuid-1234",
  "channel": "widget"
}`}
                  </pre>
                </div>
              </div>

              <div className="mt-4">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Response (200 OK)</h4>
                <div className="rounded-lg bg-[#020618] border border-slate-800 p-4 font-mono text-xs text-slate-200 overflow-x-auto">
                  <pre>
                    {`{
  "sessionId": "user-session-uuid-1234",
  "reply": "PulseQuo offers tailored CPaaS volume tiers for WhatsApp Business API and TRAI DLT-compliant SMS. Would you like to schedule a demo?",
  "quickReplies": ["Book Demo", "View SMS Pricing", "Talk to Sales"],
  "buttons": []
}`}
                  </pre>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Endpoint 2: GET /api/widget/config */}
          <ScrollReveal direction="up" delay={0.1}>
            <div className="rounded-xl border border-slate-200/80 p-8 shadow-xs hover:border-slate-300 transition-colors">
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-100 pb-4">
                <div className="flex items-center gap-3">
                  <span className="rounded-md bg-emerald-600 px-3 py-1 font-mono text-xs font-bold text-white">GET</span>
                  <span className="font-mono text-sm sm:text-base font-bold text-slate-900">/api/widget/config</span>
                </div>
                <span className="text-xs text-slate-500 font-mono">Public Cacheable (5m)</span>
              </div>

              <p className="mt-4 text-sm text-slate-600 leading-relaxed">
                Returns the public styling, welcome message, brand color, and quick reply chips configured for the web chat widget.
              </p>

              <div className="mt-4">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Response (200 OK)</h4>
                <div className="rounded-lg bg-[#020618] border border-slate-800 p-4 font-mono text-xs text-slate-200 overflow-x-auto">
                  <pre>
                    {`{
  "botName": "PulseQuo Assistant",
  "welcomeMessage": "Hello! How can we assist with your communications and CRM needs today?",
  "quickReplies": ["Pricing", "Products", "Customer Support"],
  "brandColor": "#2563eb",
  "widgetPosition": "bottom-right"
}`}
                  </pre>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Endpoint 3: POST /api/public/demo-requests */}
          <ScrollReveal direction="up" delay={0.15}>
            <div className="rounded-xl border border-slate-200/80 p-8 shadow-xs hover:border-slate-300 transition-colors">
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-100 pb-4">
                <div className="flex items-center gap-3">
                  <span className="rounded-md bg-blue-600 px-3 py-1 font-mono text-xs font-bold text-white">POST</span>
                  <span className="font-mono text-sm sm:text-base font-bold text-slate-900">/api/public/demo-requests</span>
                </div>
                <span className="text-xs text-slate-500 font-mono">Spam Protected</span>
              </div>

              <p className="mt-4 text-sm text-slate-600 leading-relaxed">
                Receives inbound demo requests from the marketing website and dispatches notifications to the sales desk.
              </p>

              <div className="mt-4">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Payload Parameters</h4>
                <div className="rounded-lg bg-slate-50 border border-slate-200 p-4 text-xs font-mono text-slate-700">
                  name (string), email (string), company (string), phone (string), productInterest (string), companySize (string), message (optional string)
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Documentation Placeholder Banner */}
          <ScrollReveal direction="up" delay={0.2}>
            <div className="rounded-xl border border-dashed border-slate-300 bg-slate-50 p-6 text-center">
              <h4 className="text-sm font-bold text-slate-900">Looking for High-Volume SMPP or WhatsApp Cloud API Schemas?</h4>
              <p className="mt-2 text-xs text-slate-600 max-w-xl mx-auto leading-relaxed">
                Full OpenAPI / Swagger specifications and Postman Collections for internal operator switches are available
                within the authenticated PulseQuo Developer Console.
              </p>
              <div className="mt-4">
                <a
                  href={siteConfig.appUrl}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 hover:underline"
                >
                  <span>Login to Developer Console</span>
                  <ArrowRight className="size-3.5" />
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <CTASection />
    </div>
  )
}
