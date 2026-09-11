import type { Project } from '../types/content'

export const projects: Project[] = [
  {
    id: 'bapsm',
    title: 'BAPSM (BAPStockManagement)',
    tagline: 'เว็บจัดการสต็อกสินค้าให้ร้านจักรยานและอุปกรณ์กีฬาของครอบครัว',
    period: '2026 – ปัจจุบัน',
    status: 'ใช้งานจริง',
    featured: true,
    problem:
      'ธุรกิจครอบครัวที่เป็นร้านจักรยานและอุปกรณ์กีฬายังจัดการสต็อกด้วยมือผ่าน Excel ' +
      'ไม่มีระบบติดตามที่แม่นยำ ทำให้เสี่ยงของขาดตอนลูกค้าต้องการ ' +
      'หรือของเกินจนเงินจมในสินค้าที่ไม่ขยับ และใช้เวลาเช็คหรือชนสต็อกหลายชั่วโมงต่อวัน',
    solution:
      'พัฒนาเว็บแอปจัดการสต็อกสินค้าด้วย ASP.NET Core MVC และ SQL Server ' +
      'ครบวงจรตั้งแต่ออกแบบฐานข้อมูลไปจนถึง deploy ขึ้น server ของร้าน ' +
      'เลือก stack นี้เพราะต้องรันบนเครื่อง Windows ในออฟฟิศ และทีมงานคุ้นกับระบบในองค์กรอยู่แล้ว ' +
      'โค้ดไม่เปิดเป็นสาธารณะเพราะเป็นระบบที่ร้านใช้งานจริง',
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
      'ระบบถูกนำไปใช้จริงทุกวันมาประมาณ 1 เดือน จัดการสินค้า 10,207 ชิ้น จาก 147 รุ่น ' +
      'ลดเวลาเช็คและชนสต็อกจาก Excel ประมาณ 2–3 ชั่วโมงต่อวัน',
    links: [],
    imageSrc: '/projects/bapsm/login.png',
    imageAlt: 'หน้าเข้าสู่ระบบ BAP Stock Management',
    screenshots: [
      {
        src: '/projects/bapsm/login.png',
        alt: 'หน้าเข้าสู่ระบบ BAP Stock Management',
      },
      {
        src: '/projects/bapsm/stock.png',
        alt: 'หน้ารายการสต็อกสินค้า พร้อมจำนวนรุ่นและสินค้าคงเหลือ',
      },
      {
        src: '/projects/bapsm/history.png',
        alt: 'หน้าประวัติรายการสต็อก รับเข้าและจ่ายออก',
      },
      {
        src: '/projects/bapsm/report.png',
        alt: 'หน้ารายงานสรุปรายเดือน พร้อมยอดรับจ่ายและคงเหลือ',
      },
    ],
  },
  {
    id: 'mr-pingo',
    title: 'Mr.Pingo – ระบบแนะแนวอาชีพ IT ด้วย RAG',
    tagline:
      'เพนกวินผู้ช่วยสนทนาที่แนะนำสายงาน IT โดยบังคับให้ LLM ตอบจากคลังข้อมูลที่ค้นคืนได้เท่านั้น',
    period: 'ปี 3 เทอม 2',
    status: 'โปรเจกต์ทดลอง',
    featured: false,
    problem:
      'คนที่อยากเข้าสาย IT มักถาม chatbot ทั่วไปเรื่องอาชีพ ทักษะ หรือเงินเดือนแล้วได้คำตอบลอย ๆ ' +
      'โมเดลเดาได้เก่งแต่ไม่มีแหล่งอ้างอิงที่เราควบคุมได้ บางทีก็หลุดจากข้อมูลจริงหรือตอบเรื่องที่ไม่เกี่ยว ' +
      'เลยอยากมีผู้ช่วยที่คุยเป็นธรรมชาติ แต่ข้อเท็จจริงต้องมาจากคลังที่เตรียมไว้',
    solution:
      'ทำแชทบอทชื่อ Mr.Pingo ทั้งหน้าเว็บและ API ' +
      'ฝั่งหลังบ้านเป็น FastAPI ที่รับคำถามแล้วส่งเข้า RAG pipeline ของ LangChain ' +
      'ฝังข้อความด้วยโมเดล multilingual แล้วค้นคืนจาก FAISS ด้วย MMR ' +
      'ก่อนตอบจะ rewrite คำถามต่อเนื่องจากประวัติแชทให้เป็นคำถามเดี่ยว ' +
      'แล้วให้ Llama 3.3 บน Groq ตอบโดยใช้เฉพาะ context ที่ดึงมา ' +
      'ออกแบบบุคลิกเพนกวินขี้เล่นแต่ห้ามแต่งข้อเท็จจริง และตอบภาษาเดียวกับผู้ใช้',
    contributions: [
      'ออกแบบ RAG pipeline ทั้งชุด ตั้งแต่ embedding, vector store, retriever, ไปจนถึง prompt ที่บังคับให้อ้างอิง context',
      'ทำ query rewriting จากประวัติสนทนา เพื่อให้คำถามต่อเนื่องอย่าง "แล้วเงินเดือนล่ะ" ยังค้นคืนเอกสารถูกเรื่อง',
      'ตั้ง ConversationBufferMemory และบุคลิก Pingo ให้คุยแบบเพื่อนได้ โดยไม่หลุดกฎห้ามเดาข้อมูลนอกคลัง',
      'เขียน FastAPI endpoint `/ask` พร้อมหน้าแชท HTML/CSS/JS มี suggestion chip, typing indicator และการจัดรูปแบบคำตอบ',
    ],
    tech: [
      'Python',
      'FastAPI',
      'LangChain',
      'Groq',
      'FAISS',
      'HuggingFace Embeddings',
    ],
    outcome:
      'ได้ผู้ช่วยที่ตอบเรื่องสายงาน IT, ทักษะ และเส้นทางเรียนจากคลังข้อมูล ไม่ใช่คำตอบลอย ๆ ' +
      'และทดลองจนเห็นชัดว่าบุคลิกสนุกกับความแม่นยำต้องแยกกันใน prompt ไม่งั้นโมเดลจะแต่งรายละเอียดเพิ่ม',
    links: [
      {
        label: 'GitHub',
        href: 'https://github.com/ttrpnn04/RAG',
      },
    ],
    imageSrc: null,
    imageAlt: 'ปกกราฟิกโปรเจกต์ Mr.Pingo ระบบแนะแนวอาชีพ IT',
    coverTitle: 'Mr.Pingo',
    coverKicker: 'RAG Chatbot',
    coverIcon: 'message',
    screenshots: [],
  },
  {
    id: 'smart-campus',
    title: 'Smart Campus Ordering System',
    tagline:
      'เว็บสั่งอาหารและสินค้าจากร้านในมหาวิทยาลัย แยกมุมมองนักศึกษา ร้านค้า และแอดมิน',
    period: 'ปี 3 เทอม 1',
    status: 'โปรเจกต์เรียน',
    featured: false,
    problem:
      'ช่วงพักเที่ยงในมหาวิทยาลัยคิวร้านอาหารยาว นักศึกษาไม่รู้ว่าร้านไหนของหมดหรือรออีกนานแค่ไหน ' +
      'ร้านรับออเดอร์ผ่านปากเปล่าหรือแชททำให้รายการหลุด และไม่มีที่รวมเมนูจากหลายร้านไว้ให้เลือกในที่เดียว',
    solution:
      'พัฒนาเว็บแอปสั่งซื้อในแคมปัสแบบ full-stack ' +
      'ฝั่งหน้าใช้ React สำหรับเลือกโรงอาหาร ดูเมนู ใส่ตะกร้า และติดตามสถานะออเดอร์ ' +
      'ฝั่งหลังเป็น REST API ด้วย Node.js กับ Express เก็บเมนู ร้าน และคำสั่งซื้อใน MongoDB ' +
      'แยกสิทธิ์สามบทบาทคือนักศึกษา ร้านค้า และแอดมิน เพื่อให้ร้านจัดการเมนูกับออเดอร์เข้าได้โดยไม่วุ่นกับหน้าของลูกค้า',
    contributions: [
      'ออกแบบ user flow ทั้งระบบ ตั้งแต่เลือกร้าน หยิบใส่ตะกร้า ยืนยันออเดอร์ ไปจนถึงรับของเมื่อสถานะเป็นพร้อมรับ',
      'ทำหน้า React สำหรับนักศึกษาและร้านค้า พร้อมสถานะออเดอร์แบบรอรับ / กำลังทำ / พร้อมรับ / เสร็จแล้ว',
      'เขียน REST API จัดการร้าน เมนู สต็อกรายการ และประวัติคำสั่งซื้อ',
      'ออกแบบ schema บน MongoDB ให้เมนูผูกกับร้าน และออเดอร์เก็บรายการพร้อมราคา ณ เวลาสั่ง เพื่อไม่ให้ยอดเพี้ยนตอนร้านแก้เมนูทีหลัง',
    ],
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'REST API'],
    outcome:
      'ได้โปรเจกต์เรียนที่ครอบคลุมทั้ง frontend กับ backend ในบริบทที่ใช้อธิบายในห้องสัมภาษณ์ได้ ' +
      'ตั้งแต่แยกบทบาทผู้ใช้ ไปจนถึงการเก็บออเดอร์ให้ตามสถานะได้ ไม่ใช่แค่หน้าเมนูนิ่ง ๆ',
    links: [],
    imageSrc: null,
    imageAlt: 'ปกกราฟิกโปรเจกต์ Smart Campus Ordering System',
    coverTitle: 'Smart Campus',
    coverKicker: 'Ordering App',
    coverIcon: 'utensils',
    screenshots: [],
  },
]

export const featuredProject = projects.find((project) => project.featured)
export const otherProjects = projects.filter((project) => !project.featured)
