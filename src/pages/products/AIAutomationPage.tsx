/**
 * Product Detail Page: AI and Automation
 * Route: /products/ai-automation
 */

import { Link } from 'react-router'
import {
  CheckCircle2,
  CalendarCheck,
  ArrowRight,
  GitBranch,
  Sparkles,
  Cpu,
  Workflow,
} from 'lucide-react'
import { SEO } from '../../components/common/SEO'
import { Breadcrumbs } from '../../components/common/Breadcrumbs'
import { SectionHeading } from '../../components/common/SectionHeading'
import { CTASection } from '../../components/common/CTASection'
import { FAQAccordion } from '../../components/common/FAQAccordion'
import { ScrollReveal, StaggerItem } from '../../components/common/ScrollReveal'
import { productsData } from '../../data/products'
import { siteConfig } from '../../config/siteConfig'

export function AIAutomationPage() {
  const product = productsData['ai-automation']

  return (
    <div className="relative">
      <SEO
        title="AI & Automation · Visual Flow Builder & MCP Agents | PulseQuo"
        description="Make your business smarter with AI. Visual drag-and-drop conversational flow builder, autonomous Claude/OpenAI agents, and Model Context Protocol (MCP) tool integrations."
        canonicalPath="/products/ai-automation"
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-purple-50/70 via-white to-white pt-10 pb-20 sm:pt-16 sm:pb-28 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: 'Products', href: '/#platform-overview' },
              { label: 'AI & Automation' },
            ]}
            className="mb-8"
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <ScrollReveal direction="up" className="lg:col-span-7">
              <span className="inline-flex items-center gap-1.5 rounded-md bg-purple-100/80 border border-purple-200 px-3 py-1 text-xs font-semibold text-purple-800 mb-6">
                <Sparkles className="size-3.5 text-purple-600" />
                <span>Visual Flow Builder & Autonomous MCP Agents</span>
              </span>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-[-0.03em] leading-[1.08]">
                Autonomous AI and visual flows engineered for scale.
              </h1>

              <p className="mt-6 text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
                Automate mission-critical workflows with zero-code visual flow builders, autonomous conversational AI
                agents, intelligent lead scoring, and Model Context Protocol (MCP) tool integrations. Ground responses
                in verified enterprise documents with zero hallucination.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row items-center gap-3.5">
                <Link
                  to="/book-demo?product=AI+%26+Automation"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-semibold text-white bg-purple-600 hover:bg-purple-700 active:bg-purple-800 rounded-lg transition-colors shadow-sm"
                >
                  <CalendarCheck className="size-4" />
                  <span>Request AI automation demo</span>
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
                  <span>Model Context Protocol (MCP)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-emerald-600 shrink-0" />
                  <span>Visual Drag & Drop Canvas</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-emerald-600 shrink-0" />
                  <span>RAG Document Grounding</span>
                </div>
              </div>
            </ScrollReveal>

            {/* Visual Canvas Representation Card */}
            <ScrollReveal direction="left" delay={0.2} className="lg:col-span-5">
              <div className="rounded-3xl border border-slate-800/80 bg-[#020618] p-6 text-white shadow-2xl">
                <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                  <div className="flex items-center gap-2">
                    <GitBranch className="size-4 text-purple-400" />
                    <span className="text-xs font-bold text-slate-200 font-mono">Flow: Inbound Assistant</span>
                  </div>
                  <span className="rounded-md bg-purple-950 text-purple-300 border border-purple-800 px-2 py-0.5 text-[10px] font-mono">
                    Model: Claude / OpenAI
                  </span>
                </div>

                <div className="mt-4 space-y-2.5 font-sans text-xs">
                  <div className="rounded-xl bg-slate-900 border border-slate-800 p-3 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] font-bold text-blue-400">Trigger Node</span>
                      <p className="text-white font-semibold">Inbound WhatsApp Message</p>
                    </div>
                    <span className="text-emerald-400 text-[10px] font-mono">Active</span>
                  </div>

                  <div className="flex justify-center text-slate-600 text-xs font-mono">↓</div>

                  <div className="rounded-xl bg-slate-900 border border-purple-900/60 p-3 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] font-bold text-purple-400">Agent RAG Node</span>
                      <p className="text-white font-semibold">Knowledge Document Lookup</p>
                    </div>
                    <span className="text-purple-300 text-[10px] font-mono">Grounding OK</span>
                  </div>

                  <div className="flex justify-center text-slate-600 text-xs font-mono">↓</div>

                  <div className="rounded-xl bg-slate-900 border border-emerald-900/60 p-3 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] font-bold text-emerald-400">MCP Tool Execution</span>
                      <p className="text-white font-semibold">appointment-server: BookSlot</p>
                    </div>
                    <span className="text-emerald-300 text-[10px] font-mono">Success (200)</span>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
                  <span>Visual Flow Engine</span>
                  <span className="text-purple-400 font-mono">Zero Code Needed</span>
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
            badge="AI Capabilities"
            title="The PulseQuo Intelligent Automation Architecture"
            description="Empower your organization with autonomous conversational intelligence backed by open industry standards."
          />

          <div className="mt-16 space-y-16">
            {/* A. Visual Flow Builder */}
            <ScrollReveal direction="up" className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start border-b border-slate-100 pb-16">
              <div className="lg:col-span-5">
                <div className="flex size-12 items-center justify-center rounded-2xl bg-purple-50 text-purple-600 mb-4">
                  <Workflow className="size-6" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Visual Flow Builder</h3>
                <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                  Design complex decision trees visually on an interactive canvas. Configure keyword triggers, interactive
                  WhatsApp buttons, conditional routing, and external webhook integrations without writing code.
                </p>
              </div>

              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="rounded-2xl border border-slate-200/80 p-5 bg-slate-50/50">
                  <h4 className="text-sm font-bold text-slate-900">Node-Based Canvas</h4>
                  <p className="mt-1.5 text-xs text-slate-600 leading-relaxed">
                    Visual drag-and-drop builder powered by React Flow with custom condition branches.
                  </p>
                </div>
                <div className="rounded-2xl border border-slate-200/80 p-5 bg-slate-50/50">
                  <h4 className="text-sm font-bold text-slate-900">Interactive Message Nodes</h4>
                  <p className="mt-1.5 text-xs text-slate-600 leading-relaxed">
                    Build WhatsApp quick-reply buttons, list selectors, and media cards effortlessly.
                  </p>
                </div>
                <div className="rounded-2xl border border-slate-200/80 p-5 bg-slate-50/50">
                  <h4 className="text-sm font-bold text-slate-900">Draft Flow Playground Sandbox</h4>
                  <p className="mt-1.5 text-xs text-slate-600 leading-relaxed">
                    Test and debug conversational flows in a simulated browser sandbox before publishing live.
                  </p>
                </div>
                <div className="rounded-2xl border border-slate-200/80 p-5 bg-slate-50/50">
                  <h4 className="text-sm font-bold text-slate-900">Keyword Listeners</h4>
                  <p className="mt-1.5 text-xs text-slate-600 leading-relaxed">
                    Trigger customized sub-flows when customers type specific terms like “demo” or “pricing”.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* B. Autonomous AI Agents & MCP */}
            <ScrollReveal direction="up" className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start border-b border-slate-100 pb-16">
              <div className="lg:col-span-5">
                <div className="flex size-12 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600 mb-4">
                  <Cpu className="size-6" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Model Context Protocol (MCP) Agents</h3>
                <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                  Harness the power of leading LLMs (Anthropic Claude, OpenAI) connected to sandboxed Model Context
                  Protocol tool servers. Enable agents to safely check database records, book appointments, and look up
                  order tracking.
                </p>
              </div>

              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="rounded-2xl border border-slate-200/80 p-5 bg-slate-50/50">
                  <h4 className="text-sm font-bold text-slate-900">Standardized MCP Tool Protocol</h4>
                  <p className="mt-1.5 text-xs text-slate-600 leading-relaxed">
                    Connect external microservices and databases through a modular, sandboxed tool contract.
                  </p>
                </div>
                <div className="rounded-2xl border border-slate-200/80 p-5 bg-slate-50/50">
                  <h4 className="text-sm font-bold text-slate-900">PDF & Document RAG Grounding</h4>
                  <p className="mt-1.5 text-xs text-slate-600 leading-relaxed">
                    Upload product manuals and FAQs; AI answers strictly from your documentation without hallucinating.
                  </p>
                </div>
                <div className="rounded-2xl border border-slate-200/80 p-5 bg-slate-50/50">
                  <h4 className="text-sm font-bold text-slate-900">Appointment MCP Engine</h4>
                  <p className="mt-1.5 text-xs text-slate-600 leading-relaxed">
                    Check live calendar availability, book slots, and dispatch confirmation alerts automatically.
                  </p>
                </div>
                <div className="rounded-2xl border border-slate-200/80 p-5 bg-slate-50/50">
                  <h4 className="text-sm font-bold text-slate-900">Deterministic Guardrails</h4>
                  <p className="mt-1.5 text-xs text-slate-600 leading-relaxed">
                    Enforces human confirmation before executing high-impact CRM mutations or refunds.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* C. Lead Qualification & Event Automation */}
            <ScrollReveal direction="up" className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-5">
                <div className="flex size-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 mb-4">
                  <Sparkles className="size-6" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">AI Qualification & Event Automation</h3>
                <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                  Let AI extract contact details and intent conversationally. Trigger real-time webhooks, automated
                  drip follow-ups, and notifications when high-intent opportunities are identified.
                </p>
              </div>

              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="rounded-2xl border border-slate-200/80 p-5 bg-slate-50/50">
                  <h4 className="text-sm font-bold text-slate-900">Natural Entity Extraction</h4>
                  <p className="mt-1.5 text-xs text-slate-600 leading-relaxed">
                    Extracts phone numbers, emails, and requirements even from casual, multilingual chat messages.
                  </p>
                </div>
                <div className="rounded-2xl border border-slate-200/80 p-5 bg-slate-50/50">
                  <h4 className="text-sm font-bold text-slate-900">Confirmation Safeguard Step</h4>
                  <p className="mt-1.5 text-xs text-slate-600 leading-relaxed">
                    Summarizes collected details back to the user for one-tap verification before creating leads.
                  </p>
                </div>
                <div className="rounded-2xl border border-slate-200/80 p-5 bg-slate-50/50">
                  <h4 className="text-sm font-bold text-slate-900">Event-Driven Webhook Dispatch</h4>
                  <p className="mt-1.5 text-xs text-slate-600 leading-relaxed">
                    Fires secure HTTP callbacks for lead.created, appointment.booked, and conversation.handoff.
                  </p>
                </div>
                <div className="rounded-2xl border border-slate-200/80 p-5 bg-slate-50/50">
                  <h4 className="text-sm font-bold text-slate-900">Re-engagement Drip Sequences</h4>
                  <p className="mt-1.5 text-xs text-slate-600 leading-relaxed">
                    Automatically re-engage prospects if they drop off halfway through a qualification flow.
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
            badge="AI Impact"
            title="Smarter Operations with Measurable Efficiency"
            description="Proven business gains from autonomous conversational intelligence."
          />

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {product.benefits.map((benefit, i) => (
              <StaggerItem
                key={i}
                index={i}
                className="rounded-2xl bg-white border border-slate-200/90 p-6 shadow-xs hover:border-purple-300 hover:shadow-md transition-all"
              >
                <CheckCircle2 className="size-6 text-purple-600 mb-4" />
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
            badge="AI FAQs"
            title="AI & Automation Questions Answered"
            description="Clear details on Model Context Protocol, visual flow builders, and LLM integrations."
          />

          <div className="mt-12">
            <FAQAccordion items={product.faqs.map((f, i) => ({ id: `ai-faq-${i}`, ...f, category: 'AI & Automation' }))} />
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        headline="Ready to Make Your Business Smarter with AI?"
        subheadline="Schedule a tailored walkthrough of PulseQuo’s visual flow builder and autonomous MCP agents."
        primaryCtaText="Explore AI Builder"
        secondaryCtaText="Book an AI Demo"
        secondaryCtaHref="/book-demo?product=AI+%26+Automation"
      />
    </div>
  )
}
