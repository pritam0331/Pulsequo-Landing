/**
 * About PulseQuo Page
 * Route: /about
 * Sections:
 *   1. Hero Overview
 *   2. Organization (Company Profile & Operational Scale)
 *   3. Our Vision (Strategic Direction & Guiding Principles)
 *   4. Founder & CEO Story (Origin Narrative & Philosophy)
 *   5. Teams (Cross-Functional Engineering, AI, Product & Enterprise Teams)
 *   6. Closing CTA
 */

import {
  Building2,
  Compass,
  ShieldCheck,
  Layers,
  Cpu,
  Users,
  Headphones,
  Server,
  Quote,
  Sparkles,
  CheckCircle2,
} from 'lucide-react'
import { SEO } from '../components/common/SEO'
import { Breadcrumbs } from '../components/common/Breadcrumbs'
import { BackgroundAnimation } from '../components/common/BackgroundAnimation'
import { SectionHeading } from '../components/common/SectionHeading'
import { CTASection } from '../components/common/CTASection'
import { ScrollReveal, StaggerItem } from '../components/common/ScrollReveal'
import { CardSectionHydrator, CardGridSkeleton } from '../components/common/CardSkeleton'

const organizationMetrics = [
  {
    value: '500+',
    label: 'Enterprise Organizations',
    detail: 'High-growth retail, fintech, healthcare, and logistics brands',
  },
  {
    value: '45M+',
    label: 'Monthly Dispatches',
    detail: 'Official WhatsApp Cloud API & TRAI DLT carrier traffic',
  },
  {
    value: '99.99%',
    label: 'Carrier Uptime SLA',
    detail: 'Multi-region failover clusters & direct SMPP interconnects',
  },
  {
    value: '4-in-1',
    label: 'Synchronized Stack',
    detail: 'CPaaS, Sales CRM, Support Helpdesk, and MCP AI Agents',
  },
]

const teams = [
  {
    name: 'Platform & Carrier Infrastructure',
    icon: Server,
    accent: 'bg-blue-50 text-blue-600 border-blue-100',
    lead: 'Telecom & Distributed Systems',
    description:
      'Architects our direct SMPP carrier trunks, Meta Cloud API dispatchers, TRAI DLT scrubbing hooks, and multi-tenant isolation boundaries.',
    focus: ['Sub-second OTP routing', 'High-concurrency webhooks', '99.99% multi-zone failover'],
  },
  {
    name: 'Applied AI & MCP Engineering',
    icon: Cpu,
    accent: 'bg-purple-50 text-purple-600 border-purple-100',
    lead: 'Autonomous Agents & Tooling',
    description:
      'Builds sandboxed Model Context Protocol (MCP) servers, retrieval-grounded knowledge pipelines, and deterministic bot-to-human handoff systems.',
    focus: ['Zero-hallucination RAG', 'Sandboxed MCP tool calls', 'Real-time intent extraction'],
  },
  {
    name: 'Product & Experience Design',
    icon: Layers,
    accent: 'bg-indigo-50 text-indigo-600 border-indigo-100',
    lead: 'Unified Workspace Craft',
    description:
      'Designs the shared command center, visual Kanban pipelines, and drag-and-drop flow builder so sales and support teams operate from one screen.',
    focus: ['Omnichannel shared inbox', 'Visual flow orchestration', 'Accessible enterprise UX'],
  },
  {
    name: 'Enterprise Solutions & Customer Success',
    icon: Headphones,
    accent: 'bg-emerald-50 text-emerald-600 border-emerald-100',
    lead: 'Onboarding & Architecture',
    description:
      'Partners directly with customer engineering teams on DLT Principal Entity registration, CRM migrations, custom MCP connectors, and SLA tuning.',
    focus: ['24–48h DLT onboarding', 'Custom ERP integrations', 'Dedicated SLA engineering'],
  },
]

