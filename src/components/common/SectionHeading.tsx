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
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={{
        hidden: {},
        visible: {
          transition: { staggerChildren: 0.08 },
        },
      }}
      className={`max-w-3xl ${
        isCenter ? 'mx-auto text-center' : 'text-left'
      } ${className}`}
    >
      <SplitReveal
        as="h2"
        text={title}
        trigger="inView"
        delay={0.04}
        stagger={0.035}
        duration={0.5}
        className={`text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-[1.12] text-balance ${
          dark ? 'text-white' : 'text-slate-900'
        }`}
      />

      {description && (
        <motion.p
          variants={{
            hidden: { opacity: 0, y: 12 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
            },
          }}
          className={`mt-4 text-base sm:text-lg leading-relaxed font-normal text-pretty ${
            dark ? 'text-slate-400' : 'text-slate-600'
          }`}
        >
          {description}
        </motion.p>
      )}
    </motion.div>
  )
}
