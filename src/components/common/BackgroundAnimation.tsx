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
        <motion.div
          animate={{ opacity: [0.38, 0.52, 0.38] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute inset-0"
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
            transition={{ duration: 64, repeat: Infinity, ease: 'linear' }}
            className="w-[780px] h-[780px] sm:w-[1040px] sm:h-[1040px] rounded-full border border-dashed border-blue-200/45 will-change-transform"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 48, repeat: Infinity, ease: 'linear' }}
            className="absolute w-[520px] h-[520px] sm:w-[700px] sm:h-[700px] rounded-full border border-indigo-200/35 will-change-transform"
          />
        </div>
      )}

      {/* Layer 2: Animated Floating Ambient Mesh Orbs in Brand Colors */}
      {/* Orb 1: PulseQuo Primary Electric Blue (#155dfc) */}
      <motion.div
        animate={{
          x: [0, 60, -45, 0],
          y: [0, -55, 35, 0],
          scale: [1, 1.16, 0.92, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className={`absolute -top-24 left-1/4 -translate-x-1/2 rounded-full bg-gradient-to-br from-blue-600 to-blue-500 blur-[95px] sm:blur-[120px] will-change-transform ${
          isHero
            ? 'size-[440px] sm:size-[600px] opacity-[0.18]'
            : 'size-[340px] opacity-[0.11]'
        }`}
      />

      {/* Orb 2: PulseQuo Violet / Purple Accent (#7c3aed) */}
      <motion.div
        animate={{
          x: [0, -65, 40, 0],
          y: [0, 50, -50, 0],
          scale: [1, 0.9, 1.18, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1.2,
        }}
        className={`absolute -top-12 right-1/4 translate-x-1/3 rounded-full bg-gradient-to-bl from-purple-600 via-indigo-500 to-purple-700 blur-[100px] sm:blur-[130px] will-change-transform ${
          isHero
            ? 'size-[420px] sm:size-[560px] opacity-[0.16]'
            : 'size-[320px] opacity-[0.10]'
        }`}
      />

      {/* Orb 3: Cyan / Light Blue Ambient Glow (#06b6d4 / #3b82f6) */}
      <motion.div
        animate={{
          x: [0, 48, -48, 0],
          y: [0, -38, 42, 0],
          scale: [0.95, 1.14, 0.96, 0.95],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 2.4,
        }}
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/3 rounded-full bg-gradient-to-tr from-cyan-400 via-blue-500 to-purple-500 blur-[110px] sm:blur-[140px] will-change-transform ${
          isHero
            ? 'size-[480px] sm:size-[660px] opacity-[0.13]'
            : 'size-[360px] opacity-[0.08]'
        }`}
      />

      {/* Layer 3: Animated Light Beams & Communication Packets */}
      {showBeams && (
        <div className="absolute inset-0 overflow-hidden">
          {/* Diagonal Beam 1 (Left to Right) */}
          <motion.div
            animate={{
              opacity: [0, 0.55, 0],
              x: ['-25%', '125%'],
            }}
            transition={{
              duration: 7.5,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 0.4,
            }}
            className="absolute top-[22%] -left-40 h-[1.5px] w-[420px] rotate-[22deg] bg-gradient-to-r from-transparent via-blue-500 to-transparent blur-[0.4px]"
          />

          {/* Diagonal Beam 2 (Right to Left) */}
          <motion.div
            animate={{
              opacity: [0, 0.5, 0],
              x: ['125%', '-25%'],
            }}
            transition={{
              duration: 9,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 3.2,
            }}
            className="absolute top-[48%] -right-40 h-[1.5px] w-[420px] -rotate-[22deg] bg-gradient-to-r from-transparent via-purple-500 to-transparent blur-[0.4px]"
          />

          {/* Horizontal Telemetry Sweep Beam */}
          <motion.div
            animate={{
              opacity: [0, 0.4, 0],
              x: ['-20%', '120%'],
            }}
            transition={{
              duration: 10.5,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 5.5,
            }}
            className="absolute top-[70%] -left-32 h-[1px] w-80 bg-gradient-to-r from-transparent via-indigo-400 to-transparent"
          />

          {/* Network Packet Nodes (Floating Pulse Markers) */}
          <div className="absolute top-[26%] left-[15%] hidden sm:block">
            <motion.div
              animate={{
                y: [0, -16, 0],
                x: [0, 8, 0],
                opacity: [0.4, 0.85, 0.4],
              }}
              transition={{
                duration: 4.5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="relative flex items-center justify-center size-3"
            >
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-50" />
              <span className="relative inline-flex rounded-full size-1.5 bg-blue-600 shadow-sm" />
            </motion.div>
          </div>

          <div className="absolute top-[36%] right-[14%] hidden sm:block">
            <motion.div
              animate={{
                y: [0, 18, 0],
                x: [0, -10, 0],
                opacity: [0.35, 0.8, 0.35],
              }}
              transition={{
                duration: 5.2,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 1.8,
              }}
              className="relative flex items-center justify-center size-3"
            >
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-50" />
              <span className="relative inline-flex rounded-full size-1.5 bg-purple-600 shadow-sm" />
            </motion.div>
          </div>

          <div className="absolute bottom-[24%] left-[24%] hidden sm:block">
            <motion.div
              animate={{
                y: [0, -14, 0],
                opacity: [0.3, 0.7, 0.3],
              }}
              transition={{
                duration: 4.8,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 3.1,
              }}
              className="relative flex items-center justify-center size-3"
            >
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-45" />
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
