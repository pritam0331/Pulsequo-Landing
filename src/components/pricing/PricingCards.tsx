import { useState } from 'react'
import { Link } from 'react-router'
import { motion, AnimatePresence } from 'motion/react'
import {
  CheckCircle2,
  ArrowRight,
  Phone,
  Mail,
  CalendarCheck,
  Zap,
  Building2,
  Sparkles,
} from 'lucide-react'
import { pricingTiers, pricingAdditionalSupport, type PricingPlanTier } from '../../data/pricing'
import { HorizontalCardCarousel } from '../common/HorizontalCardCarousel'
import { PricingCardsSkeleton, useCardHydration } from '../common/CardSkeleton'

interface PricingCardsProps {
  className?: string
  defaultAnnual?: boolean
  showAdditionalSupport?: boolean
  isLoading?: boolean
}

export function PricingCards({
  className = '',
  defaultAnnual = true,
  showAdditionalSupport = true,
  isLoading,
}: PricingCardsProps) {
  const [isAnnual, setIsAnnual] = useState(defaultAnnual)
  const isHydrated = useCardHydration(200)
  const showSkeleton = isLoading ?? !isHydrated

  if (showSkeleton) {
    return (
      <div aria-busy="true" aria-label="Loading pricing plans">
        <PricingCardsSkeleton
          showAdditionalSupport={showAdditionalSupport}
          className={className}
        />
      </div>
    )
  }

  return (
    <div className={`w-full ${className}`}>
      <div className="flex flex-col items-center justify-center">
        <div className="inline-flex items-center gap-1 p-1.5 rounded-2xl bg-[#070d24] border border-blue-950/90 shadow-lg shadow-blue-950/15">
          <button
            type="button"
            onClick={() => setIsAnnual(false)}
            className={`relative rounded-xl px-5 py-2 text-xs sm:text-sm font-bold transition-colors cursor-pointer ${
              !isAnnual ? 'text-white' : 'text-slate-400 hover:text-white'
            }`}
          >
            {!isAnnual && (
              <motion.span
                layoutId="billing-toggle-indicator"
                transition={{ type: 'spring', stiffness: 380, damping: 28 }}
                className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 shadow-md shadow-blue-600/30"
              />
            )}
            <span className="relative z-10">Monthly Billing</span>
          </button>

          <button
            type="button"
            onClick={() => setIsAnnual(true)}
            className={`relative flex items-center gap-2 rounded-xl px-5 py-2 text-xs sm:text-sm font-bold transition-colors cursor-pointer ${
              isAnnual ? 'text-white' : 'text-slate-400 hover:text-white'
            }`}
          >
            {isAnnual && (
              <motion.span
                layoutId="billing-toggle-indicator"
                transition={{ type: 'spring', stiffness: 380, damping: 28 }}
                className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 shadow-md shadow-blue-600/35"
              />
            )}
            <span className="relative z-10">Annual Billing</span>
            <span
              className={`relative z-10 rounded-md px-2 py-0.5 text-[10.5px] font-bold tracking-wide transition-colors ${
                isAnnual
                  ? 'bg-emerald-400/20 text-emerald-300 border border-emerald-400/40'
                  : 'bg-emerald-500/15 text-emerald-300 border border-emerald-500/30'
              }`}
            >
              Save 20%
            </span>
          </button>
        </div>

        <p className="mt-2.5 text-xs text-slate-500">
          {isAnnual
            ? '20% discount automatically applied on all annual subscriptions.'
            : 'Flexible month-to-month plans. Switch to annual anytime to save 20%.'}
        </p>
      </div>

      <div className="mt-6 sm:mt-7 max-w-7xl mx-auto">
        <HorizontalCardCarousel
          mode="mobile"
          itemCount={pricingTiers.length}
          ariaLabel="Pricing plans"
          counterLabel="Swipe plans"
          desktopGridClassName="lg:grid lg:grid-cols-3 lg:gap-5 lg:overflow-visible"
          disableSkeleton={true}
        >
          {pricingTiers.map((plan: PricingPlanTier, idx: number) => {
            const isPopular = plan.popular
            const isEnterprise = plan.id === 'enterprise'

            const currentPrice = isEnterprise
              ? 'Custom'
              : isAnnual
                ? `$${plan.annualRate}`
                : `$${plan.monthlyRate}`

            const originalMonthlyPrice = !isEnterprise ? `$${plan.monthlyRate}` : null

            return (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 'some' }}
                transition={{ duration: 0.4, delay: idx * 0.06, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -4, transition: { type: 'spring', stiffness: 360, damping: 26 } }}
                data-cursor="glass"
                data-cursor-theme="dark"
                data-dark-card="true"
                className={`snap-center shrink-0 w-[88vw] max-w-[380px] sm:w-[390px] lg:w-auto lg:max-w-none group relative rounded-2xl overflow-hidden flex flex-col justify-between transition-all duration-300 bg-[#070d24] text-white ${
                  isPopular
                    ? 'border-[1.5px] border-blue-500/80 shadow-[0_18px_42px_-12px_rgba(37,99,235,0.45)]'
                    : isEnterprise
                      ? 'border border-purple-500/35 shadow-xl shadow-slate-950/25 hover:border-purple-400/70'
                      : 'border border-cyan-500/30 shadow-xl shadow-slate-950/25 hover:border-cyan-400/70'
                }`}
              >
                {/* Colorful Animated Top Gradient Beam */}
                <div
                  className={`h-[3px] w-full pq-code-showcase-beam ${
                    isPopular
                      ? 'bg-gradient-to-r from-blue-500 via-indigo-400 via-purple-500 to-blue-500'
                      : isEnterprise
                        ? 'bg-gradient-to-r from-purple-500 via-fuchsia-500 via-indigo-400 to-purple-500'
                        : 'bg-gradient-to-r from-cyan-400 via-blue-500 via-emerald-400 to-cyan-400'
                  }`}
                />

                {/* Subtle Colorful Ambient Depth Glows */}
                <div
                  aria-hidden="true"
                  className={`pointer-events-none absolute -top-10 -right-10 w-44 h-44 rounded-full blur-3xl opacity-35 transition-opacity duration-300 group-hover:opacity-55 ${
                    isPopular
                      ? 'bg-blue-600'
                      : isEnterprise
                        ? 'bg-purple-600'
                        : 'bg-cyan-500'
                  }`}
                />
                <div
                  aria-hidden="true"
                  className={`pointer-events-none absolute -bottom-12 -left-10 w-40 h-40 rounded-full blur-3xl opacity-25 transition-opacity duration-300 group-hover:opacity-45 ${
                    isPopular
                      ? 'bg-purple-600'
                      : isEnterprise
                        ? 'bg-indigo-600'
                        : 'bg-emerald-500'
                  }`}
                />

                <div className="relative z-10 p-4 sm:p-5 flex flex-col flex-1">
                  {/* Compact Header Row */}
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2.5 min-w-0">
                      <div
                        className={`size-9 rounded-xl flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-200 ${
                          isPopular
                            ? 'bg-gradient-to-br from-blue-500 to-indigo-600 text-white shadow-md shadow-blue-600/35'
                            : isEnterprise
                              ? 'bg-gradient-to-br from-purple-500 to-fuchsia-600 text-white shadow-md shadow-purple-600/30'
                              : 'bg-gradient-to-br from-cyan-500 to-blue-600 text-white shadow-md shadow-cyan-500/30'
                        }`}
                      >
                        {plan.id === 'starter' && <Zap className="size-4" />}
                        {plan.id === 'growth' && <Sparkles className="size-4" />}
                        {plan.id === 'enterprise' && <Building2 className="size-4" />}
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight truncate">
                        {plan.name}
                      </h3>
                    </div>

                    {isPopular ? (
                      <span className="inline-flex items-center gap-1 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-500 px-2.5 py-0.5 text-[10.5px] font-bold text-white shadow-sm whitespace-nowrap shrink-0">
                        <Sparkles className="size-3" />
                        <span>{plan.badge || 'Most Popular'}</span>
                      </span>
                    ) : (
                      plan.badge && (
                        <span className="rounded-md bg-white/[0.08] border border-white/10 px-2 py-0.5 text-[10.5px] font-semibold text-slate-300 whitespace-nowrap shrink-0">
                          {plan.badge}
                        </span>
                      )
                    )}
                  </div>

                  <p className="mt-2 text-xs text-slate-300 leading-snug">
                    {plan.targetAudience}
                  </p>

                  {/* Compact Dark Colorful Glass Price Strip */}
                  <div
                    className={`mt-3 rounded-xl px-3.5 py-2.5 border flex items-center justify-between gap-2 ${
                      isPopular
                        ? 'bg-blue-500/12 border-blue-400/30'
                        : isEnterprise
                          ? 'bg-purple-500/12 border-purple-400/25'
                          : 'bg-cyan-500/10 border-cyan-400/25'
                    }`}
                  >
                    <div className="flex items-baseline gap-1.5 min-w-0">
                      <AnimatePresence mode="wait">
                        <motion.span
                          key={currentPrice}
                          initial={{ opacity: 0, y: 4 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -4 }}
                          transition={{ duration: 0.16, ease: [0.22, 1, 0.36, 1] }}
                          className="text-[28px] sm:text-[32px] font-extrabold text-white tracking-[-0.03em] tabular-nums leading-none"
                        >
                          {currentPrice}
                        </motion.span>
                      </AnimatePresence>
                      {!isEnterprise && (
                        <span className="text-xs font-medium text-slate-400">/mo</span>
                      )}
                      {isAnnual && !isEnterprise && originalMonthlyPrice && (
                        <span className="text-xs text-slate-500 line-through font-medium tabular-nums">
                          {originalMonthlyPrice}
                        </span>
                      )}
                    </div>

                    <div className="text-[11px] text-right shrink-0">
                      {isEnterprise ? (
                        <span className="font-semibold text-purple-300">
                          Dedicated SLAs
                        </span>
                      ) : isAnnual ? (
                        <span className="inline-flex items-center rounded-md bg-emerald-500/15 border border-emerald-400/30 px-2 py-0.5 text-emerald-300 font-semibold">
                          Annual · {plan.discountText}
                        </span>
                      ) : (
                        <span className="text-slate-400 font-medium">Cancel anytime</span>
                      )}
                    </div>
                  </div>

                  {/* Compact Feature List */}
                  <div className="mt-3.5 flex-1">
                    <p className="text-[10px] font-bold uppercase tracking-[0.09em] text-slate-400">
                      What&apos;s Included
                    </p>
                    <ul className="mt-2 space-y-1.5">
                      {plan.features.map((feature, fIdx) => (
                        <li
                          key={fIdx}
                          className="flex items-center gap-2 text-[12.5px] font-medium text-slate-200"
                        >
                          <CheckCircle2
                            strokeWidth={2}
                            className={`size-4 shrink-0 ${
                              isPopular
                                ? 'text-blue-400'
                                : isEnterprise
                                  ? 'text-purple-400'
                                  : 'text-emerald-400'
                            }`}
                          />
                          <span className="leading-snug truncate">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Compact CTA Footer */}
                  <div className="mt-3.5 pt-3 border-t border-white/10">
                    <Link
                      to={plan.ctaHref}
                      className={`group w-full inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-xs sm:text-sm font-bold transition-all ${
                        isPopular
                          ? 'btn-shine bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white shadow-lg shadow-blue-600/30'
                          : isEnterprise
                            ? 'bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white shadow-md shadow-purple-900/30'
                            : 'bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white shadow-md shadow-cyan-900/30'
                      }`}
                    >
                      <span>{plan.ctaText}</span>
                      <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-1" />
                    </Link>
                    <p className="mt-1.5 text-center text-[11px] text-slate-400">
                      {isEnterprise
                        ? 'No commitment · Speak with enterprise engineers'
                        : 'Instant activation · No credit card required'}
                    </p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </HorizontalCardCarousel>
      </div>

      {showAdditionalSupport && (
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 'some' }}
          transition={{ duration: 0.45, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          data-cursor="glass"
          data-cursor-theme="dark"
          data-dark-card="true"
          className="mt-6 max-w-7xl mx-auto relative overflow-hidden rounded-2xl bg-[#070d24] border border-blue-900/80 hover:border-blue-500/60 shadow-xl shadow-blue-950/20 transition-all duration-200"
        >
          <div className="h-[3px] w-full pq-code-showcase-beam bg-gradient-to-r from-cyan-400 via-blue-500 via-purple-500 to-cyan-400" />
          <div className="p-4 sm:p-5 flex flex-col lg:flex-row items-center justify-between gap-4">
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-400">
                <CalendarCheck className="size-3.5 text-blue-400" />
                <span>Additional Support &amp; Custom Planning</span>
              </span>

              <h3 className="text-base sm:text-lg font-bold text-white mt-1 text-balance">
                {pricingAdditionalSupport.headline}
              </h3>

              <p className="mt-1 text-xs sm:text-sm text-slate-300 leading-relaxed">
                {pricingAdditionalSupport.description}
              </p>

              <div className="mt-2.5 flex flex-wrap items-center gap-x-5 gap-y-1.5 text-xs text-slate-300">
                <a
                  href={`tel:${pricingAdditionalSupport.phone.replace(/\s+/g, '')}`}
                  className="inline-flex items-center gap-1.5 font-medium hover:text-blue-400 transition-colors"
                >
                  <Phone className="size-3.5 text-cyan-400 shrink-0" />
                  <span>{pricingAdditionalSupport.phone}</span>
                </a>

                <a
                  href={`mailto:${pricingAdditionalSupport.email}`}
                  className="inline-flex items-center gap-1.5 font-medium hover:text-blue-400 transition-colors"
                >
                  <Mail className="size-3.5 text-purple-400 shrink-0" />
                  <span>{pricingAdditionalSupport.email}</span>
                </a>
              </div>
            </div>

            <div className="shrink-0 w-full sm:w-auto">
              <Link
                to={pricingAdditionalSupport.ctaHref}
                className="group btn-shine w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 hover:-translate-y-0.5 text-white font-bold px-5 py-2.5 text-xs sm:text-sm shadow-md shadow-blue-600/30 transition-all"
              >
                <CalendarCheck className="size-4" />
                <span>{pricingAdditionalSupport.ctaText}</span>
                <ArrowRight className="size-3.5 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  )
}
