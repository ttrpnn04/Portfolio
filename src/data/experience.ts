import type { ExperienceItem, ExperienceKind } from '../types/content'

export const experienceKindLabels: Record<ExperienceKind, string> = {
  education: 'การศึกษา',
  internship: 'ฝึกงาน',
  activity: 'กิจกรรม',
}

/** เรียงจากใหม่ไปเก่า */
export const experience: ExperienceItem[] = [
  {
    id: 'education-1',
    kind: 'education',
    badge: '2023',
    title: 'วท.บ. วิทยาการคอมพิวเตอร์และนวัตกรรมการพัฒนาซอฟต์แวร์',
    organization: 'คณะเทคโนโลยีสารสนเทศ มหาวิทยาลัยศรีปทุม',
    period: '2023 – 2026',
    location: 'กรุงเทพฯ',
    bullets: [
      'นักศึกษาชั้นปีที่ 4 คาดว่าจะสำเร็จการศึกษาปี 2026',
      'เน้นวิชาด้านการออกแบบฐานข้อมูล การพัฒนาซอฟต์แวร์ และการทำเว็บแอป',
      'นำความรู้จากเรียนไปทำระบบจัดการสต็อกให้ธุรกิจครอบครัวจนมีคนใช้งานจริง',
      'ทดลองสาย AI เชิงประยุกต์ผ่านผู้ช่วยแนะแนวอาชีพด้วย RAG',
    ],
  },
]

export const workExperience = experience.filter(
  (item) => item.kind !== 'education',
)

export const educationExperience = experience.filter(
  (item) => item.kind === 'education',
)
