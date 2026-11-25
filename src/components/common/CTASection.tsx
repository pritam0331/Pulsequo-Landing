/**
 * Reusable Marketing Final CTA Section
 * Redesigned in an open 2-column layout (no enclosing card/box container):
 * - Left column: Enterprise heading, value proposition, CTAs, and reassurance points directly on page
 * - Right column: Clean interactive runtime console visual card matching the Lead Qualification canvas
 * Strictly zero pill shapes.
 */

import React, { useState } from 'react'
import { Link } from 'react-router'
import { motion } from 'motion/react'
import { ArrowRight, Code2, Check, Copy } from 'lucide-react'
import { SplitReveal } from './SplitReveal'

const RUNTIME_SNIPPET = `const pulse = new PulseQuo({
  apiKey: "pq_live_9f82c",
  cluster: "ap-south-mumbai",
})

await pulse.dispatch({
  channels: ["whatsapp", "sms"],
  aiAgent: true,
  crmSync: "instant",
})`

interface CTASectionProps {
  id?: string
  eyebrow?: string
  headline?: string
  subheadline?: string
  primaryCtaText?: string
  primaryCtaHref?: string
  secondaryCtaText?: string
  secondaryCtaHref?: string
  showTrustBadges?: boolean
  rightContent?: React.ReactNode
}

