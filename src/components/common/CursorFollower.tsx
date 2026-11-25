import { useEffect, useRef, useState } from 'react'

type CursorMode = 'idle' | 'button' | 'card' | 'card-dark' | 'text'

const TEXT_INPUT_SELECTOR =
  'input:not([type="button"]):not([type="submit"]):not([type="checkbox"]):not([type="radio"]), textarea, select, [contenteditable="true"]'
const BUTTON_SELECTOR =
  'button, a, [role="button"], input[type="submit"], .btn-shine, [data-cursor="button"]'
const CARD_SELECTOR =
  '.glass-card, .glass-panel, .glass-dark, [data-cursor="glass"], [data-cursor="card"]'
const DARK_SURFACE_SELECTOR =
  '.glass-dark, [data-cursor-theme="dark"]'

/**
 * Performance-optimized triangular custom cursor with scroll-fading effect.
 * - Lead geometric triangle tracks pointer instantaneously (zero click lag)
 * - Trailing outlined triangle echo + subtle radial glow follow smoothly via auto-sleeping rAF lerp
 * - Fades gracefully (along with soft viewport scroll-fade edge veils) while scrolling the mouse wheel
 * - Zero React re-renders during pointer movement, hover, or scroll (direct DOM refs + data attributes)
 * - Automatically disabled on touch/coarse pointers and prefers-reduced-motion
 */
