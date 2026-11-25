/**
 * Reusable Horizontal Caret Card Carousel
 * Reduces vertical page scroll by presenting multi-card collections in a
 * smooth horizontal snap-scrolling carousel with left/right carets and page indicators.
 */

import React, { useRef, useState, useEffect, useCallback } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface CardCarouselProps {
  children: React.ReactNode
  ariaLabel?: string
  className?: string
  trackClassName?: string
  /** When true, displays as a caret carousel on mobile/tablet and switches to desktopGridClass on lg+ */
  mobileOnly?: boolean
  desktopGridClass?: string
}

export function CardCarousel({
  children,
  ariaLabel = 'Card carousel',
  className = '',
  trackClassName = '',
  mobileOnly = false,
  desktopGridClass = 'lg:grid lg:grid-cols-4 lg:gap-5 lg:overflow-visible lg:pb-0',
}: CardCarouselProps) {
  const trackRef = useRef<HTMLDivElement>(null)
  const [canPrev, setCanPrev] = useState(false)
  const [canNext, setCanNext] = useState(true)
  const [activeDot, setActiveDot] = useState(0)
  const [pageCount, setPageCount] = useState(1)

  const syncScrollState = useCallback(() => {
    const el = trackRef.current
    if (!el) return
    const maxScroll = Math.max(0, el.scrollWidth - el.clientWidth)
    setCanPrev(el.scrollLeft > 8)
    setCanNext(el.scrollLeft < maxScroll - 8)

    if (maxScroll <= 8 || el.clientWidth <= 0) {
      setPageCount(1)
      setActiveDot(0)
    } else {
      const pages = Math.max(2, Math.min(8, Math.ceil(el.scrollWidth / (el.clientWidth * 0.85))))
      setPageCount(pages)
      const progress = el.scrollLeft / maxScroll
      setActiveDot(Math.round(progress * (pages - 1)))
    }
  }, [])

  useEffect(() => {
    syncScrollState()
    const el = trackRef.current
    if (!el) return

    el.addEventListener('scroll', syncScrollState, { passive: true })
    const ro = new ResizeObserver(syncScrollState)
    ro.observe(el)

    return () => {
      el.removeEventListener('scroll', syncScrollState)
      ro.disconnect()
    }
  }, [syncScrollState, children])

  const scrollByStep = (direction: -1 | 1) => {
    const el = trackRef.current
    if (!el) return
    const step = Math.max(260, el.clientWidth * 0.82)
    el.scrollBy({ left: direction * step, behavior: 'smooth' })
  }

  const scrollToPage = (pageIdx: number) => {
    const el = trackRef.current
    if (!el) return
    const maxScroll = Math.max(0, el.scrollWidth - el.clientWidth)
    if (pageCount <= 1) return
    const target = (pageIdx / (pageCount - 1)) * maxScroll
    el.scrollTo({ left: target, behavior: 'smooth' })
  }

  const controlsVisibility = mobileOnly ? 'lg:hidden' : ''

  return (
    <div
      className={`relative w-full ${className}`}
      role="region"
      aria-roledescription="carousel"
      aria-label={ariaLabel}
    >
      {/* Top-Right Compact Caret Controls Bar */}
      <div className={`flex items-center justify-between gap-3 mb-3.5 sm:mb-4 ${controlsVisibility}`}>
        <div className="flex items-center gap-1.5">
          {pageCount > 1 &&
            Array.from({ length: pageCount }).map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => scrollToPage(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                  idx === activeDot ? 'w-6 bg-blue-600' : 'w-1.5 bg-slate-300 hover:bg-slate-400'
                }`}
              />
            ))}
        </div>

        <div className="flex items-center gap-1.5">
          <button
            type="button"
            onClick={() => scrollByStep(-1)}
            disabled={!canPrev}
            aria-label="Previous items"
            className="size-8 sm:size-9 rounded-xl border border-slate-200/90 bg-white text-slate-700 hover:bg-blue-600 hover:text-white hover:border-blue-600 disabled:opacity-35 disabled:hover:bg-white disabled:hover:text-slate-700 disabled:hover:border-slate-200/90 flex items-center justify-center shadow-2xs transition-colors cursor-pointer disabled:cursor-not-allowed"
          >
            <ChevronLeft className="size-4" />
          </button>
          <button
            type="button"
            onClick={() => scrollByStep(1)}
            disabled={!canNext}
            aria-label="Next items"
            className="size-8 sm:size-9 rounded-xl border border-slate-200/90 bg-white text-slate-700 hover:bg-blue-600 hover:text-white hover:border-blue-600 disabled:opacity-35 disabled:hover:bg-white disabled:hover:text-slate-700 disabled:hover:border-slate-200/90 flex items-center justify-center shadow-2xs transition-colors cursor-pointer disabled:cursor-not-allowed"
          >
            <ChevronRight className="size-4" />
          </button>
        </div>
      </div>

      {/* Horizontal Scroll-Snap Track (switches to grid on lg+ when mobileOnly is true) */}
      <div
        ref={trackRef}
        className={`flex gap-3.5 sm:gap-5 overflow-x-auto overflow-y-visible snap-x snap-mandatory scroll-smooth no-scrollbar pb-2 items-stretch ${
          mobileOnly ? desktopGridClass : ''
        } ${trackClassName}`}
      >
        {children}
      </div>
    </div>
  )
}
