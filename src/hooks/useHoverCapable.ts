import { useEffect, useState } from 'react'

const HOVER_QUERY = '(hover: hover) and (pointer: fine)'

/**
 * บอกว่าอุปกรณ์ชี้ตำแหน่งได้แม่นและ hover ค้างได้จริงหรือไม่
 * ใช้ตัดสินว่าจะโชว์ popover ตอน hover หรือเปิด modal ตอนแตะ
 * เช็คจากความสามารถของ pointer ไม่ใช่ความกว้างจอ เพราะจอ touch ขนาดใหญ่
 * ก็ต้องได้ modal เหมือนมือถือ
 */
export default function useHoverCapable() {
  const [hoverCapable, setHoverCapable] = useState(
    () => window.matchMedia(HOVER_QUERY).matches,
  )

  useEffect(() => {
    const mediaQuery = window.matchMedia(HOVER_QUERY)
    const handleChange = (event: MediaQueryListEvent) =>
      setHoverCapable(event.matches)

    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  return hoverCapable
}
