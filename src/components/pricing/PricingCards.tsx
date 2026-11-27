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
        <div className="inline-flex items-center gap-1 p-1.5 rounded-2xl bg-slate-100/90 border border-slate-200/90 shadow-xs">
          <button
            type="button"
            onClick={() => setIsAnnual(false)}
            className={`relative rounded-xl px-5 py-2 text-xs sm:text-sm font-bold transition-colors cursor-pointer ${
              !isAnnual ? 'text-white' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            {!isAnnual && (
              <motion.span
                layoutId="billing-toggle-indicator"
                transition={{ type: 'spring', stiffness: 380, damping: 28 }}
                className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 shadow-sm shadow-blue-600/25"
              />
            )}
            <span className="relative z-10">Monthly Billing</span>
          </button>

          <button
            type="button"
            onClick={() => setIsAnnual(true)}
            className={`relative flex items-center gap-2 rounded-xl px-5 py-2 text-xs sm:text-sm font-bold transition-colors cursor-pointer ${
              isAnnual ? 'text-white' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            {isAnnual && (
              <motion.span
                layoutId="billing-toggle-indicator"
                transition={{ type: 'spring', stiffness: 380, damping: 28 }}
                className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 shadow-sm shadow-blue-600/25"
              />
            )}
            <span className="relative z-10">Annual Billing</span>
            <span
              className={`relative z-10 rounded-md px-2 py-0.5 text-[10.5px] font-bold tracking-wide transition-colors ${
                isAnnual
                  ? 'bg-white/20 text-white border border-white/30'
                  : 'bg-emerald-50 text-emerald-700 border border-emerald-200'
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
                whileHover={{ y: -5, transition: { type: 'spring', stiffness: 360, damping: 26 } }}
                data-cursor="glass"
                className={`pq-glow-card ${isPopular ? 'pq-glow-card-featured' : ''} snap-center shrink-0 w-[88vw] max-w-[380px] sm:w-[390px] lg:w-auto lg:max-w-none group relative rounded-2xl overflow-hidden flex flex-col justify-between bg-white text-slate-900 ${
                  isPopular
                    ? 'border border-blue-400/90 shadow-xl shadow-blue-900/10'
                    : 'border border-slate-200/90 shadow-sm hover:border-blue-300/80'
                }`}
              >
                {/* PulseQuo Website Theme Top Accent Beam */}
                <div
                  className={`h-[3px] w-full pq-code-showcase-beam ${
                    isPopular
                      ? 'bg-gradient-to-r from-blue-600 via-indigo-600 via-violet-600 to-blue-600'
                      : isEnterprise
                        ? 'bg-gradient-to-r from-indigo-500 via-violet-500 to-purple-500'
                        : 'bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-500'
                  }`}
                />

                {/* Subtle Light Ambient Corner Wash */}
                <div
                  aria-hidden="true"
                  className={`pointer-events-none absolute -top-12 -right-12 w-40 h-40 rounded-full blur-3xl opacity-40 transition-opacity duration-300 group-hover:opacity-65 ${
                    isPopular
                      ? 'bg-blue-200/80'
                      : isEnterprise
                        ? 'bg-indigo-200/60'
                        : 'bg-sky-200/60'
                  }`}
                />

                <div className="relative z-10 p-5 sm:p-6 flex flex-col flex-1">
                  {/* Compact Header Row */}
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2.5 min-w-0">
                      <div
                        className={`size-9 rounded-xl flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-200 ${
                          isPopular
                            ? 'bg-blue-600 text-white shadow-sm shadow-blue-600/25'
                            : isEnterprise
                              ? 'bg-indigo-50 text-indigo-600 border border-indigo-100'
                              : 'bg-blue-50 text-blue-600 border border-blue-100'
                        }`}
                      >
                        {plan.id === 'starter' && <Zap className="size-4" />}
                        {plan.id === 'growth' && <Sparkles className="size-4" />}
                        {plan.id === 'enterprise' && <Building2 className="size-4" />}
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight truncate">
                        {plan.name}
                      </h3>
                    </div>

                    {isPopular ? (
                      <span className="inline-flex items-center gap-1 rounded-lg bg-blue-600 px-2.5 py-0.5 text-[10.5px] font-bold text-white shadow-xs whitespace-nowrap shrink-0">
                        <Sparkles className="size-3" />
                        <span>{plan.badge || 'Most Popular'}</span>
                      </span>
                    ) : (
                      plan.badge && (
                        <span className="rounded-md bg-slate-100 border border-slate-200/80 px-2 py-0.5 text-[10.5px] font-semibold text-slate-600 whitespace-nowrap shrink-0">
                          {plan.badge}
                        </span>
                      )
                    )}
                  </div>

                  <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                    {plan.targetAudience}
                  </p>

                  {/* Light Theme Price Strip */}
                  <div
                    className={`mt-3.5 rounded-xl px-3.5 py-3 border flex items-center justify-between gap-2 ${
                      isPopular
                        ? 'bg-blue-50/75 border-blue-200/85'
                        : isEnterprise
                          ? 'bg-indigo-50/50 border-indigo-200/70'
                          : 'bg-slate-50/90 border-slate-200/85'
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
                          className="text-[28px] sm:text-[32px] font-extrabold text-slate-900 tracking-[-0.03em] tabular-nums leading-none"
                        >
                          {currentPrice}
                        </motion.span>
                      </AnimatePresence>
                      {!isEnterprise && (
                        <span className="text-xs font-medium text-slate-500">/mo</span>
                      )}
                      {isAnnual && !isEnterprise && originalMonthlyPrice && (
                        <span className="text-xs text-slate-400 line-through font-medium tabular-nums">
                          {originalMonthlyPrice}
                        </span>
                      )}
                    </div>

                    <div className="text-[11px] text-right shrink-0">
                      {isEnterprise ? (
                        <span className="inline-flex items-center rounded-md bg-indigo-50 border border-indigo-200 px-2 py-0.5 font-semibold text-indigo-700">
                          Dedicated SLAs
                        </span>
                      ) : isAnnual ? (
                        <span className="inline-flex items-center rounded-md bg-emerald-50 border border-emerald-200 px-2 py-0.5 text-emerald-700 font-semibold">
                          Annual · {plan.discountText}
                        </span>
                      ) : (
                        <span className="text-slate-500 font-medium">Cancel anytime</span>
                      )}
                    </div>
                  </div>

                  {/* Feature List */}
                  <div className="mt-4 flex-1">
                    <p className="text-[10px] font-bold uppercase tracking-[0.09em] text-slate-400">
                      What&apos;s Included
                    </p>
                    <ul className="mt-2.5 space-y-2">
                      {plan.features.map((feature, fIdx) => (
                        <li
                          key={fIdx}
                          className="flex items-center gap-2 text-[12.5px] font-medium text-slate-700"
                        >
                          <CheckCircle2
                            strokeWidth={2}
                            className={`size-4 shrink-0 ${
                              isPopular
                                ? 'text-blue-600'
                                : isEnterprise
                                  ? 'text-indigo-600'
                                  : 'text-emerald-600'
                            }`}
                          />
                          <span className="leading-snug truncate">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA Footer */}
                  <div className="mt-5 pt-4 border-t border-slate-100">
                    <Link
                      to={plan.ctaHref}
                      className={`group w-full inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-xs sm:text-sm font-bold transition-all ${
                        isPopular
                          ? 'btn-shine bg-blue-600 hover:bg-blue-700 text-white shadow-md shadow-blue-600/20'
                          : isEnterprise
                            ? 'bg-slate-900 hover:bg-blue-600 text-white shadow-xs'
                            : 'bg-blue-50 hover:bg-blue-600 text-blue-700 hover:text-white border border-blue-200/90 hover:border-blue-600 shadow-2xs'
                      }`}
                    >
                      <span>{plan.ctaText}</span>
                      <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-1" />
                    </Link>
                    <p className="mt-2 text-center text-[11px] text-slate-500">
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
          className="pq-glow-card mt-6 max-w-7xl mx-auto relative overflow-hidden rounded-2xl bg-gradient-to-br from-white via-blue-50/45 to-indigo-50/35 border border-slate-200/90 shadow-sm transition-all duration-200"
        >
          <div className="h-[3px] w-full pq-code-showcase-beam bg-gradient-to-r from-blue-600 via-indigo-500 via-violet-500 to-blue-600" />
          <div className="p-5 sm:p-6 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600">
                <CalendarCheck className="size-3.5 text-blue-600" />
                <span>Additional Support &amp; Custom Planning</span>
              </span>

              <h3 className="text-base sm:text-lg font-bold text-slate-900 mt-1 text-balance">
                {pricingAdditionalSupport.headline}
              </h3>

              <p className="mt-1 text-xs sm:text-sm text-slate-600 leading-relaxed">
                {pricingAdditionalSupport.description}
              </p>

              <div className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-1.5 text-xs text-slate-700">
                <a
                  href={`tel:${pricingAdditionalSupport.phone.replace(/\s+/g, '')}`}
                  className="inline-flex items-center gap-1.5 font-semibold hover:text-blue-600 transition-colors"
                >
                  <Phone className="size-3.5 text-blue-600 shrink-0" />
                  <span>{pricingAdditionalSupport.phone}</span>
                </a>

                <a
                  href={`mailto:${pricingAdditionalSupport.email}`}
                  className="inline-flex items-center gap-1.5 font-semibold hover:text-blue-600 transition-colors"
                >
                  <Mail className="size-3.5 text-indigo-600 shrink-0" />
                  <span>{pricingAdditionalSupport.email}</span>
                </a>
              </div>
            </div>

            <div className="shrink-0 w-full sm:w-auto">
              <Link
                to={pricingAdditionalSupport.ctaHref}
                className="group btn-shine w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 hover:bg-blue-700 hover:-translate-y-0.5 text-white font-bold px-5 py-2.5 text-xs sm:text-sm shadow-md shadow-blue-600/20 transition-all"
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
