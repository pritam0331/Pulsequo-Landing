/**
 * Shared Solution Detail Template
 * Provides structured sections for Challenges, Solves, Workflow, Benefits, and Modules.
 */

import { Link } from 'react-router'
import {
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  CalendarCheck,
  Sparkles,
} from 'lucide-react'
import { SEO } from '../../components/common/SEO'
import { Breadcrumbs } from '../../components/common/Breadcrumbs'
import { SectionHeading } from '../../components/common/SectionHeading'
import { CTASection } from '../../components/common/CTASection'
import type { SolutionDetail } from '../../data/solutions'

export function SolutionDetailTemplate({ solution }: { solution: SolutionDetail }) {
  return (
    <div className="relative">
      <SEO
        title={`${solution.title} | PulseQuo`}
        description={solution.heroDescription}
        canonicalPath={`/solutions/${solution.slug}`}
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-blue-50/70 via-white to-white pt-10 pb-20 sm:pt-16 sm:pb-28 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: 'Solutions', href: '/solutions' },
              { label: solution.title },
            ]}
            className="mb-8"
          />

          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-100/80 border border-blue-200 px-3.5 py-1 text-xs font-semibold text-blue-800 mb-6">
              <span>Target Audience: {solution.targetAudience}</span>
            </span>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.15]">
              {solution.heroHeadline}
            </h1>

            <p className="mt-6 text-base sm:text-lg text-slate-600 leading-relaxed">
              {solution.heroDescription}
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
              <Link
                to="/book-demo"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-800 rounded-xl transition-all shadow-md shadow-blue-500/20"
              >
                <CalendarCheck className="size-4" />
                <span>Book a Demo</span>
              </Link>
              <Link
                to="/pricing"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-semibold text-slate-700 bg-white hover:bg-slate-50 border border-slate-300 rounded-xl transition-all"
              >
                <span>View Plans & Pricing</span>
                <ArrowRight className="size-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Challenges Section */}
      <section className="py-20 bg-slate-50 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Operational Pain Points"
            title="The Challenges Teams Face Today"
            description="Traditional disconnected tools create bottlenecks, slow down response latency, and lose critical customer context."
          />

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            {solution.challenges.map((c, i) => (
              <div key={i} className="rounded-3xl border border-slate-200 bg-white p-8 shadow-xs">
                <div className="flex size-12 items-center justify-center rounded-2xl bg-rose-50 text-rose-600 mb-6">
                  <AlertTriangle className="size-6" />
                </div>
                <h4 className="text-lg font-bold text-slate-900">{c.problem}</h4>
                <p className="mt-3 text-sm text-slate-600 leading-relaxed">{c.impact}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How PulseQuo Solves It */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="The Solution"
            title="How PulseQuo Solves These Challenges"
            description="Our integrated architecture connects communications, data, and automation into a unified operational engine."
          />

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            {solution.howPulseQuoSolves.map((s, i) => (
              <div key={i} className="rounded-3xl border border-slate-200/90 bg-white p-8 hover:border-blue-300 transition-all">
                <div className="flex size-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 mb-6">
                  <Sparkles className="size-6" />
                </div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-blue-600">
                  {s.module}
                </span>
                <h4 className="mt-2 text-lg font-bold text-slate-900">{s.title}</h4>
                <p className="mt-3 text-sm text-slate-600 leading-relaxed">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Example Workflow Sequence */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            dark
            badge="Execution Architecture"
            title="Example Workflow: From Trigger to Resolution"
            description="See the step-by-step lifecycle of how customer interactions are handled autonomously."
          />

          <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-6">
            {solution.workflowSteps.map((step) => (
              <div key={step.step} className="rounded-2xl bg-slate-950/80 border border-slate-800 p-6 flex flex-col justify-between">
                <div>
                  <span className="inline-flex size-9 items-center justify-center rounded-xl bg-blue-600 text-white font-mono font-bold text-sm mb-4">
                    0{step.step}
                  </span>
                  <h4 className="text-base font-bold text-white">{step.title}</h4>
                  <p className="mt-2 text-xs sm:text-sm text-slate-400 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Measurable Value"
            title="Key Business Benefits"
            description="Achieve predictable efficiency and higher customer satisfaction."
          />

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {solution.keyBenefits.map((b, i) => (
              <div key={i} className="flex items-start gap-3 rounded-2xl border border-slate-200/90 p-5 bg-slate-50/50">
                <CheckCircle2 className="size-5 shrink-0 text-emerald-600 mt-0.5" />
                <span className="text-sm font-semibold text-slate-800 leading-snug">{b}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recommended Products */}
      <section className="py-20 bg-slate-50 border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Recommended Product Modules"
            title="The Products Powering This Solution"
            description="Explore the underlying PulseQuo platforms configured for this use case."
          />

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            {solution.recommendedProducts.map((p, i) => (
              <div key={i} className="rounded-2xl bg-white border border-slate-200 p-6 flex flex-col justify-between shadow-xs">
                <div>
                  <h4 className="text-lg font-bold text-slate-900">{p.name}</h4>
                  <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">{p.reason}</p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-100">
                  <Link to={p.href} className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 hover:underline">
                    <span>Learn about {p.name}</span>
                    <ArrowRight className="size-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <CTASection
        headline={`Transform Your ${solution.title.replace('Solutions for ', '')} with PulseQuo`}
        subheadline="Our team is ready to walk you through a tailored demo configured to your company's workflow."
        primaryCtaText="Get Started"
        secondaryCtaText="Book a Demo"
        secondaryCtaHref="/book-demo"
      />
    </div>
  )
}
