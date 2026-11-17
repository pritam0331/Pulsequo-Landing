/**
 * Book a Demo Dedicated Page
 * Route: /book-demo
 */

import { useSearchParams } from 'react-router'
import {
  CalendarCheck,
  CheckCircle2,
} from 'lucide-react'
import { SEO } from '../components/common/SEO'
import { Breadcrumbs } from '../components/common/Breadcrumbs'
import { DemoRequestForm } from '../components/forms/DemoRequestForm'
import type { DemoFormData } from '../services/demoService'
import { ScrollReveal } from '../components/common/ScrollReveal'
import { WhatsAppContactBanner } from '../components/common/WhatsAppContactBanner'

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

      {/* Hero */}
      <section className="bg-gradient-to-b from-blue-50/70 via-white to-white pt-10 pb-16 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <ScrollReveal direction="down" duration={0.4}>
            <Breadcrumbs items={[{ label: 'Book a Demo' }]} className="justify-center mb-6" />

          <span className="inline-flex items-center gap-1.5 rounded-md bg-blue-100/80 border border-blue-200 px-3 py-1 text-xs font-semibold text-blue-800 mb-6">
            <CalendarCheck className="size-3.5 text-blue-600" />
            <span>Interactive 30-Minute Walkthrough</span>
          </span>

          <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            See PulseQuo in Action
          </h1>

          <p className="mt-6 text-base sm:text-lg text-slate-600 leading-relaxed">
            Discover how PulseQuo brings omnichannel messaging, deal pipelines, customer support ticketing, and AI
            automation together for your specific organization.
          </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Main Demo Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Column: What to Expect & Value Props */}
            <div className="lg:col-span-5">
              <ScrollReveal direction="left" delay={0.1}>
                <div className="space-y-8">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900">What to Expect on Your Call</h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  A personalized, technical session with an enterprise solutions architect. No generic slide decks.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-4 rounded-2xl border border-slate-200 p-5 bg-slate-50/50">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-blue-700 font-bold text-xs">
                    01
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Architecture Assessment</h4>
                    <p className="mt-1 text-xs text-slate-600 leading-relaxed">
                      We analyze your current communication channels, carrier requirements, and CRM integrations.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 rounded-2xl border border-slate-200 p-5 bg-slate-50/50">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-indigo-100 text-indigo-700 font-bold text-xs">
                    02
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Live Dashboard Demonstration</h4>
                    <p className="mt-1 text-xs text-slate-600 leading-relaxed">
                      See live WhatsApp broadcast campaigns, Kanban deal management, ticket SLAs, and the visual flow builder.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 rounded-2xl border border-slate-200 p-5 bg-slate-50/50">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-purple-100 text-purple-700 font-bold text-xs">
                    03
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Custom Roadmap & Pricing</h4>
                    <p className="mt-1 text-xs text-slate-600 leading-relaxed">
                      Receive tailored throughput recommendations, DLT compliance guidance, and volume discounts.
                    </p>
                  </div>
                </div>
              </div>

              {/* Trust Indicators */}
              <div className="rounded-2xl border border-slate-200 p-6 space-y-3 text-xs text-slate-600">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-emerald-600 shrink-0" />
                  <span className="font-medium text-slate-800">Official Meta Cloud API Verified</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-emerald-600 shrink-0" />
                  <span className="font-medium text-slate-800">TRAI DLT-Compliant SMS Infrastructure</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-emerald-600 shrink-0" />
                  <span className="font-medium text-slate-800">Standardized Model Context Protocol (MCP)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-emerald-600 shrink-0" />
                  <span className="font-medium text-slate-800">Strict Multi-Tenant Isolation & Security</span>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7">
            <ScrollReveal direction="right" delay={0.15}>
              <DemoRequestForm initialProductInterest={productParam || 'Complete PulseQuo Platform'} />
            </ScrollReveal>
          </div>
          </div>

          {/* Or Self-Serve: WhatsApp Free Forever Plan & Contact Banner */}
          <div className="mt-16 pt-16 border-t border-slate-100">
            <ScrollReveal direction="up" delay={0.1}>
              <WhatsAppContactBanner />
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  )
}
