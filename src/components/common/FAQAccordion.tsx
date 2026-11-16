/**
 * FAQ Accordion Component
 * Accessible expand/collapse for frequently asked questions with smooth animation and modern styling.
 */

import { useState } from 'react'
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
    <div className={`space-y-3.5 ${className}`}>
      {items.map((item, idx) => {
        const isOpen = openIndex === idx
        return (
          <div
            key={item.id || idx}
            className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
              isOpen
                ? 'border-blue-300/90 bg-white shadow-lg shadow-blue-500/5 ring-1 ring-blue-500/10'
                : 'border-slate-200/90 bg-white hover:border-slate-300 shadow-xs hover:shadow-sm'
            }`}
          >
            <button
              type="button"
              onClick={() => toggle(idx)}
              className="flex w-full items-center justify-between gap-4 p-5 sm:p-6 text-left text-sm sm:text-base font-bold text-slate-900 focus:outline-none cursor-pointer group"
              aria-expanded={isOpen}
            >
              <span className="flex items-center gap-3">
                <span
                  className={`size-6 rounded-full flex items-center justify-center text-xs font-semibold shrink-0 transition-colors ${
                    isOpen ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-500 group-hover:bg-blue-50 group-hover:text-blue-600'
                  }`}
                >
                  Q
                </span>
                <span className={`transition-colors ${isOpen ? 'text-blue-700' : 'group-hover:text-blue-600'}`}>
                  {item.question}
                </span>
              </span>
              <ChevronDown
                className={`size-5 shrink-0 text-slate-400 transition-transform duration-300 ${
                  isOpen ? 'rotate-180 text-blue-600' : 'group-hover:text-slate-600'
                }`}
              />
            </button>

            {isOpen && (
              <div className="px-5 sm:px-6 pb-6 text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-4 animate-in fade-in-0 duration-200">
                <div className="pl-9">{item.answer}</div>
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}
