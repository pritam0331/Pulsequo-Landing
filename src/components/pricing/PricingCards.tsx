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

interface PricingCardsProps {
  className?: string
  defaultAnnual?: boolean
  showAdditionalSupport?: boolean
}

export function PricingCards({
  className = '',
  defaultAnnual = true,
  showAdditionalSupport = true,
}: PricingCardsProps) {
  const [isAnnual, setIsAnnual] = useState(defaultAnnual)

  return (
    <div className={`w-full ${className}`}>
      {/* ─────────────────────────────────────────────────────────────
          1. ANNUAL / MONTHLY BILLING TOGGLE (Animated layoutId Segmented Control)
         ───────────────────────────────────────────────────────────── */}
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

      {/* ─────────────────────────────────────────────────────────────
          2. COMPACT PRICING CARDS GRID (Starter, Growth, Enterprise)
         ───────────────────────────────────────────────────────────── */}
      <div className="mt-9 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 items-stretch">
        {pricingTiers.map((plan: PricingPlanTier, idx: number) => {
          const isPopular = plan.popular
          const isEnterprise = plan.id === 'enterprise'

          // Price calculations
          const currentPrice = isEnterprise
            ? 'Custom'
            : isAnnual
              ? `$${plan.annualRate}`
              : `$${plan.monthlyRate}`

          const originalMonthlyPrice = !isEnterprise ? `$${plan.monthlyRate}` : null

          return (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: idx * 0.08, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -6, transition: { type: 'spring', stiffness: 340, damping: 24 } }}
              data-cursor="glass"
              className={`group relative rounded-2xl p-5 sm:p-6 flex flex-col justify-between transition-all duration-300 backdrop-blur-xs ${isPopular
                ? 'bg-white/95 border-2 border-blue-600 shadow-xl shadow-blue-900/10 z-10'
                : 'bg-white/95 border border-slate-200/90 shadow-sm hover:border-blue-300/90 hover:shadow-lg'
                }`}
            >
              {/* Popular Highlight Tag */}
              {isPopular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-md bg-blue-600 px-3 py-0.5 text-[10.5px] font-bold text-white shadow-sm tracking-wide flex items-center gap-1 whitespace-nowrap">
                  <Sparkles className="size-3" />
                  <span>{plan.badge || 'Most Popular'}</span>
                </div>
              )}

              {/* Card Header & Content */}
              <div>
                {/* Plan Header Info */}
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <div
                      className={`size-8 rounded-lg flex items-center justify-center group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-200 ${isPopular
                        ? 'bg-blue-100 text-blue-700'
                        : isEnterprise
                          ? 'bg-slate-900 text-white'
                          : 'bg-slate-100 text-slate-700'
                        }`}
                    >
                      {plan.id === 'starter' && <Zap className="size-3.5" />}
                      {plan.id === 'growth' && <Sparkles className="size-3.5" />}
                      {plan.id === 'enterprise' && <Building2 className="size-3.5" />}
                    </div>
                    <h3 className="text-xl font-black text-slate-900 tracking-tight">{plan.name}</h3>
                  </div>

                  {!isPopular && plan.badge && (
                    <span className="text-[11px] font-medium text-slate-500">
                      {plan.badge}
                    </span>
                  )}
                </div>

                {/* Target Audience Description */}
                <p className="mt-2.5 text-xs text-slate-600 leading-relaxed min-h-[34px]">
                  {plan.targetAudience}
                </p>

                {/* Rate Display */}
                <div className="mt-4 pt-4 border-t border-slate-100">
                  <div className="flex items-baseline gap-1.5">
                    <AnimatePresence mode="wait">
                      <motion.span
                        key={currentPrice}
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -6 }}
                        transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                        className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight tabular-nums"
                      >
                        {currentPrice}
                      </motion.span>
                    </AnimatePresence>

                    {!isEnterprise && (
                      <span className="text-xs font-semibold text-slate-500">/ month</span>
                    )}

                    {isAnnual && !isEnterprise && originalMonthlyPrice && (
                      <span className="text-[11px] text-slate-400 line-through ml-1 font-medium tabular-nums">
                        {originalMonthlyPrice}
                      </span>
                    )}
                  </div>

                  {/* Sub-rate Context / Billing Cycle Note */}
                  <div className="mt-1 text-[11px] text-slate-500 flex items-center gap-1.5">
                    {isEnterprise ? (
                      <span>Custom dedicated scale & SLAs</span>
                    ) : isAnnual ? (
                      <span className="text-emerald-700 font-medium">
                        Billed annually · {plan.discountText}
                      </span>
                    ) : (
                      <span>Billed monthly · Cancel anytime</span>
                    )}
                  </div>
                </div>

                {/* Features List */}
                <div className="mt-5">
                  <p className="text-[11px] font-semibold text-slate-400">Features Included</p>
                  <ul className="mt-2.5 space-y-2">
                    {plan.features.map((feature: string, fIdx: number) => (
                      <li key={fIdx} className="flex items-start gap-2 text-xs text-slate-700">
                        <CheckCircle2
                          className={`size-3.5 shrink-0 mt-0.5 ${isPopular ? 'text-blue-600' : 'text-emerald-600'
                            }`}
                        />
                        <span className="leading-snug">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Call to Action Button */}
              <div className="mt-5 pt-4 border-t border-slate-100">
                <Link
                  to={plan.ctaHref}
                  className={`group w-full inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-xs sm:text-sm font-bold transition-all shadow-xs ${isPopular
                    ? 'btn-shine bg-blue-600 hover:bg-blue-500 text-white shadow-md shadow-blue-500/25 hover:shadow-lg hover:shadow-blue-500/30'
                    : 'bg-[#020618] hover:bg-slate-800 text-white'
                    }`}
                >
                  <span>{plan.ctaText}</span>
                  <ArrowRight className="size-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                </Link>

                <p className="mt-2 text-center text-[10.5px] text-slate-400">
                  {isEnterprise
                    ? 'No commitment · Speak with enterprise engineers'
                    : 'Instant activation · No credit card required'}
                </p>
              </div>
            </motion.div>
          )
        })}
      </div>

      {/* ─────────────────────────────────────────────────────────────
          3. ADDITIONAL SUPPORT / INFO CARD (Compact Concierge Box)
         ───────────────────────────────────────────────────────────── */}
      {showAdditionalSupport && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          data-cursor="glass"
          className="mt-8 max-w-5xl mx-auto rounded-2xl bg-slate-50/90 border border-slate-200/90 hover:border-blue-300/80 hover:shadow-md transition-all duration-200 p-5 sm:p-6 flex flex-col lg:flex-row items-center justify-between gap-5 shadow-xs"
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
