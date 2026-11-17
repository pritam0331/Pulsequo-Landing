/**
 * WhatsApp Free Forever Plan & Contact Banner Component
 * Features the official WhatsApp Business API offer, 4 key benefits,
 * social proof badges (Meta Business Partner, AICPA SOC, ISO),
 * quick sign-up form, and support contact banner.
 */

import { useState } from 'react'
import { Link } from 'react-router'
import { motion, AnimatePresence } from 'motion/react'
import {
  CheckCircle2,
  BadgeCheck,
  ShieldCheck,
  ArrowRight,
  Mail,
  Sparkles,
  Lock,
  ChevronDown,
} from 'lucide-react'

const countryCodes = [
  { code: '+91', country: 'IN', label: 'India (+91)' },
  { code: '+1', country: 'US', label: 'USA / Canada (+1)' },
  { code: '+44', country: 'GB', label: 'UK (+44)' },
  { code: '+971', country: 'AE', label: 'UAE (+971)' },
  { code: '+65', country: 'SG', label: 'Singapore (+65)' },
  { code: '+61', country: 'AU', label: 'Australia (+61)' },
  { code: '+49', country: 'DE', label: 'Germany (+49)' },
]

export function WhatsAppContactBanner({ className = '' }: { className?: string }) {
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [countryCode, setCountryCode] = useState('+91')
  const [phone, setPhone] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
    }, 600)
  }

  return (
    <div className={`w-full ${className}`}>
      {/* Main Container (Strict Zero-Pill: rounded-3xl) */}
      <div className="relative rounded-3xl bg-white border border-slate-200/90 shadow-xl overflow-hidden">
        {/* Subtle Brand Accent Bar */}
        <div className="h-1.5 w-full bg-gradient-to-r from-blue-600 via-indigo-600 to-emerald-500" />

        <div className="p-6 sm:p-10 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* ─────────────────────────────────────────────────────────────
                LEFT COLUMN: Header & Offer, Key Benefits, Social Proof
               ───────────────────────────────────────────────────────────── */}
            <div className="lg:col-span-7 space-y-6">
              {/* Tag: Free Forever Plan */}
              <div className="inline-flex items-center gap-2 rounded-md bg-emerald-50 border border-emerald-200/80 px-3 py-1 text-xs font-bold text-emerald-800">
                <Sparkles className="size-3.5 text-emerald-600" />
                <span>Free Forever Plan</span>
              </div>

              {/* Headline */}
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-[1.12]">
                Start growing on <span className="text-blue-600">WhatsApp today</span>
              </h2>

              {/* Description */}
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal max-w-2xl">
                Sign up right here in 2 minutes and get the official WhatsApp Business API free. Broadcast offers,
                automate replies with AI and sell more on WhatsApp.
              </p>

              {/* Key Features & Benefits */}
              <div className="pt-2">
                <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3.5">
                  Key Features & Benefits
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-800">
                    <BadgeCheck className="size-4.5 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="font-medium leading-snug">
                      Free WhatsApp Business API and Green Tick verification
                    </span>
                  </div>

                  <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-800">
                    <CheckCircle2 className="size-4.5 text-blue-600 shrink-0 mt-0.5" />
                    <span className="font-medium leading-snug">
                      Zero setup fee, free onboarding with our team
                    </span>
                  </div>

                  <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-800">
                    <CheckCircle2 className="size-4.5 text-blue-600 shrink-0 mt-0.5" />
                    <span className="font-medium leading-snug">
                      Broadcasts, chatbots, AI agents and Click-to-WhatsApp ads in one place
                    </span>
                  </div>

                  <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-800">
                    <CheckCircle2 className="size-4.5 text-blue-600 shrink-0 mt-0.5" />
                    <span className="font-medium leading-snug">
                      Real support on WhatsApp, live chat, email and phone
                    </span>
                  </div>
                </div>
              </div>

              {/* Social Proof & Certifications */}
              <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                {/* Customer Base */}
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-1.5">
                    <div className="size-7 rounded-md bg-blue-600 text-white font-bold text-[10px] flex items-center justify-center border-2 border-white shadow-2xs">
                      2.5L+
                    </div>
                    <div className="size-7 rounded-md bg-slate-900 text-white font-bold text-[10px] flex items-center justify-center border-2 border-white shadow-2xs">
                      ★
                    </div>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-900 leading-none">
                      2.5L+ brands grow with AiSensy
                    </p>
                    <p className="text-[11px] text-slate-500 mt-0.5">High-volume official API throughput</p>
                  </div>
                </div>

                {/* Badges: Meta Business Partner, AICPA SOC, ISO */}
                <div className="flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center gap-1 rounded-md bg-slate-100 border border-slate-200 px-2 py-1 text-[11px] font-semibold text-slate-700">
                    <ShieldCheck className="size-3 text-blue-600" />
                    <span>Meta Business Partner</span>
                  </span>
                  <span className="inline-flex items-center gap-1 rounded-md bg-slate-100 border border-slate-200 px-2 py-1 text-[11px] font-semibold text-slate-700">
                    <Lock className="size-3 text-emerald-600" />
                    <span>AICPA SOC</span>
                  </span>
                  <span className="inline-flex items-center gap-1 rounded-md bg-slate-100 border border-slate-200 px-2 py-1 text-[11px] font-semibold text-slate-700">
                    <BadgeCheck className="size-3 text-slate-600" />
                    <span>ISO Certified</span>
                  </span>
                </div>
              </div>
            </div>

            {/* ─────────────────────────────────────────────────────────────
                RIGHT COLUMN: Interactive Sign-Up Form ("Create your FREE account")
               ───────────────────────────────────────────────────────────── */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl bg-slate-50 border border-slate-200/90 p-6 sm:p-7 shadow-xs">
                <AnimatePresence mode="wait">
                  {!isSubmitted ? (
                    <motion.div
                      key="signup-form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      <h3 className="text-xl font-black text-slate-900 tracking-tight">
                        Create your FREE AiSensy account
                      </h3>
                      <p className="mt-1 text-xs text-slate-500 font-medium">
                        Takes 2 minutes. No credit card needed.
                      </p>

                      <form onSubmit={handleSubmit} className="mt-5 space-y-3.5">
                        {/* Full Name */}
                        <div>
                          <label className="block text-xs font-bold text-slate-700 mb-1">
                            Full name
                          </label>
                          <input
                            type="text"
                            required
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                            placeholder="e.g. Rahul Sharma"
                            className="w-full rounded-xl bg-white border border-slate-200 px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-all"
                          />
                        </div>

                        {/* Email */}
                        <div>
                          <label className="block text-xs font-bold text-slate-700 mb-1">
                            Work Email
                          </label>
                          <input
                            type="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="name@company.com"
                            className="w-full rounded-xl bg-white border border-slate-200 px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-all"
                          />
                        </div>

                        {/* Phone Number (default country code +91) */}
                        <div>
                          <label className="block text-xs font-bold text-slate-700 mb-1">
                            Phone Number
                          </label>
                          <div className="flex gap-2">
                            <div className="relative shrink-0 w-28">
                              <select
                                value={countryCode}
                                onChange={(e) => setCountryCode(e.target.value)}
                                aria-label="Country calling code"
                                className="w-full appearance-none rounded-xl bg-white border border-slate-200 px-3 py-2.5 text-xs sm:text-sm font-semibold text-slate-800 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-all cursor-pointer"
                              >
                                {countryCodes.map((c) => (
                                  <option key={c.code} value={c.code}>
                                    {c.country} ({c.code})
                                  </option>
                                ))}
                              </select>
                              <ChevronDown className="pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2 size-3.5 text-slate-400" />
                            </div>

                            <input
                              type="tel"
                              required
                              value={phone}
                              onChange={(e) => setPhone(e.target.value)}
                              placeholder="98765 43210"
                              className="flex-1 rounded-xl bg-white border border-slate-200 px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-all"
                            />
                          </div>
                        </div>

                        {/* Primary CTA: Continue */}
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="mt-2 w-full inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 px-5 text-sm shadow-md shadow-blue-500/20 transition-all cursor-pointer disabled:opacity-70"
                        >
                          <span>{isSubmitting ? 'Creating account...' : 'Continue'}</span>
                          <ArrowRight className="size-4" />
                        </button>

                        {/* Secondary CTA: Prefer a walkthrough? Book a demo */}
                        <div className="pt-2 text-center">
                          <Link
                            to="/book-demo"
                            className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 hover:text-blue-600 transition-colors"
                          >
                            <span>Prefer a walkthrough?</span>
                            <span className="text-blue-600 underline font-bold">Book a demo</span>
                            <ArrowRight className="size-3 text-blue-600" />
                          </Link>
                        </div>
                      </form>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="signup-success"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="py-4 text-center space-y-3"
                    >
                      <div className="size-12 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                        <CheckCircle2 className="size-6" />
                      </div>
                      <h4 className="text-lg font-black text-slate-900">Account Ready!</h4>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        Welcome aboard, <strong>{fullName || 'there'}</strong>! Check <strong>{email}</strong> to verify your official WhatsApp sandbox.
                      </p>
                      <Link
                        to="/book-demo"
                        className="inline-flex items-center gap-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold px-4 py-2.5 text-xs shadow-sm mt-2"
                      >
                        <span>Schedule Setup Walkthrough</span>
                        <ArrowRight className="size-3.5" />
                      </Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>

        {/* ─────────────────────────────────────────────────────────────
            SUPPORT CONTACT BANNER
           ───────────────────────────────────────────────────────────── */}
        <div className="border-t border-slate-200/90 bg-slate-50/90 px-6 sm:px-10 py-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-600">
          <div className="flex items-center gap-2.5">
            <span className="size-2 rounded-xs bg-emerald-500 shrink-0" />
            <span className="font-semibold text-slate-800">Support Desk:</span>
            <span>Reach out directly to technical assistance & onboarding:</span>
            <a
              href="mailto:support@aisensy.com"
              className="inline-flex items-center gap-1 font-bold text-blue-600 hover:text-blue-700 hover:underline"
            >
              <Mail className="size-3.5 text-blue-600" />
              <span>support@aisensy.com</span>
            </a>
          </div>

          <div className="flex items-center gap-3">
            <Link
              to="/contact"
              className="font-semibold text-slate-700 hover:text-blue-600 transition-colors"
            >
              All Contact Channels
            </Link>
            <span className="text-slate-300">·</span>
            <Link
              to="/book-demo"
              className="font-semibold text-blue-600 hover:underline"
            >
              Book 1-on-1 Demo
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
