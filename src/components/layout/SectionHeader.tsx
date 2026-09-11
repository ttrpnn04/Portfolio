import type { ReactNode } from 'react'

interface SectionHeaderProps {
  /** คำอังกฤษตัวเล็กเหนือหัวข้อ ให้ตรงกับชื่อในเมนู */
  eyebrow: string
  title: string
  children?: ReactNode
}

export default function SectionHeader({
  eyebrow,
  title,
  children,
}: SectionHeaderProps) {
  return (
    <div>
      <p className="text-brand-300 text-xs font-semibold tracking-[0.3em] uppercase">
        {eyebrow}
      </p>
      <h2 className="text-fg mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
        {title}
      </h2>
      {children && <div className="mt-3">{children}</div>}
    </div>
  )
}
