/**
 * PulseQuo Marketing Base Layout
 * Wraps all public marketing pages with native hardware-composited scrolling,
 * Hero-only CursorFollower, Navbar, Skip to Content, Floating Back-to-Top, and Footer.
 */

import { useState, useEffect, useRef } from 'react'
import { Outlet, useLocation } from 'react-router'
import { motion, AnimatePresence, MotionConfig } from 'motion/react'
import { ArrowUp } from 'lucide-react'
import { Navbar } from './Navbar'
import { Footer } from './Footer'
import { CursorFollower } from '../common/CursorFollower'

export function MarketingLayout() {
  const [showScrollTop, setShowScrollTop] = useState(false)
  const location = useLocation()
  const progressBarRef = useRef<HTMLDivElement | null>(null)

  // Smooth native scrolling for in-page anchor links
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null
      const anchor = target?.closest('a[href^="#"]') as HTMLAnchorElement | null
      if (!anchor) return
      const href = anchor.getAttribute('href')
      if (!href || href === '#') return
      const dest = document.querySelector(href)
      if (dest instanceof HTMLElement) {
        e.preventDefault()
        const top = dest.getBoundingClientRect().top + window.scrollY - 76
        window.scrollTo({ top: Math.max(0, top), behavior: 'smooth' })
      }
    }

    document.addEventListener('click', handleAnchorClick)
    return () => document.removeEventListener('click', handleAnchorClick)
  }, [])

  // Sync scroll position on route or hash navigation
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '')
      const el = document.getElementById(id)
      if (el) {
        const top = el.getBoundingClientRect().top + window.scrollY - 76
        window.scrollTo({ top: Math.max(0, top), behavior: 'smooth' })
        return
      }
    }

    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
    if (progressBarRef.current) {
      progressBarRef.current.style.transform = 'scaleX(0)'
    }
  }, [location.pathname, location.search, location.hash])

  // Single rAF-throttled passive scroll listener for progress bar & back-to-top button
  useEffect(() => {
    let rafId: number | null = null

    const updateScrollUI = () => {
      rafId = null
      const scrollY = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = docHeight > 0 ? Math.min(1, Math.max(0, scrollY / docHeight)) : 0

      if (progressBarRef.current) {
        progressBarRef.current.style.transform = `scaleX(${progress.toFixed(4)})`
      }

      const nextShowTop = scrollY > 400
      setShowScrollTop((prev) => (prev === nextShowTop ? prev : nextShowTop))
    }

    const handleScroll = () => {
      if (rafId === null) {
        rafId = window.requestAnimationFrame(updateScrollUI)
      }
    }

    updateScrollUI()
    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', handleScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleScroll)
      if (rafId !== null) {
        window.cancelAnimationFrame(rafId)
      }
    }
  }, [location.pathname])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen flex flex-col bg-white text-slate-900 font-sans selection:bg-blue-100 selection:text-blue-900 relative">
        {/* Precision Square Cursor Effect (Scoped Exclusively to Hero Sections) */}
        <CursorFollower />

        {/* Top Scroll Depth Progress Bar across all routes (Direct GPU Transform) */}
        <div
          ref={progressBarRef}
          aria-hidden="true"
          style={{ transform: 'scaleX(0)' }}
          className="fixed top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 origin-left z-50 pointer-events-none"
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

        {/* Page Content with Lightweight Route Entrance */}
        <main id="main-content" className="flex-1">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
          >
            <Outlet />
          </motion.div>
        </main>

        {/* Global Footer */}
        <Footer />

        {/* Floating Back to Top Button (positioned above bottom-right chat widget) */}
        <AnimatePresence>
          {showScrollTop && (
            <motion.button
              type="button"
              onClick={scrollToTop}
              aria-label="Scroll back to top"
              initial={{ opacity: 0, y: 12, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 8, scale: 0.9 }}
              whileHover={{ y: -2, scale: 1.05 }}
              whileTap={{ scale: 0.94 }}
              transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
              className="fixed bottom-24 right-6 z-40 size-11 rounded-xl bg-slate-900 hover:bg-blue-600 text-white shadow-xl shadow-slate-900/20 border border-slate-700/60 flex items-center justify-center transition-colors cursor-pointer"
            >
              <ArrowUp className="size-5" />
            </motion.button>
          )}
        </AnimatePresence>
      </div>
    </MotionConfig>
  )
}
