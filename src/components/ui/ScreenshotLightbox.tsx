import { useEffect, useRef, type MouseEvent } from 'react'
import { createPortal } from 'react-dom'
import type { ProjectScreenshot } from '../../types/content'

interface ScreenshotLightboxProps {
  shots: ProjectScreenshot[]
  index: number | null
  onClose: () => void
  onIndexChange: (index: number) => void
}

/**
 * เปิดเป็น dialog ใบที่สองทับ modal รายละเอียด เพราะ <dialog showModal>
 * อยู่ใน top layer — overlay ธรรมดาในหน้าจะอยู่ด้านหลัง modal ไม่ได้
 */
export default function ScreenshotLightbox({
  shots,
  index,
  onClose,
  onIndexChange,
}: ScreenshotLightboxProps) {
  const dialogRef = useRef<HTMLDialogElement>(null)
  const isOpen = index !== null
  const shot = index !== null ? shots[index] : null
  const hasMany = shots.length > 1

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return

    if (isOpen && !dialog.open) dialog.showModal()
    if (!isOpen && dialog.open) dialog.close()

    return () => {
      if (dialog.open) dialog.close()
    }
  }, [isOpen])

  useEffect(() => {
    if (index === null || !hasMany) return

    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'ArrowRight') {
        event.preventDefault()
        onIndexChange((index + 1) % shots.length)
      }
      if (event.key === 'ArrowLeft') {
        event.preventDefault()
        onIndexChange((index - 1 + shots.length) % shots.length)
      }
    }

    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [hasMany, index, onIndexChange, shots.length])

  const handleClick = (event: MouseEvent<HTMLDialogElement>) => {
    if (event.target === dialogRef.current) onClose()
  }

  return createPortal(
    <dialog
      ref={dialogRef}
      aria-label={shot ? `ดูรูปขนาดใหญ่: ${shot.alt}` : 'ดูรูปขนาดใหญ่'}
      onClose={onClose}
      onClick={handleClick}
      className="m-auto max-h-[95dvh] w-[min(72rem,calc(100vw-1.5rem))] overflow-visible border-0 bg-transparent p-0 opacity-100 backdrop:bg-black/80 backdrop:backdrop-blur-sm"
    >
      {shot && (
        <div className="relative flex flex-col items-center gap-3">
          <img
            src={shot.src}
            alt={shot.alt}
            className="max-h-[80dvh] w-full rounded-lg object-contain"
          />
          <p className="text-center text-sm text-white/80">{shot.alt}</p>

          <button
            type="button"
            onClick={onClose}
            aria-label="ปิดรูป"
            className="absolute -top-1 -right-1 inline-flex size-11 items-center justify-center rounded-full text-white/80 transition-colors hover:bg-white/15 hover:text-white motion-reduce:transition-none"
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

          {hasMany && (
            <>
              <button
                type="button"
                onClick={() =>
                  onIndexChange((index! - 1 + shots.length) % shots.length)
                }
                aria-label="รูปก่อนหน้า"
                className="absolute top-1/2 left-0 inline-flex size-11 -translate-y-1/2 items-center justify-center rounded-full text-white/80 transition-colors hover:bg-white/15 hover:text-white motion-reduce:transition-none sm:-left-3"
              >
                <svg
                  className="size-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M15 6l-6 6 6 6" />
                </svg>
              </button>
              <button
                type="button"
                onClick={() => onIndexChange((index! + 1) % shots.length)}
                aria-label="รูปถัดไป"
                className="absolute top-1/2 right-0 inline-flex size-11 -translate-y-1/2 items-center justify-center rounded-full text-white/80 transition-colors hover:bg-white/15 hover:text-white motion-reduce:transition-none sm:-right-3"
              >
                <svg
                  className="size-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M9 6l6 6-6 6" />
                </svg>
              </button>
            </>
          )}
        </div>
      )}
    </dialog>,
    document.body,
  )
}
