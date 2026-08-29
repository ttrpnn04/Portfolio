import { useEffect, useRef, type MouseEvent, type ReactNode } from 'react'
import { createPortal } from 'react-dom'

interface CardModalProps {
  label: string
  isOpen: boolean
  onClose: () => void
  children: ReactNode
}

/**
 * ใช้ <dialog> ของ browser เพื่อได้ Escape, focus trap และ backdrop มาฟรี
 * ตอนปิดอยู่ dialog เป็น display:none จึงไม่ติดลำดับ tab
 */
export default function CardModal({
  label,
  isOpen,
  onClose,
  children,
}: CardModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null)

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return

    // แอนิเมชันตอนเปิดใช้ @starting-style ผ่านคลาส starting:open:* จึงไม่ต้องมี
    // state คุมคลาสและไม่ต้อง setState ใน effect
    if (isOpen && !dialog.open) dialog.showModal()
    if (!isOpen && dialog.open) dialog.close()
  }, [isOpen])

  useEffect(() => {
    if (!isOpen) return
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = previousOverflow
    }
  }, [isOpen])

  // คลิกที่ backdrop จะได้ target เป็นตัว dialog เอง ส่วนคลิกในเนื้อหาจะได้ลูกข้างใน
  const handleClick = (event: MouseEvent<HTMLDialogElement>) => {
    if (event.target === dialogRef.current) onClose()
  }

  // portal ออกไป body เพื่อไม่ให้ dialog เป็นลูกของ grid ในเชิงโครงสร้าง
  return createPortal(
    <dialog
      ref={dialogRef}
      aria-label={label}
      onClose={onClose}
      onClick={handleClick}
      className="border-line bg-canvas/95 text-fg-muted scrollbar-subtle m-auto max-h-[85dvh] w-[min(32rem,calc(100vw-1.5rem))] scale-100 overflow-y-auto rounded-2xl border p-0 opacity-100 shadow-[0_30px_80px_-24px_rgb(0_0_0/0.9)] backdrop-blur-xl transition duration-200 ease-out backdrop:bg-black/70 backdrop:backdrop-blur-sm motion-reduce:transition-none starting:open:scale-95 starting:open:opacity-0"
    >
      <div className="from-canvas via-canvas sticky top-0 flex justify-end bg-gradient-to-b to-transparent pt-3 pr-3 pb-1">
        <button
          type="button"
          onClick={onClose}
          aria-label="ปิด"
          className="text-fg-subtle hover:text-fg inline-flex size-11 items-center justify-center rounded-full transition-colors hover:bg-white/10"
        >
          <svg
            className="size-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            aria-hidden="true"
          >
            <path d="M6 6l12 12M18 6L6 18" />
          </svg>
        </button>
      </div>
      <div className="px-5 pt-1 pb-6">{children}</div>
    </dialog>,
    document.body,
  )
}
