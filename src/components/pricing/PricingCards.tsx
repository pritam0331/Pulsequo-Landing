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
        <div className="inline-flex items-center gap-1 p-1.5 rounded-2xl bg-slate-100 border border-slate-200/90 shadow-inner">
          <button
            type="button"
            onClick={() => setIsAnnual(false)}
            className={`relative rounded-xl px-5 py-2.5 text-xs sm:text-sm font-bold transition-colors cursor-pointer ${!isAnnual
              ? 'text-slate-900'
              : 'text-slate-600 hover:text-slate-900'
              }`}
          >
            {!isAnnual && (
              <motion.span
                layoutId="billing-toggle-indicator"
                transition={{ type: 'spring', stiffness: 380, damping: 28 }}
                className="absolute inset-0 rounded-xl bg-white shadow-sm border border-slate-200/70"
              />
            )}
            <span className="relative z-10">Monthly Billing</span>
          </button>

          <button
            type="button"
            onClick={() => setIsAnnual(true)}
            className={`relative flex items-center gap-2 rounded-xl px-5 py-2.5 text-xs sm:text-sm font-bold transition-colors cursor-pointer ${isAnnual
              ? 'text-white'
              : 'text-slate-600 hover:text-slate-900'
              }`}
          >
            {isAnnual && (
              <motion.span
                layoutId="billing-toggle-indicator"
                transition={{ type: 'spring', stiffness: 380, damping: 28 }}
                className="absolute inset-0 rounded-xl bg-blue-600 shadow-md shadow-blue-500/25"
              />
            )}
            <span className="relative z-10">Annual Billing</span>
            <span
              className={`relative z-10 rounded-md px-2 py-0.5 text-[11px] font-bold tracking-wide transition-colors ${isAnnual
                ? 'bg-white text-blue-700 shadow-2xs'
                : 'bg-emerald-100 text-emerald-800 border border-emerald-200'
                }`}
            >
              Save 20%
            </span>
          </button>
        </div>

        <p className="mt-3 text-xs text-slate-500">
          {isAnnual
            ? '20% discount automatically applied on all annual subscriptions.'
            : 'Flexible month-to-month plans. Switch to annual anytime to save 20%.'}
        </p>
      </div>

      <div className="mt-7 sm:mt-9 max-w-5xl mx-auto">
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
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.12 }}
              transition={{ duration: 0.42, delay: idx * 0.06, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -4, transition: { type: 'spring', stiffness: 360, damping: 26 } }}
              data-cursor="glass"
              className={`snap-center shrink-0 w-[84vw] max-w-[332px] sm:w-[340px] lg:w-auto lg:max-w-none group relative rounded-2xl overflow-hidden flex flex-col justify-between transition-shadow duration-300 bg-white ${
                isPopular
                  ? 'border-[1.5px] border-blue-600 shadow-[0_14px_34px_-12px_rgba(21,93,252,0.22)]'
                  : 'border border-slate-200/90 shadow-xs hover:border-blue-300/90 hover:shadow-lg hover:shadow-slate-900/5'
              }`}
            >
              <div
                className={`h-[4px] w-full ${
                  isPopular
                    ? 'bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-500'
                    : isEnterprise
                      ? 'bg-gradient-to-r from-indigo-500/80 via-purple-500/80 to-blue-500/80'
                      : 'bg-gradient-to-r from-sky-400/80 via-blue-500/80 to-indigo-400/80'
                }`}
              />

              <div className="p-5 sm:p-6 flex flex-col flex-1">
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-3 min-w-0">
                    <div
                      className={`size-10 rounded-xl flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-200 ${
                        isPopular
                          ? 'bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow-sm shadow-blue-600/25'
                          : isEnterprise
                            ? 'bg-indigo-50 text-indigo-600 border border-indigo-200/80'
                            : 'bg-blue-50 text-blue-600 border border-blue-200/80'
                      }`}
                    >
                      {plan.id === 'starter' && <Zap className="size-4.5" />}
                      {plan.id === 'growth' && <Sparkles className="size-4.5" />}
                      {plan.id === 'enterprise' && <Building2 className="size-4.5" />}
                    </div>
                    <h3 className="text-xl font-extrabold text-slate-900 tracking-tight truncate">
                      {plan.name}
                    </h3>
                  </div>

                  {isPopular ? (
                    <span className="inline-flex items-center gap-1 rounded-lg bg-blue-600 px-2.5 py-1 text-[11px] font-bold text-white shadow-2xs whitespace-nowrap shrink-0">
                      <Sparkles className="size-3" />
                      <span>{plan.badge || 'Most Popular'}</span>
                    </span>
                  ) : (
                    plan.badge && (
                      <span className="text-[11px] font-semibold text-slate-500 whitespace-nowrap shrink-0">
                        {plan.badge}
                      </span>
                    )
                  )}
                </div>

                <p className="mt-3 text-[13.5px] text-slate-500 leading-snug min-h-[38px]">
                  {plan.targetAudience}
                </p>

                <div
                  className={`mt-4 rounded-xl px-4 py-3.5 border flex flex-col justify-center ${
                    isPopular
                      ? 'bg-[#f4f7ff] border-blue-200/75'
                      : 'bg-slate-50/90 border-slate-200/75'
                  }`}
                >
                  <div className="flex items-baseline gap-1.5">
                    <AnimatePresence mode="wait">
                      <motion.span
                        key={currentPrice}
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -5 }}
                        transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
                        className="text-[34px] sm:text-[38px] font-black text-slate-950 tracking-[-0.03em] tabular-nums leading-none"
                      >
                        {currentPrice}
                      </motion.span>
                    </AnimatePresence>
                    {!isEnterprise && (
                      <span className="text-[13px] font-medium text-slate-500">/ month</span>
                    )}
                    {isAnnual && !isEnterprise && originalMonthlyPrice && (
                      <span className="text-[13px] text-slate-400 line-through ml-1 font-medium tabular-nums">
                        {originalMonthlyPrice}
                      </span>
                    )}
                  </div>

                  <div className="mt-1.5 text-xs flex items-center gap-1.5">
                    {isEnterprise ? (
                      <span className="font-semibold text-indigo-700">
                        Custom dedicated scale &amp; SLAs
                      </span>
                    ) : isAnnual ? (
                      <span className="text-emerald-600 font-semibold">
                        Billed annually · {plan.discountText}
                      </span>
                    ) : (
                      <span className="text-slate-500 font-medium">Billed monthly · Cancel anytime</span>
                    )}
                  </div>
                </div>

                <div className="mt-5 flex-1">
                  <p className="text-[11px] font-bold uppercase tracking-[0.08em] text-slate-400">
                    What&apos;s Included
                  </p>
                  <ul className="mt-3 space-y-2.5">
                    {plan.features.map((feature, fIdx) => (
                      <li
                        key={fIdx}
                        className="flex items-center gap-2.5 text-[13.5px] font-medium text-slate-800"
                      >
                        <CheckCircle2
                          strokeWidth={1.9}
                          className={`size-[17px] shrink-0 ${
                            isPopular
                              ? 'text-blue-600'
                              : isEnterprise
                                ? 'text-indigo-600'
                                : 'text-emerald-600'
                          }`}
                        />
                        <span className="leading-snug">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-5 pt-4 border-t border-slate-100">
                  <Link
                    to={plan.ctaHref}
                    className={`group w-full inline-flex items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-bold transition-all ${
                      isPopular
                        ? 'btn-shine bg-blue-600 hover:bg-blue-700 text-white shadow-md shadow-blue-600/20'
                        : isEnterprise
                          ? 'bg-[#070d24] hover:bg-indigo-700 text-white shadow-xs'
                          : 'bg-[#070d24] hover:bg-blue-600 text-white shadow-xs'
                    }`}
                  >
                    <span>{plan.ctaText}</span>
                    <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-1" />
                  </Link>
                  <p className="mt-2.5 text-center text-[11.5px] text-slate-400">
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
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.45, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          data-cursor="glass"
          className="mt-8 max-w-6xl mx-auto rounded-2xl bg-slate-50/90 border border-slate-200/90 hover:border-blue-300/80 hover:shadow-md transition-all duration-200 p-5 sm:p-6 flex flex-col lg:flex-row items-center justify-between gap-5 shadow-xs"
        >
          <div className="max-w-xl">
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600">
              <CalendarCheck className="size-3.5 text-blue-600" />
              <span>Additional Support & Custom Planning</span>
            </span>

            <h3 className="text-lg sm:text-xl font-bold text-slate-900 mt-1.5 text-balance">
              {pricingAdditionalSupport.headline}
            </h3>

            <p className="mt-1 text-xs sm:text-sm text-slate-600 leading-relaxed">
              {pricingAdditionalSupport.description}
            </p>

            {/* Direct Contact Details */}
            <div className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-1.5 text-xs text-slate-700">
              <a
                href={`tel:${pricingAdditionalSupport.phone.replace(/\s+/g, '')}`}
                className="inline-flex items-center gap-1.5 font-medium hover:text-blue-600 transition-colors"
              >
                <Phone className="size-3.5 text-blue-600 shrink-0" />
                <span>{pricingAdditionalSupport.phone}</span>
              </a>

              <a
                href={`mailto:${pricingAdditionalSupport.email}`}
                className="inline-flex items-center gap-1.5 font-medium hover:text-blue-600 transition-colors"
              >
                <Mail className="size-3.5 text-blue-600 shrink-0" />
                <span>{pricingAdditionalSupport.email}</span>
              </a>
            </div>
          </div>

          {/* Action Button */}
          <div className="shrink-0 w-full sm:w-auto">
            <Link
              to={pricingAdditionalSupport.ctaHref}
              className="group btn-shine w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 hover:bg-blue-500 hover:-translate-y-0.5 text-white font-bold px-5 py-2.5 text-xs sm:text-sm shadow-md shadow-blue-500/25 transition-all"
            >
              <CalendarCheck className="size-4" />
              <span>{pricingAdditionalSupport.ctaText}</span>
              <ArrowRight className="size-3.5 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </div>
        </motion.div>
      )}
    </div>
  )
}
