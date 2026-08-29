import type { ReactNode } from 'react'

interface ChipProps {
  children: ReactNode
}

/** ป้ายเล็กสำหรับหน้าการ์ด เล็กกว่า Tag ที่ใช้ในหน้ารายละเอียด */
export default function Chip({ children }: ChipProps) {
  return (
    <span className="border-line text-fg-muted inline-flex items-center rounded border bg-white/[0.04] px-1.5 py-0.5 text-[11px]">
      {children}
    </span>
  )
}
