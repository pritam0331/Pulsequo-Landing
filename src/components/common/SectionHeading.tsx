/**
 * Section Heading Component
 * Clean typography for marketing page sections with SplitReveal headline and description.
 */

import { motion } from 'motion/react'
import { SplitReveal } from './SplitReveal'

interface SectionHeadingProps {
  badge?: string
  title: string
  description?: string
  align?: 'left' | 'center'
  dark?: boolean
  className?: string
}

export function SectionHeading({
  title,
  description,
  align = 'center',
  dark = false,
  className = '',
}: SectionHeadingProps) {
  const isCenter = align === 'center'

  return (
    <div
      className={`max-w-4xl ${
        isCenter ? 'mx-auto text-center' : 'text-left'
      } ${className}`}
    >
      <SplitReveal
        as="h2"
        text={title}
        trigger="inView"
        delay={0.03}
        stagger={0.032}
        duration={0.48}
        className={`text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-[-0.02em] leading-[1.18] text-balance ${
          dark ? 'text-white' : 'text-black'
        }`}
      />

      {description && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 'some' }}
          transition={{ duration: 0.45, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          className={`mt-3 max-w-2xl ${isCenter ? 'mx-auto' : ''} text-sm sm:text-base lg:text-[17px] leading-relaxed font-normal text-pretty ${
            dark ? 'text-slate-400' : 'text-slate-600'
          }`}
        >
          {description}
        </motion.p>
      )}
    </div>
  )
}
