/**
 * Book a Demo Dedicated Page
 * Route: /book-demo
 */

import { useSearchParams } from 'react-router'
import { CheckCircle2 } from 'lucide-react'
import { SEO } from '../components/common/SEO'
import { Breadcrumbs } from '../components/common/Breadcrumbs'
import { BackgroundAnimation } from '../components/common/BackgroundAnimation'
import { DemoRequestForm } from '../components/forms/DemoRequestForm'
import type { DemoFormData } from '../services/demoService'
import { ScrollReveal } from '../components/common/ScrollReveal'

export function BookDemoPage() {
  const [searchParams] = useSearchParams()
  const productParam = searchParams.get('product') as DemoFormData['productInterest'] | null

  return (
    <div className="relative">
      <SEO
        title="Book a Personalized Demo | PulseQuo Platform Walkthrough"
        description="Schedule a 30-minute tailored walkthrough of PulseQuo’s unified platform: WhatsApp Business API, Sales CRM, Support Helpdesk, and autonomous AI agents."
        canonicalPath="/book-demo"
      />

      {/* Hero Split: Left Copy & Trust Specs, Right Personalized Demo Card */}
      <section
        data-cursor-zone="hero"
        className="relative overflow-hidden bg-white pt-10 pb-14 sm:pt-14 sm:pb-20"
      >
        <BackgroundAnimation variant="hero" showGrid={true} showBeams={true} />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            {/* Left Column: Headline, Description & Platform Guarantees */}
            <div className="lg:col-span-5 lg:pt-2 text-left">
              <ScrollReveal direction="left" duration={0.45}>
                <Breadcrumbs items={[{ label: 'Book a Demo' }]} className="mb-6" />

                <h1 className="text-3xl sm:text-4xl lg:text-[42px] xl:text-[50px] font-black text-slate-900 tracking-[-0.03em] leading-[1.16] text-balance">
                  See PulseQuo in Action
                </h1>

                <p className="mt-5 text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl text-pretty">
                  Discover how PulseQuo brings omnichannel messaging, deal pipelines, customer support ticketing, and AI
                  automation together for your specific organization.
                </p>

                {/* Trust Indicators */}
                <div className="mt-8 rounded-2xl border border-slate-200/90 bg-slate-50/70 p-5 sm:p-6 space-y-3 text-xs sm:text-sm text-slate-600">
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="size-4 text-emerald-600 shrink-0" />
                    <span className="font-medium text-slate-800">Official Meta Cloud API Verified</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="size-4 text-emerald-600 shrink-0" />
                    <span className="font-medium text-slate-800">TRAI DLT-Compliant SMS Infrastructure</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="size-4 text-emerald-600 shrink-0" />
                    <span className="font-medium text-slate-800">Standardized Model Context Protocol (MCP)</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="size-4 text-emerald-600 shrink-0" />
                    <span className="font-medium text-slate-800">Strict Multi-Tenant Isolation &amp; Security</span>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Right Column: Request a Personalized Demo Card */}
            <div className="lg:col-span-7">
              <ScrollReveal direction="right" delay={0.1}>
                <DemoRequestForm initialProductInterest={productParam || 'Complete PulseQuo Platform'} />
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect on Your Call */}
      <section className="py-14 sm:py-18 section-fade-tint">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up" className="max-w-2xl mb-10">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              What to Expect on Your Call
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600 leading-relaxed">
              A personalized, technical session with an enterprise solutions architect. No generic slide decks.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ScrollReveal direction="up" delay={0.05}>
              <div className="h-full flex items-start gap-4 rounded-2xl border border-slate-200 p-6 bg-white shadow-2xs">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-blue-700 font-bold text-xs">
                  01
                </div>
                <div>
                  <h3 className="text-sm sm:text-base font-bold text-slate-900">Architecture Assessment</h3>
                  <p className="mt-1.5 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    We analyze your current communication channels, carrier requirements, and CRM integrations.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.1}>
              <div className="h-full flex items-start gap-4 rounded-2xl border border-slate-200 p-6 bg-white shadow-2xs">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-indigo-100 text-indigo-700 font-bold text-xs">
                  02
                </div>
                <div>
                  <h3 className="text-sm sm:text-base font-bold text-slate-900">Live Dashboard Demonstration</h3>
                  <p className="mt-1.5 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    See live WhatsApp broadcast campaigns, Kanban deal management, ticket SLAs, and the visual flow builder.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.15}>
              <div className="h-full flex items-start gap-4 rounded-2xl border border-slate-200 p-6 bg-white shadow-2xs">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-purple-100 text-purple-700 font-bold text-xs">
                  03
                </div>
                <div>
                  <h3 className="text-sm sm:text-base font-bold text-slate-900">Custom Roadmap &amp; Pricing</h3>
                  <p className="mt-1.5 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Receive tailored throughput recommendations, DLT compliance guidance, and volume discounts.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  )
}
