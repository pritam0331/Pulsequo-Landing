/**
 * Product Detail Page: Customer Support CRM
 * Route: /products/support-crm
 */

import { Link } from 'react-router'
import {
  Headphones,
  CheckCircle2,
  CalendarCheck,
  ArrowRight,
  Clock,
  Users,
} from 'lucide-react'
import { SEO } from '../../components/common/SEO'
import { Breadcrumbs } from '../../components/common/Breadcrumbs'
import { SectionHeading } from '../../components/common/SectionHeading'
import { CTASection } from '../../components/common/CTASection'
import { FAQAccordion } from '../../components/common/FAQAccordion'
import { ScrollReveal, StaggerItem } from '../../components/common/ScrollReveal'
import { productsData } from '../../data/products'
import { siteConfig } from '../../config/siteConfig'

export function SupportCRMPage() {
  const product = productsData['support-crm']

  return (
    <div className="relative">
      <SEO
        title="Customer Support CRM · Omnichannel Ticketing & Helpdesk | PulseQuo"
        description="Deliver customer support that builds loyalty. Manage customer queries, support tickets, SLA alerts, and omnichannel conversations through one centralized support platform."
        canonicalPath="/products/support-crm"
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-violet-50/70 via-white to-white pt-10 pb-20 sm:pt-16 sm:pb-28 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: 'Products', href: '/#platform-overview' },
              { label: 'Support CRM' },
            ]}
            className="mb-8"
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <ScrollReveal direction="up" className="lg:col-span-7">
              <span className="inline-flex items-center gap-1.5 rounded-md bg-violet-100/80 border border-violet-200 px-3 py-1 text-xs font-semibold text-violet-800 mb-6">
                <Headphones className="size-3.5 text-violet-600" />
                <span>Omnichannel Helpdesk & Ticket Lifecycle</span>
              </span>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-[-0.03em] leading-[1.08]">
                Deliver customer support that drives resolution.
              </h1>

              <p className="mt-6 text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
                Manage customer queries, support tickets, agents, and multi-channel conversations through one centralized
                support platform. Enforce rigorous SLA standards, automate Tier-1 resolutions, and co-pilot agents with
                intelligent knowledge bases.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row items-center gap-3.5">
                <Link
                  to="/book-demo?product=Support+CRM"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-semibold text-white bg-violet-600 hover:bg-violet-700 active:bg-violet-800 rounded-lg transition-colors shadow-sm"
                >
                  <CalendarCheck className="size-4" />
                  <span>Request support CRM demo</span>
                </Link>

                <a
                  href={siteConfig.appUrl}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-semibold text-slate-700 bg-white hover:bg-slate-50 border border-slate-300 rounded-lg transition-colors shadow-2xs"
                >
                  <span>Explore app</span>
                  <ArrowRight className="size-4" />
                </a>
              </div>

              <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-4 border-t border-slate-200/80 pt-6 text-xs text-slate-600">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-emerald-600 shrink-0" />
                  <span>SLA Response Timers</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-emerald-600 shrink-0" />
                  <span>Bot-to-Human Handover</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-emerald-600 shrink-0" />
                  <span>Searchable Knowledge Base</span>
                </div>
              </div>
            </ScrollReveal>

            {/* Support Helpdesk Mockup Preview */}
            <ScrollReveal direction="left" delay={0.2} className="lg:col-span-5">
              <div className="rounded-3xl border border-slate-800/80 bg-[#020618] p-6 text-white shadow-2xl">
                <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                  <span className="text-xs font-bold text-slate-200 font-mono">Live Ticket Queue</span>
                  <span className="rounded-md bg-emerald-950 text-emerald-300 border border-emerald-800 px-2 py-0.5 text-[10px] font-mono">
                    SLA Compliance: 99.2%
                  </span>
                </div>

                <div className="mt-4 space-y-3 font-sans text-xs">
                  <div className="rounded-xl bg-slate-900 border border-rose-900/60 p-3">
                    <div className="flex justify-between items-center">
                      <span className="font-mono text-blue-400">#TK-4092</span>
                      <span className="rounded bg-rose-950 text-rose-300 border border-rose-800 px-1.5 py-0.5 text-[10px]">
                        Urgent · WhatsApp
                      </span>
                    </div>
                    <p className="mt-1.5 font-bold text-white">Payment confirmation webhook timeout</p>
                    <div className="mt-2 flex items-center justify-between text-[11px] text-slate-400">
                      <span className="text-emerald-400 font-mono">FRT Target: 12 min left</span>
                      <span>Assigned: Tier-2 Eng</span>
                    </div>
                  </div>

                  <div className="rounded-xl bg-slate-900 border border-slate-800 p-3">
                    <div className="flex justify-between items-center">
                      <span className="font-mono text-blue-400">#TK-4089</span>
                      <span className="rounded bg-blue-950 text-blue-300 border border-blue-800 px-1.5 py-0.5 text-[10px]">
                        Normal · Live Chat
                      </span>
                    </div>
                    <p className="mt-1.5 font-bold text-white">Updating team seat permissions</p>
                    <div className="mt-2 flex items-center justify-between text-[11px] text-slate-400">
                      <span className="text-slate-300">Resolved by AI Assistant</span>
                      <span className="text-emerald-400">CSAT: 5/5 ★</span>
                    </div>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
                  <span>Omnichannel Helpdesk Active</span>
                  <span className="text-violet-400 font-mono">3 Agents Online</span>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Modules */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Helpdesk Capabilities"
            title="Engineered for First-Contact Resolution"
            description="Manage tickets, monitor team workloads, and empower agents with instant contextual intelligence."
          />

          <div className="mt-16 space-y-16">
            {/* A. Ticket Lifecycle */}
            <ScrollReveal direction="up" className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start border-b border-slate-100 pb-16">
              <div className="lg:col-span-5">
                <div className="flex size-12 items-center justify-center rounded-2xl bg-violet-50 text-violet-600 mb-4">
                  <Headphones className="size-6" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Multi-Channel Ticket Lifecycle</h3>
                <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                  Automatically convert customer messages from WhatsApp, email, website chat widgets, and SMS into
                  structured support tickets with custom categories, severity levels, and priority tags.
                </p>
              </div>

              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="rounded-2xl border border-slate-200/80 p-5 bg-slate-50/50">
                  <h4 className="text-sm font-bold text-slate-900">Automatic Ticket Threading</h4>
                  <p className="mt-1.5 text-xs text-slate-600 leading-relaxed">
                    Customer follow-ups automatically attach to existing open tickets to prevent duplicate tickets.
                  </p>
                </div>
                <div className="rounded-2xl border border-slate-200/80 p-5 bg-slate-50/50">
                  <h4 className="text-sm font-bold text-slate-900">Configurable Priorities</h4>
                  <p className="mt-1.5 text-xs text-slate-600 leading-relaxed">
                    Classify issues into Low, Medium, High, or Urgent with distinct escalation timers.
                  </p>
                </div>
                <div className="rounded-2xl border border-slate-200/80 p-5 bg-slate-50/50">
                  <h4 className="text-sm font-bold text-slate-900">Skill-Based Work Queues</h4>
                  <p className="mt-1.5 text-xs text-slate-600 leading-relaxed">
                    Route technical bug reports to engineering and billing queries to finance automatically.
                  </p>
                </div>
                <div className="rounded-2xl border border-slate-200/80 p-5 bg-slate-50/50">
                  <h4 className="text-sm font-bold text-slate-900">Audit Trail & Timeline</h4>
                  <p className="mt-1.5 text-xs text-slate-600 leading-relaxed">
                    Detailed chronological timeline of status transitions, agent reassignments, and notes.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* B. SLA Management & Knowledge Base */}
            <ScrollReveal direction="up" className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start border-b border-slate-100 pb-16">
              <div className="lg:col-span-5">
                <div className="flex size-12 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600 mb-4">
                  <Clock className="size-6" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">SLA Enforcement & Knowledge Base</h3>
                <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                  Establish contractual Service Level Agreements (SLAs) for First Response Time (FRT) and Resolution Time.
                  Ground AI bots and human agents with searchable documentation to deflect repetitive questions.
                </p>
              </div>

              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="rounded-2xl border border-slate-200/80 p-5 bg-slate-50/50">
                  <h4 className="text-sm font-bold text-slate-900">Target Response Timers</h4>
                  <p className="mt-1.5 text-xs text-slate-600 leading-relaxed">
                    Visual countdown badges warn agents before SLA deadlines breach contractual limits.
                  </p>
                </div>
                <div className="rounded-2xl border border-slate-200/80 p-5 bg-slate-50/50">
                  <h4 className="text-sm font-bold text-slate-900">Markdown Knowledge Library</h4>
                  <p className="mt-1.5 text-xs text-slate-600 leading-relaxed">
                    Maintain FAQs, user manuals, and technical runbooks easily searchable by agents.
                  </p>
                </div>
                <div className="rounded-2xl border border-slate-200/80 p-5 bg-slate-50/50">
                  <h4 className="text-sm font-bold text-slate-900">AI Self-Service Deflection</h4>
                  <p className="mt-1.5 text-xs text-slate-600 leading-relaxed">
                    AI bots answer standard inquiries using knowledge documentation without human agent intervention.
                  </p>
                </div>
                <div className="rounded-2xl border border-slate-200/80 p-5 bg-slate-50/50">
                  <h4 className="text-sm font-bold text-slate-900">Internal Agent Playbooks</h4>
                  <p className="mt-1.5 text-xs text-slate-600 leading-relaxed">
                    Private internal documentation ensures consistent troubleshooting steps across team members.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* C. Agent Collaboration & Customer History */}
            <ScrollReveal direction="up" className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-5">
                <div className="flex size-12 items-center justify-center rounded-2xl bg-purple-50 text-purple-600 mb-4">
                  <Users className="size-6" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Agent Collaboration & History</h3>
                <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                  Support agents co-pilot with AI, consult colleagues via private internal notes, and inspect the
                  customer’s comprehensive purchase and ticket history at a glance.
                </p>
              </div>

              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="rounded-2xl border border-slate-200/80 p-5 bg-slate-50/50">
                  <h4 className="text-sm font-bold text-slate-900">Private Internal Notes</h4>
                  <p className="mt-1.5 text-xs text-slate-600 leading-relaxed">
                    Discuss complex issues and tag engineering teammates without exposing notes to customers.
                  </p>
                </div>
                <div className="rounded-2xl border border-slate-200/80 p-5 bg-slate-50/50">
                  <h4 className="text-sm font-bold text-slate-900">Unified Customer History</h4>
                  <p className="mt-1.5 text-xs text-slate-600 leading-relaxed">
                    See previous purchases, past tickets, and conversation transcripts on a single pane.
                  </p>
                </div>
                <div className="rounded-2xl border border-slate-200/80 p-5 bg-slate-50/50">
                  <h4 className="text-sm font-bold text-slate-900">Agent Availability States</h4>
                  <p className="mt-1.5 text-xs text-slate-600 leading-relaxed">
                    Track Active, Away, and Offline statuses to prevent unassigned ticket backlogs.
                  </p>
                </div>
                <div className="rounded-2xl border border-slate-200/80 p-5 bg-slate-50/50">
                  <h4 className="text-sm font-bold text-slate-900">Support Productivity Telemetry</h4>
                  <p className="mt-1.5 text-xs text-slate-600 leading-relaxed">
                    Granular reporting on Average Handle Time (AHT) and First Contact Resolution (FCR).
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-slate-50 border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Measurable Support Outcomes"
            title="Why Support Leaders Choose PulseQuo Helpdesk"
            description="Lower resolution latency while building lasting customer relationships."
          />

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {product.benefits.map((benefit, i) => (
              <StaggerItem
                key={i}
                index={i}
                className="rounded-2xl bg-white border border-slate-200/90 p-6 shadow-xs hover:border-violet-300 hover:shadow-md transition-all"
              >
                <CheckCircle2 className="size-6 text-violet-600 mb-4" />
                <h4 className="text-base font-bold text-slate-900">{benefit.title}</h4>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">{benefit.description}</p>
              </StaggerItem>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Helpdesk FAQs"
            title="Customer Support CRM Questions Answered"
            description="Details on ticket routing, SLA configurations, and bot-to-agent handover."
          />

          <div className="mt-12">
            <FAQAccordion items={product.faqs.map((f, i) => ({ id: `support-faq-${i}`, ...f, category: 'CRM' }))} />
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        headline="Ready to Upgrade Your Customer Support?"
        subheadline="Schedule a demo of PulseQuo Customer Support CRM and see how multi-channel ticketing and SLA tracking can empower your support team."
        primaryCtaText="Explore Support CRM"
        secondaryCtaText="Book a Demo"
        secondaryCtaHref="/book-demo?product=Support+CRM"
      />
    </div>
  )
}
