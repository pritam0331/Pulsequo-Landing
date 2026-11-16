/**
 * Solutions Overview Page
 * Route: /solutions
 */

import { Link } from 'react-router'
import {
  TrendingUp,
  Headphones,
  Sparkles,
  Users,
  Building2,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react'
import { SEO } from '../../components/common/SEO'
import { Breadcrumbs } from '../../components/common/Breadcrumbs'
import { CTASection } from '../../components/common/CTASection'
import { ScrollReveal, StaggerItem } from '../../components/common/ScrollReveal'
import { solutionsData } from '../../data/solutions'

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
    <div className="relative">
      <SEO
        title="Solutions by Team & Business Size | PulseQuo"
        description="Discover how PulseQuo powers sales velocity, transforms customer support, drives high-converting marketing campaigns, and scales startups and enterprises."
        canonicalPath="/solutions"
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-blue-50/70 via-white to-white pt-10 pb-20 border-b border-slate-100">
        <ScrollReveal direction="up" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <Breadcrumbs items={[{ label: 'Solutions' }]} className="justify-center mb-6" />

          <span className="inline-flex items-center gap-1.5 rounded-md bg-blue-100/80 border border-blue-200 px-3 py-1 text-xs font-semibold text-blue-800 mb-6">
            <span>Tailored Enterprise Solutions</span>
          </span>

          <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Engineered for Your Team's Specific Operational Goals
          </h1>

          <p className="mt-6 text-base sm:text-lg text-slate-600 leading-relaxed">
            Whether accelerating sales pipeline velocity, resolving support tickets faster, or broadcasting compliant
            WhatsApp campaigns, PulseQuo adapts to your exact operational requirements.
          </p>
        </ScrollReveal>
      </section>

      {/* Solutions Cards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {list.map((solution, idx) => {
              const Icon = icons[solution.id as keyof typeof icons] || TrendingUp
              return (
                <StaggerItem
                  key={solution.id}
                  index={idx}
                  className="rounded-3xl border border-slate-200/90 bg-white p-8 flex flex-col justify-between hover:border-blue-400/80 hover:shadow-2xl transition-all duration-300 group"
                >
                  <div>
                    <div className="flex size-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 mb-6 group-hover:scale-105 transition-transform">
                      <Icon className="size-7" />
                    </div>

                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      {solution.targetAudience}
                    </span>

                    <h3 className="mt-2 text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">{solution.title}</h3>

                    <p className="mt-3 text-sm text-slate-600 leading-relaxed">{solution.heroDescription}</p>

                    <div className="mt-6 border-t border-slate-100 pt-6">
                      <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Key Solves</p>
                      <ul className="mt-3 space-y-2">
                        {solution.keyBenefits.slice(0, 3).map((b, i) => (
                          <li key={i} className="flex items-start gap-2 text-xs text-slate-700">
                            <CheckCircle2 className="size-4 shrink-0 text-blue-600 mt-0.5" />
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-8 pt-4">
                    <Link
                      to={`/solutions/${solution.slug}`}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors"
                    >
                      <span>Explore {solution.title}</span>
                      <ArrowRight className="size-4" />
                    </Link>
                  </div>
                </StaggerItem>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        headline="Ready to Accelerate Your Customer Experience?"
        subheadline="Talk to our solution architects about mapping PulseQuo to your company’s workflow."
        primaryCtaText="Explore Platform"
        secondaryCtaText="Book a Demo"
        secondaryCtaHref="/book-demo"
      />
    </div>
  )
}
