/**
 * Feature Card Component
 * Highlights capabilities, enterprise specs, or value propositions.
 */

import { motion } from 'motion/react'
import type { LucideIcon } from 'lucide-react'

interface FeatureCardProps {
  icon: LucideIcon
  title: string
  description: string
  tag?: string
  color?: string
}

export function FeatureCard({
  icon: Icon,
  title,
  description,
  tag,
}: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      className="relative rounded-2xl border border-slate-200/90 bg-white p-6 shadow-xs hover:border-blue-300 hover:shadow-md transition-all"
    >
      <div className="flex items-center justify-between gap-3">
        <div className="flex size-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
          <Icon className="size-5" />
        </div>
        {tag && (
          <span className="rounded-md bg-slate-100 px-2.5 py-0.5 text-[11px] font-semibold text-slate-600">
            {tag}
          </span>
        )}
      </div>

      <h4 className="mt-4 text-base font-bold text-slate-900">{title}</h4>
      <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">{description}</p>
    </motion.div>
  )
}
