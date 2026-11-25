/**
 * SplitReveal Component
 * Masked word/character split text reveal powered by Motion.
 * - Uses compositor-only transforms (translateY + opacity) inside an overflow-hidden mask
 * - Preserves screen-reader semantics via aria-label & aria-hidden tokens
 * - Honors prefers-reduced-motion automatically
 * - Supports both mount-triggered (above-the-fold Hero) and scroll-triggered (inView) reveals
 */

import { motion, useReducedMotion } from 'motion/react'

type SplitRevealElement = 'h1' | 'h2' | 'h3' | 'p' | 'span' | 'div'

interface SplitRevealProps {
  text: string
  as?: SplitRevealElement
  splitBy?: 'words' | 'chars'
  trigger?: 'inView' | 'mount'
  delay?: number
  stagger?: number
  duration?: number
  className?: string
  tokenClassName?: string
}

const EASE_OUT_EXPO = [0.22, 1, 0.36, 1] as const

export function SplitReveal({
  text,
  as = 'span',
  splitBy = 'words',
  trigger = 'inView',
  delay = 0,
  stagger = 0.045,
  duration = 0.55,
  className = '',
  tokenClassName = '',
}: SplitRevealProps) {
  const prefersReducedMotion = useReducedMotion()

  if (prefersReducedMotion) {
    const StaticTag = as
    return (
      <StaticTag className={className}>
        {tokenClassName ? <span className={tokenClassName}>{text}</span> : text}
      </StaticTag>
    )
  }

  const tokens =
    splitBy === 'chars'
      ? Array.from(text)
      : text.trim().split(/\s+/)

  const MotionTag = motion[as]

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        delayChildren: delay,
        staggerChildren: splitBy === 'chars' ? Math.min(stagger, 0.024) : stagger,
      },
    },
  }

  const tokenVariants = {
    hidden: {
      y: '115%',
      opacity: 0,
    },
    visible: {
      y: '0%',
      opacity: 1,
      transition: {
        duration,
        ease: EASE_OUT_EXPO,
      },
    },
  }

  const animationProps =
    trigger === 'mount'
      ? { initial: 'hidden' as const, animate: 'visible' as const }
      : {
          initial: 'hidden' as const,
          whileInView: 'visible' as const,
          viewport: { once: true, margin: '-48px' },
        }

  return (
    <MotionTag
      {...animationProps}
      variants={containerVariants}
      aria-label={text}
      className={className}
    >
      {tokens.map((token, idx) => {
        const isLast = idx === tokens.length - 1
        const displayToken = splitBy === 'chars' && token === ' ' ? '\u00A0' : token

        return (
          <span
            key={`${token}-${idx}`}
            aria-hidden="true"
            className="inline-block overflow-hidden align-top pb-[0.12em] -mb-[0.12em]"
          >
            <motion.span
              variants={tokenVariants}
              className={`inline-block will-change-transform ${tokenClassName}`}
            >
              {displayToken}
            </motion.span>
            {splitBy === 'words' && !isLast ? '\u00A0' : ''}
          </span>
        )
      })}
    </MotionTag>
  )
}
