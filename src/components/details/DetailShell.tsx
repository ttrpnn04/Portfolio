import type { ReactNode } from 'react'

interface DetailShellProps {
  eyebrow: string
  title: string
  /** บรรทัดข้อมูลประกอบใต้หัวข้อ เช่น ช่วงเวลา หรือ badge สถานะ */
  meta?: ReactNode
  children: ReactNode
}

export default function DetailShell({
  eyebrow,
  title,
  meta,
  children,
}: DetailShellProps) {
  return (
    <div>
      <p className="text-brand-300 text-[11px] font-semibold tracking-[0.2em] uppercase">
        {eyebrow}
      </p>
      <h3 className="text-fg mt-1 text-lg font-bold">{title}</h3>
      {meta && <div className="mt-1.5">{meta}</div>}
      <div className="mt-4 space-y-4">{children}</div>
    </div>
  )
}
