/**
 * Section Heading Component
 * Consistent typography for marketing page sections with badge, title, and description.
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
  badge,
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
      viewport={{ once: true, margin: '-60px' }}
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
      {badge && (
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 10 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
            },
          }}
          className={`inline-flex items-center gap-2.5 mb-3 ${
            isCenter ? 'justify-center' : 'justify-start'
          }`}
        >
          <motion.span
            variants={{
              hidden: { scaleX: 0 },
              visible: {
                scaleX: 1,
                transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
              },
            }}
            className={`h-[2px] w-6 rounded-full origin-left ${
              dark ? 'bg-blue-400' : 'bg-blue-600'
            }`}
          />
          <span
            className={`text-xs font-semibold tracking-wide ${
              dark ? 'text-blue-400' : 'text-blue-600'
            }`}
          >
            {badge}
          </span>
        </motion.div>
      )}

      <SplitReveal
        as="h2"
        text={title}
        trigger="inView"
        delay={0.06}
        stagger={0.04}
        duration={0.55}
        className={`text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-[1.12] text-balance ${
          dark ? 'text-white' : 'text-slate-900'
        }`}
      />

      {description && (
        <motion.p
          variants={{
            hidden: { opacity: 0, y: 14 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
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

