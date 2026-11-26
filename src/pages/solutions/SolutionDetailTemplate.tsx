import { useState } from 'react'
import { Link } from 'react-router'
import { motion, AnimatePresence } from 'motion/react'
import {
  AlertTriangle,
  ArrowRight,
  Bot,
  CalendarCheck,
  CheckCircle2,
  Headphones,
  Radio,
  Sparkles,
  TrendingUp,
} from 'lucide-react'
import { SEO } from '../../components/common/SEO'
import { Breadcrumbs } from '../../components/common/Breadcrumbs'
import { BackgroundAnimation } from '../../components/common/BackgroundAnimation'
import { BrandCarousel } from '../../components/common/BrandCarousel'
import { SectionHeading } from '../../components/common/SectionHeading'
import { HorizontalCardCarousel } from '../../components/common/HorizontalCardCarousel'
import { TestimonialsCarousel } from '../../components/common/TestimonialsCarousel'
import { CTASection } from '../../components/common/CTASection'
import {
  ActionSpotlightSkeleton,
  CardGridSkeleton,
  CardSectionHydrator,
} from '../../components/common/CardSkeleton'
import type { SolutionDetail } from '../../data/solutions'

const easeOutCurve = [0.22, 1, 0.36, 1] as const

function buildSpotlightItems(solution: SolutionDetail) {
  if (solution.id === 'customer-support') {
    return [
      {
        id: 'unified-triage',
        category: 'Unified Omnichannel Queue',
        title: 'WhatsApp, Email & Chat Merged Automatically',
        subtitle: 'Single customer timeline · Zero duplicate tickets',
        description:
          'When a customer messages on WhatsApp after sending an email, PulseQuo merges both threads under one contact profile so agents never ask customers to repeat order details.',
        metric: '< 45s',
        metricLabel: 'Median First Response',
        channel: 'Shared Support Inbox',
        icon: Headphones,
        accentText: 'text-violet-600',
        accentBg: 'bg-violet-50 border-violet-200',
        accentBar: 'from-violet-600 to-indigo-600',
        steps: [
          {
            label: 'Inbound Trigger',
            detail: 'Customer replies on WhatsApp referencing Ticket #4920',
          },
          {
            label: 'Context Sync',
            detail: 'Past email history & Shopify order status attached automatically',
          },
          {
            label: 'Queue Routing',
            detail: 'Routed to Tier-2 Billing specialist with live SLA countdown',
          },
        ],
      },
      {
        id: 'ai-deflection',
        category: 'Autonomous Tier-1 AI Agent',
        title: 'Instant Order Lookups & Policy Answers via MCP',
        subtitle: 'Zero hallucination · Grounded in help center docs',
        description:
          'Autonomous AI resolves routine tracking, refund eligibility, and account status inquiries in under two seconds, escalating complex edge cases with a full conversation summary.',
        metric: '78%',
        metricLabel: 'Tier-1 Ticket Deflection',
        channel: 'AI Agent + MCP Tools',
        icon: Bot,
        accentText: 'text-purple-600',
        accentBg: 'bg-purple-50 border-purple-200',
        accentBar: 'from-purple-600 to-indigo-600',
        steps: [
          {
            label: 'Intent Detection',
            detail: 'Detects refund status request and extracts Order #8841',
          },
          {
            label: 'MCP Tool Call',
            detail: 'Queries live ERP refund ledger in 180ms with strict scope',
          },
          {
            label: 'Resolution',
            detail: 'Delivers verified status & receipt link directly in WhatsApp',
          },
        ],
      },
      {
        id: 'sla-escalation',
        category: 'Live SLA Enforcement',
        title: 'Automated Escalation Before Breach Timers Expire',
        subtitle: 'VIP priority queues · Manager alerts',
        description:
          'Configure custom response and resolution SLAs per customer tier. At-risk tickets surface to shift supervisors before targets slip, keeping enterprise CSAT consistently high.',
        metric: '4.9 / 5',
        metricLabel: 'Verified CSAT Score',
        channel: 'SLA Escalation Engine',
        icon: Radio,
        accentText: 'text-blue-600',
        accentBg: 'bg-blue-50 border-blue-200',
        accentBar: 'from-blue-600 to-indigo-600',
        steps: [
          {
            label: 'Priority Tag',
            detail: 'Enterprise account flagged for 5-minute response SLA',
          },
          {
            label: 'Timer Watch',
            detail: 'Auto-reassigns if primary specialist is at capacity',
          },
          {
            label: 'CSAT Capture',
            detail: '1-tap WhatsApp satisfaction rating logged upon closure',
          },
        ],
      },
      {
        id: 'proactive-updates',
        category: 'Proactive Carrier & Status Alerts',
        title: 'Prevent Inbound Spikes With Real-Time Broadcasts',
        subtitle: 'TRAI DLT & Meta Cloud API verified',
        description:
          'Notify affected customers proactively over WhatsApp and SMS whenever shipment delays or service incidents occur, cutting repetitive "where is my order" calls dramatically.',
        metric: '-62%',
        metricLabel: 'WISMO Ticket Volume',
        channel: 'WhatsApp & SMS CPaaS',
        icon: TrendingUp,
        accentText: 'text-emerald-600',
        accentBg: 'bg-emerald-50 border-emerald-200',
        accentBar: 'from-emerald-600 to-teal-600',
        steps: [
          {
            label: 'Webhook Event',
            detail: 'Carrier reports hub weather delay on 420 active shipments',
          },
          {
            label: 'Template Dispatch',
            detail: 'Pre-approved WhatsApp alert sent with revised ETA',
          },
          {
            label: 'Self-Serve Action',
            detail: 'Customers reschedule delivery slot directly in chat',
          },
        ],
      },
    ]
  }

  return [
    {
      id: 'spotlight-1',
      category: solution.howPulseQuoSolves[0]?.module || 'Communication Cloud',
      title: solution.howPulseQuoSolves[0]?.title || 'Instant Omnichannel Engagement',
      subtitle: `${solution.targetAudience} · Real-time dispatch`,
      description:
        solution.howPulseQuoSolves[0]?.description ||
        'Engage every customer on WhatsApp, SMS, email, and web chat from one synchronized operational inbox.',
      metric: '99.98%',
      metricLabel: 'Delivery Receipt SLA',
      channel: 'WhatsApp & SMPP CPaaS',
      icon: Radio,
      accentText: 'text-blue-600',
      accentBg: 'bg-blue-50 border-blue-200',
      accentBar: 'from-blue-600 to-indigo-600',
      steps: solution.workflowSteps.slice(0, 3).map((w) => ({
        label: `Step 0${w.step}`,
        detail: w.title,
      })),
    },
    {
      id: 'spotlight-2',
      category: solution.howPulseQuoSolves[1]?.module || 'Autonomous AI',
      title: solution.howPulseQuoSolves[1]?.title || 'Grounded Conversational Automation',
      subtitle: 'Model Context Protocol · Zero hallucination',
      description:
        solution.howPulseQuoSolves[1]?.description ||
        'Deploy autonomous AI agents connected to your live business databases and CRM records with sub-2s response latency.',
      metric: '< 1.4s',
      metricLabel: 'AI Response Latency',
      channel: 'AI Agents + MCP',
      icon: Bot,
      accentText: 'text-purple-600',
      accentBg: 'bg-purple-50 border-purple-200',
      accentBar: 'from-purple-600 to-indigo-600',
      steps: solution.workflowSteps.slice(1, 4).map((w) => ({
        label: `Step 0${w.step}`,
        detail: w.title,
      })),
    },
    {
      id: 'spotlight-3',
      category: solution.howPulseQuoSolves[2]?.module || 'Unified CRM',
      title: solution.howPulseQuoSolves[2]?.title || 'Synchronized Pipelines & Routing',
      subtitle: 'Single source of truth across teams',
      description:
        solution.howPulseQuoSolves[2]?.description ||
        'Connect conversational signals straight to pipeline stages, ticket queues, and revenue attribution without manual copy-paste.',
      metric: '+48%',
      metricLabel: 'Operational Velocity',
      channel: 'Unified CRM Engine',
      icon: TrendingUp,
      accentText: 'text-emerald-600',
      accentBg: 'bg-emerald-50 border-emerald-200',
      accentBar: 'from-emerald-600 to-teal-600',
      steps: [
        {
          label: 'Capture',
          detail: 'Syncs every WhatsApp, SMS, and web event to contact record',
        },
        {
          label: 'Qualify',
          detail: 'Scores intent and routes to the right owner automatically',
        },
        {
          label: 'Close',
          detail: 'Tracks measurable ROI from first message to outcome',
        },
      ],
    },
    {
      id: 'spotlight-4',
      category: 'Verified Outcomes',
      title: `Measurable Impact for ${solution.title}`,
      subtitle: 'Enterprise reliability & transparent governance',
      description: `${solution.keyBenefits.slice(0, 2).join('. ')}.`,
      metric: '24 / 7',
      metricLabel: 'Autonomous Coverage',
      channel: 'PulseQuo Platform',
      icon: Headphones,
      accentText: 'text-indigo-600',
      accentBg: 'bg-indigo-50 border-indigo-200',
      accentBar: 'from-indigo-600 to-blue-600',
      steps: [
        {
          label: 'Deploy',
          detail: 'Connect existing Meta Business & DLT numbers without downtime',
        },
        {
          label: 'Automate',
          detail: 'Launch pre-built visual journeys tailored to your KPIs',
        },
        {
          label: 'Scale',
          detail: 'Monitor delivery receipts, SLAs, and conversion live',
        },
      ],
    },
  ]
}

