/**
 * About PulseQuo Page
 * Route: /about
 */

import {
  Sparkles,
  ShieldCheck,
  Target,
  Compass,
  Layers,
  Building2,
} from 'lucide-react'
import { SEO } from '../components/common/SEO'
import { Breadcrumbs } from '../components/common/Breadcrumbs'
import { SectionHeading } from '../components/common/SectionHeading'
import { CTASection } from '../components/common/CTASection'
import { ScrollReveal, StaggerItem } from '../components/common/ScrollReveal'

export function AboutPage() {
  return (
    <div className="relative">
      <SEO
        title="About PulseQuo · Company, Mission & Philosophy"
        description="Learn about PulseQuo’s mission to unify enterprise CPaaS communication, CRM, and AI automation into a single cohesive platform."
        canonicalPath="/about"
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-blue-50/70 via-white to-white pt-10 pb-20 border-b border-slate-100">
        <ScrollReveal direction="up" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <Breadcrumbs items={[{ label: 'About PulseQuo' }]} className="justify-center mb-6" />

          <span className="inline-flex items-center gap-1.5 rounded-md bg-blue-100/80 border border-blue-200 px-3 py-1 text-xs font-semibold text-blue-800 mb-6">
            <Sparkles className="size-3.5 text-blue-600" />
            <span>Our Company & Product Philosophy</span>
          </span>

          <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            One Platform. Complete Customer Experience.
          </h1>

          <p className="mt-6 text-base sm:text-lg text-slate-600 leading-relaxed">
            PulseQuo was created to solve one of modern business’s biggest frictions: fragmented customer communication
            tools that separate conversation from operational context.
          </p>
        </ScrollReveal>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <StaggerItem index={0} className="rounded-3xl border border-slate-200 p-8 sm:p-10 bg-slate-50/50 hover:border-blue-300 hover:shadow-xl transition-all">
              <div className="flex size-14 items-center justify-center rounded-2xl bg-blue-100 text-blue-700 mb-6">
                <Target className="size-7" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900">Our Mission</h2>
              <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed">
                To empower growing organizations and modern enterprises to communicate effortlessly across all preferred
                channels, automate repetitive operational overhead, and deliver extraordinary customer experiences from
                a single unified interface.
              </p>
            </StaggerItem>

            <StaggerItem index={1} className="rounded-3xl border border-slate-200 p-8 sm:p-10 bg-slate-50/50 hover:border-purple-300 hover:shadow-xl transition-all">
              <div className="flex size-14 items-center justify-center rounded-2xl bg-purple-100 text-purple-700 mb-6">
                <Compass className="size-7" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900">Our Vision</h2>
              <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed">
                A business world where no lead falls through the cracks, no customer repeats their problem across support
                channels, and intelligent AI agents seamlessly co-pilot with human teams to drive scalable growth.
              </p>
            </StaggerItem>
          </div>
        </div>
      </section>

      {/* Product Philosophy */}
      <section className="py-20 bg-slate-50 border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Engineering Core"
            title="The Principles Guiding PulseQuo"
            description="How we think about building scalable customer communications software."
          />

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <StaggerItem index={0} className="rounded-3xl border border-slate-200 bg-white p-8 shadow-xs hover:border-blue-300 hover:shadow-xl transition-all duration-300">
              <div className="flex size-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 mb-6">
                <Layers className="size-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Unification Over Fragmentation</h3>
              <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                Point solutions create data silos, multiple logins, and lost context. By uniting CPaaS messaging, Sales
                CRM, and Support Helpdesk, customer history remains permanent and accessible.
              </p>
            </StaggerItem>

            <StaggerItem index={1} className="rounded-3xl border border-slate-200 bg-white p-8 shadow-xs hover:border-purple-300 hover:shadow-xl transition-all duration-300">
              <div className="flex size-12 items-center justify-center rounded-2xl bg-purple-50 text-purple-600 mb-6">
                <ShieldCheck className="size-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Grounded AI, Not Hallucination</h3>
              <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                AI should be dependable in enterprise settings. We ground models using open Model Context Protocol (MCP)
                and verified company knowledge bases, backing every conversation with deterministic human handoff.
              </p>
            </StaggerItem>

            <StaggerItem index={2} className="rounded-3xl border border-slate-200 bg-white p-8 shadow-xs hover:border-emerald-300 hover:shadow-xl transition-all duration-300">
              <div className="flex size-12 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600 mb-6">
                <Building2 className="size-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Carrier-Grade Resilience</h3>
              <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                Critical transactional OTPs, order updates, and support chats cannot tolerate downtime. We adhere to
                rigorous telecom standards, DLT compliance, and official Meta Cloud APIs.
              </p>
            </StaggerItem>
          </div>
        </div>
      </section>

      {/* Business Focus */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeading
            badge="Business Focus"
            title="Focusing on High-Growth & Enterprise Communications"
            description="PulseQuo specializes in providing end-to-end customer interaction infrastructure for organizations where communication reliability directly impacts revenue."
          />

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
            <div className="rounded-2xl border border-slate-200 p-6">
              <h4 className="text-base font-bold text-slate-900">CPaaS & Messaging Throughput</h4>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                High-capacity WhatsApp Business Platform and SMPP SMS infrastructure for transactional, OTP, and
                promotional messaging.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 p-6">
              <h4 className="text-base font-bold text-slate-900">Conversational AI & Autonomous CRM</h4>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                Visual flow builders, real-time sentiment extraction, lead pre-qualification, and seamless ticket routing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        headline="Experience the PulseQuo Difference"
        subheadline="Schedule a live platform walkthrough with our engineering and solutions architecture team."
        primaryCtaText="Explore Products"
        primaryCtaHref="/#platform-overview"
        secondaryCtaText="Book a Demo"
        secondaryCtaHref="/book-demo"
      />
    </div>
  )
}
