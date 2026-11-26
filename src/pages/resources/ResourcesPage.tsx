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
import { BackgroundAnimation } from '../../components/common/BackgroundAnimation'
import { SectionHeading } from '../../components/common/SectionHeading'
import { CTASection } from '../../components/common/CTASection'
import { blogPosts } from '../../data/resources'
import { ScrollReveal, StaggerItem } from '../../components/common/ScrollReveal'
import { CardSectionHydrator, CardGridSkeleton } from '../../components/common/CardSkeleton'

export function ResourcesPage() {
  return (
    <div className="relative">
      <SEO
        title="Resources Hub · Guides, Articles & Developer References | PulseQuo"
        description="Comprehensive guides on WhatsApp Business API scaling, Indian DLT compliance, Model Context Protocol integration, and API documentation."
        canonicalPath="/resources"
      />

      {/* Hero */}
      <section
        data-cursor-zone="hero"
        className="relative overflow-hidden bg-white pt-10 pb-14 sm:pt-14 sm:pb-18"
      >
        <BackgroundAnimation variant="hero" showGrid={true} showBeams={true} />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal direction="down" duration={0.4}>
            <Breadcrumbs items={[{ label: 'Resources' }]} className="justify-center mb-6" />

            <h1 className="text-3xl sm:text-4xl lg:text-[48px] xl:text-[54px] font-black text-slate-900 tracking-[-0.03em] leading-[1.16] text-balance">
              Learn, Implement, and Scale with PulseQuo
            </h1>

            <p className="mt-5 text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto text-pretty">
              In-depth engineering articles, regulatory compliance playbooks, and developer documentation to help your
              business master omnichannel communications.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Core Resource Categories */}
      <section className="py-14 sm:py-18 section-fade-tint">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <CardSectionHydrator
            ariaLabel="Loading resource categories"
            skeleton={
              <CardGridSkeleton
                count={4}
                variant="resource"
                columnsClassName="grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
              />
            }
          >
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
          </CardSectionHydrator>
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

          <CardSectionHydrator
            className="mt-16"
            ariaLabel="Loading featured blog articles"
            skeleton={
              <CardGridSkeleton
                count={2}
                variant="blog"
                columnsClassName="grid-cols-1 md:grid-cols-2 gap-8"
              />
            }
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
          </CardSectionHydrator>
        </div>
      </section>

      {/* CTA */}
      <CTASection />
    </div>
  )
}
