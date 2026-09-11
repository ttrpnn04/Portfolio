import type { ExperienceItem, ExperienceKind, Project } from '../types/content'
import { projects } from './projects'

export const experienceKindLabels: Record<ExperienceKind, string> = {
  education: 'การศึกษา',
  internship: 'ฝึกงาน',
  activity: 'กิจกรรม',
  project: 'โปรเจกต์',
}

const projectBadges: Record<string, string> = {
  bapsm: '2026',
  'mr-pingo': '3/2',
  'smart-campus': '3/1',
}

function projectBadge(project: Project): string {
  return projectBadges[project.id] ?? 'Proj'
}

/** ไทม์ไลน์ในคอลัมน์กลาง ดึงจากโปรเจกต์ที่มีอยู่ ไม่คัดลอกข้อความซ้ำ */
export const projectExperience: ExperienceItem[] = projects.map((project) => ({
  id: `project-${project.id}`,
  kind: 'project',
  badge: projectBadge(project),
  title: project.coverTitle ?? project.title,
  organization: project.status ?? 'โปรเจกต์',
  period: project.period,
  location: null,
  bullets: project.contributions.slice(0, 2),
}))

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
  (item) => item.kind === 'internship' || item.kind === 'activity',
)

export const educationExperience = experience.filter(
  (item) => item.kind === 'education',
)
