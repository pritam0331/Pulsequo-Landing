/**
 * Reusable Marketing Final CTA Section
 * Redesigned in an open 2-column layout (no enclosing card/box container):
 * - Left column: Enterprise heading, value proposition, CTAs, and reassurance points directly on page
 * - Right column: Clean interactive runtime console visual card matching the Lead Qualification canvas
 * Strictly zero pill shapes.
 */

import React from 'react'
import { Link } from 'react-router'
import { motion } from 'motion/react'
import { ArrowRight, Code2, Check, Sparkles } from 'lucide-react'

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
  eyebrow = 'ENTERPRISE CUSTOMER EXPERIENCE',
  headline = 'Ready to Accelerate Your Customer Experience?',
  subheadline = 'Join forward-thinking businesses using PulseQuo to unify omnichannel messaging, automate sales pipelines, and scale customer support with AI.',
  primaryCtaText = 'Book a Personalized Demo',
  primaryCtaHref = '/book-demo',
  secondaryCtaText = 'Explore Developer APIs',
  secondaryCtaHref = '/developers',
  showTrustBadges: _showTrustBadges,
  rightContent,
}: CTASectionProps) {
  const isPrimaryExternal = primaryCtaHref.startsWith('http')
  const isSecondaryExternal = secondaryCtaHref.startsWith('http')

  return (
    <section id={id} className="py-12 sm:py-16 lg:py-20 bg-white relative border-t border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Heading, Value Proposition, Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 flex flex-col items-start text-left"
          >
            {/* Eyebrow in Lead Qualification typography */}
            <div className="inline-flex items-center gap-2 mb-3.5">
              <span className="size-2 rounded-xs bg-blue-600 shrink-0" />
              <span className="text-xs font-mono font-bold tracking-wider text-blue-600 uppercase">
                {eyebrow}
              </span>
            </div>

            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-black text-slate-900 tracking-tight leading-[1.12]">
              {headline}
            </h2>

            {/* Subheadline */}
            <p className="mt-4 sm:mt-5 text-base sm:text-lg text-slate-600 max-w-xl leading-relaxed font-normal">
              {subheadline}
            </p>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto">
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                {isPrimaryExternal ? (
                  <a
                    href={primaryCtaHref}
                    className="group w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm sm:text-base font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-xl transition-all shadow-md shadow-blue-500/20"
                  >
                    <span>{primaryCtaText}</span>
                    <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-1" />
                  </a>
                ) : (
                  <Link
                    to={primaryCtaHref}
                    className="group w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm sm:text-base font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-xl transition-all shadow-md shadow-blue-500/20"
                  >
                    <span>{primaryCtaText}</span>
                    <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-1" />
                  </Link>
                )}
              </motion.div>

              {secondaryCtaText && (
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
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

            {/* Reassurance notes (Lead Qualification styled badges) */}
            <div className="mt-8 pt-6 border-t border-slate-200/80 flex flex-wrap items-center gap-y-3 gap-x-6 text-xs text-slate-600 font-medium">
              <div className="flex items-center gap-2">
                <div className="size-5 rounded-md bg-emerald-50 text-emerald-600 border border-emerald-200/80 flex items-center justify-center shrink-0">
                  <Check className="size-3 stroke-[2.5]" />
                </div>
                <span>No credit card required</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="size-5 rounded-md bg-blue-50 text-blue-600 border border-blue-200/80 flex items-center justify-center shrink-0">
                  <Check className="size-3 stroke-[2.5]" />
                </div>
                <span>Dedicated solutions engineer</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="size-5 rounded-md bg-purple-50 text-purple-600 border border-purple-200/80 flex items-center justify-center shrink-0">
                  <Check className="size-3 stroke-[2.5]" />
                </div>
                <span>99.99% carrier throughput SLA</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Visual Console Card matching Lead Qualification */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 w-full"
          >
            {rightContent ? (
              rightContent
            ) : (
              <div className="rounded-2xl border border-slate-200/90 bg-white p-5 sm:p-6 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden">
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

                  {/* Live Badge */}
                  <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-emerald-50 border border-emerald-200/80 text-[11px] font-mono font-semibold text-emerald-700 shrink-0">
                    <span className="size-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span>Carrier Node Live</span>
                  </div>
                </div>

                {/* Code Snippet in Light Syntax Highlighting */}
                <div className="bg-slate-50/80 rounded-xl border border-slate-200/70 p-4 font-mono text-[11px] sm:text-xs leading-relaxed overflow-x-auto text-slate-800">
                  <div className="text-slate-400 font-mono">// Initialize PulseQuo Omnichannel Engine</div>
                  <div className="mt-1">
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

                  <div className="pt-2 text-slate-400 font-mono">// Dispatch multi-channel broadcast</div>
                  <div className="mt-1">
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
                <div className="mt-4 pt-3.5 border-t border-slate-200/80 flex items-center justify-between text-[11px] font-sans">
                  <div className="flex items-center gap-2 text-emerald-700 font-mono font-bold">
                    <span className="size-1.5 rounded-full bg-emerald-500" />
                    <span>200 OK • 24ms</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-slate-500 font-medium">
                    <Sparkles className="size-3 text-purple-600" />
                    <span>Meta v20 & TRAI DLT</span>
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
