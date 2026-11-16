/**
 * Product Detail Page: Sales CRM
 * Route: /products/sales-crm
 */

import { Link } from 'react-router'
import {
  TrendingUp,
  CheckCircle2,
  CalendarCheck,
  ArrowRight,
  UserCheck,
  Kanban,
  BarChart3,
  MessageSquare,
} from 'lucide-react'
import { SEO } from '../../components/common/SEO'
import { Breadcrumbs } from '../../components/common/Breadcrumbs'
import { SectionHeading } from '../../components/common/SectionHeading'
import { CTASection } from '../../components/common/CTASection'
import { FAQAccordion } from '../../components/common/FAQAccordion'
import { ScrollReveal, StaggerItem } from '../../components/common/ScrollReveal'
import { productsData } from '../../data/products'
import { siteConfig } from '../../config/siteConfig'

export function SalesCRMPage() {
  const product = productsData['sales-crm']

  return (
    <div className="relative">
      <SEO
        title="Sales CRM · Lead Management & Deal Pipelines | PulseQuo"
        description="Turn every lead into an opportunity. Capture leads from chat and WhatsApp, track custom Kanban pipelines, and automate follow-ups with PulseQuo Sales CRM."
        canonicalPath="/products/sales-crm"
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-indigo-50/70 via-white to-white pt-10 pb-20 sm:pt-16 sm:pb-28 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: 'Products', href: '/#platform-overview' },
              { label: 'Sales CRM' },
            ]}
            className="mb-8"
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <ScrollReveal direction="up" className="lg:col-span-7">
              <span className="inline-flex items-center gap-1.5 rounded-md bg-indigo-100/80 border border-indigo-200 px-3 py-1 text-xs font-semibold text-indigo-800 mb-6">
                <TrendingUp className="size-3.5 text-indigo-600" />
                <span>Conversational Sales CRM & Deal Pipelines</span>
              </span>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-[-0.03em] leading-[1.08]">
                Turn every conversation into closed revenue.
              </h1>

              <p className="mt-6 text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
                Manage your entire sales journey from lead generation to deal closure with PulseQuo Sales CRM. Connect
                inbound WhatsApp and website chats directly to custom deal stages, automate follow-up reminders, and
                forecast pipeline revenue with confidence.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row items-center gap-3.5">
                <Link
                  to="/book-demo?product=Sales+CRM"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 rounded-lg transition-colors shadow-sm"
                >
                  <CalendarCheck className="size-4" />
                  <span>Schedule sales CRM demo</span>
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
                  <span>Custom Kanban Stages</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-emerald-600 shrink-0" />
                  <span>WhatsApp 1-Click Chat</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-emerald-600 shrink-0" />
                  <span>Automated Rep Routing</span>
                </div>
              </div>
            </ScrollReveal>

            {/* Visual CRM Pipeline Preview Card */}
            <ScrollReveal direction="left" delay={0.2} className="lg:col-span-5">
              <div className="rounded-3xl border border-slate-800/80 bg-[#020618] p-6 text-white shadow-2xl">
                <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                  <span className="text-xs font-bold text-slate-200 font-mono">Sales Pipeline Preview</span>
                  <span className="rounded-md bg-indigo-950 text-indigo-300 border border-indigo-800 px-2 py-0.5 text-[10px] font-mono">
                    Weighted Value: ₹3.45M
                  </span>
                </div>

                <div className="mt-4 space-y-3 font-sans text-xs">
                  <div className="rounded-xl bg-slate-900 border border-slate-800 p-3">
                    <div className="flex justify-between items-center">
                      <span className="font-bold text-white">Apex Cloud Retail</span>
                      <span className="text-[11px] font-mono text-emerald-400">₹450,000</span>
                    </div>
                    <p className="mt-1 text-[11px] text-slate-400">Stage: Inbound Qualified · WhatsApp Lead</p>
                    <div className="mt-2 flex items-center justify-between text-[10px] text-slate-500">
                      <span>Owner: Priya Sharma</span>
                      <span className="text-blue-400">Next: Demo Call</span>
                    </div>
                  </div>

                  <div className="rounded-xl bg-slate-900 border border-indigo-900/60 p-3">
                    <div className="flex justify-between items-center">
                      <span className="font-bold text-white">Delta HealthTech</span>
                      <span className="text-[11px] font-mono text-indigo-400">₹1,200,000</span>
                    </div>
                    <p className="mt-1 text-[11px] text-slate-400">Stage: Contract Review · High Probability</p>
                    <div className="mt-2 flex items-center justify-between text-[10px] text-slate-500">
                      <span>Owner: Vikram Nair</span>
                      <span className="text-emerald-400">HubSpot Synced</span>
                    </div>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
                  <span>Direct Integration with Communication Cloud</span>
                  <span className="text-indigo-400 font-mono">Active</span>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Deep Dive Sections: Lead, Pipeline, Automation, Analytics */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Core CRM Modules"
            title="Comprehensive Sales Operations from Ingestion to Close"
            description="Eliminate disconnected spreadsheets and fractured messaging tools."
          />

          <div className="mt-16 space-y-16">
            {/* A. Lead Management */}
            <ScrollReveal direction="up" className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start border-b border-slate-100 pb-16">
              <div className="lg:col-span-5">
                <div className="flex size-12 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600 mb-4">
                  <UserCheck className="size-6" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Lead Capture & Enrichment</h3>
                <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                  Automatically ingest prospective customers from chat widgets, inbound WhatsApp messages, social ads,
                  and public REST webhooks. Keep complete lead activity logs without manual data entry.
                </p>
              </div>

              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="rounded-2xl border border-slate-200/80 p-5 bg-slate-50/50">
                  <h4 className="text-sm font-bold text-slate-900">Multi-Channel Ingestion</h4>
                  <p className="mt-1.5 text-xs text-slate-600 leading-relaxed">
                    Capture leads from WhatsApp QR scans, website chat flows, and developer endpoints.
                  </p>
                </div>
                <div className="rounded-2xl border border-slate-200/80 p-5 bg-slate-50/50">
                  <h4 className="text-sm font-bold text-slate-900">Intelligent Rep Routing</h4>
                  <p className="mt-1.5 text-xs text-slate-600 leading-relaxed">
                    Distribute leads based on territory, expected deal value, or round-robin availability.
                  </p>
                </div>
                <div className="rounded-2xl border border-slate-200/80 p-5 bg-slate-50/50">
                  <h4 className="text-sm font-bold text-slate-900">Qualification Scoring</h4>
                  <p className="mt-1.5 text-xs text-slate-600 leading-relaxed">
                    AI conversationally assesses budget, use case, and timeline before assigning to reps.
                  </p>
                </div>
                <div className="rounded-2xl border border-slate-200/80 p-5 bg-slate-50/50">
                  <h4 className="text-sm font-bold text-slate-900">Complete Activity History</h4>
                  <p className="mt-1.5 text-xs text-slate-600 leading-relaxed">
                    Every message, status change, call log, and note stored in an immutable audit timeline.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* B. Deal & Pipeline Management */}
            <ScrollReveal direction="up" className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start border-b border-slate-100 pb-16">
              <div className="lg:col-span-5">
                <div className="flex size-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 mb-4">
                  <Kanban className="size-6" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Deal & Pipeline Management</h3>
                <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                  Configure custom Kanban pipelines reflecting your sales cycle. Monitor deal progress, track weighted
                  probabilities, and set stagnant deal warnings to prevent pipeline decay.
                </p>
              </div>

              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="rounded-2xl border border-slate-200/80 p-5 bg-slate-50/50">
                  <h4 className="text-sm font-bold text-slate-900">Custom Pipeline Stages</h4>
                  <p className="mt-1.5 text-xs text-slate-600 leading-relaxed">
                    Tailor stages for enterprise consultative sales or rapid inbound e-commerce deals.
                  </p>
                </div>
                <div className="rounded-2xl border border-slate-200/80 p-5 bg-slate-50/50">
                  <h4 className="text-sm font-bold text-slate-900">Weighted Revenue Forecasting</h4>
                  <p className="mt-1.5 text-xs text-slate-600 leading-relaxed">
                    Calculate expected revenue based on deal probability per pipeline phase.
                  </p>
                </div>
                <div className="rounded-2xl border border-slate-200/80 p-5 bg-slate-50/50">
                  <h4 className="text-sm font-bold text-slate-900">Stagnant Opportunity Flags</h4>
                  <p className="mt-1.5 text-xs text-slate-600 leading-relaxed">
                    Visual indicators when opportunities sit without activity longer than defined thresholds.
                  </p>
                </div>
                <div className="rounded-2xl border border-slate-200/80 p-5 bg-slate-50/50">
                  <h4 className="text-sm font-bold text-slate-900">Deal Loss Analysis</h4>
                  <p className="mt-1.5 text-xs text-slate-600 leading-relaxed">
                    Structured loss reasons to refine product packaging, pricing, and messaging.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* C. Communication Integration with Communication Cloud */}
            <ScrollReveal direction="up" className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start border-b border-slate-100 pb-16">
              <div className="lg:col-span-5">
                <div className="flex size-12 items-center justify-center rounded-2xl bg-purple-50 text-purple-600 mb-4">
                  <MessageSquare className="size-6" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Native Communication Cloud Integration</h3>
                <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                  Unlike traditional standalone CRMs, PulseQuo Sales CRM embeds real-time WhatsApp, SMS, and email
                  threads directly inside the contact profile. Reps can send pre-approved templates with one click.
                </p>
              </div>

              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="rounded-2xl border border-slate-200/80 p-5 bg-slate-50/50">
                  <h4 className="text-sm font-bold text-slate-900">One-Click WhatsApp Outreach</h4>
                  <p className="mt-1.5 text-xs text-slate-600 leading-relaxed">
                    Send verified templates directly from the CRM without switching to WhatsApp Web.
                  </p>
                </div>
                <div className="rounded-2xl border border-slate-200/80 p-5 bg-slate-50/50">
                  <h4 className="text-sm font-bold text-slate-900">Two-Way Chat Synchronization</h4>
                  <p className="mt-1.5 text-xs text-slate-600 leading-relaxed">
                    Customer responses sync immediately to the deal timeline with real-time browser alerts.
                  </p>
                </div>
                <div className="rounded-2xl border border-slate-200/80 p-5 bg-slate-50/50">
                  <h4 className="text-sm font-bold text-slate-900">Automated Follow-up Sequences</h4>
                  <p className="mt-1.5 text-xs text-slate-600 leading-relaxed">
                    Schedule automated WhatsApp re-engagement nudges if proposals remain unviewed.
                  </p>
                </div>
                <div className="rounded-2xl border border-slate-200/80 p-5 bg-slate-50/50">
                  <h4 className="text-sm font-bold text-slate-900">Meeting Calendar Sync</h4>
                  <p className="mt-1.5 text-xs text-slate-600 leading-relaxed">
                    Embed meeting booking links in chat to schedule demos directly to reps’ calendars.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* D. Sales Analytics & Performance */}
            <ScrollReveal direction="up" className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-5">
                <div className="flex size-12 items-center justify-center rounded-2xl bg-amber-50 text-amber-600 mb-4">
                  <BarChart3 className="size-6" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Sales Analytics & Rep Performance</h3>
                <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                  Gain actionable visibility into conversion velocities, individual rep response times, channel
                  attribution, and forecast accuracy over 7, 30, and 90-day intervals.
                </p>
              </div>

              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="rounded-2xl border border-slate-200/80 p-5 bg-slate-50/50">
                  <h4 className="text-sm font-bold text-slate-900">Conversion Funnel Reporting</h4>
                  <p className="mt-1.5 text-xs text-slate-600 leading-relaxed">
                    Track conversion ratios at each stage from initial lead capture to contract signed.
                  </p>
                </div>
                <div className="rounded-2xl border border-slate-200/80 p-5 bg-slate-50/50">
                  <h4 className="text-sm font-bold text-slate-900">First Response Velocity</h4>
                  <p className="mt-1.5 text-xs text-slate-600 leading-relaxed">
                    Monitor how quickly individual reps contact newly assigned leads across channels.
                  </p>
                </div>
                <div className="rounded-2xl border border-slate-200/80 p-5 bg-slate-50/50">
                  <h4 className="text-sm font-bold text-slate-900">Channel Attribution</h4>
                  <p className="mt-1.5 text-xs text-slate-600 leading-relaxed">
                    Identify whether WhatsApp, live chat, or email drives the highest-value closed deals.
                  </p>
                </div>
                <div className="rounded-2xl border border-slate-200/80 p-5 bg-slate-50/50">
                  <h4 className="text-sm font-bold text-slate-900">HubSpot Sync Telemetry</h4>
                  <p className="mt-1.5 text-xs text-slate-600 leading-relaxed">
                    Confirm that contacts, company records, and activities synchronize without errors.
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
            badge="Sales Benefits"
            title="Accelerate Pipeline Velocity with PulseQuo"
            description="Empower sales teams to close more deals with less manual friction."
          />

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {product.benefits.map((benefit, i) => (
              <StaggerItem
                key={i}
                index={i}
                className="rounded-2xl bg-white border border-slate-200/90 p-6 shadow-xs hover:border-indigo-300 hover:shadow-md transition-all"
              >
                <CheckCircle2 className="size-6 text-indigo-600 mb-4" />
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
            badge="Sales CRM FAQs"
            title="Frequently Asked Questions"
            description="Details on CRM configuration, pipeline customization, and communication syncing."
          />

          <div className="mt-12">
            <FAQAccordion items={product.faqs.map((f, i) => ({ id: `sales-faq-${i}`, ...f, category: 'CRM' }))} />
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        headline="Ready to Accelerate Your Sales Velocity?"
        subheadline="Book a walkthrough of PulseQuo Sales CRM and discover how conversational lead qualification drives more closed deals."
        primaryCtaText="Explore Sales CRM"
        secondaryCtaText="Schedule a Demo"
        secondaryCtaHref="/book-demo?product=Sales+CRM"
      />
    </div>
  )
}