export function CTASection({
  id = 'get-started',
  eyebrow = 'Enterprise Customer Experience',
  headline = 'Ready to Accelerate Your Customer Experience?',
  subheadline = 'Join forward-thinking businesses using PulseQuo to unify omnichannel messaging, automate sales pipelines, and scale customer support with AI.',
  primaryCtaText = 'Book a Personalized Demo',
  primaryCtaHref = '/book-demo',
  secondaryCtaText = 'Explore Developer APIs',
  secondaryCtaHref = '/developers',
  showTrustBadges: _showTrustBadges,
  rightContent,
}: CTASectionProps) {
  const [copied, setCopied] = useState(false)
  const isPrimaryExternal = primaryCtaHref.startsWith('http')
  const isSecondaryExternal = secondaryCtaHref.startsWith('http')

  const handleCopy = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(RUNTIME_SNIPPET).catch(() => {})
    }
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section id={id} className="py-12 sm:py-16 lg:py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Heading, Value Proposition, Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 flex flex-col items-start text-left"
          >
            {/* Clean Unboxed Kicker */}
            <div className="inline-flex items-center gap-2.5 mb-3.5">
              <span className="h-[2px] w-6 rounded-full bg-blue-600 shrink-0" />
              <span className="text-xs font-semibold tracking-wide text-blue-600">
                {eyebrow}
              </span>
            </div>

            {/* Headline with SplitReveal */}
            <SplitReveal
              as="h2"
              text={headline}
              trigger="inView"
              delay={0.05}
              stagger={0.04}
              duration={0.55}
              className="text-3xl sm:text-4xl lg:text-[44px] font-black text-slate-900 tracking-tight leading-[1.12] text-balance"
            />

            {/* Subheadline */}
            <p className="mt-4 sm:mt-5 text-base sm:text-lg text-slate-600 max-w-xl leading-relaxed font-normal text-pretty">
              {subheadline}
            </p>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto">
              <motion.div whileHover={{ y: -2, scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                {isPrimaryExternal ? (
                  <a
                    href={primaryCtaHref}
                    className="group btn-shine w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm sm:text-base font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-xl transition-all shadow-md shadow-blue-500/20"
                  >
                    <span>{primaryCtaText}</span>
                    <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-1" />
                  </a>
                ) : (
                  <Link
                    to={primaryCtaHref}
                    className="group btn-shine w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm sm:text-base font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-xl transition-all shadow-md shadow-blue-500/20"
                  >
                    <span>{primaryCtaText}</span>
                    <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-1" />
                  </Link>
                )}
              </motion.div>

              {secondaryCtaText && (
                <motion.div whileHover={{ y: -2, scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  {isSecondaryExternal ? (
                    <a
                      href={secondaryCtaHref}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 text-sm sm:text-base font-bold text-slate-700 hover:text-slate-900 bg-white hover:bg-slate-50 border border-slate-200 hover:border-slate-300 rounded-xl transition-all shadow-xs"
                    >
                      <Code2 className="size-4 text-slate-500" />
                      <span>{secondaryCtaText}</span>
                    </a>
                  ) : (
                    <Link
                      to={secondaryCtaHref}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 text-sm sm:text-base font-bold text-slate-700 hover:text-slate-900 bg-white hover:bg-slate-50 border border-slate-200 hover:border-slate-300 rounded-xl transition-all shadow-xs"
                    >
                      <Code2 className="size-4 text-slate-500" />
                      <span>{secondaryCtaText}</span>
                    </Link>
                  )}
                </motion.div>
              )}
            </div>

            {/* Reassurance notes */}
            <div className="mt-8 pt-6 border-t border-slate-200/80 flex flex-wrap items-center gap-y-3 gap-x-6 text-xs text-slate-600 font-medium">
              <div className="flex items-center gap-2">
                <Check className="size-4 text-emerald-600 stroke-[2.5] shrink-0" />
                <span>No credit card required</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="size-4 text-blue-600 stroke-[2.5] shrink-0" />
                <span>Dedicated solutions engineer</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="size-4 text-purple-600 stroke-[2.5] shrink-0" />
                <span>99.99% carrier throughput SLA</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Visual Console Card */}
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.55, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -4, transition: { type: 'spring', stiffness: 300, damping: 24 } }}
            className="lg:col-span-5 w-full"
          >
            {rightContent ? (
              rightContent
            ) : (
              <div
                data-cursor="glass"
                className="rounded-2xl border border-slate-200/90 bg-white/95 backdrop-blur-sm p-5 sm:p-6 shadow-sm hover:shadow-xl hover:border-blue-300/90 transition-all duration-200 relative overflow-hidden group"
              >
                {/* Console Header Bar */}
                <div className="flex items-center justify-between pb-3.5 mb-3.5 border-b border-slate-200/80">
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1.5">
                      <div className="size-2.5 rounded-full bg-slate-300" />
                      <div className="size-2.5 rounded-full bg-slate-300" />
                      <div className="size-2.5 rounded-full bg-slate-300" />
                    </div>
                    <span className="text-xs text-slate-700 font-mono font-bold ml-1.5 whitespace-nowrap">
                      dispatch-runtime.ts
                    </span>
                  </div>

                  {/* Working Copy Button */}
                  <button
                    type="button"
                    onClick={handleCopy}
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-50 hover:bg-blue-50 border border-slate-200/80 hover:border-blue-200 text-[11px] font-mono font-semibold text-slate-600 hover:text-blue-700 transition-colors cursor-pointer shrink-0"
                  >
                    {copied ? (
                      <>
                        <Check className="size-3 text-emerald-600" />
                        <span className="text-emerald-700">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="size-3" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Code Snippet in Light Syntax Highlighting */}
                <div className="bg-slate-50/90 rounded-xl border border-slate-200/70 p-4 font-mono text-[11px] sm:text-xs leading-relaxed overflow-x-auto text-slate-800">
                  <div className="mt-0.5">
                    <span className="text-blue-600 font-bold">const</span>{' '}
                    <span className="text-slate-900 font-semibold">pulse</span> ={' '}
                    <span className="text-blue-600 font-bold">new</span>{' '}
                    <span className="text-indigo-600 font-bold">PulseQuo</span>({'{'}
                  </div>
                  <div className="pl-4">
                    <span className="text-slate-600">apiKey:</span>{' '}
                    <span className="text-emerald-700 font-medium">"pq_live_9f82c"</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-slate-600">cluster:</span>{' '}
                    <span className="text-emerald-700 font-medium">"ap-south-mumbai"</span>,
                  </div>
                  <div>{'}'})</div>

                  <div className="mt-3">
                    <span className="text-blue-600 font-bold">await</span>{' '}
                    <span className="text-slate-900 font-semibold">pulse</span>.
                    <span className="text-indigo-600 font-bold">dispatch</span>({'{'}
                  </div>
                  <div className="pl-4">
                    <span className="text-slate-600">channels:</span> [
                    <span className="text-emerald-700 font-medium">"whatsapp"</span>,{' '}
                    <span className="text-emerald-700 font-medium">"sms"</span>],
                  </div>
                  <div className="pl-4">
                    <span className="text-slate-600">aiAgent:</span>{' '}
                    <span className="text-purple-600 font-bold">true</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-slate-600">crmSync:</span>{' '}
                    <span className="text-emerald-700 font-medium">"instant"</span>
                  </div>
                  <div>{'})'}</div>
                </div>

                {/* Console Footer Stats */}
                <div className="mt-4 pt-3.5 border-t border-slate-200/80 flex items-center justify-between text-[11px] font-mono">
                  <span className="text-emerald-700 font-semibold tabular-nums">
                    200 OK · 24ms
                  </span>
                  <span className="text-slate-500 font-medium">
                    Meta v20 · TRAI DLT
                  </span>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
