/**
 * Section Heading Component
 * Consistent typography for marketing page sections with badge, title, and description.
 */

import { motion } from 'motion/react'

interface SectionHeadingProps {
  badge?: string
  title: string
  description?: string
  align?: 'left' | 'center'
  dark?: boolean
  className?: string
}

export function SectionHeading({
  badge,
  title,
  description,
  align = 'center',
  dark = false,
  className = '',
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className={`max-w-3xl ${
        align === 'center' ? 'mx-auto text-center' : 'text-left'
      } ${className}`}
    >
      {badge && (
        <div className={`inline-flex items-center gap-2 px-2.5 py-0.5 rounded-sm text-xs font-mono font-semibold tracking-wider uppercase mb-3.5 shadow-2xs ${
          dark
            ? 'bg-blue-950/80 text-blue-300 border border-blue-700/60'
            : 'bg-blue-50 text-blue-700 border border-blue-200/90'
        }`}>
          <span className="size-1.5 rounded-xs bg-blue-500 animate-pulse" />
          <span>{badge}</span>
        </div>
      )}

      <h2
        className={`text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-[1.15] ${
          dark ? 'text-white' : 'text-slate-900'
        }`}
      >
        {title}
      </h2>

      {description && (
        <p
          className={`mt-4 text-base sm:text-lg leading-relaxed font-normal ${
            dark ? 'text-slate-400' : 'text-slate-600'
          }`}
        >
          {description}
        </p>
      )}
    </motion.div>
  )
}
