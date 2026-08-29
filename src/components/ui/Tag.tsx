import type { ReactNode } from 'react'

interface TagProps {
  children: ReactNode
  tone?: 'neutral' | 'brand'
}

const toneClasses = {
  neutral: 'border-line bg-white/[0.04] text-fg-muted',
  brand: 'border-brand-500/40 bg-brand-500/12 text-brand-300',
} as const

export default function Tag({ children, tone = 'neutral' }: TagProps) {
  return (
    <span
      className={`inline-flex items-center rounded-md border px-2.5 py-1 text-xs font-medium ${toneClasses[tone]}`}
    >
      {children}
    </span>
  )
}
