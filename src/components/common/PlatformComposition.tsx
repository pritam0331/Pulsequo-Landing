/**
 * PulseQuo Platform Workspace Preview
 * Pixel-accurate, interactive implementation of the modern enterprise inbox,
 * autonomous AI agent qualification, WhatsApp omnichannel messaging,
 * and real-time CRM customer context.
 */

import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import {
  MessageSquare,
  Sparkles,
  GitBranch,
  BarChart3,
  LayoutGrid,
  Search,
  Check,
  CheckCheck,
  ArrowRight,
} from 'lucide-react'
import { WorkflowCanvas } from './WorkflowCanvas'

// Custom Crisp WhatsApp Icon matching the official brand mark
function WhatsAppIcon({ className = 'size-4' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="#25D366">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.888 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.456 5.711 1.457h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  )
}

type NavSection = 'inbox' | 'agents' | 'workflows' | 'analytics' | 'contacts'

interface ConversationItem {
  id: string
  title: string
  preview: string
  time: string
  channel: string
  channelType: 'whatsapp' | 'sms' | 'chat'
  agentName: string
  userMessage: string
  agentReply: string
  leadStatus: string
  details: {
    interest: string
    teamSize: string
    source: string
    owner: string
  }
  nextStep: string
}

const CONVERSATIONS: ConversationItem[] = [
  {
    id: 'sales-enquiry',
    title: 'New sales enquiry',
    preview: 'Can you help me choose a plan?',
    time: 'Now',
    channel: 'WhatsApp · Sales Inbox',
    channelType: 'whatsapp',
    agentName: 'Relay AI',
    userMessage: "Hi! We're growing our sales team.\nCan you help me choose a plan?",
    agentReply:
      'Absolutely. I can help you find the right fit. How many people will be using the workspace, and what would you like to automate?',
    leadStatus: 'Qualified lead · Ready for your sales team',
    details: {
      interest: 'Team plan',
      teamSize: '25 people',
      source: 'WhatsApp',
      owner: 'Sales team',
    },
    nextStep: 'Schedule a product demo',
  },
  {
    id: 'order-update',
    title: 'Order update',
    preview: 'Thanks for the quick response!',
    time: '2m',
    channel: 'WhatsApp · Support Inbox',
    channelType: 'whatsapp',
    agentName: 'Relay AI',
    userMessage: 'Thanks for the quick response!\nCan I track delivery for order #8841?',
    agentReply:
      'Your order has been dispatched via Bluedart (AWB: BD-99201). Estimated delivery is tomorrow before 2:00 PM IST.',
    leadStatus: 'Order verified · Tracking shared',
    details: {
      interest: 'Order tracking',
      teamSize: '1 user',
      source: 'WhatsApp',
      owner: 'Support team',
    },
    nextStep: 'Send delivery confirmation',
  },
  {
    id: 'demo-request',
    title: 'Demo request',
    preview: 'Tomorrow at 10 works for us.',
    time: '8m',
    channel: 'Website Live Chat · Sales',
    channelType: 'chat',
    agentName: 'Relay AI',
    userMessage: 'Tomorrow at 10 works for us. We need to evaluate SMPP routes and WhatsApp Cloud API throughput.',
    agentReply:
      'Calendar invite dispatched for 10:00 AM IST. Our telecom solutions architect Rahul will join the walkthrough.',
    leadStatus: 'Meeting booked · Calendar synced',
    details: {
      interest: 'Enterprise CPaaS',
      teamSize: '120 people',
      source: 'Live Chat',
      owner: 'Rahul (Solutions)',
    },
    nextStep: 'Prepare architecture deck',
  },
  {
    id: 'product-question',
    title: 'Product question',
    preview: 'Can I connect my CRM?',
    time: '12m',
    channel: 'REST API · Developer Desk',
    channelType: 'chat',
    agentName: 'Relay AI',
    userMessage: 'Can I connect my CRM? We use HubSpot and need bi-directional contact synchronization.',
    agentReply:
      'Yes! PulseQuo has native HubSpot and Salesforce bi-directional sync, plus Model Context Protocol (MCP) tool support.',
    leadStatus: 'Technical inquiry · Docs provided',
    details: {
      interest: 'HubSpot Integration',
      teamSize: '50 people',
      source: 'Developer API',
      owner: 'DevRel team',
    },
    nextStep: 'Provide sandbox API keys',
  },
]

