import { Fragment } from 'react'
import { motion } from 'motion/react'
import { Check, Minus } from 'lucide-react'
import { SEO } from '../components/common/SEO'
import { Breadcrumbs } from '../components/common/Breadcrumbs'
import { BackgroundAnimation } from '../components/common/BackgroundAnimation'
import { SectionHeading } from '../components/common/SectionHeading'
import { BrandCarousel } from '../components/common/BrandCarousel'
import { PricingCards } from '../components/pricing/PricingCards'
import { TestimonialsCarousel } from '../components/common/TestimonialsCarousel'
import { FAQAccordion } from '../components/common/FAQAccordion'
import { CTASection } from '../components/common/CTASection'
import { pricingComparisonCategories } from '../data/pricing'
import type { FAQItem } from '../data/faqs'

const easeOutCurve = [0.22, 1, 0.36, 1] as const

const pricingFaqs: FAQItem[] = [
  {
    id: 'pricing-faq-1',
    category: 'Platform',
    question: 'How does the 20% Annual Billing discount work?',
    answer:
      'When you select Annual Billing, a 20% discount is automatically applied to both the Starter ($23/month billed annually) and Growth ($63/month billed annually) plans. You receive full enterprise features with significant annual savings.',
  },
  {
    id: 'pricing-faq-2',
    category: 'Platform',
    question: 'What happens if we exceed our monthly conversation limit?',
    answer:
      'Starter includes 1,000 conversations/month, while Growth includes 5,000 conversations/month. If your inbound volume increases, additional conversations continue uninterrupted at transparent carrier pass-through rates, or you can seamlessly upgrade to Enterprise for unlimited volume.',
  },
  {
    id: 'pricing-faq-3',
    category: 'Platform',
    question: 'Can we connect our existing business phone number for WhatsApp and RCS?',
    answer:
      'Yes. You can onboard your existing corporate numbers onto the official WhatsApp Business Platform without downtime. We handle verification, display name approval, and DLT registration.',
  },
  {
    id: 'pricing-faq-4',
    category: 'Platform',
    question: 'Can we upgrade or change plans at any time?',
    answer:
      'Yes! You can instantly upgrade between Starter, Growth, and Enterprise directly from your console. Upgrades take effect immediately with prorated billing.',
  },
  {
    id: 'pricing-faq-5',
    category: 'Platform',
    question: 'What is included with the Free Trial?',
    answer:
      'Both Starter and Growth offer a full-featured trial with instant sandbox activation, visual flow builder access, web chat widget embedding, and sample messaging throughput. No credit card is required to begin.',
  },
]

