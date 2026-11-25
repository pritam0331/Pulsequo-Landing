/**
 * PulseQuo Marketing Base Layout
 * Wraps all public marketing pages with Navbar, Skip to Content, Floating Back-to-Top, and Footer.
 */

import { useState, useEffect } from 'react'
import { Outlet, useLocation } from 'react-router'
import { motion, AnimatePresence, MotionConfig, useScroll, useSpring } from 'motion/react'
import { ArrowUp } from 'lucide-react'
import { Navbar } from './Navbar'
import { Footer } from './Footer'
import { CursorFollower } from '../common/CursorFollower'

export function MarketingLayout() {
  const [showScrollTop, setShowScrollTop] = useState(false)
  const location = useLocation()

  // Global smooth scroll progress bar across all routes
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 28,
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
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen flex flex-col bg-white text-slate-900 font-sans selection:bg-blue-100 selection:text-blue-900 relative">
        {/* Performance-Optimized Custom Cursor Follower */}
        <CursorFollower />

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

        {/* Page Content with Smooth Route Entrance */}
        <main id="main-content" className="flex-1">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
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
              initial={{ opacity: 0, y: 16, scale: 0.85 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 12, scale: 0.85 }}
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

