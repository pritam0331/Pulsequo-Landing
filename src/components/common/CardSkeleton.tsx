import React, { useEffect, useState } from 'react'

export function useCardHydration(delayMs = 200, resetKey?: string | number | boolean): boolean {
  const [isHydrated, setIsHydrated] = useState(false)

  useEffect(() => {
    setIsHydrated(false)
    let rafId = 0
    let timerId = 0

    const effectiveDelay =
      typeof window !== 'undefined' &&
      typeof window.matchMedia === 'function' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
        ? 0
        : delayMs

    rafId = window.requestAnimationFrame(() => {
      if (effectiveDelay <= 0) {
        setIsHydrated(true)
      } else {
        timerId = window.setTimeout(() => {
          setIsHydrated(true)
        }, effectiveDelay)
      }
    })

    return () => {
      window.cancelAnimationFrame(rafId)
      if (timerId) window.clearTimeout(timerId)
    }
  }, [delayMs, resetKey])

  return isHydrated
}

export function SkeletonBlock({ className = '', dark = false }: { className?: string; dark?: boolean }) {
  return (
    <div
      aria-hidden="true"
      className={`${dark ? 'skeleton-shimmer-dark' : 'skeleton-shimmer'} rounded-md ${className}`}
    />
  )
}

interface CardSectionHydratorProps {
  skeleton: React.ReactNode
  children: React.ReactNode
  isLoading?: boolean
  delayMs?: number
  resetKey?: string | number | boolean
  ariaLabel?: string
  className?: string
}

export function CardSectionHydrator({
  skeleton,
  children,
  isLoading,
  delayMs = 200,
  resetKey,
  ariaLabel = 'Loading content section',
  className = '',
}: CardSectionHydratorProps) {
  const isHydrated = useCardHydration(delayMs, resetKey)
  const showSkeleton = isLoading ?? !isHydrated

  return (
    <div
      className={className}
      aria-busy={showSkeleton}
      aria-label={showSkeleton ? ariaLabel : undefined}
    >
      {showSkeleton ? skeleton : children}
    </div>
  )
}

