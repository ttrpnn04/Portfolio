import type { ReactNode } from 'react'

interface ButtonProps {
  href: string
  children: ReactNode
  variant?: 'primary' | 'secondary'
  /** เปิดในแท็บใหม่ — ใช้กับลิงก์ภายนอกอย่าง GitHub หรือไฟล์ CV */
  external?: boolean
  className?: string
}

const variantClasses = {
  primary:
    'bg-brand-600 text-white shadow-[0_8px_24px_-12px_var(--color-brand-500)] hover:bg-brand-500',
  secondary:
    'border border-line bg-white/[0.04] text-fg hover:border-line-strong hover:bg-white/[0.08]',
} as const

export default function Button({
  href,
  children,
  variant = 'primary',
  external = false,
  className = '',
}: ButtonProps) {
  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noreferrer' : undefined}
      // min-h-11 = 44px ตามขนาดพื้นที่แตะที่แนะนำบนมือถือ
      className={`inline-flex min-h-11 items-center justify-center gap-2 rounded-lg px-5 text-sm font-semibold transition-colors ${variantClasses[variant]} ${className}`}
    >
      {children}
    </a>
  )
}