export function CursorFollower() {
  const [enabled, setEnabled] = useState(false)
  const rootRef = useRef<HTMLDivElement | null>(null)
  const leadRef = useRef<HTMLDivElement | null>(null)
  const trailRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const finePointer = window.matchMedia('(pointer: fine)')
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')

    const evaluate = () => {
      setEnabled(finePointer.matches && !reducedMotion.matches)
    }

    evaluate()
    finePointer.addEventListener('change', evaluate)
    reducedMotion.addEventListener('change', evaluate)

    return () => {
      finePointer.removeEventListener('change', evaluate)
      reducedMotion.removeEventListener('change', evaluate)
    }
  }, [])

  useEffect(() => {
    if (!enabled) {
      document.documentElement.classList.remove('pq-custom-cursor')
      return
    }

    const root = rootRef.current
    const lead = leadRef.current
    const trail = trailRef.current
    if (!root || !lead || !trail) return

    document.documentElement.classList.add('pq-custom-cursor')

    let targetX = -120
    let targetY = -120
    let trailX = -120
    let trailY = -120
    let lastMoveX = -120
    let lastMoveY = -120
    let initialized = false
    let rafId: number | null = null
    let scrollTimeoutId: number | null = null
    let lastTarget: EventTarget | null = null
    let currentMode: CursorMode = 'idle'

    const setMode = (mode: CursorMode) => {
      if (currentMode === mode) return
      currentMode = mode
      root.dataset.mode = mode
    }

    const resolveMode = (target: EventTarget | null): CursorMode => {
      if (!(target instanceof Element)) return 'idle'
      if (target.closest(TEXT_INPUT_SELECTOR)) return 'text'
      if (target.closest(BUTTON_SELECTOR)) return 'button'
      const cardMatch = target.closest(CARD_SELECTOR)
      if (cardMatch) {
        return cardMatch.closest(DARK_SURFACE_SELECTOR) ? 'card-dark' : 'card'
      }
      return 'idle'
    }

    const tick = () => {
      const dx = targetX - trailX
      const dy = targetY - trailY

      if (Math.abs(dx) < 0.12 && Math.abs(dy) < 0.12) {
        trailX = targetX
        trailY = targetY
        trail.style.transform = `translate3d(${trailX}px, ${trailY}px, 0)`
        rafId = null
        return
      }

      trailX += dx * 0.18
      trailY += dy * 0.18
      trail.style.transform = `translate3d(${trailX}px, ${trailY}px, 0)`
      rafId = window.requestAnimationFrame(tick)
    }

    const scheduleTick = () => {
      if (rafId === null) {
        rafId = window.requestAnimationFrame(tick)
      }
    }

    const triggerScrollFade = () => {
      root.dataset.scrolling = 'true'
      if (scrollTimeoutId !== null) {
        window.clearTimeout(scrollTimeoutId)
      }
      scrollTimeoutId = window.setTimeout(() => {
        root.dataset.scrolling = 'false'
        scrollTimeoutId = null
      }, 300)
    }

    const handlePointerMove = (e: PointerEvent) => {
      if (e.pointerType && e.pointerType !== 'mouse' && e.pointerType !== 'pen') {
        return
      }

      targetX = e.clientX
      targetY = e.clientY

      // Lead triangle updates immediately for crisp, zero-lag pointer accuracy
      lead.style.transform = `translate3d(${targetX}px, ${targetY}px, 0)`

      if (!initialized) {
        initialized = true
        trailX = targetX
        trailY = targetY
        lastMoveX = targetX
        lastMoveY = targetY
        trail.style.transform = `translate3d(${trailX}px, ${trailY}px, 0)`
        root.dataset.visible = 'true'
      } else {
        if (root.dataset.visible !== 'true') {
          root.dataset.visible = 'true'
        }
        // Restore full cursor opacity smoothly when user actively moves pointer after scrolling
        if (
          root.dataset.scrolling === 'true' &&
          (Math.abs(targetX - lastMoveX) > 6 || Math.abs(targetY - lastMoveY) > 6)
        ) {
          root.dataset.scrolling = 'false'
          if (scrollTimeoutId !== null) {
            window.clearTimeout(scrollTimeoutId)
            scrollTimeoutId = null
          }
        }
        lastMoveX = targetX
        lastMoveY = targetY
      }

      if (e.target !== lastTarget) {
        lastTarget = e.target
        setMode(resolveMode(e.target))
      }

      scheduleTick()
    }

    const handlePointerDown = () => {
      root.dataset.pressed = 'true'
    }

    const handlePointerUp = () => {
      root.dataset.pressed = 'false'
    }

    const handleLeave = () => {
      root.dataset.visible = 'false'
      root.dataset.pressed = 'false'
      root.dataset.scrolling = 'false'
      lastTarget = null
      setMode('idle')
    }

    window.addEventListener('pointermove', handlePointerMove, { passive: true })
    window.addEventListener('pointerdown', handlePointerDown, { passive: true })
    window.addEventListener('pointerup', handlePointerUp, { passive: true })
    window.addEventListener('wheel', triggerScrollFade, { passive: true })
    window.addEventListener('scroll', triggerScrollFade, { passive: true })
    document.documentElement.addEventListener('mouseleave', handleLeave, { passive: true })
    window.addEventListener('blur', handleLeave, { passive: true })

    return () => {
      document.documentElement.classList.remove('pq-custom-cursor')
      window.removeEventListener('pointermove', handlePointerMove)
      window.removeEventListener('pointerdown', handlePointerDown)
      window.removeEventListener('pointerup', handlePointerUp)
      window.removeEventListener('wheel', triggerScrollFade)
      window.removeEventListener('scroll', triggerScrollFade)
      document.documentElement.removeEventListener('mouseleave', handleLeave)
      window.removeEventListener('blur', handleLeave)
      if (rafId !== null) {
        window.cancelAnimationFrame(rafId)
      }
      if (scrollTimeoutId !== null) {
        window.clearTimeout(scrollTimeoutId)
      }
    }
  }, [enabled])

  if (!enabled) return null

  return (
    <div
      ref={rootRef}
      aria-hidden="true"
      data-visible="false"
      data-mode="idle"
      data-pressed="false"
      data-scrolling="false"
      className="pq-cursor-root"
    >
      {/* Subtle Top & Bottom Scroll-Fade Edge Veils */}
      <div className="pq-scroll-fade-top" />
      <div className="pq-scroll-fade-bottom" />

      {/* Trailing Radial Glow & Geometric Triangle Echo */}
      <div ref={trailRef} className="pq-cursor-tracker">
        <span className="pq-cursor-glow" />
        <svg
          className="pq-cursor-triangle-trail"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <polygon
            points="2,2 20,10.5 10,20"
            strokeWidth="1.4"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {/* Lead Precision Triangular Pointer (Tip Anchored at Exact 0,0) */}
      <div ref={leadRef} className="pq-cursor-tracker">
        <svg
          className="pq-cursor-triangle-lead"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <polygon
            points="2,2 19.5,10 9.5,19.5"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  )
}
