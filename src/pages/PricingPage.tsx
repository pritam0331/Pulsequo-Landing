/**
 * Pricing Page Component
 * Route: /pricing
 */

import { useState } from 'react'
import { Link } from 'react-router'
import {
  CheckCircle2,
  ArrowRight,
  Check,
  Minus,
} from 'lucide-react'
import { SEO } from '../components/common/SEO'
import { Breadcrumbs } from '../components/common/Breadcrumbs'
import { SectionHeading } from '../components/common/SectionHeading'
import { CTASection } from '../components/common/CTASection'
import { FAQAccordion } from '../components/common/FAQAccordion'
import { ScrollReveal, StaggerItem } from '../components/common/ScrollReveal'
import { pricingPlans, pricingComparisonCategories } from '../data/pricing'

export function PricingPage() {
  const [selectedPlanTab, setSelectedPlanTab] = useState<'all' | 'modular' | 'unified'>('all')

  const filteredPlans = pricingPlans.filter((p) => {
    if (selectedPlanTab === 'modular') return p.id !== 'unified-platform' && p.id !== 'enterprise-custom'
    if (selectedPlanTab === 'unified') return p.id === 'unified-platform' || p.id === 'enterprise-custom'
    return true
  })

  const pricingFaqs = [
    {
      id: 'pricing-faq-1',
      category: 'Platform' as const,
      question: 'How is Communication Cloud pricing structured?',
      answer:
        'Communication Cloud pricing comprises direct carrier pass-through rates (Meta WhatsApp conversation fees and telecom SMS operator costs) plus a predictable PulseQuo platform software fee based on your monthly message volume and active throughput bandwidth.',
    },
    {
      id: 'pricing-faq-2',
      category: 'Platform' as const,
      question: 'Can we license Sales CRM or Support CRM standalone?',
      answer:
        'Yes. You can license Sales CRM or Support CRM individually based on your seat count, or combine them with Communication Cloud into the Unified Business Platform for preferred bundled licensing.',
    },
    {
      id: 'pricing-faq-3',
      category: 'Platform' as const,
      question: 'Are there hidden charges for Model Context Protocol (MCP) tool servers?',
      answer:
        'Standard MCP tool servers (such as leads database tools and appointment calendar engines) are included within the AI & Automation engine. Custom bespoke enterprise MCP development is available through our Professional Services team.',
    },
    {
      id: 'pricing-faq-4',
      category: 'Platform' as const,
      question: 'What payment terms and billing schedules are supported?',
      answer:
        'PulseQuo supports monthly invoicing and annual contracts with enterprise terms (Net 30). Annual agreements include dedicated onboarding engineers and priority SLA response times.',
    },
  ]

  return (
    <div className="relative">
      <SEO
        title="Pricing & Enterprise Plans | PulseQuo"
        description="Transparent, scalable enterprise plans for Communication Cloud, Sales CRM, Support CRM, and the Unified Business Platform. Contact sales for tailored volume quotes."
        canonicalPath="/pricing"
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-blue-50/70 via-white to-white pt-10 pb-16 border-b border-slate-100">
        <ScrollReveal direction="up" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <Breadcrumbs items={[{ label: 'Pricing' }]} className="justify-center mb-6" />

          <span className="inline-flex items-center gap-1.5 rounded-md bg-blue-100/80 border border-blue-200 px-3 py-1 text-xs font-semibold text-blue-800 mb-6">
            <span>Transparent Enterprise Licensing</span>
          </span>

          <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Predictable Pricing Tailored to Your Growth
          </h1>

          <p className="mt-6 text-base sm:text-lg text-slate-600 leading-relaxed">
            Choose individual engines or unlock the entire unified customer experience platform. Volume-tiered
            throughput with dedicated enterprise support.
          </p>

          {/* Toggle */}
          <div className="mt-8 inline-flex items-center gap-1 rounded-2xl bg-slate-100 p-1.5 border border-slate-200 shadow-inner">
            <button
              type="button"
              onClick={() => setSelectedPlanTab('all')}
              className={`rounded-xl px-5 py-2 text-xs font-bold transition-all cursor-pointer ${
                selectedPlanTab === 'all' ? 'bg-white text-blue-600 shadow-sm' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              All Plans
            </button>
            <button
              type="button"
              onClick={() => setSelectedPlanTab('modular')}
              className={`rounded-xl px-5 py-2 text-xs font-bold transition-all cursor-pointer ${
                selectedPlanTab === 'modular' ? 'bg-white text-blue-600 shadow-sm' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Modular Engines
            </button>
            <button
              type="button"
              onClick={() => setSelectedPlanTab('unified')}
              className={`rounded-xl px-5 py-2 text-xs font-bold transition-all cursor-pointer ${
                selectedPlanTab === 'unified' ? 'bg-white text-blue-600 shadow-sm' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Unified & Enterprise
            </button>
          </div>
        </ScrollReveal>
      </section>

      {/* Pricing Cards Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
            {filteredPlans.map((plan, idx) => {
              const isPopular = plan.popular
              return (
                <StaggerItem
                  key={plan.id}
                  index={idx}
                  liftOnHover={false}
                  className={`relative rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 ${
                    isPopular
                      ? 'border-2 border-blue-600 bg-white shadow-2xl scale-[1.02] z-10'
                      : 'border border-slate-200/90 bg-white shadow-sm hover:border-blue-300 hover:shadow-xl'
                  }`}
                >
                  {isPopular && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-md bg-blue-600 px-3 py-0.5 text-xs font-semibold text-white shadow-xs">
                      {plan.badge || 'Most Popular'}
                    </div>
                  )}

                  <div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                        {plan.category}
                      </span>
                      {!isPopular && plan.badge && (
                        <span className="rounded-md bg-slate-100 px-2 py-0.5 text-[10px] font-semibold text-slate-600">
                          {plan.badge}
                        </span>
                      )}
                    </div>

                    <h3 className="mt-3 text-2xl font-black text-slate-900">{plan.name}</h3>
                    <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">{plan.description}</p>

                    <div className="mt-6 border-y border-slate-100 py-6">
                      <p className="text-3xl font-black text-slate-900">{plan.priceDisplay}</p>
                      <p className="mt-1 text-xs text-slate-500">{plan.priceSubtext}</p>
                    </div>

                    <div className="mt-6">
                      <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Features Included</p>
                      <ul className="mt-3 space-y-2.5">
                        {plan.features.map((f, i) => (
                          <li key={i} className="flex items-start gap-2.5 text-xs text-slate-700">
                            <CheckCircle2 className="size-4 shrink-0 text-blue-600 mt-0.5" />
                            <span className="leading-snug">{f}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-slate-100">
                    <p className="text-[11px] text-slate-500 mb-4">{plan.limitsInfo}</p>
                    <Link
                      to={plan.ctaHref}
                      className={`w-full inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition-all ${
                        isPopular
                          ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-md shadow-blue-500/20'
                          : 'bg-slate-900 hover:bg-slate-800 text-white'
                      }`}
                    >
                      <span>{plan.ctaText}</span>
                      <ArrowRight className="size-4" />
                    </Link>
                  </div>
                </StaggerItem>
              )
            })}
          </div>
        </div>
      </section>

      {/* Feature Comparison Table */}
      <section className="py-20 bg-slate-50 border-t border-slate-200/80">
        <ScrollReveal direction="up" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Detailed Matrix"
            title="Comprehensive Feature Comparison"
            description="Inspect capabilities across Communication Cloud, Sales CRM, Support CRM, and the Unified Suite."
          />

          <div className="mt-8 flex justify-end md:hidden">
            <span className="text-[11px] font-semibold text-blue-600 bg-blue-50 px-2.5 py-1 rounded-md border border-blue-200">
              👉 Swipe horizontally to compare all 4 columns
            </span>
          </div>

          <div className="mt-4 md:mt-12 overflow-x-auto no-scrollbar">
            <div className="min-w-[700px] rounded-3xl border border-slate-200 bg-white overflow-hidden shadow-xs">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="border-b border-slate-200 bg-slate-100/70 text-slate-700 font-bold">
                    <th className="p-4 sm:p-5 w-1/3">Feature / Capability</th>
                    <th className="p-4 sm:p-5 text-center">Comm Cloud</th>
                    <th className="p-4 sm:p-5 text-center">Sales CRM</th>
                    <th className="p-4 sm:p-5 text-center">Support CRM</th>
                    <th className="p-4 sm:p-5 text-center bg-blue-50/70 text-blue-900">Unified Suite</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-700">
                  {pricingComparisonCategories.map((group) => (
                    <>
                      <tr key={group.category} className="bg-slate-50/80 font-bold text-slate-900">
                        <td colSpan={5} className="px-5 py-3 uppercase tracking-wider text-[11px] text-slate-500">
                          {group.category}
                        </td>
                      </tr>
                      {group.features.map((row) => (
                        <tr key={row.name} className="hover:bg-slate-50/50 transition-colors">
                          <td className="p-4 sm:px-5 font-medium text-slate-900">{row.name}</td>
                          <td className="p-4 text-center">
                            {typeof row.comm === 'boolean' ? (
                              row.comm ? <Check className="size-4 text-emerald-600 mx-auto" /> : <Minus className="size-4 text-slate-300 mx-auto" />
                            ) : (
                              <span className="text-[11px] font-semibold text-slate-600">{row.comm}</span>
                            )}
                          </td>
                          <td className="p-4 text-center">
                            {typeof row.sales === 'boolean' ? (
                              row.sales ? <Check className="size-4 text-emerald-600 mx-auto" /> : <Minus className="size-4 text-slate-300 mx-auto" />
                            ) : (
                              <span className="text-[11px] font-semibold text-slate-600">{row.sales}</span>
                            )}
                          </td>
                          <td className="p-4 text-center">
                            {typeof row.support === 'boolean' ? (
                              row.support ? <Check className="size-4 text-emerald-600 mx-auto" /> : <Minus className="size-4 text-slate-300 mx-auto" />
                            ) : (
                              <span className="text-[11px] font-semibold text-slate-600">{row.support}</span>
                            )}
                          </td>
                          <td className="p-4 text-center bg-blue-50/30">
                            {typeof row.unified === 'boolean' ? (
                              row.unified ? <Check className="size-4 text-blue-600 mx-auto font-bold" /> : <Minus className="size-4 text-slate-300 mx-auto" />
                            ) : (
                              <span className="text-[11px] font-semibold text-blue-700">{row.unified}</span>
                            )}
                          </td>
                        </tr>
                      ))}
                    </>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Pricing FAQs */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Pricing FAQs"
            title="Frequently Asked Questions About Licensing"
            description="Clear answers regarding billing, message limits, and enterprise contracts."
          />

          <div className="mt-12">
            <FAQAccordion items={pricingFaqs} />
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        headline="Need a Tailored Volume Quote for Your Organization?"
        subheadline="Our enterprise sales team can customize message bandwidth, seat licenses, and carrier routes to match your exact scale."
        primaryCtaText="Contact Sales Team"
        primaryCtaHref="/contact"
        secondaryCtaText="Book a Demo"
        secondaryCtaHref="/book-demo"
      />
    </div>
  )
}
