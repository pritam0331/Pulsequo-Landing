import { motion, AnimatePresence } from 'motion/react'
import { SkeletonBlock } from './CardSkeleton'

export function RoutePageSkeleton() {
  return (
    <div
      aria-busy="true"
      aria-label="Loading page content"
      className="min-h-screen bg-white px-4 sm:px-6 lg:px-8 pt-24 pb-16"
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center text-center">
          <SkeletonBlock className="h-5 w-36 rounded-md" />
          <SkeletonBlock className="mt-5 h-10 sm:h-12 w-full max-w-2xl rounded-xl" />
          <SkeletonBlock className="mt-3 h-10 sm:h-12 w-4/5 max-w-xl rounded-xl" />
          <SkeletonBlock className="mt-5 h-4 w-full max-w-xl rounded-md" />
          <SkeletonBlock className="mt-2 h-4 w-3/4 max-w-lg rounded-md" />

          <div className="mt-8 flex flex-col sm:flex-row items-center gap-3.5 w-full sm:w-auto justify-center">
            <SkeletonBlock className="h-12 w-full sm:w-52 rounded-xl" />
            <SkeletonBlock className="h-12 w-full sm:w-44 rounded-xl" />
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-5">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="rounded-2xl border border-slate-200/80 bg-white p-6 space-y-3"
            >
              <SkeletonBlock className="size-10 rounded-xl" />
              <SkeletonBlock className="h-5 w-40 rounded-md" />
              <SkeletonBlock className="h-3.5 w-full rounded-md" />
              <SkeletonBlock className="h-3.5 w-5/6 rounded-md" />
              <SkeletonBlock className="h-3.5 w-2/3 rounded-md" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

interface AppPreloaderOverlayProps {
  visible: boolean
}

export function AppPreloaderOverlay({ visible }: AppPreloaderOverlayProps) {
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="pulsequo-preloader"
          role="status"
          aria-live="polite"
          aria-label="Loading PulseQuo"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[100] bg-white overflow-hidden flex flex-col"
        >
          {/* Smooth 1s progress bar */}
          <div className="h-[3px] w-full bg-slate-100 overflow-hidden shrink-0">
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.96, ease: [0.22, 1, 0.36, 1] }}
              className="h-full w-full origin-left bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600"
            />
          </div>

          {/* Navbar Skeleton */}
          <header className="w-full border-b border-slate-100 bg-white shrink-0">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
              <div className="flex items-center gap-2.5">
                <SkeletonBlock className="size-8 rounded-lg" />
                <SkeletonBlock className="h-5 w-24 rounded-md" />
              </div>

              <div className="hidden md:flex items-center gap-6">
                <SkeletonBlock className="h-4 w-16 rounded-md" />
                <SkeletonBlock className="h-4 w-18 rounded-md" />
                <SkeletonBlock className="h-4 w-20 rounded-md" />
                <SkeletonBlock className="h-4 w-14 rounded-md" />
                <SkeletonBlock className="h-4 w-20 rounded-md" />
              </div>

              <div className="flex items-center gap-2.5">
                <SkeletonBlock className="hidden sm:block h-9 w-24 rounded-lg" />
                <SkeletonBlock className="h-9 w-28 rounded-lg" />
              </div>
            </div>
          </header>

          {/* Full-Viewport Hero Skeleton */}
          <div className="flex-1 flex flex-col justify-center items-center px-4 sm:px-6 lg:px-10 py-10">
            <div className="w-full max-w-5xl mx-auto flex flex-col items-center text-center">
              <SkeletonBlock className="h-10 sm:h-14 md:h-16 w-[88%] max-w-3xl rounded-xl" />
              <SkeletonBlock className="mt-3 h-10 sm:h-14 md:h-16 w-[74%] max-w-2xl rounded-xl" />

              <div className="mt-6 w-full max-w-2xl space-y-2.5 flex flex-col items-center">
                <SkeletonBlock className="h-4 sm:h-5 w-full rounded-md" />
                <SkeletonBlock className="h-4 sm:h-5 w-5/6 rounded-md" />
              </div>

              <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3.5 w-full sm:w-auto">
                <SkeletonBlock className="h-12 w-full sm:w-60 rounded-xl" />
                <SkeletonBlock className="h-12 w-full sm:w-52 rounded-xl" />
              </div>

              <div className="mt-7 flex flex-wrap items-center justify-center gap-x-6 gap-y-2.5">
                <SkeletonBlock className="h-3.5 w-36 rounded-md" />
                <SkeletonBlock className="h-3.5 w-32 rounded-md" />
                <SkeletonBlock className="h-3.5 w-40 rounded-md" />
                <SkeletonBlock className="h-3.5 w-40 rounded-md" />
              </div>
            </div>

            {/* Bottom Brand Strip Skeleton Peek */}
            <div className="mt-14 w-full max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-3.5 opacity-75">
              {[0, 1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="rounded-xl border border-slate-200/80 bg-white p-3 flex items-center gap-3"
                >
                  <SkeletonBlock className="size-8 rounded-lg shrink-0" />
                  <div className="flex-1 space-y-1.5">
                    <SkeletonBlock className="h-3 w-24 rounded-sm" />
                    <SkeletonBlock className="h-2.5 w-16 rounded-sm" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
