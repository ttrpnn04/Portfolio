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
    badge: '2022',
    title: 'วท.บ. วิทยาการคอมพิวเตอร์และนวัตกรรมการพัฒนาซอฟต์แวร์',
    organization: 'คณะเทคโนโลยีสารสนเทศ มหาวิทยาลัยศรีปทุม',
    period: '2022 – 2026',
    location: null,
    bullets: ['วิชาที่เกี่ยวข้อง เช่น Database Systems, Software Engineering'],
  },
]

export const workExperience = experience.filter(
  (item) => item.kind !== 'education',
)

export const educationExperience = experience.filter(
  (item) => item.kind === 'education',
)
