/**
 * Product Detail Page: Communication Cloud
 * Route: /products/communication-cloud
 */

import { Link } from 'react-router'
import {
  MessageSquare,
  CheckCircle2,
  CalendarCheck,
  ArrowRight,
  Zap,
  Code2,
  Inbox,
  Radio,
} from 'lucide-react'
import { SEO } from '../../components/common/SEO'
import { Breadcrumbs } from '../../components/common/Breadcrumbs'
import { SectionHeading } from '../../components/common/SectionHeading'
import { CTASection } from '../../components/common/CTASection'
import { FAQAccordion } from '../../components/common/FAQAccordion'
import { productsData } from '../../data/products'
import { siteConfig } from '../../config/siteConfig'

export function CommunicationCloudPage() {
  const product = productsData['communication-cloud']

  return (
    <div className="relative">
      <SEO
        title="Communication Cloud · Unified Business CPaaS & WhatsApp API"
        description="Scale business communication with official WhatsApp Business API, TRAI DLT-compliant SMS gateway, transactional email, voice hooks, and unified omnichannel inbox."
        canonicalPath="/products/communication-cloud"
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-blue-50/70 via-white to-white pt-10 pb-20 sm:pt-16 sm:pb-28 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: 'Products', href: '/#platform-overview' },
              { label: 'Communication Cloud' },
            ]}
            className="mb-8"
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-100/80 border border-blue-200 px-3.5 py-1 text-xs font-semibold text-blue-800 mb-6">
                <Radio className="size-3.5 text-blue-600" />
                <span>Enterprise CPaaS & Omnichannel Messaging</span>
              </span>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.15]">
                Every Conversation.{' '}
                <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 bg-clip-text text-transparent">
                  One Powerful Platform.
                </span>
              </h1>

              <p className="mt-6 text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
                Scale customer reach across official WhatsApp Business Platform, high-throughput SMS gateways, business
                email, and voice. Centralize all customer dialogues into an unified omnichannel inbox with automated
                channel routing.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
                <Link
                  to="/book-demo?product=Communication+Cloud"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-800 rounded-xl transition-all shadow-md shadow-blue-500/20"
                >
                  <CalendarCheck className="size-4" />
                  <span>Book Communication Demo</span>
                </Link>

                <a
                  href={siteConfig.appUrl}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-semibold text-slate-700 bg-white hover:bg-slate-50 border border-slate-300 rounded-xl transition-all"
                >
                  <span>Get Started</span>
                  <ArrowRight className="size-4" />
                </a>
              </div>

              <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-4 border-t border-slate-200/80 pt-6 text-xs text-slate-600">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-emerald-600 shrink-0" />
                  <span>Official Meta Cloud API</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-emerald-600 shrink-0" />
                  <span>India TRAI DLT Compliant</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-emerald-600 shrink-0" />
                  <span>SMPP v3.4 Direct Session</span>
                </div>
              </div>
            </div>

            {/* Visual Live Module Preview */}
            <div className="lg:col-span-5">
              <div className="rounded-3xl border border-slate-200 bg-slate-950 p-6 text-white shadow-2xl">
                <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                  <div className="flex items-center gap-2">
                    <span className="size-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-xs font-bold text-slate-200 font-mono">CPaaS Gateway Monitor</span>
                  </div>
                  <span className="rounded-md bg-blue-900/60 text-blue-300 px-2 py-0.5 text-[10px] font-mono">
                    99.9% Uptime
                  </span>
                </div>

                <div className="mt-5 space-y-3 font-mono text-xs">
                  <div className="rounded-xl bg-slate-900 border border-slate-800 p-3">
                    <div className="flex justify-between text-[11px] text-slate-400">
                      <span>WhatsApp Business Platform</span>
                      <span className="text-emerald-400">Connected</span>
                    </div>
                    <p className="mt-1 text-slate-200 font-sans text-xs">Broadcast campaign: 25,000 sent (98.4% DLR)</p>
                  </div>

                  <div className="rounded-xl bg-slate-900 border border-slate-800 p-3">
                    <div className="flex justify-between text-[11px] text-slate-400">
                      <span>SMPP v3.4 Carrier Trunk</span>
                      <span className="text-emerald-400">Session Active</span>
                    </div>
                    <p className="mt-1 text-slate-200 font-sans text-xs">OTP Route: Sub-2.8s delivery latency</p>
                  </div>

                  <div className="rounded-xl bg-slate-900 border border-slate-800 p-3">
                    <div className="flex justify-between text-[11px] text-slate-400">
                      <span>DLT Entity Header Binding</span>
                      <span className="text-blue-400">Verified</span>
                    </div>
                    <p className="mt-1 text-slate-200 font-sans text-xs">100% compliant with TRAI SMS regulations</p>
                  </div>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
                  <span>Omnichannel Team Seats: Active</span>
                  <Link to="/developers/api-documentation" className="text-blue-400 hover:underline">
                    API Docs →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Modules Breakdown */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Architecture Modules"
            title="Comprehensive Multi-Channel Infrastructure"
            description="Built to handle high-concurrency enterprise messaging across all primary customer communication touchpoints."
          />

          <div className="mt-16 space-y-16">
            {/* Module 1: WhatsApp Business API */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start border-b border-slate-100 pb-16">
              <div className="lg:col-span-5">
                <div className="flex size-12 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600 mb-4">
                  <MessageSquare className="size-6" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">WhatsApp Business API</h3>
                <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                  Official WhatsApp Business Platform connectivity. Send verified green-badge messages, broadcast
                  pre-approved marketing templates, dispatch interactive quick-reply buttons, and provide 24/7 care.
                </p>
                <div className="mt-6 flex flex-wrap gap-2 text-xs">
                  <span className="rounded-lg bg-emerald-50 text-emerald-800 border border-emerald-200/80 px-2.5 py-1 font-medium">
                    Meta Cloud API Verified
                  </span>
                  <span className="rounded-lg bg-slate-100 text-slate-700 px-2.5 py-1 font-medium">
                    Template Manager
                  </span>
                  <span className="rounded-lg bg-slate-100 text-slate-700 px-2.5 py-1 font-medium">
                    24h Care Window
                  </span>
                </div>
              </div>

              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="rounded-2xl border border-slate-200/80 p-5 bg-slate-50/50">
                  <h4 className="text-sm font-bold text-slate-900">Interactive Templates</h4>
                  <p className="mt-1.5 text-xs text-slate-600 leading-relaxed">
                    Rich media cards, CTA buttons, quick replies, list pickers, and product catalogs.
                  </p>
                </div>
                <div className="rounded-2xl border border-slate-200/80 p-5 bg-slate-50/50">
                  <h4 className="text-sm font-bold text-slate-900">Broadcast Campaigns</h4>
                  <p className="mt-1.5 text-xs text-slate-600 leading-relaxed">
                    Filter customer segments and broadcast pre-approved promotional or utility templates.
                  </p>
                </div>
                <div className="rounded-2xl border border-slate-200/80 p-5 bg-slate-50/50">
                  <h4 className="text-sm font-bold text-slate-900">Delivery & Read Webhooks</h4>
                  <p className="mt-1.5 text-xs text-slate-600 leading-relaxed">
                    Real-time status tracking for sent, delivered, read, and failed events with error diagnostics.
                  </p>
                </div>
                <div className="rounded-2xl border border-slate-200/80 p-5 bg-slate-50/50">
                  <h4 className="text-sm font-bold text-slate-900">Multi-Account Management</h4>
                  <p className="mt-1.5 text-xs text-slate-600 leading-relaxed">
                    Manage multiple phone numbers and brands from one unified enterprise admin console.
                  </p>
                </div>
              </div>
            </div>

            {/* Module 2: SMS Gateway & DLT */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start border-b border-slate-100 pb-16">
              <div className="lg:col-span-5">
                <div className="flex size-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 mb-4">
                  <Zap className="size-6" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">SMS Gateway & DLT Compliance</h3>
                <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                  Carrier-grade SMS routing for transactional alerts, high-speed OTP authentication, and marketing
                  broadcasts with strict Telecom Regulatory Authority of India (TRAI) DLT compliance.
                </p>
                <div className="mt-6 flex flex-wrap gap-2 text-xs">
                  <span className="rounded-lg bg-blue-50 text-blue-800 border border-blue-200/80 px-2.5 py-1 font-medium">
                    DLT Entity & Header Binding
                  </span>
                  <span className="rounded-lg bg-slate-100 text-slate-700 px-2.5 py-1 font-medium">
                    SMPP v3.4 Support
                  </span>
                  <span className="rounded-lg bg-slate-100 text-slate-700 px-2.5 py-1 font-medium">
                    Sub-second OTP Latency
                  </span>
                </div>
              </div>

              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="rounded-2xl border border-slate-200/80 p-5 bg-slate-50/50">
                  <h4 className="text-sm font-bold text-slate-900">Transactional & OTP Routes</h4>
                  <p className="mt-1.5 text-xs text-slate-600 leading-relaxed">
                    Prioritized carrier paths engineered for security codes, bank alerts, and 2FA authentication.
                  </p>
                </div>
                <div className="rounded-2xl border border-slate-200/80 p-5 bg-slate-50/50">
                  <h4 className="text-sm font-bold text-slate-900">Promotional Bulk SMS</h4>
                  <p className="mt-1.5 text-xs text-slate-600 leading-relaxed">
                    Time-window restricted broadcasts complying with DND (Do Not Disturb) telecom regulations.
                  </p>
                </div>
                <div className="rounded-2xl border border-slate-200/80 p-5 bg-slate-50/50">
                  <h4 className="text-sm font-bold text-slate-900">DLT Template Matching</h4>
                  <p className="mt-1.5 text-xs text-slate-600 leading-relaxed">
                    Pre-validates template IDs and dynamic text variables before submission to carrier switches.
                  </p>
                </div>
                <div className="rounded-2xl border border-slate-200/80 p-5 bg-slate-50/50">
                  <h4 className="text-sm font-bold text-slate-900">Direct SMPP Sessions</h4>
                  <p className="mt-1.5 text-xs text-slate-600 leading-relaxed">
                    Connect high-volume internal applications directly via Short Message Peer-to-Peer protocol.
                  </p>
                </div>
              </div>
            </div>

            {/* Module 3: Omnichannel Team Inbox */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start border-b border-slate-100 pb-16">
              <div className="lg:col-span-5">
                <div className="flex size-12 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600 mb-4">
                  <Inbox className="size-6" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Omnichannel Team Inbox</h3>
                <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                  Consolidate customer dialogues from WhatsApp, live chat, SMS, and email into a collaborative shared
                  workspace with automated assignment and internal notes.
                </p>
                <div className="mt-6 flex flex-wrap gap-2 text-xs">
                  <span className="rounded-lg bg-indigo-50 text-indigo-800 border border-indigo-200/80 px-2.5 py-1 font-medium">
                    Multi-Agent Workspace
                  </span>
                  <span className="rounded-lg bg-slate-100 text-slate-700 px-2.5 py-1 font-medium">
                    Round-Robin Assignment
                  </span>
                  <span className="rounded-lg bg-slate-100 text-slate-700 px-2.5 py-1 font-medium">
                    Private Internal Notes
                  </span>
                </div>
              </div>

              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="rounded-2xl border border-slate-200/80 p-5 bg-slate-50/50">
                  <h4 className="text-sm font-bold text-slate-900">Unified Conversation History</h4>
                  <p className="mt-1.5 text-xs text-slate-600 leading-relaxed">
                    View previous messages across all connected channels in one single continuous thread.
                  </p>
                </div>
                <div className="rounded-2xl border border-slate-200/80 p-5 bg-slate-50/50">
                  <h4 className="text-sm font-bold text-slate-900">Agent Routing Rules</h4>
                  <p className="mt-1.5 text-xs text-slate-600 leading-relaxed">
                    Route incoming inquiries based on agent skills, department queues, or round-robin rotation.
                  </p>
                </div>
                <div className="rounded-2xl border border-slate-200/80 p-5 bg-slate-50/50">
                  <h4 className="text-sm font-bold text-slate-900">Canned Snippets & Macros</h4>
                  <p className="mt-1.5 text-xs text-slate-600 leading-relaxed">
                    Insert pre-written standard responses with keyboard shortcuts to maintain brand consistency.
                  </p>
                </div>
                <div className="rounded-2xl border border-slate-200/80 p-5 bg-slate-50/50">
                  <h4 className="text-sm font-bold text-slate-900">Bot-to-Human Handover</h4>
                  <p className="mt-1.5 text-xs text-slate-600 leading-relaxed">
                    AI bots escalate complex conversations to human agents instantly with full context preserved.
                  </p>
                </div>
              </div>
            </div>

            {/* Module 4: Email, Voice & Developer APIs */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-5">
                <div className="flex size-12 items-center justify-center rounded-2xl bg-purple-50 text-purple-600 mb-4">
                  <Code2 className="size-6" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Email, Voice & Programmable APIs</h3>
                <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                  Complement messaging with transactional emails, cloud telephony integrations, and REST APIs for full
                  developer flexibility.
                </p>
                <div className="mt-6 flex flex-wrap gap-2 text-xs">
                  <span className="rounded-lg bg-purple-50 text-purple-800 border border-purple-200/80 px-2.5 py-1 font-medium">
                    REST Messaging API
                  </span>
                  <span className="rounded-lg bg-slate-100 text-slate-700 px-2.5 py-1 font-medium">
                    Webhook Events
                  </span>
                  <span className="rounded-lg bg-slate-100 text-slate-700 px-2.5 py-1 font-medium">
                    Telephony Hooks
                  </span>
                </div>
              </div>

              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="rounded-2xl border border-slate-200/80 p-5 bg-slate-50/50">
                  <h4 className="text-sm font-bold text-slate-900">Transactional Email</h4>
                  <p className="mt-1.5 text-xs text-slate-600 leading-relaxed">
                    DKIM and SPF verified email delivery for system receipts, onboarding, and alerts.
                  </p>
                </div>
                <div className="rounded-2xl border border-slate-200/80 p-5 bg-slate-50/50">
                  <h4 className="text-sm font-bold text-slate-900">Voice Integration (Telephony APIs)</h4>
                  <p className="mt-1.5 text-xs text-slate-600 leading-relaxed">
                    Webhooks for click-to-call, call recording callbacks, and agent telephony routing.
                  </p>
                </div>
                <div className="rounded-2xl border border-slate-200/80 p-5 bg-slate-50/50">
                  <h4 className="text-sm font-bold text-slate-900">Bidirectional Webhooks</h4>
                  <p className="mt-1.5 text-xs text-slate-600 leading-relaxed">
                    Subscribe to incoming messages, status updates, and opt-outs with HMAC signatures.
                  </p>
                </div>
                <div className="rounded-2xl border border-slate-200/80 p-5 bg-slate-50/50">
                  <h4 className="text-sm font-bold text-slate-900">Developer SDKs & OpenAPI</h4>
                  <p className="mt-1.5 text-xs text-slate-600 leading-relaxed">
                    Clear API references with ready-to-use curl and JavaScript implementation examples.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-slate-50 border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Tangible Business Impact"
            title="Why Leading Brands Trust PulseQuo Communication Cloud"
            description="Proven advantages of unifying multi-channel customer messaging."
          />

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {product.benefits.map((benefit, i) => (
              <div key={i} className="rounded-2xl bg-white border border-slate-200 p-6 shadow-xs">
                <CheckCircle2 className="size-6 text-blue-600 mb-4" />
                <h4 className="text-base font-bold text-slate-900">{benefit.title}</h4>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Product FAQs"
            title="Communication Cloud Questions Answered"
            description="Common technical and implementation questions regarding WhatsApp Business and SMS gateways."
          />

          <div className="mt-12">
            <FAQAccordion items={product.faqs.map((f, i) => ({ id: `comm-faq-${i}`, ...f, category: 'Communication' }))} />
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        headline="Ready to Unify Your Customer Communications?"
        subheadline="Talk to our CPaaS solutions team to configure your verified WhatsApp Business account and DLT-compliant SMS routing."
        primaryCtaText="Get Started"
        secondaryCtaText="Book a CPaaS Demo"
        secondaryCtaHref="/book-demo?product=Communication+Cloud"
      />
    </div>
  )
}
