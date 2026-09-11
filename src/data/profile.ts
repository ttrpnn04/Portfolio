import type {
  About,
  ContactLink,
  Hero,
  Hobby,
  LanguageSkill,
  SocialLink,
} from '../types/content'

export const hero: Hero = {
  firstName: 'Teeraphan',
  lastName: 'Thienpromthong',
  status:
    'นักศึกษาปี 4 วิทยาการคอมพิวเตอร์และนวัตกรรมการพัฒนาซอฟต์แวร์ · ม.ศรีปทุม',
  headline: 'Junior Full-Stack Developer (C# + React)',
  intro:
    'นักศึกษาวิทยาการคอมพิวเตอร์ที่ชอบสร้างระบบให้คนใช้งานจริง ไม่ใช่แค่ส่งอาจารย์ ' +
    'มีประสบการณ์ทำเว็บจัดการสต็อกให้ธุรกิจครอบครัวด้วย ASP.NET Core และ SQL Server ' +
    'ตั้งแต่ออกแบบฐานข้อมูลไปจนถึง deploy ขึ้น server ของร้าน',
  location: 'กรุงเทพฯ · Onsite / Hybrid',
  phone: '092-479-9419',
  imageSrc: '/hero-desk.jpg',
  imageAlt: 'โต๊ะทำงานพร้อมจอคอมพิวเตอร์และเคสพีซีในห้องมืด',
  initials: 'PJ',
}

export const fullName = 'ธีรพันธ์ เทียนพรหมทอง'

export const about: About = {
  email: 'pigeonthienpromthong@gmail.com',
  address: 'กรุงเทพฯ · เขตบางเขน แขวงอนุสาวรีย์',
  paragraphs: [
    'สนใจการเขียนโปรแกรมเพราะชอบเห็นปัญหารอบตัวกลายเป็นระบบที่ใช้งานได้จริง ' +
      'ตอนนี้สนใจการออกแบบฐานข้อมูลและการนำระบบขึ้น production มากกว่าการทำหน้าเว็บอย่างเดียว ' +
      'เพราะเคยเจอเองว่าโค้ดที่รันบนเครื่องตัวเองกับระบบที่คนอื่นใช้ทุกวันเป็นคนละเรื่องกัน',
    'อยากเริ่มต้นในสาย Junior Full-Stack โดยเน้น C# กับ React เพราะทำทั้งสองฝั่งมาแล้วในโปรเจกต์จริง ' +
      'ในปีแรก ๆ อยากเก่งขึ้นเรื่องออกแบบ API ให้ชัด และการดูแลระบบหลังขึ้นเซิร์ฟเวอร์ ' +
      'ไม่ใช่แค่เขียนฟีเจอร์แล้วจบ',
  ],
  targetRoles: [
    'Junior Full-Stack Developer',
    'Backend Developer (.NET)',
    'Frontend Developer (React)',
    'Software Engineer Intern',
  ],
  strengths: [
    {
      title: 'ส่งงานถึง production ได้จริง',
      description:
        'ออกแบบ พัฒนา และ deploy ระบบจัดการสต็อกขึ้น server ของร้านจักรยานครอบครัว ' +
        'มีคนใช้งานจริง ไม่ได้หยุดแค่ในเครื่องตัวเอง',
    },
    {
      title: 'แก้ปัญหาเชิงเทคนิคด้วยตัวเองได้',
      description:
        'เคยแก้ conflict ของ EF Core migration, ตั้งสิทธิ์ SQL Server ให้ service account ' +
        'และทำ Tailscale VPN ให้เข้าระบบจากนอกสถานที่ได้',
    },
    {
      title: 'เข้าใจความต้องการของผู้ใช้ที่ไม่ใช่สายเทค',
      description:
        'คุยกับคนในร้านที่เป็นผู้ใช้จริง แล้วปรับระบบตามวิธีทำงานเดิม ' +
        'แทนการยัดฟีเจอร์ที่ตัวเองอยากทำ',
    },
  ],
  portraitSrc: '/portrait.jpg',
  portraitAlt: 'ธีรพันธ์ เทียนพรหมทอง สวมเสื้อเชิ้ตขาวและเนคไท',
}

