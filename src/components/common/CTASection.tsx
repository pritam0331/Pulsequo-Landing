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
    <section id={id} className="py-12 sm:py-16 lg:py-20 section-fade-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Heading, Value Proposition, Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.18 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 flex flex-col items-start text-left"
          >
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
              <div className="relative group">
                {/* Ambient Website-Theme Blue/Indigo/Violet Halo */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -inset-2 rounded-3xl opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background:
                      'radial-gradient(circle at 18% 20%, rgba(21,93,252,0.16), transparent 55%), radial-gradient(circle at 84% 80%, rgba(124,58,237,0.16), transparent 55%), radial-gradient(circle at 75% 15%, rgba(16,185,129,0.12), transparent 50%)',
                  }}
                />

                <div
                  data-cursor="glass"
                  className="relative rounded-2xl border border-blue-200/80 bg-white text-slate-900 shadow-xl shadow-blue-950/8 hover:border-blue-400/80 hover:shadow-2xl hover:shadow-blue-950/12 transition-all duration-300 overflow-hidden"
                >
                  {/* Vibrant Brand-Theme Top Gradient Bar */}
                  <div className="h-1.5 w-full bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-500" />

                  {/* Console Header Bar */}
                  <div className="flex items-center justify-between px-5 py-3.5 bg-gradient-to-r from-blue-50/90 via-indigo-50/70 to-purple-50/80 border-b border-blue-100/90">
                    <div className="flex items-center gap-2.5">
                      <div className="flex items-center gap-1.5">
                        <div className="size-2.5 rounded-full bg-rose-400" />
                        <div className="size-2.5 rounded-full bg-amber-400" />
                        <div className="size-2.5 rounded-full bg-emerald-400" />
                      </div>
                      <div className="ml-1 inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-white border border-blue-200/80 shadow-2xs">
                        <Code2 className="size-3.5 text-blue-600" />
                        <span className="text-xs text-slate-800 font-mono font-bold whitespace-nowrap">
                          dispatch-runtime.ts
                        </span>
                      </div>
                    </div>

                    {/* Working Copy Button */}
                    <button
                      type="button"
                      onClick={handleCopy}
                      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white hover:bg-blue-600 border border-blue-200/90 hover:border-blue-600 text-[11px] font-mono font-semibold text-blue-700 hover:text-white shadow-2xs transition-colors cursor-pointer shrink-0"
                    >
                      {copied ? (
                        <>
                          <Check className="size-3 text-emerald-500" />
                          <span className="text-emerald-600">Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy className="size-3" />
                          <span>Copy</span>
                        </>
                      )}
                    </button>
                  </div>

                  {/* Light Brand-Theme Colorful Syntax Canvas */}
                  <div className="p-4 sm:p-5 bg-white">
                    <div className="bg-gradient-to-br from-slate-50/95 via-blue-50/35 to-indigo-50/45 rounded-xl border border-blue-100/90 p-4 font-mono text-[11.5px] sm:text-xs leading-relaxed overflow-x-auto">
                      <div className="flex gap-3">
                        <span className="select-none text-slate-400 text-right w-4">1</span>
                        <div>
                          <span className="text-blue-600 font-bold">const</span>{' '}
                          <span className="text-slate-900 font-semibold">pulse</span>{' '}
                          <span className="text-rose-500 font-semibold">=</span>{' '}
                          <span className="text-blue-600 font-bold">new</span>{' '}
                          <span className="text-purple-600 font-bold">PulseQuo</span>
                          <span className="text-indigo-500 font-semibold">{'({'}</span>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <span className="select-none text-slate-400 text-right w-4">2</span>
                        <div className="pl-4">
                          <span className="text-indigo-700 font-medium">apiKey</span>
                          <span className="text-slate-400">:</span>{' '}
                          <span className="text-emerald-600 font-semibold">&quot;pq_live_9f82c&quot;</span>
                          <span className="text-slate-400">,</span>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <span className="select-none text-slate-400 text-right w-4">3</span>
                        <div className="pl-4">
                          <span className="text-indigo-700 font-medium">cluster</span>
                          <span className="text-slate-400">:</span>{' '}
                          <span className="text-emerald-600 font-semibold">&quot;ap-south-mumbai&quot;</span>
                          <span className="text-slate-400">,</span>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <span className="select-none text-slate-400 text-right w-4">4</span>
                        <div className="text-indigo-500 font-semibold">{'})'}</div>
                      </div>

                      <div className="flex gap-3 mt-2.5">
                        <span className="select-none text-slate-400 text-right w-4">5</span>
                        <div>
                          <span className="text-purple-600 font-bold">await</span>{' '}
                          <span className="text-slate-900 font-semibold">pulse</span>
                          <span className="text-slate-400">.</span>
                          <span className="text-blue-600 font-bold">dispatch</span>
                          <span className="text-indigo-500 font-semibold">{'({'}</span>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <span className="select-none text-slate-400 text-right w-4">6</span>
                        <div className="pl-4">
                          <span className="text-indigo-700 font-medium">channels</span>
                          <span className="text-slate-400">:</span>{' '}
                          <span className="text-purple-500 font-semibold">[</span>
                          <span className="text-emerald-600 font-semibold">&quot;whatsapp&quot;</span>
                          <span className="text-slate-400">,</span>{' '}
                          <span className="text-teal-600 font-semibold">&quot;sms&quot;</span>
                          <span className="text-purple-500 font-semibold">]</span>
                          <span className="text-slate-400">,</span>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <span className="select-none text-slate-400 text-right w-4">7</span>
                        <div className="pl-4">
                          <span className="text-indigo-700 font-medium">aiAgent</span>
                          <span className="text-slate-400">:</span>{' '}
                          <span className="text-fuchsia-600 font-bold">true</span>
                          <span className="text-slate-400">,</span>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <span className="select-none text-slate-400 text-right w-4">8</span>
                        <div className="pl-4">
                          <span className="text-indigo-700 font-medium">crmSync</span>
                          <span className="text-slate-400">:</span>{' '}
                          <span className="text-amber-600 font-semibold">&quot;instant&quot;</span>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <span className="select-none text-slate-400 text-right w-4">9</span>
                        <div className="text-indigo-500 font-semibold">{'})'}</div>
                      </div>
                    </div>
                  </div>

                  {/* Crisp Colorful Light Status Footer */}
                  <div className="px-5 py-3 bg-gradient-to-r from-blue-50/70 via-white to-purple-50/70 border-t border-blue-100/80 flex items-center justify-between gap-2 text-[11px] font-mono">
                    <span className="inline-flex items-center gap-2 text-emerald-700 font-bold tabular-nums">
                      <span className="size-2 rounded-full bg-emerald-500" />
                      <span>200 OK · 24ms</span>
                    </span>
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-0.5 rounded-sm bg-blue-50 text-blue-700 border border-blue-200/80 font-semibold">
                        Meta v20
                      </span>
                      <span className="px-2 py-0.5 rounded-sm bg-purple-50 text-purple-700 border border-purple-200/80 font-semibold">
                        TRAI DLT
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
