/**
 * Reusable Marketing Final CTA Section
 * High-conversion enterprise command banner with asymmetric split layout:
 * Left: Compelling headline, value proposition, primary & secondary CTAs, and reassurance notes.
 * Right: Live developer dispatch console showcasing omnichannel runtime, low latency, and CRM sync.
 * Strict 4-color palette: White, Blue (#155dfc), Dark Blue (#070d24), Purple (micro-accents).
 * Strictly zero pill shapes.
 */

import React from 'react'
import { Link } from 'react-router'
import { motion } from 'motion/react'
import { ArrowRight, Code2, Check, Sparkles } from 'lucide-react'

interface CTASectionProps {
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
  eyebrow = 'ENTERPRISE CUSTOMER EXPERIENCE',
  headline = 'Ready to Accelerate Your Customer Experience?',
  subheadline = 'Join forward-thinking businesses using PulseQuo to unify omnichannel messaging, automate sales pipelines, and scale customer support with AI.',
  primaryCtaText = 'Book a Personalized Demo',
  primaryCtaHref = '/book-demo',
  secondaryCtaText = 'Explore Developer APIs',
  secondaryCtaHref = '/developers',
  rightContent,
}: CTASectionProps) {
  const isPrimaryExternal = primaryCtaHref.startsWith('http')
  const isSecondaryExternal = secondaryCtaHref.startsWith('http')

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden rounded-2xl bg-[#070d24] border border-blue-950/90 shadow-2xl"
        >
          {/* Top 2px hairline accent line (Blue to Purple gradient) */}
          <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-blue-600 via-purple-500 to-blue-500" />

          {/* Ambient depth lighting */}
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-600/10 blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-12 w-80 h-80 bg-purple-600/10 blur-3xl pointer-events-none" />

          {/* Subtle grid pattern overlay */}
          <div
            className="absolute inset-0 opacity-[0.035] pointer-events-none"
            style={{
              backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)',
              backgroundSize: '24px 24px',
            }}
          />

          <div className="relative z-10 p-8 sm:p-12 lg:p-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
              {/* Left Column: Heading, Value Proposition, Action CTAs */}
              <div className="lg:col-span-7 flex flex-col items-start text-left">
                {/* Eyebrow with small purple micro-accent */}
                <div className="inline-flex items-center gap-2 mb-4">
                  <span className="size-2 rounded-xs bg-purple-500 shrink-0" />
                  <span className="text-xs font-mono font-semibold tracking-wider text-blue-400">
                    {eyebrow}
                  </span>
                </div>

                {/* Headline */}
                <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-[42px] font-black text-white tracking-tight leading-[1.14]">
                  {headline}
                </h2>

                {/* Subheadline */}
                <p className="mt-4 text-sm sm:text-base text-slate-300 max-w-xl leading-relaxed">
                  {subheadline}
                </p>

                {/* Action Buttons */}
                <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto">
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    {isPrimaryExternal ? (
                      <a
                        href={primaryCtaHref}
                        className="group w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm font-bold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors shadow-md shadow-blue-600/25"
                      >
                        <span>{primaryCtaText}</span>
                        <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-1" />
                      </a>
                    ) : (
                      <Link
                        to={primaryCtaHref}
                        className="group w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm font-bold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors shadow-md shadow-blue-600/25"
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
                          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 text-sm font-semibold text-slate-200 bg-slate-900/80 hover:bg-slate-800 border border-slate-700/80 hover:border-slate-600 rounded-lg transition-colors"
                        >
                          <Code2 className="size-4 text-blue-400" />
                          <span>{secondaryCtaText}</span>
                        </a>
                      ) : (
                        <Link
                          to={secondaryCtaHref}
                          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 text-sm font-semibold text-slate-200 bg-slate-900/80 hover:bg-slate-800 border border-slate-700/80 hover:border-slate-600 rounded-lg transition-colors"
                        >
                          <Code2 className="size-4 text-blue-400" />
                          <span>{secondaryCtaText}</span>
                        </Link>
                      )}
                    </motion.div>
                  )}
                </div>

                {/* Reassurance notes (Zero pills, clean structured layout) */}
                <div className="mt-7 flex flex-wrap items-center gap-y-2 gap-x-5 text-xs text-slate-400 font-medium">
                  <div className="flex items-center gap-1.5">
                    <Check className="size-3.5 text-blue-400" />
                    <span>No credit card required</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Check className="size-3.5 text-purple-400" />
                    <span>Dedicated solutions engineer</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Check className="size-3.5 text-blue-400" />
                    <span>99.99% carrier throughput SLA</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Interactive Developer / Omnichannel Runtime Showcase */}
              <div className="lg:col-span-5 w-full">
                {rightContent ? (
                  rightContent
                ) : (
                  <div className="rounded-xl border border-slate-800 bg-[#040817] p-5 sm:p-6 shadow-2xl relative overflow-hidden font-mono text-xs">
                    {/* Console Header Bar */}
                    <div className="flex items-center justify-between pb-3.5 mb-3.5 border-b border-slate-800/80">
                      <div className="flex items-center gap-2">
                        <div className="size-2.5 rounded-xs bg-slate-700" />
                        <div className="size-2.5 rounded-xs bg-slate-700" />
                        <div className="size-2.5 rounded-xs bg-slate-700" />
                        <span className="text-[11px] text-slate-400 font-sans font-medium ml-1.5">
                          dispatch-runtime.ts
                        </span>
                      </div>
                      <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-blue-950/80 border border-blue-900/60 text-[11px] text-blue-300 font-sans font-medium">
                        <span className="size-1.5 rounded-xs bg-purple-400 animate-pulse" />
                        <span>Carrier Node Live</span>
                      </div>
                    </div>

                    {/* Code Snippet */}
                    <div className="space-y-1.5 text-slate-300 leading-relaxed overflow-x-auto text-[11px] sm:text-xs">
                      <div className="text-slate-500">// Initialize PulseQuo Omnichannel Engine</div>
                      <div>
                        <span className="text-purple-400">const</span>{' '}
                        <span className="text-blue-300">pulse</span> ={' '}
                        <span className="text-purple-400">new</span>{' '}
                        <span className="text-white">PulseQuo</span>({'{'}
                      </div>
                      <div className="pl-4">
                        <span className="text-slate-400">apiKey:</span>{' '}
                        <span className="text-emerald-400">"pq_live_9f82c"</span>,
                      </div>
                      <div className="pl-4">
                        <span className="text-slate-400">cluster:</span>{' '}
                        <span className="text-emerald-400">"ap-south-mumbai"</span>,
                      </div>
                      <div>{'}'})</div>

                      <div className="pt-2 text-slate-500">// Dispatch multi-channel broadcast</div>
                      <div>
                        <span className="text-purple-400">await</span>{' '}
                        <span className="text-blue-300">pulse</span>.
                        <span className="text-white">dispatch</span>({'{'}
                      </div>
                      <div className="pl-4">
                        <span className="text-slate-400">channels:</span> [
                        <span className="text-emerald-400">"whatsapp"</span>,{' '}
                        <span className="text-emerald-400">"sms"</span>],
                      </div>
                      <div className="pl-4">
                        <span className="text-slate-400">aiAgent:</span>{' '}
                        <span className="text-purple-400">true</span>,
                      </div>
                      <div className="pl-4">
                        <span className="text-slate-400">crmSync:</span>{' '}
                        <span className="text-emerald-400">"instant"</span>
                      </div>
                      <div>{'})'}</div>
                    </div>

                    {/* Console Footer Stats */}
                    <div className="mt-4 pt-3.5 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-sans">
                      <div className="flex items-center gap-2 text-emerald-400 font-mono">
                        <span className="size-1.5 rounded-xs bg-emerald-400" />
                        <span>200 OK • 24ms</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-slate-400">
                        <Sparkles className="size-3 text-purple-400" />
                        <span>Meta v20 & TRAI DLT</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
