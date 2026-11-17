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
    <div className={`flex flex-col rounded-2xl border border-slate-200 bg-white divide-y divide-slate-200/80 shadow-xs overflow-hidden ${className}`}>
      {items.map((item, idx) => {
        const isOpen = openIndex === idx
        return (
          <div
            key={item.id || idx}
            className={`transition-colors duration-200 ${isOpen ? 'bg-slate-50/50' : 'hover:bg-slate-50/40'}`}
          >
            <button
              type="button"
              onClick={() => toggle(idx)}
              className="flex w-full items-center justify-between gap-4 py-4 px-5 sm:py-5 sm:px-6 text-left cursor-pointer group focus:outline-none"
              aria-expanded={isOpen}
            >
              <span className={`text-sm sm:text-base font-bold transition-colors leading-snug ${isOpen ? 'text-blue-600' : 'text-slate-900 group-hover:text-blue-600'}`}>
                {item.question}
              </span>
              <div className={`size-8 rounded-lg flex items-center justify-center shrink-0 transition-colors ${isOpen ? 'bg-blue-50 text-blue-600' : 'bg-slate-100 text-slate-500 group-hover:bg-blue-50 group-hover:text-blue-600'}`}>
                <ChevronDown
                  className={`size-4 transition-transform duration-200 ${
                    isOpen ? 'rotate-180 text-blue-600' : 'text-slate-500 group-hover:text-blue-600'
                  }`}
                />
              </div>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <div className="px-5 sm:px-6 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                    <p>{item.answer}</p>
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
