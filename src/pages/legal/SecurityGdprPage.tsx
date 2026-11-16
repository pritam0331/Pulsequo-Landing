/**
 * Security & GDPR Dedicated Page
 * Route: /security-gdpr
 */

import { ShieldCheck, Lock, Server, CheckCircle2, Cpu, Key, FileCheck } from 'lucide-react'
import { SEO } from '../../components/common/SEO'
import { Breadcrumbs } from '../../components/common/Breadcrumbs'
import { CTASection } from '../../components/common/CTASection'
import { ScrollReveal } from '../../components/common/ScrollReveal'

export function SecurityGdprPage() {
  const lastUpdated = 'November 16, 2026'

  const securityBadges = [
    {
      icon: Lock,
      title: 'End-to-End Encryption',
      desc: 'TLS 1.3 for all data in transit; AES-256 encryption with hardware key management for data at rest.',
    },
    {
      icon: Server,
      title: 'Zero-Trust Multi-Tenancy',
      desc: 'Logical database schema isolation, per-tenant Redis queues, and strict IAM boundary controls.',
    },
    {
      icon: Cpu,
      title: 'Sandboxed MCP Execution',
      desc: 'Model Context Protocol tool execution runs in ephemeral, restricted environments without model training.',
    },
    {
      icon: Key,
      title: 'Enterprise SSO & RBAC',
      desc: 'SAML 2.0 / Okta integration, granular role-based permissions, and enforced multi-factor authentication (MFA).',
    },
  ]

  const gdprArticles = [
    {
      id: 'gdpr-framework',
      title: '1. GDPR Compliance Framework & International Transfers',
      content: `PulseQuo is fully compliant with Regulation (EU) 2016/679 (General Data Protection Regulation - GDPR).
When providing our CPaaS gateway, CRM, and AI automation software to customers processing personal data of European Economic Area (EEA) and UK data subjects:
• PulseQuo acts as a Data Processor under Article 28 of the GDPR.
• Our customers act as Data Controllers, determining the purposes and lawful bases for processing customer communications.
• Standard Contractual Clauses (SCCs): For data transfers originating from the EEA or UK to global cloud regions, PulseQuo incorporates European Commission-approved Standard Contractual Clauses within our Data Processing Addendum (DPA) to ensure an adequate level of data protection.`,
    },
    {
      id: 'infrastructure-soc2',
      title: '2. Cloud Infrastructure & Physical Security Standards',
      content: `PulseQuo's production microservices and carrier switching nodes are hosted in premier Tier-4 data center facilities managed by Amazon Web Services (AWS) and Google Cloud Platform (GCP).
• Physical Security: Redundant power grids, biometric access checkpoints, 24/7/365 video surveillance, and air-gapped server racks.
• Compliance Certifications: All underlying data center infrastructure maintains independent third-party certifications including ISO/IEC 27001, ISO/IEC 27017, ISO/IEC 27018, SOC 1, SOC 2 Type II, and PCI DSS Level 1.
• High Availability: Geographically distributed clusters with automated multi-zone failover, achieving 99.99% carrier throughput SLA.`,
    },
    {
      id: 'encryption-architecture',
      title: '3. Cryptographic Controls & Key Management',
      content: `Every communication payload is protected by strong cryptographic standards:
• In Transit: All HTTP API calls, webhook deliveries, and administrative sessions mandate TLS 1.3 with Perfect Forward Secrecy (PFS). Unencrypted HTTP traffic is rejected at our edge load balancers.
• At Rest: Customer database records, CRM fields, and archived logs are encrypted using industry-standard AES-256 algorithms. Encryption keys are rotated periodically and managed via cloud Hardware Security Modules (HSMs).
• HMAC SHA-256 Webhooks: Webhook dispatches include cryptographically signed X-PulseQuo-Signature headers, enabling customer backends to verify authenticity and prevent tampering.`,
    },
    {
      id: 'mcp-ai-sandboxing',
      title: '4. Model Context Protocol (MCP) Tool Sandboxing & AI Safety',
      content: `PulseQuo's integration of autonomous Claude and OpenAI agents is built with strict privacy boundaries:
• No Model Training: Customer dialogues, CRM transcripts, and internal tickets are never used to train public foundational LLMs.
• Sandboxed MCP Tool Execution: Tools executed via Model Context Protocol run inside locked network namespaces with explicit parameter validation, preventing arbitrary code execution.
• Audit Logging: Every AI agent decision, tool invocation, database lookup, and human-handoff event is logged with immutable timestamps for enterprise security audits.`,
    },
    {
      id: 'incident-response',
      title: '5. Incident Response & 72-Hour Breach Notification',
      content: `PulseQuo maintains a rigorous, documented Computer Security Incident Response Plan (CSIRP):
• Real-time Telemetry: Automated anomaly detection monitors API gateways, authentication attempts, and webhook throughput for indicators of compromise (IoC).
• 72-Hour Statutory Notification: In the unlikely event of a verified security incident resulting in unlawful access to personal Customer Data, PulseQuo commits to notifying affected Data Controllers without undue delay and within 72 hours of verification, accompanied by a comprehensive technical assessment and mitigation plan.`,
    },
    {
      id: 'dpa-execution',
      title: '6. Executing a Data Processing Addendum (DPA)',
      content: `Enterprise and GDPR-regulated customers can execute our standard pre-signed Data Processing Addendum, which incorporates:
• Scope and categories of data processing.
• Approved sub-processor list and change notification mechanisms.
• Standard Contractual Clauses (Module 2: Controller-to-Processor).
• Technical and organizational security measures (TOMs).
To countersign our DPA, please download the standard agreement or contact our compliance desk at dpa@pulsequo.com.`,
    },
  ]

  return (
    <div className="relative">
      <SEO
        title="Security & GDPR Compliance · Enterprise Data Protection | PulseQuo"
        description="Comprehensive security posture and GDPR compliance documentation for PulseQuo: Zero-trust architecture, AES-256 encryption, Model Context Protocol sandboxing, and SOC 2 alignment."
        canonicalPath="/security-gdpr"
      />

      {/* Hero Header */}
      <section className="bg-gradient-to-b from-blue-50/70 via-white to-white pt-10 pb-16 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <ScrollReveal direction="down" duration={0.4}>
            <Breadcrumbs
              items={[
                { label: 'Legal & Compliance', href: '/terms' },
                { label: 'Security & GDPR' },
              ]}
              className="justify-center mb-6"
            />

            <span className="inline-flex items-center gap-1.5 rounded-md bg-blue-100/80 border border-blue-200 px-3.5 py-1 text-xs font-semibold text-blue-800 mb-6">
              <ShieldCheck className="size-3.5 text-blue-600" />
              <span>Enterprise Trust & Cryptographic Assurance</span>
            </span>

            <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-[-0.03em] leading-tight">
              Security Architecture & GDPR Compliance
            </h1>

            <p className="mt-4 text-xs font-mono text-slate-500">
              Audit Standard: SOC 2 & ISO 27001 Aligned · Effective Date: {lastUpdated}
            </p>

            <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
              Explore how PulseQuo protects enterprise communications with zero-trust multi-tenancy,
              AES-256 encryption at rest, sandboxed AI tool execution, and full European GDPR compliance.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Security Architecture Grid */}
      <section className="py-16 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {securityBadges.map((badge, idx) => (
              <ScrollReveal key={badge.title} direction="up" delay={idx * 0.08}>
                <div className="rounded-xl border border-slate-200 bg-slate-50/50 p-6 h-full flex flex-col justify-between hover:border-blue-300 transition-colors shadow-2xs">
                  <div>
                    <div className="size-11 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center mb-5 border border-blue-100">
                      <badge.icon className="size-5" />
                    </div>
                    <h3 className="text-base font-bold text-slate-900">{badge.title}</h3>
                    <p className="mt-2 text-xs text-slate-600 leading-relaxed font-sans">
                      {badge.desc}
                    </p>
                  </div>
                  <div className="mt-5 pt-3 border-t border-slate-200/80 flex items-center gap-1.5 text-[11px] font-semibold text-emerald-600">
                    <CheckCircle2 className="size-3.5" />
                    <span>Verified Enterprise Standard</span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* GDPR & Security Detailed Articles */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Zero Model Training Callout */}
          <ScrollReveal direction="up">
            <div className="rounded-xl border border-slate-800 bg-[#020618] text-white p-7 mb-12 shadow-md">
              <div className="flex items-center gap-3 mb-2">
                <FileCheck className="size-5 text-blue-400" />
                <h3 className="text-base font-bold text-white">Our AI Safety Commitment</h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-3xl">
                PulseQuo equips AI agents with enterprise tools through Model Context Protocol (MCP) without retaining
                or training on proprietary dialogues. Customer databases, contact details, and ticket histories remain
                your exclusive property, fully protected under European GDPR Article 28 data processor standards.
              </p>
            </div>
          </ScrollReveal>

          {/* Detailed Policy Articles */}
          <div className="space-y-12">
            {gdprArticles.map((article, idx) => (
              <ScrollReveal key={article.id} direction="up" delay={idx * 0.05}>
                <article id={article.id} className="scroll-mt-28 border-b border-slate-100 pb-10 last:border-b-0">
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                    {article.title}
                  </h2>
                  <div className="mt-4 text-sm text-slate-600 leading-relaxed whitespace-pre-line font-sans">
                    {article.content}
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>

          {/* DPA Request Card */}
          <ScrollReveal direction="up" delay={0.2}>
            <div className="mt-14 rounded-2xl border border-blue-200 bg-gradient-to-br from-blue-50/50 via-white to-slate-50 p-8 shadow-xs">
              <div className="flex items-center gap-3 mb-3">
                <Lock className="size-5 text-blue-600" />
                <h3 className="text-base font-bold text-slate-900">Request a Signed Data Processing Addendum (DPA)</h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-2xl">
                Need an executed DPA with EU Standard Contractual Clauses (SCCs) for your corporate compliance file?
                Our legal and security engineering team can provide signed documentation within 24 hours.
              </p>
              <div className="mt-5 flex flex-wrap items-center gap-4 text-xs font-semibold">
                <a
                  href="mailto:dpa@pulsequo.com"
                  className="rounded-lg bg-blue-600 text-white px-5 py-2.5 hover:bg-blue-700 transition-colors shadow-2xs"
                >
                  Request Countersigned DPA
                </a>
                <span className="text-slate-500 font-mono">Compliance Desk: security@pulsequo.com</span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <CTASection />
    </div>
  )
}
