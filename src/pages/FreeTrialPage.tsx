/**
 * Free Trial & WhatsApp Forever Plan Page
 * Routes: /free-trial, /signup, /free-forever
 */

import { SEO } from '../components/common/SEO'
import { Breadcrumbs } from '../components/common/Breadcrumbs'
import { BackgroundAnimation } from '../components/common/BackgroundAnimation'
import { ScrollReveal } from '../components/common/ScrollReveal'
import { DemoRequestForm } from '../components/forms/DemoRequestForm'

export function FreeTrialPage() {
  return (
    <div className="relative">
      <SEO
        title="Get Started with PulseQuo | Free Sandbox & Platform Trial"
        description="Get started with PulseQuo's unified messaging, Sales CRM, Support Helpdesk, and AI automation platform."
        canonicalPath="/free-trial"
      />

      {/* Hero Intro */}
      <section
        data-cursor-zone="hero"
        className="relative overflow-hidden bg-white pt-10 pb-12 sm:pt-14 sm:pb-16"
      >
        <BackgroundAnimation variant="hero" showGrid={true} showBeams={true} />

        <ScrollReveal direction="up" className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Breadcrumbs items={[{ label: 'Get Started' }]} className="justify-center mb-6" />

          <h1 className="text-3xl sm:text-4xl lg:text-[48px] xl:text-[54px] font-black text-slate-900 tracking-[-0.03em] leading-[1.16] text-balance">
            Get Started with PulseQuo
          </h1>

          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto text-pretty">
            Request your workspace sandbox to explore omnichannel messaging, CRM pipelines, and AI workflows with our team.
          </p>
        </ScrollReveal>
      </section>

      {/* Onboarding Form */}
      <section className="py-14 sm:py-16 section-fade-tint">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up" delay={0.1}>
            <DemoRequestForm initialProductInterest="Complete PulseQuo Platform" />
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}
