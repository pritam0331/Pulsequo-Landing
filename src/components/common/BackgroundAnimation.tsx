/**
 * BackgroundAnimation Component
 * High-performance, pure CSS GPU-composited ambient background adhering strictly
 * to the PulseQuo brand palette:
 * - Zero JS RAF animation loops (runs purely on the browser compositor thread)
 * - Zero-filter radial gradients instead of expensive blur() layers for 60/120fps scrolling
 */

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
      style={{ contain: 'strict' }}
      className={`absolute inset-0 pointer-events-none overflow-hidden select-none ${className}`}
    >
      {/* Layer 1: Dot Matrix Grid with Radial Vignette Mask */}
      {showGrid && (
        <div
          className="absolute inset-0 opacity-45"
          style={{
            backgroundImage: 'radial-gradient(circle, #94a3b8 1.1px, transparent 1.1px)',
            backgroundSize: '28px 28px',
            WebkitMaskImage:
              'radial-gradient(ellipse 78% 64% at 50% 44%, #000 26%, transparent 86%)',
            maskImage:
              'radial-gradient(ellipse 78% 64% at 50% 44%, #000 26%, transparent 86%)',
          }}
        />
      )}

      {/* Layer 1.5: Static Subtle Geometric Orbital Rings (Hero only, zero continuous raster cost) */}
      {isHero && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-[740px] h-[740px] sm:w-[980px] sm:h-[980px] rounded-full border border-dashed border-blue-200/35" />
          <div className="absolute w-[480px] h-[480px] sm:w-[660px] sm:h-[660px] rounded-full border border-indigo-200/25" />
        </div>
      )}

      {/* Layer 2: Zero-Blur Radial Gradient Ambient Orbs (CSS Compositor-Only Drift) */}
      <div
        style={{
          background:
            'radial-gradient(circle, rgba(21,93,252,0.16) 0%, rgba(59,130,246,0.07) 42%, transparent 72%)',
        }}
        className={`absolute -top-36 left-1/4 -translate-x-1/2 rounded-full animate-bg-orb-a ${
          isHero ? 'size-[560px] sm:size-[740px]' : 'size-[420px]'
        }`}
      />

      <div
        style={{
          background:
            'radial-gradient(circle, rgba(124,58,237,0.14) 0%, rgba(99,102,241,0.06) 44%, transparent 72%)',
        }}
        className={`absolute -top-24 right-1/4 translate-x-1/3 rounded-full animate-bg-orb-b ${
          isHero ? 'size-[520px] sm:size-[700px]' : 'size-[400px]'
        }`}
      />

      <div
        style={{
          background:
            'radial-gradient(circle, rgba(6,182,212,0.1) 0%, rgba(59,130,246,0.05) 45%, transparent 72%)',
        }}
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/3 rounded-full ${
          isHero ? 'size-[560px] sm:size-[760px]' : 'size-[420px]'
        }`}
      />

      {/* Layer 3: Lightweight Pure-CSS Light Beams */}
      {showBeams && (
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-[24%] -left-40 h-[1.5px] w-[380px] rotate-[22deg] bg-gradient-to-r from-transparent via-blue-500/70 to-transparent animate-bg-beam-left" />
          <div className="absolute top-[52%] -right-40 h-[1.5px] w-[380px] -rotate-[22deg] bg-gradient-to-r from-transparent via-purple-500/65 to-transparent animate-bg-beam-right" />
        </div>
      )}

      {/* Layer 4: Perimeter Soft Fade Gradients */}
      <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-white to-transparent" />
      <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-white/80 to-transparent" />
    </div>
  )
}
