import { useRouteError, isRouteErrorResponse, Link } from 'react-router'
import { AlertTriangle, RefreshCw, Home } from 'lucide-react'

export function RouteErrorBoundary() {
  const error = useRouteError()

  let errorMessage = 'An unexpected error occurred.'
  if (isRouteErrorResponse(error)) {
    errorMessage = error.statusText || error.data?.message || 'Page error'
  } else if (error instanceof Error) {
    errorMessage = error.message
  }

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-6 text-center">
      <div className="max-w-md w-full bg-slate-50 border border-slate-200 rounded-2xl p-8 shadow-sm">
        <div className="size-12 rounded-xl bg-red-100 text-red-600 flex items-center justify-center mx-auto mb-4">
          <AlertTriangle className="size-6" />
        </div>
        <h2 className="text-xl font-bold text-slate-900 mb-2">Something went wrong</h2>
        <p className="text-xs text-slate-500 mb-6 leading-relaxed font-mono bg-white p-3 rounded-lg border border-slate-200/80 break-words">
          {errorMessage}
        </p>
        <div className="flex items-center justify-center gap-3">
          <button
            type="button"
            onClick={() => window.location.reload()}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold shadow-xs transition-colors cursor-pointer"
          >
            <RefreshCw className="size-3.5" />
            <span>Reload page</span>
          </button>
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-white border border-slate-300 hover:bg-slate-50 text-slate-700 text-xs font-semibold shadow-2xs transition-colors"
          >
            <Home className="size-3.5" />
            <span>Go to home</span>
          </Link>
        </div>
      </div>
    </div>
  )
}

