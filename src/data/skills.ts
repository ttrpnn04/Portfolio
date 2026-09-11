import type { SkillGroup, SkillLevel, SkillList } from '../types/content'

/**
 * ระดับทักษะเป็นคำ ไม่ใช่เปอร์เซ็นต์ เพราะ "React 87%" ตอบไม่ได้ว่าวัดจากอะไร
 * และมักโดนถามย้อนในห้องสัมภาษณ์ ส่วนคำพวกนี้อธิบายตัวเองได้
 */
export const skillLevelLabels: Record<SkillLevel, string> = {
  1: 'เพิ่งเริ่มศึกษา',
  2: 'ใช้งานพื้นฐานได้',
  3: 'ใช้ทำโปรเจกต์เรียนได้',
  4: 'ใช้ทำระบบจริงได้',
  5: 'ถนัดที่สุด',
}

export const skillGroups: SkillGroup[] = [
  {
    id: 'programming',
    title: 'Programming',
    caption: 'ภาษาที่เขียนได้ เรียงจากถนัดที่สุด',
    items: [
      { name: 'C#', level: 4 },
      { name: 'SQL', level: 4 },
      { name: 'JavaScript', level: 3 },
      { name: 'TypeScript', level: 3 },
      { name: 'Python', level: 3 },
    ],
  },
  {
    id: 'framework',
    title: 'Framework & Library',
    caption: 'framework ที่ใช้ทำโปรเจกต์จริง',
    items: [
      { name: 'ASP.NET Core MVC', level: 4 },
      { name: 'Entity Framework Core', level: 4 },
      { name: 'React', level: 3 },
      { name: 'Node.js / Express', level: 3 },
      { name: 'Tailwind CSS', level: 3 },
    ],
  },
  {
    id: 'database',
    title: 'Database',
    caption: 'ฐานข้อมูลที่ออกแบบและใช้งานเองได้',
    items: [
      { name: 'SQL Server', level: 4 },
      { name: 'MongoDB', level: 3 },
      { name: 'Database design', level: 3 },
      { name: 'T-SQL', level: 3 },
    ],
  },
  {
    id: 'tools',
    title: 'Tools & DevOps',
    caption: 'เครื่องมือที่ใช้ตอนพัฒนาและตอน deploy',
    items: [
      { name: 'Git / GitHub', level: 4 },
      { name: 'Visual Studio', level: 4 },
      { name: 'NSSM / Windows Service', level: 3 },
      { name: 'Tailscale', level: 3 },
      { name: 'RAG & LLM', level: 2 },
    ],
  },
]

export const personalSkills: SkillList = {
  id: 'personal',
  title: 'Personal Skills',
  items: [
    'แก้ปัญหาด้วยตัวเองก่อนถาม',
    'คุยกับผู้ใช้ที่ไม่ใช่สายเทค',
    'ทำงานเป็นทีม',
    'บริหารเวลาส่งงานตามกำหนด',
  ],
}

export const capabilities: SkillList = {
  id: 'capabilities',
  title: 'What can I do?',
  items: [
    'ออกแบบ database schema ตั้งแต่ต้น แล้วต่อกับ EF Core หรือ MongoDB ได้',
    'เขียน REST API และ MVC controller ฝั่ง ASP.NET Core',
    'ทำหน้าเว็บด้วย React จัด layout ด้วย Tailwind CSS',
    'ทำระบบ login และจัดการสิทธิ์ผู้ใช้ด้วย ASP.NET Identity',
    'deploy ขึ้น Windows Server ผ่าน NSSM และเปิดเข้าจากนอกสถานที่ด้วย Tailscale',
    'ทำแชทบอท RAG ที่ค้นคืนจาก vector database แล้วบังคับให้ LLM ตอบจากคลังข้อมูล',
    'คุยเก็บความต้องการจากผู้ใช้ที่ไม่ใช่สายเทค แล้วแปลงเป็นฟีเจอร์ที่ใช้จริงได้',
  ],
}

export const workingStyle: SkillList = {
  id: 'working-style',
  title: 'Working Style',
  items: [
    'เขียนโค้ดให้คนอื่นอ่านต่อได้ ไม่เก็บ logic ไว้ในหัวตัวเอง',
    'แตกงานเป็นชิ้นเล็ก แล้วส่งให้เห็นความคืบหน้าบ่อย ๆ',
    'จดบันทึกบั๊กและวิธีแก้ไว้ เพื่อไม่ให้ติดที่เดิมซ้ำ',
    'ลองไล่แก้เองก่อนถาม แต่ถ้าติดจริงจะถามให้ครบบริบท',
    'คุยกับผู้ใช้ก่อนลงมือ ไม่อยากทำฟีเจอร์ที่ไม่มีคนใช้',
    'ถือว่างานยังไม่จบจนกว่าระบบจะรันบนเครื่องคนอื่นได้',
  ],
}
