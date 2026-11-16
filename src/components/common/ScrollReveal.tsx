/**
 * ScrollReveal Component
 * Smooth, GPU-accelerated scroll-triggered entrance animations using Motion.
 */

import { motion, type HTMLMotionProps } from 'motion/react'
import type { ReactNode } from 'react'

const easeOutCubic = [0.22, 1, 0.36, 1] as const

interface ScrollRevealProps extends HTMLMotionProps<'div'> {
  children: ReactNode
  delay?: number
  direction?: 'up' | 'down' | 'left' | 'right' | 'none'
  distance?: number
  duration?: number
  scale?: number
  className?: string
  once?: boolean
}

export function ScrollReveal({
  children,
  delay = 0,
  direction = 'up',
  distance = 22,
  duration = 0.55,
  scale = 1,
  className = '',
  once = true,
  ...props
}: ScrollRevealProps) {
  const getInitial = () => {
    switch (direction) {
      case 'up':
        return { opacity: 0, y: distance, scale }
      case 'down':
        return { opacity: 0, y: -distance, scale }
      case 'left':
        return { opacity: 0, x: distance, scale }
      case 'right':
        return { opacity: 0, x: -distance, scale }
      case 'none':
        return { opacity: 0, scale }
    }
  }

  return (
    <motion.div
      initial={getInitial()}
      whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
      viewport={{ once, margin: '-50px' }}
      transition={{
        duration,
        delay,
        ease: easeOutCubic,
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  )
}

interface StaggerItemProps extends HTMLMotionProps<'div'> {
  children: ReactNode
  index?: number
  staggerDelay?: number
  className?: string
  liftOnHover?: boolean
  hoverElevation?: boolean
}

export function StaggerItem({
  children,
  index = 0,
  staggerDelay = 0.07,
  className = '',
  liftOnHover = true,
  hoverElevation,
  ...props
}: StaggerItemProps) {
  const shouldLift = hoverElevation ?? liftOnHover

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{
        duration: 0.5,
        delay: index * staggerDelay,
        ease: easeOutCubic,
      }}
      whileHover={shouldLift ? { y: -4, transition: { duration: 0.2 } } : undefined}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  )
}