export function PlatformComposition() {
  const [activeNav, setActiveNav] = useState<NavSection>('inbox')
  const [activeInboxTab, setActiveInboxTab] = useState<'open' | 'assigned'>('open')
  const [selectedConvId, setSelectedConvId] = useState<string>('sales-enquiry')
  const [searchQuery, setSearchQuery] = useState('')
  const [replyInput, setReplyInput] = useState('')
  const [liveReplies, setLiveReplies] = useState<Array<{ id: string; convId: string; text: string; sender: 'user' | 'agent' }>>([])

  const currentConv = CONVERSATIONS.find((c) => c.id === selectedConvId) || CONVERSATIONS[0]

  const handleSendReply = (e?: React.FormEvent) => {
    if (e) e.preventDefault()
    if (!replyInput.trim()) return

    const newReply = {
      id: `rep-${Date.now()}`,
      convId: currentConv.id,
      text: replyInput,
      sender: 'user' as const,
    }

    setLiveReplies((prev) => [...prev, newReply])
    setReplyInput('')

    // Simulate smart AI auto-reply
    setTimeout(() => {
      const autoReply = {
        id: `agent-${Date.now()}`,
        convId: currentConv.id,
        text: 'Got it! I have updated your workspace record and notified the account lead.',
        sender: 'agent' as const,
      }
      setLiveReplies((prev) => [...prev, autoReply])
    }, 850)
  }

  const filteredConversations = CONVERSATIONS.filter(
    (c) =>
      c.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.preview.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="w-full rounded-2xl sm:rounded-3xl border border-slate-200/90 bg-white shadow-2xl overflow-hidden ring-1 ring-slate-900/5 transition-all text-slate-900 font-sans">
      {/* ─────────────────────────────────────────────────────────────
          TOP WORKSPACE BAR (Relay / Acme workspace · PRODUCT PREVIEW)
         ───────────────────────────────────────────────────────────── */}
      <div className="flex items-center justify-between border-b border-slate-100 bg-slate-50/70 px-4 sm:px-6 py-2.5 sm:py-3 text-xs">
        <span className="text-slate-500 font-medium tracking-tight">
          Relay / Acme workspace
        </span>
        <span className="text-[10px] font-bold tracking-widest text-slate-400 uppercase font-mono">
          PRODUCT PREVIEW
        </span>
      </div>

      {/* ─────────────────────────────────────────────────────────────
          MAIN 4-COLUMN WORKSPACE CONTAINER
          Preserves the exact desktop layout with seamless horizontal scrolling on small screens
         ───────────────────────────────────────────────────────────── */}
      <div className="overflow-x-auto no-scrollbar">
        <div className="min-w-[960px] xl:min-w-full flex h-[580px] bg-white text-left divide-x divide-slate-100">
          {/* ── COLUMN 1: LEFT NAVIGATION SIDEBAR ── */}
          <aside className="w-52 shrink-0 p-5 flex flex-col justify-between bg-white select-none">
            <div>
              {/* Brand Logo */}
              <div className="text-2xl font-black text-slate-900 tracking-tight font-sans">
                PulseQuo
              </div>

              {/* Workspace Label */}
              <div className="text-[10px] font-bold tracking-widest text-slate-400 uppercase mt-7 mb-2.5">
                ACME WORKSPACE
              </div>

              {/* Navigation Items */}
              <nav className="space-y-1">
                <button
                  type="button"
                  onClick={() => setActiveNav('inbox')}
                  className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
                    activeNav === 'inbox'
                      ? 'bg-blue-50/90 text-blue-600 shadow-2xs'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                  }`}
                >
                  <MessageSquare className="size-4 text-blue-600 shrink-0" />
                  <span>Team inbox</span>
                </button>

                <button
                  type="button"
                  onClick={() => setActiveNav('agents')}
                  className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
                    activeNav === 'agents'
                      ? 'bg-blue-50/90 text-blue-600 font-semibold shadow-2xs'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                  }`}
                >
                  <Sparkles className="size-4 text-slate-400 shrink-0" />
                  <span>AI agents</span>
                </button>

                <button
                  type="button"
                  onClick={() => setActiveNav('workflows')}
                  className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
                    activeNav === 'workflows'
                      ? 'bg-blue-50/90 text-blue-600 font-semibold shadow-2xs'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                  }`}
                >
                  <GitBranch className="size-4 text-slate-400 shrink-0" />
                  <span>Workflows</span>
                </button>

                <button
                  type="button"
                  onClick={() => setActiveNav('analytics')}
                  className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
                    activeNav === 'analytics'
                      ? 'bg-blue-50/90 text-blue-600 font-semibold shadow-2xs'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                  }`}
                >
                  <BarChart3 className="size-4 text-slate-400 shrink-0" />
                  <span>Analytics</span>
                </button>

                <button
                  type="button"
                  onClick={() => setActiveNav('contacts')}
                  className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
                    activeNav === 'contacts'
                      ? 'bg-blue-50/90 text-blue-600 font-semibold shadow-2xs'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                  }`}
                >
                  <LayoutGrid className="size-4 text-slate-400 shrink-0" />
                  <span>Contacts</span>
                </button>
              </nav>
            </div>

            {/* Bottom Workspace Settings */}
            <div className="pt-6 border-t border-slate-100">
              <button
                type="button"
                className="text-xs text-slate-400 hover:text-slate-700 transition-colors font-medium cursor-pointer"
              >
                Workspace settings
              </button>
            </div>
          </aside>

          {/* ── WORKFLOWS VIEW ── */}
          {activeNav === 'workflows' ? (
            <div className="flex-1 bg-slate-50/50 p-6 sm:p-8 flex items-center justify-center overflow-y-auto">
              <WorkflowCanvas showWrapper={true} className="max-w-2xl w-full bg-white shadow-xs" />
            </div>
          ) : (
            <>
              {/* ── COLUMN 2: CONVERSATION LIST (TEAM INBOX) ── */}
              <section className="w-64 lg:w-72 shrink-0 p-4 lg:p-5 flex flex-col bg-white select-none">
            {/* Header with counter badge */}
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-base lg:text-lg font-bold text-slate-900">
                Team inbox
              </h3>
              <span className="text-xs font-semibold text-slate-400">
                (12)
              </span>
            </div>

            {/* Search conversations */}
            <div className="relative mb-3.5">
              <Search className="size-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search conversations"
                className="w-full rounded-lg bg-slate-50/80 border border-slate-200/70 pl-8 pr-3 py-1.5 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:bg-white transition-all shadow-2xs"
              />
            </div>

            {/* Filter Tabs: Open / Assigned to me */}
            <div className="flex items-center gap-5 border-b border-slate-100 text-xs mb-3 font-sans">
              <button
                type="button"
                onClick={() => setActiveInboxTab('open')}
                className={`relative pb-2 cursor-pointer transition-colors ${
                  activeInboxTab === 'open'
                    ? 'font-bold text-blue-600'
                    : 'text-slate-500 hover:text-slate-800'
                }`}
              >
                <span>Open</span>
                {activeInboxTab === 'open' && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600 rounded-xs" />
                )}
              </button>

              <button
                type="button"
                onClick={() => setActiveInboxTab('assigned')}
                className={`relative pb-2 cursor-pointer transition-colors ${
                  activeInboxTab === 'assigned'
                    ? 'font-bold text-blue-600'
                    : 'text-slate-500 hover:text-slate-800'
                }`}
              >
                <span>Assigned to me</span>
                {activeInboxTab === 'assigned' && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600 rounded-xs" />
                )}
              </button>
            </div>

            {/* Conversation Items */}
            <div className="space-y-1 overflow-y-auto flex-1 pr-0.5">
              {filteredConversations.map((conv) => {
                const isSelected = conv.id === selectedConvId
                return (
                  <div
                    key={conv.id}
                    onClick={() => setSelectedConvId(conv.id)}
                    className={`p-3 rounded-lg cursor-pointer transition-all ${
                      isSelected
                        ? 'bg-slate-50/90 border border-slate-200/70 shadow-2xs'
                        : 'hover:bg-slate-50/50 border border-transparent'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-xs text-slate-900 truncate">
                        {conv.title}
                      </span>
                      <span className="text-[11px] text-slate-400 font-normal shrink-0 ml-2">
                        {conv.time}
                      </span>
                    </div>
                    <p className="mt-1 text-xs text-slate-500 truncate">
                      {conv.preview}
                    </p>
                  </div>
                )
              })}
            </div>
          </section>

          {/* ── COLUMN 3: MAIN CHAT VIEW ── */}
          <main className="flex-1 min-w-[340px] p-5 lg:p-6 flex flex-col justify-between bg-white">
            <div>
              {/* Header: Title + WhatsApp sub-badge */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <div>
                  <h2 className="text-base lg:text-lg font-bold text-slate-900 leading-none">
                    {currentConv.title}
                  </h2>
                  <div className="flex items-center gap-1.5 mt-2 text-xs text-slate-500 font-medium">
                    <WhatsAppIcon className="size-3.5 shrink-0" />
                    <span>{currentConv.channel}</span>
                  </div>
                </div>
              </div>

              {/* Chat Thread with smooth AnimatePresence transition on conversation change */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentConv.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
                  className="py-2"
                >
                  {/* Date Stamp */}
                  <div className="text-[11px] text-slate-400 font-medium text-center my-4">
                    Today, 10:42 AM
                  </div>

                  {/* Customer Message Bubble (Inbound) */}
                  <motion.div
                    initial={{ opacity: 0, y: 12, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    className="max-w-md bg-slate-50 border border-slate-200/70 text-slate-800 text-xs sm:text-sm p-4 rounded-2xl rounded-tl-sm leading-relaxed shadow-2xs whitespace-pre-line"
                  >
                    {currentConv.userMessage}
                  </motion.div>

                  {/* AI Agent Message Bubble (Outbound) */}
                  <motion.div
                    initial={{ opacity: 0, y: 14, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.35, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
                    className="mt-4 max-w-lg bg-emerald-50/70 border border-emerald-200/60 text-slate-800 text-xs sm:text-sm p-4 rounded-2xl rounded-tr-sm leading-relaxed shadow-2xs"
                  >
                    <p>{currentConv.agentReply}</p>
                    <div className="mt-2 text-[11px] font-medium text-emerald-700 flex items-center gap-1">
                      <span>{currentConv.agentName} · 10:42 AM</span>
                      <CheckCheck className="size-3.5 text-emerald-600 inline ml-0.5" />
                    </div>
                  </motion.div>

                  {/* Additional Live User & Agent Replies if tested interactively */}
                  {liveReplies
                    .filter((r) => r.convId === currentConv.id)
                    .map((r) => (
                      <div
                        key={r.id}
                        className={`mt-3 max-w-md text-xs sm:text-sm p-3.5 rounded-2xl shadow-2xs leading-relaxed ${
                          r.sender === 'user'
                            ? 'ml-auto bg-blue-600 text-white rounded-tr-sm'
                            : 'bg-emerald-50/80 border border-emerald-200/70 text-slate-800 rounded-tl-sm'
                        }`}
                      >
                        <p>{r.text}</p>
                      </div>
                    ))}

                  {/* Status Qualified Lead Banner */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.97 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.2 }}
                    className="mt-6 rounded-lg bg-blue-50/80 border border-blue-200/60 px-3.5 py-2.5 flex items-center gap-2 text-xs font-semibold text-blue-700"
                  >
                    <Check className="size-4 text-blue-600 shrink-0" />
                    <span>{currentConv.leadStatus}</span>
                  </motion.div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Interactive Reply Box at Bottom */}
            <form onSubmit={handleSendReply} className="mt-4 pt-3 border-t border-slate-100">
              <div className="rounded-xl border border-slate-200 bg-white p-2 flex items-center gap-2 shadow-2xs focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-500/10 transition-all">
                <input
                  type="text"
                  value={replyInput}
                  onChange={(e) => setReplyInput(e.target.value)}
                  placeholder="Reply to the conversation..."
                  className="flex-1 bg-transparent text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none px-2 py-1"
                />
                <button
                  type="submit"
                  aria-label="Send reply"
                  className="size-8 rounded-lg bg-emerald-500 hover:bg-emerald-600 active:bg-emerald-700 text-white flex items-center justify-center shrink-0 transition-colors shadow-xs cursor-pointer"
                >
                  <ArrowRight className="size-4" />
                </button>
              </div>
            </form>
          </main>

          {/* ── COLUMN 4: CUSTOMER CONTEXT (RIGHT SIDEBAR) ── */}
          <aside className="w-64 lg:w-72 shrink-0 p-5 lg:p-6 flex flex-col justify-between bg-white select-none">
            <div>
              {/* Context Header */}
              <div className="text-[10px] font-bold tracking-widest text-slate-400 uppercase mb-4">
                CUSTOMER CONTEXT
              </div>

              {/* Sales-Ready Status Card */}
              <div className="rounded-xl bg-emerald-50/70 border border-emerald-200/60 p-3.5">
                <div className="flex items-center gap-2">
                  <Check className="size-4 text-emerald-600 shrink-0" />
                  <span className="text-xs font-bold text-emerald-900">
                    Sales-ready conversation
                  </span>
                </div>
                <div className="text-[11px] text-emerald-700 pl-6 mt-0.5 font-medium">
                  Qualified by {currentConv.agentName}
                </div>
              </div>

              {/* Conversation Details Table */}
              <div className="mt-6">
                <h4 className="text-xs font-bold text-slate-900 mb-3">
                  Conversation details
                </h4>

                <div className="space-y-2.5 text-xs">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400 font-normal">Interest</span>
                    <span className="font-semibold text-slate-900 text-right">
                      {currentConv.details.interest}
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-slate-400 font-normal">Team size</span>
                    <span className="font-semibold text-slate-900 text-right">
                      {currentConv.details.teamSize}
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-slate-400 font-normal">Source</span>
                    <span className="font-semibold text-slate-900 text-right">
                      {currentConv.details.source}
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-slate-400 font-normal">Owner</span>
                    <span className="font-semibold text-slate-900 text-right">
                      {currentConv.details.owner}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Next Step Action Card */}
            <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-2xs">
              <div className="text-[10px] font-bold tracking-wider uppercase text-slate-400 mb-1.5">
                NEXT STEP
              </div>
              <div className="text-xs sm:text-sm font-bold text-slate-900">
                {currentConv.nextStep}
              </div>
            </div>
          </aside>
        </>
      )}
        </div>
      </div>
    </div>
  )
}
