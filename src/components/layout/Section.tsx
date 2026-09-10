import type { ReactNode } from 'react'

interface SectionProps {
  id: string
  /** ชื่อ section สำหรับ screen reader */
  title: string
  className?: string
  children: ReactNode
}

/**
 * เปลือกของทุก section: สูงอย่างน้อยเต็มจอแต่ยืดตามเนื้อหาได้
 * scroll-mt ชดเชยความสูงของ NavBar ที่เป็น fixed ไม่ให้หัวข้อถูกบัง
 *
 * ไม่กำหนดการจัดวางแนวตั้งไว้ที่นี่ ให้แต่ละ section ส่ง justify-* มาเอง
 * เพราะถ้าใส่ค่าเริ่มต้นแล้วอยากทับ จะกลายเป็นคลาสชนกันในสตริงเดียว
 */
export default function Section({
  id,
  title,
  className = '',
  children,
}: SectionProps) {
  return (
    <section
      id={id}
      aria-label={title}
      // tabIndex -1 ให้โฟกัสวิ่งตามมาหลังกดลิงก์ในเมนู คีย์บอร์ดจะได้ tab ต่อ
      // จากตรงนี้ ไม่ใช่ย้อนกลับไปต้นหน้า
      tabIndex={-1}
      // isolate ให้ชั้นพื้นหลัง -z-10 ข้างในไม่หลุดไปอยู่หลังพื้นหลังของหน้า
      className={`relative isolate flex min-h-dvh scroll-mt-16 flex-col focus:outline-none ${className}`}
    >
      {children}
    </section>
  )
}
