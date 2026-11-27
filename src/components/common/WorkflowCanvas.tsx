import { useEffect, useState } from 'react'
import { motion } from 'motion/react'
import {
  CheckCircle2,
  GitBranch,
  Headphones,
  MessageSquare,
  Play,
  Sparkles,
  TrendingUp,
  Zap,
} from 'lucide-react'

export interface WorkflowCanvasProps {
  className?: string
  showWrapper?: boolean
  compact?: boolean
}

type BranchId = 'sales' | 'support'
type NodeId = 'trigger' | 'classifier' | 'sales' | 'support'

interface NodeDetails {
  id: NodeId
  step: string
  label: string
  latency: string
  summary: string
}

const NODE_DETAILS: Record<NodeId, NodeDetails> = {
  trigger: {
    id: 'trigger',
    step: '01 · Trigger',
    label: 'WhatsApp Inbound Webhook',
    latency: '14ms',
    summary: 'Captured inbound message via Meta Cloud v20 and matched workspace routing rules.',
  },
  classifier: {
    id: 'classifier',
    step: '02 · AI Agent',
    label: 'Autonomous Intent Classifier',
    latency: '186ms',
    summary: 'RAG-grounded extraction verified 40 seats, enterprise tier, and 98.4% buyer confidence.',
  },
  sales: {
    id: 'sales',
    step: '03A · Sales Route',
    label: 'Sync CRM & Book Demo',
    latency: '42ms',
    summary: 'Created qualified deal in Kanban pipeline, dispatched MCP calendar link, and alerted AE.',
  },
  support: {
    id: 'support',
    step: '03B · Support Route',
    label: 'Priority Helpdesk Queue',
    latency: '31ms',
    summary: 'Opened SLA-tracked ticket (<45s target) with full AI summary and customer order history.',
  },
}

const easeOutCurve = [0.22, 1, 0.36, 1] as const

