import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { useInView } from 'motion/react'
import { Check, Code2, Copy, RotateCcw } from 'lucide-react'

type TokenKind =
  | 'comment'
  | 'string'
  | 'key'
  | 'keyword'
  | 'number'
  | 'boolean'
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
])

const BOOLEAN_SET = new Set(['true', 'false', 'null', 'undefined'])

function tokenizeLine(line: string): Token[] {
  const trimmed = line.trimStart()
  if (trimmed.startsWith('//')) {
    return [{ text: line, kind: 'comment' }]
  }

  const tokens: Token[] = []
  const pattern =
    /("(?:\\.|[^"\\])*"(?=\s*:)|"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|`(?:\\.|[^`\\])*`|\b\d+(?:\.\d+)?\b|\b[A-Za-z_][A-Za-z0-9_]*\b)/g

  let lastIndex = 0
  let match: RegExpExecArray | null

  while ((match = pattern.exec(line)) !== null) {
    if (match.index > lastIndex) {
      tokens.push({ text: line.slice(lastIndex, match.index), kind: 'plain' })
    }

    const raw = match[0]
    let kind: TokenKind = 'plain'

    if (raw.startsWith('"') && line.slice(match.index + raw.length).trimStart().startsWith(':')) {
      kind = 'key'
    } else if (raw.startsWith('"') || raw.startsWith("'") || raw.startsWith('`')) {
      kind = 'string'
    } else if (/^\d/.test(raw)) {
      kind = 'number'
    } else if (BOOLEAN_SET.has(raw)) {
      kind = 'boolean'
    } else if (KEYWORD_SET.has(raw)) {
      kind = 'keyword'
    } else if (line.slice(match.index + raw.length).trimStart().startsWith(':')) {
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

function getTokenClass(kind: TokenKind): string {
  switch (kind) {
    case 'comment':
      return 'text-slate-500 italic'
    case 'string':
      return 'text-emerald-300'
    case 'key':
      return 'text-sky-300'
    case 'keyword':
      return 'text-blue-400 font-semibold'
    case 'number':
      return 'text-amber-300'
    case 'boolean':
      return 'text-purple-400 font-semibold'
    default:
      return 'text-slate-100'
  }
}

export interface TypewriterCodeCardProps {
  code: string
  filename?: string
  statusBadge?: string
  footerLeft?: React.ReactNode
  footerRight?: React.ReactNode
  charSpeedMs?: number
  linePauseMs?: number
  loop?: boolean
  className?: string
}

export function TypewriterCodeCard({
  code,
  filename = 'dispatch-runtime.ts',
  statusBadge = 'LIVE RUNTIME',
  footerLeft,
  footerRight,
  charSpeedMs = 24,
  linePauseMs = 170,
  loop = false,
  className = '',
}: TypewriterCodeCardProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, amount: 0.25 })

  const lines = useMemo(() => code.replace(/\r\n/g, '\n').split('\n'), [code])

  const [completedLines, setCompletedLines] = useState(0)
  const [currentCharIndex, setCurrentCharIndex] = useState(0)
  const [runCycle, setRunCycle] = useState(0)
  const [copied, setCopied] = useState(false)

  const isDone = completedLines >= lines.length

  useEffect(() => {
    if (!isInView) return

    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      typeof window.matchMedia === 'function' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (prefersReducedMotion) {
      setCompletedLines(lines.length)
      setCurrentCharIndex(0)
      return
    }

    if (completedLines >= lines.length) {
      if (!loop) return
      const resetTimer = window.setTimeout(() => {
        setCompletedLines(0)
        setCurrentCharIndex(0)
        setRunCycle((c) => c + 1)
      }, 3600)
      return () => window.clearTimeout(resetTimer)
    }

    const activeLine = lines[completedLines] ?? ''

    if (activeLine.length === 0) {
      const blankTimer = window.setTimeout(() => {
        setCompletedLines((prev) => prev + 1)
        setCurrentCharIndex(0)
      }, linePauseMs)
      return () => window.clearTimeout(blankTimer)
    }

    if (currentCharIndex < activeLine.length) {
      const charTimer = window.setTimeout(() => {
        setCurrentCharIndex((prev) => prev + 1)
      }, charSpeedMs)
      return () => window.clearTimeout(charTimer)
    }

    const nextLineTimer = window.setTimeout(() => {
      setCompletedLines((prev) => prev + 1)
      setCurrentCharIndex(0)
    }, linePauseMs)
    return () => window.clearTimeout(nextLineTimer)
  }, [isInView, completedLines, currentCharIndex, lines, charSpeedMs, linePauseMs, loop, runCycle])

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const el = containerRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    el.style.setProperty('--sc-x', `${e.clientX - rect.left}px`)
    el.style.setProperty('--sc-y', `${e.clientY - rect.top}px`)
  }, [])

  const handleCopy = useCallback(() => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(code).catch(() => {})
    }
    setCopied(true)
    window.setTimeout(() => setCopied(false), 1800)
  }, [code])

  const handleReplay = useCallback(() => {
    setCompletedLines(0)
    setCurrentCharIndex(0)
    setRunCycle((c) => c + 1)
  }, [])

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      data-cursor="dark"
      className={`pq-code-showcase pq-code-showcase-dark relative rounded-2xl border border-blue-800/70 bg-gradient-to-br from-[#07112e] via-[#070d24] to-[#0a1942] text-slate-100 shadow-2xl shadow-blue-950/35 hover:border-blue-500/60 overflow-hidden ${className}`}
    >
      {/* Interactive Bluish Spotlight Sheen */}
      <div aria-hidden="true" className="pq-code-showcase-spotlight" />

      {/* Animated Luminous Bluish Top Beam */}
      <div
        aria-hidden="true"
        className="relative z-10 h-[2.5px] w-full pq-code-showcase-beam bg-gradient-to-r from-blue-500 via-cyan-400 via-indigo-500 to-blue-500"
      />

      {/* Ambient Bluish Depth Glows (matching AI Automation page dark runtime cards) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-10 -right-10 size-56 rounded-full bg-blue-500/20 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-12 -left-10 size-56 rounded-full bg-indigo-500/20 blur-3xl"
      />

      {/* Window Chrome Header */}
      <div className="relative z-10 flex items-center justify-between gap-2 px-4 py-3 border-b border-blue-900/80 bg-[#040a1d]/95">
        <div className="flex items-center gap-2.5 min-w-0">
          <div className="flex items-center gap-1.5 shrink-0">
            <span className="size-2.5 rounded-full bg-rose-500/90" />
            <span className="size-2.5 rounded-full bg-amber-400/90" />
            <span className="size-2.5 rounded-full bg-emerald-400/90" />
          </div>
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-blue-950/90 border border-blue-800/70 min-w-0">
            <Code2 className="size-3.5 text-sky-400 shrink-0" />
            <span className="font-mono text-xs font-semibold text-blue-100 truncate">
              {filename}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-1.5 shrink-0">
          {statusBadge && (
            <span className="hidden sm:inline-flex items-center gap-1.5 px-2 py-0.5 rounded-sm bg-blue-950/90 border border-blue-700/60 font-mono text-[10px] font-semibold text-sky-300">
              <span className="size-1.5 rounded-full bg-sky-400 animate-pulse" />
              <span>{statusBadge}</span>
            </span>
          )}

          <button
            type="button"
            onClick={handleReplay}
            title="Replay typing animation"
            aria-label="Replay typing animation"
            className="inline-flex items-center justify-center p-1.5 rounded-md bg-blue-950/80 hover:bg-blue-900 border border-blue-800/70 text-blue-200 hover:text-white transition-colors cursor-pointer"
          >
            <RotateCcw className="size-3" />
          </button>

          <button
            type="button"
            onClick={handleCopy}
            className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-blue-950/80 hover:bg-blue-600 border border-blue-800/70 hover:border-blue-500 text-[11px] font-mono font-semibold text-blue-100 hover:text-white transition-colors cursor-pointer"
          >
            {copied ? (
              <>
                <Check className="size-3 text-emerald-400" />
                <span className="text-emerald-300">Copied</span>
              </>
            ) : (
              <>
                <Copy className="size-3" />
                <span>Copy</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Line-by-line Typed Code Body */}
      <div className="relative z-10 p-4 sm:p-5 font-mono text-[11.5px] sm:text-xs leading-relaxed overflow-x-auto thin-scrollbar">
        <div className="rounded-xl bg-[#050d24]/85 border border-blue-900/60 p-3.5 sm:p-4 space-y-0.5 min-w-max">
          {lines.map((fullLine, idx) => {
            const isCompleted = idx < completedLines
            const isActiveLine = !isDone && idx === completedLines
            const isPending = idx > completedLines

            const visibleText = isCompleted
              ? fullLine
              : isActiveLine
                ? fullLine.slice(0, currentCharIndex)
                : ''

            const tokens = visibleText.length > 0 ? tokenizeLine(visibleText) : []
            const showCaretHere = isActiveLine || (isDone && idx === lines.length - 1)

            return (
              <div
                key={idx}
                className={`pq-code-line flex items-baseline gap-3 px-1.5 py-[1.5px] transition-colors duration-200 ${
                  isActiveLine ? 'bg-blue-500/15 ring-1 ring-blue-500/20' : ''
                }`}
              >
                <span
                  className={`select-none text-right w-5 shrink-0 text-[10.5px] tabular-nums transition-colors ${
                    isActiveLine
                      ? 'text-sky-400 font-bold'
                      : isPending
                        ? 'text-slate-700'
                        : 'text-slate-500'
                  }`}
                >
                  {idx + 1}
                </span>

                <code className="whitespace-pre min-h-[1.35em] block">
                  {tokens.length === 0 ? (
                    isPending ? '\u00A0' : '\u00A0'
                  ) : (
                    tokens.map((tok, tIdx) => (
                      <span key={tIdx} className={getTokenClass(tok.kind)}>
                        {tok.text}
                      </span>
                    ))
                  )}
                  {showCaretHere && (
                    <span
                      aria-hidden="true"
                      className="pq-code-caret bg-sky-400 shadow-[0_0_8px_rgba(56,189,248,0.85)]"
                    />
                  )}
                </code>
              </div>
            )
          })}
        </div>
      </div>

      {/* Footer Bar */}
      {(footerLeft || footerRight) && (
        <div className="relative z-10 px-4 py-2.5 border-t border-blue-900/80 bg-[#040a1d]/95 flex flex-wrap items-center justify-between gap-2 text-[11px] font-mono text-slate-300">
          <div>{footerLeft}</div>
          <div>{footerRight}</div>
        </div>
      )}
    </div>
  )
}
