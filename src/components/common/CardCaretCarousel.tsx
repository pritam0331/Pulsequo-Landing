/**
 * Reusable Horizontal Caret Carousel
 * Reduces vertical page scroll by displaying multi-card collections in a
 * sleek horizontal track with left/right caret buttons, swipe support, and pagination dots.
 * Supports responsive items-per-view (1 on mobile, 2 on tablet, 3 or 4 on desktop)
 * and optional desktop grid fallback when `carouselOnly` is false.
 */

import React, { useState, useEffect, useCallback, useRef } from 'react'
import { motion } from 'motion/react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface CardCaretCarouselProps {
  items: React.ReactNode[]
  /** Number of cards visible at once on desktop (lg+). Defaults to 3. */
  desktopPerView?: 2 | 3 | 4
  /** Number of cards visible at once on tablet (sm/md). Defaults to 2. */
  tabletPerView?: 1 | 2
  /** If true, renders as a static grid on lg+ when items.length <= desktopPerView and carousel below lg. Defaults to false (always carousel if items exceed perView). */
  gridOnDesktopIfFits?: boolean
  /** Optional key to reset slide index (e.g. active category filter). */
  resetKey?: string | number
  /** Label for accessibility */
  ariaLabel?: string
  className?: string
}

export function CardCaretCarousel({
  items,
  desktopPerView = 3,
  tabletPerView = 2,
  gridOnDesktopIfFits = false,
  resetKey,
  ariaLabel = 'Card carousel',
  className = '',
}: CardCaretCarouselProps) {
  const [perView, setPerView] = useState<number>(desktopPerView)
  const [index, setIndex] = useState(0)
  const touchStartX = useRef<number | null>(null)
  const touchDeltaX = useRef<number>(0)

  // Responsive items-per-view matching Tailwind breakpoints
  useEffect(() => {
    const updatePerView = () => {
      const w = window.innerWidth
      if (w < 640) {
        setPerView(1)
      } else if (w < 1024) {
        setPerView(tabletPerView)
      } else {
        setPerView(desktopPerView)
      }
    }
    updatePerView()
    window.addEventListener('resize', updatePerView, { passive: true })
    return () => window.removeEventListener('resize', updatePerView)
  }, [desktopPerView, tabletPerView])

  const maxIndex = Math.max(0, items.length - perView)

  // Clamp index when perView or items count changes
  useEffect(() => {
    setIndex((prev) => Math.min(prev, maxIndex))
  }, [maxIndex])

  // Reset slide when filter changes
  useEffect(() => {
    setIndex(0)
  }, [resetKey])

  const goPrev = useCallback(() => {
    setIndex((prev) => (prev <= 0 ? maxIndex : prev - 1))
  }, [maxIndex])

  const goNext = useCallback(() => {
    setIndex((prev) => (prev >= maxIndex ? 0 : prev + 1))
  }, [maxIndex])

  if (items.length === 0) return null

  const needsCarousel = items.length > perView
  const showControls = needsCarousel && !(gridOnDesktopIfFits && perView >= items.length)
  const pageCount = maxIndex + 1

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
    touchDeltaX.current = 0
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return
    touchDeltaX.current = e.touches[0].clientX - touchStartX.current
  }

  const handleTouchEnd = () => {
    if (touchStartX.current === null) return
    if (touchDeltaX.current < -40) goNext()
    else if (touchDeltaX.current > 40) goPrev()
    touchStartX.current = null
    touchDeltaX.current = 0
  }

  // When all items fit cleanly on current viewport, render a clean equal grid with zero extra chrome
  if (!showControls) {
    const colsClass =
      desktopPerView === 4
        ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4'
        : desktopPerView === 2
          ? 'grid-cols-1 sm:grid-cols-2'
          : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
    return (
      <div className={`grid ${colsClass} gap-4 sm:gap-5 items-stretch ${className}`}>
        {items.map((node, i) => (
          <div key={i} className="h-full">
            {node}
          </div>
        ))}
      </div>
    )
  }

  const slideWidthPct = 100 / perView

  return (
    <div
      className={`relative w-full ${className}`}
      role="region"
      aria-roledescription="carousel"
      aria-label={ariaLabel}
    >
      {/* Top-Right Compact Counter & Caret Controls */}
      <div className="flex items-center justify-between gap-3 mb-4 sm:mb-5">
        <div className="flex items-center gap-1.5">
          {Array.from({ length: pageCount }).map((_, dotIdx) => (
            <button
              key={dotIdx}
              type="button"
              onClick={() => setIndex(dotIdx)}
              aria-label={`Go to slide ${dotIdx + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                dotIdx === index
                  ? 'w-6 sm:w-7 bg-blue-600'
                  : 'w-1.5 bg-slate-300 hover:bg-slate-400'
              }`}
            />
          ))}
        </div>

        <div className="flex items-center gap-2">
          <span className="text-[11px] font-mono tabular-nums text-slate-400 hidden sm:inline">
            {String(index + 1).padStart(2, '0')} / {String(pageCount).padStart(2, '0')}
          </span>
          <div className="flex items-center gap-1.5">
            <motion.button
              type="button"
              onClick={goPrev}
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.94 }}
              aria-label="Previous slide"
              className="size-8 sm:size-9 rounded-xl border border-slate-200/90 bg-white hover:bg-blue-600 hover:border-blue-600 text-slate-700 hover:text-white flex items-center justify-center shadow-2xs transition-colors cursor-pointer"
            >
              <ChevronLeft className="size-4 sm:size-4.5" />
            </motion.button>
            <motion.button
              type="button"
              onClick={goNext}
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.94 }}
              aria-label="Next slide"
              className="size-8 sm:size-9 rounded-xl border border-slate-200/90 bg-white hover:bg-blue-600 hover:border-blue-600 text-slate-700 hover:text-white flex items-center justify-center shadow-2xs transition-colors cursor-pointer"
            >
              <ChevronRight className="size-4 sm:size-4.5" />
            </motion.button>
          </div>
        </div>
      </div>

      {/* Carousel Viewport */}
      <div
        className="overflow-hidden -mx-2 px-0.5 py-1"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <motion.div
          animate={{ x: `-${index * slideWidthPct}%` }}
          transition={{ type: 'spring', stiffness: 280, damping: 30, mass: 0.9 }}
          className="flex items-stretch"
        >
          {items.map((node, i) => (
            <div
              key={i}
              style={{ flex: `0 0 ${slideWidthPct}%`, maxWidth: `${slideWidthPct}%` }}
              className="px-2 flex flex-col"
            >
              <div className="h-full flex-1 flex flex-col">{node}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}
