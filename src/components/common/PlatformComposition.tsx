/**
 * PulseQuo Platform Dashboard Composition
 * Interactive multi-view dashboard composition accurately representing PulseQuo's 4 core engines:
 * 1. Communication Cloud (Omnichannel Inbox & WhatsApp/SMS)
 * 2. Sales CRM (Pipeline & Lead Lifecycle)
 * 3. Customer Support CRM (Ticketing & SLA Work Queues)
 * 4. AI & Automation (Visual Flow Builder & MCP Server Tools)
 */

import { useState } from 'react'
import {
  MessageSquare,
  TrendingUp,
  Headphones,
  Bot,
  Send,
  Sparkles,
  GitBranch,
  CheckCheck,
  Play,
  Flame,
  ArrowRight,
  ShieldCheck,
  CircleDot,
} from 'lucide-react'

type TabType = 'communication' | 'sales' | 'support' | 'automation'

interface ChatMessage {
  id: string
  sender: 'user' | 'agent' | 'system'
  text: string
  time: string
  isAI?: boolean
}

export function PlatformComposition() {
  const [activeTab, setActiveTab] = useState<TabType>('communication')

  // Interactive state for Communication Cloud
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([
    {
      id: 'm1',
      sender: 'user',
      text: 'Hello PulseQuo! We need to dispatch 250,000 monthly transactional OTPs and marketing templates. Does PulseQuo support Indian TRAI DLT compliance natively?',
      time: '10:42 AM',
    },
    {
      id: 'm2',
      sender: 'agent',
      isAI: true,
      text: 'Yes, absolutely! PulseQuo has native TRAI DLT header binding and template mapping alongside direct Meta Cloud API for WhatsApp. Transactional routes deliver with sub-2s SLA and real-time webhook DLRs.',
      time: '10:42 AM',
    },
  ])
  const [isTyping, setIsTyping] = useState(false)
  const [customInput, setCustomInput] = useState('')

  // Interactive state for Flow Builder test simulation
  const [flowStepActive, setFlowStepActive] = useState<number>(0)
  const [isSimulatingFlow, setIsSimulatingFlow] = useState(false)

  // Interactive state for Sales CRM Kanban
  const [selectedDealStage, setSelectedDealStage] = useState<'all' | 'new' | 'demo' | 'proposal' | 'won'>('all')

  // Handler for interactive message sending
  const handleSendMessage = (textToSend?: string) => {
    const text = textToSend || customInput
    if (!text.trim()) return

    const newMsg: ChatMessage = {
      id: `msg-${Date.now()}`,
      sender: 'user',
      text: text,
      time: 'Just now',
    }

    setChatMessages((prev) => [...prev, newMsg])
    setCustomInput('')
    setIsTyping(true)

    // Simulate smart AI response after 900ms
    setTimeout(() => {
      let reply = 'Our AI routing engine auto-provisions high-throughput channels with instant SMPP fallbacks.'
      if (text.toLowerCase().includes('price') || text.toLowerCase().includes('cost')) {
        reply = 'PulseQuo pricing features transparent carrier pass-through rates + volume software tiers with zero hidden fees.'
      } else if (text.toLowerCase().includes('demo') || text.toLowerCase().includes('call')) {
        reply = 'I can schedule a tailored live demo for your technical team today! Would 3:00 PM or 5:00 PM IST suit you best?'
      } else if (text.toLowerCase().includes('mcp') || text.toLowerCase().includes('agent')) {
        reply = 'PulseQuo natively hosts Model Context Protocol (MCP) servers, letting your agents query live databases and execute CRM actions safely.'
      }

      setChatMessages((prev) => [
        ...prev,
        {
          id: `reply-${Date.now()}`,
          sender: 'agent',
          isAI: true,
          text: reply,
          time: 'Just now',
        },
      ])
      setIsTyping(false)
    }, 850)
  }

  // Handler for Flow simulation
  const runFlowSimulation = () => {
    if (isSimulatingFlow) return
    setIsSimulatingFlow(true)
    setFlowStepActive(1)

    setTimeout(() => setFlowStepActive(2), 900)
    setTimeout(() => setFlowStepActive(3), 1800)
    setTimeout(() => {
      setFlowStepActive(4)
      setIsSimulatingFlow(false)
    }, 2800)
  }

  return (
    <div className="w-full rounded-3xl border border-slate-700/80 bg-slate-950 shadow-2xl overflow-hidden ring-1 ring-white/10 transition-all duration-300">
      {/* Top Window Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-slate-800/90 bg-slate-900/95 px-4 py-3 sm:px-6 gap-3">
        {/* Window Dots & Live Domain */}
        <div className="flex items-center gap-2.5">
          <div className="flex items-center gap-1.5">
            <span className="size-3 rounded-full bg-rose-500/90 inline-block" />
            <span className="size-3 rounded-full bg-amber-500/90 inline-block" />
            <span className="size-3 rounded-full bg-emerald-500/90 inline-block" />
          </div>
          <span className="ml-2 text-xs font-mono text-slate-400 bg-slate-800/70 border border-slate-700/60 rounded-lg px-2.5 py-0.5 hidden xs:inline-flex items-center gap-1.5">
            <span className="size-1.5 rounded-full bg-emerald-400 animate-ping" />
            app.pulsequo.com/console
          </span>
          <span className="text-[11px] font-semibold text-emerald-400 bg-emerald-950/80 border border-emerald-800/60 px-2 py-0.5 rounded-full flex items-center gap-1">
            <CircleDot className="size-3" /> Live Demo
          </span>
        </div>

        {/* Tab Switcher Pills */}
        <div className="flex items-center gap-1 rounded-xl bg-slate-950 p-1 border border-slate-800 overflow-x-auto no-scrollbar">
          <button
            type="button"
            onClick={() => setActiveTab('communication')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all whitespace-nowrap shrink-0 ${
              activeTab === 'communication'
                ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30'
                : 'text-slate-400 hover:text-white hover:bg-slate-900'
            }`}
          >
            <MessageSquare className="size-3.5" />
            <span>Communication</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('sales')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all whitespace-nowrap shrink-0 ${
              activeTab === 'sales'
                ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                : 'text-slate-400 hover:text-white hover:bg-slate-900'
            }`}
          >
            <TrendingUp className="size-3.5" />
            <span>Sales CRM</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('support')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all whitespace-nowrap shrink-0 ${
              activeTab === 'support'
                ? 'bg-violet-600 text-white shadow-md shadow-violet-600/30'
                : 'text-slate-400 hover:text-white hover:bg-slate-900'
            }`}
          >
            <Headphones className="size-3.5" />
            <span>Support CRM</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('automation')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all whitespace-nowrap shrink-0 ${
              activeTab === 'automation'
                ? 'bg-purple-600 text-white shadow-md shadow-purple-600/30'
                : 'text-slate-400 hover:text-white hover:bg-slate-900'
            }`}
          >
            <Bot className="size-3.5" />
            <span>AI & Flow</span>
          </button>
        </div>
      </div>

      {/* Main Interactive Screen Content */}
      <div className="p-4 sm:p-6 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950 min-h-[480px] text-slate-100 font-sans">
        {/* ── 1. COMMUNICATION CLOUD VIEW ── */}
        {activeTab === 'communication' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 h-full">
            {/* Left Channel & Session Drawer */}
            <div className="lg:col-span-4 rounded-2xl bg-slate-900/80 border border-slate-800 p-3.5 space-y-3">
              <div className="flex items-center justify-between pb-2 border-b border-slate-800 px-1">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Active Channels
                </span>
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-950 text-emerald-400 border border-emerald-800/80">
                  <span className="size-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Meta Cloud v20
                </span>
              </div>

              {/* Chat Session Cards */}
              <div className="space-y-2">
                <div className="rounded-xl bg-blue-950/50 border border-blue-600/60 p-3 relative overflow-hidden transition-all hover:border-blue-500">
                  <div className="absolute top-0 right-0 w-16 h-16 bg-blue-600/10 rounded-full blur-xl pointer-events-none" />
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-white flex items-center gap-2">
                      <span className="size-2 rounded-full bg-emerald-400 shadow-sm shadow-emerald-400/50" />
                      Aditi Sharma
                    </span>
                    <span className="text-[10px] text-blue-300 font-mono">Live Session</span>
                  </div>
                  <p className="mt-1 text-xs text-slate-300 truncate">
                    “Can we configure WhatsApp OTP templates for India?”
                  </p>
                  <div className="mt-2.5 flex items-center gap-1.5 flex-wrap">
                    <span className="rounded-md bg-emerald-950/80 text-emerald-300 border border-emerald-800/60 px-2 py-0.5 text-[10px] font-mono flex items-center gap-1">
                      <CheckCheck className="size-3 text-emerald-400" /> WhatsApp Verified
                    </span>
                    <span className="rounded-md bg-blue-900/50 text-blue-300 px-2 py-0.5 text-[10px] font-mono">
                      Meta Cloud API
                    </span>
                  </div>
                </div>

                <div className="rounded-xl bg-slate-900/60 border border-slate-800/80 p-3 opacity-80 hover:opacity-100 transition-opacity">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-slate-200">Kunal Singhania (Fintech)</span>
                    <span className="text-[10px] text-slate-500 font-mono">6m ago</span>
                  </div>
                  <p className="mt-1 text-xs text-slate-400 truncate">
                    Delivery Receipt: 10,000 OTPs dispatched via SMPP route.
                  </p>
                  <div className="mt-2 flex items-center gap-1.5">
                    <span className="rounded-md bg-amber-950/80 text-amber-300 border border-amber-800/60 px-2 py-0.5 text-[10px] font-mono">
                      TRAI DLT Engine
                    </span>
                    <span className="rounded-md bg-slate-800 text-slate-300 px-2 py-0.5 text-[10px] font-mono">
                      DLR 100%
                    </span>
                  </div>
                </div>

                <div className="rounded-xl bg-slate-900/60 border border-slate-800/80 p-3 opacity-60 hover:opacity-100 transition-opacity hidden sm:block">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-slate-200">Global Logistics Corp</span>
                    <span className="text-[10px] text-slate-500 font-mono">1h ago</span>
                  </div>
                  <p className="mt-1 text-xs text-slate-400 truncate">
                    Campaign Broadcast: 45,000 WhatsApp notifications sent.
                  </p>
                </div>
              </div>

              {/* Quick Prompt Starters */}
              <div className="pt-2 border-t border-slate-800">
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1.5">
                  Click to Test Live AI Agent:
                </span>
                <div className="flex flex-col gap-1.5">
                  <button
                    type="button"
                    onClick={() => handleSendMessage('Tell me about WhatsApp pricing and DLT registration')}
                    className="text-left text-[11px] text-blue-300 bg-blue-950/40 hover:bg-blue-900/50 border border-blue-800/60 rounded-lg px-2.5 py-1.5 transition-colors"
                  >
                    👉 “Tell me about WhatsApp pricing & DLT”
                  </button>
                  <button
                    type="button"
                    onClick={() => handleSendMessage('Can PulseQuo agents connect to our custom database via MCP?')}
                    className="text-left text-[11px] text-purple-300 bg-purple-950/40 hover:bg-purple-900/50 border border-purple-800/60 rounded-lg px-2.5 py-1.5 transition-colors"
                  >
                    👉 “How does MCP tool integration work?”
                  </button>
                </div>
              </div>
            </div>

            {/* Right Chat Console */}
            <div className="lg:col-span-8 rounded-2xl bg-slate-900/90 border border-slate-800 flex flex-col justify-between p-4 min-h-[380px]">
              {/* Header */}
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <div className="flex items-center gap-3">
                  <div className="size-10 rounded-full bg-emerald-500/20 border border-emerald-500/60 flex items-center justify-center text-emerald-400 font-bold text-sm">
                    AS
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white flex items-center gap-2">
                      Aditi Sharma
                      <span className="rounded-full bg-emerald-950 text-emerald-400 border border-emerald-800 px-2 py-0.5 text-[10px] font-mono">
                        +91 98201 XXXXX
                      </span>
                    </h4>
                    <p className="text-[11px] text-slate-400">
                      Enterprise Solutions · Omnichannel Thread · Assigned to AI Bot + Human
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="rounded-lg bg-emerald-950/70 border border-emerald-800/60 px-2.5 py-1 text-[11px] font-semibold text-emerald-300 flex items-center gap-1">
                    <ShieldCheck className="size-3.5 text-emerald-400" /> WhatsApp Cloud
                  </span>
                </div>
              </div>

              {/* Message Thread */}
              <div className="py-4 space-y-3 font-sans text-xs flex-1 overflow-y-auto max-h-[250px] pr-1">
                {chatMessages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`flex ${msg.sender === 'user' ? 'justify-start' : 'justify-end'}`}
                  >
                    <div
                      className={`max-w-md rounded-2xl p-3.5 text-xs shadow-md transition-all ${
                        msg.sender === 'user'
                          ? 'rounded-tl-xs bg-slate-800/90 border border-slate-700/80 text-slate-200'
                          : 'rounded-tr-xs bg-gradient-to-r from-blue-600 to-indigo-600 text-white'
                      }`}
                    >
                      {msg.isAI && (
                        <div className="flex items-center gap-1.5 mb-1.5 text-[10px] text-blue-200 font-bold">
                          <Sparkles className="size-3.5 text-amber-300" />
                          <span>PulseQuo Autonomous Agent</span>
                          <span className="rounded-sm bg-blue-700/80 px-1 text-[9px]">v2.4</span>
                        </div>
                      )}
                      <p className="leading-relaxed">{msg.text}</p>
                      <div
                        className={`mt-1.5 flex items-center justify-between text-[10px] ${
                          msg.sender === 'user' ? 'text-slate-400' : 'text-blue-200'
                        }`}
                      >
                        <span className="font-mono">{msg.time}</span>
                        {msg.sender === 'agent' && (
                          <span className="flex items-center gap-1 font-semibold text-emerald-300">
                            Delivered <CheckCheck className="size-3 text-emerald-300" />
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                ))}

                {isTyping && (
                  <div className="flex justify-end">
                    <div className="rounded-2xl rounded-tr-xs bg-blue-600/40 border border-blue-500/40 px-4 py-2.5 text-blue-200 text-xs flex items-center gap-2">
                      <Sparkles className="size-3.5 animate-spin text-amber-300" />
                      <span>PulseQuo AI is formulating response...</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Compose Preview */}
              <div className="border-t border-slate-800 pt-3">
                <form
                  onSubmit={(e) => {
                    e.preventDefault()
                    handleSendMessage()
                  }}
                  className="flex items-center gap-2 rounded-xl bg-slate-950 border border-slate-800 p-1.5 focus-within:border-blue-500 transition-colors"
                >
                  <input
                    type="text"
                    value={customInput}
                    onChange={(e) => setCustomInput(e.target.value)}
                    placeholder="Type a custom message or inquiry to test live response..."
                    className="flex-1 bg-transparent text-xs text-slate-100 placeholder-slate-500 px-3 py-1.5 focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="inline-flex items-center gap-1 rounded-lg bg-blue-600 hover:bg-blue-500 px-3.5 py-1.5 text-xs font-bold text-white shadow-xs transition-colors shrink-0"
                  >
                    <span>Send</span>
                    <Send className="size-3.5" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        )}

        {/* ── 2. SALES CRM VIEW ── */}
        {activeTab === 'sales' && (
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-2 border-b border-slate-800">
              <div>
                <h4 className="text-base font-bold text-white flex items-center gap-2">
                  <span>Enterprise Deals Pipeline · Q4</span>
                  <span className="rounded-full bg-indigo-950 text-indigo-300 border border-indigo-800 px-2.5 py-0.5 text-[11px] font-mono">
                    4 Active Deals
                  </span>
                </h4>
                <p className="text-xs text-slate-400 mt-0.5">
                  Total Weighted Value: <span className="text-emerald-400 font-bold">₹3,450,000</span> · Win Rate: 68%
                </p>
              </div>

              {/* Stage Filter Buttons for Mobile & Desktop */}
              <div className="flex items-center gap-1 bg-slate-900 border border-slate-800 p-1 rounded-xl overflow-x-auto no-scrollbar">
                <button
                  type="button"
                  onClick={() => setSelectedDealStage('all')}
                  className={`px-2.5 py-1 rounded-lg text-xs font-semibold transition-all ${
                    selectedDealStage === 'all' ? 'bg-indigo-600 text-white' : 'text-slate-400'
                  }`}
                >
                  All (4)
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedDealStage('new')}
                  className={`px-2.5 py-1 rounded-lg text-xs font-semibold transition-all ${
                    selectedDealStage === 'new' ? 'bg-indigo-600 text-white' : 'text-slate-400'
                  }`}
                >
                  Inbound (1)
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedDealStage('demo')}
                  className={`px-2.5 py-1 rounded-lg text-xs font-semibold transition-all ${
                    selectedDealStage === 'demo' ? 'bg-indigo-600 text-white' : 'text-slate-400'
                  }`}
                >
                  Demo (1)
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedDealStage('proposal')}
                  className={`px-2.5 py-1 rounded-lg text-xs font-semibold transition-all ${
                    selectedDealStage === 'proposal' ? 'bg-indigo-600 text-white' : 'text-slate-400'
                  }`}
                >
                  Review (1)
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedDealStage('won')}
                  className={`px-2.5 py-1 rounded-lg text-xs font-semibold transition-all ${
                    selectedDealStage === 'won' ? 'bg-indigo-600 text-white' : 'text-slate-400'
                  }`}
                >
                  Closed (1)
                </button>
              </div>
            </div>

            {/* Kanban Columns with Mobile Horizontal Scroll Support */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
              {/* Column 1: New Inbound */}
              {(selectedDealStage === 'all' || selectedDealStage === 'new') && (
                <div className="rounded-2xl bg-slate-900/90 border border-slate-800 p-3.5 space-y-2.5">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                    <span className="text-xs font-bold text-slate-300 flex items-center gap-1.5">
                      <span className="size-2 rounded-full bg-slate-400" />
                      New Inbound (1)
                    </span>
                    <span className="text-xs font-mono font-bold text-slate-300">₹450,000</span>
                  </div>
                  <div className="rounded-xl bg-slate-950/80 border border-slate-700/70 p-3 hover:border-indigo-500 transition-all cursor-pointer">
                    <div className="flex items-center justify-between">
                      <p className="text-xs font-bold text-white">Apex Cloud Retail</p>
                      <span className="rounded-sm bg-emerald-950 text-emerald-400 border border-emerald-800 px-1.5 py-0.5 text-[9px] font-bold">
                        Score 94
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-400 mt-1">Source: WhatsApp Chatbot Qualifier</p>
                    <div className="mt-3 flex items-center justify-between text-[10px] text-slate-400">
                      <span className="text-emerald-400 font-semibold">High Intent</span>
                      <span className="font-mono">14m ago</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Column 2: Demo Scheduled */}
              {(selectedDealStage === 'all' || selectedDealStage === 'demo') && (
                <div className="rounded-2xl bg-slate-900/90 border border-blue-900/50 p-3.5 space-y-2.5">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                    <span className="text-xs font-bold text-blue-300 flex items-center gap-1.5">
                      <span className="size-2 rounded-full bg-blue-400" />
                      Demo Scheduled (1)
                    </span>
                    <span className="text-xs font-mono font-bold text-blue-300">₹800,000</span>
                  </div>
                  <div className="rounded-xl bg-slate-950/80 border border-blue-800/60 p-3 hover:border-blue-500 transition-all cursor-pointer">
                    <div className="flex items-center justify-between">
                      <p className="text-xs font-bold text-white">Starlight Mobility</p>
                      <span className="rounded-sm bg-blue-950 text-blue-300 border border-blue-800 px-1.5 py-0.5 text-[9px] font-bold">
                        Tomorrow 3 PM
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-400 mt-1">Rep: Priya M. · Lead: CTO</p>
                    <div className="mt-3 flex items-center justify-between text-[10px] text-slate-400">
                      <span className="text-blue-300 font-medium">Calendar Synced</span>
                      <span className="font-mono">HubSpot API</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Column 3: Proposal Review */}
              {(selectedDealStage === 'all' || selectedDealStage === 'proposal') && (
                <div className="rounded-2xl bg-slate-900/90 border border-indigo-900/50 p-3.5 space-y-2.5">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                    <span className="text-xs font-bold text-indigo-300 flex items-center gap-1.5">
                      <span className="size-2 rounded-full bg-indigo-400" />
                      Proposal Review (1)
                    </span>
                    <span className="text-xs font-mono font-bold text-indigo-300">₹1,200,000</span>
                  </div>
                  <div className="rounded-xl bg-slate-950/80 border border-indigo-800/60 p-3 hover:border-indigo-500 transition-all cursor-pointer">
                    <div className="flex items-center justify-between">
                      <p className="text-xs font-bold text-white">Delta Healthtech</p>
                      <span className="rounded-sm bg-amber-950 text-amber-300 border border-amber-800 px-1.5 py-0.5 text-[9px] font-bold flex items-center gap-0.5">
                        <Flame className="size-2.5 text-amber-400" /> Hot
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-400 mt-1">Volume: 500k WhatsApp + SMS DLT</p>
                    <div className="mt-3 flex items-center justify-between text-[10px] text-slate-400">
                      <span className="text-indigo-300">Legal Signing Stage</span>
                      <span className="font-mono">Active</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Column 4: Won / Closed */}
              {(selectedDealStage === 'all' || selectedDealStage === 'won') && (
                <div className="rounded-2xl bg-slate-900/90 border border-emerald-900/50 p-3.5 space-y-2.5">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                    <span className="text-xs font-bold text-emerald-300 flex items-center gap-1.5">
                      <span className="size-2 rounded-full bg-emerald-400" />
                      Won / Closed (1)
                    </span>
                    <span className="text-xs font-mono font-bold text-emerald-300">₹1,000,000</span>
                  </div>
                  <div className="rounded-xl bg-slate-950/80 border border-emerald-800/60 p-3 hover:border-emerald-500 transition-all cursor-pointer">
                    <div className="flex items-center justify-between">
                      <p className="text-xs font-bold text-white">Bharat Logistics Ltd</p>
                      <span className="rounded-sm bg-emerald-950 text-emerald-300 border border-emerald-800 px-1.5 py-0.5 text-[9px] font-bold">
                        Live
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-400 mt-1">Status: Provisioned & Live Traffic</p>
                    <div className="mt-3 flex items-center justify-between text-[10px] text-slate-400">
                      <span className="text-emerald-400 font-semibold">Annual Contract</span>
                      <span className="font-mono">SMPP Live</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* ── 3. SUPPORT CRM VIEW ── */}
        {activeTab === 'support' && (
          <div className="space-y-4">
            {/* KPI Metrics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <div className="rounded-2xl bg-slate-900/90 border border-slate-800 p-3.5">
                <p className="text-[11px] text-slate-400 uppercase tracking-wider font-semibold">Open Tickets</p>
                <p className="text-2xl font-black text-white mt-1">14</p>
                <div className="mt-1 text-[10px] text-emerald-400 font-semibold flex items-center gap-1">
                  <span>↓ 42% queue reduction</span>
                </div>
              </div>

              <div className="rounded-2xl bg-slate-900/90 border border-slate-800 p-3.5">
                <p className="text-[11px] text-slate-400 uppercase tracking-wider font-semibold">First Response (FRT)</p>
                <p className="text-2xl font-black text-emerald-400 mt-1">42 sec</p>
                <div className="mt-1 text-[10px] text-slate-400 font-mono">
                  Target: &lt; 2 minutes
                </div>
              </div>

              <div className="rounded-2xl bg-slate-900/90 border border-slate-800 p-3.5">
                <p className="text-[11px] text-slate-400 uppercase tracking-wider font-semibold">SLA Adherence</p>
                <p className="text-2xl font-black text-blue-400 mt-1">99.4%</p>
                <div className="mt-1 text-[10px] text-blue-300">
                  Priority Enterprise SLA
                </div>
              </div>

              <div className="rounded-2xl bg-slate-900/90 border border-slate-800 p-3.5">
                <p className="text-[11px] text-slate-400 uppercase tracking-wider font-semibold">AI Deflected</p>
                <p className="text-2xl font-black text-purple-400 mt-1">78.4%</p>
                <div className="mt-1 text-[10px] text-purple-300">
                  Autonomous resolution
                </div>
              </div>
            </div>

            {/* Responsive Ticket Table */}
            <div className="rounded-2xl bg-slate-900/90 border border-slate-800 overflow-hidden">
              <div className="overflow-x-auto no-scrollbar">
                <table className="w-full text-left text-xs min-w-[550px]">
                  <thead className="bg-slate-950 text-slate-400 border-b border-slate-800 font-mono text-[11px]">
                    <tr>
                      <th className="p-3">Ticket ID</th>
                      <th className="p-3">Customer</th>
                      <th className="p-3">Channel</th>
                      <th className="p-3">Issue Summary</th>
                      <th className="p-3">Priority</th>
                      <th className="p-3">SLA Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/80 text-slate-300">
                    <tr className="hover:bg-slate-800/40 transition-colors">
                      <td className="p-3 font-mono text-blue-400 font-bold">#TK-4092</td>
                      <td className="p-3 font-semibold text-white">UrbanCart Support</td>
                      <td className="p-3">
                        <span className="rounded-md bg-emerald-950 text-emerald-300 border border-emerald-800/60 px-2 py-0.5 text-[10px]">
                          WhatsApp
                        </span>
                      </td>
                      <td className="p-3 truncate max-w-xs">Template parameter validation check on campaign</td>
                      <td className="p-3">
                        <span className="rounded-md bg-rose-950 text-rose-300 border border-rose-800 px-2 py-0.5 text-[10px] font-bold">
                          Urgent
                        </span>
                      </td>
                      <td className="p-3 text-emerald-400 font-medium">Within Target (12m left)</td>
                    </tr>
                    <tr className="hover:bg-slate-800/40 transition-colors">
                      <td className="p-3 font-mono text-blue-400 font-bold">#TK-4088</td>
                      <td className="p-3 font-semibold text-white">Kavita Rao</td>
                      <td className="p-3">
                        <span className="rounded-md bg-blue-950 text-blue-300 border border-blue-800/60 px-2 py-0.5 text-[10px]">
                          Web Chat
                        </span>
                      </td>
                      <td className="p-3 truncate max-w-xs">Question about invoice GST registration number</td>
                      <td className="p-3">
                        <span className="rounded-md bg-amber-950 text-amber-300 border border-amber-800 px-2 py-0.5 text-[10px] font-bold">
                          Medium
                        </span>
                      </td>
                      <td className="p-3 text-emerald-400 font-medium">Resolved by AI Agent</td>
                    </tr>
                    <tr className="hover:bg-slate-800/40 transition-colors">
                      <td className="p-3 font-mono text-blue-400 font-bold">#TK-4085</td>
                      <td className="p-3 font-semibold text-white">TechnoServe Admin</td>
                      <td className="p-3">
                        <span className="rounded-md bg-indigo-950 text-indigo-300 border border-indigo-800/60 px-2 py-0.5 text-[10px]">
                          Email
                        </span>
                      </td>
                      <td className="p-3 truncate max-w-xs">Adding new server IP to SMPP whitelist firewall</td>
                      <td className="p-3">
                        <span className="rounded-md bg-slate-800 text-slate-300 px-2 py-0.5 text-[10px]">
                          Normal
                        </span>
                      </td>
                      <td className="p-3 text-slate-400">Assigned: DevSecOps</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* ── 4. AI & FLOW BUILDER VIEW ── */}
        {activeTab === 'automation' && (
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-slate-800 gap-2">
              <div className="flex items-center gap-2">
                <div className="size-8 rounded-xl bg-purple-600/20 border border-purple-500/60 flex items-center justify-center text-purple-400">
                  <GitBranch className="size-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white flex items-center gap-2">
                    Flow: Inbound Qualification & Booking
                    <span className="rounded-md bg-emerald-950 text-emerald-400 border border-emerald-800 px-2 py-0.5 text-[10px]">
                      Published
                    </span>
                  </h4>
                  <p className="text-[11px] text-slate-400">
                    Autonomous node logic with live MCP server execution
                  </p>
                </div>
              </div>

              {/* Simulation Action Button */}
              <button
                type="button"
                onClick={runFlowSimulation}
                disabled={isSimulatingFlow}
                className="inline-flex items-center gap-2 rounded-xl bg-purple-600 hover:bg-purple-500 disabled:opacity-50 px-4 py-2 text-xs font-bold text-white shadow-md shadow-purple-600/30 transition-all shrink-0"
              >
                <Play className="size-3.5 fill-current" />
                <span>{isSimulatingFlow ? 'Simulating Step ' + flowStepActive + '...' : '▶ Run Test Simulation'}</span>
              </button>
            </div>

            {/* Visual Canvas Representation */}
            <div className="relative rounded-2xl bg-slate-950/90 border border-slate-800 p-4 sm:p-6 overflow-hidden">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                {/* Node 1 */}
                <div
                  className={`w-full md:w-56 rounded-2xl p-4 transition-all duration-300 ${
                    flowStepActive === 1
                      ? 'bg-blue-900/60 border-2 border-blue-400 shadow-xl shadow-blue-500/30 scale-105'
                      : 'bg-slate-900 border border-blue-600/40'
                  }`}
                >
                  <div className="flex items-center justify-between text-[11px] font-bold text-blue-400">
                    <span>1. Inbound Trigger</span>
                    <MessageSquare className="size-4" />
                  </div>
                  <p className="mt-2 text-xs text-white font-bold">WhatsApp / Webhook</p>
                  <p className="mt-0.5 text-[11px] text-slate-400">Listens for keywords & customer greetings</p>
                  {flowStepActive === 1 && (
                    <div className="mt-2 text-[10px] text-blue-300 font-mono animate-pulse">
                      ● Event Fired
                    </div>
                  )}
                </div>

                <div className="text-slate-600 font-mono text-sm hidden md:block">
                  <ArrowRight
                    className={`size-5 transition-colors ${
                      flowStepActive >= 2 ? 'text-purple-400' : 'text-slate-700'
                    }`}
                  />
                </div>

                {/* Node 2 */}
                <div
                  className={`w-full md:w-56 rounded-2xl p-4 transition-all duration-300 ${
                    flowStepActive === 2
                      ? 'bg-purple-900/60 border-2 border-purple-400 shadow-xl shadow-purple-500/30 scale-105'
                      : 'bg-slate-900 border border-purple-600/40'
                  }`}
                >
                  <div className="flex items-center justify-between text-[11px] font-bold text-purple-400">
                    <span>2. AI Intent Extraction</span>
                    <Bot className="size-4" />
                  </div>
                  <p className="mt-2 text-xs text-white font-bold">RAG Knowledge Engine</p>
                  <p className="mt-0.5 text-[11px] text-slate-400">Extracts company size, urgency & budget</p>
                  {flowStepActive === 2 && (
                    <div className="mt-2 text-[10px] text-purple-300 font-mono animate-pulse">
                      ● Intent: High Budget
                    </div>
                  )}
                </div>

                <div className="text-slate-600 font-mono text-sm hidden md:block">
                  <ArrowRight
                    className={`size-5 transition-colors ${
                      flowStepActive >= 3 ? 'text-emerald-400' : 'text-slate-700'
                    }`}
                  />
                </div>

                {/* Node 3 */}
                <div
                  className={`w-full md:w-56 rounded-2xl p-4 transition-all duration-300 ${
                    flowStepActive === 3
                      ? 'bg-emerald-900/60 border-2 border-emerald-400 shadow-xl shadow-emerald-500/30 scale-105'
                      : 'bg-slate-900 border border-emerald-600/40'
                  }`}
                >
                  <div className="flex items-center justify-between text-[11px] font-bold text-emerald-400">
                    <span>3. MCP Tool Action</span>
                    <Sparkles className="size-4" />
                  </div>
                  <p className="mt-2 text-xs text-white font-bold">Create Deal & Book Demo</p>
                  <p className="mt-0.5 text-[11px] text-slate-400">Invokes appointment-server MCP</p>
                  {flowStepActive === 3 && (
                    <div className="mt-2 text-[10px] text-emerald-300 font-mono animate-pulse">
                      ● Lead Saved in CRM
                    </div>
                  )}
                </div>
              </div>

              {/* Status bar */}
              <div className="mt-6 pt-4 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-2">
                <span className="flex items-center gap-1.5">
                  <Sparkles className="size-3.5 text-purple-400" /> Model Context Protocol (MCP) Tools Connected: 2
                </span>
                <span className="text-emerald-400 font-semibold">
                  {flowStepActive === 4 ? '✓ Complete Flow Executed in 1.4s' : 'Zero-Code Flow Studio Active'}
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
