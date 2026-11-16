/**
 * Reusable Marketing Final CTA Section
 * High-conversion closing section with glowing aura, dynamic badges, and responsive actions.
 */

import { Link } from 'react-router'
import { ArrowRight, CalendarCheck, Sparkles, CheckCircle2, ShieldCheck, Zap } from 'lucide-react'
import { siteConfig } from '../../config/siteConfig'

interface CTASectionProps {
  headline?: string
  subheadline?: string
  primaryCtaText?: string
  primaryCtaHref?: string
  secondaryCtaText?: string
  secondaryCtaHref?: string
}

export function CTASection({
  headline = 'Ready to Transform Your Customer Experience?',
  subheadline = 'Join forward-thinking businesses using PulseQuo to unify omnichannel messaging, automate sales pipelines, and scale customer support with AI.',
  primaryCtaText = 'Get Started Free',
  primaryCtaHref = siteConfig.appUrl,
  secondaryCtaText = 'Book a Personalized Demo',
  secondaryCtaHref = '/book-demo',
}: CTASectionProps) {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-20 sm:py-28 border-y border-slate-800">
      {/* Background Decorative Ambient Gradients */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-blue-600/20 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-purple-600/20 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Tagline Pill */}
        <div className="inline-flex items-center gap-2 rounded-full bg-blue-900/40 border border-blue-600/40 px-4 py-1.5 text-xs font-bold text-blue-300 mb-6 shadow-lg shadow-blue-900/20 backdrop-blur-sm">
          <Sparkles className="size-3.5 text-amber-300 animate-spin" />
          <span>One Platform · Infinite Scalability</span>
        </div>

        {/* Headline */}
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1] max-w-4xl mx-auto">
          {headline}
        </h2>

        {/* Subheadline */}
        <p className="mt-6 text-base sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
          {subheadline}
        </p>

        {/* Action Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={primaryCtaHref}
            className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-bold text-white bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 rounded-2xl transition-all shadow-xl shadow-blue-500/25 hover:shadow-2xl hover:shadow-blue-500/40 hover:-translate-y-0.5"
          >
            <span>{primaryCtaText}</span>
            <ArrowRight className="size-5 transition-transform duration-200 group-hover:translate-x-1" />
          </a>

          <Link
            to={secondaryCtaHref}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-bold text-slate-200 bg-slate-900/90 hover:bg-slate-800/90 border border-slate-700/80 hover:border-slate-600 rounded-2xl transition-all shadow-md hover:-translate-y-0.5"
          >
            <CalendarCheck className="size-5 text-blue-400" />
            <span>{secondaryCtaText}</span>
          </Link>
        </div>

        {/* Trust Badges Bar */}
        <div className="mt-12 pt-8 border-t border-slate-800/80 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs font-semibold text-slate-400">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="size-4 text-emerald-400" />
            <span>Instant Sandbox Activation</span>
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="size-4 text-blue-400" />
            <span>TRAI DLT & Meta V20 Compliant</span>
          </div>
          <div className="flex items-center gap-2">
            <Zap className="size-4 text-amber-400" />
            <span>99.99% Carrier Throughput SLA</span>
          </div>
        </div>
      </div>
    </section>
  )
}
