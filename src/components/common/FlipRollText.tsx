/**
 * FlipRollText
 * Kinetic 3D text-roll hover flip typography component.
 * - Entrance: smooth staggered word rise on mount (zero CLS)
 * - Hover: each character rolls & flips upward along the X-axis in a crisp staggered wave
 * - Accessibility: exposes clean semantic text to screen readers, marks visual spans aria-hidden
 * - Respects prefers-reduced-motion
 */

import { motion, useReducedMotion } from 'motion/react'

interface FlipRollTextProps {
  text: string
  className?: string
  frontClassName?: string
  flipClassName?: string
  delay?: number
  stagger?: number
}

const easeOutCurve = [0.22, 1, 0.36, 1] as const

export function FlipRollText({
  text,
  className = '',
  frontClassName = '',
  flipClassName = 'text-blue-600',
  delay = 0.04,
  stagger = 0.055,
}: FlipRollTextProps) {
  const prefersReduced = useReducedMotion()
  const words = text.split(' ')

  if (prefersReduced) {
    return <span className={`block ${frontClassName} ${className}`}>{text}</span>
  }

  let charCursor = 0

  return (
    <span className={`pq-flip-line group/flip inline-block cursor-default ${className}`}>
      <span className="sr-only">{text}</span>
      <span aria-hidden="true" className="inline-flex flex-wrap justify-center gap-x-[0.26em]">
        {words.map((word, wordIdx) => {
          const letters = Array.from(word)
          const wordStartIndex = charCursor
          charCursor += letters.length + 1

          return (
            <motion.span
              key={`${word}-${wordIdx}`}
              initial={{ opacity: 0, y: '0.45em' }}
              animate={{ opacity: 1, y: '0em' }}
              transition={{
                duration: 0.56,
                delay: delay + wordIdx * stagger,
                ease: easeOutCurve,
              }}
              className="pq-flip-word inline-flex whitespace-nowrap"
            >
              {letters.map((char, letterIdx) => {
                const delayMs = Math.min((wordStartIndex + letterIdx) * 18, 360)
                return (
                  <span
                    key={letterIdx}
                    className="pq-flip-char"
                    style={{ ['--flip-delay' as string]: `${delayMs}ms` }}
                  >
                    <span className={`pq-flip-face pq-flip-front ${frontClassName}`}>
                      {char}
                    </span>
                    <span className={`pq-flip-face pq-flip-back ${flipClassName}`}>
                      {char}
                    </span>
                  </span>
                )
              })}
            </motion.span>
          )
        })}
      </span>
    </span>
  )
}
