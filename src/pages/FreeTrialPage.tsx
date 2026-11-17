/**
 * Free Trial & WhatsApp Forever Plan Page
 * Routes: /free-trial, /signup, /free-forever
 */

import { SEO } from '../components/common/SEO'
import { Breadcrumbs } from '../components/common/Breadcrumbs'
import { ScrollReveal } from '../components/common/ScrollReveal'
import { WhatsAppContactBanner } from '../components/common/WhatsAppContactBanner'

export function FreeTrialPage() {
  return (
    <div className="relative">
      <SEO
        title="Start Growing on WhatsApp Today | Free Forever Plan"
        description="Sign up in 2 minutes for the official WhatsApp Business API free. Broadcast offers, automate replies with AI, and sell more on WhatsApp."
        canonicalPath="/free-trial"
      />

      {/* Hero Intro */}
      <section className="bg-gradient-to-b from-blue-50/70 via-white to-white pt-10 pb-12 border-b border-slate-100">
        <ScrollReveal direction="up" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <Breadcrumbs items={[{ label: 'Free Forever Plan' }]} className="justify-center mb-6" />

          <span className="inline-flex items-center gap-1.5 rounded-md bg-emerald-100/80 border border-emerald-200 px-3 py-1 text-xs font-semibold text-emerald-800 mb-6">
            <span>Instant Sandbox Activation · No Credit Card Required</span>
          </span>

          <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Official WhatsApp Business API Free
          </h1>

          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Get started right now. Broadcast campaigns, qualify leads with AI, and integrate your favorite CRM tools.
          </p>
        </ScrollReveal>
      </section>

      {/* WhatsApp Banner Container */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up" delay={0.1}>
            <WhatsAppContactBanner />
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}
