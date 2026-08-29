import type { SkillGroup } from '../types/content'

export const skillGroups: SkillGroup[] = [
  {
    id: 'programming',
    title: 'Programming',
    caption: '[ภาษาที่เขียนได้ เรียงจากถนัดที่สุด]',
    items: ['[C#]', '[JavaScript]', '[TypeScript]', '[SQL]', '[Python]'],
  },
  {
    id: 'framework',
    title: 'Framework & Library',
    caption: '[framework ที่ใช้ทำโปรเจกต์จริง]',
    items: [
      '[ASP.NET Core MVC]',
      '[Entity Framework Core]',
      '[React]',
      '[Tailwind CSS]',
    ],
  },
  {
    id: 'database',
    title: 'Database',
    caption: '[ฐานข้อมูลที่ออกแบบ/ใช้งานเองได้]',
    items: ['[SQL Server]', '[Database design]', '[T-SQL]'],
  },
  {
    id: 'tools',
    title: 'Tools & DevOps',
    caption: '[เครื่องมือที่ใช้ตอน dev และตอน deploy]',
    items: [
      '[Git / GitHub]',
      '[Visual Studio]',
      '[NSSM]',
      '[Tailscale]',
      '[IIS]',
    ],
  },
]
