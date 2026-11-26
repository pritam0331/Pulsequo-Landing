import React, { useMemo, useState } from 'react'
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
  Bot,
} from 'lucide-react'
import { indexBy, IndexedSearch } from '../../lib/dsa'
import { WorkflowCanvas } from './WorkflowCanvas'
import { PlatformCompositionSkeleton, useCardHydration } from './CardSkeleton'

function WhatsAppIcon({ className = 'size-4' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="#25D366">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.888 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.456 5.711 1.457h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  )
}

type NavSection = 'inbox' | 'agents' | 'workflows' | 'analytics' | 'contacts'
type MobileInboxPane = 'list' | 'chat' | 'context'

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
    agentName: 'PulseQuo AI',
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
    agentName: 'PulseQuo AI',
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
    agentName: 'PulseQuo AI',
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
    agentName: 'PulseQuo AI',
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

const NAV_ITEMS: Array<{ id: NavSection; label: string; icon: React.ElementType }> = [
  { id: 'inbox', label: 'Team inbox', icon: MessageSquare },
  { id: 'agents', label: 'AI agents', icon: Sparkles },
  { id: 'workflows', label: 'Workflows', icon: GitBranch },
  { id: 'analytics', label: 'Analytics', icon: BarChart3 },
  { id: 'contacts', label: 'Contacts', icon: LayoutGrid },
]

const CONVERSATION_BY_ID = indexBy(CONVERSATIONS, (c) => c.id)
const CONVERSATION_SEARCH = new IndexedSearch(
  CONVERSATIONS,
  (c) => `${c.title} ${c.preview} ${c.channel}`
)

const AGENTS = [
  {
    id: 'lead-qualifier',
    name: 'Inbound Lead Qualifier',
    channel: 'WhatsApp Business API',
    status: 'Active',
    deflection: '89% Qualified',
    model: 'Gemini 2.5 Flash',
    tools: 'MCP · Salesforce CRM Sync',
    ragDocs: 'Sales_Playbook_v4.pdf',
    latency: '24ms',
    totalChats: '14,290',
  },
  {
    id: 'support-sentinel',
    name: 'Tier-1 Support Sentinel',
    channel: 'Omnichannel (SMS + WhatsApp)',
    status: 'Active',
    deflection: '78% Autonomous',
    model: 'Gemini 2.5 Pro',
    tools: 'MCP · Jira & Zendesk Bridge',
    ragDocs: 'Product_Knowledge_Base_2026',
    latency: '36ms',
    totalChats: '32,150',
  },
  {
    id: 'order-tracker',
    name: 'Order & Logistics Bot',
    channel: 'Direct Carrier SMPP',
    status: 'Active',
    deflection: '94% Automated',
    model: 'Gemini 2.5 Flash',
    tools: 'Bluedart & Delhivery Webhooks',
    ragDocs: 'Shipping_Policies.json',
    latency: '18ms',
    totalChats: '9,840',
  },
] as const

const AGENT_BY_ID = indexBy(AGENTS, (a) => a.id)

type AgentId = (typeof AGENTS)[number]['id']

