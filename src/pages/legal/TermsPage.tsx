/**
 * Terms of Service Page
 * Route: /terms
 */

import { Shield, CheckCircle2, AlertCircle } from 'lucide-react'
import { SEO } from '../../components/common/SEO'
import { Breadcrumbs } from '../../components/common/Breadcrumbs'
import { BackgroundAnimation } from '../../components/common/BackgroundAnimation'
import { ScrollReveal } from '../../components/common/ScrollReveal'

export function TermsPage() {
  const lastUpdated = 'November 16, 2026'

  const sections = [
    {
      id: 'acceptance',
      title: '1. Acceptance of Terms & Master Service Agreement',
      content: `By creating an account, accessing, or integrating with PulseQuo Technologies ("PulseQuo", "we", "our", or "us") via our web dashboards, mobile interfaces, RESTful APIs, webhooks, or Model Context Protocol (MCP) servers, you ("Customer", "Subscriber", or "User") agree to be bound by these Terms of Service. If you are entering into this Agreement on behalf of a company, enterprise, or legal entity, you represent and warrant that you possess the lawful authority to bind such entity to these provisions.`,
    },
    {
      id: 'platform-scope',
      title: '2. Provision of Cloud Platform & CPaaS Services',
      content: `PulseQuo grants you a non-exclusive, non-transferable, revocable subscription to access our unified customer experience platform, which encompasses:
• Communication Cloud: Direct WhatsApp Business API connectivity, high-throughput SMPP SMS gateway transmission, unified omnichannel team inboxes, and voice trunks.
• Sales CRM: Visual deal pipelines, lead qualification trackers, automated follow-up scheduling, and interaction histories.
• Support CRM: Multi-channel customer ticketing, configurable SLA countdown timers, skill-based agent routing, and centralized knowledge bases.
• AI & Automation Engine: Visual conversational journey builders, autonomous Claude/OpenAI agent integrations, and sandboxed Model Context Protocol tool execution.`,
    },
    {
      id: 'carrier-meta-dlt',
      title: '3. Meta WhatsApp Terms & Telecom Carrier Regulations',
      content: `Customers utilizing WhatsApp Business API routes or Indian SMS carrier infrastructure explicitly agree to comply with third-party telecommunication regulations:
• Meta Cloud API Policies: Customers must comply with Meta's WhatsApp Business Messaging Policy and Commerce Policy. Prohibited commercial categories (including unauthorized pharmaceuticals, predatory loans, and illegal weapons) are strictly banned.
• Indian TRAI DLT Mandate: All commercial SMS routed through Indian telecommunications carriers requires mandatory Principal Entity (PE) registration, registered 6-character Alpha sender IDs (Headers), and pre-approved content templates under TRAI TCCCPR regulations. Sending unsolicited commercial messages or non-whitelisted variable templates constitutes a material breach and will trigger immediate route suspension.
• Direct Operator Passthrough: Telecom tariffs, international carrier delivery surcharges, and Meta conversation charges are subject to statutory operator adjustments. PulseQuo passes these transparently without artificial markup.`,
    },
    {
      id: 'mcp-ai',
      title: '4. Autonomous AI Agents & Model Context Protocol (MCP)',
      content: `Our AI automation suite equips conversational agents with dynamic tool execution:
• Data Privacy & Model Isolation: PulseQuo does not train foundational LLMs or public models on your confidential customer dialogues, proprietary databases, or internal tickets.
• MCP Tool Server Security: You are solely responsible for authentication credentials, access privileges, and rate limiting imposed on private MCP servers connected to your PulseQuo deployment. PulseQuo disclaims liability for incorrect actions performed by LLMs when executing user-configured database write operations.
• Agent Supervision: While PulseQuo AI agents provide automated qualification and order lookups, you are responsible for monitoring high-stakes conversational interactions and establishing appropriate human-in-the-loop escalation thresholds.`,
    },
    {
      id: 'sla',
      title: '5. Service Level Agreement (SLA) & Carrier Availability',
      content: `PulseQuo commits to an operational uptime standard of 99.99% for our core HTTP API gateway and multi-tenant webhook dispatch engines, calculated on a calendar monthly basis.
• Exclusions: Downtime directly attributable to upstream carrier outages (e.g., Vodafone, Airtel, Jio, or Meta global Cloud API disruptions), planned maintenance windows communicated with at least 48 hours notice, or customer internet connectivity failures are excluded from SLA calculations.
• Service Credits: In the event of a verified core gateway outage exceeding SLA thresholds, eligible enterprise customers may request tiered service credits against subsequent monthly platform fees.`,
    },
    {
      id: 'data-ownership',
      title: '6. Customer Data Ownership & Confidentiality',
      content: `You retain 100% intellectual property rights, title, and interest in all customer contact lists, conversational transcripts, sales leads, CRM fields, and webhook payloads ingested into PulseQuo ("Customer Data"). PulseQuo accesses Customer Data exclusively to execute carrier dispatches, provide support, ensure security, and fulfill regulatory compliance obligations. We will never sell, lease, or commercialize your customer records.`,
    },
    {
      id: 'billing',
      title: '7. Subscriptions, Invoicing & Payment Terms',
      content: `Subscription fees for PulseQuo software seats and carrier message units are billed in advance on a monthly or annual cadence as designated in your order form.
• WhatsApp & SMS Metering: Carrier consumption units and template message charges are deducted from your prepaid balance or billed on agreed enterprise credit cycles.
• Taxes & Fees: Stated prices are exclusive of statutory GST, VAT, and applicable telecommunication withholding taxes, which shall be charged in accordance with regional jurisdiction requirements.`,
    },
    {
      id: 'termination',
      title: '8. Term, Suspension & Termination',
      content: `Either party may terminate a subscription upon 30 days prior written notice prior to the expiration of the current billing cycle. PulseQuo reserves the immediate right to suspend or restrict carrier routing credentials if:
(a) The account engages in abusive spam broadcasts or unsolicited telemarketing;
(b) TRAI or Meta issues a regulatory takedown notice regarding your registered templates;
(c) Platform subscription invoices remain past due for more than 15 consecutive days.
Upon termination, Customer Data may be exported within 30 days via JSON/CSV export or RESTful API before secure purging.`,
    },
    {
      id: 'liability',
      title: '9. Limitation of Liability & Indemnification',
      content: `To the maximum extent permitted by applicable law, neither party shall be liable for indirect, incidental, punitive, or consequential damages, including loss of business revenue or goodwill. PulseQuo's aggregate liability arising under this Agreement shall not exceed the total platform fees actually paid by the Customer in the six (6) months preceding the incident giving rise to liability. Customer agrees to indemnify PulseQuo against regulatory fines incurred due to Customer's breach of TRAI DLT or Meta messaging policies.`,
    },
    {
      id: 'governing-law',
      title: '10. Governing Law & Dispute Resolution',
      content: `This Agreement shall be governed by, construed, and enforced in accordance with the laws of the Republic of India. Any dispute, claim, or controversy arising out of or relating to these Terms shall be subject to the exclusive jurisdiction of the competent courts in Bengaluru, Karnataka, India.`,
    },
  ]

  return (
    <div className="relative">
      <SEO
        title="Terms of Service · Master Subscription Agreement | PulseQuo"
        description="Official Terms of Service and Master Subscription Agreement for PulseQuo: CPaaS communication gateway, CRM pipelines, WhatsApp Business API, and AI agent execution."
        canonicalPath="/terms"
      />

      {/* Hero Header */}
      <section
        data-cursor-zone="hero"
        className="relative overflow-hidden bg-white pt-10 pb-14 sm:pt-14 sm:pb-18"
      >
        <BackgroundAnimation variant="hero" showGrid={true} showBeams={true} />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal direction="down" duration={0.4}>
            <Breadcrumbs
              items={[
                { label: 'Legal & Compliance', href: '/terms' },
                { label: 'Terms of Service' },
              ]}
              className="justify-center mb-6"
            />

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-[-0.035em] leading-[1.08] text-balance">
              Terms of Service
            </h1>

            <p className="mt-4 text-xs font-mono text-slate-500">
              Effective Date: {lastUpdated} · Version 3.4
            </p>

            <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto text-pretty">
              Please review these terms carefully. They outline your legal rights, carrier pass-through obligations,
              service level guarantees, and permitted use of the PulseQuo platform.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Main Legal Content & Quick Index */}
      <section className="py-14 sm:py-20 section-fade-tint">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            {/* Quick Sticky Table of Contents */}
            <aside className="lg:col-span-4 lg:sticky lg:top-28">
              <ScrollReveal direction="left" delay={0.1}>
                <div className="rounded-xl border border-slate-200 bg-slate-50/70 p-6 shadow-xs">
                  <div className="flex items-center gap-2 mb-4 pb-3 border-b border-slate-200">
                    <Shield className="size-4 text-blue-600" />
                    <h3 className="text-xs font-bold uppercase tracking-wider text-slate-800">
                      Sections Overview
                    </h3>
                  </div>

                  <nav className="space-y-1.5 text-xs">
                    {sections.map((s) => (
                      <a
                        key={s.id}
                        href={`#${s.id}`}
                        className="block py-1.5 px-2 rounded-md text-slate-600 hover:text-blue-600 hover:bg-white transition-colors"
                      >
                        {s.title}
                      </a>
                    ))}
                  </nav>

                  <div className="mt-6 pt-5 border-t border-slate-200 space-y-3 text-xs text-slate-500">
                    <div className="flex items-center gap-2 text-emerald-600 font-semibold">
                      <CheckCircle2 className="size-4 shrink-0" />
                      <span>Enterprise SLA Guarantee (99.99%)</span>
                    </div>
                    <div className="flex items-center gap-2 text-blue-600 font-semibold">
                      <CheckCircle2 className="size-4 shrink-0" />
                      <span>TRAI & Meta V20 Compliant</span>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </aside>

            {/* Legal Articles */}
            <div className="lg:col-span-8 space-y-12">
              <ScrollReveal direction="up" delay={0.15}>
                {/* Important Notice Callout */}
                <div className="rounded-xl border border-blue-200 bg-blue-50/50 p-6 mb-8 text-xs text-blue-900 leading-relaxed flex items-start gap-3">
                  <AlertCircle className="size-5 text-blue-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold block text-sm mb-1 text-blue-950">
                      Enterprise Regulatory Notice
                    </span>
                    PulseQuo operates as an authorized CPaaS aggregator and software provider. Utilization of Indian SMS
                    routes requires valid Principal Entity (PE) registration under TRAI TCCCPR rules. Utilization of WhatsApp
                    requires strict adherence to Meta Cloud API acceptable use terms.
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

                {/* Legal Contact Card */}
                <div className="mt-12 rounded-xl border border-slate-200 bg-white p-6 text-xs text-slate-600">
                  <h4 className="text-sm font-bold text-slate-900 mb-2">Legal & Regulatory Inquiries</h4>
                  <p className="leading-relaxed">
                    For contractual queries, master service agreement amendments, or regulatory correspondence, please contact:
                  </p>
                  <p className="mt-2 font-mono text-slate-800">
                    PulseQuo Technologies Legal Counsel: legal@pulsequo.com<br />
                    Bengaluru, Karnataka, India
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

