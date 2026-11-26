import React, { useCallback, useMemo, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { Check, Code2, Copy } from 'lucide-react'

export interface CodeShowcaseTab {
  id: string
  label: string
}

interface CodeShowcaseCardProps {
  code: string
  filename?: string
  language?: 'json' | 'ts' | 'python' | 'go' | 'bash' | 'html'
  variant?: 'dark' | 'light'
  statusBadge?: string
  statusTone?: 'emerald' | 'blue' | 'purple'
  tabs?: readonly CodeShowcaseTab[]
  activeTabId?: string
  onTabChange?: (id: string) => void
  headerPreamble?: React.ReactNode
  footerLeft?: React.ReactNode
  footerRight?: React.ReactNode
  copyValue?: string
  copyLabel?: string
  maxHeightClass?: string
  showLineNumbers?: boolean
  showCaret?: boolean
  className?: string
  compact?: boolean
}

type TokenKind =
  | 'comment'
  | 'string'
  | 'key'
  | 'keyword'
  | 'number'
  | 'boolean'
  | 'tag'
  | 'attr'
  | 'plain'

interface Token {
  text: string
  kind: TokenKind
}

const KEYWORD_SET = new Set([
  'const',
  'let',
  'var',
  'await',
  'async',
  'new',
  'return',
  'import',
  'from',
  'export',
  'function',
  'if',
  'else',
  'def',
  'func',
  'package',
  'type',
  'curl',
  'POST',
  'GET',
  'PUT',
  'DELETE',
  'HTTP/1.1',
])

const BOOLEAN_SET = new Set(['true', 'false', 'null', 'None', 'nil', 'True', 'False'])

function tokenizeLine(line: string, language: CodeShowcaseCardProps['language']): Token[] {
  const trimmed = line.trimStart()
  if (
    trimmed.startsWith('//') ||
    trimmed.startsWith('#') ||
    trimmed.startsWith('<!--')
  ) {
    return [{ text: line, kind: 'comment' }]
  }

  const tokens: Token[] = []
  const pattern =
    language === 'html'
      ? /(<!--[\s\S]*?-->|<\/?[a-zA-Z0-9-]+|\/?>|"[^"]*"|'[^']*'|\b[a-zA-Z-]+(?==))/g
      : /("(?:\\.|[^"\\])*"(?=\s*:)|"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|`(?:\\.|[^`\\])*`|\b\d+(?:\.\d+)?\b|\b[A-Za-z_][A-Za-z0-9_/-]*\b)/g

  let lastIndex = 0
  let match: RegExpExecArray | null

  while ((match = pattern.exec(line)) !== null) {
    if (match.index > lastIndex) {
      tokens.push({ text: line.slice(lastIndex, match.index), kind: 'plain' })
    }

    const raw = match[0]
    let kind: TokenKind = 'plain'

    if (language === 'html') {
      if (raw.startsWith('<!--')) kind = 'comment'
      else if (raw.startsWith('<') || raw === '>' || raw === '/>') kind = 'tag'
      else if (raw.startsWith('"') || raw.startsWith("'")) kind = 'string'
      else kind = 'attr'
    } else if (raw.startsWith('"') && line.slice(match.index + raw.length).trimStart().startsWith(':')) {
      kind = 'key'
    } else if (raw.startsWith('"') || raw.startsWith("'") || raw.startsWith('`')) {
      kind = 'string'
    } else if (/^\d/.test(raw)) {
      kind = 'number'
    } else if (BOOLEAN_SET.has(raw)) {
      kind = 'boolean'
    } else if (KEYWORD_SET.has(raw)) {
      kind = 'keyword'
    } else if (
      line.slice(match.index + raw.length).trimStart().startsWith(':') &&
      !raw.includes('/')
    ) {
      kind = 'key'
    }

    tokens.push({ text: raw, kind })
    lastIndex = match.index + raw.length
  }

  if (lastIndex < line.length) {
    tokens.push({ text: line.slice(lastIndex), kind: 'plain' })
  }

  return tokens
}

