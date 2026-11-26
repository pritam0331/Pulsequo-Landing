/**
 * HorizontalCardCarousel
 * Compact caret-controlled horizontal card carousel to reduce vertical page scroll.
 * Supports smooth native touch swipe, snap alignment, left/right carets, and progress dots.
 */

import React, { useRef, useState, useEffect, useCallback } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import {
  HorizontalCarouselSkeleton,
  useCardHydration,
  type HorizontalSkeletonVariant,
} from './CardSkeleton'

interface HorizontalCardCarouselProps {
  children: React.ReactNode
  className?: string
  itemCount?: number
  ariaLabel?: string
  /** 'always' = carousel on all viewports; 'mobile' = carousel below lg, grid on lg+ */
  mode?: 'always' | 'mobile'
  /** Grid classes applied when mode === 'mobile' on lg+ screens */
  desktopGridClassName?: string
  /** Optional header label on the left of the caret controls */
  counterLabel?: string
  /** Dimension-matched skeleton card preset rendered during content hydration */
  skeletonVariant?: HorizontalSkeletonVariant
  /** Render dark skeleton surfaces for dark sections */
  skeletonDark?: boolean
  /** Explicit external loading override */
  isLoading?: boolean
  /** Disable built-in hydration skeleton when parent container already wraps a skeleton */
  disableSkeleton?: boolean
}

export function HorizontalCardCarousel({
  children,
  className = '',
  itemCount,
  ariaLabel = 'Card carousel',
  mode = 'always',
  desktopGridClassName = 'lg:grid lg:grid-cols-4 lg:gap-5 lg:overflow-visible',
  counterLabel,
  skeletonVariant = 'benefit',
  skeletonDark = false,
  isLoading,
  disableSkeleton = false,
}: HorizontalCardCarouselProps) {
  const trackRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)
  const [activeIndex, setActiveIndex] = useState(0)

  const isHydrated = useCardHydration(disableSkeleton ? 0 : 200)
  const showSkeleton = !disableSkeleton && (isLoading ?? !isHydrated)

  const childArray = React.Children.toArray(children)
  const total = itemCount ?? childArray.length

  const updateScrollState = useCallback(() => {
    const el = trackRef.current
    if (!el) return
    const { scrollLeft, scrollWidth, clientWidth } = el
    setCanScrollLeft(scrollLeft > 8)
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 8)

    if (total > 1 && scrollWidth > clientWidth) {
      const progress = scrollLeft / (scrollWidth - clientWidth)
      setActiveIndex(Math.min(total - 1, Math.max(0, Math.round(progress * (total - 1)))))
    } else {
      setActiveIndex(0)
    }
  }, [total])

  useEffect(() => {
    if (showSkeleton) return
    updateScrollState()
    const el = trackRef.current
    if (!el) return
    el.addEventListener('scroll', updateScrollState, { passive: true })
    window.addEventListener('resize', updateScrollState, { passive: true })
    return () => {
      el.removeEventListener('scroll', updateScrollState)
      window.removeEventListener('resize', updateScrollState)
    }
  }, [updateScrollState, total, showSkeleton])

  const scrollByStep = (direction: -1 | 1) => {
    const el = trackRef.current
    if (!el) return
    const firstChild = el.firstElementChild as HTMLElement | null
    const step = firstChild ? firstChild.offsetWidth + 16 : Math.max(280, el.clientWidth * 0.78)
    el.scrollBy({ left: direction * step, behavior: 'smooth' })
  }

  const scrollToIndex = (idx: number) => {
    const el = trackRef.current
    if (!el) return
    const target = el.children[idx] as HTMLElement | undefined
    if (target) {
      el.scrollTo({ left: target.offsetLeft, behavior: 'smooth' })
    }
  }

  const controlsVisibility = mode === 'mobile' ? 'flex lg:hidden' : 'flex'

  if (showSkeleton) {
    return (
      <div aria-busy="true" aria-label={`Loading ${ariaLabel}`}>
        <HorizontalCarouselSkeleton
          count={total || 4}
          mode={mode}
          desktopGridClassName={desktopGridClassName}
          variant={skeletonVariant}
          dark={skeletonDark}
          className={className}
        />
      </div>
    )
  }

  return (
    <div
      className={`relative w-full ${className}`}
      role="region"
      aria-roledescription="carousel"
      aria-label={ariaLabel}
    >
      {/* Top-right Caret Controls Bar */}
      {total > 1 && (
        <div className={`${controlsVisibility} items-center justify-between gap-3 mb-3 sm:mb-4`}>
          <div className="flex items-center gap-2 text-[11px] font-mono text-slate-500">
            <span className="font-bold text-slate-800 tabular-nums">
              {String(activeIndex + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
            </span>
            {counterLabel && (
              <>
                <span className="text-slate-300" aria-hidden="true">·</span>
                <span className="truncate">{counterLabel}</span>
              </>
            )}
          </div>

          <div className="flex items-center gap-1.5">
            <button
              type="button"
              onClick={() => scrollByStep(-1)}
              disabled={!canScrollLeft}
              aria-label="Scroll left"
              className={`size-8 sm:size-9 rounded-lg border flex items-center justify-center transition-all cursor-pointer ${
                canScrollLeft
                  ? 'bg-white border-slate-200/90 text-slate-700 hover:bg-blue-600 hover:text-white hover:border-blue-600 shadow-2xs'
                  : 'bg-slate-50 border-slate-200/60 text-slate-300 cursor-not-allowed'
              }`}
            >
              <ChevronLeft className="size-4" />
            </button>
            <button
              type="button"
              onClick={() => scrollByStep(1)}
              disabled={!canScrollRight}
              aria-label="Scroll right"
              className={`size-8 sm:size-9 rounded-lg border flex items-center justify-center transition-all cursor-pointer ${
                canScrollRight
                  ? 'bg-white border-slate-200/90 text-slate-700 hover:bg-blue-600 hover:text-white hover:border-blue-600 shadow-2xs'
                  : 'bg-slate-50 border-slate-200/60 text-slate-300 cursor-not-allowed'
              }`}
            >
              <ChevronRight className="size-4" />
            </button>
          </div>
        </div>
      )}

      <div
        ref={trackRef}
        className={
          mode === 'mobile'
            ? `flex gap-3.5 sm:gap-5 overflow-x-auto snap-x snap-mandatory no-scrollbar pt-2 pb-3 -mt-2 -mx-1 px-1 items-stretch ${desktopGridClassName} lg:pt-0 lg:pb-0 lg:mt-0 lg:mx-0 lg:px-0`
            : 'flex gap-4 sm:gap-5 overflow-x-auto snap-x snap-mandatory no-scrollbar pt-2 pb-3 -mt-2 -mx-1 px-1 items-stretch'
        }
      >
        {children}
      </div>

      {/* Minimal Progress Dots */}
      {total > 1 && (
        <div className={`${controlsVisibility} items-center justify-center gap-1.5 mt-3`}>
          {childArray.map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => scrollToIndex(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                idx === activeIndex
                  ? 'w-5 bg-blue-600'
                  : 'w-1.5 bg-slate-300 hover:bg-slate-400'
              }`}
            />
          ))}
        </div>
      )}
    </div>
  )
}
