/**
 * BackgroundAnimation Component
 * High-performance, GPU-accelerated ambient background animation adhering strictly
 * to the PulseQuo brand palette:
 * - Electric Blue (#155dfc)
 * - Violet / Purple (#7c3aed)
 * - Deep Midnight / Slate accents
 * - Clean White base with subtle vignette dot-grid
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
      className={`absolute inset-0 pointer-events-none overflow-hidden select-none ${className}`}
    >
      {/* Layer 1: Dot Matrix Grid with Radial Vignette Mask */}
      {showGrid && (
        <div
          className="absolute inset-0 opacity-[0.45] transition-opacity duration-700"
          style={{
            backgroundImage: `radial-gradient(circle, #94a3b8 1.1px, transparent 1.1px)`,
            backgroundSize: '28px 28px',
            WebkitMaskImage:
              'radial-gradient(ellipse 75% 60% at 50% 45%, #000 25%, transparent 85%)',
            maskImage:
              'radial-gradient(ellipse 75% 60% at 50% 45%, #000 25%, transparent 85%)',
          }}
        />
      )}

      {/* Layer 2: Animated Floating Ambient Mesh Orbs in Brand Colors */}
      {/* Orb 1: PulseQuo Primary Electric Blue (#155dfc) */}
      <motion.div
        animate={{
          x: [0, 45, -35, 0],
          y: [0, -50, 25, 0],
          scale: [1, 1.12, 0.94, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className={`absolute -top-24 left-1/4 -translate-x-1/2 rounded-full bg-gradient-to-br from-blue-600 to-blue-500 blur-[95px] sm:blur-[120px] will-change-transform ${
          isHero
            ? 'size-[420px] sm:size-[560px] opacity-[0.16]'
            : 'size-[340px] opacity-[0.10]'
        }`}
      />

      {/* Orb 2: PulseQuo Violet / Purple Accent (#7c3aed) */}
      <motion.div
        animate={{
          x: [0, -55, 30, 0],
          y: [0, 40, -45, 0],
          scale: [1, 0.92, 1.14, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1.5,
        }}
        className={`absolute -top-12 right-1/4 translate-x-1/3 rounded-full bg-gradient-to-bl from-purple-600 via-indigo-500 to-purple-700 blur-[100px] sm:blur-[130px] will-change-transform ${
          isHero
            ? 'size-[400px] sm:size-[520px] opacity-[0.14]'
            : 'size-[320px] opacity-[0.09]'
        }`}
      />

      {/* Orb 3: Cyan / Light Blue Ambient Glow (#06b6d4 / #3b82f6) */}
      <motion.div
        animate={{
          x: [0, 35, -40, 0],
          y: [0, -30, 35, 0],
          scale: [0.95, 1.1, 0.98, 0.95],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 3,
        }}
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/3 rounded-full bg-gradient-to-tr from-cyan-400 via-blue-500 to-purple-500 blur-[110px] sm:blur-[140px] will-change-transform ${
          isHero
            ? 'size-[460px] sm:size-[620px] opacity-[0.11]'
            : 'size-[360px] opacity-[0.07]'
        }`}
      />

      {/* Layer 3: Subtle Animated Light Beams & Communication Packets */}
      {showBeams && (
        <div className="absolute inset-0 overflow-hidden">
          {/* Subtle Diagonal Beam 1 (Left to Right) */}
          <motion.div
            animate={{
              opacity: [0.15, 0.45, 0.15],
              x: ['-20%', '120%'],
            }}
            transition={{
              duration: 9,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 0.5,
            }}
            className="absolute top-1/4 -left-40 h-[1.5px] w-96 rotate-[25deg] bg-gradient-to-r from-transparent via-blue-500 to-transparent blur-[0.5px]"
          />

          {/* Subtle Diagonal Beam 2 (Right to Left) */}
          <motion.div
            animate={{
              opacity: [0.1, 0.4, 0.1],
              x: ['120%', '-20%'],
            }}
            transition={{
              duration: 11,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 4,
            }}
            className="absolute top-1/2 -right-40 h-[1.5px] w-96 -rotate-[25deg] bg-gradient-to-r from-transparent via-purple-500 to-transparent blur-[0.5px]"
          />

          {/* Network Packet Nodes (Floating Pulse Markers) */}
          {/* Packet Node A (Blue) */}
          <div className="absolute top-[28%] left-[18%] hidden sm:block">
            <motion.div
              animate={{
                y: [0, -14, 0],
                opacity: [0.35, 0.75, 0.35],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="relative flex items-center justify-center size-3"
            >
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-60" />
              <span className="relative inline-flex rounded-full size-1.5 bg-blue-600 shadow-sm" />
            </motion.div>
          </div>

          {/* Packet Node B (Purple) */}
          <div className="absolute top-[38%] right-[16%] hidden sm:block">
            <motion.div
              animate={{
                y: [0, 16, 0],
                opacity: [0.3, 0.7, 0.3],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 2,
              }}
              className="relative flex items-center justify-center size-3"
            >
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-60" />
              <span className="relative inline-flex rounded-full size-1.5 bg-purple-600 shadow-sm" />
            </motion.div>
          </div>

          {/* Packet Node C (Emerald - Carrier Route) */}
          <div className="absolute bottom-[24%] left-[26%] hidden sm:block">
            <motion.div
              animate={{
                y: [0, -10, 0],
                opacity: [0.25, 0.65, 0.25],
              }}
              transition={{
                duration: 5.5,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 3.5,
              }}
              className="relative flex items-center justify-center size-3"
            >
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-50" />
              <span className="relative inline-flex rounded-full size-1.5 bg-emerald-500 shadow-sm" />
            </motion.div>
          </div>
        </div>
      )}

      {/* Layer 4: Perimeter Soft Fade Gradients */}
      <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-white to-transparent" />
      <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-white/80 to-transparent" />
    </div>
  )
}
