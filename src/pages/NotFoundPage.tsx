/**
 * 404 Not Found Page
 */

import { Link } from 'react-router'
import { Home } from 'lucide-react'
import { SEO } from '../components/common/SEO'
import { siteConfig } from '../config/siteConfig'
import { ScrollReveal } from '../components/common/ScrollReveal'

export function NotFoundPage() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center py-20 px-4 bg-slate-50">
      <SEO title="Page Not Found (404) | PulseQuo" description="The page you requested could not be found." />

      <ScrollReveal direction="up" duration={0.4}>
        <div className="max-w-md w-full text-center">
          <span className="text-6xl sm:text-7xl font-black text-blue-600 font-mono">404</span>
          <h1 className="mt-4 text-2xl sm:text-3xl font-bold text-slate-900">Page Not Found</h1>
          <p className="mt-3 text-sm text-slate-600 leading-relaxed">
            The page you are looking for does not exist or may have been relocated.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              to="/"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-blue-700 shadow-xs transition-colors"
            >
              <Home className="size-4" />
              <span>Return Home</span>
            </Link>
            <a
              href={siteConfig.appUrl}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-colors"
            >
              <span>Open Application</span>
            </a>
          </div>

          <div className="mt-12 pt-6 border-t border-slate-200 text-xs text-slate-500">
            <span>Looking for something specific? </span>
            <Link to="/contact" className="text-blue-600 font-semibold hover:underline">
              Contact Support
            </Link>
          </div>
        </div>
      </ScrollReveal>
    </div>
  )
}
