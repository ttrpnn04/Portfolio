import type { ExperienceItem, ExperienceKind } from '../types/content'

export const experienceKindLabels: Record<ExperienceKind, string> = {
  education: 'การศึกษา',
  internship: 'ฝึกงาน',
  activity: 'กิจกรรม',
}

/** เรียงจากใหม่ไปเก่า */
export const experience: ExperienceItem[] = [
  {
    id: 'internship-1',
    kind: 'internship',
    badge: '[2025]',
    title: '[ตำแหน่งที่ฝึกงาน — เช่น Software Developer Intern]',
    organization: '[ชื่อบริษัท]',
    period: '[เดือน ปี – เดือน ปี]',
    location: '[จังหวัด / รูปแบบการทำงาน]',
    bullets: [
      '[งานที่รับผิดชอบข้อที่ 1 — ขึ้นต้นด้วยคำกริยา และบอกผลลัพธ์ถ้ามี]',
      '[งานที่รับผิดชอบข้อที่ 2 — ระบุ tech stack ที่ใช้จริงในงานนั้น]',
      '[สิ่งที่ได้เรียนรู้และนำมาใช้ต่อในโปรเจกต์ของตัวเอง]',
    ],
  },
  {
    id: 'activity-1',
    kind: 'activity',
    badge: '[2024]',
    title: '[ชื่อกิจกรรม / การแข่งขัน / ค่ายอบรม]',
    organization: '[หน่วยงานที่จัด]',
    period: '[เดือน ปี]',
    location: null,
    bullets: [
      '[บทบาทของคุณในกิจกรรม และผลลัพธ์ เช่น รางวัลหรือจำนวนผู้เข้าร่วม]',
    ],
  },
  {
    id: 'education-1',
    kind: 'education',
    badge: '[2022]',
    title:
      '[วุฒิและสาขา — เช่น วท.บ. วิทยาการคอมพิวเตอร์และนวัตกรรมการพัฒนาซอฟต์แวร์]',
    organization: '[ชื่อมหาวิทยาลัย / คณะ]',
    period: '[ปีที่เข้า – ปีที่คาดว่าจะจบ]',
    location: null,
    bullets: [
      '[GPAX ถ้าน่าสนใจ — ใส่เมื่อ 3.00 ขึ้นไป ไม่งั้นข้ามได้]',
      '[วิชาที่เกี่ยวข้องกับตำแหน่งที่สมัคร เช่น Database Systems, Software Engineering]',
      '[ทุน/รางวัล/ผลงานวิชาการ ถ้ามี]',
    ],
  },
]

export const workExperience = experience.filter(
  (item) => item.kind !== 'education',
)

export const educationExperience = experience.filter(
  (item) => item.kind === 'education',
)
