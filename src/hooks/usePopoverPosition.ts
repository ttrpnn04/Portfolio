import { useLayoutEffect, useState, type RefObject } from 'react'

const VIEWPORT_MARGIN = 16
const GAP_FROM_TRIGGER = 12

interface Position {
  left: number
  top: number
}

const clamp = (value: number, min: number, max: number) =>
  Math.min(Math.max(value, min), Math.max(min, max))

/**
 * วาง popover แบบ fixed ข้างการ์ด: เลือกฝั่งที่มีที่ว่างพอ (ขวาก่อน แล้วซ้าย)
 * ถ้าไม่พอทั้งสองฝั่งจะวางทับกึ่งกลางการ์ด แล้ว clamp ให้อยู่ในจอเสมอ
 *
 * คืน position เป็น null จนกว่าจะวัดขนาดเสร็จ เพื่อให้ผู้เรียกซ่อน popover ไว้ก่อน
 * ไม่ให้เห็นอาการกระพริบที่มุมจอ
 */
export default function usePopoverPosition(
  triggerRef: RefObject<HTMLElement | null>,
  popoverRef: RefObject<HTMLElement | null>,
) {
  const [position, setPosition] = useState<Position | null>(null)

  useLayoutEffect(() => {
    const trigger = triggerRef.current
    const popover = popoverRef.current
    if (!trigger || !popover) return

    const measure = () => {
      const triggerRect = trigger.getBoundingClientRect()
      // ใช้ offsetWidth/offsetHeight ไม่ใช่ getBoundingClientRect เพราะตอนวัด
      // popover ยังถูก scale ของ transition อยู่ ค่าจาก rect จะเล็กกว่าขนาดจริง
      const popoverSize = {
        width: popover.offsetWidth,
        height: popover.offsetHeight,
      }
      const { innerWidth, innerHeight } = window

      const spaceOnRight = innerWidth - triggerRect.right
      const spaceOnLeft = triggerRect.left
      const requiredWidth =
        popoverSize.width + GAP_FROM_TRIGGER + VIEWPORT_MARGIN

      let left: number
      if (spaceOnRight >= requiredWidth) {
        left = triggerRect.right + GAP_FROM_TRIGGER
      } else if (spaceOnLeft >= requiredWidth) {
        left = triggerRect.left - popoverSize.width - GAP_FROM_TRIGGER
      } else {
        left = triggerRect.left + triggerRect.width / 2 - popoverSize.width / 2
      }

      const top =
        triggerRect.top + triggerRect.height / 2 - popoverSize.height / 2

      setPosition({
        left: clamp(
          left,
          VIEWPORT_MARGIN,
          innerWidth - popoverSize.width - VIEWPORT_MARGIN,
        ),
        top: clamp(
          top,
          VIEWPORT_MARGIN,
          innerHeight - popoverSize.height - VIEWPORT_MARGIN,
        ),
      })
    }

    measure()
    window.addEventListener('resize', measure)
    return () => window.removeEventListener('resize', measure)
  }, [triggerRef, popoverRef])

  return position
}