export function WorkflowCanvas({
  className = '',
  showWrapper = true,
  compact = false,
}: WorkflowCanvasProps) {
  const [activeBranch, setActiveBranch] = useState<BranchId>('sales')
  const [selectedNode, setSelectedNode] = useState<NodeId>('classifier')
  const [simStep, setSimStep] = useState<number>(3)
  const [isSimulating, setIsSimulating] = useState(false)

  useEffect(() => {
    if (!isSimulating) return

    const t1 = window.setTimeout(() => {
      setSimStep(1)
      setSelectedNode('trigger')
    }, 80)

    const t2 = window.setTimeout(() => {
      setSimStep(2)
      setSelectedNode('classifier')
    }, 680)

    const t3 = window.setTimeout(() => {
      setSimStep(3)
      setSelectedNode(activeBranch)
      setIsSimulating(false)
    }, 1350)

    return () => {
      window.clearTimeout(t1)
      window.clearTimeout(t2)
      window.clearTimeout(t3)
    }
  }, [isSimulating, activeBranch])

  const handleRunSimulation = () => {
    setSimStep(0)
    setIsSimulating(true)
  }

  const handleSelectBranch = (branch: BranchId) => {
    setActiveBranch(branch)
    setSelectedNode(branch)
    setSimStep(3)
  }

  const activeDetails = NODE_DETAILS[selectedNode]
  const triggerActive = simStep >= 1
  const classifierActive = simStep >= 2
  const branchActive = simStep >= 3

  const canvasBody = (
    <div
      className={`relative bg-slate-50/70 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:16px_16px] ${
        compact ? 'p-3' : 'p-4 sm:p-6'
      }`}
    >
      <div className={`mx-auto ${compact ? 'max-w-xl' : 'max-w-lg'}`}>
        {/* Step 01: Trigger Node */}
        <motion.button
          type="button"
          onClick={() => setSelectedNode('trigger')}
          whileHover={{ y: -1 }}
          transition={{ duration: 0.18, ease: easeOutCurve }}
          className={`w-full text-left rounded-xl bg-white border transition-all cursor-pointer ${
            compact ? 'p-2.5' : 'p-3.5 sm:p-4'
          } ${
            selectedNode === 'trigger'
              ? 'border-blue-500 ring-2 ring-blue-500/15 shadow-sm'
              : triggerActive
                ? 'border-slate-200/95 hover:border-blue-300 shadow-2xs'
                : 'border-slate-200/70 opacity-75'
          }`}
        >
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-2.5 min-w-0">
              <div
                className={`${
                  compact ? 'size-7' : 'size-8 sm:size-9'
                } rounded-lg bg-blue-50 text-blue-600 border border-blue-200/80 flex items-center justify-center shrink-0`}
              >
                <Zap className={compact ? 'size-3.5' : 'size-4'} />
              </div>
              <div className="min-w-0">
                <div className="flex items-center gap-1.5">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-blue-600">
                    01 · Trigger
                  </span>
                  <span className="text-[10px] font-mono text-slate-400">· Meta Cloud v20</span>
                </div>
                <p
                  className={`${
                    compact ? 'text-xs' : 'text-xs sm:text-sm'
                  } font-bold text-slate-900 truncate`}
                >
                  WhatsApp Incoming Chat &amp; Webhook
                </p>
              </div>
            </div>
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-sm bg-emerald-50 border border-emerald-200/80 text-[10px] font-mono font-semibold text-emerald-700 shrink-0">
              <MessageSquare className="size-2.5" />
              <span>14ms</span>
            </span>
          </div>
          {!compact && (
            <div className="mt-2.5 pt-2 border-t border-slate-100 flex items-center justify-between gap-2 text-[11px] text-slate-500">
              <span className="truncate font-mono text-slate-600">
                &ldquo;Need WhatsApp API + CRM for 40 seats&rdquo;
              </span>
              <span className="text-[10px] font-mono text-slate-400 shrink-0">Event matched</span>
            </div>
          )}
        </motion.button>

        {/* Connector 01 -> 02 */}
        <div className={`relative flex justify-center ${compact ? 'h-4' : 'h-6'}`}>
          <div
            className={`w-0.5 h-full transition-colors duration-300 ${
              classifierActive ? 'bg-blue-500' : 'bg-slate-300'
            }`}
          />
          {classifierActive && (
            <motion.span
              aria-hidden="true"
              initial={{ top: 0, opacity: 0.4 }}
              animate={{ top: '80%', opacity: 1 }}
              transition={{ duration: 1.1, repeat: Infinity, ease: 'linear' }}
              className="absolute left-1/2 -translate-x-1/2 size-1.5 rounded-xs bg-blue-600 shadow-xs"
            />
          )}
        </div>

        {/* Step 02: AI Intent Qualification Node */}
        <motion.button
          type="button"
          onClick={() => setSelectedNode('classifier')}
          whileHover={{ y: -1 }}
          transition={{ duration: 0.18, ease: easeOutCurve }}
          className={`w-full text-left rounded-xl bg-white border transition-all cursor-pointer ${
            compact ? 'p-2.5' : 'p-3.5 sm:p-4'
          } ${
            selectedNode === 'classifier'
              ? 'border-purple-500 ring-2 ring-purple-500/15 shadow-sm'
              : classifierActive
                ? 'border-purple-200 hover:border-purple-400 shadow-2xs'
                : 'border-slate-200/70 opacity-70'
          }`}
        >
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-2.5 min-w-0">
              <div
                className={`${
                  compact ? 'size-7' : 'size-8 sm:size-9'
                } rounded-lg bg-purple-50 text-purple-600 border border-purple-200/80 flex items-center justify-center shrink-0`}
              >
                <Sparkles className={compact ? 'size-3.5' : 'size-4'} />
              </div>
              <div className="min-w-0">
                <div className="flex items-center gap-1.5">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-purple-600">
                    02 · AI Qualification
                  </span>
                  <span className="text-[10px] font-mono text-slate-400">· RAG Grounded</span>
                </div>
                <p
                  className={`${
                    compact ? 'text-xs' : 'text-xs sm:text-sm'
                  } font-bold text-slate-900 truncate`}
                >
                  Extract Intent, Team Size &amp; Urgency
                </p>
              </div>
            </div>
            <span className="px-2 py-0.5 rounded-sm bg-purple-50 border border-purple-200/80 text-[10px] font-mono font-semibold text-purple-700 shrink-0">
              98.4% Conf.
            </span>
          </div>

          <div
            className={`${
              compact ? 'mt-2 pt-1.5' : 'mt-2.5 pt-2'
            } border-t border-slate-100 flex flex-wrap items-center justify-between gap-2 text-[10.5px] font-mono`}
          >
            <span className="text-slate-600">
              Seats: <strong className="text-slate-900">40</strong> · Score:{' '}
              <strong className="text-emerald-600">94/100</strong>
            </span>
            <span className="text-purple-700 font-semibold">Zero-Hallucination Active</span>
          </div>
        </motion.button>

        {/* Branching Connector 02 -> 03A / 03B */}
        <div className={`relative ${compact ? 'h-5' : 'h-7'}`}>
          <div
            className={`absolute top-0 left-1/2 -translate-x-1/2 w-0.5 h-1/2 transition-colors duration-300 ${
              branchActive ? 'bg-purple-500' : 'bg-slate-300'
            }`}
          />
          {/* Left half horizontal bar */}
          <div
            className={`absolute top-1/2 left-[25%] right-1/2 h-0.5 transition-colors duration-300 ${
              branchActive && activeBranch === 'sales' ? 'bg-emerald-500' : 'bg-slate-300'
            }`}
          />
          {/* Right half horizontal bar */}
          <div
            className={`absolute top-1/2 left-1/2 right-[25%] h-0.5 transition-colors duration-300 ${
              branchActive && activeBranch === 'support' ? 'bg-blue-500' : 'bg-slate-300'
            }`}
          />
          {/* Left vertical drop */}
          <div
            className={`absolute top-1/2 left-[25%] -translate-x-1/2 w-0.5 h-1/2 transition-colors duration-300 ${
              branchActive && activeBranch === 'sales' ? 'bg-emerald-500' : 'bg-slate-300'
            }`}
          />
          {/* Right vertical drop */}
          <div
            className={`absolute top-1/2 right-[25%] translate-x-1/2 w-0.5 h-1/2 transition-colors duration-300 ${
              branchActive && activeBranch === 'support' ? 'bg-blue-500' : 'bg-slate-300'
            }`}
          />
        </div>

        {/* Step 03: Multi-Branch Action Nodes */}
        <div className={`grid grid-cols-2 ${compact ? 'gap-2.5' : 'gap-3 sm:gap-3.5'}`}>
          {/* Branch A: Sales CRM */}
          <motion.button
            type="button"
            onClick={() => handleSelectBranch('sales')}
            whileHover={{ y: -1 }}
            transition={{ duration: 0.18, ease: easeOutCurve }}
            className={`text-left rounded-xl bg-white border transition-all cursor-pointer ${
              compact ? 'p-2.5' : 'p-3 sm:p-3.5'
            } ${
              activeBranch === 'sales' && branchActive
                ? 'border-emerald-400 ring-2 ring-emerald-500/15 shadow-sm'
                : 'border-slate-200/90 hover:border-emerald-300 opacity-80'
            }`}
          >
            <div className="flex items-center justify-between gap-1.5">
              <div className="flex items-center gap-1.5 min-w-0">
                <div className="size-6 rounded-md bg-emerald-50 text-emerald-600 border border-emerald-200/80 flex items-center justify-center shrink-0">
                  <TrendingUp className="size-3.5" />
                </div>
                <span className="text-[10px] font-mono font-bold uppercase text-emerald-700 truncate">
                  High Intent
                </span>
              </div>
              {activeBranch === 'sales' && branchActive && (
                <CheckCircle2 className="size-3.5 text-emerald-600 shrink-0" />
              )}
            </div>
            <p className="mt-1.5 text-xs font-bold text-slate-900 leading-snug">
              Route to Sales CRM
            </p>
            <p className="mt-0.5 text-[10.5px] text-slate-500 leading-snug line-clamp-2">
              Create Kanban deal &amp; book demo via MCP calendar
            </p>
          </motion.button>

          {/* Branch B: Support Queue */}
          <motion.button
            type="button"
            onClick={() => handleSelectBranch('support')}
            whileHover={{ y: -1 }}
            transition={{ duration: 0.18, ease: easeOutCurve }}
            className={`text-left rounded-xl bg-white border transition-all cursor-pointer ${
              compact ? 'p-2.5' : 'p-3 sm:p-3.5'
            } ${
              activeBranch === 'support' && branchActive
                ? 'border-blue-400 ring-2 ring-blue-500/15 shadow-sm'
                : 'border-slate-200/90 hover:border-blue-300 opacity-80'
            }`}
          >
            <div className="flex items-center justify-between gap-1.5">
              <div className="flex items-center gap-1.5 min-w-0">
                <div className="size-6 rounded-md bg-blue-50 text-blue-600 border border-blue-200/80 flex items-center justify-center shrink-0">
                  <Headphones className="size-3.5" />
                </div>
                <span className="text-[10px] font-mono font-bold uppercase text-blue-700 truncate">
                  Support Need
                </span>
              </div>
              {activeBranch === 'support' && branchActive && (
                <CheckCircle2 className="size-3.5 text-blue-600 shrink-0" />
              )}
            </div>
            <p className="mt-1.5 text-xs font-bold text-slate-900 leading-snug">
              Assign Support Queue
            </p>
            <p className="mt-0.5 text-[10.5px] text-slate-500 leading-snug line-clamp-2">
              Open SLA ticket (&lt;45s) &amp; hand off full transcript
            </p>
          </motion.button>
        </div>

        {/* Selected Node Trace Bar (Full mode only) */}
        {!compact && (
          <div className="mt-4 rounded-lg bg-white/95 border border-slate-200/90 px-3 py-2.5 shadow-2xs flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div className="min-w-0">
              <div className="flex items-center gap-2 text-[10.5px] font-mono">
                <span className="font-bold text-blue-600 uppercase">{activeDetails.step}</span>
                <span className="text-slate-300">·</span>
                <span className="font-semibold text-slate-800 truncate">{activeDetails.label}</span>
              </div>
              <p className="text-[11px] text-slate-500 mt-0.5 leading-snug">
                {activeDetails.summary}
              </p>
            </div>
            <span className="px-2 py-1 rounded-sm bg-slate-100 text-slate-700 font-mono text-[10px] font-semibold shrink-0 self-start sm:self-center">
              {activeDetails.latency}
            </span>
          </div>
        )}
      </div>
    </div>
  )

  if (!showWrapper) {
    return <div className={`overflow-hidden ${className}`}>{canvasBody}</div>
  }

  return (
    <div
      className={`rounded-2xl border border-slate-200/90 bg-white overflow-hidden text-left select-none ${className}`}
    >
      {/* Top Canvas Header */}
      <div
        className={`flex items-center justify-between gap-2 border-b border-slate-200/80 bg-white ${
          compact ? 'px-3 py-2' : 'px-4 py-3'
        }`}
      >
        <div className="flex items-center gap-2 min-w-0">
          <span className="size-2 rounded-xs bg-emerald-500 animate-pulse shrink-0" />
          <GitBranch className="size-3.5 text-blue-600 shrink-0" />
          <span className="text-[11px] font-mono font-bold text-slate-800 tracking-tight truncate">
            FLOW: OMNI_LEAD_ROUTER_V4
          </span>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <div className="hidden sm:flex items-center bg-slate-100 p-0.5 rounded-md text-[10px] font-mono font-semibold">
            <button
              type="button"
              onClick={() => handleSelectBranch('sales')}
              className={`px-2 py-0.5 rounded-xs transition-colors cursor-pointer ${
                activeBranch === 'sales'
                  ? 'bg-white text-emerald-700 shadow-2xs'
                  : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              Sales
            </button>
            <button
              type="button"
              onClick={() => handleSelectBranch('support')}
              className={`px-2 py-0.5 rounded-xs transition-colors cursor-pointer ${
                activeBranch === 'support'
                  ? 'bg-white text-blue-700 shadow-2xs'
                  : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              Support
            </button>
          </div>

          <button
            type="button"
            onClick={handleRunSimulation}
            disabled={isSimulating}
            className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-blue-600 hover:bg-blue-700 disabled:opacity-60 text-white text-[10.5px] font-semibold transition-colors cursor-pointer shadow-2xs"
          >
            <Play className="size-2.5 fill-current" />
            <span>{isSimulating ? 'Running…' : 'Simulate'}</span>
          </button>
        </div>
      </div>

      {canvasBody}

      {/* Bottom Status Bar */}
      <div
        className={`flex items-center justify-between gap-2 border-t border-slate-200/80 bg-white text-[10.5px] font-mono text-slate-500 ${
          compact ? 'px-3 py-1.5' : 'px-4 py-2.5'
        }`}
      >
        <div className="flex items-center gap-1.5 min-w-0">
          <CheckCircle2 className="size-3 text-emerald-600 shrink-0" />
          <span className="truncate">
            {activeBranch === 'sales'
              ? 'Active path: Trigger → AI Qualifier → Sales CRM'
              : 'Active path: Trigger → AI Qualifier → Support Queue'}
          </span>
        </div>
        <span className="text-slate-400 shrink-0">Deterministic JSON</span>
      </div>
    </div>
  )
}
