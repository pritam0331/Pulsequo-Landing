import { Link } from 'react-router'
import { motion } from 'motion/react'
import {
  ArrowRight,
  Building2,
  CalendarCheck,
  CheckCircle2,
  Headphones,
  Sparkles,
  TrendingUp,
  Users,
} from 'lucide-react'
import { SEO } from '../../components/common/SEO'
import { Breadcrumbs } from '../../components/common/Breadcrumbs'
import { BackgroundAnimation } from '../../components/common/BackgroundAnimation'
import { BrandCarousel } from '../../components/common/BrandCarousel'
import { CardFanout } from '../../components/common/CardFanout'
import { SectionHeading } from '../../components/common/SectionHeading'
import { HorizontalCardCarousel } from '../../components/common/HorizontalCardCarousel'
import { TestimonialsCarousel } from '../../components/common/TestimonialsCarousel'
import { CTASection } from '../../components/common/CTASection'
import { solutionsData } from '../../data/solutions'

const easeOutCurve = [0.22, 1, 0.36, 1] as const

const SOLUTION_ICONS = {
  'sales-teams': TrendingUp,
  'customer-support': Headphones,
  'marketing-teams': Sparkles,
  startups: Users,
  enterprises: Building2,
} as const

export function SolutionsPage() {
  const list = Object.values(solutionsData)
  const icons = SOLUTION_ICONS

  return (
    <div className="relative bg-white text-slate-900 selection:bg-blue-600 selection:text-white">
      <SEO
        title="Solutions by Team & Business Size | PulseQuo"
        description="Discover how PulseQuo powers sales velocity, transforms customer support, drives high-converting marketing campaigns, and scales startups and enterprises."
        canonicalPath="/solutions"
      />
      <section
        data-cursor-zone="hero"
        className="relative overflow-hidden bg-white pt-10 pb-14 sm:pt-14 sm:pb-18"
      >
        <BackgroundAnimation variant="hero" showGrid={true} showBeams={true} />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'Solutions' }]} className="mb-6" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: easeOutCurve }}
              className="lg:col-span-6 text-left"
            >
              <h1 className="text-3xl sm:text-4xl lg:text-[42px] xl:text-[50px] font-black text-slate-900 tracking-[-0.03em] leading-[1.16] text-balance">
                Engineered for your team&apos;s{' '}
                <span className="text-gradient-hero">specific operational goals.</span>
              </h1>

              <p className="mt-5 text-base sm:text-lg text-slate-600 leading-relaxed font-normal max-w-xl text-pretty">
                Whether accelerating sales pipeline velocity, resolving support tickets faster, or broadcasting compliant WhatsApp campaigns, PulseQuo adapts to your exact operational requirements.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
                <Link
                  to="/book-demo"
                  className="btn-shine w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-800 rounded-xl transition-all shadow-md shadow-blue-500/20 whitespace-nowrap"
                >
                  <CalendarCheck className="size-4 shrink-0" />
                  <span>Book a Personalized Demo</span>
                </Link>

                <Link
                  to="/pricing"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-bold text-slate-700 bg-white hover:bg-slate-50 border border-slate-300 rounded-xl transition-all shadow-2xs whitespace-nowrap"
                >
                  <span>Compare Plans</span>
                  <ArrowRight className="size-4 shrink-0" />
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: easeOutCurve }}
              className="lg:col-span-6 w-full"
            >
              <CardFanout
                hideHeader={true}
                compact={true}
                headline="Tailored Workflows Across All Departments"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <BrandCarousel />

      <section className="py-14 sm:py-18 section-fade-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Explore Solutions Tailored to Your Growth"
            description="Deep dive into specialized playbooks, automated journeys, and integrations designed for your department."
          />

          <div className="mt-10 sm:mt-12">
            <HorizontalCardCarousel
              mode="always"
              itemCount={list.length}
              ariaLabel="Solutions directory"
              counterLabel="Department Solutions"
              skeletonVariant="solution-directory"
            >
              {list.map((solution, idx) => {
                const Icon = icons[solution.id as keyof typeof icons] || TrendingUp
                return (
                  <motion.div
                    key={solution.id}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-40px' }}
                    transition={{ duration: 0.45, delay: Math.min(idx * 0.06, 0.2), ease: easeOutCurve }}
                    className="snap-start shrink-0 w-[84vw] max-w-[330px] sm:w-[360px] lg:w-[380px] rounded-2xl border border-slate-200/90 bg-white p-6 sm:p-7 flex flex-col justify-between hover:border-blue-400 hover:shadow-md transition-all duration-300 group"
                  >
                    <div>
                      <div className="flex size-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600 mb-4 border border-blue-100 group-hover:scale-105 transition-transform">
                        <Icon className="size-5.5" />
                      </div>

                      <p className="text-xs font-medium text-slate-500">
                        {solution.targetAudience}
                      </p>

                      <h3 className="mt-1.5 text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                        {solution.title}
                      </h3>

                      <p className="mt-2.5 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                        {solution.heroDescription}
                      </p>

                      <div className="mt-5 border-t border-slate-100 pt-4">
                        <p className="text-[11px] font-semibold text-slate-400 mb-2.5">
                          Key Outcomes
                        </p>
                        <ul className="space-y-2">
                          {solution.keyBenefits.slice(0, 3).map((b, i) => (
                            <li key={i} className="flex items-start gap-2 text-xs text-slate-700">
                              <CheckCircle2 className="size-3.5 shrink-0 text-blue-600 mt-0.5" />
                              <span className="leading-snug">{b}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="mt-6 pt-4 border-t border-slate-100">
                      <Link
                        to={`/solutions/${solution.slug}`}
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-700 transition-colors"
                      >
                        <span>Explore {solution.title}</span>
                        <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </div>
                  </motion.div>
                )
              })}
            </HorizontalCardCarousel>
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-18 section-fade-tint">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Trusted by Fast-Growing Companies"
            description="See how revenue and support teams achieve quantifiable growth with PulseQuo."
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

      <CTASection
        headline="Ready to Accelerate Your Customer Experience?"
        subheadline="Join forward-thinking businesses using PulseQuo to unify omnichannel messaging, automate sales pipelines, and scale customer support with AI."
        primaryCtaText="Book a Personalized Demo"
        secondaryCtaText="Explore Developer APIs"
        secondaryCtaHref="/developers"
      />
    </div>
  )
}