export function PricingPage() {
  return (
    <div className="relative bg-white text-slate-900 selection:bg-blue-600 selection:text-white">
      <SEO
        title="Pricing & Plans | PulseQuo Customer Experience Platform"
        description="Transparent pricing with Starter ($23/mo), Growth ($63/mo, Most Popular), and Enterprise custom tiers. Save 20% on annual billing."
        canonicalPath="/pricing"
      />
      <section
        data-cursor-zone="hero"
        className="relative overflow-hidden bg-white pt-10 pb-14 sm:pt-14 sm:pb-18"
      >
        <BackgroundAnimation variant="hero" showGrid={true} showBeams={true} />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Breadcrumbs items={[{ label: 'Pricing' }]} className="justify-center mb-6" />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: easeOutCurve }}
          >
            <h1 className="text-3xl sm:text-4xl lg:text-[48px] xl:text-[54px] font-black text-slate-900 tracking-[-0.03em] leading-[1.16] text-balance">
              Plans built for every stage of your{' '}
              <span className="text-gradient-hero">
                growth.
              </span>
            </h1>

            <p className="mt-5 text-base sm:text-lg text-slate-600 leading-relaxed font-normal max-w-2xl mx-auto text-pretty">
              From fast-growing commerce stores to multi-channel global enterprises. Enjoy predictable pricing, instant sandbox
              trials, and 20% savings on annual subscriptions.
            </p>
          </motion.div>
        </div>
      </section>

      <BrandCarousel />

      <section className="py-6 sm:py-8 lg:py-10 section-fade-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <PricingCards defaultAnnual={true} />
        </div>
      </section>

      <section className="py-6 sm:py-8 lg:py-10 section-fade-tint">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Trusted by High-Growth Companies Worldwide"
            description="See why leading brands choose PulseQuo over legacy point solutions."
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 'some' }}
            transition={{ duration: 0.5, ease: easeOutCurve }}
            className="mt-6 sm:mt-8"
          >
            <TestimonialsCarousel />
          </motion.div>
        </div>
      </section>

      <section className="py-6 sm:py-8 lg:py-10 section-fade-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Compare Plan Features & Limits"
            description="Everything included in our plans at a glance. No hidden surprises."
          />

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 'some' }}
            transition={{ duration: 0.5, ease: easeOutCurve }}
            className="mt-6 sm:mt-8 overflow-x-auto rounded-2xl border border-blue-950/20 bg-white shadow-md"
          >
            <div className="h-[3px] w-full pq-code-showcase-beam bg-gradient-to-r from-cyan-400 via-blue-500 via-purple-500 to-cyan-400" />
            <table className="w-full text-left text-sm text-slate-700 min-w-[640px] tabular-nums">
              <thead className="bg-[#070d24] text-xs font-bold text-white uppercase tracking-wider border-b border-blue-950">
                <tr>
                  <th className="py-4 px-6 w-2/5 text-slate-200">Feature</th>
                  <th className="py-4 px-6 text-center w-1/5 text-cyan-300">Starter</th>
                  <th className="py-4 px-6 text-center w-1/5 text-blue-300 bg-blue-600/20">Growth (Most Popular)</th>
                  <th className="py-4 px-6 text-center w-1/5 text-purple-300">Enterprise</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {pricingComparisonCategories.map((category) => (
                  <Fragment key={category.category}>
                    <tr className="bg-slate-100/70 font-mono text-xs uppercase tracking-wider font-bold text-slate-700">
                      <td colSpan={4} className="py-2.5 px-6">
                        {category.category}
                      </td>
                    </tr>
                    {category.features.map((feature) => (
                      <tr key={feature.name} className="hover:bg-slate-50/50 transition-colors">
                        <td className="py-3 px-6 font-medium text-slate-800 text-xs sm:text-sm">
                          {feature.name}
                        </td>
                        <td className="py-3 px-6 text-center text-xs">
                          {typeof feature.starter === 'boolean' ? (
                            feature.starter ? (
                              <Check className="size-4 text-emerald-600 mx-auto" />
                            ) : (
                              <Minus className="size-4 text-slate-300 mx-auto" />
                            )
                          ) : (
                            <span className="font-mono text-slate-600">{feature.starter}</span>
                          )}
                        </td>
                        <td className="py-3 px-6 text-center text-xs bg-blue-50/20 font-medium">
                          {typeof feature.growth === 'boolean' ? (
                            feature.growth ? (
                              <Check className="size-4 text-emerald-600 mx-auto" />
                            ) : (
                              <Minus className="size-4 text-slate-300 mx-auto" />
                            )
                          ) : (
                            <span className="font-mono text-blue-600 font-bold">{feature.growth}</span>
                          )}
                        </td>
                        <td className="py-3 px-6 text-center text-xs">
                          {typeof feature.enterprise === 'boolean' ? (
                            feature.enterprise ? (
                              <Check className="size-4 text-emerald-600 mx-auto" />
                            ) : (
                              <Minus className="size-4 text-slate-300 mx-auto" />
                            )
                          ) : (
                            <span className="font-mono text-slate-800 font-bold">{feature.enterprise}</span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </Fragment>
                ))}
              </tbody>
            </table>
          </motion.div>
        </div>
      </section>

      <section className="py-6 sm:py-8 lg:py-10 section-fade-tint">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Common Pricing & Licensing Inquiries"
            description="Have questions about trial limits, carrier pass-through rates, or team seats? Find clear answers below."
          />

          <div className="mt-6 sm:mt-8 w-full">
            <FAQAccordion items={pricingFaqs} />
          </div>
        </div>
      </section>

      <CTASection
        headline="Still Have Questions About Our Enterprise Tiers?"
        subheadline="Our solutions architects can configure a custom quote based on your exact monthly message volume, carrier routes, and dedicated SLA needs."
        primaryCtaText="Schedule a Consultation"
        primaryCtaHref="/book-demo"
        secondaryCtaText="Explore Developer APIs"
        secondaryCtaHref="/developers"
      />
    </div>
  )
}
