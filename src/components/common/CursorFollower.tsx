import { useEffect, useRef, useState } from 'react'

type CursorMode = 'idle' | 'button' | 'card' | 'card-dark' | 'text'

const TRAIL_COUNT = 22

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

// Deep website-palette dark tones: Dark Navy (#070d24) → Deep Royal Blue (#155dfc / #1d4ed8) → Deep Indigo/Violet (#312e81 / #4c1d95)
const TRAIL_COLORS = [
  '#070d24',
  '#08102d',
  '#0a153a',
  '#0d1c4b',
  '#102460',
  '#132e7a',
  '#153996',
  '#1548bd',
  '#155dfc',
  '#1d4ed8',
  '#1e40af',
  '#22389c',
  '#28338f',
  '#2f2e86',
  '#3730a3',
  '#3b2a96',
  '#43258c',
  '#4c1d95',
  '#451a86',
  '#3b1775',
  '#2e145e',
  '#1e1142',
]

/**
 * Custom Geometric Pointer Hero Cursor + Long 22-Node Dark Brand Square Trail.
 * - No outer bounding box — sleek precision pointer matching PulseQuo's palette
 *   (#070d24 Dark Navy, #155dfc Electric Blue, #7c3aed Purple micro-accent)
 * - Long sweeping dark square trail behind the pointer tip
 * - Activates exclusively inside the page Hero section (native cursor everywhere else)
 * - Zero React re-renders during pointer movement; auto-sleeps rAF when idle
 */
export function CursorFollower() {
  const [enabled, setEnabled] = useState(false)
  const rootRef = useRef<HTMLDivElement | null>(null)
  const coreRef = useRef<HTMLDivElement | null>(null)
  const spotlightRef = useRef<HTMLDivElement | null>(null)
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
    const spotlight = spotlightRef.current
    if (!root || !core || !spotlight) return

    let targetX = -200
    let targetY = -200
    let spotX = -200
    let spotY = -200
    let lastMoveX = -200
    let lastMoveY = -200
    let initialized = false
    let inHero = false
    let rafId: number | null = null
    let scrollTimeoutId: number | null = null
    let lastTarget: EventTarget | null = null
    let currentMode: CursorMode = 'idle'

    const trailX = new Float32Array(TRAIL_COUNT).fill(-200)
    const trailY = new Float32Array(TRAIL_COUNT).fill(-200)

    const snapAllToPointer = (x: number, y: number) => {
      spotX = x
      spotY = y
      spotlight.style.transform = `translate3d(${x}px, ${y}px, 0)`
      trailX.fill(x)
      trailY.fill(y)
      for (let i = 0; i < TRAIL_COUNT; i++) {
        const node = trailRefs.current[i]
        if (node) {
          node.style.transform = `translate3d(${x}px, ${y}px, 0) scale(0.01)`
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

      const dx = targetX - spotX
      const dy = targetY - spotY
      if (Math.abs(dx) > 0.15 || Math.abs(dy) > 0.15) {
        spotX += dx * 0.14
        spotY += dy * 0.14
        needsAnotherFrame = true
      } else {
        spotX = targetX
        spotY = targetY
      }
      spotlight.style.transform = `translate3d(${spotX}px, ${spotY}px, 0)`

      let prevX = targetX + 8
      let prevY = targetY + 10
      for (let i = 0; i < TRAIL_COUNT; i++) {
        const tdx = prevX - trailX[i]
        const tdy = prevY - trailY[i]
        const distSq = tdx * tdx + tdy * tdy
        const followRate = i === 0 ? 0.34 : 0.27

        if (distSq > 0.0144) {
          trailX[i] += tdx * followRate
          trailY[i] += tdy * followRate
          needsAnotherFrame = true
        } else {
          trailX[i] = prevX
          trailY[i] = prevY
        }

        const node = trailRefs.current[i]
        if (node) {
          const progress = 1 - i / TRAIL_COUNT
          const speedBoost = Math.min(1, Math.sqrt(distSq) / 1.4)
          const scale = Math.max(0.18, progress * (0.38 + 0.62 * speedBoost))
          node.style.transform = `translate3d(${trailX[i]}px, ${trailY[i]}px, 0) scale(${scale.toFixed(3)})`
        }

        prevX = trailX[i]
        prevY = trailY[i]
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
      if (root.dataset.scrolling !== 'true') {
        root.dataset.scrolling = 'true'
      }
      if (scrollTimeoutId !== null) {
        window.clearTimeout(scrollTimeoutId)
      }
      scrollTimeoutId = window.setTimeout(() => {
        root.dataset.scrolling = 'false'
        syncHeroUnderPointer()
        scrollTimeoutId = null
      }, 180)
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
      {/* Subtle Brand Ambient Glow (No Outer Box) */}
      <div ref={spotlightRef} className="pq-cursor-tracker">
        <span className="pq-hero-spotlight" />
      </div>

      {/* Long 22-Node Dark Brand Square Trail */}
      {TRAIL_COLORS.map((color, idx) => (
        <span
          key={idx}
          ref={(el) => {
            trailRefs.current[idx] = el
          }}
          className="pq-hero-trail-dot"
          style={{
            backgroundColor: color,
            opacity: Number(Math.max(0.14, 0.92 - (idx / (TRAIL_COUNT - 1)) * 0.78).toFixed(2)),
          }}
        />
      ))}

      {/* Precision Brand-Colored Architectural Pointer (No Outer Box) */}
      <div ref={coreRef} className="pq-cursor-tracker">
        <svg
          className="pq-hero-pointer"
          width="26"
          height="26"
          viewBox="0 0 26 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="pq-cursor-grad" x1="2" y1="2" x2="22" y2="22" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#070d24" />
              <stop offset="58%" stopColor="#155dfc" />
              <stop offset="100%" stopColor="#7c3aed" />
            </linearGradient>
            <linearGradient id="pq-cursor-grad-dark" x1="2" y1="2" x2="22" y2="22" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="62%" stopColor="#60a5fa" />
              <stop offset="100%" stopColor="#a78bfa" />
            </linearGradient>
          </defs>
          {/* Main Faceted Geometric Pointer */}
          <path
            className="pq-hero-pointer-body"
            d="M3.2 2.6L21.4 11.4L13.1 13.7L10.3 22.1L3.2 2.6Z"
            fill="url(#pq-cursor-grad)"
            stroke="#ffffff"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
          {/* Inner Precision Blue-Violet Accent Core */}
          <path
            className="pq-hero-pointer-accent"
            d="M6.4 6.2L15.8 11.1L11.6 12.3L10.2 16.5L6.4 6.2Z"
            fill="#60a5fa"
            fillOpacity="0.45"
          />
        </svg>
      </div>
    </div>
  )
}
