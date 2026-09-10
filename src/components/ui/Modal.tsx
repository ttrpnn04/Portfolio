import { useEffect, useRef, type MouseEvent, type ReactNode } from 'react'
import { createPortal } from 'react-dom'

interface ModalProps {
  label: string
  isOpen: boolean
  onClose: () => void
  children: ReactNode
}

/**
 * ใช้ <dialog> ของ browser เพื่อได้ Escape, focus trap และ backdrop มาฟรี
 * ตอนปิดอยู่ dialog เป็น display:none จึงไม่ติดลำดับ tab
 */
export default function Modal({
  label,
  isOpen,
  onClose,
  children,
}: ModalProps) {
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

  return createPortal(
    <dialog
      ref={dialogRef}
      aria-label={label}
      onClose={onClose}
      onClick={handleClick}
      className="border-line bg-canvas/95 text-fg-muted scrollbar-subtle backdrop:bg-backdrop m-auto max-h-[85dvh] w-[min(40rem,calc(100vw-1.5rem))] scale-100 overflow-y-auto rounded-2xl border p-0 opacity-100 shadow-[var(--shadow-overlay)] backdrop-blur-xl transition duration-200 ease-out backdrop:backdrop-blur-sm motion-reduce:transition-none starting:open:scale-95 starting:open:opacity-0"
    >
      <div className="from-canvas via-canvas sticky top-0 z-10 flex justify-end bg-gradient-to-b to-transparent pt-3 pr-3 pb-1">
        <button
          type="button"
          onClick={onClose}
          aria-label="ปิด"
          className="text-fg-subtle hover:text-fg hover:bg-fill-hover inline-flex size-11 items-center justify-center rounded-full transition-colors motion-reduce:transition-none"
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
      <div className="px-5 pt-1 pb-6 sm:px-7">{children}</div>
    </dialog>,
    document.body,
  )
}
