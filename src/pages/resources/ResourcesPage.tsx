/**
 * Resources Hub Overview Page
 * Route: /resources
 */

import { Link } from 'react-router'
import {
  BookOpen,
  Layers,
  Code2,
  Webhook,
  ArrowRight,
} from 'lucide-react'
import { SEO } from '../../components/common/SEO'
import { Breadcrumbs } from '../../components/common/Breadcrumbs'
import { SectionHeading } from '../../components/common/SectionHeading'
import { CTASection } from '../../components/common/CTASection'
import { blogPosts } from '../../data/resources'
import { ScrollReveal, StaggerItem } from '../../components/common/ScrollReveal'

export function ResourcesPage() {
  return (
    <div className="relative">
      <SEO
        title="Resources Hub · Guides, Articles & Developer References | PulseQuo"
        description="Comprehensive guides on WhatsApp Business API scaling, Indian DLT compliance, Model Context Protocol integration, and API documentation."
        canonicalPath="/resources"
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-blue-50/70 via-white to-white pt-10 pb-16 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <ScrollReveal direction="down" duration={0.4}>
            <Breadcrumbs items={[{ label: 'Resources' }]} className="justify-center mb-6" />

            <span className="inline-flex items-center gap-1.5 rounded-md bg-blue-100/80 border border-blue-200 px-3.5 py-1 text-xs font-semibold text-blue-800 mb-6">
              <BookOpen className="size-3.5 text-blue-600" />
              <span>Knowledge Base & Technical References</span>
            </span>

            <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-[-0.03em] leading-tight">
              Learn, Implement, and Scale with PulseQuo
            </h1>

            <p className="mt-6 text-base sm:text-lg text-slate-600 leading-relaxed">
              In-depth engineering articles, regulatory compliance playbooks, and developer documentation to help your
              business master omnichannel communications.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Core Resource Categories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <StaggerItem index={0} hoverElevation>
              <div className="rounded-xl border border-slate-200/80 bg-white p-7 flex flex-col justify-between hover:border-blue-300 hover:shadow-lg transition-all h-full">
                <div>
                  <div className="flex size-12 items-center justify-center rounded-lg bg-blue-50 text-blue-600 mb-6">
                    <BookOpen className="size-6" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">Blog & Insights</h3>
                  <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Deep dives on CPaaS architecture, Meta Cloud API throughput, DLT regulations, and customer engagement.
                  </p>
                </div>
                <div className="mt-8 pt-4 border-t border-slate-100">
                  <Link to="/resources/blog" className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 hover:underline">
                    <span>Explore Blog</span> <ArrowRight className="size-4" />
                  </Link>
                </div>
              </div>
            </StaggerItem>

            <StaggerItem index={1} hoverElevation>
              <div className="rounded-xl border border-slate-200/80 bg-white p-7 flex flex-col justify-between hover:border-indigo-300 hover:shadow-lg transition-all h-full">
                <div>
                  <div className="flex size-12 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600 mb-6">
                    <Layers className="size-6" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">Guides & Playbooks</h3>
                  <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Step-by-step implementation walkthroughs for chat widgets, WhatsApp onboarding, and flow builders.
                  </p>
                </div>
                <div className="mt-8 pt-4 border-t border-slate-100">
                  <Link to="/resources/guides" className="inline-flex items-center gap-1.5 text-sm font-semibold text-indigo-600 hover:underline">
                    <span>View Guides</span> <ArrowRight className="size-4" />
                  </Link>
                </div>
              </div>
            </StaggerItem>

            <StaggerItem index={2} hoverElevation>
              <div className="rounded-xl border border-slate-200/80 bg-white p-7 flex flex-col justify-between hover:border-purple-300 hover:shadow-lg transition-all h-full">
                <div>
                  <div className="flex size-12 items-center justify-center rounded-lg bg-purple-50 text-purple-600 mb-6">
                    <Code2 className="size-6" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">API Documentation</h3>
                  <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Full REST API specifications for messaging dispatch, chat widget embeds, and contact querying.
                  </p>
                </div>
                <div className="mt-8 pt-4 border-t border-slate-100">
                  <Link to="/developers/api-documentation" className="inline-flex items-center gap-1.5 text-sm font-semibold text-purple-600 hover:underline">
                    <span>API Reference</span> <ArrowRight className="size-4" />
                  </Link>
                </div>
              </div>
            </StaggerItem>

            <StaggerItem index={3} hoverElevation>
              <div className="rounded-xl border border-slate-200/80 bg-white p-7 flex flex-col justify-between hover:border-emerald-300 hover:shadow-lg transition-all h-full">
                <div>
                  <div className="flex size-12 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600 mb-6">
                    <Webhook className="size-6" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">Webhooks & Events</h3>
                  <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Real-time event subscriptions for message.sent, lead.created, and conversation.handoff with HMAC signatures.
                  </p>
                </div>
                <div className="mt-8 pt-4 border-t border-slate-100">
                  <Link to="/developers/webhooks" className="inline-flex items-center gap-1.5 text-sm font-semibold text-emerald-600 hover:underline">
                    <span>Webhooks Reference</span> <ArrowRight className="size-4" />
                  </Link>
                </div>
              </div>
            </StaggerItem>
          </div>
        </div>
      </section>

      {/* Featured Blog Posts Preview */}
      <section className="py-20 bg-slate-50 border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Latest Articles"
            title="Featured Engineering & Strategy Insights"
            description="Deep technical analysis and best practices from our platform architecture team."
          />

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
            {blogPosts.slice(0, 2).map((post, idx) => (
              <StaggerItem key={post.slug} index={idx} hoverElevation>
                <div className="rounded-xl border border-slate-200/80 bg-white p-8 flex flex-col justify-between hover:border-blue-300 hover:shadow-lg transition-all h-full">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="rounded-md bg-blue-50 text-blue-700 px-3 py-0.5 text-xs font-semibold">
                        {post.category}
                      </span>
                      <span className="text-xs text-slate-400">· {post.readTime}</span>
                    </div>
                    <h3 className="mt-3 text-xl font-bold text-slate-900 leading-snug">{post.title}</h3>
                    <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed">{post.summary}</p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-xs text-slate-400">{post.author}</span>
                    <Link to={`/resources/blog/${post.slug}`} className="text-sm font-semibold text-blue-600 hover:underline">
                      Read Article →
                    </Link>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection />
    </div>
  )
}