function getTokenClass(kind: TokenKind, variant: 'dark' | 'light'): string {
  if (variant === 'light') {
    switch (kind) {
      case 'comment':
        return 'text-slate-400 italic'
      case 'string':
        return 'text-emerald-600 font-semibold'
      case 'key':
        return 'text-indigo-700 font-medium'
      case 'keyword':
        return 'text-blue-600 font-bold'
      case 'number':
        return 'text-amber-600 font-semibold'
      case 'boolean':
        return 'text-fuchsia-600 font-bold'
      case 'tag':
        return 'text-blue-600 font-bold'
      case 'attr':
        return 'text-purple-600 font-semibold'
      default:
        return 'text-slate-800'
    }
  }

  switch (kind) {
    case 'comment':
      return 'text-slate-500 italic'
    case 'string':
      return 'text-emerald-300'
    case 'key':
      return 'text-sky-300'
    case 'keyword':
      return 'text-purple-400 font-semibold'
    case 'number':
      return 'text-amber-300'
    case 'boolean':
      return 'text-fuchsia-400 font-semibold'
    case 'tag':
      return 'text-blue-400 font-semibold'
    case 'attr':
      return 'text-purple-300'
    default:
      return 'text-slate-200'
  }
}

export function CodeShowcaseCard({
  code,
  filename,
  language = 'json',
  variant = 'dark',
  statusBadge,
  statusTone = 'emerald',
  tabs,
  activeTabId,
  onTabChange,
  headerPreamble,
  footerLeft,
  footerRight,
  copyValue,
  copyLabel = 'Copy',
  maxHeightClass = 'max-h-[420px]',
  showLineNumbers = true,
  showCaret = true,
  className = '',
  compact = false,
}: CodeShowcaseCardProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [copied, setCopied] = useState(false)
  const isLight = variant === 'light'

  const lines = useMemo(() => code.replace(/\r\n/g, '\n').split('\n'), [code])
  const tokenizedLines = useMemo(
    () => lines.map((line) => tokenizeLine(line, language)),
    [lines, language]
  )

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const el = containerRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    el.style.setProperty('--sc-x', `${e.clientX - rect.left}px`)
    el.style.setProperty('--sc-y', `${e.clientY - rect.top}px`)
  }, [])

  const handleCopy = useCallback(() => {
    const text = copyValue ?? code
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text).catch(() => {})
    }
    setCopied(true)
    window.setTimeout(() => setCopied(false), 1800)
  }, [code, copyValue])

  const statusBadgeClass =
    statusTone === 'emerald'
      ? isLight
        ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
        : 'bg-emerald-950/80 text-emerald-300 border-emerald-800/70'
      : statusTone === 'purple'
        ? isLight
          ? 'bg-purple-50 text-purple-700 border-purple-200'
          : 'bg-purple-950/80 text-purple-300 border-purple-800/70'
        : isLight
          ? 'bg-blue-50 text-blue-700 border-blue-200'
          : 'bg-blue-950 text-blue-300 border-blue-800/60'

  const statusDotClass =
    statusTone === 'emerald'
      ? 'bg-emerald-400'
      : statusTone === 'purple'
        ? 'bg-purple-400'
        : 'bg-blue-400'

  const showcaseKey = `${activeTabId ?? filename ?? 'code'}-${code.length}`

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      data-cursor={isLight ? 'glass' : 'dark'}
      className={`pq-code-showcase ${
        isLight
          ? 'pq-code-showcase-light rounded-2xl border border-blue-200/80 bg-white text-slate-900 shadow-xl shadow-blue-950/8 hover:border-blue-400/80 hover:shadow-2xl hover:shadow-blue-950/12'
          : 'pq-code-showcase-dark rounded-2xl bg-[#070d24] border border-blue-950/90 text-slate-200 shadow-2xl hover:border-blue-500/50 hover:shadow-blue-950/40'
      } overflow-hidden ${className}`}
    >
      {/* Interactive Mouse-Tracking Spotlight Sheen */}
      <div aria-hidden="true" className="pq-code-showcase-spotlight" />

      {/* Animated Luminous Gradient Top Beam */}
      <div
        aria-hidden="true"
        className={`relative z-10 w-full pq-code-showcase-beam ${
          isLight
            ? 'h-1.5 bg-gradient-to-r from-blue-600 via-indigo-500 via-purple-500 to-blue-600'
            : 'h-[2px] bg-gradient-to-r from-blue-500 via-purple-500 via-cyan-400 to-blue-500'
        }`}
      />

      {/* Ambient Depth Glow for Dark Showcase */}
      {!isLight && (
        <>
          <div
            aria-hidden="true"
            className="pointer-events-none absolute top-0 right-0 w-56 h-56 bg-blue-600/12 blur-3xl"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute bottom-0 left-0 w-56 h-56 bg-purple-600/12 blur-3xl"
          />
        </>
      )}

      {/* Window Chrome / Filename / Status / Copy Bar */}
      {(filename || statusBadge || !tabs) && (
        <div
          className={`relative z-10 flex items-center justify-between gap-2 ${
            compact ? 'px-3.5 py-2.5' : 'px-4 py-3'
          } border-b ${
            isLight
              ? 'bg-gradient-to-r from-blue-50/90 via-indigo-50/70 to-purple-50/80 border-blue-100/90'
              : 'bg-[#070d24]/95 border-blue-950/80'
          }`}
        >
          <div className="flex items-center gap-2 min-w-0">
            <div className="flex items-center gap-1.5 shrink-0">
              <span className={`size-2.5 rounded-full ${isLight ? 'bg-rose-400' : 'bg-rose-500/80'}`} />
              <span className={`size-2.5 rounded-full ${isLight ? 'bg-amber-400' : 'bg-amber-400/80'}`} />
              <span className={`size-2.5 rounded-full ${isLight ? 'bg-emerald-400' : 'bg-emerald-400/80'}`} />
            </div>
            {filename && (
              <div
                className={`ml-1 inline-flex items-center gap-1.5 min-w-0 ${
                  isLight
                    ? 'px-2.5 py-0.5 rounded-md bg-white border border-blue-200/80 shadow-2xs'
                    : ''
                }`}
              >
                {isLight && <Code2 className="size-3.5 text-blue-600 shrink-0" />}
                <span
                  className={`font-mono text-xs truncate ${
                    isLight ? 'text-slate-800 font-bold' : 'text-slate-300 font-semibold'
                  }`}
                >
                  {filename}
                </span>
              </div>
            )}
          </div>

          <div className="flex items-center gap-2 shrink-0">
            {statusBadge && (
              <span
                className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-sm border font-mono text-[10.5px] font-semibold ${statusBadgeClass}`}
              >
                <span className={`size-1.5 rounded-full animate-pulse ${statusDotClass}`} />
                <span>{statusBadge}</span>
              </span>
            )}

            {!tabs && (
              <button
                type="button"
                onClick={handleCopy}
                className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md border text-[11px] font-mono font-semibold transition-colors cursor-pointer ${
                  isLight
                    ? 'bg-white hover:bg-blue-600 border-blue-200/90 hover:border-blue-600 text-blue-700 hover:text-white shadow-2xs'
                    : 'bg-blue-950/80 hover:bg-blue-900/90 border-blue-800/60 text-slate-300 hover:text-white'
                }`}
              >
                {copied ? (
                  <>
                    <Check className="size-3 text-emerald-400" />
                    <span className={isLight ? 'text-emerald-600' : 'text-emerald-400'}>Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="size-3" />
                    <span>{copyLabel}</span>
                  </>
                )}
              </button>
            )}
          </div>
        </div>
      )}

      {/* Interactive Language / Snippet Tab Switcher Bar */}
      {tabs && tabs.length > 0 && (
        <div
          className={`relative z-10 flex flex-wrap items-center justify-between gap-2 px-4 py-2.5 border-b ${
            isLight
              ? 'border-blue-100/80 bg-slate-50/70'
              : 'border-blue-950/80 bg-[#040817]'
          }`}
        >
          <div className="flex items-center gap-1.5 flex-wrap">
            {tabs.map((tab) => {
              const isActive = tab.id === activeTabId
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => {
                    onTabChange?.(tab.id)
                    setCopied(false)
                  }}
                  className={`relative px-3 py-1 rounded-md text-xs font-mono font-semibold transition-colors cursor-pointer whitespace-nowrap ${
                    isActive
                      ? 'bg-blue-600 text-white shadow-xs shadow-blue-600/30'
                      : isLight
                        ? 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200'
                        : 'bg-blue-950/60 text-slate-400 hover:text-white hover:bg-blue-900/60'
                  }`}
                >
                  {tab.label}
                </button>
              )
            })}
          </div>

          <button
            type="button"
            onClick={handleCopy}
            className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md border text-[11px] font-mono font-semibold transition-colors cursor-pointer whitespace-nowrap ${
              isLight
                ? 'bg-white hover:bg-blue-600 border-blue-200/90 hover:border-blue-600 text-blue-700 hover:text-white'
                : 'bg-blue-950/80 hover:bg-blue-900/90 border-blue-800/60 text-slate-300 hover:text-white'
            }`}
          >
            {copied ? (
              <>
                <Check className="size-3.5 text-emerald-400" />
                <span className="text-emerald-400">Copied</span>
              </>
            ) : (
              <>
                <Copy className="size-3.5" />
                <span>{copyLabel}</span>
              </>
            )}
          </button>
        </div>
      )}

      {/* Code Showcase Body */}
      <div
        className={`relative z-10 ${compact ? 'p-3.5' : 'p-4 sm:p-5'} font-mono text-[11.5px] sm:text-xs leading-relaxed overflow-x-auto ${maxHeightClass} thin-scrollbar ${
          isLight ? 'bg-white' : ''
        }`}
      >
        {headerPreamble && (
          <div className="mb-3 pb-2.5 border-b border-blue-950/70 space-y-1">
            {headerPreamble}
          </div>
        )}

        <div
          className={
            isLight
              ? 'bg-gradient-to-br from-slate-50/95 via-blue-50/35 to-indigo-50/45 rounded-xl border border-blue-100/90 p-3.5 sm:p-4 overflow-x-auto'
              : ''
          }
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={showcaseKey}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
              className="space-y-0.5 min-w-max"
            >
              {tokenizedLines.map((lineTokens, idx) => {
                const isLast = idx === tokenizedLines.length - 1
                return (
                  <div
                    key={idx}
                    className="pq-code-line flex items-baseline gap-3 px-1.5 py-[1px]"
                  >
                    {showLineNumbers && (
                      <span
                        className={`select-none text-right w-5 shrink-0 text-[10.5px] tabular-nums ${
                          isLight ? 'text-slate-400' : 'text-slate-600'
                        }`}
                      >
                        {idx + 1}
                      </span>
                    )}
                    <code className="whitespace-pre">
                      {lineTokens.length === 0 ? (
                        '\u00A0'
                      ) : (
                        lineTokens.map((tok, tIdx) => (
                          <span key={tIdx} className={getTokenClass(tok.kind, variant)}>
                            {tok.text}
                          </span>
                        ))
                      )}
                      {showCaret && isLast && <span aria-hidden="true" className="pq-code-caret" />}
                    </code>
                  </div>
                )
              })}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Optional Footer Bar */}
      {(footerLeft || footerRight) && (
        <div
          className={`relative z-10 px-4 py-2.5 border-t flex flex-wrap items-center justify-between gap-2 text-[11px] font-mono ${
            isLight
              ? 'bg-gradient-to-r from-blue-50/70 via-white to-purple-50/70 border-blue-100/80 text-slate-600'
              : 'bg-[#040817] border-blue-950/80 text-slate-400'
          }`}
        >
          <div>{footerLeft}</div>
          <div>{footerRight}</div>
        </div>
      )}
    </div>
  )
}
