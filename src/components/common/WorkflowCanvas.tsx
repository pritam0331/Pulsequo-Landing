import { motion } from 'motion/react'
import { MessageSquare, Sparkles, ArrowUpRight, Headphones } from 'lucide-react'

const easeOutCurve = [0.22, 1, 0.36, 1] as const

interface WorkflowCanvasProps {
  className?: string
  showWrapper?: boolean
  compact?: boolean
}

export function WorkflowCanvas({ className = '', showWrapper = true, compact = false }: WorkflowCanvasProps) {
  const content = (
    <div className="w-full">
      {/* Header bar: Title on left */}
      <div className={`border-b border-slate-200/80 ${compact ? 'pb-2.5 mb-3' : 'pb-4 mb-6'} flex items-center justify-between`}>
        <h4 className={`${compact ? 'text-sm sm:text-base' : 'text-base sm:text-lg'} font-bold text-black tracking-tight`}>
          Lead qualification
        </h4>
        <span className="text-xs font-mono text-slate-500">
          3-step live flow
        </span>
      </div>

      {/* Visual Flow Tree Container */}
      <div className={compact ? 'py-0.5' : 'py-2'}>
        {/* Step 1: TRIGGER */}
        <motion.div
          initial={{ opacity: 0, y: -16, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 'some' }}
          transition={{ duration: 0.5, ease: easeOutCurve }}
          whileHover={{ y: -4, scale: 1.015, transition: { type: 'spring', stiffness: 360, damping: 22 } }}
          className={`max-w-md mx-auto bg-white rounded-xl border border-slate-200/90 shadow-xs ${compact ? 'p-2.5 gap-3' : 'p-4 gap-3.5'} flex items-center hover:border-emerald-400 hover:shadow-md hover:shadow-emerald-500/10 transition-colors`}
        >
          <div className={`${compact ? 'size-9' : 'size-11'} rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 border border-emerald-100`}>
            <MessageSquare className={compact ? 'size-4' : 'size-5'} />
          </div>
          <div className="min-w-0">
            <span className="text-[11px] font-semibold text-emerald-700 block leading-tight">
              Trigger · WhatsApp
            </span>
            <span className={`${compact ? 'text-xs sm:text-sm' : 'text-sm'} font-bold text-black block mt-0.5`}>
              New WhatsApp message
            </span>
          </div>
        </motion.div>

        {/* Connector 1: Vertical down line with animated traveling pulse packet */}
        <div className={`relative w-0.5 ${compact ? 'h-5' : 'h-8'} mx-auto overflow-hidden bg-slate-200 my-0.5`}>
          <motion.div
            initial={{ scaleY: 0, opacity: 0 }}
            whileInView={{ scaleY: 1, opacity: 1 }}
            viewport={{ once: true, amount: 'some' }}
            transition={{ duration: 0.35, delay: 0.2, ease: easeOutCurve }}
            className="w-full h-full bg-blue-400/70 origin-top"
          />
          <motion.div
            animate={{ y: [-12, 36] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
            className="absolute top-0 left-0 w-full h-4 bg-gradient-to-b from-transparent via-blue-600 to-cyan-300"
          />
        </div>

        {/* Step 2: AI AGENT */}
        <motion.div
          initial={{ opacity: 0, y: -12, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 'some' }}
          transition={{ duration: 0.5, delay: 0.32, ease: easeOutCurve }}
          whileHover={{ y: -4, scale: 1.015, transition: { type: 'spring', stiffness: 360, damping: 22 } }}
          className={`relative max-w-md mx-auto bg-white rounded-xl border-2 border-blue-500/85 shadow-md shadow-blue-500/10 ${compact ? 'p-2.5 gap-3' : 'p-4 gap-3.5'} flex items-center hover:border-blue-600 transition-colors`}
        >
          <motion.div
            animate={{ opacity: [0.35, 0.75, 0.35], scale: [1, 1.06, 1] }}
            transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut' }}
            className={`${compact ? 'size-9' : 'size-11'} rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 border border-blue-100`}
          >
            <Sparkles className={compact ? 'size-4' : 'size-5'} />
          </motion.div>
          <div className="min-w-0">
            <span className="text-[11px] font-semibold text-blue-600 block leading-tight">
              AI Agent · Gemini Engine
            </span>
            <span className={`${compact ? 'text-xs sm:text-sm' : 'text-sm'} font-bold text-black block mt-0.5`}>
              Understand & qualify
            </span>
            <span className="text-[11px] sm:text-xs text-slate-500 block mt-0.5">
              Intent · Team size · Customer need
            </span>
          </div>
        </motion.div>

        {/* Connector 2: Branching T-Junction with animated packets into both legs */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0.85 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true, amount: 'some' }}
          transition={{ duration: 0.4, delay: 0.48, ease: easeOutCurve }}
          className={`relative max-w-lg mx-auto ${compact ? 'h-9' : 'h-12'} my-0.5`}
        >
          {/* Vertical drop from AI agent */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0.5 h-5 bg-blue-300 overflow-hidden">
            <motion.div
              animate={{ y: [-10, 22] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'linear', delay: 0.4 }}
              className="w-full h-3 bg-gradient-to-b from-transparent via-blue-600 to-cyan-300"
            />
          </div>

          {/* Horizontal crossbar connecting the two branches */}
          <div className="absolute top-5 left-[25%] right-[25%] h-0.5 bg-blue-300 overflow-hidden">
            <motion.div
              animate={{ x: ['50%', '-100%'] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: 'linear', delay: 0.7 }}
              className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-l from-transparent via-blue-600 to-cyan-300"
            />
            <motion.div
              animate={{ x: ['50%', '200%'] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: 'linear', delay: 0.7 }}
              className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-transparent via-blue-600 to-cyan-300"
            />
          </div>

          {/* Left vertical drop to Sales */}
          <div className="absolute top-5 left-[25%] -translate-x-1/2 w-0.5 h-7 bg-blue-300 overflow-hidden">
            <motion.div
              animate={{ y: [-12, 30] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: 'linear', delay: 1.1 }}
              className="w-full h-3.5 bg-gradient-to-b from-transparent via-blue-600 to-cyan-300"
            />
          </div>

          {/* Right vertical drop to Support */}
          <div className="absolute top-5 right-[25%] translate-x-1/2 w-0.5 h-7 bg-blue-300 overflow-hidden">
            <motion.div
              animate={{ y: [-12, 30] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: 'linear', delay: 1.35 }}
              className="w-full h-3.5 bg-gradient-to-b from-transparent via-purple-600 to-blue-400"
            />
          </div>

          {/* Left Branch Label */}
          <span className="absolute top-0.5 left-[8%] sm:left-[12%] text-[11px] font-medium text-slate-500 select-none">
            Sales enquiry
          </span>

          {/* Right Branch Label */}
          <span className="absolute top-0.5 right-[8%] sm:right-[12%] text-[11px] font-medium text-slate-500 select-none">
            Needs help
          </span>
        </motion.div>

        {/* Step 3: Branch Actions (Route to Sales & Route to Support) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-lg mx-auto">
          {/* Action A: Route to sales */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 'some' }}
            transition={{ duration: 0.5, delay: 0.6, ease: easeOutCurve }}
            whileHover={{ y: -4, scale: 1.02, transition: { type: 'spring', stiffness: 360, damping: 22 } }}
            className={`bg-white rounded-xl border border-slate-200/90 ${compact ? 'p-3' : 'p-4'} shadow-xs hover:border-blue-400 hover:shadow-md hover:shadow-blue-500/10 transition-colors`}
          >
            <div className="flex items-center gap-2 text-blue-600">
              <ArrowUpRight className={compact ? 'size-4 shrink-0' : 'size-5 shrink-0'} />
              <span className={`${compact ? 'text-xs sm:text-sm' : 'text-sm'} font-bold text-black`}>Route to sales</span>
            </div>
            <p className={`text-[11px] sm:text-xs text-slate-500 mt-1 ${compact ? 'pl-6' : 'pl-7'}`}>
              Create a lead + notify your team
            </p>
          </motion.div>

          {/* Action B: Route to support */}
          <motion.div
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 'some' }}
            transition={{ duration: 0.5, delay: 0.7, ease: easeOutCurve }}
            whileHover={{ y: -4, scale: 1.02, transition: { type: 'spring', stiffness: 360, damping: 22 } }}
            className={`bg-white rounded-xl border border-slate-200/90 ${compact ? 'p-3' : 'p-4'} shadow-xs hover:border-purple-400 hover:shadow-md hover:shadow-purple-500/10 transition-colors`}
          >
            <div className="flex items-center gap-2 text-purple-600">
              <Headphones className={compact ? 'size-4 shrink-0' : 'size-5 shrink-0'} />
              <span className={`${compact ? 'text-xs sm:text-sm' : 'text-sm'} font-bold text-black`}>Route to support</span>
            </div>
            <p className={`text-[11px] sm:text-xs text-slate-500 mt-1 ${compact ? 'pl-6' : 'pl-7'}`}>
              Assign the right specialist
            </p>
          </motion.div>
        </div>
      </div>

      {/* Footer Caption */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 'some' }}
        transition={{ duration: 0.5, delay: 0.85 }}
        className={`text-xs sm:text-sm font-medium text-slate-500 text-center ${compact ? 'mt-3' : 'mt-6'}`}
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
      className={`rounded-2xl sm:rounded-3xl bg-slate-50/80 border border-slate-200/80 ${compact ? 'p-4 sm:p-5' : 'p-6 sm:p-8'} shadow-sm ${className}`}
    >
      {content}
    </div>
  )
}

