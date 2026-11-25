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
  maxHeight?: string
}

export function FAQAccordion({
  items,
  className = '',
  maxHeight = 'max-h-[380px] sm:max-h-[420px]',
}: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      data-cursor="glass"
      className={`w-full flex flex-col rounded-2xl border border-slate-200 hover:border-blue-300/70 bg-white shadow-xs hover:shadow-md transition-all duration-200 overflow-hidden ${className}`}
    >
      <div className={`w-full overflow-y-auto divide-y divide-slate-200/80 thin-scrollbar ${maxHeight}`}>
        {items.map((item, idx) => {
          const isOpen = openIndex === idx
          return (
            <motion.div
              key={item.id || idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: Math.min(idx * 0.04, 0.24), ease: [0.22, 1, 0.36, 1] }}
              className={`transition-colors duration-200 ${isOpen ? 'bg-slate-50/60' : 'hover:bg-blue-50/30'}`}
            >
              <button
                type="button"
                onClick={() => toggle(idx)}
                className="flex w-full items-center justify-between gap-4 py-5 px-6 sm:px-8 text-left cursor-pointer group focus:outline-none"
                aria-expanded={isOpen}
              >
                <span className={`text-sm sm:text-base font-bold transition-all duration-200 leading-snug group-hover:translate-x-0.5 ${isOpen ? 'text-blue-600' : 'text-slate-900 group-hover:text-blue-600'}`}>
                  {item.question}
                </span>
                <motion.div
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ type: 'spring', stiffness: 320, damping: 24 }}
                  className={`size-8 rounded-lg flex items-center justify-center shrink-0 transition-all duration-200 group-hover:scale-105 ${isOpen ? 'bg-blue-50 text-blue-600' : 'bg-slate-100 text-slate-500 group-hover:bg-blue-50 group-hover:text-blue-600'}`}
                >
                  <ChevronDown className="size-4" />
                </motion.div>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 sm:px-8 pb-5 pt-2.5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                      <p>{item.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          )
        })}
      </div>
    </motion.div>
  )
}
