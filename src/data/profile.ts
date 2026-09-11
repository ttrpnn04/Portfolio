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
  headline: 'Full-Stack Developer · AI Engineer',
  intro:
    'นักศึกษาชั้นปีที่ 4 สาขาวิทยาการคอมพิวเตอร์และนวัตกรรม มหาวิทยาลัยศรีปทุม ' +
    'มีประสบการณ์ตรงในการพัฒนาและดูแลระบบจัดการสต็อกสินค้าที่ใช้งานจริงในภาคธุรกิจ ' +
    'ถนัดทั้งฝั่ง Backend และ Frontend พร้อมสนใจศึกษาด้าน AI เชิงประยุกต์',
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
    'นักศึกษาชั้นปีที่ 4 สาขาวิทยาการคอมพิวเตอร์และนวัตกรรมการพัฒนาซอฟต์แวร์ มหาวิทยาลัยศรีปทุม ' +
      'มีประสบการณ์ตรงในการพัฒนาและดูแลระบบจัดการสต็อกสินค้าที่ใช้งานจริงในภาคธุรกิจ ' +
      'ถนัดทั้งฝั่ง Backend และ Frontend',
    'สนใจศึกษาด้าน AI เชิงประยุกต์ด้วย อย่างผู้ช่วย RAG ' +
      'กำลังมองหาโอกาสร่วมงานในตำแหน่ง Full-Stack Developer หรือ AI Engineer ' +
      'เพื่อพัฒนาทักษะควบคู่ไปกับประสบการณ์ทำงานจริง',
  ],
  targetRoles: [
    'Full-Stack Developer',
    'AI Engineer',
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
  'กำลังมองหาตำแหน่ง Full-Stack Developer หรือ AI Engineer ' +
  'ตอนนี้เป็นนักศึกษาปี 4 ยินดีพูดคุยครับ'

export const languages: LanguageSkill[] = [
  { name: 'ไทย', level: 5, note: 'เจ้าของภาษา' },
  {
    name: 'English',
    level: 4,
    note: 'ระดับทำงาน',
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
