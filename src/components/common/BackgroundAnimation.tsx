/**
 * BackgroundAnimation Component
 * High-performance, GPU-accelerated ambient background animation adhering strictly
 * to the PulseQuo brand palette:
 * - Uses zero-filter radial gradients instead of expensive blur(140px) layers
 *   for 60/120fps jank-free scrolling
 */

import { motion } from 'motion/react'

interface BackgroundAnimationProps {
  className?: string
  variant?: 'hero' | 'subtle'
  showGrid?: boolean
  showBeams?: boolean
}

export function BackgroundAnimation({
  className = '',
  variant = 'hero',
  showGrid = true,
  showBeams = true,
}: BackgroundAnimationProps) {
  const isHero = variant === 'hero'

  return (
    <div
      aria-hidden="true"
      style={{ contain: 'layout style paint' }}
      className={`absolute inset-0 pointer-events-none overflow-hidden select-none ${className}`}
    >
      {/* Layer 1: Dot Matrix Grid with Radial Vignette Mask */}
      {showGrid && (
        <div
          className="absolute inset-0 opacity-45"
          style={{
            backgroundImage: `radial-gradient(circle, #94a3b8 1.1px, transparent 1.1px)`,
            backgroundSize: '28px 28px',
            WebkitMaskImage:
              'radial-gradient(ellipse 78% 64% at 50% 44%, #000 26%, transparent 86%)',
            maskImage:
              'radial-gradient(ellipse 78% 64% at 50% 44%, #000 26%, transparent 86%)',
          }}
        />
      )}

      {/* Layer 1.5: Slow Rotating Geometric Orbital Rings (Hero only) */}
      {isHero && (
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 72, repeat: Infinity, ease: 'linear' }}
            className="w-[780px] h-[780px] sm:w-[1040px] sm:h-[1040px] rounded-full border border-dashed border-blue-200/40 will-change-transform"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 54, repeat: Infinity, ease: 'linear' }}
            className="absolute w-[520px] h-[520px] sm:w-[700px] sm:h-[700px] rounded-full border border-indigo-200/30 will-change-transform"
          />
        </div>
      )}

      {/* Layer 2: Zero-Blur Radial Gradient Ambient Orbs (Zero GPU Filter Overhead) */}
      <motion.div
        animate={{
          x: [0, 48, -36, 0],
          y: [0, -40, 28, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        style={{
          background:
            'radial-gradient(circle, rgba(21,93,252,0.18) 0%, rgba(59,130,246,0.08) 42%, transparent 72%)',
        }}
        className={`absolute -top-36 left-1/4 -translate-x-1/2 rounded-full will-change-transform ${
          isHero ? 'size-[620px] sm:size-[820px]' : 'size-[460px]'
        }`}
      />

      <motion.div
        animate={{
          x: [0, -52, 32, 0],
          y: [0, 38, -38, 0],
        }}
        transition={{
          duration: 21,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1.2,
        }}
        style={{
          background:
            'radial-gradient(circle, rgba(124,58,237,0.16) 0%, rgba(99,102,241,0.07) 44%, transparent 72%)',
        }}
        className={`absolute -top-24 right-1/4 translate-x-1/3 rounded-full will-change-transform ${
          isHero ? 'size-[580px] sm:size-[780px]' : 'size-[440px]'
        }`}
      />

      <motion.div
        animate={{
          x: [0, 36, -36, 0],
          y: [0, -28, 32, 0],
        }}
        transition={{
          duration: 19,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 2.4,
        }}
        style={{
          background:
            'radial-gradient(circle, rgba(6,182,212,0.12) 0%, rgba(59,130,246,0.06) 45%, transparent 72%)',
        }}
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/3 rounded-full will-change-transform ${
          isHero ? 'size-[640px] sm:size-[860px]' : 'size-[480px]'
        }`}
      />

      {/* Layer 3: Lightweight GPU-Composited Light Beams */}
      {showBeams && (
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{
              opacity: [0, 0.5, 0],
              x: ['-25%', '125%'],
            }}
            transition={{
              duration: 8.5,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 0.4,
            }}
            className="absolute top-[22%] -left-40 h-[1.5px] w-[420px] rotate-[22deg] bg-gradient-to-r from-transparent via-blue-500 to-transparent will-change-transform"
          />

          <motion.div
            animate={{
              opacity: [0, 0.45, 0],
              x: ['125%', '-25%'],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 3.2,
            }}
            className="absolute top-[48%] -right-40 h-[1.5px] w-[420px] -rotate-[22deg] bg-gradient-to-r from-transparent via-purple-500 to-transparent will-change-transform"
          />

          <motion.div
            animate={{
              opacity: [0, 0.35, 0],
              x: ['-20%', '120%'],
            }}
            transition={{
              duration: 11.5,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 5.5,
            }}
            className="absolute top-[70%] -left-32 h-[1px] w-80 bg-gradient-to-r from-transparent via-indigo-400 to-transparent will-change-transform"
          />
        </div>
      )}

      {/* Layer 4: Perimeter Soft Fade Gradients */}
      <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-white to-transparent" />
      <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-white/80 to-transparent" />
    </div>
  )
}
