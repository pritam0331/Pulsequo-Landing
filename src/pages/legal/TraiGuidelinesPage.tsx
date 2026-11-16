/**
 * TRAI Guidelines Dedicated Page
 * Route: /trai-guidelines
 */

import { Radio, Clock, ShieldCheck, CheckCircle2, XCircle, FileText, PhoneCall } from 'lucide-react'
import { SEO } from '../../components/common/SEO'
import { Breadcrumbs } from '../../components/common/Breadcrumbs'
import { CTASection } from '../../components/common/CTASection'
import { ScrollReveal } from '../../components/common/ScrollReveal'

export function TraiGuidelinesPage() {
  const lastUpdated = 'November 16, 2026'

  const guidelines = [
    {
      id: 'time-windows',
      number: '01',
      title: 'Time Window Restrictions for Commercial Communications',
      summary: 'Strict enforcement of delivery hours for promotional broadcasts terminating on Indian mobile networks.',
      details: [
        'Promotional SMS and commercial voice calls are strictly permitted only between 09:00 AM and 09:00 PM IST (Indian Standard Time).',
        'Any promotional message transmitted or scheduled outside this operational window is dropped by telecom operator firewalls without delivery, and incurs regulatory non-compliance penalties.',
        'Service Implicit and Transactional communications (such as banking OTPs, ride arrivals, doctor appointment updates, two-factor logins) are permitted 24/7/365 without time restrictions.',
      ],
    },
    {
      id: 'dnd-scrubbing',
      number: '02',
      title: 'National Customer Preference Register (NCPR / DND)',
      summary: 'Mandatory real-time scrubbing against the Indian Do-Not-Disturb (DND) database.',
      details: [
        'Before delivery, every promotional message is filtered against the National Customer Preference Register maintained by Indian telecom operators.',
        'TRAI defines 7 distinct preference categories (e.g., Banking & Financial, Real Estate, Education, Health, Consumer Goods, Tourism, Communication). Recipients who have opted out of a specific category will not receive messages matching that category.',
        'Commercial entities may not bypass DND scrubbing under any circumstance. Attempting to route promotional offers through Service headers to bypass DND is classified as a Grade-A violation.',
      ],
    },
    {
      id: 'consent-recording',
      number: '03',
      title: 'Customer Consent Management & Revocation Protocol',
      summary: 'Documented, auditable consent acquisition for commercial communications.',
      details: [
        'Explicit consent must be collected through a verifiable digital or physical medium (e.g., website checkbox, signed onboarding form, OTP validation) prior to sending promotional communications.',
        'The Principal Entity must record the timestamp, customer phone number, IP address, and exact consent wording.',
        'Recipients must be provided with a frictionless, free mechanism to revoke consent at any time (e.g., "Reply STOP" or an unblocked opt-out URL). Consents must be updated across telecom scrubbers within 24 hours of receipt.',
      ],
    },
    {
      id: 'url-whitelisting',
      number: '04',
      title: 'Mandatory URL & CTA Domain Whitelisting',
      summary: 'Ban on public URL shorteners and enforcement of static brand link registration.',
      details: [
        'Public URL shorteners (including bit.ly, tinyurl, goo.gl, ow.ly, and rb.gy) are strictly prohibited in all SMS templates by telecom operator scrubbing engines.',
        'Every link, callback domain, or call-to-action URL included in an SMS template must be whitelisted on your telecom DLT portal under your verified Principal Entity (PE).',
        'URLs must resolve to authentic corporate properties with valid SSL/TLS certificates matching your registered corporate entity.',
      ],
    },
    {
      id: 'headers-inactivity',
      number: '05',
      title: 'Sender Header Standardization & 90-Day Inactivity Rule',
      summary: '6-character Alpha sender names and automatic de-allocation policies.',
      details: [
        'Transactional & Service Headers must consist of exactly six alphabetical characters (e.g., PQNOTF, ACMEIN) representing the genuine brand identity.',
        'Promotional Headers must consist of a six-digit numeric string prefixed by the telecom operator and circle code (e.g., 654321).',
        '90-Day Inactivity Rule: Under TRAI directives, headers that remain inactive with zero message throughput for 90 consecutive days are subject to automatic de-allocation and return to the common operator pool.',
      ],
    },
    {
      id: 'variable-integrity',
      number: '06',
      title: 'Content Template Syntax & Dynamic Variable Bounding',
      summary: 'Strict matching rules between approved DLT templates and transmitted payloads.',
      details: [
        'All SMS body text must match a pre-approved DLT content template registered on an authorized operator portal (Airtel, Jio, Vodafone Idea, or BSNL).',
        'Dynamic variables must use the standardized {#var#} placeholder syntax. Multiple consecutive variables ({#var#}{#var#}) are strictly prohibited.',
        'Each dynamic variable must be bounded to a reasonable length (recommended < 30 characters). Injecting full promotional paragraphs into a variable field inside a Service template will trigger immediate operator blocking.',
      ],
    },
    {
      id: 'voice-series',
      number: '07',
      title: 'Commercial Voice Call series (140-series & 160-series)',
      summary: 'Dedicated telecom numbering series for business voice calls and outbound dialers.',
      details: [
        'Promotional voice calls and automated telemarketing IVR blasts must originate exclusively from 140-series telecom numbers allocated by licensed operators.',
        'Transactional and Service voice calls (e.g., automated fraud verification calls, bank dispatch alerts) must originate from dedicated 160-series numbers to distinguish critical alerts from promotional outreach.',
        'Using standard 10-digit consumer mobile numbers (+91-98xxxx / +91-70xxxx) for automated commercial telemarketing is illegal and leads to immediate SIM suspension.',
      ],
    },
    {
      id: 'violations-penalties',
      number: '08',
      title: 'Graded Penalty Structure & Entity Blacklisting',
      summary: 'Statutory financial disincentives and multi-network route termination.',
      details: [
        'First Violation (Minor): Written warning from access providers and mandatory audit of template submissions.',
        'Subsequent Violations (Repeat / Moderate): Graded financial penalties ranging from ₹1,000 up to ₹50,000 per violation batch, deducted from operator deposits.',
        'Critical Violations (Phishing, Fraud, Header Misuse): Blacklisting of the Principal Entity (PE-ID) across ALL Indian telecom operators for up to two years, resulting in permanent cessation of commercial SMS routing.',
      ],
    },
  ]

  const dosAndDonts = [
    {
      category: 'Do’s (Mandatory Best Practices)',
      items: [
        'Register your Principal Entity (PE) with valid GSTIN and corporate PAN on an authorized DLT portal.',
        'Ensure your registered brand name appears clearly in every SMS content template.',
        'Whitelist all callback URLs and website domains before submitting templates for review.',
        'Schedule promotional campaigns strictly between 09:00 AM and 09:00 PM IST.',
        'Honor customer opt-out requests within 24 hours of notification.',
        'Keep dynamic variable placeholders ({#var#}) specific, short, and bounded.',
      ],
    },
    {
      category: 'Don’ts (Prohibited Actions)',
      items: [
        'Never use public URL shorteners (bit.ly, tinyurl) inside commercial SMS text.',
        'Never transmit promotional offers or discount codes under a Service/Transactional header.',
        'Never place two dynamic variables adjacent to each other ({#var#}{#var#}).',
        'Never purchase unverified consumer mobile lists or blast unsolicited broadcasts.',
        'Never send commercial telemarketing calls from ordinary 10-digit mobile numbers.',
        'Never allow your registered DLT headers to remain dormant for more than 90 days.',
      ],
    },
  ]

  return (
    <div className="relative">
      <SEO
        title="TRAI Guidelines · Commercial Communications & SMS Compliance | PulseQuo"
        description="Official TRAI Guidelines for commercial SMS and calling in India: TCCCPR 2018 regulations, 9 AM - 9 PM timing, DND scrubbing, URL whitelisting, and DLT compliance rules."
        canonicalPath="/trai-guidelines"
      />

      {/* Hero Header */}
      <section className="bg-gradient-to-b from-blue-50/70 via-white to-white pt-10 pb-16 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <ScrollReveal direction="down" duration={0.4}>
            <Breadcrumbs
              items={[
                { label: 'Legal & Compliance', href: '/terms' },
                { label: 'TRAI Guidelines' },
              ]}
              className="justify-center mb-6"
            />

            <span className="inline-flex items-center gap-1.5 rounded-md bg-blue-100/80 border border-blue-200 px-3.5 py-1 text-xs font-semibold text-blue-800 mb-6">
              <Radio className="size-3.5 text-blue-600" />
              <span>Telecom Regulatory Authority of India (TRAI)</span>
            </span>

            <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-[-0.03em] leading-tight">
              Official TRAI Guidelines for Commercial Communications
            </h1>

            <p className="mt-4 text-xs font-mono text-slate-500">
              Statutory Authority: TRAI TCCCPR Regulations · Last Updated: {lastUpdated}
            </p>

            <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
              Complete operational handbook for businesses routing commercial SMS, transactional alerts, and automated
              calls across Indian telecommunication carrier networks.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Quick Overview Callout */}
      <section className="py-12 bg-slate-50 border-b border-slate-200/80">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up">
            <div className="rounded-2xl border border-blue-200 bg-white p-7 shadow-xs">
              <div className="flex items-center gap-3 mb-3">
                <ShieldCheck className="size-6 text-blue-600 shrink-0" />
                <h2 className="text-lg font-bold text-slate-900">
                  Regulatory Mandate Overview (TCCCPR 2018)
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                The Telecom Commercial Communications Customer Preference Regulations (TCCCPR, 2018) enacted by TRAI
                establishes a code of practice to protect Indian mobile subscribers from unwanted telemarketing and fraudulent
                messaging. All commercial messaging requires verified Principal Entity identity, registered sender headers,
                and pre-approved content templates.
              </p>
              <div className="mt-5 grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-slate-100 text-xs">
                <div className="flex items-center gap-2">
                  <Clock className="size-4 text-blue-600 shrink-0" />
                  <span className="text-slate-700 font-medium">09:00 AM – 09:00 PM IST Window</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-emerald-600 shrink-0" />
                  <span className="text-slate-700 font-medium">100% Blockchain DLT Scrubbing</span>
                </div>
                <div className="flex items-center gap-2">
                  <PhoneCall className="size-4 text-purple-600 shrink-0" />
                  <span className="text-slate-700 font-medium">140 / 160 Calling Series</span>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 8 Core Guidelines */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-3xl font-black text-slate-900 tracking-tight">
              Core Guidelines & Operational Mandates
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              Eight key requirements every enterprise must adhere to when executing campaigns via PulseQuo.
            </p>
          </div>

          <div className="space-y-8">
            {guidelines.map((g, idx) => (
              <ScrollReveal key={g.id} direction="up" delay={idx * 0.05}>
                <article
                  id={g.id}
                  className="rounded-xl border border-slate-200 bg-white p-7 shadow-xs hover:border-blue-300 transition-colors"
                >
                  <div className="flex items-start gap-4">
                    <span className="size-10 rounded-lg bg-blue-50 text-blue-700 font-mono text-sm font-bold flex items-center justify-center shrink-0 border border-blue-100">
                      {g.number}
                    </span>
                    <div className="flex-1">
                      <h3 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight">
                        {g.title}
                      </h3>
                      <p className="mt-1 text-xs sm:text-sm font-medium text-blue-700">
                        {g.summary}
                      </p>
                      <ul className="mt-4 space-y-2 text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
                        {g.details.map((detail, dIdx) => (
                          <li key={dIdx} className="flex items-start gap-2">
                            <span className="size-1.5 rounded-xs bg-blue-600 shrink-0 mt-2" />
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>

          {/* Do's and Don'ts Matrix */}
          <ScrollReveal direction="up" delay={0.2}>
            <div className="mt-16 pt-12 border-t border-slate-200">
              <h2 className="text-2xl font-bold text-slate-900 tracking-tight text-center mb-10">
                Compliance Quick Reference: Do's & Don'ts
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Do's */}
                <div className="rounded-xl border border-emerald-200 bg-emerald-50/40 p-7">
                  <div className="flex items-center gap-2 mb-4 text-emerald-800 font-bold text-base">
                    <CheckCircle2 className="size-5 text-emerald-600" />
                    <h3>{dosAndDonts[0].category}</h3>
                  </div>
                  <ul className="space-y-3 text-xs sm:text-sm text-slate-700">
                    {dosAndDonts[0].items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="size-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Don'ts */}
                <div className="rounded-xl border border-rose-200 bg-rose-50/40 p-7">
                  <div className="flex items-center gap-2 mb-4 text-rose-800 font-bold text-base">
                    <XCircle className="size-5 text-rose-600" />
                    <h3>{dosAndDonts[1].category}</h3>
                  </div>
                  <ul className="space-y-3 text-xs sm:text-sm text-slate-700">
                    {dosAndDonts[1].items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <XCircle className="size-4 text-rose-600 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Regulatory Advisory Card */}
          <ScrollReveal direction="up" delay={0.25}>
            <div className="mt-12 rounded-2xl border border-slate-200 bg-slate-50 p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="space-y-1 text-center sm:text-left">
                <h4 className="text-base font-bold text-slate-900 flex items-center justify-center sm:justify-start gap-2">
                  <FileText className="size-4 text-blue-600" />
                  <span>Looking for Technical DLT Onboarding Specs?</span>
                </h4>
                <p className="text-xs sm:text-sm text-slate-600">
                  Read our step-by-step DLT portal registration policy for Airtel, Jio, and Vodafone Idea.
                </p>
              </div>
              <div className="flex items-center gap-3 shrink-0">
                <a
                  href="/trai-dlt-policy"
                  className="rounded-lg bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 text-xs font-semibold shadow-xs transition-colors"
                >
                  View TRAI DLT Policy →
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <CTASection />
    </div>
  )
}