function AgentsView({ onSwitchToInbox }: { onSwitchToInbox: (convId?: string) => void }) {
  const [selectedAgent, setSelectedAgent] = useState<AgentId>('lead-qualifier')
  const [testPrompt, setTestPrompt] = useState('')
  const [simulatedReply, setSimulatedReply] = useState<string | null>(null)

  const active = AGENT_BY_ID.get(selectedAgent) ?? AGENTS[0]

  const handleSimulate = (e: React.FormEvent) => {
    e.preventDefault()
    if (!testPrompt.trim()) return
    setSimulatedReply(
      `[${active.name} · RAG Grounded]: Processed query via ${active.tools}. No hallucination detected. Lead scored 94/100 and routed to account executive pipeline.`
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-12 bg-slate-50/40 select-none lg:h-[440px] overflow-hidden">
      <div className="md:col-span-4 border-b md:border-b-0 md:border-r border-slate-100 bg-white p-3.5 flex flex-col justify-between gap-2 overflow-y-auto thin-scrollbar">
        <div>
          <div className="flex items-center justify-between mb-2.5">
            <span className="text-xs font-bold text-black">Autonomous Agents</span>
            <span className="text-[10px] font-mono font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-xs border border-emerald-200">
              3 Active
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-1 gap-2">
            {AGENTS.map((ag) => {
              const isSelected = ag.id === selectedAgent
              return (
                <button
                  key={ag.id}
                  type="button"
                  onClick={() => {
                    setSelectedAgent(ag.id)
                    setSimulatedReply(null)
                  }}
                  className={`w-full text-left p-2.5 rounded-lg border transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-blue-50/80 border-blue-200 text-blue-900 shadow-2xs'
                      : 'bg-white hover:bg-slate-50 border-slate-200/70 text-slate-700'
                  }`}
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-xs font-bold truncate">{ag.name}</span>
                    <span className="size-1.5 rounded-xs bg-emerald-500 shrink-0" />
                  </div>
                  <div className="mt-1 flex items-center justify-between gap-2 text-[10px] text-slate-500 font-medium">
                    <span className="truncate">{ag.channel}</span>
                    <span className="font-mono text-blue-600 font-semibold shrink-0">{ag.deflection}</span>
                  </div>
                </button>
              )
            })}
          </div>
        </div>

        <div className="pt-2.5 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500 font-medium">
          <span>MCP Tools Connected</span>
          <span className="font-mono text-purple-600 font-bold">12 Tools</span>
        </div>
      </div>

      <div className="md:col-span-8 p-3.5 sm:p-4 flex flex-col justify-between gap-2.5 overflow-y-auto thin-scrollbar">
        <div>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-slate-200/80">
            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <Bot className="size-4 text-purple-600 shrink-0" />
                <h3 className="text-sm font-bold text-slate-900 truncate">{active.name}</h3>
                <span className="size-1.5 rounded-xs bg-emerald-500 animate-pulse shrink-0" />
              </div>
              <p className="text-[11px] text-slate-500 mt-0.5 truncate">
                Model: <span className="font-mono text-purple-600 font-semibold">{active.model}</span> · Grounding:{' '}
                <span className="font-mono text-slate-700">{active.ragDocs}</span>
              </p>
            </div>
            <button
              type="button"
              onClick={() => onSwitchToInbox('sales-enquiry')}
              className="text-xs font-semibold text-blue-600 hover:text-blue-700 inline-flex items-center gap-1 cursor-pointer shrink-0 self-start sm:self-auto"
            >
              <span>View live in Inbox</span>
              <ArrowRight className="size-3" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 my-3.5">
            <div className="p-3 rounded-lg bg-white border border-slate-200/80 shadow-2xs">
              <span className="text-[10px] text-slate-400 font-medium block">Total Handled</span>
              <span className="text-sm font-bold font-mono text-slate-900">{active.totalChats}</span>
            </div>
            <div className="p-3 rounded-lg bg-white border border-slate-200/80 shadow-2xs">
              <span className="text-[10px] text-slate-400 font-medium block">Avg Response</span>
              <span className="text-sm font-bold font-mono text-blue-600">{active.latency}</span>
            </div>
            <div className="p-3 rounded-lg bg-white border border-slate-200/80 shadow-2xs">
              <span className="text-[10px] text-slate-400 font-medium block">Zero-Hallucination</span>
              <span className="text-sm font-bold font-mono text-emerald-600">100% SLA</span>
            </div>
          </div>

          <div className="rounded-lg border border-slate-200/80 bg-white p-3.5 text-xs shadow-2xs space-y-2">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-[11px]">
              <span className="text-slate-500 font-medium">Model Context Protocol (MCP) Bindings:</span>
              <span className="font-mono font-semibold text-purple-700">{active.tools}</span>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-[11px]">
              <span className="text-slate-500 font-medium">Enterprise Guardrails:</span>
              <span className="font-mono text-emerald-700 font-semibold">Strict Verification · Anti-Drift Active</span>
            </div>
          </div>
        </div>

        <div>
          {simulatedReply && (
            <div className="mb-2.5 p-3 rounded-lg bg-purple-50/70 border border-purple-200/70 text-xs text-purple-950 font-mono leading-relaxed">
              {simulatedReply}
            </div>
          )}
          <form
            onSubmit={handleSimulate}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 rounded-lg border border-slate-200 bg-white p-1.5 shadow-2xs focus-within:border-blue-500"
          >
            <input
              type="text"
              value={testPrompt}
              onChange={(e) => setTestPrompt(e.target.value)}
              placeholder="Test agent prompt (e.g. 'Pricing for 50 agents?')..."
              className="flex-1 bg-transparent text-xs text-slate-900 placeholder-slate-400 focus:outline-none px-2 py-1"
            />
            <button
              type="submit"
              className="px-3.5 py-1.5 rounded-md bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold shadow-xs cursor-pointer transition-colors shrink-0"
            >
              Simulate
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

function AnalyticsView() {
  const [timeRange, setTimeRange] = useState<'today' | '7d' | '30d'>('today')

  return (
    <div className="p-4 sm:p-5 bg-slate-50/40 select-none lg:h-[440px] overflow-hidden flex flex-col justify-between">
      <div className="flex flex-col h-full justify-between gap-2.5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-2 border-b border-slate-200/80 shrink-0">
          <div className="min-w-0">
            <div className="flex items-center gap-2">
              <BarChart3 className="size-4 text-blue-600 shrink-0" />
              <h3 className="text-sm font-bold text-black truncate">Platform Analytics &amp; CPaaS Telemetry</h3>
            </div>
            <p className="text-[11px] text-slate-500 mt-0.5 truncate">
              Real-time carrier throughput, delivery rates, and AI deflection metrics
            </p>
          </div>
          <div className="flex items-center gap-1 bg-slate-100 p-0.5 rounded-md text-[11px] font-semibold text-slate-600 self-start sm:self-auto shrink-0">
            {(['today', '7d', '30d'] as const).map((t) => (
              <button
                key={t}
                type="button"
                onClick={() => setTimeRange(t)}
                className={`px-2.5 py-1 rounded-xs transition-colors cursor-pointer uppercase ${
                  timeRange === t ? 'bg-white text-blue-600 shadow-2xs' : 'hover:text-slate-900'
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 shrink-0">
          <div className="p-2.5 rounded-lg bg-white border border-slate-200/80 shadow-2xs">
            <span className="text-[10px] text-slate-400 font-medium block truncate">Total Messages</span>
            <div className="flex items-baseline gap-1.5 mt-0.5">
              <span className="text-sm font-bold font-mono text-black">1,284,920</span>
              <span className="text-[10px] font-mono font-bold text-emerald-600">+14%</span>
            </div>
            <span className="text-[10px] text-slate-400 block truncate">WhatsApp &amp; SMS</span>
          </div>
          <div className="p-2.5 rounded-lg bg-white border border-slate-200/80 shadow-2xs">
            <span className="text-[10px] text-slate-400 font-medium block truncate">Delivery SLA (DLR)</span>
            <div className="flex items-baseline gap-1.5 mt-0.5">
              <span className="text-sm font-bold font-mono text-blue-600">99.98%</span>
              <span className="text-[10px] font-mono font-bold text-emerald-600">DLT</span>
            </div>
            <span className="text-[10px] text-slate-400 block truncate">Sub-second receipt</span>
          </div>
          <div className="p-2.5 rounded-lg bg-white border border-slate-200/80 shadow-2xs">
            <span className="text-[10px] text-slate-400 font-medium block truncate">Autonomous Deflection</span>
            <div className="flex items-baseline gap-1.5 mt-0.5">
              <span className="text-sm font-bold font-mono text-purple-600">78.4%</span>
              <span className="text-[10px] font-mono font-bold text-purple-600">AI</span>
            </div>
            <span className="text-[10px] text-slate-400 block truncate">Tier-1 auto-resolved</span>
          </div>
          <div className="p-2.5 rounded-lg bg-white border border-slate-200/80 shadow-2xs">
            <span className="text-[10px] text-slate-400 font-medium block truncate">Avg Response Latency</span>
            <div className="flex items-baseline gap-1.5 mt-0.5">
              <span className="text-sm font-bold font-mono text-emerald-600">28ms</span>
              <span className="text-[10px] font-mono font-bold text-emerald-600">Edge</span>
            </div>
            <span className="text-[10px] text-slate-400 block truncate">Mumbai Node Active</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 flex-1 min-h-0">
          <div className="p-3.5 rounded-lg bg-white border border-slate-200/80 shadow-2xs flex flex-col justify-between">
            <span className="text-xs font-bold text-black block mb-2">
              Omnichannel Throughput Breakdown
            </span>
            <div className="space-y-2 text-xs">
              <div>
                <div className="flex justify-between gap-2 text-[11px] mb-1 font-medium text-slate-700">
                  <span className="truncate">WhatsApp Business API (Meta v20)</span>
                  <span className="font-mono text-blue-600 font-bold shrink-0">64% · 822k</span>
                </div>
                <div className="h-1.5 rounded-xs bg-slate-100 overflow-hidden">
                  <div className="h-full bg-blue-600 rounded-xs w-[64%]" />
                </div>
              </div>
              <div>
                <div className="flex justify-between gap-2 text-[11px] mb-1 font-medium text-slate-700">
                  <span className="truncate">Carrier SMS (Direct SMPP Routes)</span>
                  <span className="font-mono text-indigo-600 font-bold shrink-0">26% · 334k</span>
                </div>
                <div className="h-1.5 rounded-xs bg-slate-100 overflow-hidden">
                  <div className="h-full bg-indigo-600 rounded-xs w-[26%]" />
                </div>
              </div>
              <div>
                <div className="flex justify-between gap-2 text-[11px] mb-1 font-medium text-slate-700">
                  <span className="truncate">Website Live Chat &amp; Voice</span>
                  <span className="font-mono text-purple-600 font-bold shrink-0">10% · 128k</span>
                </div>
                <div className="h-1.5 rounded-xs bg-slate-100 overflow-hidden">
                  <div className="h-full bg-purple-600 rounded-xs w-[10%]" />
                </div>
              </div>
            </div>
          </div>

          <div className="p-3.5 rounded-lg bg-white border border-slate-200/80 shadow-2xs flex flex-col justify-between">
            <span className="text-xs font-bold text-black block mb-2">
              CRM Revenue Pipeline Acceleration
            </span>
            <div className="space-y-1.5 text-xs">
              <div className="flex items-center justify-between gap-2 px-2.5 py-2 rounded-md bg-slate-50 border border-slate-100">
                <span className="text-[11px] text-slate-600 truncate">Influenced Revenue Pipeline</span>
                <span className="font-mono font-bold text-black shrink-0">₹4,820,000</span>
              </div>
              <div className="flex items-center justify-between gap-2 px-2.5 py-2 rounded-md bg-slate-50 border border-slate-100">
                <span className="text-[11px] text-slate-600 truncate">Conversion Rate from WhatsApp</span>
                <span className="font-mono font-bold text-emerald-600 shrink-0">38.4%</span>
              </div>
              <div className="flex items-center justify-between gap-2 px-2.5 py-2 rounded-md bg-slate-50 border border-slate-100">
                <span className="text-[11px] text-slate-600 truncate">SLA Breach Incidents (24h)</span>
                <span className="font-mono font-bold text-emerald-600 shrink-0">0 (100% On-Time)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

interface DemoContact {
  id: string
  name: string
  company: string
  phone: string
  channel: string
  stage: string
  stageColor: string
  owner: string
  dealValue: string
  segment: 'leads' | 'clients'
}

const DEMO_CONTACTS: DemoContact[] = [
  {
    id: 'sales-enquiry',
    name: 'Aditi Sharma',
    company: 'FinEdge Technologies',
    phone: '+91 98201 44821',
    channel: 'WhatsApp',
    stage: 'Qualified Lead',
    stageColor: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    owner: 'PulseQuo AI',
    dealValue: '₹240,000',
    segment: 'leads',
  },
  {
    id: 'order-update',
    name: 'Karan Mehra',
    company: 'RetailHub Express',
    phone: '+91 99302 11982',
    channel: 'WhatsApp',
    stage: 'Support Active',
    stageColor: 'bg-blue-50 text-blue-700 border-blue-200',
    owner: 'Support Desk',
    dealValue: '₹180,000',
    segment: 'clients',
  },
  {
    id: 'demo-request',
    name: 'Sneha Patel',
    company: 'Zenith Logistics',
    phone: '+91 97110 55291',
    channel: 'Web Chat',
    stage: 'Demo Booked',
    stageColor: 'bg-purple-50 text-purple-700 border-purple-200',
    owner: 'Sales Team',
    dealValue: '₹520,000',
    segment: 'leads',
  },
  {
    id: 'enterprise-lead',
    name: 'Vikram Joshi',
    company: 'OmniPay Global',
    phone: '+91 98401 22910',
    channel: 'Carrier SMS',
    stage: 'Proposal Sent',
    stageColor: 'bg-blue-50 text-blue-700 border-blue-200',
    owner: 'PulseQuo AI',
    dealValue: '₹1,200,000',
    segment: 'clients',
  },
]

const CONTACT_SEARCH = new IndexedSearch(
  DEMO_CONTACTS,
  (c) => `${c.name} ${c.company} ${c.phone}`,
  (c) => c.segment
)

function ContactsView({ onSelectContact }: { onSelectContact: (convId: string) => void }) {
  const [filter, setFilter] = useState<'all' | 'leads' | 'clients'>('all')
  const [searchTerm, setSearchTerm] = useState('')

  const filtered = useMemo(
    () => CONTACT_SEARCH.query(searchTerm, filter === 'all' ? 'All' : filter),
    [searchTerm, filter]
  )

  return (
    <div className="flex flex-col bg-white select-none lg:h-[440px] overflow-hidden">
      <div className="p-3 sm:p-3.5 border-b border-slate-100 flex flex-col md:flex-row md:items-center justify-between gap-2 shrink-0">
        <div className="relative flex-1 max-w-md">
          <Search className="size-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search contacts by name, company, or phone..."
            className="w-full rounded-lg bg-slate-50 border border-slate-200/80 pl-8 pr-3 py-1.5 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:bg-white transition-all shadow-2xs"
          />
        </div>

        <div className="flex flex-wrap items-center gap-1.5">
          <button
            type="button"
            onClick={() => setFilter('all')}
            className={`px-2.5 py-1 rounded-md text-xs font-semibold cursor-pointer transition-colors ${
              filter === 'all' ? 'bg-blue-50 text-blue-600 border border-blue-200' : 'text-slate-600 hover:bg-slate-50'
            }`}
          >
            All (4)
          </button>
          <button
            type="button"
            onClick={() => setFilter('leads')}
            className={`px-2.5 py-1 rounded-md text-xs font-semibold cursor-pointer transition-colors ${
              filter === 'leads' ? 'bg-blue-50 text-blue-600 border border-blue-200' : 'text-slate-600 hover:bg-slate-50'
            }`}
          >
            Pipeline Leads (2)
          </button>
          <button
            type="button"
            onClick={() => setFilter('clients')}
            className={`px-2.5 py-1 rounded-md text-xs font-semibold cursor-pointer transition-colors ${
              filter === 'clients' ? 'bg-blue-50 text-blue-600 border border-blue-200' : 'text-slate-600 hover:bg-slate-50'
            }`}
          >
            Clients (2)
          </button>
        </div>
      </div>

      <div className="divide-y divide-slate-100 overflow-y-auto thin-scrollbar flex-1">
        {filtered.map((item) => (
          <div
            key={item.id}
            className="px-3.5 py-2.5 flex flex-col sm:flex-row sm:items-center justify-between gap-2 hover:bg-slate-50/70 transition-colors"
          >
            <div className="flex items-center gap-3 min-w-0">
              <div className="size-9 rounded-lg bg-slate-900 text-white font-bold text-xs flex items-center justify-center shrink-0">
                {item.name.slice(0, 2).toUpperCase()}
              </div>
              <div className="min-w-0">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-xs sm:text-sm font-bold text-slate-900 truncate">{item.name}</span>
                  <span className={`text-[10px] font-semibold px-1.5 py-0.5 rounded-xs border ${item.stageColor}`}>
                    {item.stage}
                  </span>
                </div>
                <div className="text-[11px] text-slate-500 mt-0.5 truncate">
                  {item.company} · {item.phone}
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between sm:justify-end gap-3 shrink-0 pl-12 sm:pl-0">
              <div className="text-left sm:text-right">
                <span className="text-xs font-mono font-bold text-slate-900 block">{item.dealValue}</span>
                <span className="text-[10px] text-slate-400">Owner: {item.owner}</span>
              </div>
              <button
                type="button"
                onClick={() => onSelectContact(item.id === 'enterprise-lead' ? 'sales-enquiry' : item.id)}
                className="px-2.5 py-1.5 rounded-lg bg-blue-50 hover:bg-blue-100 text-blue-600 text-xs font-semibold inline-flex items-center gap-1 transition-colors cursor-pointer"
              >
                <MessageSquare className="size-3" />
                <span>Open Chat</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

interface LiveReply {
  id: string
  text: string
  sender: 'user' | 'agent'
}

export function PlatformComposition({ isLoading }: { isLoading?: boolean } = {}) {
  const [activeNav, setActiveNav] = useState<NavSection>('inbox')
  const [activeInboxTab, setActiveInboxTab] = useState<'open' | 'assigned'>('open')
  const [mobilePane, setMobilePane] = useState<MobileInboxPane>('chat')
  const [selectedConvId, setSelectedConvId] = useState<string>('sales-enquiry')
  const [searchQuery, setSearchQuery] = useState('')
  const [replyInput, setReplyInput] = useState('')
  const [repliesByConv, setRepliesByConv] = useState<Record<string, LiveReply[]>>({})
  const isHydrated = useCardHydration(200)
  const showSkeleton = isLoading ?? !isHydrated

  const currentConv = CONVERSATION_BY_ID.get(selectedConvId) ?? CONVERSATIONS[0]
  const currentReplies = repliesByConv[currentConv.id] ?? []

  const handleSendReply = (e?: React.FormEvent) => {
    if (e) e.preventDefault()
    const trimmed = replyInput.trim()
    if (!trimmed) return

    const convId = currentConv.id
    const newReply: LiveReply = { id: `rep-${Date.now()}`, text: trimmed, sender: 'user' }

    setRepliesByConv((prev) => ({
      ...prev,
      [convId]: [...(prev[convId] ?? []), newReply],
    }))
    setReplyInput('')

    window.setTimeout(() => {
      const autoReply: LiveReply = {
        id: `agent-${Date.now()}`,
        text: 'Got it! I have updated your workspace record and notified the account lead.',
        sender: 'agent',
      }
      setRepliesByConv((prev) => ({
        ...prev,
        [convId]: [...(prev[convId] ?? []), autoReply],
      }))
    }, 850)
  }

  const filteredConversations = useMemo(
    () => CONVERSATION_SEARCH.query(searchQuery),
    [searchQuery]
  )

  if (showSkeleton) {
    return (
      <div aria-busy="true" aria-label="Loading PulseQuo command center workspace">
        <PlatformCompositionSkeleton />
      </div>
    )
  }

  return (
    <div className="w-full rounded-xl border border-slate-200/90 bg-white shadow-lg overflow-hidden ring-1 ring-slate-900/5 text-slate-900 font-sans text-left">
      <div className="lg:hidden border-b border-slate-100 bg-white px-3 py-2.5">
        <div className="flex items-center justify-between gap-2 mb-2">
          <span className="text-sm font-black text-slate-900 tracking-tight">PulseQuo</span>
          <span className="text-[10px] font-mono text-slate-400 font-medium">Enterprise v20</span>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-1.5">
          {NAV_ITEMS.map((item) => {
            const Icon = item.icon
            const isActive = activeNav === item.id
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setActiveNav(item.id)}
                className={`flex items-center justify-center sm:justify-start gap-1.5 px-2 py-1.5 rounded-lg text-[11px] font-semibold transition-colors cursor-pointer ${
                  isActive
                    ? 'bg-blue-50 text-blue-600 border border-blue-200/80'
                    : 'text-slate-600 hover:bg-slate-50 border border-slate-100'
                }`}
              >
                <Icon className={`size-3.5 shrink-0 ${isActive ? 'text-blue-600' : 'text-slate-400'}`} />
                <span className="truncate">{item.label}</span>
              </button>
            )
          })}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 lg:h-[440px]">
        <aside className="hidden lg:flex lg:col-span-2 p-3.5 flex-col justify-between bg-white border-r border-slate-100 select-none">
          <div>
            <div className="text-sm font-black text-black tracking-tight px-1">PulseQuo</div>
            <div className="text-[9px] font-bold tracking-widest text-slate-400 uppercase mt-3.5 mb-2 px-1">
              WORKSPACE
            </div>

            <nav className="space-y-1">
              {NAV_ITEMS.map((item) => {
                const Icon = item.icon
                const isActive = activeNav === item.id
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setActiveNav(item.id)}
                    className={`w-full flex items-center gap-2 px-2.5 py-2 rounded-lg text-xs transition-colors cursor-pointer ${
                      isActive
                        ? 'bg-blue-50/90 text-blue-600 font-semibold shadow-2xs'
                        : 'text-slate-600 font-medium hover:text-black hover:bg-slate-50'
                    }`}
                  >
                    <Icon className={`size-3.5 shrink-0 ${isActive ? 'text-blue-600' : 'text-slate-400'}`} />
                    <span className="truncate">{item.label}</span>
                  </button>
                )
              })}
            </nav>
          </div>

          <div className="pt-3 border-t border-slate-100 px-1">
            <span className="text-[10px] text-slate-400 font-medium">Enterprise v20</span>
          </div>
        </aside>

        <div className="lg:col-span-10 min-w-0 lg:h-[440px] overflow-hidden">
          {activeNav === 'workflows' && (
            <div className="bg-slate-50/50 p-3 flex items-center justify-center lg:h-[440px] overflow-hidden">
              <WorkflowCanvas showWrapper={true} compact className="max-w-2xl w-full bg-white shadow-xs" />
            </div>
          )}

          {/* 3. AI AGENTS VIEW */}
          {activeNav === 'agents' && (
            <AgentsView
              onSwitchToInbox={(convId) => {
                if (convId) setSelectedConvId(convId)
                setActiveNav('inbox')
                setMobilePane('chat')
              }}
            />
          )}

          {/* 4. ANALYTICS VIEW */}
          {activeNav === 'analytics' && <AnalyticsView />}

          {/* 5. CONTACTS VIEW */}
          {activeNav === 'contacts' && (
            <ContactsView
              onSelectContact={(convId) => {
                setSelectedConvId(convId)
                setActiveNav('inbox')
                setMobilePane('chat')
              }}
            />
          )}

          {/* 1. TEAM INBOX VIEW (Adaptive CSS Grid for Mobile / Tablet / Desktop) */}
          {activeNav === 'inbox' && (
            <div className="h-full flex flex-col">
              {/* Mobile Inbox Pane Switcher (< md) */}
              <div className="md:hidden grid grid-cols-3 gap-1 p-2 bg-slate-50 border-b border-slate-100">
                <button
                  type="button"
                  onClick={() => setMobilePane('list')}
                  className={`py-1.5 px-2 rounded-md text-xs font-semibold transition-colors cursor-pointer ${
                    mobilePane === 'list' ? 'bg-white text-blue-600 shadow-2xs' : 'text-slate-600'
                  }`}
                >
                  Inbox (12)
                </button>
                <button
                  type="button"
                  onClick={() => setMobilePane('chat')}
                  className={`py-1.5 px-2 rounded-md text-xs font-semibold transition-colors cursor-pointer ${
                    mobilePane === 'chat' ? 'bg-white text-blue-600 shadow-2xs' : 'text-slate-600'
                  }`}
                >
                  Active Chat
                </button>
                <button
                  type="button"
                  onClick={() => setMobilePane('context')}
                  className={`py-1.5 px-2 rounded-md text-xs font-semibold transition-colors cursor-pointer ${
                    mobilePane === 'context' ? 'bg-white text-blue-600 shadow-2xs' : 'text-slate-600'
                  }`}
                >
                  CRM Context
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-12 flex-1 min-h-0">
                <section
                  className={`${
                    mobilePane === 'list' ? 'flex' : 'hidden md:flex'
                  } md:col-span-4 xl:col-span-3 p-2.5 flex-col bg-white border-b md:border-b-0 md:border-r border-slate-100 select-none min-w-0 min-h-0`}
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <h3 className="text-xs font-bold text-slate-900">Team inbox</h3>
                    <span className="text-[11px] font-semibold text-slate-400">(12)</span>
                  </div>

                  <div className="relative mb-1.5">
                    <Search className="size-3 text-slate-400 absolute left-2.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Search..."
                      className="w-full rounded-lg bg-slate-50/80 border border-slate-200/70 pl-7 pr-2.5 py-1 text-[11px] text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:bg-white transition-all shadow-2xs"
                    />
                  </div>

                  <div className="flex items-center gap-4 border-b border-slate-100 text-[11px] mb-1.5">
                    <button
                      type="button"
                      onClick={() => setActiveInboxTab('open')}
                      className={`relative pb-1 cursor-pointer transition-colors ${
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
                      className={`relative pb-1 cursor-pointer transition-colors ${
                        activeInboxTab === 'assigned'
                          ? 'font-bold text-blue-600'
                          : 'text-slate-500 hover:text-slate-800'
                      }`}
                    >
                      <span>Assigned</span>
                      {activeInboxTab === 'assigned' && (
                        <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600 rounded-xs" />
                      )}
                    </button>
                  </div>

                  <div className="space-y-1 overflow-y-auto thin-scrollbar flex-1 pr-0.5">
                    {filteredConversations.map((conv) => {
                      const isSelected = conv.id === selectedConvId
                      return (
                        <button
                          key={conv.id}
                          type="button"
                          onClick={() => {
                            setSelectedConvId(conv.id)
                            setMobilePane('chat')
                          }}
                          className={`w-full text-left px-2 py-1.5 rounded-lg cursor-pointer transition-all ${
                            isSelected
                              ? 'bg-slate-50 border border-slate-200/80 shadow-2xs'
                              : 'hover:bg-slate-50/60 border border-transparent'
                          }`}
                        >
                          <div className="flex items-center justify-between gap-1.5">
                            <span className="font-semibold text-[11px] text-slate-900 truncate">{conv.title}</span>
                            <span className="text-[10px] text-slate-400 font-normal shrink-0">{conv.time}</span>
                          </div>
                          <p className="mt-0.5 text-[10.5px] text-slate-500 truncate">{conv.preview}</p>
                        </button>
                      )
                    })}
                  </div>
                </section>

                <section
                  className={`${
                    mobilePane === 'chat' ? 'flex' : 'hidden md:flex'
                  } md:col-span-8 xl:col-span-6 p-2.5 sm:p-3 flex-col justify-between bg-white xl:border-r border-slate-100 min-w-0 min-h-0`}
                >
                  <div className="flex-1 flex flex-col min-h-0">
                    <div className="flex items-center justify-between pb-2 border-b border-slate-100 shrink-0">
                      <div className="min-w-0 flex items-center gap-2.5">
                        <h3 className="text-xs font-bold text-slate-900 leading-none truncate">
                          {currentConv.title}
                        </h3>
                        <span className="text-slate-300">·</span>
                        <div className="flex items-center gap-1 text-[11px] text-slate-500 font-medium min-w-0">
                          <WhatsAppIcon className="size-3 shrink-0" />
                          <span className="truncate">{currentConv.channel}</span>
                        </div>
                      </div>
                      <span className="text-[10px] text-slate-400 font-medium shrink-0">Today, 10:42 AM</span>
                    </div>

                    <AnimatePresence mode="wait">
                      <motion.div
                        key={currentConv.id}
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -6 }}
                        transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
                        className="py-2 flex-1 overflow-y-auto thin-scrollbar space-y-1.5"
                      >
                        <div className="max-w-lg bg-slate-50 border border-slate-200/70 text-slate-800 text-[11.5px] px-2.5 py-2 rounded-xl rounded-tl-sm leading-snug shadow-2xs whitespace-pre-line">
                          {currentConv.userMessage}
                        </div>

                        <div className="max-w-xl bg-emerald-50/70 border border-emerald-200/60 text-slate-800 text-[11.5px] px-2.5 py-2 rounded-xl rounded-tr-sm leading-snug shadow-2xs">
                          <p>{currentConv.agentReply}</p>
                          <div className="mt-1 text-[10px] font-medium text-emerald-700 flex items-center gap-1">
                            <span>{currentConv.agentName} · 10:42 AM</span>
                            <CheckCheck className="size-3 text-emerald-600 inline ml-0.5" />
                          </div>
                        </div>

                        {currentReplies.map((r) => (
                          <div
                            key={r.id}
                            className={`max-w-md text-[11.5px] px-2.5 py-1.5 rounded-xl shadow-2xs leading-snug ${
                              r.sender === 'user'
                                ? 'ml-auto bg-blue-600 text-white rounded-tr-sm'
                                : 'bg-emerald-50/80 border border-emerald-200/70 text-slate-800 rounded-tl-sm'
                            }`}
                          >
                            <p>{r.text}</p>
                          </div>
                        ))}

                        <div className="rounded-lg bg-blue-50/80 border border-blue-200/60 px-2.5 py-1 flex items-center gap-1.5 text-[10.5px] font-semibold text-blue-700">
                          <Check className="size-3 text-blue-600 shrink-0" />
                          <span className="truncate">{currentConv.leadStatus}</span>
                        </div>
                      </motion.div>
                    </AnimatePresence>
                  </div>

                  <form onSubmit={handleSendReply} className="mt-1.5 pt-2 border-t border-slate-100 shrink-0">
                    <div className="rounded-lg border border-slate-200 bg-white p-1 flex items-center gap-1.5 shadow-2xs focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-500/10 transition-all">
                      <input
                        type="text"
                        value={replyInput}
                        onChange={(e) => setReplyInput(e.target.value)}
                        placeholder="Reply to the conversation..."
                        className="flex-1 min-w-0 bg-transparent text-xs text-slate-900 placeholder-slate-400 focus:outline-none px-2 py-0.5"
                      />
                      <button
                        type="submit"
                        aria-label="Send reply"
                        className="size-6 rounded-md bg-emerald-500 hover:bg-emerald-600 active:bg-emerald-700 text-white flex items-center justify-center shrink-0 transition-colors shadow-xs cursor-pointer"
                      >
                        <ArrowRight className="size-3.5" />
                      </button>
                    </div>
                  </form>
                </section>

                <aside
                  className={`${
                    mobilePane === 'context' ? 'flex' : 'hidden md:flex'
                  } md:col-span-12 xl:col-span-3 p-2.5 flex-col justify-between gap-2 bg-slate-50/30 xl:bg-white border-t xl:border-t-0 border-slate-100 select-none min-w-0 min-h-0`}
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-1 gap-2">
                    <div>
                      <div className="text-[9px] font-bold tracking-widest text-slate-400 uppercase mb-1">
                        CUSTOMER CONTEXT
                      </div>
                      <div className="rounded-lg bg-emerald-50/70 border border-emerald-200/60 px-2.5 py-1.5">
                        <div className="flex items-center gap-1.5">
                          <Check className="size-3 text-emerald-600 shrink-0" />
                          <span className="text-[11px] font-bold text-emerald-900">Sales-ready</span>
                        </div>
                        <div className="text-[10px] text-emerald-700 pl-4.5 font-medium">
                          Qualified by {currentConv.agentName}
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-[10.5px] font-bold text-slate-900 mb-1">Details</h4>
                      <div className="space-y-1 text-[10.5px]">
                        <div className="flex items-center justify-between gap-2">
                          <span className="text-slate-400">Interest</span>
                          <span className="font-semibold text-slate-900 text-right">{currentConv.details.interest}</span>
                        </div>
                        <div className="flex items-center justify-between gap-2">
                          <span className="text-slate-400">Team</span>
                          <span className="font-semibold text-slate-900 text-right">{currentConv.details.teamSize}</span>
                        </div>
                        <div className="flex items-center justify-between gap-2">
                          <span className="text-slate-400">Source</span>
                          <span className="font-semibold text-slate-900 text-right">{currentConv.details.source}</span>
                        </div>
                        <div className="flex items-center justify-between gap-2">
                          <span className="text-slate-400">Owner</span>
                          <span className="font-semibold text-slate-900 text-right">{currentConv.details.owner}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-lg border border-slate-200 bg-white px-2.5 py-1.5 shadow-2xs">
                    <div className="text-[9px] font-bold tracking-wider uppercase text-slate-400">
                      NEXT STEP
                    </div>
                    <div className="text-[11px] font-bold text-slate-900">{currentConv.nextStep}</div>
                  </div>
                </aside>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
