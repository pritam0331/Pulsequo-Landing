/**
 * Privacy Policy Page
 * Route: /privacy
 */

import { Lock, ShieldCheck, Eye, CheckCircle2, Server } from 'lucide-react'
import { SEO } from '../../components/common/SEO'
import { Breadcrumbs } from '../../components/common/Breadcrumbs'
import { CTASection } from '../../components/common/CTASection'
import { ScrollReveal } from '../../components/common/ScrollReveal'

export function PrivacyPage() {
  const lastUpdated = 'November 16, 2026'

  const sections = [
    {
      id: 'commitment',
      title: '1. Our Privacy Commitment & Zero-Data-Selling Pledge',
      content: `At PulseQuo Technologies ("PulseQuo", "we", "our", or "us"), we operate under a foundational principle: Your customer dialogues, contact lists, and telemetry belong exclusively to you.
• We do not sell, rent, monetize, or broker your Customer Data or personal information to third-party data aggregators or advertisers under any circumstances.
• We do not train public foundational machine learning models (such as LLMs) on your private messages, customer conversations, or internal tickets.
• Our architecture is engineered around enterprise tenant isolation, end-to-end transport encryption, and verifiable regulatory compliance under the EU General Data Protection Regulation (GDPR) and the Indian Digital Personal Data Protection (DPDP) Act.`,
    },
    {
      id: 'information-collected',
      title: '2. Information We Collect and Process',
      content: `To operate carrier-grade messaging gateways, deal tracking pipelines, and customer support desks, we process the following categories of information:
• Account & Administrative Data: Name, business email, corporate domain, billing contact, phone number, and encrypted authentication tokens.
• Telecommunication & Routing Metadata: Outbound and inbound phone numbers, sender IDs, DLT PE-IDs, message timestamps, carrier status codes, delivery receipts (DLRs), and latency telemetry.
• Conversational Content (Processed on your behalf): WhatsApp message text, multimedia attachments, customer live chat inquiries, CRM notes, and ticket summaries.
• Technical & Log Diagnostics: IP addresses, browser user-agents, webhook delivery attempts, error logs, and session interaction metrics.`,
    },
    {
      id: 'purpose',
      title: '3. Legal Bases and Purposes of Processing',
      content: `PulseQuo acts as a Data Processor (or Service Provider) on behalf of our enterprise customers, who act as Data Controllers. We process data under the following legitimate grounds:
• Performance of Contract: Executing SMS dispatches across telecommunication trunks, transmitting WhatsApp dialogues via Meta Cloud API, and routing support tickets to assigned agents.
• Legal & Regulatory Mandates: Complying with statutory TRAI DLT scrubbing rules, Indian telecommunication record-keeping requirements, and tax audit obligations.
• Legitimate Interests: Detecting fraudulent bot attacks, preventing carrier route abuse, mitigating platform latency, and maintaining 99.99% gateway availability.`,
    },
    {
      id: 'subprocessors',
      title: '4. Sub-processors and Telecommunication Carriers',
      content: `To deliver omnichannel communications worldwide, PulseQuo engages vetted infrastructure partners and telecommunication carriers under strict Data Processing Agreements:
• Cloud Infrastructure: Amazon Web Services (AWS) and Google Cloud Platform (GCP) for secure, multi-tenant application hosting in ISO 27001 / SOC 2 certified data centers.
• Official WhatsApp Cloud API: Meta Platforms, Inc. for direct transmission of enterprise WhatsApp Business messages.
• Indian Telecom Trunks: Authorized telecom operators (Bharti Airtel, Reliance Jio, Vodafone Idea, Tata Teleservices) for SMPP carrier transmission and TRAI DLT scrubbing.
• AI Model Inference: Anthropic and OpenAI for sandboxed LLM inference under zero-data-retention enterprise API agreements.`,
    },
    {
      id: 'security-retention',
      title: '5. Data Security Standards and Retention Cycles',
      content: `PulseQuo implements defense-in-depth security to protect your customer information:
• Cryptographic Protection: AES-256 encryption for data at rest and TLS 1.3 encryption for all data in transit across public networks.
• Multi-Tenant Isolation: Logical segregation of databases, message queues, and CRM indexes ensuring no cross-tenant data leakage.
• Configurable Retention Windows: Enterprise subscribers can customize message logging retention periods (e.g., 30, 60, or 90 days), after which conversational transcripts are automatically purged from active databases.`,
    },
    {
      id: 'user-rights',
      title: '6. Your Privacy Rights (GDPR & DPDP Act)',
      content: `Depending on your jurisdiction and role as a data principal, you possess enforceable privacy rights:
• Right of Access & Portability: Request an export of your personal information and CRM datasets in structured JSON or CSV format.
• Right to Rectification: Correct inaccurate account records or customer profile data directly through our dashboards or REST APIs.
• Right to Erasure ("Right to be Forgotten"): Request permanent deletion of your account and associated logs, subject to statutory carrier retention mandates.
• Right to Object & Restrict Processing: Revoke consents previously granted for non-essential communications or marketing notifications.`,
    },
    {
      id: 'cookies',
      title: '7. Cookies and Tracking Technologies',
      content: `Our marketing website uses essential session cookies for authentication, CSRF prevention, and basic traffic analytics. We do not use third-party behavioral advertising trackers that follow you across the internet. You can manage or disable cookies via your browser settings at any time.`,
    },
    {
      id: 'dpo-contact',
      title: '8. Data Protection Officer (DPO) and Inquiries',
      content: `PulseQuo has appointed a dedicated Data Protection Officer to supervise global privacy governance and address data subject requests. For inquiries or data protection agreements (DPA), please reach out to:
• Email: privacy@pulsequo.com / dpo@pulsequo.com
• Address: Data Protection Officer, PulseQuo Technologies, Bengaluru, Karnataka, India`,
    },
  ]

  return (
    <div className="relative">
      <SEO
        title="Privacy Policy · Data Protection & Zero-Selling Pledge | PulseQuo"
        description="Official Privacy Policy for PulseQuo: Comprehensive data protection commitments, GDPR compliance, Indian DPDP adherence, encryption standards, and zero data selling."
        canonicalPath="/privacy"
      />

      {/* Hero Header */}
      <section className="bg-gradient-to-b from-blue-50/70 via-white to-white pt-10 pb-16 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <ScrollReveal direction="down" duration={0.4}>
            <Breadcrumbs
              items={[
                { label: 'Legal & Compliance', href: '/terms' },
                { label: 'Privacy Policy' },
              ]}
              className="justify-center mb-6"
            />

            <span className="inline-flex items-center gap-1.5 rounded-md bg-emerald-100/80 border border-emerald-200 px-3.5 py-1 text-xs font-semibold text-emerald-800 mb-6">
              <Lock className="size-3.5 text-emerald-600" />
              <span>Data Protection & Privacy Governance</span>
            </span>

            <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-[-0.03em] leading-tight">
              Privacy Policy
            </h1>

            <p className="mt-4 text-xs font-mono text-slate-500">
              Effective Date: {lastUpdated} · Version 3.1
            </p>

            <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
              Transparent, uncompromising data protection. Learn how PulseQuo safeguards customer dialogues,
              enforces strict sub-processor controls, and protects individual privacy rights.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Main Legal Content & Quick Index */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Quick Sticky Table of Contents */}
            <aside className="lg:col-span-4 lg:sticky lg:top-28">
              <ScrollReveal direction="left" delay={0.1}>
                <div className="rounded-xl border border-slate-200 bg-slate-50/70 p-6 shadow-xs">
                  <div className="flex items-center gap-2 mb-4 pb-3 border-b border-slate-200">
                    <Eye className="size-4 text-emerald-600" />
                    <h3 className="text-xs font-bold uppercase tracking-wider text-slate-800">
                      Privacy Highlights
                    </h3>
                  </div>

                  <nav className="space-y-1.5 text-xs">
                    {sections.map((s) => (
                      <a
                        key={s.id}
                        href={`#${s.id}`}
                        className="block py-1.5 px-2 rounded-md text-slate-600 hover:text-emerald-700 hover:bg-white transition-colors"
                      >
                        {s.title}
                      </a>
                    ))}
                  </nav>

                  <div className="mt-6 pt-5 border-t border-slate-200 space-y-3 text-xs text-slate-600">
                    <div className="flex items-center gap-2 text-emerald-700 font-semibold">
                      <CheckCircle2 className="size-4 shrink-0" />
                      <span>Zero Data Selling Commitment</span>
                    </div>
                    <div className="flex items-center gap-2 text-blue-700 font-semibold">
                      <CheckCircle2 className="size-4 shrink-0" />
                      <span>GDPR & DPDP Act Aligned</span>
                    </div>
                    <div className="flex items-center gap-2 text-purple-700 font-semibold">
                      <Server className="size-4 shrink-0" />
                      <span>AES-256 & TLS 1.3 Cryptography</span>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </aside>

            {/* Legal Articles */}
            <main className="lg:col-span-8 space-y-12">
              <ScrollReveal direction="up" delay={0.15}>
                {/* Zero Selling Pledge Box */}
                <div className="rounded-xl border border-emerald-200 bg-emerald-50/50 p-6 mb-8 text-xs text-emerald-950 leading-relaxed flex items-start gap-3">
                  <ShieldCheck className="size-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold block text-sm mb-1 text-emerald-950">
                      Our Core Principle: We Never Sell Your Customer Records
                    </span>
                    PulseQuo operates as an enterprise communication technology partner. Your CRM databases, lead histories,
                    and customer messages are processed solely to deliver high-reliability omnichannel services.
                  </div>
                </div>

                <div className="space-y-10">
                  {sections.map((section) => (
                    <article
                      key={section.id}
                      id={section.id}
                      className="scroll-mt-28 border-b border-slate-100 pb-8 last:border-b-0"
                    >
                      <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                        {section.title}
                      </h2>
                      <div className="mt-4 text-sm text-slate-600 leading-relaxed whitespace-pre-line font-sans">
                        {section.content}
                      </div>
                    </article>
                  ))}
                </div>

                {/* Privacy Inquiries Card */}
                <div className="mt-12 rounded-xl border border-slate-200 bg-slate-50 p-6 text-xs text-slate-600">
                  <h4 className="text-sm font-bold text-slate-900 mb-2">Exercising Your Privacy Rights</h4>
                  <p className="leading-relaxed">
                    To request data access, correction, erasure, or to execute an enterprise Data Processing Addendum (DPA),
                    contact our privacy governance desk:
                  </p>
                  <p className="mt-2 font-mono text-slate-800">
                    Data Protection Office: privacy@pulsequo.com<br />
                    Bengaluru, Karnataka, India
                  </p>
                </div>
              </ScrollReveal>
            </main>
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  )
}
