import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { ChevronDown, Minus, Plus } from 'lucide-react'
import type { FAQItem } from '../../data/faqs'

interface FAQAccordionProps {
  items: FAQItem[]
  className?: string
  maxHeight?: string
  allowMultiple?: boolean
  headerTitle?: string
}

export function FAQAccordion({
  items,
  className = '',
  maxHeight = '440px',
  allowMultiple = false,
  headerTitle = 'Platform & Architecture Answers',
}: FAQAccordionProps) {
  const [openIndices, setOpenIndices] = useState<number[]>([0])

  const toggle = (idx: number) => {
    setOpenIndices((prev) => {
      const isAlreadyOpen = prev.includes(idx)
      if (allowMultiple) {
        return isAlreadyOpen ? prev.filter((i) => i !== idx) : [...prev, idx]
      }
      return isAlreadyOpen ? [] : [idx]
    })
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      className={`w-full rounded-2xl border border-slate-200/90 bg-slate-50/70 p-3 sm:p-4 shadow-2xs ${className}`}
    >
      <div className="flex items-center justify-between gap-3 px-1.5 pb-3 mb-2 border-b border-slate-200/80">
        <span className="text-xs sm:text-[13px] font-bold text-slate-900 tracking-tight">
          {headerTitle}
        </span>
        <span className="text-[11px] font-mono font-semibold text-slate-500">
          {items.length} topics
        </span>
      </div>

      <div
        style={{ maxHeight }}
        className="flex flex-col gap-2.5 overflow-y-auto thin-scrollbar pr-1 sm:pr-1.5"
      >
        {items.map((item, idx) => {
          const isOpen = openIndices.includes(idx)
          const numberLabel = String(idx + 1).padStart(2, '0')
          const panelId = `faq-panel-${item.id || idx}`
          const buttonId = `faq-trigger-${item.id || idx}`

          return (
            <div
              key={item.id || idx}
              data-cursor="glass"
              className={`pq-glow-card shrink-0 rounded-xl border transition-all duration-200 overflow-hidden ${
                isOpen
                  ? 'bg-white border-blue-500/80 ring-2 ring-blue-600/10 shadow-md shadow-blue-950/5'
                  : 'bg-white border-slate-200/90 hover:border-blue-300/80 shadow-2xs hover:shadow-xs'
              }`}
            >
              <button
                id={buttonId}
                type="button"
                onClick={() => toggle(idx)}
                aria-expanded={isOpen}
                aria-controls={panelId}
                className="flex w-full items-center justify-between gap-3 sm:gap-4 px-4 py-3.5 sm:px-5 sm:py-4 text-left cursor-pointer group focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-inset"
              >
                <div className="flex items-start sm:items-center gap-3 min-w-0 flex-1">
                  <span
                    className={`inline-flex items-center justify-center px-2 py-0.5 rounded-sm font-mono text-[11px] font-bold shrink-0 mt-0.5 sm:mt-0 transition-colors ${
                      isOpen
                        ? 'bg-blue-600 text-white'
                        : 'bg-slate-100 text-slate-500 group-hover:bg-blue-50 group-hover:text-blue-600'
                    }`}
                  >
                    {numberLabel}
                  </span>

                  <div className="min-w-0 flex-1">
                    <span
                      className={`block text-xs sm:text-[15px] font-bold leading-snug transition-colors ${
                        isOpen ? 'text-blue-700' : 'text-slate-900 group-hover:text-blue-600'
                      }`}
                    >
                      {item.question}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  {item.category && (
                    <span className="hidden md:inline-block px-2 py-0.5 rounded-sm bg-slate-100/90 border border-slate-200/80 text-[10px] font-mono font-semibold text-slate-500">
                      {item.category}
                    </span>
                  )}
                  <span
                    className={`size-7 sm:size-8 rounded-lg flex items-center justify-center shrink-0 border transition-all duration-200 ${
                      isOpen
                        ? 'bg-blue-50 border-blue-200 text-blue-600'
                        : 'bg-slate-50 border-slate-200/80 text-slate-500 group-hover:bg-blue-50 group-hover:border-blue-200 group-hover:text-blue-600'
                    }`}
                  >
                    {isOpen ? (
                      <Minus className="size-3.5 sm:size-4" />
                    ) : (
                      <Plus className="size-3.5 sm:size-4 sm:hidden" />
                    )}
                    {!isOpen && <ChevronDown className="hidden sm:block size-4" />}
                  </span>
                </div>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    id={panelId}
                    role="region"
                    aria-labelledby={buttonId}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="px-4 sm:px-5 pb-4 pt-2.5 sm:pl-[3.5rem] text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/50">
                      <p>{item.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          )
        })}
      </div>
    </motion.div>
  )
}