export function AboutPage() {
  return (
    <div className="relative">
      <SEO
        title="About PulseQuo · Organization, Vision, Founder Story & Teams"
        description="Meet the organization, vision, founder story, and engineering teams behind PulseQuo’s unified enterprise CPaaS, CRM, and AI automation platform."
        canonicalPath="/about"
      />

      {/* Hero */}
      <section
        data-cursor-zone="hero"
        className="relative overflow-hidden bg-white pt-10 pb-14 sm:pt-14 sm:pb-18"
      >
        <BackgroundAnimation variant="hero" showGrid={true} showBeams={true} />

        <ScrollReveal direction="up" className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Breadcrumbs items={[{ label: 'About PulseQuo' }]} className="justify-center mb-6" />

          <h1 className="text-3xl sm:text-4xl lg:text-[48px] xl:text-[54px] font-black text-slate-900 tracking-[-0.03em] leading-[1.16] text-balance">
            One Platform. Complete Customer Experience.
          </h1>

          <p className="mt-5 text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto text-pretty">
            PulseQuo was built to eliminate the operational divide between carrier-grade customer messaging,
            revenue pipelines, support resolution, and grounded AI automation.
          </p>
        </ScrollReveal>
      </section>

      {/* 1. Organization */}
      <section id="organization" className="py-14 sm:py-18 section-fade-tint">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            <div className="lg:col-span-5">
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-blue-600 mb-3">
                <Building2 className="size-4" />
                <span>Our Organization</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-black text-slate-900 tracking-[-0.025em] leading-[1.18] text-balance">
                Engineered as Core Communication Infrastructure
              </h2>
              <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed text-pretty">
                Headquartered in Bengaluru with distributed engineering hubs across India, PulseQuo operates as an
                enterprise communication and CRM technology company. We combine licensed telecom interconnects,
                official Meta WhatsApp Business API partnerships, and modern AI architecture under one accountable
                platform.
              </p>
              <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed text-pretty">
                Rather than stitching together fragile third-party plugins, our organization owns the full lifecycle—from
                sub-second SMPP carrier termination and DLT scrubbing to Kanban deal stages and autonomous ticket resolution.
              </p>
            </div>

            <div className="lg:col-span-7">
              <CardSectionHydrator
                ariaLabel="Loading organization metrics"
                skeleton={
                  <CardGridSkeleton
                    count={4}
                    variant="metric"
                    columnsClassName="grid-cols-1 sm:grid-cols-2 gap-5"
                  />
                }
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {organizationMetrics.map((item, idx) => (
                    <StaggerItem
                      key={item.label}
                      index={idx}
                      className="rounded-2xl border border-slate-200/90 bg-white p-6 shadow-xs hover:border-blue-300 hover:shadow-md transition-[border-color,box-shadow] duration-200 flex flex-col justify-between min-h-[146px]"
                    >
                      <span className="text-3xl sm:text-4xl font-black text-slate-900 font-mono tabular-nums tracking-tight">
                        {item.value}
                      </span>
                      <div className="mt-3">
                        <h3 className="text-sm font-bold text-slate-900">{item.label}</h3>
                        <p className="mt-1 text-xs text-slate-600 leading-relaxed">{item.detail}</p>
                      </div>
                    </StaggerItem>
                  ))}
                </div>
              </CardSectionHydrator>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Our Vision */}
      <section id="our-vision" className="py-14 sm:py-18 section-fade-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Our Vision"
            title="Where Every Conversation Connects Directly to Outcome"
            description="A business world where no lead goes cold, no customer repeats their context across channels, and grounded AI co-pilots seamlessly with human teams."
          />

          <CardSectionHydrator
            className="mt-12"
            ariaLabel="Loading vision pillars"
            skeleton={
              <CardGridSkeleton
                count={3}
                variant="feature"
                columnsClassName="grid-cols-1 md:grid-cols-3 gap-8"
              />
            }
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <StaggerItem index={0} className="rounded-2xl border border-slate-200 bg-white p-7 sm:p-8 shadow-xs hover:border-blue-300 hover:shadow-lg transition-[border-color,box-shadow] duration-200">
                <div className="flex size-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600 mb-5">
                  <Compass className="size-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">Unification Over Fragmentation</h3>
                <p className="mt-2.5 text-sm text-slate-600 leading-relaxed">
                  Point solutions create data silos, duplicate logins, and broken customer memory. By uniting CPaaS
                  messaging, Sales CRM, and Support Helpdesk, every conversation carries permanent operational context.
                </p>
              </StaggerItem>

              <StaggerItem index={1} className="rounded-2xl border border-slate-200 bg-white p-7 sm:p-8 shadow-xs hover:border-purple-300 hover:shadow-lg transition-[border-color,box-shadow] duration-200">
                <div className="flex size-12 items-center justify-center rounded-xl bg-purple-50 text-purple-600 mb-5">
                  <Sparkles className="size-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">Grounded AI, Deterministic Control</h3>
                <p className="mt-2.5 text-sm text-slate-600 leading-relaxed">
                  Enterprise AI must be verifiable. We ground conversational agents using Model Context Protocol (MCP)
                  and approved knowledge bases, always paired with instant context-preserving handoff to human specialists.
                </p>
              </StaggerItem>

              <StaggerItem index={2} className="rounded-2xl border border-slate-200 bg-white p-7 sm:p-8 shadow-xs hover:border-emerald-300 hover:shadow-lg transition-[border-color,box-shadow] duration-200">
                <div className="flex size-12 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 mb-5">
                  <ShieldCheck className="size-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">Carrier-Grade Reliability First</h3>
                <p className="mt-2.5 text-sm text-slate-600 leading-relaxed">
                  Critical banking OTPs, delivery updates, and VIP support threads cannot tolerate downtime. We build to
                  strict telecom compliance, Indian TRAI DLT rules, and enterprise SOC 2 and GDPR standards.
                </p>
              </StaggerItem>
            </div>
          </CardSectionHydrator>
        </div>
      </section>

      {/* 3. Founder & CEO Story */}
      <section id="founder-story" className="py-14 sm:py-18 section-fade-tint">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-slate-200/90 bg-white p-7 sm:p-10 lg:p-12 shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              {/* Left Founder Identity & Quote */}
              <div className="lg:col-span-4 flex flex-col justify-between">
                <div>
                  <span className="text-xs font-semibold text-blue-600 block mb-2">
                    Founder &amp; CEO Story
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-[-0.025em] leading-[1.18] text-balance">
                    Why We Built PulseQuo From First Principles
                  </h2>
                </div>

                <div className="mt-6 pt-6 border-t border-slate-100">
                  <div className="flex items-center gap-3.5">
                    <div className="size-13 rounded-2xl bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 text-white font-black text-lg flex items-center justify-center shadow-sm shrink-0">
                      PQ
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-slate-900">Founder &amp; Chief Executive Officer</h3>
                      <p className="text-xs text-slate-500 mt-0.5">PulseQuo · Bengaluru, India</p>
                    </div>
                  </div>

                  <div className="mt-5 rounded-xl bg-slate-50 border border-slate-200/80 p-4">
                    <Quote className="size-4 text-blue-600 mb-2" />
                    <p className="text-xs sm:text-sm font-medium text-slate-800 leading-relaxed">
                      “Customers don’t think in terms of your internal software stack—they just send a message and expect
                      an immediate, informed answer. PulseQuo exists to make that effortless for every team.”
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Narrative Story */}
              <div className="lg:col-span-8 space-y-4 text-sm sm:text-[15px] text-slate-600 leading-relaxed">
                <p>
                  Before founding PulseQuo, our founder spent years working alongside high-velocity commerce, fintech,
                  and SaaS operators who all faced the exact same hidden bottleneck: their customer communication stack
                  was fractured across five or six disconnected vendors.
                </p>
                <p>
                  Marketing teams ran WhatsApp broadcasts on one tool, engineering routed transactional OTPs through a
                  separate SMS aggregator, sales reps tracked deals inside a disconnected CRM, and support agents answered
                  tickets without seeing a single prior chat or order status. Every handoff leaked revenue, slowed down
                  first-response times, and forced customers to repeat themselves.
                </p>
                <p>
                  When conversational AI emerged, most tools simply bolted an ungrounded chatbot widget on top of those
                  same broken silos. PulseQuo was started with a different conviction: the messaging pipes, CRM records,
                  helpdesk queues, and AI reasoning layer belong in a single synchronized system—where an AI agent can
                  safely query real internal data through Model Context Protocol and hand off seamlessly to a human rep
                  with complete history intact.
                </p>
                <p className="font-medium text-slate-900">
                  Today, PulseQuo powers tens of millions of verified business conversations every month, helping lean
                  startups and global enterprises deliver sub-second responsiveness without operational bloat.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Teams */}
      <section id="teams" className="py-14 sm:py-18 section-fade-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Our Teams"
            title="The Builders Behind the Platform"
            description="Four specialized, tightly integrated teams collaborating across telecom engineering, applied AI, workspace design, and enterprise architecture."
          />

          <CardSectionHydrator
            className="mt-12"
            ariaLabel="Loading PulseQuo teams"
            skeleton={
              <CardGridSkeleton
                count={teams.length}
                variant="feature"
                columnsClassName="grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
              />
            }
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              {teams.map((team, idx) => (
                <StaggerItem
                  key={team.name}
                  index={idx}
                  className="rounded-2xl border border-slate-200/90 bg-white p-7 shadow-xs hover:border-blue-300 hover:shadow-lg transition-[border-color,box-shadow] duration-200 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <div className={`flex size-11 items-center justify-center rounded-xl border ${team.accent} shrink-0`}>
                        <team.icon className="size-5" />
                      </div>
                      <span className="text-xs font-medium text-slate-500 flex items-center gap-1.5">
                        <Users className="size-3.5 text-slate-400" />
                        <span>{team.lead}</span>
                      </span>
                    </div>

                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight">
                      {team.name}
                    </h3>
                    <p className="mt-2.5 text-sm text-slate-600 leading-relaxed">
                      {team.description}
                    </p>
                  </div>

                  <div className="mt-5 pt-4 border-t border-slate-100 flex flex-wrap gap-x-4 gap-y-2">
                    {team.focus.map((item) => (
                      <span key={item} className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-700">
                        <CheckCircle2 className="size-3.5 text-emerald-600 shrink-0" />
                        <span>{item}</span>
                      </span>
                    ))}
                  </div>
                </StaggerItem>
              ))}
            </div>
          </CardSectionHydrator>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        headline="Experience the PulseQuo Difference"
        subheadline="Schedule a live platform walkthrough with our engineering and solutions architecture team."
        primaryCtaText="Explore Products"
        primaryCtaHref="/#platform-overview"
        secondaryCtaText="Book a Demo"
        secondaryCtaHref="/book-demo"
      />
    </div>
  )
}
