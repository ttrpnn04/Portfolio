import { useEffect, useState } from 'react'

/** แถบตัดสินสูง 10% กลางจอ: section ที่คร่อมแถบนี้คือใบที่ผู้ใช้กำลังดูอยู่ */
const CENTER_BAND = '-45% 0px -45% 0px'

/**
 * บอกว่าตอนนี้เลื่อนอยู่ที่ section ไหน สำหรับไฮไลต์เมนูใน NavBar
 *
 * เก็บชุด section ที่มองเห็นไว้เองแทนการเชื่อ entry ล่าสุด เพราะตอนเลื่อนเร็ว
 * callback รอบเดียวจะได้ทั้งใบที่เพิ่งเข้าและใบที่เพิ่งออก ถ้าอ่านตัวสุดท้าย
 * อาจได้ section ที่ผ่านไปแล้ว
 */
export default function useActiveSection(sectionIds: string[]) {
  const [activeId, setActiveId] = useState(sectionIds[0] ?? '')

  useEffect(() => {
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((element): element is HTMLElement => element !== null)
    if (elements.length === 0) return

    const visibleIds = new Set<string>()

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) visibleIds.add(entry.target.id)
          else visibleIds.delete(entry.target.id)
        }

        // ถ้าคร่อมแถบพร้อมกันหลายใบ เลือกใบที่อยู่บนสุดตามลำดับในหน้า
        const topMost = sectionIds.find((id) => visibleIds.has(id))
        if (topMost) setActiveId(topMost)
      },
      { rootMargin: CENTER_BAND },
    )

    for (const element of elements) observer.observe(element)
    return () => observer.disconnect()
  }, [sectionIds])

  return activeId
}
