/**
 * Product Card Component
 * Highlights one of the four core product categories with icon, description, key benefits, and link.
 */

import { Link } from 'react-router'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

interface ProductCardProps {
  id: string
  title: string
  badge: string
  description: string
  benefits: string[]
  href: string
  icon: LucideIcon
  colorTheme?: 'blue' | 'indigo' | 'violet' | 'purple'
}

export function ProductCard({
  title,
  badge,
  description,
  benefits,
  href,
  icon: Icon,
  colorTheme = 'blue',
}: ProductCardProps) {
  const themes = {
    blue: {
      accent: 'from-blue-600 to-cyan-500',
      bgIcon: 'bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white',
      badge: 'bg-blue-50 text-blue-700 border-blue-200/80',
      border: 'hover:border-blue-400/80 hover:shadow-blue-500/10',
      arrow: 'text-blue-600 group-hover:text-blue-700',
      glow: 'group-hover:shadow-blue-500/15',
      check: 'text-blue-600',
    },
    indigo: {
      accent: 'from-indigo-600 to-blue-500',
      bgIcon: 'bg-indigo-50 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white',
      badge: 'bg-indigo-50 text-indigo-700 border-indigo-200/80',
      border: 'hover:border-indigo-400/80 hover:shadow-indigo-500/10',
      arrow: 'text-indigo-600 group-hover:text-indigo-700',
      glow: 'group-hover:shadow-indigo-500/15',
      check: 'text-indigo-600',
    },
    violet: {
      accent: 'from-violet-600 to-purple-500',
      bgIcon: 'bg-violet-50 text-violet-600 group-hover:bg-violet-600 group-hover:text-white',
      badge: 'bg-violet-50 text-violet-700 border-violet-200/80',
      border: 'hover:border-violet-400/80 hover:shadow-violet-500/10',
      arrow: 'text-violet-600 group-hover:text-violet-700',
      glow: 'group-hover:shadow-violet-500/15',
      check: 'text-violet-600',
    },
    purple: {
      accent: 'from-purple-600 to-pink-500',
      bgIcon: 'bg-purple-50 text-purple-600 group-hover:bg-purple-600 group-hover:text-white',
      badge: 'bg-purple-50 text-purple-700 border-purple-200/80',
      border: 'hover:border-purple-400/80 hover:shadow-purple-500/10',
      arrow: 'text-purple-600 group-hover:text-purple-700',
      glow: 'group-hover:shadow-purple-500/15',
      check: 'text-purple-600',
    },
  }

  const currentTheme = themes[colorTheme] || themes.blue

  return (
    <div
      className={`group relative flex flex-col justify-between rounded-3xl border border-slate-200/80 bg-white p-7 sm:p-8 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl ${currentTheme.border} ${currentTheme.glow}`}
    >
      {/* Top subtle gradient highlight bar on hover */}
      <div
        className={`absolute top-0 left-8 right-8 h-1 rounded-full bg-gradient-to-r ${currentTheme.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
      />

      <div>
        <div className="flex items-center justify-between gap-4">
          <div
            className={`flex size-14 items-center justify-center rounded-2xl transition-all duration-300 shadow-xs ${currentTheme.bgIcon}`}
          >
            <Icon className="size-7 transition-transform duration-300 group-hover:scale-110" />
          </div>
          <span
            className={`rounded-full px-3 py-1 text-xs font-bold border ${currentTheme.badge}`}
          >
            {badge}
          </span>
        </div>

        <h3 className="mt-6 text-xl font-extrabold text-slate-900 group-hover:text-blue-600 transition-colors">
          {title}
        </h3>

        <p className="mt-3 text-sm leading-relaxed text-slate-600">
          {description}
        </p>

        <div className="mt-6 border-t border-slate-100 pt-6">
          <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
            Key Capabilities
          </p>
          <ul className="mt-3 space-y-2.5">
            {benefits.slice(0, 4).map((benefit, i) => (
              <li key={i} className="flex items-start gap-2.5 text-xs text-slate-700 leading-snug">
                <CheckCircle2 className={`size-4 shrink-0 mt-0.5 ${currentTheme.check}`} />
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-8 pt-4 border-t border-slate-100/60">
        <Link
          to={href}
          className={`group/btn inline-flex items-center gap-2 text-sm font-bold ${currentTheme.arrow} transition-all`}
        >
          <span>Explore {title}</span>
          <ArrowRight className="size-4 transition-transform duration-200 group-hover/btn:translate-x-1.5" />
        </Link>
      </div>
    </div>
  )
}
