import React from 'react'
import { Link } from 'react-router'
import { motion } from 'motion/react'
import { ArrowRight, Code2, Check } from 'lucide-react'
import { SplitReveal } from './SplitReveal'
import { TypewriterCodeCard } from './TypewriterCodeCard'

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
  eyebrow: _eyebrow,
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
    <section id={id} className="py-7 sm:py-9 lg:py-11 section-fade-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <SplitReveal
              as="h2"
              text={headline}
              trigger="inView"
              delay={0.04}
              stagger={0.035}
              duration={0.5}
              className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-black tracking-[-0.02em] leading-[1.18] text-balance"
            />

            <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-xl leading-relaxed font-normal text-pretty">
              {subheadline}
            </p>

            <div className="mt-7 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto">
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

            <div className="mt-7 pt-5 border-t border-slate-200/80 flex flex-wrap items-center gap-y-3 gap-x-6 text-xs text-slate-600 font-medium">
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
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 'some' }}
            transition={{ duration: 0.5, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 w-full"
          >
            {rightContent ? (
              rightContent
            ) : (
              <div className="relative group">
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -inset-2.5 rounded-3xl opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background:
                      'radial-gradient(circle at 18% 20%, rgba(37,99,235,0.28), transparent 55%), radial-gradient(circle at 84% 80%, rgba(99,102,241,0.24), transparent 55%), radial-gradient(circle at 75% 15%, rgba(6,182,212,0.18), transparent 50%)',
                  }}
                />
                <TypewriterCodeCard
                  filename="dispatch-runtime.ts"
                  statusBadge="RUNTIME v20"
                  code={RUNTIME_SNIPPET}
                  charSpeedMs={24}
                  linePauseMs={160}
                  loop={true}
                  footerLeft={
                    <span className="inline-flex items-center gap-2 text-emerald-300 font-bold tabular-nums">
                      <span className="size-2 rounded-full bg-emerald-400 animate-pulse" />
                      <span>200 OK · 24ms</span>
                    </span>
                  }
                  footerRight={
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-0.5 rounded-sm bg-blue-950/90 text-sky-300 border border-blue-800/80 font-semibold">
                        Meta v20
                      </span>
                      <span className="px-2 py-0.5 rounded-sm bg-indigo-950/90 text-purple-300 border border-indigo-800/80 font-semibold">
                        TRAI DLT
                      </span>
                    </div>
                  }
                />
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