export function CardFanoutSkeleton({
  compact = false,
  hideHeader = false,
  className = '',
}: {
  compact?: boolean
  hideHeader?: boolean
  className?: string
}) {
  return (
    <div
      aria-hidden="true"
      className={`relative ${compact ? 'w-full max-w-lg mx-auto' : 'w-full max-w-xl mx-auto'} ${className}`}
    >
      {!hideHeader && (
        <div className="mb-8 flex flex-col items-center">
          <SkeletonBlock className="h-8 w-64 sm:w-80 rounded-lg" />
          <SkeletonBlock className="mt-2 h-4 w-72 sm:w-96" />
        </div>
      )}

      <div className="relative pt-12 sm:pt-14 pb-2 select-none">
        <div className={`relative w-full ${compact ? 'h-[388px] sm:h-[404px]' : 'h-[404px] sm:h-[420px]'}`}>
          {/* Back stacked silhouettes */}
          <div
            className={`absolute inset-x-0 bottom-0 -translate-y-8 scale-[0.91] origin-top ${
              compact ? 'min-h-[322px] sm:min-h-[344px]' : 'min-h-[336px] sm:min-h-[358px]'
            } rounded-2xl bg-white/80 border border-slate-200/80 shadow-xs`}
          />
          <div
            className={`absolute inset-x-0 bottom-0 -translate-y-4 scale-[0.955] origin-top ${
              compact ? 'min-h-[322px] sm:min-h-[344px]' : 'min-h-[336px] sm:min-h-[358px]'
            } rounded-2xl bg-white/95 border border-slate-200/90 shadow-sm`}
          />

          {/* Front active card silhouette */}
          <div
            className={`absolute inset-x-0 bottom-0 flex flex-col justify-between ${
              compact ? 'min-h-[322px] sm:min-h-[344px]' : 'min-h-[336px] sm:min-h-[358px]'
            } rounded-2xl bg-white border border-slate-200/95 shadow-xl overflow-hidden`}
          >
            <SkeletonBlock className="h-1.5 w-full rounded-none" />
            <div className={`flex flex-col flex-1 justify-between ${compact ? 'p-4 sm:p-6' : 'p-5 sm:p-6'}`}>
              <div>
                <div className="flex items-center justify-between gap-2 mb-3.5">
                  <SkeletonBlock className="h-3.5 w-36" />
                  <SkeletonBlock className="h-5 w-24 rounded-sm" />
                </div>

                <div className="flex items-start gap-3">
                  <SkeletonBlock className="size-9 sm:size-10 rounded-xl shrink-0" />
                  <div className="flex-1 space-y-2">
                    <SkeletonBlock className="h-4.5 w-3/4" />
                    <SkeletonBlock className="h-3.5 w-1/2" />
                  </div>
                </div>

                <div className="mt-4 p-3.5 sm:p-4 rounded-xl bg-slate-50/90 border border-slate-100 space-y-2">
                  <SkeletonBlock className="h-3.5 w-full" />
                  <SkeletonBlock className="h-3.5 w-11/12" />
                  <SkeletonBlock className="h-3.5 w-2/3" />
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
                <div className="space-y-1.5">
                  <SkeletonBlock className="h-5 w-20" />
                  <SkeletonBlock className="h-3 w-28" />
                </div>
                <SkeletonBlock className="h-3.5 w-28" />
              </div>
            </div>
          </div>
        </div>

        {/* Controls Bar Skeleton */}
        <div className="mt-4 flex items-center justify-between gap-3 px-1">
          <div className="flex items-center gap-2">
            <SkeletonBlock className="h-3.5 w-10" />
            <SkeletonBlock className="h-3.5 w-32 sm:w-44" />
          </div>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1">
              <SkeletonBlock className="h-1.5 w-5 rounded-full" />
              <SkeletonBlock className="h-1.5 w-1.5 rounded-full" />
              <SkeletonBlock className="h-1.5 w-1.5 rounded-full" />
              <SkeletonBlock className="h-1.5 w-1.5 rounded-full" />
            </div>
            <div className="flex items-center gap-1 ml-1">
              <SkeletonBlock className="size-7 rounded-lg" />
              <SkeletonBlock className="size-7 rounded-lg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function Card3DCarouselSkeleton({
  headline,
  subheadline,
  className = '',
}: {
  headline?: string
  subheadline?: string
  className?: string
}) {
  return (
    <div aria-hidden="true" className={`relative w-full mx-auto ${className}`}>
      <div className="mb-6 sm:mb-10 text-center max-w-3xl mx-auto">
        {headline ? (
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-black tracking-[-0.02em] leading-[1.18] text-balance">
            {headline}
          </h2>
        ) : (
          <SkeletonBlock className="h-9 w-3/4 mx-auto rounded-lg" />
        )}
        {subheadline ? (
          <p className="mt-2 text-xs sm:text-base text-slate-600 leading-relaxed text-pretty">
            {subheadline}
          </p>
        ) : (
          <SkeletonBlock className="mt-3 h-4 w-2/3 mx-auto" />
        )}
      </div>

      <div className="relative flex items-center justify-center">
        <SkeletonBlock className="absolute left-0 sm:left-4 lg:left-8 z-40 size-9 sm:size-11 rounded-xl" />

        <div className="relative w-full h-[380px] sm:h-[420px] flex items-center justify-center overflow-hidden">
          {/* Side flanking card silhouettes */}
          <div className="hidden sm:flex absolute -translate-x-[230px] lg:-translate-x-[285px] scale-[0.86] opacity-75 w-[376px] lg:w-[436px] min-h-[322px] sm:min-h-[354px] flex-col rounded-2xl bg-white border border-slate-200/90 shadow-md overflow-hidden">
            <SkeletonBlock className="h-1.5 w-full rounded-none" />
            <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex justify-between">
                  <SkeletonBlock className="h-3.5 w-28" />
                  <SkeletonBlock className="h-4 w-20 rounded-sm" />
                </div>
                <div className="flex gap-3">
                  <SkeletonBlock className="size-10 rounded-xl shrink-0" />
                  <div className="flex-1 space-y-2">
                    <SkeletonBlock className="h-4 w-3/4" />
                    <SkeletonBlock className="h-3 w-1/2" />
                  </div>
                </div>
                <SkeletonBlock className="h-24 w-full rounded-xl" />
              </div>
              <div className="pt-3 border-t border-slate-100 flex justify-between">
                <SkeletonBlock className="h-6 w-20" />
                <SkeletonBlock className="h-4 w-24" />
              </div>
            </div>
          </div>

          <div className="hidden sm:flex absolute translate-x-[230px] lg:translate-x-[285px] scale-[0.86] opacity-75 w-[376px] lg:w-[436px] min-h-[322px] sm:min-h-[354px] flex-col rounded-2xl bg-white border border-slate-200/90 shadow-md overflow-hidden">
            <SkeletonBlock className="h-1.5 w-full rounded-none" />
            <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex justify-between">
                  <SkeletonBlock className="h-3.5 w-28" />
                  <SkeletonBlock className="h-4 w-20 rounded-sm" />
                </div>
                <div className="flex gap-3">
                  <SkeletonBlock className="size-10 rounded-xl shrink-0" />
                  <div className="flex-1 space-y-2">
                    <SkeletonBlock className="h-4 w-3/4" />
                    <SkeletonBlock className="h-3 w-1/2" />
                  </div>
                </div>
                <SkeletonBlock className="h-24 w-full rounded-xl" />
              </div>
              <div className="pt-3 border-t border-slate-100 flex justify-between">
                <SkeletonBlock className="h-6 w-20" />
                <SkeletonBlock className="h-4 w-24" />
              </div>
            </div>
          </div>

          {/* Center active card silhouette */}
          <div className="relative z-30 w-[280px] sm:w-[376px] lg:w-[436px] min-h-[322px] sm:min-h-[354px] flex flex-col justify-between rounded-2xl bg-white border border-slate-200 shadow-2xl overflow-hidden">
            <SkeletonBlock className="h-1.5 w-full rounded-none" />
            <div className="p-4 sm:p-6 flex flex-col flex-1 justify-between">
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <SkeletonBlock className="h-3.5 w-36" />
                  <SkeletonBlock className="h-5 w-24 rounded-sm" />
                </div>
                <div className="flex items-start gap-3">
                  <SkeletonBlock className="size-9 sm:size-10 rounded-xl shrink-0" />
                  <div className="flex-1 space-y-2">
                    <SkeletonBlock className="h-4.5 w-4/5" />
                    <SkeletonBlock className="h-3.5 w-1/2" />
                  </div>
                </div>
                <div className="mt-4 p-3.5 rounded-xl bg-slate-50/90 border border-slate-100 space-y-2">
                  <SkeletonBlock className="h-3.5 w-full" />
                  <SkeletonBlock className="h-3.5 w-11/12" />
                  <SkeletonBlock className="h-3.5 w-3/4" />
                </div>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                <div className="space-y-1.5">
                  <SkeletonBlock className="h-5 w-20" />
                  <SkeletonBlock className="h-3 w-28" />
                </div>
                <SkeletonBlock className="h-3.5 w-28" />
              </div>
            </div>
          </div>
        </div>

        <SkeletonBlock className="absolute right-0 sm:right-4 lg:right-8 z-40 size-9 sm:size-11 rounded-xl" />
      </div>

      <div className="mt-4 flex items-center justify-center gap-2">
        <SkeletonBlock className="h-1.5 w-8 rounded-full" />
        <SkeletonBlock className="h-1.5 w-2 rounded-full" />
        <SkeletonBlock className="h-1.5 w-2 rounded-full" />
        <SkeletonBlock className="h-1.5 w-2 rounded-full" />
        <SkeletonBlock className="h-1.5 w-2 rounded-full" />
      </div>
    </div>
  )
}

