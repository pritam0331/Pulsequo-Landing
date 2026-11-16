/**
 * FAQ Accordion Component
 * Accessible expand/collapse for frequently asked questions with smooth animation and modern styling.
 */

import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { ChevronDown } from 'lucide-react'
import type { FAQItem } from '../../data/faqs'

interface FAQAccordionProps {
  items: FAQItem[]
  className?: string
}

export function FAQAccordion({ items, className = '' }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx)
  }

  return (
    <div className={`space-y-2.5 ${className}`}>
      {items.map((item, idx) => {
        const isOpen = openIndex === idx
        return (
          <div
            key={item.id || idx}
            className={`rounded-xl border transition-all duration-200 overflow-hidden ${
              isOpen
                ? 'border-blue-500 bg-white shadow-xs ring-1 ring-blue-500/20'
                : 'border-slate-300/85 bg-white hover:border-slate-400 shadow-2xs'
            }`}
          >
            <button
              type="button"
              onClick={() => toggle(idx)}
              className="flex w-full items-center justify-between gap-3.5 py-3 px-4 sm:py-3.5 sm:px-5 text-left text-xs sm:text-sm font-bold text-slate-900 focus:outline-none cursor-pointer group"
              aria-expanded={isOpen}
            >
              <span className="flex items-center gap-2.5">
                <span
                  className={`size-5 rounded-md flex items-center justify-center text-[10px] font-bold shrink-0 transition-colors ${
                    isOpen ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-500 group-hover:bg-blue-50 group-hover:text-blue-600'
                  }`}
                >
                  Q
                </span>
                <span className={`transition-colors leading-snug ${isOpen ? 'text-blue-700' : 'group-hover:text-blue-600'}`}>
                  {item.question}
                </span>
              </span>
              <ChevronDown
                className={`size-4 shrink-0 text-slate-400 transition-transform duration-200 ${
                  isOpen ? 'rotate-180 text-blue-600' : 'group-hover:text-slate-600'
                }`}
              />
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <div className="px-4 sm:px-5 pb-3.5 pt-2 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                    <div className="pl-7.5">{item.answer}</div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )
      })}
    </div>
  )
}
