/**
 * PulseQuo Brand Logo Component
 * Renders the official PulseQuo brand emblem and typography.
 */

import { Link } from 'react-router'

interface LogoProps {
  variant?: 'light' | 'dark'
  className?: string
  showTagline?: boolean
  linkToHome?: boolean
}

export function Logo({
  variant = 'light',
  className = '',
  showTagline = false,
  linkToHome = true,
}: LogoProps) {
  const content = (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Official PulseQuo Brand Icon: Square without background or rounded corners */}
      <div className="relative size-9 shrink-0 flex items-center justify-center">
        <img
          src="/pulsequo-logo.png"
          alt="PulseQuo"
          className="size-full object-contain"
          loading="eager"
        />
      </div>

      <div className="flex flex-col">
        <span
          className={`text-xl font-bold tracking-tight leading-none ${
            variant === 'dark' ? 'text-white' : 'text-slate-900'
          }`}
        >
          Pulse<span className="text-blue-600">Quo</span>
        </span>
        {showTagline && (
          <span
            className={`mt-1 text-[10px] uppercase font-semibold tracking-wider leading-none ${
              variant === 'dark' ? 'text-slate-400' : 'text-slate-500'
            }`}
          >
            AI Communications & CPaaS
          </span>
        )}
      </div>
    </div>
  )

  if (linkToHome) {
    return (
      <Link
        to="/"
        onClick={() => {
          window.scrollTo({ top: 0, behavior: 'smooth' })
        }}
        className="inline-flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded-lg cursor-pointer"
      >
        {content}
      </Link>
    )
  }

  return content
}
