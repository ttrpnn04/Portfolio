import type { ReactNode } from 'react'

interface ButtonProps {
  href: string
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'outline'
  /** ทรงแคปซูลแบบปุ่มบนหน้าแรก */
  pill?: boolean
  /** เปิดในแท็บใหม่ — ใช้กับลิงก์ภายนอกอย่าง GitHub หรือไฟล์ CV */
  external?: boolean
  className?: string
}

const variantClasses = {
  // hover ของปุ่มทึบเข้มลง ไม่ใช่สว่างขึ้น เพราะตัวอักษรเป็นสีขาว
  // ถ้าพื้นสว่างขึ้นตอน hover contrast จะตกต่ำกว่าเกณฑ์ WCAG AA
  primary:
    'bg-brand-600 text-white shadow-[0_8px_24px_-12px_var(--color-brand-500)] hover:bg-brand-700',
  secondary:
    'border border-line bg-fill text-fg hover:border-line-strong hover:bg-fill-hover',
  outline:
    'border border-line-strong text-fg hover:border-brand-400 hover:bg-brand-500/10 hover:text-brand-300',
} as const

export default function Button({
  href,
  children,
  variant = 'primary',
  pill = false,
  external = false,
  className = '',
}: ButtonProps) {
  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      // min-h-11 = 44px ตามขนาดพื้นที่แตะที่แนะนำบนมือถือ
      className={`inline-flex min-h-11 items-center justify-center gap-2 px-6 text-sm font-semibold transition-colors motion-reduce:transition-none ${
        pill ? 'rounded-full' : 'rounded-lg'
      } ${variantClasses[variant]} ${className}`}
    >
      {children}
    </a>
  )
}
