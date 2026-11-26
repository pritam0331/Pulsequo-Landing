/**
 * Developer Portal Landing Page
 * Route: /developers
 */

import { Link } from 'react-router'
import {
  Webhook,
  Terminal,
  Cpu,
  ArrowRight,
} from 'lucide-react'
import { SEO } from '../../components/common/SEO'
import { Breadcrumbs } from '../../components/common/Breadcrumbs'
import { BackgroundAnimation } from '../../components/common/BackgroundAnimation'
import { SectionHeading } from '../../components/common/SectionHeading'
import { CTASection } from '../../components/common/CTASection'
import { ScrollReveal, StaggerItem } from '../../components/common/ScrollReveal'
import { CardSectionHydrator, CardGridSkeleton } from '../../components/common/CardSkeleton'
import { CodeShowcaseCard } from '../../components/common/CodeShowcaseCard'

const EMBED_SNIPPET = `<!-- PulseQuo Live Customer Chat Widget -->
<script
  src="https://app.pulsequo.com/embed.js"
  async
  defer
></script>`

export function DevelopersPage() {
  return (
    <div className="relative">
      <SEO
        title="Developer Platform · REST APIs, Webhooks & MCP Tools | PulseQuo"
        description="Comprehensive developer documentation for PulseQuo: RESTful messaging APIs, real-time webhook subscriptions, and Model Context Protocol (MCP) server tooling."
        canonicalPath="/developers"
      />

      {/* Hero */}
      <section
        data-cursor-zone="hero"
        className="relative overflow-hidden bg-white pt-10 pb-14 sm:pt-14 sm:pb-18"
      >
        <BackgroundAnimation variant="hero" showGrid={true} showBeams={true} />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal direction="down" duration={0.4}>
            <Breadcrumbs items={[{ label: 'Developers' }]} className="justify-center mb-6" />

            <h1 className="text-3xl sm:text-4xl lg:text-[48px] xl:text-[54px] font-black text-slate-900 tracking-[-0.03em] leading-[1.16] text-balance">
              Build on the PulseQuo Platform
            </h1>

            <p className="mt-5 text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto text-pretty">
              Integrate enterprise messaging, trigger automated conversational flows, query CRM leads, and connect
              custom AI tools via Model Context Protocol.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/developers/api-documentation"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-xs hover:bg-blue-700 transition-colors whitespace-nowrap"
              >
                <span>Explore REST API Docs</span>
                <ArrowRight className="size-4" />
              </Link>

              <Link
                to="/developers/webhooks"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-colors whitespace-nowrap"
              >
                <span>Webhook Events Reference</span>
                <ArrowRight className="size-4" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Developer Pillars */}
      <section className="py-14 sm:py-18 section-fade-tint">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <CardSectionHydrator
            ariaLabel="Loading developer platform pillars"
            skeleton={
              <CardGridSkeleton
                count={3}
                variant="developer"
                columnsClassName="grid-cols-1 md:grid-cols-3 gap-8"
              />
            }
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <StaggerItem index={0} hoverElevation>
                <div className="rounded-xl border border-slate-200/80 p-8 shadow-xs flex flex-col justify-between hover:border-blue-300 transition-all h-full bg-white">
                  <div>
                    <div className="flex size-12 items-center justify-center rounded-lg bg-blue-50 text-blue-600 mb-6">
                      <Terminal className="size-6" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900">RESTful Core APIs</h3>
                    <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                      JSON-over-HTTP endpoints to dispatch WhatsApp messages, trigger transactional SMS alerts, query
                      conversation histories, and fetch lead statuses.
                    </p>
                  </div>
                  <div className="mt-8 pt-4 border-t border-slate-100">
                    <Link to="/developers/api-documentation" className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 hover:underline">
                      <span>View API Reference</span> <ArrowRight className="size-4" />
                    </Link>
                  </div>
                </div>
              </StaggerItem>

              <StaggerItem index={1} hoverElevation>
                <div className="rounded-xl border border-slate-200/80 p-8 shadow-xs flex flex-col justify-between hover:border-emerald-300 transition-all h-full bg-white">
                  <div>
                    <div className="flex size-12 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600 mb-6">
                      <Webhook className="size-6" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900">Event-Driven Webhooks</h3>
                    <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                      Subscribe to platform events including lead.created, message.sent, and conversation.handoff with
                      tamper-proof HMAC SHA-256 signatures.
                    </p>
                  </div>
                  <div className="mt-8 pt-4 border-t border-slate-100">
                    <Link to="/developers/webhooks" className="inline-flex items-center gap-1.5 text-sm font-semibold text-emerald-600 hover:underline">
                      <span>View Webhooks Spec</span> <ArrowRight className="size-4" />
                    </Link>
                  </div>
                </div>
              </StaggerItem>

              <StaggerItem index={2} hoverElevation>
                <div className="rounded-xl border border-slate-200/80 p-8 shadow-xs flex flex-col justify-between hover:border-purple-300 transition-all h-full bg-white">
                  <div>
                    <div className="flex size-12 items-center justify-center rounded-lg bg-purple-50 text-purple-600 mb-6">
                      <Cpu className="size-6" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900">Model Context Protocol (MCP)</h3>
                    <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                      Build and connect sandboxed MCP tool servers to give conversational Claude & OpenAI agents access to
                      your internal databases and ERPs.
                    </p>
                  </div>
                  <div className="mt-8 pt-4 border-t border-slate-100">
                    <Link to="/products/ai-automation" className="inline-flex items-center gap-1.5 text-sm font-semibold text-purple-600 hover:underline">
                      <span>Learn About MCP</span> <ArrowRight className="size-4" />
                    </Link>
                  </div>
                </div>
              </StaggerItem>
            </div>
          </CardSectionHydrator>
        </div>
      </section>

      <section data-dark-section="true" className="py-12 sm:py-16 bg-[#020618] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            dark
            badge="Quick Integration"
            title="Embed Website Chat in 60 Seconds"
            description="Add our embed.js snippet to any HTML page to deploy AI live chat immediately."
          />

          <ScrollReveal direction="up" delay={0.12}>
            <div className="mt-8">
              <CodeShowcaseCard
                variant="dark"
                filename="index.html"
                language="html"
                statusBadge="JavaScript Embed Tag"
                statusTone="blue"
                code={EMBED_SNIPPET}
                copyLabel="Copy Snippet"
                footerLeft={<span className="text-emerald-400">Zero build step required</span>}
                footerRight={<span className="text-purple-300">Async Edge CDN · &lt; 14KB</span>}
              />
            </div>
          </ScrollReveal>
        </div>
      </section>

      <CTASection />
    </div>
  )
}