export const socialLinks: SocialLink[] = [
  {
    id: 'github',
    icon: 'github',
    label: 'GitHub',
    href: 'https://github.com/ttrpnn04',
  },
  {
    id: 'linkedin',
    icon: 'linkedin',
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/%E0%B8%98%E0%B8%B5%E0%B8%A3%E0%B8%9E%E0%B8%B1%E0%B8%99%E0%B8%98%E0%B9%8C-%E0%B9%80%E0%B8%97%E0%B8%B5%E0%B8%A2%E0%B8%99%E0%B8%9E%E0%B8%A3%E0%B8%AB%E0%B8%A1%E0%B8%97%E0%B8%AD%E0%B8%87-18983b435/',
  },
  {
    id: 'facebook',
    icon: 'facebook',
    label: 'Facebook',
    href: 'https://www.facebook.com/ttrpnn',
  },
  {
    id: 'email',
    icon: 'email',
    label: 'อีเมล',
    href: 'mailto:pigeonthienpromthong@gmail.com',
  },
]

export const contactLinks: ContactLink[] = [
  {
    id: 'cv',
    icon: 'document',
    label: 'Résumé / CV',
    value: 'ไฟล์ PDF 1 หน้า',
    href: '/cv.pdf',
    primary: true,
  },
  {
    id: 'github',
    icon: 'github',
    label: 'GitHub',
    value: 'github.com/ttrpnn04',
    href: 'https://github.com/ttrpnn04',
  },
  {
    id: 'linkedin',
    icon: 'linkedin',
    label: 'LinkedIn',
    value: 'linkedin.com/in/ธีรพันธ์-เทียนพรหมทอง',
    href: 'https://www.linkedin.com/in/%E0%B8%98%E0%B8%B5%E0%B8%A3%E0%B8%9E%E0%B8%B1%E0%B8%99%E0%B8%98%E0%B9%8C-%E0%B9%80%E0%B8%97%E0%B8%B5%E0%B8%A2%E0%B8%99%E0%B8%9E%E0%B8%A3%E0%B8%AB%E0%B8%A1%E0%B8%97%E0%B8%AD%E0%B8%87-18983b435/',
  },
  {
    id: 'email',
    icon: 'email',
    label: 'Email',
    value: 'pigeonthienpromthong@gmail.com',
    href: 'mailto:pigeonthienpromthong@gmail.com',
  },
]

export const contactNote =
  'กำลังมองหาตำแหน่ง Junior Full-Stack Developer หรือฝึกงานด้าน .NET / React ' +
  'ตอนนี้เป็นนักศึกษาปี 4 ยินดีพูดคุยครับ'

export const languages: LanguageSkill[] = [
  { name: 'ไทย', level: 5, note: 'ภาษาแม่' },
  {
    name: 'English',
    level: 4,
    note: 'สื่อสารในชีวิตประจำวันได้',
  },
]

export const hobbies: Hobby[] = [
  {
    id: 'exercise',
    icon: 'dumbbell',
    label: 'ออกกำลังกาย',
    note: 'ออกเป็นประจำเพื่อเคลียร์หัว ก่อนกลับมาเขียนโค้ดต่อ',
  },
  {
    id: 'music',
    icon: 'music',
    label: 'ฟังเพลง',
    note: 'เปิดตอนนั่งทำงานและตอนเดินทาง',
  },
  {
    id: 'gaming',
    icon: 'gamepad',
    label: 'เล่นเกม',
    note: 'พักสมองหลังนั่งจอมาทั้งวัน',
  },
  {
    id: 'news',
    icon: 'book',
    label: 'อ่านข่าวสารประจำวัน',
    note: 'ตามข่าวเทคโนโลยีและเรื่องทั่วไปให้ทัน',
  },
]
