/**
 * API Documentation Page
 * Route: /developers/api-documentation
 */

import { Link } from 'react-router'
import { ArrowRight } from 'lucide-react'
import { SEO } from '../../components/common/SEO'
import { Breadcrumbs } from '../../components/common/Breadcrumbs'
import { BackgroundAnimation } from '../../components/common/BackgroundAnimation'
import { CTASection } from '../../components/common/CTASection'
import { ScrollReveal } from '../../components/common/ScrollReveal'
import { CodeShowcaseCard } from '../../components/common/CodeShowcaseCard'

const CHAT_REQ_CODE = `{
  "message": "What are your enterprise CPaaS pricing options?",
  "sessionId": "user-session-uuid-1234",
  "channel": "widget"
}`

const CHAT_RES_CODE = `{
  "sessionId": "user-session-uuid-1234",
  "reply": "PulseQuo offers tailored CPaaS volume tiers for WhatsApp Business API and TRAI DLT-compliant SMS. Would you like to schedule a demo?",
  "quickReplies": ["Book Demo", "View SMS Pricing", "Talk to Sales"],
  "buttons": []
}`

const WIDGET_CONFIG_CODE = `{
  "botName": "PulseQuo Assistant",
  "welcomeMessage": "Hello! How can we assist with your communications and CRM needs today?",
  "quickReplies": ["Pricing", "Products", "Customer Support"],
  "brandColor": "#2563eb",
  "widgetPosition": "bottom-right"
}`

export function ApiDocsPage() {

  return (
    <div className="relative">
      <SEO
        title="REST API Reference & Technical Endpoints | PulseQuo Developers"
        description="Official REST API reference for PulseQuo: Chat interaction endpoints, widget configuration, public submission routes, and carrier messaging interfaces."
        canonicalPath="/developers/api-documentation"
      />

      {/* Hero */}
      <section
        data-cursor-zone="hero"
        className="relative overflow-hidden bg-white pt-10 pb-14 sm:pt-14 sm:pb-18"
      >
        <BackgroundAnimation variant="hero" showGrid={true} showBeams={true} />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal direction="down" duration={0.4}>
            <Breadcrumbs
              items={[
                { label: 'Developers', href: '/developers' },
                { label: 'API Reference' },
              ]}
              className="justify-center mb-6"
            />

            <h1 className="text-3xl sm:text-4xl lg:text-[48px] xl:text-[54px] font-black text-slate-900 tracking-[-0.03em] leading-[1.16] text-balance">
              PulseQuo Core API Documentation
            </h1>

            <p className="mt-5 text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto text-pretty">
              Genuine HTTP endpoints for interacting with the conversational AI engine, chat widgets, and lead ingestion.
            </p>

            <div className="mt-8 rounded-lg bg-white border border-slate-200 p-4 max-w-lg mx-auto flex flex-wrap items-center justify-between gap-2 text-xs font-mono text-slate-700 shadow-xs">
              <span>Base URL: https://api.pulsequo.com</span>
              <span className="text-emerald-700 text-[11px] font-bold">HTTPS Only</span>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* API Endpoints */}
      <section className="py-8 sm:py-10 section-fade-tint">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <ScrollReveal direction="up" delay={0.05}>
            <div className="rounded-xl border border-slate-200/80 p-6 sm:p-8 shadow-xs hover:border-slate-300 transition-colors bg-white">
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-100 pb-4">
                <div className="flex items-center gap-3">
                  <span className="rounded-md bg-blue-600 px-3 py-1 font-mono text-xs font-bold text-white">POST</span>
                  <span className="font-mono text-sm sm:text-base font-bold text-black">/api/chat</span>
                </div>
                <span className="text-xs text-slate-500 font-mono">Rate Limit: 30 req / min</span>
              </div>

              <p className="mt-4 text-sm text-slate-600 leading-relaxed">
                Dispatches a message into the conversational flow engine. Handles RAG knowledge base lookup, MCP tool calls,
                and generates conversational replies with interactive buttons.
              </p>

              <div className="mt-6">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2.5">Request Body (JSON)</h4>
                <CodeShowcaseCard
                  variant="dark"
                  filename="POST /api/chat · request.json"
                  language="json"
                  statusBadge="application/json"
                  statusTone="blue"
                  code={CHAT_REQ_CODE}
                  copyLabel="Copy JSON"
                  compact
                />
              </div>

              <div className="mt-5">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2.5">Response (200 OK)</h4>
                <CodeShowcaseCard
                  variant="dark"
                  filename="response-200.json"
                  language="json"
                  statusBadge="200 OK"
                  statusTone="emerald"
                  code={CHAT_RES_CODE}
                  copyLabel="Copy JSON"
                  compact
                />
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.1}>
            <div className="rounded-xl border border-slate-200/80 p-6 sm:p-8 shadow-xs hover:border-slate-300 transition-colors bg-white">
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-100 pb-4">
                <div className="flex items-center gap-3">
                  <span className="rounded-md bg-emerald-600 px-3 py-1 font-mono text-xs font-bold text-white">GET</span>
                  <span className="font-mono text-sm sm:text-base font-bold text-black">/api/widget/config</span>
                </div>
                <span className="text-xs text-slate-500 font-mono">Public Cacheable (5m)</span>
              </div>

              <p className="mt-4 text-sm text-slate-600 leading-relaxed">
                Returns the public styling, welcome message, brand color, and quick reply chips configured for the web chat widget.
              </p>

              <div className="mt-5">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2.5">Response (200 OK)</h4>
                <CodeShowcaseCard
                  variant="dark"
                  filename="widget-config.json"
                  language="json"
                  statusBadge="200 OK · Cached"
                  statusTone="emerald"
                  code={WIDGET_CONFIG_CODE}
                  copyLabel="Copy JSON"
                  compact
                />
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
                <Link
                  to="/book-demo"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 hover:underline"
                >
                  <span>Request Developer Console Access</span>
                  <ArrowRight className="size-3.5" />
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <CTASection />
    </div>
  )
}
