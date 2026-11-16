/**
 * Careers Page Component
 * Route: /careers
 */

import {
  Briefcase,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  MapPin,
  GraduationCap,
} from 'lucide-react'
import { SEO } from '../components/common/SEO'
import { Breadcrumbs } from '../components/common/Breadcrumbs'
import { SectionHeading } from '../components/common/SectionHeading'
import { ScrollReveal, StaggerItem } from '../components/common/ScrollReveal'

export function CareersPage() {
  const openings = [
    {
      id: 'marketing-intern',
      title: 'Digital Marketing Intern',
      department: 'Growth & Marketing',
      type: 'Internship / Full-Time Track',
      location: 'Bengaluru, India / Hybrid',
      description:
        'Help execute organic content distribution, technical SEO optimization, community engagement, and performance marketing campaigns for PulseQuo’s enterprise CPaaS and CRM products.',
      responsibilities: [
        'Assist in writing developer-focused tutorials and product marketing announcements.',
        'Optimize marketing website content for target search keywords across CPaaS and WhatsApp API.',
        'Manage LinkedIn and Twitter/X community outreach and customer stories.',
        'Track organic traffic and conversion funnels in Google Analytics 4.',
      ],
      qualifications: [
        'Strong written communication skills in English.',
        'Familiarity with SaaS marketing concepts, LinkedIn creator tools, and basic SEO principles.',
        'Eagerness to learn about conversational AI, WhatsApp Business Platform, and enterprise CRM software.',
      ],
    },
    {
      id: 'backend-engineer',
      title: 'Full-Stack / Node.js Systems Engineer',
      department: 'Platform Engineering',
      type: 'Full-Time',
      location: 'Bengaluru, India / Remote',
      description:
        'Architect high-throughput messaging gateways, SMPP carrier trunks, and Model Context Protocol (MCP) integrations in TypeScript, Express, and MongoDB.',
      responsibilities: [
        'Scale SMPP and WhatsApp Cloud API webhook dispatch engines to millions of monthly messages.',
        'Design secure multi-tenant data boundaries and role-based access control policies.',
        'Develop sandboxed MCP servers for enterprise AI agent tool execution.',
      ],
      qualifications: [
        'Proficiency in TypeScript, Node.js, Express, and MongoDB.',
        'Experience building or consuming webhook delivery systems and RESTful APIs.',
        'Understanding of async concurrency and queueing architectures.',
      ],
    },
  ]

  return (
    <div className="relative">
      <SEO
        title="Careers at PulseQuo · Join Our Engineering & Growth Team"
        description="Explore open engineering, product, and digital marketing internship opportunities at PulseQuo. Build the future of AI-powered business communications."
        canonicalPath="/careers"
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-blue-50/70 via-white to-white pt-10 pb-16 border-b border-slate-100">
        <ScrollReveal direction="up" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <Breadcrumbs items={[{ label: 'Careers' }]} className="justify-center mb-6" />

          <span className="inline-flex items-center gap-1.5 rounded-md bg-blue-100/80 border border-blue-200 px-3.5 py-1 text-xs font-semibold text-blue-800 mb-6">
            <Briefcase className="size-3.5 text-blue-600" />
            <span>Join Our Team</span>
          </span>

          <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-[-0.03em] leading-tight">
            Build the Future of Business Communications
          </h1>

          <p className="mt-6 text-base sm:text-lg text-slate-600 leading-relaxed">
            At PulseQuo, we are solving the complex engineering and design challenges of unifying multi-channel
            messaging, AI agents, and enterprise CRM into a seamless platform.
          </p>
        </ScrollReveal>
      </section>

      {/* Culture & Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Working at PulseQuo"
            title="Our Principles & Team Culture"
            description="We value high craftsmanship, autonomous ownership, clear writing, and empathy for our customers."
          />

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <StaggerItem index={0} className="rounded-xl border border-slate-200/80 p-8 shadow-xs hover:border-blue-300 hover:shadow-md transition-all">
              <div className="flex size-12 items-center justify-center rounded-lg bg-blue-50 text-blue-600 mb-4">
                <Sparkles className="size-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Craftsmanship First</h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                We believe software should be fast, reliable, and beautifully designed down to the smallest detail.
              </p>
            </StaggerItem>

            <StaggerItem index={1} className="rounded-xl border border-slate-200/80 p-8 shadow-xs hover:border-indigo-300 hover:shadow-md transition-all">
              <div className="flex size-12 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600 mb-4">
                <Briefcase className="size-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">High Autonomy & Ownership</h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                Every team member has direct influence over architectural choices and customer-facing product outcomes.
              </p>
            </StaggerItem>

            <StaggerItem index={2} className="rounded-xl border border-slate-200/80 p-8 shadow-xs hover:border-purple-300 hover:shadow-md transition-all">
              <div className="flex size-12 items-center justify-center rounded-lg bg-purple-50 text-purple-600 mb-4">
                <GraduationCap className="size-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Mentorship & Acceleration</h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                Whether joining as an engineer or an intern, you will work directly with experienced product builders.
              </p>
            </StaggerItem>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 bg-slate-50 border-t border-slate-200/80">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Current Opportunities"
            title="Open Positions & Internships"
            description="Review available roles below. To apply, send your resume and a short introduction to our careers team."
          />

          <div className="mt-12 space-y-8">
            {openings.map((job, idx) => (
              <StaggerItem
                key={job.id}
                index={idx}
                className="rounded-xl border border-slate-200/80 bg-white p-8 shadow-xs hover:border-blue-300 hover:shadow-md transition-all"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-6">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="rounded-md bg-blue-50 text-blue-700 px-3 py-0.5 text-xs font-semibold">
                        {job.department}
                      </span>
                      <span className="text-xs text-slate-400">· {job.type}</span>
                    </div>
                    <h3 className="mt-2 text-2xl font-bold text-slate-900">{job.title}</h3>
                    <div className="mt-1 flex items-center gap-2 text-xs text-slate-500">
                      <MapPin className="size-3.5" />
                      <span>{job.location}</span>
                    </div>
                  </div>

                  <a
                    href={`mailto:careers@pulsequo.com?subject=Application for ${encodeURIComponent(job.title)}`}
                    className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white px-6 py-3 text-sm font-semibold shadow-xs transition-colors shrink-0"
                  >
                    <span>Apply for Role</span>
                    <ArrowRight className="size-4" />
                  </a>
                </div>

                <p className="mt-6 text-sm text-slate-600 leading-relaxed">{job.description}</p>

                <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Key Responsibilities</h4>
                    <ul className="mt-3 space-y-2">
                      {job.responsibilities.map((r, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-slate-700">
                          <CheckCircle2 className="size-3.5 text-blue-600 shrink-0 mt-0.5" />
                          <span>{r}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">What We're Looking For</h4>
                    <ul className="mt-3 space-y-2">
                      {job.qualifications.map((q, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-slate-700">
                          <CheckCircle2 className="size-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{q}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </div>

          {/* General Application Banner */}
          <div className="mt-12 rounded-xl bg-blue-50/80 border border-blue-200/80 p-8 text-center max-w-2xl mx-auto">
            <h4 className="text-lg font-bold text-slate-900">Don't See the Right Fit?</h4>
            <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
              We are always excited to meet talented engineers, product designers, and technical writers. Send an open
              application with your GitHub or portfolio to{' '}
              <a href="mailto:careers@pulsequo.com" className="font-semibold text-blue-600 hover:underline">
                careers@pulsequo.com
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
