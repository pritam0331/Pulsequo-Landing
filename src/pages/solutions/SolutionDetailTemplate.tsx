/**
 * Shared Solution Detail Template
 * Provides structured landing page for:
 * Customer Support, Sales Teams, Marketing Teams, Startups, and Enterprises.
 * Includes Card Fanout, Brand Carousel, Testimonial Carousel, Ambient Background, and fade-in effects.
 */

import { Link } from 'react-router'
import { motion } from 'motion/react'
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
import { BackgroundAnimation } from '../../components/common/BackgroundAnimation'
import { BrandCarousel } from '../../components/common/BrandCarousel'
import { CardFanout } from '../../components/common/CardFanout'
import { TestimonialsCarousel } from '../../components/common/TestimonialsCarousel'
import { CTASection } from '../../components/common/CTASection'
import type { SolutionDetail } from '../../data/solutions'

const easeOutCurve = [0.22, 1, 0.36, 1] as const

export function SolutionDetailTemplate({ solution }: { solution: SolutionDetail }) {
  return (
    <div className="relative bg-white text-slate-900 selection:bg-blue-600 selection:text-white">
      <SEO
        title={`${solution.title} | PulseQuo`}
        description={solution.heroDescription}
        canonicalPath={`/solutions/${solution.slug}`}
      />

      {/* ─────────────────────────────────────────────────────────────
          1. HERO SECTION: AMBIENT LIGHTING & STAGGERED FADE-IN
         ───────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-white pt-10 pb-16 sm:pt-14 sm:pb-20 border-b border-slate-100">
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
            <div className="inline-flex items-center gap-2.5 mb-5">
              <span className="h-[2px] w-6 rounded-full bg-blue-600" />
              <span className="text-xs font-semibold tracking-wide text-blue-600">
                Target Role & Scope · {solution.targetAudience}
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-[-0.035em] leading-[1.08] text-balance">
              {solution.heroHeadline}
            </h1>

            <p className="mt-6 text-base sm:text-lg text-slate-600 leading-relaxed font-normal text-pretty">
              {solution.heroDescription}
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center gap-3.5">
              <Link
                to="/book-demo"
                className="btn-shine w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-800 rounded-xl transition-all shadow-md shadow-blue-500/20"
              >
                <CalendarCheck className="size-4" />
                <span>Book a Personalized Demo</span>
              </Link>
              <Link
                to="/pricing"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-bold text-slate-700 bg-white hover:bg-slate-50 border border-slate-300 rounded-xl transition-all shadow-2xs"
              >
                <span>View Plans & Pricing</span>
                <ArrowRight className="size-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          2. BRAND TRUST MARQUEE CAROUSEL
         ───────────────────────────────────────────────────────────── */}
      <BrandCarousel />

      {/* ─────────────────────────────────────────────────────────────
          3. CARD FANOUT SHOWCASE
         ───────────────────────────────────────────────────────────── */}
      <section className="py-12 sm:py-16 bg-white border-b border-slate-200/80 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <CardFanout
            headline={`PulseQuo in Action for ${solution.title}`}
            subheadline="See how conversational alerts, autonomous AI routing, and multi-channel pipelines synchronize to streamline operations."
          />
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          4. CHALLENGES SECTION
         ───────────────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-20 bg-slate-50/70 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Operational Pain Points"
            title="The Challenges Teams Face Today"
            description="Traditional disconnected tools create bottlenecks, slow down response latency, and lose critical customer context."
          />

          <div className="mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {solution.challenges.map((c, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.45, delay: i * 0.08, ease: easeOutCurve }}
                className="rounded-2xl border border-slate-200 bg-white p-7 shadow-xs hover:border-slate-300 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex size-12 items-center justify-center rounded-xl bg-rose-50 text-rose-600 mb-6 border border-rose-100">
                    <AlertTriangle className="size-6" />
                  </div>
                  <h4 className="text-lg font-bold text-slate-900">{c.problem}</h4>
                  <p className="mt-3 text-sm text-slate-600 leading-relaxed font-normal">{c.impact}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          5. HOW PULSEQUO SOLVES IT
         ───────────────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-20 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="The Solution"
            title="How PulseQuo Solves These Challenges"
            description="Our integrated architecture connects communications, data, and automation into a unified operational engine."
          />

          <div className="mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {solution.howPulseQuoSolves.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.45, delay: i * 0.08, ease: easeOutCurve }}
                className="rounded-2xl border border-slate-200 bg-slate-50/50 p-7 hover:border-blue-300 hover:bg-white hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex size-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600 mb-6 border border-blue-100">
                    <Sparkles className="size-6" />
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-blue-600 font-mono">
                    {s.module}
                  </span>
                  <h4 className="mt-2 text-lg font-bold text-slate-900">{s.title}</h4>
                  <p className="mt-3 text-sm text-slate-600 leading-relaxed font-normal">{s.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          6. EXAMPLE WORKFLOW SEQUENCE
         ───────────────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-20 bg-[#070d24] border-b border-slate-800 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            dark
            badge="Execution Architecture"
            title="Example Workflow: From Trigger to Resolution"
            description="See the step-by-step lifecycle of how customer interactions are handled autonomously."
          />

          <div className="mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-4 gap-6">
            {solution.workflowSteps.map((step, idx) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.45, delay: idx * 0.08, ease: easeOutCurve }}
                className="rounded-2xl bg-slate-900/90 border border-slate-800 p-6 flex flex-col justify-between hover:border-blue-500/50 transition-all shadow-lg"
              >
                <div>
                  <span className="inline-flex size-9 items-center justify-center rounded-lg bg-blue-600 text-white font-mono font-bold text-sm mb-4 shadow-xs">
                    0{step.step}
                  </span>
                  <h4 className="text-base font-bold text-white">{step.title}</h4>
                  <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          7. CUSTOMER TESTIMONIALS CAROUSEL
         ───────────────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-20 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="MEASURABLE IMPACT"
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

      {/* ─────────────────────────────────────────────────────────────
          8. KEY BENEFITS
         ───────────────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-20 bg-slate-50/70 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Measurable Value"
            title="Key Business Benefits"
            description="Achieve predictable efficiency and higher customer satisfaction."
          />

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-4xl mx-auto">
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
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          9. CLOSING CTA
         ───────────────────────────────────────────────────────────── */}
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
