import { useCallback, useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { hero } from '../../data/profile'

const FILL_MS = 1400
const HOLD_MS = 200
const EXIT_MS = 520

function prefersReducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

interface PageLoaderProps {
  onReveal: () => void
}

export default function PageLoader({ onReveal }: PageLoaderProps) {
  const [phase, setPhase] = useState<'playing' | 'exiting' | 'gone'>(() =>
    prefersReducedMotion() ? 'gone' : 'playing',
  )
  const revealed = useRef(false)

  const reveal = useCallback(() => {
    if (revealed.current) return
    revealed.current = true
    onReveal()
  }, [onReveal])

  useEffect(() => {
    if (prefersReducedMotion()) {
      reveal()
      return
    }

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    document.documentElement.setAttribute('aria-busy', 'true')

    const exitTimer = window.setTimeout(() => {
      setPhase('exiting')
      reveal()
    }, FILL_MS + HOLD_MS)

    const goneTimer = window.setTimeout(
      () => {
        setPhase('gone')
        document.body.style.overflow = previousOverflow
        document.documentElement.removeAttribute('aria-busy')
      },
      FILL_MS + HOLD_MS + EXIT_MS,
    )

    return () => {
      window.clearTimeout(exitTimer)
      window.clearTimeout(goneTimer)
      document.body.style.overflow = previousOverflow
      document.documentElement.removeAttribute('aria-busy')
    }
  }, [reveal])

  if (phase === 'gone') return null

  return createPortal(
    <div
      role="status"
      aria-live="polite"
      aria-label="กำลังโหลด"
      data-state={phase}
      className="bg-canvas fixed inset-0 z-[100] flex items-center justify-center transition-[opacity,transform] duration-500 ease-out data-[state=exiting]:-translate-y-3 data-[state=exiting]:opacity-0 motion-reduce:transition-none"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[var(--page-glow-opacity)]"
        style={{
          backgroundImage:
            'radial-gradient(40rem 28rem at 50% 40%, color-mix(in oklab, var(--color-brand-500) 18%, transparent), transparent 70%)',
        }}
      />

      <div className="animate-loader-mark relative flex flex-col items-center px-6">
        <p className="text-fg text-5xl font-black tracking-[0.18em] sm:text-6xl">
          {hero.initials}
        </p>
        <p className="text-fg-subtle mt-3 max-w-xs text-center text-xs font-medium tracking-[0.28em] uppercase">
          {hero.headline}
        </p>

        <div className="bg-line mt-8 h-px w-40 overflow-hidden rounded-full">
          <div className="animate-loader-fill from-brand-500 to-accent-400 h-full w-full origin-left bg-gradient-to-r" />
        </div>
      </div>
    </div>,
    document.body,
  )
}
