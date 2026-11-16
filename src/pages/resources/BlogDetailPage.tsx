/**
 * Blog Detail Page
 * Route: /resources/blog/:slug
 */

import { useParams, Link } from 'react-router'
import { Clock, ArrowLeft, ArrowRight } from 'lucide-react'
import { SEO } from '../../components/common/SEO'
import { Breadcrumbs } from '../../components/common/Breadcrumbs'
import { CTASection } from '../../components/common/CTASection'
import { blogPosts } from '../../data/resources'
import { ScrollReveal } from '../../components/common/ScrollReveal'

export function BlogDetailPage() {
  const { slug } = useParams<{ slug: string }>()
  const post = blogPosts.find((p) => p.slug === slug)

  if (!post) {
    return (
      <div className="py-24 text-center max-w-xl mx-auto px-4">
        <h1 className="text-2xl font-bold text-slate-900">Article Not Found</h1>
        <p className="mt-2 text-sm text-slate-600">The requested article could not be located.</p>
        <Link
          to="/resources/blog"
          className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:underline"
        >
          <ArrowLeft className="size-4" />
          <span>Back to all articles</span>
        </Link>
      </div>
    )
  }

  return (
    <div className="relative">
      <SEO
        title={`${post.title} | PulseQuo Blog`}
        description={post.summary}
        canonicalPath={`/resources/blog/${post.slug}`}
        schemaType="Article"
        schemaData={{
          '@type': 'BlogPosting',
          headline: post.title,
          description: post.summary,
          author: {
            '@type': 'Organization',
            name: post.author,
          },
          datePublished: '2026-11-01',
        }}
      />

      <article className="py-12 sm:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="down" duration={0.4}>
            <Breadcrumbs
              items={[
                { label: 'Resources', href: '/resources' },
                { label: 'Blog', href: '/resources/blog' },
                { label: post.title },
              ]}
              className="mb-8"
            />

            <div className="flex items-center gap-3 text-xs text-slate-500 mb-4">
              <span className="rounded-md bg-blue-50 text-blue-700 px-3 py-1 font-semibold">
                {post.category}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="size-3.5" />
                {post.readTime}
              </span>
              <span>· {post.date}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-[-0.03em] leading-tight">
              {post.title}
            </h1>

            {/* Author Card */}
            <div className="mt-8 flex items-center justify-between border-y border-slate-100 py-4">
              <div className="flex items-center gap-3">
                <div className="size-10 rounded-lg bg-blue-100 text-blue-700 font-bold flex items-center justify-center text-xs">
                  PQ
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-900">{post.author}</p>
                  <p className="text-xs text-slate-500">{post.authorRole}</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                {post.tags.map((t) => (
                  <span key={t} className="hidden sm:inline-block rounded-md bg-slate-100 px-2 py-0.5 text-xs text-slate-600">
                    #{t}
                  </span>
                ))}
              </div>
            </div>

            {/* Summary Box */}
            <div className="mt-8 rounded-lg bg-blue-50/70 border border-blue-200/80 p-6 text-sm text-blue-900 leading-relaxed font-medium">
              <p className="font-bold text-xs uppercase tracking-wider text-blue-700 mb-1">Article Summary</p>
              {post.summary}
            </div>
          </ScrollReveal>

          {/* Article Body */}
          <div className="mt-10 space-y-6 text-base text-slate-700 leading-relaxed font-sans">
            {post.content.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>

          {/* Share & Back */}
          <div className="mt-12 pt-8 border-t border-slate-200 flex items-center justify-between">
            <Link
              to="/resources/blog"
              className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:underline"
            >
              <ArrowLeft className="size-4" />
              <span>Back to all blog posts</span>
            </Link>

            <Link
              to="/book-demo"
              className="inline-flex items-center gap-2 text-sm font-semibold text-slate-900 hover:text-blue-600"
            >
              <span>Schedule a Demo</span>
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </article>

      <CTASection />
    </div>
  )
}
