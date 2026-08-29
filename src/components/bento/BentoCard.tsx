import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type KeyboardEvent,
  type PointerEvent,
  type ReactNode,
} from 'react'
import CardModal from './CardModal'
import CardPopover from './CardPopover'

const OPEN_DELAY_MS = 70
const CLOSE_DELAY_MS = 130

const baseClasses =
  'animate-card-in card-surface relative isolate flex min-h-0 flex-col overflow-hidden rounded-2xl border p-4 sm:p-5'

interface BentoCardProps {
  label: string
  /** คลาสกำหนด span ใน grid */
  className?: string
  hoverCapable: boolean
  /** หน่วงเวลาเริ่ม entrance animation ให้การ์ดโผล่ไล่กันทีละใบ */
  delayMs?: number
  /** ขอบเน้นสี brand ให้สายตาไปหยุดที่ผลงานหลักก่อน */
  featured?: boolean
  /** ถ้าไม่ส่ง detail การ์ดจะเป็นแบบอ่านเฉย ๆ ไม่มี popup */
  detail?: ReactNode
  children: ReactNode
}

export default function BentoCard({
  label,
  className = '',
  hoverCapable,
  delayMs = 0,
  featured = false,
  detail,
  children,
}: BentoCardProps) {
  // แยกสีขอบออกจาก baseClasses เพราะถ้าใส่สองคลาสพร้อมกันลำดับใน stylesheet
  // เป็นตัวตัดสินว่าอันไหนชนะ ไม่ใช่ลำดับใน class attribute
  const borderClass = featured ? 'border-brand-500/35' : 'border-line'
  const triggerRef = useRef<HTMLDivElement>(null)
  const openTimer = useRef<number | undefined>(undefined)
  const closeTimer = useRef<number | undefined>(undefined)
  // จำไว้ว่าการกดครั้งล่าสุดมาจากนิ้วหรือเมาส์ เครื่องที่มีทั้งจอสัมผัสและเมาส์
  // จะได้พฤติกรรมถูกต้องทั้งสองแบบ
  const lastPointerType = useRef('mouse')
  const [isPopoverOpen, setIsPopoverOpen] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const clearTimers = useCallback(() => {
    window.clearTimeout(openTimer.current)
    window.clearTimeout(closeTimer.current)
  }, [])

  useEffect(() => clearTimers, [clearTimers])

  const cancelClose = useCallback(() => {
    window.clearTimeout(closeTimer.current)
  }, [])

  const scheduleOpen = useCallback(() => {
    clearTimers()
    openTimer.current = window.setTimeout(
      () => setIsPopoverOpen(true),
      OPEN_DELAY_MS,
    )
  }, [clearTimers])

  const scheduleClose = useCallback(() => {
    clearTimers()
    closeTimer.current = window.setTimeout(
      () => setIsPopoverOpen(false),
      CLOSE_DELAY_MS,
    )
  }, [clearTimers])

  const closeNow = useCallback(() => {
    clearTimers()
    setIsPopoverOpen(false)
  }, [clearTimers])

  useEffect(() => {
    if (!isPopoverOpen) return
    const handleKeyDown = (event: globalThis.KeyboardEvent) => {
      if (event.key === 'Escape') closeNow()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isPopoverOpen, closeNow])

  if (!detail) {
    return (
      <section
        aria-label={label}
        style={{ animationDelay: `${delayMs}ms` }}
        className={`${baseClasses} ${borderClass} ${className}`}
      >
        {children}
      </section>
    )
  }

  // อัปเดตตำแหน่งไฟส่องผ่าน CSS variable ตรง ๆ ไม่ผ่าน state จะได้ไม่ rerender ทุกเฟรม
  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    const card = triggerRef.current
    if (!card) return
    const rect = card.getBoundingClientRect()
    card.style.setProperty('--spotlight-x', `${event.clientX - rect.left}px`)
    card.style.setProperty('--spotlight-y', `${event.clientY - rect.top}px`)
  }

  const handlePointerEnter = (event: PointerEvent<HTMLDivElement>) => {
    lastPointerType.current = event.pointerType
    if (!hoverCapable || event.pointerType === 'touch') return
    scheduleOpen()
  }

  const handlePointerLeave = (event: PointerEvent<HTMLDivElement>) => {
    if (!hoverCapable || event.pointerType === 'touch') return
    scheduleClose()
  }

  const openModal = () => {
    closeNow()
    setIsModalOpen(true)
  }

  // ใช้ pointerup แทนการรอ click ที่ browser สังเคราะห์จากการแตะ
  // เพราะบางเบราว์เซอร์ไม่ยิง click ให้ element ที่ไม่ใช่ปุ่มจริง
  const handlePointerUp = (event: PointerEvent<HTMLDivElement>) => {
    if (event.pointerType === 'mouse') return
    openModal()
  }

  const handleClick = () => {
    if (hoverCapable) return
    openModal()
  }

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      closeNow()
      setIsModalOpen(true)
    }
  }

  return (
    <>
      <div
        ref={triggerRef}
        role="button"
        tabIndex={0}
        aria-haspopup="dialog"
        aria-expanded={isPopoverOpen || isModalOpen}
        aria-label={
          hoverCapable
            ? `${label} — ชี้เมาส์เพื่อดูรายละเอียด`
            : `${label} — แตะเพื่อดูรายละเอียด`
        }
        onPointerDown={(event) => {
          lastPointerType.current = event.pointerType
        }}
        onPointerEnter={handlePointerEnter}
        onPointerLeave={handlePointerLeave}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        // การแตะทำให้การ์ดได้ focus ด้วย จึงเปิด popover เฉพาะกรณีที่มาจากเมาส์
        // หรือคีย์บอร์ด ไม่ใช่จากนิ้ว
        onFocus={() =>
          hoverCapable &&
          lastPointerType.current === 'mouse' &&
          setIsPopoverOpen(true)
        }
        onBlur={closeNow}
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        style={{ animationDelay: `${delayMs}ms` }}
        className={`group card-spotlight ${baseClasses} ${borderClass} ${className} hover:border-brand-500/60 hover:card-raise focus-visible:outline-brand-400 cursor-pointer transition-[translate,box-shadow,border-color] duration-300 ease-out hover:-translate-y-1 focus-visible:outline-2 focus-visible:outline-offset-2 motion-reduce:transition-none motion-reduce:hover:translate-y-0`}
      >
        <span
          aria-hidden="true"
          className="text-fg-subtle/70 group-hover:text-brand-300 absolute top-3 right-3 transition-[color,transform] duration-300 ease-out group-hover:rotate-90 motion-reduce:transition-none"
        >
          <svg
            className="size-4"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            aria-hidden="true"
          >
            <path d="M12 5v14M5 12h14" />
          </svg>
        </span>
        {children}
      </div>

      {isPopoverOpen && (
        <CardPopover
          label={label}
          triggerRef={triggerRef}
          onPointerEnter={cancelClose}
          onPointerLeave={scheduleClose}
        >
          {detail}
        </CardPopover>
      )}

      <CardModal
        label={label}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      >
        {detail}
      </CardModal>
    </>
  )
}
