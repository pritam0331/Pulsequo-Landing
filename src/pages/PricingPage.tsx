/**
 * Pricing Page Component
 * Route: /pricing
 * Features modern tiered pricing cards (Starter, Growth, Enterprise),
 * interactive annual discount toggle (20% off), concierge support card,
 * detailed feature comparison matrix, and licensing FAQs.
 */

import { Fragment } from 'react'
import {
  Check,
  Minus,
} from 'lucide-react'
import { SEO } from '../components/common/SEO'
import { Breadcrumbs } from '../components/common/Breadcrumbs'
import { SectionHeading } from '../components/common/SectionHeading'
import { CTASection } from '../components/common/CTASection'
import { FAQAccordion } from '../components/common/FAQAccordion'
import { ScrollReveal } from '../components/common/ScrollReveal'
import { PricingCards } from '../components/pricing/PricingCards'
import { pricingComparisonCategories } from '../data/pricing'

export function PricingPage() {
  const pricingFaqs = [
    {
      id: 'pricing-faq-1',
      category: 'Platform' as const,
      question: 'How does the 20% Annual Billing discount work?',
      answer:
        'When you select Annual Billing, a 20% discount is automatically applied to both the Starter ($23/month billed annually) and Growth ($63/month billed annually) plans. You receive full enterprise features with significant annual savings.',
    },
    {
      id: 'pricing-faq-2',
      category: 'Platform' as const,
      question: 'What happens if we exceed our monthly conversation limit?',
      answer:
        'Starter includes 1,000 conversations/month, while Growth includes 5,000 conversations/month. If your inbound volume increases, additional conversations continue uninterrupted at transparent carrier pass-through rates, or you can seamlessly upgrade to Enterprise for unlimited volume.',
    },
    {
      id: 'pricing-faq-3',
      category: 'Platform' as const,
      question: 'Can we connect our existing business phone number for WhatsApp and RCS?',
      answer:
        'Yes. You can onboard your existing corporate numbers onto the official WhatsApp Business Platform without downtime. We handle verification, display name approval, and DLT registration.',
    },
    {
      id: 'pricing-faq-4',
      category: 'Platform' as const,
      question: 'Can we upgrade or change plans at any time?',
      answer:
        'Yes! You can instantly upgrade between Starter, Growth, and Enterprise directly from your console. Upgrades take effect immediately with prorated billing.',
    },
    {
      id: 'pricing-faq-5',
      category: 'Platform' as const,
      question: 'What is included with the Free Trial?',
      answer:
        'Both Starter and Growth offer a full-featured trial with instant sandbox activation, visual flow builder access, web chat widget embedding, and sample messaging throughput. No credit card is required to begin.',
    },
  ]

  return (
    <div className="relative">
      <SEO
        title="Pricing & Plans | PulseQuo Customer Experience Platform"
        description="Transparent pricing with Starter ($23/mo), Growth ($63/mo, Most Popular), and Enterprise custom tiers. Save 20% on annual billing."
        canonicalPath="/pricing"
      />

      {/* Hero Header */}
      <section className="bg-gradient-to-b from-blue-50/70 via-white to-white pt-10 pb-16 border-b border-slate-100">
        <ScrollReveal direction="up" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <Breadcrumbs items={[{ label: 'Pricing' }]} className="justify-center mb-6" />

          <span className="inline-flex items-center gap-1.5 rounded-md bg-blue-100/80 border border-blue-200 px-3 py-1 text-xs font-semibold text-blue-800 mb-6">
            <span>Simple, Transparent Pricing</span>
          </span>

          <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Plans Built for Every Stage of Your Growth
          </h1>

          <p className="mt-6 text-base sm:text-lg text-slate-600 leading-relaxed">
            From small business automation to multi-channel enterprise scale. Enjoy predictable pricing, instant sandbox
            trials, and 20% savings on annual subscriptions.
          </p>
        </ScrollReveal>
      </section>

      {/* Main Pricing Cards Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <PricingCards defaultAnnual={true} />
        </div>
      </section>

      {/* Feature Comparison Table */}
      <section className="py-20 bg-slate-50 border-t border-slate-200/80">
        <ScrollReveal direction="up" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Detailed Matrix"
            title="Comprehensive Feature Comparison"
            description="Compare detailed capabilities, limits, channels, and governance across Starter, Growth, and Enterprise."
          />

          <div className="mt-8 flex justify-end md:hidden">
            <span className="text-[11px] font-semibold text-blue-600 bg-blue-50 px-2.5 py-1 rounded-md border border-blue-200">
              👉 Swipe horizontally to compare all 3 plans
            </span>
          </div>

          <div className="mt-4 md:mt-12 overflow-x-auto no-scrollbar">
            <div className="min-w-[720px] rounded-3xl border border-slate-200 bg-white overflow-hidden shadow-xs">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="border-b border-slate-200 bg-slate-100/70 text-slate-700 font-bold">
                    <th className="p-4 sm:p-5 w-2/5 text-sm font-extrabold text-slate-900">Feature / Capability</th>
                    <th className="p-4 sm:p-5 text-center text-sm font-bold text-slate-800">Starter</th>
                    <th className="p-4 sm:p-5 text-center text-sm font-black bg-blue-50/80 text-blue-700 border-x border-blue-200/60">
                      Growth (Popular)
                    </th>
                    <th className="p-4 sm:p-5 text-center text-sm font-bold text-slate-800">Enterprise</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-700">
                  {pricingComparisonCategories.map((group) => (
                    <Fragment key={group.category}>
                      <tr className="bg-slate-50/80 font-bold text-slate-900">
                        <td colSpan={4} className="px-5 py-3 uppercase tracking-wider text-[11px] text-slate-500">
                          {group.category}
                        </td>
                      </tr>
                      {group.features.map((row) => (
                        <tr key={row.name} className="hover:bg-slate-50/50 transition-colors">
                          <td className="p-4 sm:px-5 font-medium text-slate-900">{row.name}</td>
                          <td className="p-4 text-center">
                            {typeof row.starter === 'boolean' ? (
                              row.starter ? (
                                <Check className="size-4 text-emerald-600 mx-auto" />
                              ) : (
                                <Minus className="size-4 text-slate-300 mx-auto" />
                              )
                            ) : (
                              <span className="text-[11px] font-semibold text-slate-600">{row.starter}</span>
                            )}
                          </td>
                          <td className="p-4 text-center bg-blue-50/40 border-x border-blue-100 font-semibold text-blue-900">
                            {typeof row.growth === 'boolean' ? (
                              row.growth ? (
                                <Check className="size-4 text-blue-600 mx-auto font-bold" />
                              ) : (
                                <Minus className="size-4 text-slate-300 mx-auto" />
                              )
                            ) : (
                              <span className="text-[11px] font-bold text-blue-700">{row.growth}</span>
                            )}
                          </td>
                          <td className="p-4 text-center">
                            {typeof row.enterprise === 'boolean' ? (
                              row.enterprise ? (
                                <Check className="size-4 text-emerald-600 mx-auto" />
                              ) : (
                                <Minus className="size-4 text-slate-300 mx-auto" />
                              )
                            ) : (
                              <span className="text-[11px] font-semibold text-slate-800">{row.enterprise}</span>
                            )}
                          </td>
                        </tr>
                      ))}
                    </Fragment>
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
            title="Frequently Asked Questions About Plans"
            description="Clear answers regarding billing, conversation quotas, channel additions, and enterprise SLAs."
          />

          <div className="mt-12">
            <FAQAccordion items={pricingFaqs} />
          </div>
        </div>
      </section>

      {/* Final Closing CTA */}
      <CTASection
        headline="Ready to Accelerate Your Customer Experience?"
        subheadline="Join forward-thinking businesses using PulseQuo to unify omnichannel messaging, automate sales pipelines, and scale customer support with AI."
        primaryCtaText="Start Free Trial"
        primaryCtaHref="/book-demo"
        secondaryCtaText="Contact Sales Team"
        secondaryCtaHref="/contact"
      />
    </div>
  )
}
