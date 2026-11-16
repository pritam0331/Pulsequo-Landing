/**
 * Reusable Marketing Final CTA Section
 * High-conversion closing card encased in a compact rectangle box.
 */

import { Link } from 'react-router'
import { motion } from 'motion/react'
import { ArrowRight, CalendarCheck, CheckCircle2, ShieldCheck, Zap, Code2 } from 'lucide-react'
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
  const isPrimaryExternal = primaryCtaHref.startsWith('http')
  const isSecondaryExternal = secondaryCtaHref.startsWith('http')

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Compact Rectangle Card */}
        <motion.div
          initial={{ opacity: 0, y: 28, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-[#020618] border border-slate-800/80 shadow-2xl p-8 sm:p-12 lg:p-14 text-center"
        >
          {/* Subtle Ambient Decorative Accents */}
          <motion.div
            animate={{ scale: [1, 1.1, 1], opacity: [0.12, 0.2, 0.12] }}
            transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute top-0 right-1/4 w-72 h-72 bg-blue-600 blur-[90px] rounded-3xl pointer-events-none"
          />
          <motion.div
            animate={{ scale: [1, 1.12, 1], opacity: [0.1, 0.18, 0.1] }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
            className="absolute bottom-0 left-1/4 w-72 h-72 bg-purple-600 blur-[90px] rounded-3xl pointer-events-none"
          />
          <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:20px_20px] opacity-25 pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto">
            {/* Headline */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight leading-[1.18]">
              {headline}
            </h2>

            {/* Subheadline */}
            <p className="mt-3.5 text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed font-normal">
              {subheadline}
            </p>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5">
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="w-full sm:w-auto">
                {isPrimaryExternal ? (
                  <a
                    href={primaryCtaHref}
                    className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors shadow-sm"
                  >
                    <CalendarCheck className="size-4" />
                    <span>{primaryCtaText}</span>
                    <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                  </a>
                ) : (
                  <Link
                    to={primaryCtaHref}
                    className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors shadow-sm"
                  >
                    <CalendarCheck className="size-4" />
                    <span>{primaryCtaText}</span>
                    <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                  </Link>
                )}
              </motion.div>

              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="w-full sm:w-auto">
                {isSecondaryExternal ? (
                  <a
                    href={secondaryCtaHref}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-slate-200 bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 hover:border-slate-600 rounded-lg transition-colors shadow-2xs"
                  >
                    <Code2 className="size-4 text-blue-400" />
                    <span>{secondaryCtaText}</span>
                  </a>
                ) : (
                  <Link
                    to={secondaryCtaHref}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-slate-200 bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 hover:border-slate-600 rounded-lg transition-colors shadow-2xs"
                  >
                    <Code2 className="size-4 text-blue-400" />
                    <span>{secondaryCtaText}</span>
                  </Link>
                )}
              </motion.div>
            </div>

            {/* Trust Badges Bar */}
            <div className="mt-8 pt-6 border-t border-slate-800/80 flex flex-wrap items-center justify-center gap-5 sm:gap-8 text-xs font-medium text-slate-400">
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
        </motion.div>
      </div>
    </section>
  )
}
