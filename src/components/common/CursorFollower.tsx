import { useEffect, useRef, useState } from 'react'

type CursorMode = 'idle' | 'button' | 'card' | 'card-dark' | 'text'

const TRAIL_COUNT = 10

const TEXT_INPUT_SELECTOR =
  'input:not([type="button"]):not([type="submit"]):not([type="checkbox"]):not([type="radio"]), textarea, select, [contenteditable="true"]'
const BUTTON_SELECTOR =
  'button, a, [role="button"], input[type="submit"], .btn-shine, [data-cursor="button"]'
const CARD_SELECTOR =
  '.glass-card, .glass-panel, .glass-dark, [data-cursor="glass"], [data-cursor="card"]'
const DARK_SURFACE_SELECTOR =
  '.glass-dark, [data-cursor-theme="dark"]'

function isInsideHeroZone(target: EventTarget | null): boolean {
  if (!(target instanceof Element)) return false
  if (target.closest('[data-cursor-zone="hero"]')) return true

  const section = target.closest('main section')
  if (!section) return false
  const main = section.closest('main')
  if (!main) return false
  const firstSection = main.querySelector('section')
  return section === firstSection
}

const TRAIL_COLORS = [
  '#155dfc',
  '#2563eb',
  '#3b82f6',
  '#4f46e5',
  '#5b4be7',
  '#6366f1',
  '#7c3aed',
  '#8b5cf6',
  '#9333ea',
  '#a855f7',
]

/**
 * Redesigned Luminous Hero-Only Cursor with Fluid Multi-Node Trail.
 * - Activates exclusively inside the page Hero section (native cursor everywhere else)
 * - Features a precision luminous core, elastic orbital ring, ambient spotlight,
 *   and a silky 10-node chained GPU-composited blue-to-violet cursor trail
 * - Zero React re-renders during pointer movement; auto-sleeps rAF when idle
 */
