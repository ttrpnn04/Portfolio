export interface NavSection {
  id: string
  /** ข้อความบนเมนู ใช้อังกฤษให้ตรงกับ eyebrow ของแต่ละ section */
  label: string
  /** ชื่อไทยสำหรับ aria-label ของ section */
  title: string
}

/**
 * แหล่งความจริงเดียวของลำดับ section: NavBar ใช้สร้างเมนู
 * และ useActiveSection ใช้ id ชุดนี้เฝ้าดูว่าตอนนี้อยู่ตรงไหน
 */
export const navSections: NavSection[] = [
  { id: 'home', label: 'Home', title: 'หน้าแรก' },
  { id: 'about', label: 'About', title: 'เกี่ยวกับฉัน' },
  { id: 'resume', label: 'Resume', title: 'เรซูเม่' },
  { id: 'portfolio', label: 'Portfolio', title: 'ผลงาน' },
]

export const navSectionIds = navSections.map((section) => section.id)
