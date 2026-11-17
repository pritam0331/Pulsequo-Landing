/**
 * PulseQuo Modern Pricing Cards Component
 * Features Annual / Monthly billing toggle (20% discount),
 * Starter, Growth (Most Popular), and Enterprise tiers,
 * plus an Additional Support / Concierge advisory card.
 */

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
}

export function PricingCards({ className = '', defaultAnnual = true }: PricingCardsProps) {
  // Default to Annual toggle so $23 and $63 (Save 20%) are displayed immediately
  const [isAnnual, setIsAnnual] = useState(defaultAnnual)

  return (
    <div className={`w-full ${className}`}>
      {/* ─────────────────────────────────────────────────────────────
          1. ANNUAL / MONTHLY BILLING TOGGLE (Zero-Pills: rounded-xl)
         ───────────────────────────────────────────────────────────── */}
      <div className="flex flex-col items-center justify-center">
        <div className="inline-flex items-center gap-1.5 p-1.5 rounded-2xl bg-slate-100 border border-slate-200/90 shadow-inner">
          <button
            type="button"
            onClick={() => setIsAnnual(false)}
            className={`rounded-xl px-5 py-2.5 text-xs sm:text-sm font-bold transition-all cursor-pointer ${
              !isAnnual
                ? 'bg-white text-slate-900 shadow-sm border border-slate-200/70'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Monthly Billing
          </button>

          <button
            type="button"
            onClick={() => setIsAnnual(true)}
            className={`flex items-center gap-2 rounded-xl px-5 py-2.5 text-xs sm:text-sm font-bold transition-all cursor-pointer ${
              isAnnual
                ? 'bg-blue-600 text-white shadow-md shadow-blue-500/25'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <span>Annual Billing</span>
            <span
              className={`rounded-md px-2 py-0.5 text-[11px] font-extrabold uppercase tracking-wide transition-colors ${
                isAnnual
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
            ? '✨ 20% discount automatically applied on all annual subscriptions.'
            : 'Flexible month-to-month plans. Switch to annual anytime to save 20%.'}
        </p>
      </div>

      {/* ─────────────────────────────────────────────────────────────
          2. PRICING CARDS GRID (Starter, Growth, Enterprise)
         ───────────────────────────────────────────────────────────── */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
        {pricingTiers.map((plan: PricingPlanTier) => {
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
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -6 }}
              className={`relative rounded-3xl p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 ${
                isPopular
                  ? 'bg-white border-2 border-blue-600 shadow-2xl scale-[1.02] z-10'
                  : 'bg-white border border-slate-200/90 shadow-sm hover:border-slate-300 hover:shadow-xl'
              }`}
            >
              {/* Popular Highlight Badge */}
              {isPopular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-md bg-blue-600 px-3.5 py-1 text-xs font-bold text-white shadow-sm tracking-wider uppercase flex items-center gap-1.5">
                  <Sparkles className="size-3.5" />
                  <span>{plan.badge || 'Most Popular'}</span>
                </div>
              )}

              {/* Card Header & Content */}
              <div>
                {/* Plan Header Info */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div
                      className={`size-9 rounded-xl flex items-center justify-center ${
                        isPopular
                          ? 'bg-blue-100 text-blue-700'
                          : isEnterprise
                          ? 'bg-slate-900 text-white'
                          : 'bg-slate-100 text-slate-700'
                      }`}
                    >
                      {plan.id === 'starter' && <Zap className="size-4" />}
                      {plan.id === 'growth' && <Sparkles className="size-4" />}
                      {plan.id === 'enterprise' && <Building2 className="size-4" />}
                    </div>
                    <h3 className="text-2xl font-black text-slate-900 tracking-tight">{plan.name}</h3>
                  </div>

                  {!isPopular && plan.badge && (
                    <span className="rounded-md bg-slate-100 border border-slate-200 px-2.5 py-0.5 text-[11px] font-semibold text-slate-700">
                      {plan.badge}
                    </span>
                  )}
                </div>

                {/* Target Audience Description */}
                <p className="mt-3.5 text-xs sm:text-sm text-slate-600 leading-relaxed min-h-[42px]">
                  {plan.targetAudience}
                </p>

                {/* Rate Display */}
                <div className="mt-6 pt-6 border-t border-slate-100">
                  <div className="flex items-baseline gap-2">
                    <AnimatePresence mode="wait">
                      <motion.span
                        key={currentPrice}
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -6 }}
                        transition={{ duration: 0.2 }}
                        className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight"
                      >
                        {currentPrice}
                      </motion.span>
                    </AnimatePresence>

                    {!isEnterprise && (
                      <span className="text-sm font-semibold text-slate-500">/ month</span>
                    )}

                    {isAnnual && !isEnterprise && originalMonthlyPrice && (
                      <span className="text-xs text-slate-400 line-through ml-1 font-medium">
                        {originalMonthlyPrice}
                      </span>
                    )}
                  </div>

                  {/* Sub-rate Context / Billing Cycle Note */}
                  <div className="mt-1.5 text-xs text-slate-500 flex items-center gap-1.5">
                    {isEnterprise ? (
                      <span>Custom dedicated scale & SLAs</span>
                    ) : isAnnual ? (
                      <span className="inline-flex items-center gap-1 text-emerald-700 font-medium">
                        <span className="size-1.5 rounded-xs bg-emerald-600 inline-block" />
                        Billed annually ({plan.discountText})
                      </span>
                    ) : (
                      <span>Billed monthly · Cancel anytime</span>
                    )}
                  </div>
                </div>

                {/* Features List */}
                <div className="mt-8">
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Features Included</p>
                  <ul className="mt-3.5 space-y-3">
                    {plan.features.map((feature: string, idx: number) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                        <CheckCircle2
                          className={`size-4.5 shrink-0 mt-0.5 ${
                            isPopular ? 'text-blue-600' : 'text-emerald-600'
                          }`}
                        />
                        <span className="leading-snug">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Call to Action Button */}
              <div className="mt-8 pt-6 border-t border-slate-100">
                <Link
                  to={plan.ctaHref}
                  className={`w-full inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3.5 text-sm font-bold transition-all shadow-xs ${
                    isPopular
                      ? 'bg-blue-600 hover:bg-blue-500 text-white shadow-md shadow-blue-500/25 hover:shadow-lg hover:shadow-blue-500/30'
                      : 'bg-[#020618] hover:bg-slate-800 text-white'
                  }`}
                >
                  <span>{plan.ctaText}</span>
                  <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-1" />
                </Link>

                <p className="mt-2.5 text-center text-[11px] text-slate-400">
                  {isEnterprise
                    ? 'No commitment · Speak with enterprise engineers'
                    : 'Instant activation · No credit card required for trial'}
                </p>
              </div>
            </motion.div>
          )
        })}
      </div>

      {/* ─────────────────────────────────────────────────────────────
          3. ADDITIONAL SUPPORT / INFO CARD (Concierge Box)
         ───────────────────────────────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.15 }}
        className="mt-14 rounded-3xl bg-slate-50 border border-slate-200/90 p-6 sm:p-8 lg:p-10 flex flex-col lg:flex-row items-center justify-between gap-6 shadow-xs"
      >
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-1.5 rounded-md bg-blue-100/80 border border-blue-200 px-2.5 py-0.5 text-xs font-semibold text-blue-800">
            <CalendarCheck className="size-3.5 text-blue-600" />
            <span>Additional Support & Custom Planning</span>
          </span>

          <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mt-2.5">
            {pricingAdditionalSupport.headline}
          </h3>

          <p className="mt-1.5 text-sm text-slate-600 leading-relaxed">
            {pricingAdditionalSupport.description}
          </p>

          {/* Direct Contact Details */}
          <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs sm:text-sm text-slate-700">
            <a
              href={`tel:${pricingAdditionalSupport.phone.replace(/\s+/g, '')}`}
              className="inline-flex items-center gap-2 font-medium hover:text-blue-600 transition-colors"
            >
              <Phone className="size-4 text-blue-600 shrink-0" />
              <span>{pricingAdditionalSupport.phone}</span>
            </a>

            <a
              href={`mailto:${pricingAdditionalSupport.email}`}
              className="inline-flex items-center gap-2 font-medium hover:text-blue-600 transition-colors"
            >
              <Mail className="size-4 text-blue-600 shrink-0" />
              <span>{pricingAdditionalSupport.email}</span>
            </a>
          </div>
        </div>

        {/* Action Button */}
        <div className="shrink-0 w-full sm:w-auto">
          <Link
            to={pricingAdditionalSupport.ctaHref}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold px-6 py-3.5 text-sm shadow-md shadow-blue-500/25 transition-all"
          >
            <CalendarCheck className="size-4" />
            <span>{pricingAdditionalSupport.ctaText}</span>
            <ArrowRight className="size-4" />
          </Link>
        </div>
      </motion.div>
    </div>
  )
}
