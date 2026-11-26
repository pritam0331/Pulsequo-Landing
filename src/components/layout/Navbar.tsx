/**
 * PulseQuo Global Marketing Navbar
 * Sticky header with frosted glass, rich dropdown menus, and a mobile drawer.
 */

import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router'
import { motion, AnimatePresence } from 'motion/react'
import {
  ChevronDown,
  Menu,
  X,
  MessageSquare,
  TrendingUp,
  Headphones,
  Bot,
  Users,
  Building2,
  Sparkles,
  Layers,
  ArrowRight,
  BookOpen,
  Code2,
  Webhook,
  CalendarCheck,
  Zap,
  Globe2,
} from 'lucide-react'
import { Logo } from './Logo'

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [productsOpen, setProductsOpen] = useState(false)
  const [solutionsOpen, setSolutionsOpen] = useState(false)
  const [resourcesOpen, setResourcesOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileTab, setMobileTab] = useState<'products' | 'solutions' | 'resources'>('products')

  const location = useLocation()
  const navRef = useRef<HTMLDivElement>(null)

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false)
    setProductsOpen(false)
    setSolutionsOpen(false)
    setResourcesOpen(false)
  }, [location.pathname])

  // Prevent background scroll when mobile drawer is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileMenuOpen])

  // Track scroll for sticky elevation (rAF-throttled, zero redundant renders)
  useEffect(() => {
    let rafId: number | null = null
    const handleScroll = () => {
      if (rafId !== null) return
      rafId = window.requestAnimationFrame(() => {
        rafId = null
        const next = window.scrollY > 12
        setIsScrolled((prev) => (prev === next ? prev : next))
      })
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', handleScroll)
      if (rafId !== null) window.cancelAnimationFrame(rafId)
    }
  }, [])

  // Close dropdowns on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setProductsOpen(false)
        setSolutionsOpen(false)
        setResourcesOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <>
      <header
        ref={navRef}
        className="sticky top-2.5 sm:top-3.5 z-40 w-full px-3 sm:px-6 lg:px-8 transition-all duration-300"
      >
        <div
          data-cursor="glass"
          className={`max-w-7xl mx-auto rounded-2xl border transition-[box-shadow,border-color,background-color] duration-200 ${
            isScrolled
              ? 'bg-white/98 border-slate-200/95 shadow-lg shadow-slate-900/6 py-1.5 px-3 sm:px-5'
              : 'bg-white/95 border-slate-200/75 shadow-xs py-1.5 px-3 sm:px-5'
          }`}
        >
          <div className="flex items-center justify-between gap-6 h-9 sm:h-10">
            {/* Brand Logo (Square Icon, No Background) */}
            <Logo size="sm" showTagline={false} />

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1" aria-label="Main Navigation">
              {/* 1. Products Dropdown */}
              <div className="relative">
                <button
                  type="button"
                  onClick={() => {
                    setProductsOpen(!productsOpen)
                    setSolutionsOpen(false)
                    setResourcesOpen(false)
                  }}
                  className={`group inline-flex items-center gap-1 px-2.5 py-1.5 text-[13px] font-semibold rounded-lg transition-all ${
                    productsOpen || location.pathname.startsWith('/products')
                      ? 'text-blue-600 bg-blue-50/90'
                      : 'text-slate-700 hover:text-blue-600 hover:bg-slate-50'
                  }`}
                  aria-expanded={productsOpen}
                >
                  <span>Products</span>
                  <ChevronDown
                    className={`size-3.5 text-slate-400 group-hover:text-blue-600 transition-transform duration-200 ${
                      productsOpen ? 'rotate-180 text-blue-600' : ''
                    }`}
                  />
                </button>

                <AnimatePresence>
                {productsOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 6, scale: 0.97 }}
                    transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
                    data-cursor="glass"
                    className="absolute left-0 mt-2.5 w-[360px] rounded-2xl bg-white/98 backdrop-blur-xl p-2.5 shadow-2xl shadow-slate-900/10 ring-1 ring-slate-900/8 focus:outline-none"
                  >
                    <div className="flex items-center justify-between px-2.5 py-1 border-b border-slate-100 mb-1.5">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                        Unified Engines
                      </span>
                      <span className="text-[10px] font-medium text-blue-600">4 Core Suites</span>
                    </div>

                    <div className="space-y-1">
                      <Link
                        to="/products/communication-cloud"
                        className="group flex items-start gap-2.5 rounded-lg p-2 hover:bg-blue-50/70 transition-all"
                      >
                        <div className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-lg bg-blue-100/80 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all shadow-xs">
                          <MessageSquare className="size-4" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-1.5">
                            <span className="text-xs font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                              Communication Cloud
                            </span>
                          </div>
                          <p className="mt-0.5 text-[11px] text-slate-500 leading-snug">
                            Official WhatsApp Business API, SMS gateway, voice, and team inbox.
                          </p>
                        </div>
                      </Link>

                      <Link
                        to="/products/sales-crm"
                        className="group flex items-start gap-2.5 rounded-lg p-2 hover:bg-blue-50/70 transition-all"
                      >
                        <div className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-lg bg-blue-100/80 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all shadow-xs">
                          <TrendingUp className="size-4" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-1.5">
                            <span className="text-xs font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                              Sales CRM
                            </span>
                          </div>
                          <p className="mt-0.5 text-[11px] text-slate-500 leading-snug">
                            Lead scoring, visual Kanban stages, timeline tracking, and conversational sales.
                          </p>
                        </div>
                      </Link>

                      <Link
                        to="/products/support-crm"
                        className="group flex items-start gap-2.5 rounded-lg p-2 hover:bg-blue-50/70 transition-all"
                      >
                        <div className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-lg bg-blue-100/80 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all shadow-xs">
                          <Headphones className="size-4" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-1.5">
                            <span className="text-xs font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                              Support CRM
                            </span>
                          </div>
                          <p className="mt-0.5 text-[11px] text-slate-500 leading-snug">
                            Omnichannel ticketing, SLA resolution countdowns, and automated routing.
                          </p>
                        </div>
                      </Link>

                      <Link
                        to="/products/ai-automation"
                        className="group flex items-start gap-2.5 rounded-lg p-2 hover:bg-purple-50/70 transition-all"
                      >
                        <div className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-lg bg-purple-100/80 text-purple-600 group-hover:bg-purple-600 group-hover:text-white transition-all shadow-xs">
                          <Bot className="size-4" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-1.5">
                            <span className="text-xs font-bold text-slate-900 group-hover:text-purple-600 transition-colors">
                              AI & Automation
                            </span>
                          </div>
                          <p className="mt-0.5 text-[11px] text-slate-500 leading-snug">
                            Visual flow designer, autonomous agents, and Model Context Protocol servers.
                          </p>
                        </div>
                      </Link>
                    </div>
                  </motion.div>
                )}
                </AnimatePresence>
              </div>

              {/* 2. Solutions Dropdown */}
              <div className="relative">
                <button
                  type="button"
                  onClick={() => {
                    setSolutionsOpen(!solutionsOpen)
                    setProductsOpen(false)
                    setResourcesOpen(false)
                  }}
                  className={`group inline-flex items-center gap-1 px-2.5 py-1.5 text-[13px] font-semibold rounded-lg transition-all ${
                    solutionsOpen || location.pathname.startsWith('/solutions')
                      ? 'text-blue-600 bg-blue-50/90'
                      : 'text-slate-700 hover:text-blue-600 hover:bg-slate-50'
                  }`}
                  aria-expanded={solutionsOpen}
                >
                  <span>Solutions</span>
                  <ChevronDown
                    className={`size-3.5 text-slate-400 group-hover:text-blue-600 transition-transform duration-200 ${
                      solutionsOpen ? 'rotate-180 text-blue-600' : ''
                    }`}
                  />
                </button>

                <AnimatePresence>
                {solutionsOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 6, scale: 0.97 }}
                    transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
                    data-cursor="glass"
                    className="absolute left-0 mt-2.5 w-80 rounded-2xl bg-white/98 backdrop-blur-xl p-2.5 shadow-2xl shadow-slate-900/10 ring-1 ring-slate-900/8 focus:outline-none"
                  >
                    <div className="space-y-1">
                      <Link
                        to="/solutions"
                        className="flex items-center justify-between px-2.5 py-1.5 text-[11px] font-bold uppercase tracking-wider text-blue-600 bg-blue-50/80 rounded-lg transition-colors mb-1.5"
                      >
                        <span>Explore All Solutions</span>
                        <ArrowRight className="size-3" />
                      </Link>

                      <Link
                        to="/solutions/sales-teams"
                        className="flex items-center gap-2.5 rounded-lg px-2.5 py-1.5 text-xs font-medium text-slate-700 hover:bg-slate-50 hover:text-blue-600 transition-colors"
                      >
                        <div className="size-6 rounded-md bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                          <TrendingUp className="size-3.5" />
                        </div>
                        <div>
                          <div className="font-semibold text-slate-900 text-xs">For Sales Teams</div>
                          <div className="text-[10.5px] text-slate-500">Accelerate lead velocity & conversion</div>
                        </div>
                      </Link>

                      <Link
                        to="/solutions/customer-support"
                        className="flex items-center gap-2.5 rounded-lg px-2.5 py-1.5 text-xs font-medium text-slate-700 hover:bg-slate-50 hover:text-blue-600 transition-colors"
                      >
                        <div className="size-6 rounded-md bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                          <Headphones className="size-3.5" />
                        </div>
                        <div>
                          <div className="font-semibold text-slate-900 text-xs">For Customer Support</div>
                          <div className="text-[10.5px] text-slate-500">Fast first-response & SLA defense</div>
                        </div>
                      </Link>

                      <Link
                        to="/solutions/marketing-teams"
                        className="flex items-center gap-2.5 rounded-lg px-2.5 py-1.5 text-xs font-medium text-slate-700 hover:bg-slate-50 hover:text-blue-600 transition-colors"
                      >
                        <div className="size-6 rounded-md bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                          <Sparkles className="size-3.5" />
                        </div>
                        <div>
                          <div className="font-semibold text-slate-900 text-xs">For Marketing Teams</div>
                          <div className="text-[10.5px] text-slate-500">Targeted WhatsApp & SMS broadcasts</div>
                        </div>
                      </Link>

                      <Link
                        to="/solutions/startups"
                        className="flex items-center gap-2.5 rounded-lg px-2.5 py-1.5 text-xs font-medium text-slate-700 hover:bg-slate-50 hover:text-emerald-600 transition-colors"
                      >
                        <div className="size-6 rounded-md bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                          <Users className="size-3.5" />
                        </div>
                        <div>
                          <div className="font-semibold text-slate-900 text-xs">For Startups</div>
                          <div className="text-[10.5px] text-slate-500">All-in-one stack without overhead</div>
                        </div>
                      </Link>

                      <Link
                        to="/solutions/enterprises"
                        className="flex items-center gap-2.5 rounded-lg px-2.5 py-1.5 text-xs font-medium text-slate-700 hover:bg-slate-50 hover:text-amber-600 transition-colors"
                      >
                        <div className="size-6 rounded-md bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
                          <Building2 className="size-3.5" />
                        </div>
                        <div>
                          <div className="font-semibold text-slate-900 text-xs">For Enterprises</div>
                          <div className="text-[10.5px] text-slate-500">High-throughput routing & custom SLAs</div>
                        </div>
                      </Link>
                    </div>
                  </motion.div>
                )}
                </AnimatePresence>
              </div>

              {/* 3. Integrations */}
              <Link
                to="/integrations"
                className={`px-2.5 py-1.5 text-[13px] font-semibold rounded-lg transition-all ${
                  location.pathname === '/integrations'
                    ? 'text-blue-600 bg-blue-50/90'
                    : 'text-slate-700 hover:text-blue-600 hover:bg-slate-50'
                }`}
              >
                Integrations
              </Link>

              {/* 4. Resources Dropdown */}
              <div className="relative">
                <button
                  type="button"
                  onClick={() => {
                    setResourcesOpen(!resourcesOpen)
                    setProductsOpen(false)
                    setSolutionsOpen(false)
                  }}
                  className={`group inline-flex items-center gap-1 px-2.5 py-1.5 text-[13px] font-semibold rounded-lg transition-all ${
                    resourcesOpen ||
                    location.pathname.startsWith('/resources') ||
                    location.pathname.startsWith('/developers')
                      ? 'text-blue-600 bg-blue-50/90'
                      : 'text-slate-700 hover:text-blue-600 hover:bg-slate-50'
                  }`}
                  aria-expanded={resourcesOpen}
                >
                  <span>Resources</span>
                  <ChevronDown
                    className={`size-3.5 text-slate-400 group-hover:text-blue-600 transition-transform duration-200 ${
                      resourcesOpen ? 'rotate-180 text-blue-600' : ''
                    }`}
                  />
                </button>

                <AnimatePresence>
                {resourcesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 6, scale: 0.97 }}
                    transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
                    data-cursor="glass"
                    className="absolute left-0 mt-2.5 w-64 rounded-2xl bg-white/98 backdrop-blur-xl p-2.5 shadow-2xl shadow-slate-900/10 ring-1 ring-slate-900/8 focus:outline-none"
                  >
                    <div className="space-y-1">
                      <Link
                        to="/resources"
                        className="flex items-center justify-between px-2.5 py-1.5 text-[11px] font-bold uppercase tracking-wider text-blue-600 bg-blue-50/80 rounded-lg transition-colors mb-1.5"
                      >
                        <span>Resource Center</span>
                        <ArrowRight className="size-3" />
                      </Link>

                      <Link
                        to="/resources/blog"
                        className="flex items-center gap-2.5 rounded-lg px-2.5 py-1.5 text-xs font-medium text-slate-700 hover:bg-slate-50 hover:text-blue-600 transition-colors"
                      >
                        <BookOpen className="size-3.5 text-blue-600 shrink-0" />
                        <div>
                          <div className="font-semibold text-slate-900 text-xs">Blog & Insights</div>
                          <div className="text-[10.5px] text-slate-500">Playbooks, CPaaS tips, trends</div>
                        </div>
                      </Link>

                      <Link
                        to="/resources/guides"
                        className="flex items-center gap-2.5 rounded-lg px-2.5 py-1.5 text-xs font-medium text-slate-700 hover:bg-slate-50 hover:text-blue-600 transition-colors"
                      >
                        <Layers className="size-3.5 text-blue-600 shrink-0" />
                        <div>
                          <div className="font-semibold text-slate-900 text-xs">Implementation Guides</div>
                          <div className="text-[10.5px] text-slate-500">Step-by-step onboarding walkthroughs</div>
                        </div>
                      </Link>

                      <Link
                        to="/developers/api-documentation"
                        className="flex items-center gap-2.5 rounded-lg px-2.5 py-1.5 text-xs font-medium text-slate-700 hover:bg-slate-50 hover:text-purple-600 transition-colors"
                      >
                        <Code2 className="size-3.5 text-purple-600 shrink-0" />
                        <div>
                          <div className="font-semibold text-slate-900 text-xs">API Documentation</div>
                          <div className="text-[10.5px] text-slate-500">RESTful schemas & SDKs</div>
                        </div>
                      </Link>

                      <Link
                        to="/developers/webhooks"
                        className="flex items-center gap-2.5 rounded-lg px-2.5 py-1.5 text-xs font-medium text-slate-700 hover:bg-slate-50 hover:text-emerald-600 transition-colors"
                      >
                        <Webhook className="size-3.5 text-emerald-600 shrink-0" />
                        <div>
                          <div className="font-semibold text-slate-900 text-xs">Webhooks & Events</div>
                          <div className="text-[10.5px] text-slate-500">HMAC signed event streams</div>
                        </div>
                      </Link>
                    </div>
                  </motion.div>
                )}
                </AnimatePresence>
              </div>

              {/* 5. Pricing */}
              <Link
                to="/pricing"
                className={`whitespace-nowrap shrink-0 px-2.5 py-1.5 text-[13px] font-semibold rounded-lg transition-all ${
                  location.pathname === '/pricing'
                    ? 'text-blue-600 bg-blue-50/90'
                    : 'text-slate-700 hover:text-blue-600 hover:bg-slate-50'
                }`}
              >
                Pricing
              </Link>

              {/* 6. About Us */}
              <Link
                to="/about"
                className={`whitespace-nowrap shrink-0 px-2.5 py-1.5 text-[13px] font-semibold rounded-lg transition-all ${
                  location.pathname === '/about'
                    ? 'text-blue-600 bg-blue-50/90'
                    : 'text-slate-700 hover:text-blue-600 hover:bg-slate-50'
                }`}
              >
                About
              </Link>
            </nav>

            {/* Desktop Action (Single Primary Action: Book a Demo) */}
            <div className="hidden lg:flex items-center gap-2 shrink-0">
              <Link
                to="/book-demo"
                className="group btn-shine whitespace-nowrap inline-flex items-center gap-1.5 px-4 py-1.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 hover:-translate-y-0.5 rounded-xl transition-all duration-200 shadow-sm shadow-blue-600/20 hover:shadow-md hover:shadow-blue-600/25"
              >
                <CalendarCheck className="size-3.5" />
                <span>Book a Demo</span>
                <ArrowRight className="size-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
              </Link>
            </div>

            {/* Mobile Actions: Demo Quick Button & Hamburger */}
            <div className="flex items-center gap-1.5 lg:hidden">
              <Link
                to="/book-demo"
                className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-bold text-blue-700 bg-blue-50 border border-blue-200/80 rounded-md shadow-xs"
              >
                <CalendarCheck className="size-3" />
                <span>Demo</span>
              </Link>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="inline-flex items-center justify-center p-1.5 rounded-lg text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors cursor-pointer"
                aria-label="Toggle navigation menu"
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className="size-5 text-slate-900" /> : <Menu className="size-5 text-slate-900" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden flex flex-col justify-end bg-slate-950/60 backdrop-blur-md transition-opacity">
          <div className="w-full bg-white rounded-t-2xl shadow-2xl flex flex-col max-h-[90vh] overflow-hidden animate-in slide-in-from-bottom duration-300">
            {/* Drawer Header */}
            <div className="flex items-center justify-between px-5 py-3.5 border-b border-slate-100">
              <Logo size="sm" showTagline={false} />
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="size-8 rounded-lg bg-slate-100 text-slate-600 flex items-center justify-center hover:bg-slate-200 transition-colors cursor-pointer"
              >
                <X className="size-4" />
              </button>
            </div>

            {/* Mobile Tab Selector */}
            <div className="grid grid-cols-3 gap-1 p-2 bg-slate-100/80 mx-4 mt-3 rounded-xl text-xs font-semibold">
              <button
                type="button"
                onClick={() => setMobileTab('products')}
                className={`py-2 rounded-lg transition-all ${
                  mobileTab === 'products' ? 'bg-white text-blue-600 shadow-xs' : 'text-slate-600'
                }`}
              >
                Products
              </button>
              <button
                type="button"
                onClick={() => setMobileTab('solutions')}
                className={`py-2 rounded-lg transition-all ${
                  mobileTab === 'solutions' ? 'bg-white text-blue-600 shadow-xs' : 'text-slate-600'
                }`}
              >
                Solutions
              </button>
              <button
                type="button"
                onClick={() => setMobileTab('resources')}
                className={`py-2 rounded-lg transition-all ${
                  mobileTab === 'resources' ? 'bg-white text-blue-600 shadow-xs' : 'text-slate-600'
                }`}
              >
                More Links
              </button>
            </div>

            {/* Scrollable Tab Content */}
            <div className="flex-1 overflow-y-auto px-5 py-4 space-y-3">
              {mobileTab === 'products' && (
                <div className="space-y-2">
                  <Link
                    to="/products/communication-cloud"
                    className="flex items-start gap-3 p-3 rounded-2xl bg-blue-50/60 border border-blue-100 hover:bg-blue-100/70 transition-colors"
                  >
                    <div className="size-9 rounded-xl bg-blue-600 text-white flex items-center justify-center shrink-0">
                      <MessageSquare className="size-5" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-slate-900">Communication Cloud</div>
                      <div className="text-xs text-slate-500">Official WhatsApp API, SMS Gateway & Inbox</div>
                    </div>
                  </Link>

                  <Link
                    to="/products/sales-crm"
                    className="flex items-start gap-3 p-3 rounded-2xl bg-blue-50/60 border border-blue-100 hover:bg-blue-100/70 transition-colors"
                  >
                    <div className="size-9 rounded-xl bg-blue-600 text-white flex items-center justify-center shrink-0">
                      <TrendingUp className="size-5" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-slate-900">Sales CRM</div>
                      <div className="text-xs text-slate-500">Kanban Pipelines & Lead Automation</div>
                    </div>
                  </Link>

                  <Link
                    to="/products/support-crm"
                    className="flex items-start gap-3 p-3 rounded-2xl bg-violet-50/60 border border-violet-100 hover:bg-violet-100/70 transition-colors"
                  >
                    <div className="size-9 rounded-xl bg-violet-600 text-white flex items-center justify-center shrink-0">
                      <Headphones className="size-5" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-slate-900">Customer Support CRM</div>
                      <div className="text-xs text-slate-500">Omnichannel Ticketing & SLA Timers</div>
                    </div>
                  </Link>

                  <Link
                    to="/products/ai-automation"
                    className="flex items-start gap-3 p-3 rounded-2xl bg-purple-50/60 border border-purple-100 hover:bg-purple-100/70 transition-colors"
                  >
                    <div className="size-9 rounded-xl bg-purple-600 text-white flex items-center justify-center shrink-0">
                      <Bot className="size-5" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-slate-900">AI & Automation</div>
                      <div className="text-xs text-slate-500">Visual Flow Builder & MCP Server Tools</div>
                    </div>
                  </Link>
                </div>
              )}

              {mobileTab === 'solutions' && (
                <div className="space-y-1.5">
                  <Link
                    to="/solutions"
                    className="block p-3 rounded-xl bg-blue-50 text-blue-700 font-bold text-xs uppercase tracking-wider"
                  >
                    All Solutions Overview →
                  </Link>
                  <Link
                    to="/solutions/sales-teams"
                    className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-slate-50 text-sm font-semibold text-slate-700"
                  >
                    <TrendingUp className="size-4 text-blue-600" />
                    <span>For Sales Teams</span>
                  </Link>
                  <Link
                    to="/solutions/customer-support"
                    className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-slate-50 text-sm font-semibold text-slate-700"
                  >
                    <Headphones className="size-4 text-blue-600" />
                    <span>For Customer Support</span>
                  </Link>
                  <Link
                    to="/solutions/marketing-teams"
                    className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-slate-50 text-sm font-semibold text-slate-700"
                  >
                    <Sparkles className="size-4 text-blue-600" />
                    <span>For Marketing Teams</span>
                  </Link>
                  <Link
                    to="/solutions/startups"
                    className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-slate-50 text-sm font-semibold text-slate-700"
                  >
                    <Users className="size-4 text-emerald-600" />
                    <span>For Startups</span>
                  </Link>
                  <Link
                    to="/solutions/enterprises"
                    className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-slate-50 text-sm font-semibold text-slate-700"
                  >
                    <Building2 className="size-4 text-amber-600" />
                    <span>For Enterprises</span>
                  </Link>
                </div>
              )}

              {mobileTab === 'resources' && (
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <Link
                    to="/integrations"
                    className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 font-semibold text-slate-800 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                  >
                    <Globe2 className="size-4 text-blue-600 mb-1" />
                    Integrations
                  </Link>
                  <Link
                    to="/pricing"
                    className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 font-semibold text-slate-800 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                  >
                    <Zap className="size-4 text-amber-500 mb-1" />
                    Pricing & Plans
                  </Link>
                  <Link
                    to="/about"
                    className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 font-semibold text-slate-800 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                  >
                    <Users className="size-4 text-purple-600 mb-1" />
                    About PulseQuo
                  </Link>
                  <Link
                    to="/contact"
                    className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 font-semibold text-slate-800 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                  >
                    <Headphones className="size-4 text-emerald-600 mb-1" />
                    Contact Sales
                  </Link>
                  <Link
                    to="/resources/blog"
                    className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 font-semibold text-slate-800 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                  >
                    <BookOpen className="size-4 text-blue-600 mb-1" />
                    Blog & News
                  </Link>
                  <Link
                    to="/developers"
                    className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 font-semibold text-slate-800 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                  >
                    <Code2 className="size-4 text-cyan-600 mb-1" />
                    Developer API
                  </Link>
                </div>
              )}
            </div>

            {/* Mobile Actions Footer */}
            <div className="p-4 bg-slate-50 border-t border-slate-200/80">
              <Link
                to="/book-demo"
                className="flex items-center justify-center gap-2 w-full py-3 rounded-lg bg-blue-600 hover:bg-blue-700 font-bold text-white text-sm shadow-xs transition-colors"
              >
                <CalendarCheck className="size-4" />
                <span>Book a Demo</span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
