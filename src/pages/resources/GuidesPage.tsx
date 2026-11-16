/**
 * Guides and Playbooks Page
 * Route: /resources/guides
 */

import { useState } from 'react'
import { Link } from 'react-router'
import { Layers, ChevronDown } from 'lucide-react'
import { SEO } from '../../components/common/SEO'
import { Breadcrumbs } from '../../components/common/Breadcrumbs'
import { CTASection } from '../../components/common/CTASection'
import { guidesData } from '../../data/resources'
import { ScrollReveal, StaggerItem } from '../../components/common/ScrollReveal'

export function GuidesPage() {
  const [openGuideId, setOpenGuideId] = useState<string | null>(guidesData[0]?.id || null)

  const toggleGuide = (id: string) => {
    setOpenGuideId(openGuideId === id ? null : id)
  }

  return (
    <div className="relative">
      <SEO
        title="Implementation Guides & Playbooks | PulseQuo"
        description="Step-by-step engineering playbooks for embedding chat widgets, configuring real-time webhooks, and optimizing CPaaS throughput."
        canonicalPath="/resources/guides"
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-blue-50/70 via-white to-white pt-10 pb-16 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <ScrollReveal direction="down" duration={0.4}>
            <Breadcrumbs
              items={[
                { label: 'Resources', href: '/resources' },
                { label: 'Guides & Playbooks' },
              ]}
              className="justify-center mb-6"
            />

            <span className="inline-flex items-center gap-1.5 rounded-md bg-blue-100/80 border border-blue-200 px-3.5 py-1 text-xs font-semibold text-blue-800 mb-6">
              <Layers className="size-3.5 text-blue-600" />
              <span>Developer & Operator Playbooks</span>
            </span>

            <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-[-0.03em] leading-tight">
              Step-by-Step Implementation Guides
            </h1>

            <p className="mt-6 text-base sm:text-lg text-slate-600 leading-relaxed">
              Practical walkthroughs to configure your communication channels, integrate developer webhooks, and deploy
              chatbots seamlessly.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Guides List */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {guidesData.map((guide, idx) => {
            const isOpen = openGuideId === guide.id
            return (
              <StaggerItem key={guide.id} index={idx}>
                <div
                  className={`rounded-xl border transition-all duration-200 overflow-hidden ${
                    isOpen ? 'border-blue-300 bg-white shadow-lg' : 'border-slate-200/80 bg-white hover:border-slate-300'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggleGuide(guide.id)}
                    className="w-full p-6 sm:p-8 text-left flex items-start justify-between gap-4 focus:outline-none cursor-pointer"
                    aria-expanded={isOpen}
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="rounded-md bg-blue-50 text-blue-700 px-2.5 py-0.5 text-xs font-semibold">
                          {guide.category}
                        </span>
                        <span className="text-xs text-slate-400">· Level: {guide.level}</span>
                      </div>
                      <h3 className="mt-2 text-xl sm:text-2xl font-bold text-slate-900">{guide.title}</h3>
                      <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">{guide.summary}</p>
                    </div>

                    <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-slate-600 mt-1">
                      <ChevronDown className={`size-5 transition-transform duration-200 ${isOpen ? 'rotate-180 text-blue-600' : ''}`} />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-8 sm:px-8 border-t border-slate-100 pt-6 animate-in fade-in-50">
                      <div className="space-y-6">
                        {guide.sections.map((sec, sIdx) => (
                          <div key={sIdx} className="rounded-lg bg-slate-50 border border-slate-200/80 p-5">
                            <h4 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                              <span className="flex size-6 items-center justify-center rounded-md bg-blue-600 text-white text-xs font-mono font-bold">
                                {sIdx + 1}
                              </span>
                              {sec.title}
                            </h4>
                            <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed pl-8 font-sans">
                              {sec.text}
                            </p>
                          </div>
                        ))}
                      </div>

                      <div className="mt-6 flex items-center justify-between pt-4 border-t border-slate-100 text-xs">
                        <Link to="/developers/api-documentation" className="text-blue-600 font-semibold hover:underline">
                          View corresponding API reference →
                        </Link>
                        <Link to="/book-demo" className="text-slate-600 hover:text-slate-900">
                          Need implementation assistance? Book a demo →
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              </StaggerItem>
            )
          })}
        </div>
      </section>

      <CTASection />
    </div>
  )
}
