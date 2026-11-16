/**
 * Section Heading Component
 * Consistent typography for marketing page sections with badge, title, and description.
 */

interface SectionHeadingProps {
  badge?: string
  title: string
  description?: string
  align?: 'left' | 'center'
  dark?: boolean
  className?: string
}

export function SectionHeading({
  badge,
  title,
  description,
  align = 'center',
  dark = false,
  className = '',
}: SectionHeadingProps) {
  return (
    <div
      className={`max-w-3xl ${
        align === 'center' ? 'mx-auto text-center' : 'text-left'
      } ${className}`}
    >
      {badge && (
        <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wide uppercase mb-4 shadow-2xs ${
          dark
            ? 'bg-blue-950/80 text-blue-300 border border-blue-700/60'
            : 'bg-blue-50 text-blue-700 border border-blue-200/90'
        }`}>
          <span className="size-1.5 rounded-full bg-blue-500 animate-pulse" />
          <span>{badge}</span>
        </div>
      )}

      <h2
        className={`text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-[1.15] ${
          dark ? 'text-white' : 'text-slate-900'
        }`}
      >
        {title}
      </h2>

      {description && (
        <p
          className={`mt-4 text-base sm:text-lg leading-relaxed font-normal ${
            dark ? 'text-slate-400' : 'text-slate-600'
          }`}
        >
          {description}
        </p>
      )}
    </div>
  )
}
