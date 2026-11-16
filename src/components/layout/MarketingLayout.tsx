/**
 * PulseQuo Marketing Base Layout
 * Wraps all public marketing pages with Navbar, Skip to Content, Floating Back-to-Top, and Footer.
 */

import { useState, useEffect } from 'react'
import { Outlet, useLocation } from 'react-router'
import { motion, useScroll, useSpring } from 'motion/react'
import { ArrowUp } from 'lucide-react'
import { Navbar } from './Navbar'
import { Footer } from './Footer'

export function MarketingLayout() {
  const [showScrollTop, setShowScrollTop] = useState(false)
  const location = useLocation()

  // Global smooth scroll progress bar across all routes
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  // Scroll to top whenever route changes or hash changes
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '')
      const el = document.getElementById(id)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' })
        return
      }
    }
    // Scroll to top immediately on route navigation
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }, [location.pathname, location.search])

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 font-sans selection:bg-blue-100 selection:text-blue-900 relative">
      {/* Top Scroll Depth Progress Bar across all routes */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 origin-left z-50 pointer-events-none"
        style={{ scaleX }}
      />

      {/* Accessible skip link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-50 bg-blue-600 text-white px-4 py-2 rounded-md shadow-lg"
      >
        Skip to main content
      </a>

      {/* Global Navbar */}
      <Navbar />

      {/* Page Content */}
      <main id="main-content" className="flex-1">
        <Outlet />
      </main>

      {/* Global Footer */}
      <Footer />

      {/* Floating Back to Top Button (positioned above bottom-right chat widget) */}
      {showScrollTop && (
        <button
          type="button"
          onClick={scrollToTop}
          aria-label="Scroll back to top"
          className="fixed bottom-24 right-6 z-40 size-11 rounded-2xl bg-slate-900/90 hover:bg-blue-600 text-white shadow-xl shadow-slate-900/20 backdrop-blur-md border border-slate-700/60 flex items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:shadow-blue-500/30 cursor-pointer animate-in fade-in-0 zoom-in-90"
        >
          <ArrowUp className="size-5" />
        </button>
      )}
    </div>
  )
}
