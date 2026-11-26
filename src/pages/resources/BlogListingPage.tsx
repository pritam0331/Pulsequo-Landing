import { useMemo, useState } from 'react'
import { Link } from 'react-router'
import { Search, Clock, ArrowRight } from 'lucide-react'
import { SEO } from '../../components/common/SEO'
import { Breadcrumbs } from '../../components/common/Breadcrumbs'
import { BackgroundAnimation } from '../../components/common/BackgroundAnimation'
import { CTASection } from '../../components/common/CTASection'
import { blogPosts } from '../../data/resources'
import { ScrollReveal, StaggerItem } from '../../components/common/ScrollReveal'
import { CardSectionHydrator, CardGridSkeleton } from '../../components/common/CardSkeleton'
import { IndexedSearch } from '../../lib/dsa'

const BLOG_CATEGORIES = [
  'All',
  'CPaaS & Messaging',
  'AI Automation',
  'CRM & Sales',
  'Customer Support',
] as const

const BLOG_SEARCH = new IndexedSearch(
  blogPosts,
  (post) => `${post.title} ${post.summary} ${post.tags.join(' ')}`,
  (post) => post.category
)

export function BlogListingPage() {
  const [selectedCategory, setSelectedCategory] = useState<(typeof BLOG_CATEGORIES)[number]>('All')
  const [searchQuery, setSearchQuery] = useState('')

  const filteredPosts = useMemo(
    () => BLOG_SEARCH.query(searchQuery, selectedCategory),
    [searchQuery, selectedCategory]
  )

  return (
    <div className="relative">
      <SEO
        title="PulseQuo Blog · CPaaS, AI Agents & CRM Insights"
        description="Engineering insights, regulatory guides on Indian DLT compliance, WhatsApp Business throughput optimization, and Model Context Protocol architecture."
        canonicalPath="/resources/blog"
      />

      {/* Hero */}
      <section
        data-cursor-zone="hero"
        className="relative overflow-hidden bg-white pt-10 pb-14 sm:pt-14 sm:pb-18"
      >
        <BackgroundAnimation variant="hero" showGrid={true} showBeams={true} />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal direction="down" duration={0.4}>
            <Breadcrumbs
              items={[
                { label: 'Resources', href: '/resources' },
                { label: 'Blog & Articles' },
              ]}
              className="justify-center mb-6"
            />

            <h1 className="text-3xl sm:text-4xl lg:text-[48px] xl:text-[54px] font-black text-slate-900 tracking-[-0.03em] leading-[1.16] text-balance">
              PulseQuo Engineering &amp; Strategy Blog
            </h1>

            <p className="mt-5 text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto text-pretty">
              Practical architectures, carrier integration analyses, and conversational AI best practices written by
              software and telecom engineers.
            </p>

            {/* Search */}
            <div className="mt-8 max-w-md mx-auto relative">
              <Search className="size-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search articles by keyword or tag..."
                className="w-full rounded-lg border border-slate-300 bg-white pl-11 pr-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 focus:outline-none shadow-xs"
              />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-14 sm:py-18 section-fade-tint">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
            {BLOG_CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`rounded-lg px-4 py-2 text-xs font-semibold transition-all ${
                  selectedCategory === cat
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <CardSectionHydrator
            ariaLabel="Loading blog articles"
            skeleton={
              <CardGridSkeleton
                count={Math.max(filteredPosts.length, 2)}
                variant="blog"
                columnsClassName="grid-cols-1 md:grid-cols-2 gap-8"
              />
            }
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {filteredPosts.map((post, idx) => (
                <StaggerItem key={post.slug} index={idx} hoverElevation>
                  <article
                    className="rounded-xl border border-slate-200/80 bg-white p-8 flex flex-col justify-between hover:border-blue-300 hover:shadow-xl transition-all h-full"
                  >
                    <div>
                      <div className="flex items-center justify-between text-xs text-slate-400">
                        <span className="rounded-md bg-blue-50 text-blue-700 px-2.5 py-0.5 font-semibold">
                          {post.category}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="size-3.5" />
                          {post.readTime}
                        </span>
                      </div>

                      <h2 className="mt-4 text-2xl font-bold text-slate-900 leading-snug hover:text-blue-600 transition-colors">
                        <Link to={`/resources/blog/${post.slug}`}>{post.title}</Link>
                      </h2>

                      <p className="mt-3 text-sm text-slate-600 leading-relaxed">{post.summary}</p>

                      <div className="mt-6 flex flex-wrap gap-1.5">
                        {post.tags.map((t) => (
                          <span key={t} className="rounded-md bg-slate-100 px-2 py-0.5 text-[11px] text-slate-600">
                            #{t}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between">
                      <div>
                        <p className="text-xs font-bold text-slate-900">{post.author}</p>
                        <p className="text-[11px] text-slate-400">{post.authorRole}</p>
                      </div>

                      <Link
                        to={`/resources/blog/${post.slug}`}
                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 hover:underline"
                      >
                        <span>Read Article</span>
                        <ArrowRight className="size-4" />
                      </Link>
                    </div>
                  </article>
                </StaggerItem>
              ))}
            </div>

            {filteredPosts.length === 0 && (
              <div className="text-center py-16 text-slate-500">
                <p className="text-base font-semibold">No articles found matching your query.</p>
                <p className="mt-1 text-xs">Try searching for other terms like "WhatsApp", "DLT", or "MCP".</p>
              </div>
            )}
          </CardSectionHydrator>
        </div>
      </section>

      <CTASection />
    </div>
  )
}
