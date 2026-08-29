import type { About, ContactLink, Hero } from '../types/content'

export const hero: Hero = {
  name: '[ชื่อ นามสกุล]',
  status: '[สถานะปัจจุบัน — เช่น นักศึกษาปี 4 วิทยาการคอมพิวเตอร์ฯ ม.ศรีปทุม]',
  headline: '[Career Headline — เช่น Junior Full-Stack Developer (C# + React)]',
  intro:
    '[Short intro 2-3 บรรทัด: คุณเป็นใคร ถนัดอะไร และมีผลงานอะไรที่พิสูจน์ได้ ' +
    'เขียนให้ recruiter อ่านจบใน 10 วินาที และเน้นสิ่งที่ต่างจากนักศึกษาคนอื่น ' +
    'เช่น ระบบที่ทำแล้วมีคนใช้งานจริง ไม่ใช่แค่โปรเจกต์ส่งอาจารย์]',
  location: '[จังหวัด / รูปแบบงานที่รับ — เช่น กรุงเทพฯ · Onsite หรือ Hybrid]',
  imageSrc: null,
  imageAlt: '[คำอธิบายรูปโปรไฟล์ เช่น รูปโปรไฟล์ของ (ชื่อ)]',
  initials: 'AB',
}

export const about: About = {
  paragraphs: [
    '[ย่อหน้าที่ 1 — สนใจอะไร: อธิบายว่าอะไรทำให้คุณสนใจการเขียนโปรแกรม ' +
      'และตอนนี้กำลังสนใจเรื่องอะไรเป็นพิเศษ เช่น การออกแบบ database ' +
      'หรือการนำระบบขึ้น production ให้คนใช้งานจริง ยาวประมาณ 3-4 บรรทัด]',
    '[ย่อหน้าที่ 2 — อยากทำงานด้านไหน: บอกตำแหน่งและสายงานที่ตั้งใจไป ' +
      'พร้อมเหตุผลสั้น ๆ ว่าทำไม และคุณอยากพัฒนาตัวเองต่อในทิศทางใดในช่วง 1-2 ปีแรก]',
  ],
  targetRoles: [
    '[Junior Full-Stack Developer]',
    '[Backend Developer (.NET)]',
    '[Frontend Developer (React)]',
    '[Software Engineer Intern]',
  ],
  strengths: [
    {
      title: '[จุดแข็งข้อที่ 1 — เช่น ส่งงานถึง production ได้จริง]',
      description:
        '[ขยายความ 1-2 บรรทัด พร้อมหลักฐานที่จับต้องได้ เช่น deploy ระบบขึ้น server ' +
        'ขององค์กรและมีผู้ใช้จริงทุกวัน]',
    },
    {
      title: '[จุดแข็งข้อที่ 2 — เช่น แก้ปัญหาเชิงเทคนิคด้วยตัวเองได้]',
      description:
        '[ยกตัวอย่างปัญหาที่แก้ได้ เช่น migration conflict, สิทธิ์การเข้าถึงฐานข้อมูล ' +
        'หรือการตั้งค่าเครือข่ายให้เข้าระบบจากนอกสถานที่]',
    },
    {
      title: '[จุดแข็งข้อที่ 3 — เช่น เข้าใจความต้องการของผู้ใช้]',
      description:
        '[อธิบายว่าคุณคุยกับผู้ใช้จริงและปรับระบบตาม feedback อย่างไร]',
    },
  ],
}

export const contactLinks: ContactLink[] = [
  {
    id: 'cv',
    icon: 'document',
    label: 'Résumé / CV',
    value: '[ไฟล์ PDF 1 หน้า]',
    href: '[วางลิงก์ไฟล์ CV — เช่น /cv.pdf หรือลิงก์ Google Drive]',
    primary: true,
  },
  {
    id: 'github',
    icon: 'github',
    label: 'GitHub',
    value: '[github.com/username]',
    href: '[https://github.com/username]',
  },
  {
    id: 'linkedin',
    icon: 'linkedin',
    label: 'LinkedIn',
    value: '[linkedin.com/in/username]',
    href: '[https://linkedin.com/in/username]',
  },
  {
    id: 'email',
    icon: 'email',
    label: 'Email',
    value: '[you@example.com]',
    href: 'mailto:[you@example.com]',
  },
]

export const contactNote =
  '[ข้อความปิดท้าย 1-2 บรรทัด เช่น กำลังหางาน Junior Full-Stack Developer ' +
  'หรือตำแหน่งฝึกงาน เริ่มงานได้ตั้งแต่ (เดือน/ปี) — ยินดีพูดคุยครับ/ค่ะ]'
