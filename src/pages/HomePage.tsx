/**
 * PulseQuo Marketing Home Page
 * Route: /
 * Sections: Hero, Live Showcase, Product Suites, Stats, Why PulseQuo, Solutions, Integrations Marquee, How It Works, Testimonials, FAQs, Final CTA.
 */

import { Link } from 'react-router'
import {
  MessageSquare,
  TrendingUp,
  Headphones,
  Bot,
  ArrowRight,
  CalendarCheck,
  CheckCircle2,
  Zap,
  BarChart3,
  Globe2,
  Workflow,
  Sparkles,
  Database,
  Building,
  Rocket,
  Lock,
  Star,
  CheckCheck,
} from 'lucide-react'
import { SEO } from '../components/common/SEO'
import { SectionHeading } from '../components/common/SectionHeading'
import { ProductCard } from '../components/common/ProductCard'
import { PlatformComposition } from '../components/common/PlatformComposition'
import { CTASection } from '../components/common/CTASection'
import { FAQAccordion } from '../components/common/FAQAccordion'
import { generalFaqs } from '../data/faqs'

export function MarketingHomePage() {
  const marqueeIntegrations = [
    { name: 'WhatsApp Business API', tag: 'Meta Official', color: 'text-emerald-600 bg-emerald-50' },
    { name: 'Carrier SMS SMPP', tag: 'TRAI DLT Engine', color: 'text-blue-600 bg-blue-50' },
    { name: 'HubSpot CRM', tag: 'Bi-Directional', color: 'text-orange-600 bg-orange-50' },
    { name: 'Salesforce', tag: 'Sync Engine', color: 'text-sky-600 bg-sky-50' },
    { name: 'Model Context Protocol', tag: 'Native MCP Standard', color: 'text-purple-600 bg-purple-50' },
    { name: 'Event Webhooks', tag: 'HMAC Signed', color: 'text-indigo-600 bg-indigo-50' },
    { name: 'Slack Connect', tag: 'Escalations', color: 'text-amber-600 bg-amber-50' },
    { name: 'Google Sheets & Drive', tag: 'Auto Export', color: 'text-emerald-700 bg-emerald-50' },
    { name: 'RESTful Core API', tag: 'Swagger Spec', color: 'text-violet-600 bg-violet-50' },
    { name: 'Zapier Automation', tag: '5,000+ Apps', color: 'text-rose-600 bg-rose-50' },
  ]

  const customerReviews = [
    {
      name: 'Aditi Sharma',
      role: 'Head of Growth at Apex Retail',
      avatar: 'AS',
      text: 'Switching to PulseQuo reduced our customer acquisition response time from 35 minutes down to 45 seconds on WhatsApp. Having our Sales CRM and WhatsApp in one screen is a game changer.',
      rating: 5,
      metric: '+48% Conversion Rate',
    },
    {
      name: 'Vikramaditya Roy',
      role: 'VP Engineering at FinEdge Pay',
      avatar: 'VR',
      text: 'We dispatch over 2 million transactional OTPs every month. PulseQuo’s TRAI DLT compliance and SMPP routing give us an unbeatable 99.98% delivery receipt rate with zero headaches.',
      rating: 5,
      metric: '99.98% DLR Reliability',
    },
    {
      name: 'Pooja Venkatesh',
      role: 'Chief Customer Officer at NovaHealth',
      avatar: 'PV',
      text: 'The AI agents handle 78% of tier-1 support tickets automatically, and when human handoff occurs, our agents have the complete conversational history right in front of them.',
      rating: 5,
      metric: '78% Autonomous Deflection',
    },
  ]

  return (
    <div className="relative overflow-hidden">
      <SEO
        title="PulseQuo · One Platform. Complete Customer Experience."
        description="Transform how your business communicates, manages customers, and grows. PulseQuo brings omnichannel messaging, powerful CRM solutions, AI agents, and intelligent automation together in one unified platform."
        canonicalPath="/"
      />

      {/* ── HERO SECTION ── */}
      <section className="relative overflow-hidden bg-gradient-to-b from-blue-50/50 via-slate-50/20 to-white pt-10 pb-16 sm:pt-16 sm:pb-24 lg:pt-20 lg:pb-32">
        {/* Ambient background glow balls */}
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[650px] h-[350px] bg-gradient-to-r from-blue-400/20 via-indigo-300/15 to-purple-400/20 blur-[130px] rounded-full pointer-events-none" />
        <div className="absolute top-1/4 -left-20 w-72 h-72 bg-blue-300/20 blur-[100px] rounded-full pointer-events-none" />
        <div className="absolute top-1/3 -right-20 w-80 h-80 bg-purple-300/20 blur-[100px] rounded-full pointer-events-none" />

        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:28px_28px] opacity-40 pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            {/* Tagline Pill */}
            <div className="inline-flex items-center gap-2 rounded-full bg-white/90 border border-blue-200/90 px-4 py-1.5 text-xs font-bold text-blue-700 mb-6 shadow-sm shadow-blue-500/10 backdrop-blur-md transition-transform hover:scale-105">
              <span className="size-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Connect · Communicate · Automate · Grow</span>
              <span className="rounded-full bg-blue-100 text-blue-800 px-2 py-0.5 text-[10px] font-black uppercase">
                PulseQuo v2.4
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl xs:text-5xl sm:text-6xl lg:text-7xl font-black text-slate-900 tracking-tight leading-[1.08]">
              One Platform.{' '}
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Complete Customer Experience.
              </span>
            </h1>

            {/* Subheadline */}
            <p className="mt-6 text-base sm:text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto font-normal">
              Transform how your business connects with customers. PulseQuo unifies official{' '}
              <strong className="text-slate-900 font-semibold">WhatsApp & SMS CPaaS</strong>, intelligent{' '}
              <strong className="text-slate-900 font-semibold">Sales CRM pipelines</strong>, omnichannel{' '}
              <strong className="text-slate-900 font-semibold">Support helpdesk</strong>, and{' '}
              <strong className="text-slate-900 font-semibold">autonomous AI agents</strong> into one single, powerful infrastructure.
            </p>

            {/* Hero CTAs */}
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/book-demo"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 text-base font-bold text-white bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 rounded-2xl transition-all shadow-xl shadow-blue-500/25 hover:shadow-2xl hover:shadow-blue-500/40 hover:-translate-y-0.5"
              >
                <CalendarCheck className="size-5" />
                <span>Book a Personalized Demo</span>
              </Link>

              <a
                href="#platform-overview"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-bold text-slate-700 bg-white hover:bg-slate-50 border border-slate-300/80 rounded-2xl transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5"
              >
                <span>Explore 4 Engines</span>
                <ArrowRight className="size-4 text-slate-500" />
              </a>
            </div>

            {/* Trust Badges */}
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs font-semibold text-slate-600">
              <span className="flex items-center gap-1.5 bg-white/80 border border-slate-200/80 px-3 py-1.5 rounded-full shadow-2xs">
                <CheckCircle2 className="size-4 text-emerald-600" /> Meta Official WhatsApp Cloud API
              </span>
              <span className="flex items-center gap-1.5 bg-white/80 border border-slate-200/80 px-3 py-1.5 rounded-full shadow-2xs">
                <CheckCircle2 className="size-4 text-emerald-600" /> Indian TRAI DLT Compliant
              </span>
              <span className="flex items-center gap-1.5 bg-white/80 border border-slate-200/80 px-3 py-1.5 rounded-full shadow-2xs">
                <CheckCircle2 className="size-4 text-emerald-600" /> Model Context Protocol (MCP) Certified
              </span>
            </div>
          </div>

          {/* Interactive Live Platform Dashboard Showcase with Floating Ambient Badges */}
          <div className="mt-14 sm:mt-18 relative">
            {/* Floating Badge 1 - WhatsApp delivery */}
            <div className="hidden xl:flex absolute -top-6 -left-8 z-20 items-center gap-3 bg-white/95 backdrop-blur-md border border-emerald-200/90 shadow-xl shadow-emerald-500/10 rounded-2xl p-3 animate-float">
              <div className="size-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
                <CheckCheck className="size-5" />
              </div>
              <div className="text-left">
                <p className="text-xs font-bold text-slate-900">WhatsApp OTP Dispatched</p>
                <p className="text-[10px] text-emerald-700 font-mono">DLR: Delivered in 140ms</p>
              </div>
            </div>

            {/* Floating Badge 2 - AI Deflection */}
            <div className="hidden xl:flex absolute -bottom-6 -right-8 z-20 items-center gap-3 bg-white/95 backdrop-blur-md border border-purple-200/90 shadow-xl shadow-purple-500/10 rounded-2xl p-3 animate-float-delayed">
              <div className="size-10 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center font-bold">
                <Sparkles className="size-5 text-amber-500" />
              </div>
              <div className="text-left">
                <p className="text-xs font-bold text-slate-900">AI Ticket Deflection: 78%</p>
                <p className="text-[10px] text-purple-700 font-mono">MCP Action: Auto-resolved</p>
              </div>
            </div>

            <PlatformComposition />
          </div>
        </div>
      </section>

      {/* ── STATS & SOCIAL PROOF METRICS BAR ── */}
      <section className="bg-slate-950 py-12 border-y border-slate-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#334155_1px,transparent_1px)] [background-size:20px_20px] opacity-25 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-slate-800">
            <div className="pt-4 md:pt-0">
              <p className="text-3xl sm:text-5xl font-black bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                99.99%
              </p>
              <p className="mt-2 text-xs sm:text-sm font-semibold text-slate-300">Carrier Uptime SLA</p>
              <p className="text-[11px] text-slate-400 mt-0.5">High-throughput SMPP & Meta routes</p>
            </div>

            <div className="pt-4 md:pt-0">
              <p className="text-3xl sm:text-5xl font-black bg-gradient-to-r from-indigo-400 to-purple-300 bg-clip-text text-transparent">
                45M+
              </p>
              <p className="mt-2 text-xs sm:text-sm font-semibold text-slate-300">Messages Dispatched</p>
              <p className="text-[11px] text-slate-400 mt-0.5">Transactional OTPs & campaigns</p>
            </div>

            <div className="pt-4 md:pt-0">
              <p className="text-3xl sm:text-5xl font-black bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">
                &lt; 2s
              </p>
              <p className="mt-2 text-xs sm:text-sm font-semibold text-slate-300">AI Response Latency</p>
              <p className="text-[11px] text-slate-400 mt-0.5">Grounded in verified enterprise docs</p>
            </div>

            <div className="pt-4 md:pt-0">
              <p className="text-3xl sm:text-5xl font-black bg-gradient-to-r from-amber-400 to-orange-300 bg-clip-text text-transparent">
                10x
              </p>
              <p className="mt-2 text-xs sm:text-sm font-semibold text-slate-300">Faster Sales Follow-up</p>
              <p className="text-[11px] text-slate-400 mt-0.5">Instant WhatsApp conversion funnel</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── PLATFORM OVERVIEW (4 PRODUCT CATEGORIES) ── */}
      <section id="platform-overview" className="py-20 sm:py-28 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Unified Product Suite"
            title="Four Powerful Engines. One Cohesive Ecosystem."
            description="Replace fragile multi-vendor software stacks with a single unified platform engineered from the ground up to link every customer conversation directly to sales and support."
          />

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
            <ProductCard
              id="comm-cloud"
              title="Communication Cloud"
              badge="Enterprise CPaaS"
              description="Official WhatsApp Business API, carrier-grade SMS gateway, voice hooks, and omnichannel team inbox."
              benefits={[
                'Official Meta Cloud API connectivity',
                'TRAI DLT-compliant SMS routing & SMPP',
                'Pre-approved templates & bulk broadcasts',
                'Unified inbox with real-time delivery DLR',
              ]}
              href="/products/communication-cloud"
              icon={MessageSquare}
              colorTheme="blue"
            />

            <ProductCard
              id="sales-crm"
              title="Sales CRM"
              badge="Revenue Engine"
              description="Lead capture, custom drag-and-drop Kanban pipelines, interaction logs, and automated conversational sales follow-ups."
              benefits={[
                'Multi-channel lead capture via chat & forms',
                'Visual Kanban pipeline stages with scoring',
                '1-click WhatsApp & SMS message dispatch',
                'Stagnant deal alerts & revenue forecasting',
              ]}
              href="/products/sales-crm"
              icon={TrendingUp}
              colorTheme="indigo"
            />

            <ProductCard
              id="support-crm"
              title="Support CRM"
              badge="Helpdesk Suite"
              description="Multi-channel ticketing, SLA countdown timers, agent work queues, knowledge bases, and smooth bot-to-human handoff."
              benefits={[
                'Automated ticket creation from all channels',
                'Response & resolution SLA enforcement',
                'Skill-based agent work distribution',
                'Contextual bot-to-human escalations',
              ]}
              href="/products/support-crm"
              icon={Headphones}
              colorTheme="violet"
            />

            <ProductCard
              id="ai-automation"
              title="AI & Automation"
              badge="Visual Flow Builder"
              description="Visual drag-and-drop conversational designer, autonomous AI agents, Model Context Protocol (MCP) tools, and webhooks."
              benefits={[
                'Node-based conversational logic designer',
                'LLM agents grounded in enterprise RAG',
                'Native Model Context Protocol (MCP) servers',
                'Automated webhook triggers & drip sequences',
              ]}
              href="/products/ai-automation"
              icon={Bot}
              colorTheme="purple"
            />
          </div>
        </div>
      </section>

      {/* ── SMOOTH INTEGRATIONS TICKER MARQUEE ── */}
      <section className="py-14 bg-slate-50 border-y border-slate-200/80 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-8">
          <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
            Seamlessly Connected With Modern Enterprise Channels & Stacks
          </p>
        </div>

        {/* Infinite CSS Marquee */}
        <div className="relative w-full overflow-hidden">
          <div className="animate-marquee flex items-center gap-6">
            {[...marqueeIntegrations, ...marqueeIntegrations].map((item, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 bg-white border border-slate-200/90 rounded-2xl px-5 py-3 shadow-xs hover:shadow-md transition-shadow shrink-0"
              >
                <div className="size-2 rounded-full bg-blue-600" />
                <span className="text-sm font-bold text-slate-900">{item.name}</span>
                <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${item.color}`}>
                  {item.tag}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 text-center">
          <Link
            to="/integrations"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-blue-600 hover:text-blue-700"
          >
            <span>Explore All 50+ Verified Integrations & API Specs</span>
            <ArrowRight className="size-4" />
          </Link>
        </div>
      </section>

      {/* ── WHY PULSEQUO (8 CORE ADVANTAGES) ── */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="The PulseQuo Advantage"
            title="Engineered for Modern Scaled Customer Operations"
            description="Discover why high-growth enterprises replace disjointed single-purpose tools with PulseQuo's unified customer experience suite."
          />

          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="glass-card rounded-3xl p-7 bg-white">
              <div className="flex size-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 mb-5 shadow-xs">
                <Globe2 className="size-6" />
              </div>
              <h4 className="text-base font-bold text-slate-900">Unified Customer Record</h4>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                Every touchpoint across WhatsApp, SMS, web chat, CRM deals, and tickets lives in one synchronized customer chronology.
              </p>
            </div>

            <div className="glass-card rounded-3xl p-7 bg-white">
              <div className="flex size-12 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600 mb-5 shadow-xs">
                <MessageSquare className="size-6" />
              </div>
              <h4 className="text-base font-bold text-slate-900">Omnichannel CPaaS</h4>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                Direct Meta Cloud API and telecom operator SMPP routes with sub-second delivery receipts and automatic carrier fallbacks.
              </p>
            </div>

            <div className="glass-card rounded-3xl p-7 bg-white">
              <div className="flex size-12 items-center justify-center rounded-2xl bg-purple-50 text-purple-600 mb-5 shadow-xs">
                <Bot className="size-6" />
              </div>
              <h4 className="text-base font-bold text-slate-900">AI Agents with MCP</h4>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                Autonomous LLM agents equipped with Model Context Protocol tools to safely read inventories, book slots, and update CRM records.
              </p>
            </div>

            <div className="glass-card rounded-3xl p-7 bg-white">
              <div className="flex size-12 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600 mb-5 shadow-xs">
                <Workflow className="size-6" />
              </div>
              <h4 className="text-base font-bold text-slate-900">Zero-Code Flow Builder</h4>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                Drag-and-drop visual logic designer to build multi-branch decision trees, conditional broadcasts, and automated drip sequences.
              </p>
            </div>

            <div className="glass-card rounded-3xl p-7 bg-white">
              <div className="flex size-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 mb-5 shadow-xs">
                <Database className="size-6" />
              </div>
              <h4 className="text-base font-bold text-slate-900">Centralized Data Store</h4>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                Eliminate isolated data silos. Contacts, past interactions, order history, and deal stages reside in a shared tenant database.
              </p>
            </div>

            <div className="glass-card rounded-3xl p-7 bg-white">
              <div className="flex size-12 items-center justify-center rounded-2xl bg-rose-50 text-rose-600 mb-5 shadow-xs">
                <Zap className="size-6" />
              </div>
              <h4 className="text-base font-bold text-slate-900">High-Bandwidth Scale</h4>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                Carrier-grade infrastructure capable of reliably blasting millions of transactional notifications without throttling.
              </p>
            </div>

            <div className="glass-card rounded-3xl p-7 bg-white">
              <div className="flex size-12 items-center justify-center rounded-2xl bg-amber-50 text-amber-600 mb-5 shadow-xs">
                <BarChart3 className="size-6" />
              </div>
              <h4 className="text-base font-bold text-slate-900">Real-Time Telemetry</h4>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                Granular delivery receipts (DLR), conversion funnels, agent velocity, and automated SLA resolution reporting.
              </p>
            </div>

            <div className="glass-card rounded-3xl p-7 bg-white">
              <div className="flex size-12 items-center justify-center rounded-2xl bg-teal-50 text-teal-600 mb-5 shadow-xs">
                <Lock className="size-6" />
              </div>
              <h4 className="text-base font-bold text-slate-900">Enterprise Security</h4>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                Role-based access control (RBAC), multi-tenant data isolation, HMAC webhook validation, and strict TRAI compliance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SOLUTIONS BY TEAM & COMPANY STAGE ── */}
      <section className="py-20 sm:py-28 bg-slate-50/70 border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Tailored Solutions"
            title="Tailored for Every Team and Growth Stage"
            description="Discover how PulseQuo aligns specifically with your team’s KPIs and operational priorities."
          />

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="rounded-3xl border border-slate-200 bg-white p-8 hover:border-blue-300 hover:shadow-xl transition-all duration-300 group">
              <div className="flex size-13 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <TrendingUp className="size-6" />
              </div>
              <h3 className="text-xl font-extrabold text-slate-900">Sales Teams</h3>
              <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                Engage high-intent inbound prospects instantly on WhatsApp, qualify leads conversationally with AI, and accelerate deals across Kanban stages.
              </p>
              <Link to="/solutions/sales-teams" className="mt-6 inline-flex items-center gap-1.5 text-sm font-bold text-blue-600 group-hover:translate-x-1 transition-transform">
                <span>View Sales Solution</span> <ArrowRight className="size-4" />
              </Link>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-8 hover:border-violet-300 hover:shadow-xl transition-all duration-300 group">
              <div className="flex size-13 items-center justify-center rounded-2xl bg-violet-50 text-violet-600 mb-6 group-hover:bg-violet-600 group-hover:text-white transition-colors">
                <Headphones className="size-6" />
              </div>
              <h3 className="text-xl font-extrabold text-slate-900">Support Teams</h3>
              <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                Consolidate multi-channel inquiries into a unified ticketing inbox, automate Tier-1 answers via AI agents, and enforce strict SLA timers.
              </p>
              <Link to="/solutions/customer-support" className="mt-6 inline-flex items-center gap-1.5 text-sm font-bold text-violet-600 group-hover:translate-x-1 transition-transform">
                <span>View Support Solution</span> <ArrowRight className="size-4" />
              </Link>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-8 hover:border-indigo-300 hover:shadow-xl transition-all duration-300 group">
              <div className="flex size-13 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600 mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                <Sparkles className="size-6" />
              </div>
              <h3 className="text-xl font-extrabold text-slate-900">Marketing Teams</h3>
              <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                Broadcast pre-approved WhatsApp marketing templates and bulk promotional SMS with real-time delivery DLR telemetry and segment tagging.
              </p>
              <Link to="/solutions/marketing-teams" className="mt-6 inline-flex items-center gap-1.5 text-sm font-bold text-indigo-600 group-hover:translate-x-1 transition-transform">
                <span>View Marketing Solution</span> <ArrowRight className="size-4" />
              </Link>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-8 hover:border-emerald-300 hover:shadow-xl transition-all duration-300 group">
              <div className="flex size-13 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600 mb-6 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                <Rocket className="size-6" />
              </div>
              <h3 className="text-xl font-extrabold text-slate-900">Startups & Scaleups</h3>
              <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                Consolidate communication, CRM, and AI bots into one predictable monthly bill, automating customer acquisition without hiring large teams.
              </p>
              <Link to="/solutions/startups" className="mt-6 inline-flex items-center gap-1.5 text-sm font-bold text-emerald-600 group-hover:translate-x-1 transition-transform">
                <span>View Startup Solution</span> <ArrowRight className="size-4" />
              </Link>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-8 hover:border-amber-300 hover:shadow-xl transition-all duration-300 group">
              <div className="flex size-13 items-center justify-center rounded-2xl bg-amber-50 text-amber-600 mb-6 group-hover:bg-amber-600 group-hover:text-white transition-colors">
                <Building className="size-6" />
              </div>
              <h3 className="text-xl font-extrabold text-slate-900">Enterprises</h3>
              <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                High-throughput carrier routing, custom Model Context Protocol (MCP) server integrations, dedicated SLAs, and multi-tenant isolation.
              </p>
              <Link to="/solutions/enterprises" className="mt-6 inline-flex items-center gap-1.5 text-sm font-bold text-amber-600 group-hover:translate-x-1 transition-transform">
                <span>View Enterprise Solution</span> <ArrowRight className="size-4" />
              </Link>
            </div>

            <div className="rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 text-white p-8 flex flex-col justify-between shadow-xl">
              <div>
                <span className="inline-block rounded-full bg-blue-600/80 px-3 py-1 text-xs font-bold uppercase tracking-wider text-blue-200">
                  Custom Architecture
                </span>
                <h3 className="text-2xl font-black mt-4">Explore All Solutions</h3>
                <p className="mt-2 text-sm text-slate-300 leading-relaxed">
                  See how PulseQuo integrates with your specific industry stack, data warehouse, and technical compliance needs.
                </p>
              </div>
              <Link
                to="/solutions"
                className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-blue-400 hover:text-white transition-colors"
              >
                <span>Browse All Use Cases</span> <ArrowRight className="size-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── HOW PULSEQUO WORKS (5 CLEAR STEPS) - HIGHLY RESPONSIVE ── */}
      <section className="py-20 sm:py-28 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Simplified Architecture"
            title="How PulseQuo Works in 5 Clear Steps"
            description="From initial channel onboarding to automated, scaled enterprise customer operations."
          />

          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
            <div className="relative rounded-3xl bg-slate-50 border border-slate-200/90 p-6 hover:shadow-lg transition-all duration-300">
              <div className="size-11 rounded-2xl bg-blue-600 text-white font-mono font-black flex items-center justify-center text-sm mb-5 shadow-md shadow-blue-500/20">
                01
              </div>
              <h4 className="text-base font-extrabold text-slate-900">Connect Channels</h4>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                Connect official WhatsApp business numbers, carrier SMS headers, email SMTP, and live website chat widgets.
              </p>
            </div>

            <div className="relative rounded-3xl bg-slate-50 border border-slate-200/90 p-6 hover:shadow-lg transition-all duration-300">
              <div className="size-11 rounded-2xl bg-indigo-600 text-white font-mono font-black flex items-center justify-center text-sm mb-5 shadow-md shadow-indigo-500/20">
                02
              </div>
              <h4 className="text-base font-extrabold text-slate-900">Organize Data</h4>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                Unify inbound dialogues and customer profiles into a central omnichannel workspace with chronological history.
              </p>
            </div>

            <div className="relative rounded-3xl bg-slate-50 border border-slate-200/90 p-6 hover:shadow-lg transition-all duration-300">
              <div className="size-11 rounded-2xl bg-purple-600 text-white font-mono font-black flex items-center justify-center text-sm mb-5 shadow-md shadow-purple-500/20">
                03
              </div>
              <h4 className="text-base font-extrabold text-slate-900">Automate Ops</h4>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                Deploy drag-and-drop conversational decision trees and autonomous AI agents grounded in your verified docs.
              </p>
            </div>

            <div className="relative rounded-3xl bg-slate-50 border border-slate-200/90 p-6 hover:shadow-lg transition-all duration-300">
              <div className="size-11 rounded-2xl bg-violet-600 text-white font-mono font-black flex items-center justify-center text-sm mb-5 shadow-md shadow-violet-500/20">
                04
              </div>
              <h4 className="text-base font-extrabold text-slate-900">Manage Pipelines</h4>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                Track deals across customizable Kanban stages and assign support tickets with enforceable SLA resolution timers.
              </p>
            </div>

            <div className="relative rounded-3xl bg-slate-50 border border-slate-200/90 p-6 hover:shadow-lg transition-all duration-300">
              <div className="size-11 rounded-2xl bg-emerald-600 text-white font-mono font-black flex items-center justify-center text-sm mb-5 shadow-md shadow-emerald-500/20">
                05
              </div>
              <h4 className="text-base font-extrabold text-slate-900">Analyze & Grow</h4>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                Monitor delivery telemetry, conversation deflection rates, agent efficiency, and pipeline conversion metrics.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CUSTOMER TESTIMONIALS & SUCCESS STORIES ── */}
      <section className="py-20 sm:py-28 bg-slate-50/80 border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Customer Success"
            title="Trusted by Fast-Growing Companies"
            description="See how enterprise teams rely on PulseQuo every day to drive revenue and deliver stellar customer support."
          />

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            {customerReviews.map((rev, i) => (
              <div
                key={i}
                className="rounded-3xl bg-white border border-slate-200/90 p-8 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-1">
                      {[...Array(rev.rating)].map((_, s) => (
                        <Star key={s} className="size-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <span className="rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 px-2.5 py-0.5 text-xs font-bold">
                      {rev.metric}
                    </span>
                  </div>

                  <p className="text-sm text-slate-700 leading-relaxed italic">
                    “{rev.text}”
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-100 flex items-center gap-3.5">
                  <div className="size-11 rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 text-white font-bold text-sm flex items-center justify-center shadow-xs">
                    {rev.avatar}
                  </div>
                  <div>
                    <h5 className="text-sm font-extrabold text-slate-900">{rev.name}</h5>
                    <p className="text-xs text-slate-500">{rev.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQS SECTION ── */}
      <section className="py-20 sm:py-28 bg-white border-t border-slate-200/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Frequently Asked Questions"
            title="Everything You Need to Know"
            description="Clear answers about PulseQuo’s architecture, carrier onboarding, DLT registration, and capabilities."
          />

          <div className="mt-12">
            <FAQAccordion items={generalFaqs.slice(0, 6)} />
          </div>
        </div>
      </section>

      {/* ── FINAL HIGH-CONVERTING CTA SECTION ── */}
      <CTASection />
    </div>
  )
}
