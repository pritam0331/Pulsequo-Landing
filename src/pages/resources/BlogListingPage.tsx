/**
 * Blog Listing Page
 * Route: /resources/blog
 */

import { useState } from 'react'
import { Link } from 'react-router'
import { Search, Clock, ArrowRight, BookOpen } from 'lucide-react'
import { SEO } from '../../components/common/SEO'
import { Breadcrumbs } from '../../components/common/Breadcrumbs'
import { CTASection } from '../../components/common/CTASection'
import { blogPosts } from '../../data/resources'
import { ScrollReveal, StaggerItem } from '../../components/common/ScrollReveal'

export function BlogListingPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All')
  const [searchQuery, setSearchQuery] = useState('')

  const categories = ['All', 'CPaaS & Messaging', 'AI Automation', 'CRM & Sales', 'Customer Support']

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()))
    return matchesCategory && matchesSearch
  })

  return (
    <div className="relative">
      <SEO
        title="PulseQuo Blog · CPaaS, AI Agents & CRM Insights"
        description="Engineering insights, regulatory guides on Indian DLT compliance, WhatsApp Business throughput optimization, and Model Context Protocol architecture."
        canonicalPath="/resources/blog"
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-blue-50/70 via-white to-white pt-10 pb-16 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <ScrollReveal direction="down" duration={0.4}>
            <Breadcrumbs
              items={[
                { label: 'Resources', href: '/resources' },
                { label: 'Blog & Articles' },
              ]}
              className="justify-center mb-6"
            />

            <span className="inline-flex items-center gap-1.5 rounded-md bg-blue-100/80 border border-blue-200 px-3.5 py-1 text-xs font-semibold text-blue-800 mb-6">
              <BookOpen className="size-3.5 text-blue-600" />
              <span>Platform Engineering & Strategy</span>
            </span>

            <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-[-0.03em] leading-tight">
              PulseQuo Engineering & Strategy Blog
            </h1>

            <p className="mt-6 text-base sm:text-lg text-slate-600 leading-relaxed">
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
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
            {categories.map((cat) => (
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
        </div>
      </section>

      <CTASection />
    </div>
  )
}
