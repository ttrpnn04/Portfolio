import type { Project } from '../types/content'

export const projects: Project[] = [
  {
    id: 'bapsm',
    title: 'BAPSM (BAPStockManagement)',
    tagline: 'เว็บจัดการสต็อกสินค้าให้ร้านจักรยานและอุปกรณ์กีฬาของครอบครัว',
    period: '2025 – ปัจจุบัน',
    status: 'ใช้งานจริง',
    featured: true,
    problem:
      'ธุรกิจครอบครัวที่เป็นร้านจักรยานและอุปกรณ์กีฬายังจัดการสต็อกด้วยมือ ' +
      'ไม่มีระบบติดตามที่แม่นยำ ทำให้เสี่ยงของขาดตอนลูกค้าต้องการ ' +
      'หรือของเกินจนเงินจมในสินค้าที่ไม่ขยับ',
    solution:
      'พัฒนาเว็บแอปจัดการสต็อกสินค้าด้วย ASP.NET Core MVC และ SQL Server ' +
      'ครบวงจรตั้งแต่ออกแบบฐานข้อมูลไปจนถึง deploy ขึ้น server ของร้าน ' +
      'เลือก stack นี้เพราะต้องรันบนเครื่อง Windows ในออฟฟิศ และทีมงานคุ้นกับระบบในองค์กรอยู่แล้ว',
    contributions: [
      'ออกแบบ database schema ทั้งระบบ (6 ตารางหลัก) พร้อม ASP.NET Core Identity',
      'พัฒนาระบบ authentication และการจัดการสิทธิ์ผู้ใช้',
      'แก้ conflict ของ EF Core migration และตั้งสิทธิ์ SQL Server ให้ service account ใช้งานได้',
      'deploy บน office server ผ่าน Windows Service / NSSM และตั้ง Tailscale VPN ให้เข้าถึงจากนอกสถานที่ได้',
    ],
    tech: [
      'ASP.NET Core MVC',
      'SQL Server',
      'EF Core',
      'Identity',
      'NSSM',
      'Tailscale',
    ],
    outcome:
      'ระบบถูกนำไปใช้จริงในร้าน ลดการเช็คสต็อกด้วยมือและลดความเสี่ยงของขาดหรือของเกิน',
    links: [],
    imageSrc: null,
    imageAlt: 'ภาพหน้าจอหลักของระบบ BAPSM',
  },
]

export const featuredProject = projects.find((project) => project.featured)
export const otherProjects = projects.filter((project) => !project.featured)