export function SolutionDetailTemplate({ solution }: { solution: SolutionDetail }) {
  const spotlightItems = buildSpotlightItems(solution)
  const [activeIdx, setActiveIdx] = useState(0)
  const activeItem = spotlightItems[activeIdx] || spotlightItems[0]
  const ActiveIcon = activeItem.icon

  return (
    <div className="relative bg-white text-slate-900 selection:bg-blue-600 selection:text-white">
      <SEO
        title={`${solution.title} | PulseQuo`}
        description={solution.heroDescription}
        canonicalPath={`/solutions/${solution.slug}`}
      />
      <section
        data-cursor-zone="hero"
        className="relative overflow-hidden bg-white pt-10 pb-14 sm:pt-14 sm:pb-18"
      >
        <BackgroundAnimation variant="hero" showGrid={true} showBeams={true} />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: 'Solutions', href: '/solutions' },
              { label: solution.title },
            ]}
            className="mb-8"
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: easeOutCurve }}
            className="max-w-3xl"
          >
            <h1 className="text-3xl sm:text-4xl lg:text-[46px] xl:text-[52px] font-black text-slate-900 tracking-[-0.03em] leading-[1.16] text-balance">
              {solution.heroHeadline}
            </h1>

            <p className="mt-5 text-base sm:text-lg text-slate-600 leading-relaxed font-normal text-pretty">
              {solution.heroDescription}
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <Link
                to="/book-demo"
                className="btn-shine w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-800 rounded-xl transition-all shadow-md shadow-blue-500/20 whitespace-nowrap"
              >
                <CalendarCheck className="size-4 shrink-0" />
                <span>Book a Personalized Demo</span>
              </Link>
              <Link
                to="/pricing"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-bold text-slate-700 bg-white hover:bg-slate-50 border border-slate-300 rounded-xl transition-all shadow-2xs whitespace-nowrap"
              >
                <span>View Plans &amp; Pricing</span>
                <ArrowRight className="size-4 shrink-0" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <BrandCarousel />

      <section className="py-14 sm:py-18 section-fade-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title={`PulseQuo in Action for ${solution.title}`}
            description="Select a live operational playbook below to inspect how PulseQuo orchestrates triggers, context sync, and resolution."
          />

          <CardSectionHydrator
            resetKey={solution.id}
            ariaLabel={`Loading ${solution.title} operational playbooks`}
            skeleton={<ActionSpotlightSkeleton />}
          >
            <div className="mt-10 sm:mt-12 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
              <div className="lg:col-span-5 flex flex-col gap-3">
                {spotlightItems.map((item, idx) => {
                  const isSelected = idx === activeIdx
                  const ItemIcon = item.icon
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setActiveIdx(idx)}
                      className={`w-full text-left rounded-2xl border p-4 sm:p-5 transition-all duration-200 cursor-pointer flex items-start gap-3.5 ${
                        isSelected
                          ? 'bg-white border-blue-500 ring-2 ring-blue-600/12 shadow-lg shadow-blue-950/6'
                          : 'bg-slate-50/75 border-slate-200/90 hover:bg-white hover:border-blue-300/80'
                      }`}
                    >
                      <div
                        className={`size-10 rounded-xl border flex items-center justify-center shrink-0 mt-0.5 transition-transform duration-200 ${
                          isSelected ? 'scale-105' : ''
                        } ${item.accentBg} ${item.accentText}`}
                      >
                        <ItemIcon className="size-5" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center justify-between gap-2">
                          <span className="text-[11px] font-semibold text-slate-500 truncate">
                            0{idx + 1} · {item.category}
                          </span>
                          <span className={`text-xs font-mono font-black tabular-nums shrink-0 ${item.accentText}`}>
                            {item.metric}
                          </span>
                        </div>
                        <h3
                          className={`mt-1 text-sm sm:text-base font-bold leading-snug ${
                            isSelected ? 'text-slate-900' : 'text-slate-700'
                          }`}
                        >
                          {item.title}
                        </h3>
                      </div>
                    </button>
                  )
                })}
              </div>

              <div className="lg:col-span-7 flex">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeItem.id}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.28, ease: easeOutCurve }}
                    className="w-full rounded-2xl border border-slate-200/90 bg-white shadow-xl shadow-slate-900/5 overflow-hidden flex flex-col justify-between"
                  >
                    <div className={`h-1.5 w-full bg-gradient-to-r ${activeItem.accentBar}`} />
                    <div className="p-6 sm:p-8 flex flex-col flex-1 justify-between">
                      <div>
                        <div className="flex flex-wrap items-start justify-between gap-4 pb-5 border-b border-slate-100">
                          <div className="flex items-start gap-3.5 min-w-0">
                            <div
                              className={`size-11 rounded-xl border flex items-center justify-center shrink-0 ${activeItem.accentBg} ${activeItem.accentText}`}
                            >
                              <ActiveIcon className="size-5.5" />
                            </div>
                            <div>
                              <p className="text-xs font-semibold text-slate-500">
                                {activeItem.category} · {activeItem.channel}
                              </p>
                              <h3 className="mt-1 text-xl sm:text-2xl font-black text-slate-900 tracking-tight leading-snug">
                                {activeItem.title}
                              </h3>
                              <p className="mt-1 text-xs text-slate-500 font-medium">
                                {activeItem.subtitle}
                              </p>
                            </div>
                          </div>

                          <div className="rounded-xl bg-slate-50 border border-slate-200/80 px-4 py-2.5 text-left sm:text-right shrink-0">
                            <span
                              className={`text-2xl font-black font-mono tabular-nums block leading-none ${activeItem.accentText}`}
                            >
                              {activeItem.metric}
                            </span>
                            <span className="text-[11px] font-medium text-slate-500 block mt-1">
                              {activeItem.metricLabel}
                            </span>
                          </div>
                        </div>

                        <p className="mt-5 text-sm sm:text-base text-slate-600 leading-relaxed">
                          {activeItem.description}
                        </p>

                        <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
                          {activeItem.steps.map((s, sIdx) => (
                            <div
                              key={sIdx}
                              className="rounded-xl bg-slate-50/90 border border-slate-200/80 p-3.5 flex flex-col justify-between"
                            >
                              <span className="text-[11px] font-mono font-bold text-blue-600">
                                0{sIdx + 1}. {s.label}
                              </span>
                              <p className="mt-1.5 text-xs text-slate-700 leading-relaxed font-medium">
                                {s.detail}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="mt-6 pt-5 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
                        <span className="text-xs text-slate-500 font-medium">
                          Ready to deploy this workflow for your team?
                        </span>
                        <Link
                          to="/book-demo"
                          className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-blue-600 hover:text-blue-700 transition-colors whitespace-nowrap"
                        >
                          <span>See it live in a demo</span>
                          <ArrowRight className="size-4" />
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </CardSectionHydrator>
        </div>
      </section>

      <section className="py-14 sm:py-18 section-fade-tint">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="The Challenges Teams Face Today"
            description="Traditional disconnected tools create bottlenecks, slow down response latency, and lose critical customer context."
          />

          <div className="mt-10 sm:mt-12">
            <HorizontalCardCarousel
              mode="mobile"
              itemCount={solution.challenges.length}
              ariaLabel="Operational challenges"
              counterLabel="Swipe challenges"
              desktopGridClassName="lg:grid lg:grid-cols-3 lg:gap-7 lg:overflow-visible"
              skeletonVariant="challenge"
            >
              {solution.challenges.map((c, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.45, delay: i * 0.07, ease: easeOutCurve }}
                  className="snap-start shrink-0 w-[82vw] max-w-[320px] sm:w-[340px] lg:w-auto lg:max-w-none rounded-2xl border border-slate-200 bg-white p-6 sm:p-7 shadow-xs hover:border-slate-300 hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex size-11 items-center justify-center rounded-xl bg-rose-50 text-rose-600 mb-5 border border-rose-100">
                      <AlertTriangle className="size-5.5" />
                    </div>
                    <h4 className="text-lg font-bold text-slate-900 leading-snug">{c.problem}</h4>
                    <p className="mt-2.5 text-sm text-slate-600 leading-relaxed font-normal">{c.impact}</p>
                  </div>
                </motion.div>
              ))}
            </HorizontalCardCarousel>
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-18 section-fade-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="How PulseQuo Solves These Challenges"
            description="Our integrated architecture connects communications, data, and automation into a unified operational engine."
          />

          <div className="mt-10 sm:mt-12">
            <HorizontalCardCarousel
              mode="mobile"
              itemCount={solution.howPulseQuoSolves.length}
              ariaLabel="How PulseQuo solves operational challenges"
              counterLabel="Swipe capabilities"
              desktopGridClassName="lg:grid lg:grid-cols-3 lg:gap-7 lg:overflow-visible"
              skeletonVariant="challenge"
            >
              {solution.howPulseQuoSolves.map((s, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.45, delay: i * 0.07, ease: easeOutCurve }}
                  className="snap-start shrink-0 w-[82vw] max-w-[320px] sm:w-[340px] lg:w-auto lg:max-w-none rounded-2xl border border-slate-200 bg-slate-50/50 p-6 sm:p-7 hover:border-blue-300 hover:bg-white hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex size-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600 mb-5 border border-blue-100">
                      <Sparkles className="size-5.5" />
                    </div>
                    <span className="text-xs font-semibold text-blue-600">
                      {s.module}
                    </span>
                    <h4 className="mt-1.5 text-lg font-bold text-slate-900 leading-snug">{s.title}</h4>
                    <p className="mt-2.5 text-sm text-slate-600 leading-relaxed font-normal">{s.description}</p>
                  </div>
                </motion.div>
              ))}
            </HorizontalCardCarousel>
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-18 bg-[#070d24] text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            dark
            title="Example Workflow: From Trigger to Resolution"
            description="See the step-by-step lifecycle of how customer interactions are handled autonomously."
          />

          <div className="mt-10 sm:mt-12">
            <HorizontalCardCarousel
              mode="mobile"
              itemCount={solution.workflowSteps.length}
              ariaLabel="Example workflow steps"
              counterLabel="Swipe workflow"
              desktopGridClassName="lg:grid lg:grid-cols-4 lg:gap-6 lg:overflow-visible"
              skeletonVariant="dark-step"
              skeletonDark={true}
            >
              {solution.workflowSteps.map((step, idx) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.45, delay: idx * 0.07, ease: easeOutCurve }}
                  className="snap-start shrink-0 w-[80vw] max-w-[300px] sm:w-[320px] lg:w-auto lg:max-w-none rounded-2xl bg-slate-900/90 border border-slate-800 p-6 flex flex-col justify-between hover:border-blue-500/50 transition-all shadow-lg"
                >
                  <div>
                    <span className="inline-flex size-9 items-center justify-center rounded-lg bg-blue-600 text-white font-mono font-bold text-sm mb-4 shadow-xs">
                      0{step.step}
                    </span>
                    <h4 className="text-base font-bold text-white leading-snug">{step.title}</h4>
                    <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </HorizontalCardCarousel>
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-18 section-fade-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Trusted Across Growth Stages"
            description="See how companies scale their operational efficiency with PulseQuo."
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

      <section className="py-14 sm:py-18 section-fade-tint">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Key Business Benefits"
            description="Achieve predictable efficiency and higher customer satisfaction."
          />

          <CardSectionHydrator
            resetKey={solution.id}
            ariaLabel="Loading key business benefits"
            className="mt-10 max-w-5xl mx-auto"
            skeleton={
              <CardGridSkeleton
                count={solution.keyBenefits.length}
                variant="benefit-row"
                columnsClassName="grid-cols-1 sm:grid-cols-2 gap-4"
              />
            }
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {solution.keyBenefits.map((b, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-30px' }}
                  transition={{ duration: 0.4, delay: i * 0.05, ease: easeOutCurve }}
                  className="flex items-start gap-3 rounded-xl border border-slate-200/90 p-5 bg-white shadow-2xs hover:border-blue-300 transition-all"
                >
                  <CheckCircle2 className="size-5 shrink-0 text-emerald-600 mt-0.5" />
                  <span className="text-sm font-semibold text-slate-800 leading-snug">{b}</span>
                </motion.div>
              ))}
            </div>
          </CardSectionHydrator>
        </div>
      </section>

      <CTASection
        headline={`Ready to Transform Your ${solution.title}?`}
        subheadline="Talk to our product specialists to see how PulseQuo can be customized for your exact workflows and KPIs."
        primaryCtaText="Book a Demo"
        secondaryCtaText="Explore Documentation"
        secondaryCtaHref="/developers"
      />
    </div>
  )
}
