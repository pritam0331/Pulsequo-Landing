import { motion } from 'motion/react'
import { MessageSquare, Sparkles, ArrowUpRight, Headphones } from 'lucide-react'

const easeOutCurve = [0.22, 1, 0.36, 1] as const

interface WorkflowCanvasProps {
  className?: string
  showWrapper?: boolean
}

export function WorkflowCanvas({ className = '', showWrapper = true }: WorkflowCanvasProps) {
  const content = (
    <div className="w-full">
      {/* Header bar: Title on left */}
      <div className="border-b border-slate-200/80 pb-4 mb-6">
        <h4 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight">
          Lead qualification
        </h4>
      </div>

      {/* Visual Flow Tree Container */}
      <div className="py-2">
        {/* Step 1: TRIGGER */}
        <motion.div
          initial={{ opacity: 0, y: -16, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5, ease: easeOutCurve }}
          whileHover={{ y: -3, scale: 1.01, transition: { duration: 0.15 } }}
          className="max-w-md mx-auto bg-white rounded-xl border border-slate-200/90 shadow-xs p-4 flex items-center gap-3.5 hover:border-emerald-300 hover:shadow-sm transition-all"
        >
          <div className="size-11 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 border border-emerald-100">
            <MessageSquare className="size-5" />
          </div>
          <div>
            <span className="text-[10px] font-bold tracking-wider uppercase text-slate-400 block font-mono">
              TRIGGER
            </span>
            <span className="text-sm font-bold text-slate-900 block mt-0.5">
              New WhatsApp message
            </span>
          </div>
        </motion.div>

        {/* Connector 1: Vertical down line with animated traveling pulse packet */}
        <div className="relative w-0.5 h-7 mx-auto overflow-hidden bg-slate-200 my-0.5">
          <motion.div
            initial={{ scaleY: 0, opacity: 0 }}
            whileInView={{ scaleY: 1, opacity: 1 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.35, delay: 0.2, ease: easeOutCurve }}
            className="w-full h-full bg-blue-500 origin-top"
          />
          <motion.div
            animate={{ y: [-10, 32] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: 'linear' }}
            className="absolute top-0 left-0 w-full h-3 bg-gradient-to-b from-transparent via-white to-blue-200"
          />
        </div>

        {/* Step 2: AI AGENT */}
        <motion.div
          initial={{ opacity: 0, y: -12, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5, delay: 0.35, ease: easeOutCurve }}
          whileHover={{ y: -3, scale: 1.01, transition: { duration: 0.15 } }}
          className="max-w-md mx-auto bg-white rounded-xl border-2 border-blue-500/80 shadow-md shadow-blue-500/10 p-4 flex items-center gap-3.5 hover:border-blue-600 transition-all"
        >
          <div className="size-11 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 border border-blue-100">
            <Sparkles className="size-5" />
          </div>
          <div>
            <span className="text-[10px] font-bold tracking-wider uppercase text-blue-600 block font-mono">
              AI AGENT
            </span>
            <span className="text-sm font-bold text-slate-900 block mt-0.5">
              Understand & qualify
            </span>
            <span className="text-xs text-slate-500 block mt-0.5">
              Intent · Team size · Customer need
            </span>
          </div>
        </motion.div>

        {/* Connector 2: Branching T-Junction with Labels and animated pulse */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0.8 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.35, delay: 0.5, ease: easeOutCurve }}
          className="relative max-w-lg mx-auto h-11 my-0.5"
        >
          {/* Vertical drop from AI agent */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0.5 h-4.5 bg-blue-400" />
          
          {/* Horizontal crossbar connecting the two branches */}
          <div className="absolute top-4.5 left-[25%] right-[25%] h-0.5 bg-blue-400" />
          
          {/* Left vertical drop to Sales */}
          <div className="absolute top-4.5 left-[25%] -translate-x-1/2 w-0.5 h-6.5 bg-blue-400" />
          
          {/* Right vertical drop to Support */}
          <div className="absolute top-4.5 right-[25%] translate-x-1/2 w-0.5 h-6.5 bg-blue-400" />

          {/* Left Branch Label: Sales enquiry */}
          <span className="absolute top-0 left-[10%] sm:left-[14%] text-[11px] font-medium text-slate-500 select-none">
            Sales enquiry
          </span>

          {/* Right Branch Label: Needs help */}
          <span className="absolute top-0 right-[10%] sm:right-[14%] text-[11px] font-medium text-slate-500 select-none">
            Needs help
          </span>
        </motion.div>

        {/* Step 3: Branch Actions (Route to Sales & Route to Support) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-lg mx-auto">
          {/* Action A: Route to sales */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: 0.65, ease: easeOutCurve }}
            whileHover={{ y: -3, scale: 1.015, transition: { duration: 0.15 } }}
            className="bg-white rounded-xl border border-slate-200/90 p-4 shadow-xs hover:border-blue-400 hover:shadow-sm transition-all"
          >
            <div className="flex items-center gap-2 text-blue-600">
              <ArrowUpRight className="size-5 shrink-0" />
              <span className="text-sm font-bold text-slate-900">Route to sales</span>
            </div>
            <p className="text-xs text-slate-500 mt-1 pl-7">
              Create a lead + notify your team
            </p>
          </motion.div>

          {/* Action B: Route to support */}
          <motion.div
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: 0.75, ease: easeOutCurve }}
            whileHover={{ y: -3, scale: 1.015, transition: { duration: 0.15 } }}
            className="bg-white rounded-xl border border-slate-200/90 p-4 shadow-xs hover:border-blue-400 hover:shadow-sm transition-all"
          >
            <div className="flex items-center gap-2 text-blue-600">
              <Headphones className="size-5 shrink-0" />
              <span className="text-sm font-bold text-slate-900">Route to support</span>
            </div>
            <p className="text-xs text-slate-500 mt-1 pl-7">
              Assign the right specialist
            </p>
          </motion.div>
        </div>
      </div>

      {/* Footer Caption */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.9 }}
        className="text-xs sm:text-sm font-medium text-slate-500 text-center mt-6"
      >
        Your logic. Your customer journey.
      </motion.p>
    </div>
  )

  if (!showWrapper) {
    return <div className={className}>{content}</div>
  }

  return (
    <div
      className={`rounded-2xl sm:rounded-3xl bg-slate-50/70 border border-slate-200/80 p-6 sm:p-8 shadow-sm ${className}`}
    >
      {content}
    </div>
  )
}

