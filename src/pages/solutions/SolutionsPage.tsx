/**
 * Solutions Overview Page
 * Route: /solutions
 * Landing page with Card Fanout, Brand Carousel, Testimonial Carousel, and Ambient Background.
 */

import { Link } from 'react-router'
import { motion } from 'motion/react'
import {
  TrendingUp,
  Headphones,
  Sparkles,
  Users,
  Building2,
  ArrowRight,
  CheckCircle2,
  CalendarCheck,
} from 'lucide-react'
import { SEO } from '../../components/common/SEO'
import { Breadcrumbs } from '../../components/common/Breadcrumbs'
import { SectionHeading } from '../../components/common/SectionHeading'
import { BackgroundAnimation } from '../../components/common/BackgroundAnimation'
import { BrandCarousel } from '../../components/common/BrandCarousel'
import { CardFanout } from '../../components/common/CardFanout'
import { TestimonialsCarousel } from '../../components/common/TestimonialsCarousel'
import { CTASection } from '../../components/common/CTASection'
import { solutionsData } from '../../data/solutions'

const easeOutCurve = [0.22, 1, 0.36, 1] as const

export function SolutionsPage() {
  const list = Object.values(solutionsData)

  const icons = {
    'sales-teams': TrendingUp,
    'customer-support': Headphones,
    'marketing-teams': Sparkles,
    startups: Users,
    enterprises: Building2,
  }

  return (
    <div className="relative bg-white text-slate-900 selection:bg-blue-600 selection:text-white">
      <SEO
        title="Solutions by Team & Business Size | PulseQuo"
        description="Discover how PulseQuo powers sales velocity, transforms customer support, drives high-converting marketing campaigns, and scales startups and enterprises."
        canonicalPath="/solutions"
      />

      {/* ─────────────────────────────────────────────────────────────
          1. HERO SECTION: AMBIENT LIGHTING & STAGGERED FADE-IN
         ───────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-white pt-10 pb-16 sm:pt-14 sm:pb-20 border-b border-slate-100">
        <BackgroundAnimation variant="hero" showGrid={true} showBeams={true} />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <Breadcrumbs items={[{ label: 'Solutions' }]} className="justify-center mb-6" />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: easeOutCurve }}
          >
            <div className="inline-flex items-center gap-2.5 mb-5">
              <span className="h-[2px] w-6 rounded-full bg-blue-600" />
              <span className="text-xs font-semibold tracking-wide text-blue-600">
                Tailored Operational Solutions for Every Team
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-[-0.035em] leading-[1.08] text-balance">
              Engineered for your team's{' '}
              <span className="text-gradient-hero">
                specific operational goals.
              </span>
            </h1>

            <p className="mt-6 text-base sm:text-lg text-slate-600 leading-relaxed font-normal text-pretty">
              Whether accelerating sales pipeline velocity, resolving support tickets faster, or broadcasting compliant
              WhatsApp campaigns, PulseQuo adapts to your exact operational requirements.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5">
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
                <span>Compare Plans</span>
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
            headline="Tailored Workflows Across All Departments"
            subheadline="Explore how sales, support, marketing, and operations coordinate around single customer identities."
          />
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          4. SOLUTIONS DIRECTORY CARDS
         ───────────────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-20 bg-slate-50/70 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="TEAM & COMPANY USE CASES"
            title="Explore Solutions Tailored to Your Growth"
            description="Deep dive into specialized playbooks, automated journeys, and integrations designed for your department."
          />

          <div className="mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {list.map((solution, idx) => {
              const Icon = icons[solution.id as keyof typeof icons] || TrendingUp
              return (
                <motion.div
                  key={solution.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.45, delay: idx * 0.08, ease: easeOutCurve }}
                  className="rounded-2xl border border-slate-200 bg-white p-7 flex flex-col justify-between hover:border-blue-400 hover:shadow-md transition-all duration-300 group"
                >
                  <div>
                    <div className="flex size-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600 mb-5 border border-blue-100 group-hover:scale-105 transition-transform">
                      <Icon className="size-6" />
                    </div>

                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400">
                      {solution.targetAudience}
                    </span>

                    <h3 className="mt-1.5 text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                      {solution.title}
                    </h3>

                    <p className="mt-2.5 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                      {solution.heroDescription}
                    </p>

                    <div className="mt-6 border-t border-slate-100 pt-5">
                      <p className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400 mb-2">
                        Key Solves
                      </p>
                      <ul className="space-y-1.5">
                        {solution.keyBenefits.slice(0, 3).map((b, i) => (
                          <li key={i} className="flex items-start gap-2 text-xs text-slate-700">
                            <CheckCircle2 className="size-3.5 shrink-0 text-blue-600 mt-0.5" />
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-7 pt-4 border-t border-slate-100">
                    <Link
                      to={`/solutions/${solution.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-700 transition-colors"
                    >
                      <span>Explore {solution.title}</span>
                      <ArrowRight className="size-3.5" />
                    </Link>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          5. CUSTOMER TESTIMONIALS CAROUSEL
         ───────────────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-20 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="CUSTOMER STORIES"
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

      {/* ─────────────────────────────────────────────────────────────
          6. CLOSING CTA
         ───────────────────────────────────────────────────────────── */}
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
