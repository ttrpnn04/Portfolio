import {
  useEffect,
  useRef,
  useState,
  type ReactNode,
  type RefObject,
} from 'react'
import { createPortal } from 'react-dom'
import usePopoverPosition from '../../hooks/usePopoverPosition'

interface CardPopoverProps {
  label: string
  triggerRef: RefObject<HTMLElement | null>
  /** ยกเลิกการปิดเมื่อเมาส์เลื่อนจากการ์ดเข้ามาใน popover เพื่อให้กดลิงก์ข้างในได้ */
  onPointerEnter: () => void
  onPointerLeave: () => void
  children: ReactNode
}

export default function CardPopover({
  label,
  triggerRef,
  onPointerEnter,
  onPointerLeave,
  children,
}: CardPopoverProps) {
  const popoverRef = useRef<HTMLDivElement>(null)
  const position = usePopoverPosition(triggerRef, popoverRef)
  const [hasEntered, setHasEntered] = useState(false)

  useEffect(() => {
    if (!position) return
    // รอเฟรมถัดไปหลังได้ตำแหน่งแล้วค่อยสลับ state เพื่อให้ transition วิ่ง
    const frame = requestAnimationFrame(() => setHasEntered(true))
    return () => cancelAnimationFrame(frame)
  }, [position])

  return createPortal(
    <div
      ref={popoverRef}
      role="dialog"
      aria-label={label}
      data-state={position && hasEntered ? 'open' : 'closed'}
      onPointerEnter={onPointerEnter}
      onPointerLeave={onPointerLeave}
      style={{
        left: position?.left ?? 0,
        top: position?.top ?? 0,
        visibility: position ? 'visible' : 'hidden',
      }}
      className="border-line bg-canvas/95 scrollbar-subtle fixed z-50 max-h-[70vh] w-[min(26rem,calc(100vw-2rem))] overflow-y-auto overscroll-contain rounded-2xl border p-5 shadow-[0_24px_60px_-20px_rgb(0_0_0/0.85)] backdrop-blur-xl transition duration-150 ease-out data-[state=closed]:translate-y-1 data-[state=closed]:scale-[0.98] data-[state=closed]:opacity-0 motion-reduce:transition-none"
    >
      {children}
    </div>,
    document.body,
  )
}
