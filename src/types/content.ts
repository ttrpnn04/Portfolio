/**
 * ชื่อไอคอนทั้งหมดที่ใช้ในเว็บ ประกาศไว้ที่นี่เพื่อให้ data อ้างถึงได้
 * โดยไม่ต้อง import component และ Icon.tsx จะ error ทันทีถ้าลืมวาดอันไหน
 */
export type IconName =
  | 'document'
  | 'github'
  | 'linkedin'
  | 'email'
  | 'phone'
  | 'facebook'
  | 'location'
  | 'external'
  | 'sun'
  | 'moon'
  | 'code'
  | 'book'
  | 'gamepad'
  | 'music'
  | 'plane'
  | 'camera'
  | 'dumbbell'
  | 'message'
  | 'utensils'

export interface Hero {
  /** แยกชื่อ-นามสกุลเพราะหน้าแรกวางคนละบรรทัดคนละน้ำหนักฟอนต์ */
  firstName: string
  lastName: string
  status: string
  headline: string
  intro: string
  location: string
  /** แสดงมุมขวาบนของ NavBar */
  phone: string
  /** ภาพพื้นหลังหน้าแรก — ถ้าเป็น null จะแสดงพื้นไล่สีแทน */
  imageSrc: string | null
  imageAlt: string
  initials: string
}

export interface Strength {
  title: string
  description: string
}

export interface About {
  email: string
  address: string
  /** ย่อหน้าแนะนำตัว: สนใจอะไร + อยากทำงานด้านไหน */
  paragraphs: string[]
  /** ตำแหน่งงานที่กำลังมองหา แสดงเป็น tag */
  targetRoles: string[]
  strengths: Strength[]
  /** รูปพอร์ตเทรตครึ่งขวาของ section About */
  portraitSrc: string | null
  portraitAlt: string
}

/** 1 = เพิ่งเริ่มศึกษา ถึง 5 = ถนัดที่สุด ดูคำอธิบายที่ skillLevelLabels */
export type SkillLevel = 1 | 2 | 3 | 4 | 5

export interface RatedSkill {
  name: string
  level: SkillLevel
}

export interface SkillGroup {
  id: string
  title: string
  caption: string
  items: RatedSkill[]
}

export interface LanguageSkill {
  name: string
  level: SkillLevel
  /** ระดับแบบคำพูด เช่น 'สื่อสารได้ อ่านเอกสารเทคนิคคล่อง' */
  note: string
}

/** กลุ่มที่แสดงเป็นรายการเฉย ๆ ไม่มีแถบระดับ */
export interface SkillList {
  id: string
  title: string
  items: string[]
}

export interface Hobby {
  id: string
  icon: IconName
  label: string
  /** ประโยคสั้น ๆ ใต้ชื่อ ถ้าไม่มีจะโชว์แค่ป้าย */
  note?: string
}

export interface ProjectLink {
  label: string
  href: string
}

export interface ProjectScreenshot {
  src: string
  alt: string
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
  /** ปกกราฟิกเมื่อยังไม่มีสกรีนช็อต ถ้ามี imageSrc จะไม่ถูกใช้ */
  coverTitle?: string
  coverKicker?: string
  coverIcon?: IconName
  /** ภาพหน้าจอใน modal ถ้าไม่มีให้เว้นว่าง หัวข้อแกลเลอรีจะไม่ถูกเรนเดอร์ */
  screenshots: ProjectScreenshot[]
}

export type ExperienceKind = 'education' | 'internship' | 'activity'

export interface ExperienceItem {
  id: string
  kind: ExperienceKind
  /** ตัวย่อในวงกลมบนไทม์ไลน์ สั้นที่สุดเท่าที่อ่านรู้เรื่อง เช่น '2024' */
  badge: string
  title: string
  organization: string
  period: string
  location: string | null
  bullets: string[]
}

export interface ContactLink {
  id: string
  icon: IconName
  label: string
  /** ข้อความที่แสดงให้เห็น เช่น อีเมล หรือ github.com/username */
  value: string
  href: string
  primary?: boolean
}

export interface SocialLink {
  id: string
  icon: IconName
  label: string
  href: string
}