export function CursorFollower() {
  const [enabled, setEnabled] = useState(false)
  const rootRef = useRef<HTMLDivElement | null>(null)
  const coreRef = useRef<HTMLDivElement | null>(null)
  const auraRef = useRef<HTMLDivElement | null>(null)
  const trailRefs = useRef<(HTMLSpanElement | null)[]>([])

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
      document.documentElement.classList.remove('pq-hero-cursor-active')
      return
    }

    const root = rootRef.current
    const core = coreRef.current
    const aura = auraRef.current
    if (!root || !core || !aura) return

    let targetX = -200
    let targetY = -200
    let auraX = -200
    let auraY = -200
    let lastMoveX = -200
    let lastMoveY = -200
    let initialized = false
    let inHero = false
    let rafId: number | null = null
    let scrollTimeoutId: number | null = null
    let lastTarget: EventTarget | null = null
    let currentMode: CursorMode = 'idle'

    const trailPoints = Array.from({ length: TRAIL_COUNT }, () => ({ x: -200, y: -200 }))

    const snapAllToPointer = (x: number, y: number) => {
      auraX = x
      auraY = y
      aura.style.transform = `translate3d(${x}px, ${y}px, 0)`
      for (let i = 0; i < TRAIL_COUNT; i++) {
        trailPoints[i].x = x
        trailPoints[i].y = y
        const dot = trailRefs.current[i]
        if (dot) {
          dot.style.transform = `translate3d(${x}px, ${y}px, 0) scale(0.01)`
        }
      }
    }

    const setInHero = (active: boolean) => {
      if (inHero === active) return
      inHero = active
      root.dataset.visible = active ? 'true' : 'false'
      document.documentElement.classList.toggle('pq-hero-cursor-active', active)
      if (!active) {
        currentMode = 'idle'
        root.dataset.mode = 'idle'
        root.dataset.pressed = 'false'
      }
    }

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
      let needsAnotherFrame = false

      const dx = targetX - auraX
      const dy = targetY - auraY
      if (Math.abs(dx) > 0.15 || Math.abs(dy) > 0.15) {
        auraX += dx * 0.16
        auraY += dy * 0.16
        needsAnotherFrame = true
      } else {
        auraX = targetX
        auraY = targetY
      }
      aura.style.transform = `translate3d(${auraX}px, ${auraY}px, 0)`

      // Chained fluid trail physics
      let prevX = targetX
      let prevY = targetY
      for (let i = 0; i < TRAIL_COUNT; i++) {
        const pt = trailPoints[i]
        const tdx = prevX - pt.x
        const tdy = prevY - pt.y
        const dist = Math.hypot(tdx, tdy)

        if (dist > 0.15) {
          pt.x += tdx * 0.38
          pt.y += tdy * 0.38
          needsAnotherFrame = true
        } else {
          pt.x = prevX
          pt.y = prevY
        }

        const dot = trailRefs.current[i]
        if (dot) {
          const progress = 1 - i / TRAIL_COUNT
          // Gently scale trail down when stationary so it tucks neatly behind cursor core
          const speedBoost = Math.min(1, dist / 2.2)
          const scale = Math.max(0.18, progress * (0.35 + 0.65 * speedBoost))
          dot.style.transform = `translate3d(${pt.x}px, ${pt.y}px, 0) scale(${scale.toFixed(3)})`
        }

        prevX = pt.x
        prevY = pt.y
      }

      if (needsAnotherFrame && inHero) {
        rafId = window.requestAnimationFrame(tick)
      } else {
        rafId = null
      }
    }

    const scheduleTick = () => {
      if (rafId === null) {
        rafId = window.requestAnimationFrame(tick)
      }
    }

    const syncHeroUnderPointer = () => {
      if (!initialized) return
      const el = document.elementFromPoint(targetX, targetY)
      const heroMatch = isInsideHeroZone(el)
      setInHero(heroMatch)
      if (heroMatch && el !== lastTarget) {
        lastTarget = el
        setMode(resolveMode(el))
      }
    }

    const triggerScrollFade = () => {
      root.dataset.scrolling = 'true'
      syncHeroUnderPointer()
      if (scrollTimeoutId !== null) {
        window.clearTimeout(scrollTimeoutId)
      }
      scrollTimeoutId = window.setTimeout(() => {
        root.dataset.scrolling = 'false'
        syncHeroUnderPointer()
        scrollTimeoutId = null
      }, 260)
    }

    const handlePointerMove = (e: PointerEvent) => {
      if (e.pointerType && e.pointerType !== 'mouse' && e.pointerType !== 'pen') {
        return
      }

      targetX = e.clientX
      targetY = e.clientY

      const heroMatch = isInsideHeroZone(e.target)

      if (!initialized) {
        initialized = true
        lastMoveX = targetX
        lastMoveY = targetY
        snapAllToPointer(targetX, targetY)
      }

      core.style.transform = `translate3d(${targetX}px, ${targetY}px, 0)`

      if (!heroMatch) {
        setInHero(false)
        lastTarget = e.target
        return
      }

      if (!inHero) {
        snapAllToPointer(targetX, targetY)
      }

      setInHero(true)

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

      if (e.target !== lastTarget) {
        lastTarget = e.target
        setMode(resolveMode(e.target))
      }

      scheduleTick()
    }

    const handlePointerDown = () => {
      if (inHero) {
        root.dataset.pressed = 'true'
      }
    }

    const handlePointerUp = () => {
      root.dataset.pressed = 'false'
    }

    const handleLeave = () => {
      setInHero(false)
      root.dataset.scrolling = 'false'
      lastTarget = null
    }

    window.addEventListener('pointermove', handlePointerMove, { passive: true })
    window.addEventListener('pointerdown', handlePointerDown, { passive: true })
    window.addEventListener('pointerup', handlePointerUp, { passive: true })
    window.addEventListener('scroll', triggerScrollFade, { passive: true })
    document.documentElement.addEventListener('mouseleave', handleLeave, { passive: true })
    window.addEventListener('blur', handleLeave, { passive: true })

    return () => {
      document.documentElement.classList.remove('pq-hero-cursor-active')
      window.removeEventListener('pointermove', handlePointerMove)
      window.removeEventListener('pointerdown', handlePointerDown)
      window.removeEventListener('pointerup', handlePointerUp)
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
      {/* Fluid Multi-Node Blue-to-Violet Luminous Cursor Trail */}
      {TRAIL_COLORS.map((color, idx) => (
        <span
          key={idx}
          ref={(el) => {
            trailRefs.current[idx] = el
          }}
          className="pq-hero-trail-dot"
          style={{
            backgroundColor: color,
            opacity: Number((0.62 - idx * 0.055).toFixed(2)),
          }}
        />
      ))}

      {/* Elastic Ambient Hero Spotlight + Orbital Luminous Ring */}
      <div ref={auraRef} className="pq-cursor-tracker">
        <span className="pq-hero-spotlight" />
        <span className="pq-hero-ring" />
      </div>

      {/* Instant Precision Pointer Core */}
      <div ref={coreRef} className="pq-cursor-tracker">
        <span className="pq-hero-core" />
      </div>
    </div>
  )
}
