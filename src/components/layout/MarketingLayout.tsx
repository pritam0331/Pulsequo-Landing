/**
 * PulseQuo Marketing Base Layout
 * Wraps all public marketing pages with Lenis butter-smooth scrolling,
 * Hero-only CursorFollower, Navbar, Skip to Content, Floating Back-to-Top, and Footer.
 */

import { useState, useEffect, useRef } from 'react'
import { Outlet, useLocation } from 'react-router'
import { motion, AnimatePresence, MotionConfig, useScroll, useSpring } from 'motion/react'
import Lenis from 'lenis'
import { ArrowUp } from 'lucide-react'
import { Navbar } from './Navbar'
import { Footer } from './Footer'
import { CursorFollower } from '../common/CursorFollower'

export function MarketingLayout() {
  const [showScrollTop, setShowScrollTop] = useState(false)
  const location = useLocation()
  const lenisRef = useRef<Lenis | null>(null)

  // Global smooth scroll progress bar across all routes
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 160,
    damping: 30,
    restDelta: 0.001,
  })

  // Initialize silky, zero-jitter Lenis smooth scrolling (respects prefers-reduced-motion)
  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reducedMotion) return

    const lenis = new Lenis({
      lerp: 0.085,
      smoothWheel: true,
      wheelMultiplier: 0.95,
      touchMultiplier: 1.4,
      infinite: false,
      autoRaf: true,
      prevent: (node) => {
        // Allow native scrolling inside nested scrollable containers (FAQs, modals, code blocks)
        let el: HTMLElement | null = node
        while (el && el !== document.body) {
          if (el.hasAttribute('data-lenis-prevent')) return true
          const style = window.getComputedStyle(el)
          const overflowY = style.overflowY
          if (
            (overflowY === 'auto' || overflowY === 'scroll') &&
            el.scrollHeight > el.clientHeight + 2
          ) {
            return true
          }
          el = el.parentElement
        }
        return false
      },
    })

    lenisRef.current = lenis

    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null
      const anchor = target?.closest('a[href^="#"]') as HTMLAnchorElement | null
      if (!anchor) return
      const href = anchor.getAttribute('href')
      if (!href || href === '#') return
      const dest = document.querySelector(href)
      if (dest instanceof HTMLElement) {
        e.preventDefault()
        lenis.scrollTo(dest, { offset: -76, duration: 1.05 })
      }
    }

    document.addEventListener('click', handleAnchorClick)

    return () => {
      document.removeEventListener('click', handleAnchorClick)
      lenis.destroy()
      lenisRef.current = null
    }
  }, [])

  // Sync scroll position on route or hash navigation
  useEffect(() => {
    const lenis = lenisRef.current
    if (location.hash) {
      const id = location.hash.replace('#', '')
      const el = document.getElementById(id)
      if (el) {
        if (lenis) {
          lenis.scrollTo(el, { offset: -76, duration: 1.0 })
        } else {
          el.scrollIntoView({ behavior: 'smooth' })
        }
        return
      }
    }

    if (lenis) {
      lenis.scrollTo(0, { immediate: true })
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
    }
  }, [location.pathname, location.search, location.hash])

  useEffect(() => {
    const handleScroll = () => {
      const next = window.scrollY > 400
      setShowScrollTop((prev) => (prev === next ? prev : next))
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, { duration: 1.05 })
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen flex flex-col bg-white text-slate-900 font-sans selection:bg-blue-100 selection:text-blue-900 relative">
        {/* Redesigned Luminous Cursor Effect (Scoped Exclusively to Hero Sections) */}
        <CursorFollower />

        {/* Top Scroll Depth Progress Bar across all routes */}
        <motion.div
          className="fixed top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 origin-left z-50 pointer-events-none will-change-transform"
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

        {/* Page Content with Smooth Route Entrance */}
        <main id="main-content" className="flex-1">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
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
              initial={{ opacity: 0, y: 14, scale: 0.88 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.88 }}
              whileHover={{ y: -3, scale: 1.06 }}
              whileTap={{ scale: 0.94 }}
              transition={{ type: 'spring', stiffness: 360, damping: 24 }}
              className="fixed bottom-24 right-6 z-40 size-11 rounded-xl bg-slate-900/90 hover:bg-blue-600 text-white shadow-xl shadow-slate-900/20 backdrop-blur-md border border-slate-700/60 flex items-center justify-center transition-colors cursor-pointer"
            >
              <ArrowUp className="size-5" />
            </motion.button>
          )}
        </AnimatePresence>
      </div>
    </MotionConfig>
  )
}
