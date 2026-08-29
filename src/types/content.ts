export interface Hero {
  name: string
  status: string
  headline: string
  intro: string
  location: string
  /** ใส่ path รูปจริงทีหลัง เช่น '/profile.jpg' — ถ้าเป็น null จะแสดงกล่อง placeholder พร้อมอักษรย่อ */
  imageSrc: string | null
  imageAlt: string
  initials: string
}

export interface Strength {
  title: string
  description: string
}

export interface About {
  /** ย่อหน้าแนะนำตัว: สนใจอะไร + อยากทำงานด้านไหน */
  paragraphs: string[]
  /** ตำแหน่งงานที่กำลังมองหา แสดงเป็น tag */
  targetRoles: string[]
  strengths: Strength[]
}

export interface SkillGroup {
  id: string
  title: string
  caption: string
  items: string[]
}

export interface ProjectLink {
  label: string
  href: string
}

export interface Project {
  id: string
  title: string
  tagline: string
  period: string
  /** badge สถานะ เช่น 'ใช้งานจริง' หรือ 'กำลังพัฒนา' — เว้น null ได้ */
  status: string | null
  featured: boolean
  problem: string
  solution: string
  /** แยกเป็น bullet เพราะหน้าที่ที่รับผิดชอบมักมีหลายข้อ */
  contributions: string[]
  tech: string[]
  /** ผลลัพธ์ที่วัดได้ — ถ้ายังไม่มีตัวเลขให้เว้น null ไว้ หัวข้อจะไม่ถูกเรนเดอร์ */
  outcome: string | null
  links: ProjectLink[]
  imageSrc: string | null
  imageAlt: string
}

export type ExperienceKind = 'education' | 'internship' | 'activity'

export interface ExperienceItem {
  id: string
  kind: ExperienceKind
  title: string
  organization: string
  period: string
  location: string | null
  bullets: string[]
}

export type ContactIconName = 'document' | 'github' | 'linkedin' | 'email'

export interface ContactLink {
  id: string
  icon: ContactIconName
  label: string
  /** ข้อความที่แสดงให้เห็น เช่น อีเมล หรือ github.com/username */
  value: string
  href: string
  primary?: boolean
}
