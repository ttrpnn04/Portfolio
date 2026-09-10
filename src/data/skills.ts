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
    caption: '[ภาษาที่เขียนได้ เรียงจากถนัดที่สุด]',
    items: [
      { name: '[C#]', level: 4 },
      { name: '[SQL]', level: 4 },
      { name: '[JavaScript]', level: 3 },
      { name: '[TypeScript]', level: 3 },
      { name: '[Python]', level: 2 },
    ],
  },
  {
    id: 'framework',
    title: 'Framework & Library',
    caption: '[framework ที่ใช้ทำโปรเจกต์จริง]',
    items: [
      { name: '[ASP.NET Core MVC]', level: 4 },
      { name: '[Entity Framework Core]', level: 4 },
      { name: '[React]', level: 3 },
      { name: '[Tailwind CSS]', level: 3 },
    ],
  },
  {
    id: 'database',
    title: 'Database',
    caption: '[ฐานข้อมูลที่ออกแบบ/ใช้งานเองได้]',
    items: [
      { name: '[SQL Server]', level: 4 },
      { name: '[Database design]', level: 3 },
      { name: '[T-SQL]', level: 3 },
    ],
  },
  {
    id: 'tools',
    title: 'Tools & DevOps',
    caption: '[เครื่องมือที่ใช้ตอน dev และตอน deploy]',
    items: [
      { name: '[Git / GitHub]', level: 4 },
      { name: '[Visual Studio]', level: 4 },
      { name: '[NSSM / Windows Service]', level: 3 },
      { name: '[Tailscale]', level: 3 },
    ],
  },
]

export const personalSkills: SkillList = {
  id: 'personal',
  title: 'Personal Skills',
  items: [
    '[แก้ปัญหาด้วยตัวเองก่อนถาม]',
    '[คุยกับผู้ใช้ที่ไม่ใช่สายเทค]',
    '[ทำงานเป็นทีม]',
    '[บริหารเวลาส่งงานตามกำหนด]',
  ],
}

export const capabilities: SkillList = {
  id: 'capabilities',
  title: 'What can I do?',
  items: [
    '[ออกแบบ database schema ตั้งแต่ต้น]',
    '[เขียน REST API / MVC controller]',
    '[ทำหน้าเว็บด้วย React + TypeScript]',
    '[ทำระบบ login และจัดการสิทธิ์ผู้ใช้]',
    '[deploy ระบบขึ้น server จริง]',
  ],
}

export const workingStyle: SkillList = {
  id: 'working-style',
  title: 'Working Style',
  items: [
    '[เขียนโค้ดให้คนอื่นอ่านต่อได้]',
    '[แตกงานเป็นชิ้นเล็กแล้วส่งบ่อย]',
    '[จดบันทึกปัญหาที่เจอไว้เสมอ]',
  ],
}