export function PricingCardsSkeleton({
  showAdditionalSupport = true,
  className = '',
}: {
  showAdditionalSupport?: boolean
  className?: string
}) {
  return (
    <div aria-hidden="true" className={`w-full ${className}`}>
      {/* Toggle Skeleton */}
      <div className="flex flex-col items-center justify-center">
        <div className="inline-flex items-center gap-1 p-1.5 rounded-2xl bg-slate-100 border border-slate-200/90">
          <SkeletonBlock className="h-9 sm:h-10 w-32 sm:w-36 rounded-xl" />
          <SkeletonBlock className="h-9 sm:h-10 w-44 sm:w-48 rounded-xl" />
        </div>
        <SkeletonBlock className="mt-3 h-4 w-72 sm:w-96" />
      </div>

      {/* 3 Pricing Card Skeletons */}
      <div className="mt-8 sm:mt-10 max-w-6xl mx-auto">
        <div className="flex lg:hidden items-center justify-between mb-3 sm:mb-4">
          <SkeletonBlock className="h-4 w-28" />
          <div className="flex gap-1.5">
            <SkeletonBlock className="size-8 sm:size-9 rounded-lg" />
            <SkeletonBlock className="size-8 sm:size-9 rounded-lg" />
          </div>
        </div>

        <div className="flex gap-3.5 sm:gap-5 overflow-hidden lg:grid lg:grid-cols-3 lg:gap-6">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className={`shrink-0 w-[84vw] max-w-[330px] sm:w-[340px] lg:w-auto lg:max-w-none rounded-2xl bg-white overflow-hidden flex flex-col justify-between ${
                i === 1 ? 'border-2 border-blue-200 shadow-lg' : 'border border-slate-200/90 shadow-xs'
              }`}
            >
              <SkeletonBlock className="h-1.5 w-full rounded-none" />
              <div className="p-5 sm:p-7 flex flex-col flex-1 lg:min-h-[476px]">
                <div className="flex items-center justify-between gap-2 min-h-[40px]">
                  <div className="flex items-center gap-2.5">
                    <SkeletonBlock className="size-9 rounded-xl shrink-0" />
                    <SkeletonBlock className="h-6 w-24" />
                  </div>
                  <SkeletonBlock className="h-5 w-20 rounded-md" />
                </div>

                <div className="mt-3.5 min-h-[46px] space-y-2">
                  <SkeletonBlock className="h-3.5 w-full" />
                  <SkeletonBlock className="h-3.5 w-4/5" />
                </div>

                <div className="mt-4 rounded-xl px-4 py-4 border border-slate-100 bg-slate-50/80 min-h-[96px] flex flex-col justify-center gap-2.5">
                  <SkeletonBlock className="h-9 w-32" />
                  <SkeletonBlock className="h-3.5 w-44" />
                </div>

                <div className="mt-6 flex-1">
                  <SkeletonBlock className="h-3 w-24" />
                  <div className="mt-3.5 space-y-3">
                    {[0, 1, 2, 3, 4, 5].map((f) => (
                      <div key={f} className="flex items-center gap-2.5">
                        <SkeletonBlock className="size-4 rounded-full shrink-0" />
                        <SkeletonBlock className={`h-3.5 ${f % 2 === 0 ? 'w-4/5' : 'w-3/4'}`} />
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-7 pt-5 border-t border-slate-100">
                  <SkeletonBlock className="h-11 w-full rounded-xl" />
                  <SkeletonBlock className="mt-2.5 h-3 w-48 mx-auto" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Optional Concierge Support Card Skeleton */}
      {showAdditionalSupport && (
        <div className="mt-8 max-w-6xl mx-auto rounded-2xl bg-slate-50/90 border border-slate-200/90 p-5 sm:p-6 flex flex-col lg:flex-row items-center justify-between gap-5">
          <div className="w-full max-w-xl space-y-2.5">
            <SkeletonBlock className="h-4 w-52" />
            <SkeletonBlock className="h-6 w-80 max-w-full" />
            <SkeletonBlock className="h-4 w-full" />
            <div className="pt-1 flex gap-4">
              <SkeletonBlock className="h-4 w-32" />
              <SkeletonBlock className="h-4 w-40" />
            </div>
          </div>
          <SkeletonBlock className="h-10 w-full sm:w-48 rounded-xl shrink-0" />
        </div>
      )}
    </div>
  )
}

export function TestimonialsCarouselSkeleton({ className = '' }: { className?: string }) {
  return (
    <div aria-hidden="true" className={`relative w-full max-w-4xl mx-auto ${className}`}>
      {/* Brand Tabs Switcher Skeleton */}
      <div className="flex justify-center mb-5 overflow-hidden pb-1">
        <div className="inline-flex items-center gap-1 p-1 rounded-xl bg-slate-100/90 border border-slate-200/80">
          <SkeletonBlock className="h-7 w-24 rounded-lg" />
          <SkeletonBlock className="h-7 w-24 rounded-lg" />
          <SkeletonBlock className="h-7 w-24 rounded-lg hidden sm:block" />
          <SkeletonBlock className="h-7 w-24 rounded-lg hidden sm:block" />
          <SkeletonBlock className="h-7 w-28 rounded-lg hidden md:block" />
        </div>
      </div>

      {/* Main Review Card Skeleton */}
      <div className="relative rounded-2xl bg-white border border-slate-200/90 shadow-sm overflow-hidden p-5 sm:p-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 items-center">
          <div className="lg:col-span-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <SkeletonBlock className="h-4 w-24" />
                <SkeletonBlock className="h-4 w-36" />
              </div>

              <div className="space-y-2.5">
                <SkeletonBlock className="h-4 w-full" />
                <SkeletonBlock className="h-4 w-11/12" />
                <SkeletonBlock className="h-4 w-4/5" />
              </div>

              <div className="mt-4 flex flex-wrap gap-3">
                <SkeletonBlock className="h-3.5 w-36" />
                <SkeletonBlock className="h-3.5 w-40" />
                <SkeletonBlock className="h-3.5 w-32" />
              </div>
            </div>

            <div className="mt-4 pt-3.5 border-t border-slate-100 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <SkeletonBlock className="size-9 rounded-lg shrink-0" />
                <div className="space-y-1.5">
                  <SkeletonBlock className="h-4 w-28" />
                  <SkeletonBlock className="h-3 w-40" />
                </div>
              </div>
              <SkeletonBlock className="hidden sm:block h-3.5 w-24" />
            </div>
          </div>

          <div className="lg:col-span-4">
            <div className="p-4 sm:p-5 rounded-xl bg-slate-50 border border-slate-200/80 space-y-3">
              <SkeletonBlock className="h-3.5 w-24" />
              <SkeletonBlock className="h-9 w-28" />
              <SkeletonBlock className="h-3.5 w-36" />
              <div className="pt-2.5 border-t border-slate-200/80">
                <SkeletonBlock className="h-3 w-44" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function IntegrationsCarouselSkeleton({ className = '' }: { className?: string }) {
  return (
    <div aria-hidden="true" className={`relative w-full ${className}`}>
      <div className="flex justify-center mb-8 overflow-hidden pb-1">
        <div className="inline-flex flex-wrap sm:flex-nowrap items-center justify-center gap-1.5 p-1 rounded-xl bg-slate-100/90 border border-slate-200/80">
          <SkeletonBlock className="h-8 w-28 rounded-lg" />
          <SkeletonBlock className="h-8 w-28 rounded-lg" />
          <SkeletonBlock className="h-8 w-32 rounded-lg hidden sm:block" />
          <SkeletonBlock className="h-8 w-32 rounded-lg hidden md:block" />
          <SkeletonBlock className="h-8 w-32 rounded-lg hidden lg:block" />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
        <div className="lg:col-span-7 flex items-center justify-center">
          <div className="relative w-full max-w-[440px] aspect-square flex items-center justify-center">
            <div className="absolute inset-[10%] rounded-full border border-dashed border-slate-200" />
            <div className="absolute inset-[27%] rounded-full border border-slate-200" />
            <SkeletonBlock className="size-24 rounded-2xl" />
          </div>
        </div>

        <div className="lg:col-span-5 space-y-4">
          <div className="rounded-xl border border-slate-200 bg-white p-5 space-y-4">
            <div className="flex items-center gap-3.5">
              <SkeletonBlock className="size-11 rounded-xl shrink-0" />
              <div className="space-y-1.5 flex-1">
                <SkeletonBlock className="h-4 w-36" />
                <SkeletonBlock className="h-3 w-24" />
              </div>
            </div>
            <SkeletonBlock className="h-12 w-full rounded-lg" />
            <div className="grid grid-cols-2 gap-2.5 pt-2 border-t border-slate-100">
              <SkeletonBlock className="h-11 rounded-lg" />
              <SkeletonBlock className="h-11 rounded-lg" />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2">
            {[0, 1, 2, 3, 4, 5].map((item) => (
              <div
                key={item}
                className="flex items-center gap-2.5 rounded-lg border border-slate-200 bg-white px-2.5 py-2"
              >
                <SkeletonBlock className="size-6 rounded-md shrink-0" />
                <div className="space-y-1 flex-1">
                  <SkeletonBlock className="h-3 w-20" />
                  <SkeletonBlock className="h-2 w-14" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export function PlatformCompositionSkeleton() {
  return (
    <div
      aria-hidden="true"
      className="w-full rounded-xl border border-slate-200/90 bg-white shadow-lg overflow-hidden"
    >
      <div className="lg:hidden border-b border-slate-100 bg-white px-3 py-2.5">
        <div className="flex items-center justify-between mb-2">
          <SkeletonBlock className="h-4 w-20" />
          <SkeletonBlock className="h-3 w-20" />
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-1.5">
          {[0, 1, 2, 3, 4].map((i) => (
            <SkeletonBlock key={i} className="h-8 rounded-lg" />
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 lg:h-[440px]">
        <aside className="hidden lg:flex lg:col-span-2 p-3.5 flex-col justify-between bg-white border-r border-slate-100">
          <div>
            <SkeletonBlock className="h-4 w-20" />
            <SkeletonBlock className="h-2.5 w-14 mt-3 mb-2" />
            <div className="space-y-1.5">
              {[0, 1, 2, 3, 4].map((i) => (
                <SkeletonBlock key={i} className="h-7 w-full rounded-lg" />
              ))}
            </div>
          </div>
          <SkeletonBlock className="h-3 w-20 mt-2" />
        </aside>

        <div className="lg:col-span-10 grid grid-cols-1 md:grid-cols-12 min-h-[340px] lg:h-[440px]">
          <div className="hidden md:flex md:col-span-4 xl:col-span-3 p-2.5 flex-col border-r border-slate-100 gap-2">
            <div className="flex justify-between">
              <SkeletonBlock className="h-3.5 w-20" />
              <SkeletonBlock className="h-3.5 w-6" />
            </div>
            <SkeletonBlock className="h-6 w-full rounded-lg" />
            <div className="space-y-1.5 pt-1">
              {[0, 1, 2, 3].map((i) => (
                <div key={i} className="p-1.5 rounded-lg border border-slate-100 space-y-1">
                  <div className="flex justify-between">
                    <SkeletonBlock className="h-2.5 w-24" />
                    <SkeletonBlock className="h-2 w-6" />
                  </div>
                  <SkeletonBlock className="h-2 w-4/5" />
                </div>
              ))}
            </div>
          </div>

          <div className="md:col-span-8 xl:col-span-6 p-3 flex flex-col justify-between xl:border-r border-slate-100">
            <div className="space-y-2.5">
              <div className="pb-2 border-b border-slate-100 flex justify-between">
                <SkeletonBlock className="h-3.5 w-40" />
                <SkeletonBlock className="h-3 w-20" />
              </div>
              <div className="space-y-2">
                <SkeletonBlock className="h-11 w-4/5 rounded-xl" />
                <SkeletonBlock className="h-14 w-5/6 ml-auto rounded-xl" />
                <SkeletonBlock className="h-7 w-3/4 rounded-lg" />
              </div>
            </div>
            <SkeletonBlock className="h-8 w-full rounded-lg mt-2" />
          </div>

          <div className="hidden xl:flex xl:col-span-3 p-2.5 flex-col justify-between bg-slate-50/40">
            <div className="space-y-2">
              <SkeletonBlock className="h-3 w-24" />
              <SkeletonBlock className="h-11 w-full rounded-lg" />
              <div className="p-2 rounded-lg bg-white border border-slate-100 space-y-1.5">
                {[0, 1, 2, 3].map((i) => (
                  <div key={i} className="flex justify-between">
                    <SkeletonBlock className="h-2 w-14" />
                    <SkeletonBlock className="h-2 w-18" />
                  </div>
                ))}
              </div>
            </div>
            <SkeletonBlock className="h-9 w-full rounded-lg" />
          </div>
        </div>
      </div>
    </div>
  )
}

export function ActionSpotlightSkeleton() {
  return (
    <div
      aria-hidden="true"
      className="mt-10 sm:mt-12 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch"
    >
      {/* Left 4 Selector Cards */}
      <div className="lg:col-span-5 flex flex-col gap-3">
        {[0, 1, 2, 3].map((idx) => (
          <div
            key={idx}
            className={`w-full rounded-2xl border p-4 sm:p-5 flex items-start gap-3.5 ${
              idx === 0 ? 'bg-white border-blue-200 shadow-sm' : 'bg-slate-50/75 border-slate-200/90'
            }`}
          >
            <SkeletonBlock className="size-10 rounded-xl shrink-0 mt-0.5" />
            <div className="flex-1 space-y-2">
              <div className="flex items-center justify-between gap-2">
                <SkeletonBlock className="h-3 w-36" />
                <SkeletonBlock className="h-3.5 w-12" />
              </div>
              <SkeletonBlock className="h-4.5 w-5/6" />
            </div>
          </div>
        ))}
      </div>

      {/* Right Expanded Detail Card */}
      <div className="lg:col-span-7 flex">
        <div className="w-full rounded-2xl border border-slate-200/90 bg-white shadow-xl shadow-slate-900/5 overflow-hidden flex flex-col justify-between">
          <SkeletonBlock className="h-1.5 w-full rounded-none" />
          <div className="p-6 sm:p-8 flex flex-col flex-1 justify-between">
            <div>
              <div className="flex flex-wrap items-start justify-between gap-4 pb-5 border-b border-slate-100">
                <div className="flex items-start gap-3.5 flex-1 min-w-[220px]">
                  <SkeletonBlock className="size-11 rounded-xl shrink-0" />
                  <div className="flex-1 space-y-2">
                    <SkeletonBlock className="h-3.5 w-44" />
                    <SkeletonBlock className="h-6 w-4/5" />
                    <SkeletonBlock className="h-3.5 w-56" />
                  </div>
                </div>
                <div className="rounded-xl bg-slate-50 border border-slate-200/80 px-4 py-2.5 w-32 space-y-1.5">
                  <SkeletonBlock className="h-7 w-16 ml-auto" />
                  <SkeletonBlock className="h-3 w-24 ml-auto" />
                </div>
              </div>

              <div className="mt-5 space-y-2">
                <SkeletonBlock className="h-4 w-full" />
                <SkeletonBlock className="h-4 w-11/12" />
                <SkeletonBlock className="h-4 w-2/3" />
              </div>

              <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[0, 1, 2].map((s) => (
                  <div
                    key={s}
                    className="rounded-xl bg-slate-50/90 border border-slate-200/80 p-3.5 space-y-2"
                  >
                    <SkeletonBlock className="h-3.5 w-24" />
                    <SkeletonBlock className="h-3 w-full" />
                    <SkeletonBlock className="h-3 w-4/5" />
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-5 border-t border-slate-100 flex items-center justify-between gap-3">
              <SkeletonBlock className="h-3.5 w-56" />
              <SkeletonBlock className="h-4 w-32" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export type HorizontalSkeletonVariant =
  | 'product'
  | 'solution'
  | 'solution-directory'
  | 'connector'
  | 'benefit'
  | 'module-card'
  | 'capability-wide'
  | 'challenge'
  | 'dark-step'
  | 'roi'

function renderHorizontalCardBone(variant: HorizontalSkeletonVariant, idx: number) {
  switch (variant) {
    case 'product':
      return (
        <div
          key={idx}
          className="snap-start shrink-0 w-[78vw] max-w-[300px] sm:w-[310px] lg:w-auto lg:max-w-none rounded-2xl border border-slate-200/90 bg-white p-5 sm:p-6 min-h-[246px] sm:min-h-[282px] flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center justify-between mb-3.5 sm:mb-4">
              <SkeletonBlock className="size-9 sm:size-10 rounded-xl" />
              <SkeletonBlock className="h-3.5 w-20" />
            </div>
            <SkeletonBlock className="h-5 w-40" />
            <div className="mt-2 space-y-1.5">
              <SkeletonBlock className="h-3.5 w-full" />
              <SkeletonBlock className="h-3.5 w-5/6" />
            </div>
            <div className="mt-4 space-y-2">
              <SkeletonBlock className="h-3.5 w-3/4" />
              <SkeletonBlock className="h-3.5 w-2/3" />
            </div>
          </div>
          <div className="mt-5 pt-3.5 border-t border-slate-100">
            <SkeletonBlock className="h-3.5 w-28" />
          </div>
        </div>
      )

    case 'solution':
      return (
        <div
          key={idx}
          className="snap-start shrink-0 w-[66vw] max-w-[232px] sm:w-[238px] lg:w-auto lg:max-w-none rounded-xl border border-slate-200/90 bg-white p-4 min-h-[164px] sm:min-h-[172px] flex flex-col justify-between"
        >
          <div>
            <SkeletonBlock className="size-8 rounded-lg mb-2.5" />
            <SkeletonBlock className="h-4 w-28" />
            <div className="mt-2 space-y-1.5">
              <SkeletonBlock className="h-3 w-full" />
              <SkeletonBlock className="h-3 w-11/12" />
              <SkeletonBlock className="h-3 w-3/4" />
            </div>
          </div>
          <SkeletonBlock className="mt-3 h-3 w-24" />
        </div>
      )

    case 'solution-directory':
      return (
        <div
          key={idx}
          className="snap-start shrink-0 w-[84vw] max-w-[330px] sm:w-[360px] lg:w-[380px] rounded-2xl border border-slate-200/90 bg-white p-6 sm:p-7 min-h-[388px] flex flex-col justify-between"
        >
          <div>
            <SkeletonBlock className="size-11 rounded-xl mb-4" />
            <SkeletonBlock className="h-3.5 w-36" />
            <SkeletonBlock className="mt-2 h-6 w-48" />
            <div className="mt-3 space-y-2">
              <SkeletonBlock className="h-3.5 w-full" />
              <SkeletonBlock className="h-3.5 w-11/12" />
              <SkeletonBlock className="h-3.5 w-4/5" />
            </div>
            <div className="mt-5 pt-4 border-t border-slate-100 space-y-2.5">
              <SkeletonBlock className="h-3 w-24" />
              <SkeletonBlock className="h-3.5 w-5/6" />
              <SkeletonBlock className="h-3.5 w-4/5" />
              <SkeletonBlock className="h-3.5 w-3/4" />
            </div>
          </div>
          <div className="mt-6 pt-4 border-t border-slate-100">
            <SkeletonBlock className="h-4 w-36" />
          </div>
        </div>
      )

    case 'connector':
      return (
        <div
          key={idx}
          className="snap-start shrink-0 w-[82vw] max-w-[320px] sm:w-[340px] lg:w-[360px] rounded-2xl border border-slate-200/90 bg-white p-6 min-h-[340px] flex flex-col justify-between"
        >
          <div>
            <SkeletonBlock className="h-3.5 w-44 mb-3" />
            <SkeletonBlock className="h-5 w-48" />
            <div className="mt-2.5 space-y-1.5">
              <SkeletonBlock className="h-3.5 w-full" />
              <SkeletonBlock className="h-3.5 w-5/6" />
            </div>
            <div className="mt-5 pt-4 border-t border-slate-100 space-y-2">
              <SkeletonBlock className="h-3 w-24 mb-2.5" />
              <SkeletonBlock className="h-3.5 w-5/6" />
              <SkeletonBlock className="h-3.5 w-3/4" />
              <SkeletonBlock className="h-3.5 w-4/5" />
            </div>
          </div>
          <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
            <SkeletonBlock className="h-3.5 w-24" />
            <SkeletonBlock className="h-3.5 w-20" />
          </div>
        </div>
      )

    case 'module-card':
      return (
        <div
          key={idx}
          className="snap-start shrink-0 w-[76vw] max-w-[280px] sm:w-[300px] lg:w-auto lg:max-w-none min-h-[136px] sm:min-h-[152px] rounded-2xl border border-slate-200/90 bg-white p-4 sm:p-6 flex flex-col justify-between"
        >
          <div className="space-y-2">
            <SkeletonBlock className="h-4.5 w-40" />
            <SkeletonBlock className="h-3.5 w-full" />
            <SkeletonBlock className="h-3.5 w-4/5" />
          </div>
        </div>
      )

    case 'capability-wide':
      return (
        <div
          key={idx}
          className="snap-start shrink-0 w-[82vw] max-w-[320px] sm:w-[340px] lg:w-auto lg:max-w-none min-h-[240px] sm:min-h-[272px] rounded-2xl border border-slate-200/90 bg-white p-5 sm:p-7 flex flex-col justify-between"
        >
          <div>
            <SkeletonBlock className="size-10 rounded-xl mb-4" />
            <SkeletonBlock className="h-5 w-3/4" />
            <div className="mt-2.5 space-y-2">
              <SkeletonBlock className="h-3.5 w-full" />
              <SkeletonBlock className="h-3.5 w-11/12" />
              <SkeletonBlock className="h-3.5 w-2/3" />
            </div>
          </div>
          <div className="mt-5 pt-4 border-t border-slate-100 flex gap-4">
            <SkeletonBlock className="h-4 w-24" />
            <SkeletonBlock className="h-4 w-24" />
          </div>
        </div>
      )

    case 'challenge':
      return (
        <div
          key={idx}
          className="snap-start shrink-0 w-[82vw] max-w-[320px] sm:w-[340px] lg:w-auto lg:max-w-none min-h-[224px] rounded-2xl border border-slate-200 bg-white p-6 sm:p-7 flex flex-col justify-between"
        >
          <div>
            <SkeletonBlock className="size-11 rounded-xl mb-5" />
            <SkeletonBlock className="h-5 w-4/5" />
            <div className="mt-3 space-y-2">
              <SkeletonBlock className="h-3.5 w-full" />
              <SkeletonBlock className="h-3.5 w-11/12" />
              <SkeletonBlock className="h-3.5 w-3/4" />
            </div>
          </div>
        </div>
      )

    case 'dark-step':
      return (
        <div
          key={idx}
          className="snap-start shrink-0 w-[80vw] max-w-[300px] sm:w-[320px] lg:w-auto lg:max-w-none min-h-[196px] rounded-2xl bg-slate-900/90 border border-slate-800 p-6 flex flex-col justify-between"
        >
          <div>
            <SkeletonBlock dark className="size-9 rounded-lg mb-4" />
            <SkeletonBlock dark className="h-5 w-3/4" />
            <div className="mt-2.5 space-y-2">
              <SkeletonBlock dark className="h-3.5 w-full" />
              <SkeletonBlock dark className="h-3.5 w-5/6" />
              <SkeletonBlock dark className="h-3.5 w-2/3" />
            </div>
          </div>
        </div>
      )

    case 'roi':
      return (
        <div
          key={idx}
          className="snap-start shrink-0 w-[76vw] max-w-[290px] sm:w-[300px] lg:w-auto lg:max-w-none min-h-[180px] sm:min-h-[212px] rounded-2xl bg-white border border-slate-200/90 p-5 sm:p-6 flex flex-col justify-between"
        >
          <div>
            <SkeletonBlock className="h-9 w-24" />
            <SkeletonBlock className="mt-3 h-4.5 w-4/5" />
            <div className="mt-2 space-y-1.5">
              <SkeletonBlock className="h-3.5 w-full" />
              <SkeletonBlock className="h-3.5 w-4/5" />
            </div>
          </div>
        </div>
      )

    case 'benefit':
    default:
      return (
        <div
          key={idx}
          className="snap-start shrink-0 w-[76vw] max-w-[290px] sm:w-[300px] lg:w-auto lg:max-w-none min-h-[180px] sm:min-h-[212px] rounded-2xl bg-white border border-slate-200/90 p-5 sm:p-6 flex flex-col justify-between"
        >
          <div>
            <SkeletonBlock className="size-9 sm:size-10 rounded-xl mb-3.5 sm:mb-4" />
            <SkeletonBlock className="h-4.5 w-3/4" />
            <div className="mt-2 space-y-1.5">
              <SkeletonBlock className="h-3.5 w-full" />
              <SkeletonBlock className="h-3.5 w-5/6" />
            </div>
          </div>
        </div>
      )
  }
}

export function HorizontalCarouselSkeleton({
  count = 4,
  mode = 'always',
  desktopGridClassName = 'lg:grid lg:grid-cols-4 lg:gap-5 lg:overflow-visible',
  variant = 'benefit',
  dark = false,
  className = '',
}: {
  count?: number
  mode?: 'always' | 'mobile'
  desktopGridClassName?: string
  variant?: HorizontalSkeletonVariant
  dark?: boolean
  className?: string
}) {
  const controlsVisibility = mode === 'mobile' ? 'flex lg:hidden' : 'flex'
  const visibleCount = Math.min(Math.max(count, 1), 6)

  return (
    <div aria-hidden="true" className={`relative w-full ${className}`}>
      {visibleCount > 1 && (
        <div className={`${controlsVisibility} items-center justify-between gap-3 mb-3 sm:mb-4`}>
          <SkeletonBlock dark={dark} className="h-4 w-32" />
          <div className="flex items-center gap-1.5">
            <SkeletonBlock dark={dark} className="size-8 sm:size-9 rounded-lg" />
            <SkeletonBlock dark={dark} className="size-8 sm:size-9 rounded-lg" />
          </div>
        </div>
      )}

      <div
        className={
          mode === 'mobile'
            ? `flex gap-3.5 sm:gap-5 overflow-hidden pt-2 pb-3 -mt-2 -mx-1 px-1 items-stretch ${desktopGridClassName} lg:pt-0 lg:pb-0 lg:mt-0 lg:mx-0 lg:px-0`
            : 'flex gap-4 sm:gap-5 overflow-hidden pt-2 pb-3 -mt-2 -mx-1 px-1 items-stretch'
        }
      >
        {Array.from({ length: visibleCount }).map((_, idx) => renderHorizontalCardBone(variant, idx))}
      </div>

      {visibleCount > 1 && (
        <div className={`${controlsVisibility} items-center justify-center gap-1.5 mt-3`}>
          {Array.from({ length: visibleCount }).map((_, idx) => (
            <SkeletonBlock
              key={idx}
              dark={dark}
              className={`h-1.5 rounded-full ${idx === 0 ? 'w-5' : 'w-1.5'}`}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export type GridSkeletonVariant =
  | 'metric'
  | 'mission'
  | 'feature'
  | 'compact-info'
  | 'developer'
  | 'resource'
  | 'blog'
  | 'career-job'
  | 'pillar'
  | 'security'
  | 'benefit-row'
  | 'guide'
  | 'guideline'
  | 'dos-donts'
  | 'flow-capability'

export function CardGridSkeleton({
  count,
  columnsClassName,
  variant = 'feature',
  className = '',
}: {
  count: number
  columnsClassName: string
  variant?: GridSkeletonVariant
  className?: string
}) {
  return (
    <div aria-hidden="true" className={`grid ${columnsClassName} ${className}`}>
      {Array.from({ length: count }).map((_, idx) => {
        if (variant === 'metric') {
          return (
            <div
              key={idx}
              className="flex flex-col justify-between p-3.5 sm:p-6 min-h-[116px] sm:min-h-[146px] rounded-xl bg-white border border-slate-200/80 shadow-2xs"
            >
              <div className="flex items-center justify-between mb-2">
                <SkeletonBlock className="h-8 sm:h-10 w-20 sm:w-28" />
                <SkeletonBlock className="size-8 sm:size-9 rounded-lg" />
              </div>
              <div className="space-y-1.5">
                <SkeletonBlock className="h-3.5 sm:h-4 w-3/4" />
                <SkeletonBlock className="h-3 w-5/6" />
              </div>
            </div>
          )
        }

        if (variant === 'mission') {
          return (
            <div
              key={idx}
              className="rounded-3xl border border-slate-200 p-8 sm:p-10 bg-slate-50/50 min-h-[264px]"
            >
              <SkeletonBlock className="size-14 rounded-2xl mb-6" />
              <SkeletonBlock className="h-7 w-40" />
              <div className="mt-4 space-y-2.5">
                <SkeletonBlock className="h-4 w-full" />
                <SkeletonBlock className="h-4 w-11/12" />
                <SkeletonBlock className="h-4 w-4/5" />
              </div>
            </div>
          )
        }

        if (variant === 'compact-info') {
          return (
            <div key={idx} className="rounded-2xl border border-slate-200 bg-white p-6 min-h-[126px] space-y-2.5">
              <SkeletonBlock className="h-5 w-2/3" />
              <SkeletonBlock className="h-3.5 w-full" />
              <SkeletonBlock className="h-3.5 w-4/5" />
            </div>
          )
        }

        if (variant === 'developer' || variant === 'resource') {
          return (
            <div
              key={idx}
              className="rounded-xl border border-slate-200/80 bg-white p-7 sm:p-8 min-h-[272px] flex flex-col justify-between"
            >
              <div>
                <SkeletonBlock className="size-12 rounded-lg mb-6" />
                <SkeletonBlock className="h-6 w-3/4" />
                <div className="mt-3 space-y-2">
                  <SkeletonBlock className="h-3.5 w-full" />
                  <SkeletonBlock className="h-3.5 w-11/12" />
                  <SkeletonBlock className="h-3.5 w-2/3" />
                </div>
              </div>
              <div className="mt-8 pt-4 border-t border-slate-100">
                <SkeletonBlock className="h-4 w-32" />
              </div>
            </div>
          )
        }

        if (variant === 'blog') {
          return (
            <div
              key={idx}
              className="rounded-xl border border-slate-200/80 bg-white p-8 min-h-[288px] flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between">
                  <SkeletonBlock className="h-5 w-28 rounded-md" />
                  <SkeletonBlock className="h-4 w-16" />
                </div>
                <SkeletonBlock className="mt-4 h-6 w-11/12" />
                <SkeletonBlock className="mt-2 h-6 w-2/3" />
                <div className="mt-3 space-y-2">
                  <SkeletonBlock className="h-3.5 w-full" />
                  <SkeletonBlock className="h-3.5 w-5/6" />
                </div>
              </div>
              <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between">
                <div className="space-y-1.5">
                  <SkeletonBlock className="h-3.5 w-28" />
                  <SkeletonBlock className="h-3 w-20" />
                </div>
                <SkeletonBlock className="h-4 w-24" />
              </div>
            </div>
          )
        }

        if (variant === 'career-job') {
          return (
            <div
              key={idx}
              className="rounded-xl border border-slate-200/80 bg-white p-8 min-h-[320px] space-y-6"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-6">
                <div className="space-y-2">
                  <SkeletonBlock className="h-5 w-40 rounded-md" />
                  <SkeletonBlock className="h-7 w-72 max-w-full" />
                  <SkeletonBlock className="h-3.5 w-44" />
                </div>
                <SkeletonBlock className="h-11 w-36 rounded-lg shrink-0" />
              </div>
              <div className="space-y-2">
                <SkeletonBlock className="h-4 w-full" />
                <SkeletonBlock className="h-4 w-4/5" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[0, 1].map((col) => (
                  <div key={col} className="space-y-2.5">
                    <SkeletonBlock className="h-3.5 w-32" />
                    <SkeletonBlock className="h-3.5 w-full" />
                    <SkeletonBlock className="h-3.5 w-11/12" />
                    <SkeletonBlock className="h-3.5 w-4/5" />
                  </div>
                ))}
              </div>
            </div>
          )
        }

        if (variant === 'pillar') {
          return (
            <div
              key={idx}
              className="rounded-xl border border-slate-200 bg-white p-6 min-h-[268px] flex flex-col justify-between"
            >
              <div>
                <SkeletonBlock className="size-8 rounded-md mb-4" />
                <SkeletonBlock className="h-5 w-4/5" />
                <div className="mt-2.5 space-y-1.5">
                  <SkeletonBlock className="h-3.5 w-full" />
                  <SkeletonBlock className="h-3.5 w-5/6" />
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-slate-100 space-y-2">
                <SkeletonBlock className="h-3 w-full" />
                <SkeletonBlock className="h-3 w-11/12" />
                <SkeletonBlock className="h-3 w-4/5" />
              </div>
            </div>
          )
        }

        if (variant === 'security') {
          return (
            <div
              key={idx}
              className="rounded-xl border border-slate-200 bg-white p-6 min-h-[224px] flex flex-col justify-between"
            >
              <div>
                <SkeletonBlock className="size-11 rounded-lg mb-5" />
                <SkeletonBlock className="h-5 w-3/4" />
                <div className="mt-2.5 space-y-1.5">
                  <SkeletonBlock className="h-3.5 w-full" />
                  <SkeletonBlock className="h-3.5 w-5/6" />
                </div>
              </div>
              <div className="mt-5 pt-3 border-t border-slate-200/80">
                <SkeletonBlock className="h-3.5 w-40" />
              </div>
            </div>
          )
        }

        if (variant === 'benefit-row') {
          return (
            <div
              key={idx}
              className="flex items-start gap-3 rounded-xl border border-slate-200/90 p-5 bg-white min-h-[72px]"
            >
              <SkeletonBlock className="size-5 rounded-full shrink-0 mt-0.5" />
              <div className="flex-1 space-y-1.5">
                <SkeletonBlock className="h-4 w-11/12" />
                <SkeletonBlock className="h-3.5 w-2/3" />
              </div>
            </div>
          )
        }

        if (variant === 'guide') {
          return (
            <div
              key={idx}
              className="rounded-xl border border-slate-200/80 bg-white p-6 sm:p-8 min-h-[156px]"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1 space-y-2.5">
                  <SkeletonBlock className="h-5 w-36 rounded-md" />
                  <SkeletonBlock className="h-6 w-3/4" />
                  <SkeletonBlock className="h-4 w-11/12" />
                </div>
                <SkeletonBlock className="size-9 rounded-lg shrink-0" />
              </div>
            </div>
          )
        }

        if (variant === 'guideline') {
          return (
            <div
              key={idx}
              className="rounded-xl border border-slate-200 bg-white p-7 min-h-[196px]"
            >
              <div className="flex items-start gap-4">
                <SkeletonBlock className="size-10 rounded-lg shrink-0" />
                <div className="flex-1 space-y-2.5">
                  <SkeletonBlock className="h-5.5 w-3/4" />
                  <SkeletonBlock className="h-4 w-2/3" />
                  <div className="pt-2 space-y-2">
                    <SkeletonBlock className="h-3.5 w-full" />
                    <SkeletonBlock className="h-3.5 w-11/12" />
                    <SkeletonBlock className="h-3.5 w-5/6" />
                  </div>
                </div>
              </div>
            </div>
          )
        }

        if (variant === 'dos-donts') {
          return (
            <div
              key={idx}
              className="rounded-xl border border-slate-200 bg-slate-50/50 p-7 min-h-[296px] space-y-4"
            >
              <SkeletonBlock className="h-5.5 w-56" />
              <div className="space-y-3">
                {[0, 1, 2, 3, 4, 5].map((item) => (
                  <div key={item} className="flex items-center gap-2.5">
                    <SkeletonBlock className="size-4 rounded-full shrink-0" />
                    <SkeletonBlock className="h-3.5 w-11/12" />
                  </div>
                ))}
              </div>
            </div>
          )
        }

        if (variant === 'flow-capability') {
          return (
            <div
              key={idx}
              className="rounded-xl border border-slate-200/90 bg-white p-5 min-h-[138px] space-y-3"
            >
              <div className="flex items-center gap-3">
                <SkeletonBlock className="size-10 rounded-lg shrink-0" />
                <div className="flex-1 space-y-1.5">
                  <SkeletonBlock className="h-4 w-44" />
                  <SkeletonBlock className="h-3 w-32" />
                </div>
              </div>
              <div className="space-y-1.5">
                <SkeletonBlock className="h-3.5 w-full" />
                <SkeletonBlock className="h-3.5 w-4/5" />
              </div>
            </div>
          )
        }

        // Default 'feature' card
        return (
          <div
            key={idx}
            className="rounded-3xl border border-slate-200 bg-white p-8 min-h-[244px]"
          >
            <SkeletonBlock className="size-12 rounded-2xl mb-6" />
            <SkeletonBlock className="h-6 w-3/4" />
            <div className="mt-3 space-y-2">
              <SkeletonBlock className="h-3.5 w-full" />
              <SkeletonBlock className="h-3.5 w-11/12" />
              <SkeletonBlock className="h-3.5 w-3/4" />
            </div>
          </div>
        )
      })}
    </div>
  )
}
