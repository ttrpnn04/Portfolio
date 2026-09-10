# Portfolio Web App

เว็บ portfolio สำหรับสมัครตำแหน่ง Junior Full-Stack Developer ธีมมืด **หน้าเดียวเลื่อนยาว**
มีแถบเมนูติดด้านบนตลอด กดแล้วเลื่อนไปยัง section ที่เลือกพร้อมไฮไลต์เมนูที่กำลังดูอยู่

ตอนนี้เป็นโครงสร้างและ layout ที่ใส่ placeholder text ไว้ทั้งหมด รอเติมเนื้อหาจริง

## Tech stack

| ส่วน       | เทคโนโลยี                                         |
| ---------- | ------------------------------------------------- |
| Build tool | Vite 8                                            |
| UI         | React 19 + TypeScript (strict)                    |
| Styling    | Tailwind CSS 4 (`@theme` ใน CSS ไม่มีไฟล์ config) |
| Lint       | oxlint                                            |
| Format     | Prettier + prettier-plugin-tailwindcss            |

ไม่มี router และไม่มี state management เพราะทั้งเว็บเป็นหน้าเดียว เมนูใช้ anchor link (`#about`)
ตรง ๆ จึงกด back ได้และแชร์ลิงก์เฉพาะ section ได้ฟรี

## เริ่มใช้งาน

```bash
npm install
npm run dev      # เปิด http://localhost:5173
npm run build    # type-check ด้วย tsc แล้ว build ไปที่ dist/
npm run preview  # ดูผลลัพธ์ที่ build แล้ว
npm run lint
npm run format
```

## จะแก้เนื้อหาจริงที่ไหน

เนื้อหาทั้งหมดแยกออกจาก component อยู่ใน `src/data/` **แก้แค่โฟลเดอร์นี้ก็เปลี่ยนเนื้อหาได้ทั้งเว็บ**
โดยไม่ต้องแตะไฟล์ layout และเปิด `strict` ไว้แล้ว TypeScript จึงเตือนจริงถ้าใส่ field ไม่ครบ
ผิดชนิด หรือลืมเช็ค null

| ไฟล์                     | เนื้อหาที่คุม                                                   |
| ------------------------ | --------------------------------------------------------------- |
| `src/data/profile.ts`    | ชื่อ, headline, intro, ที่อยู่, เบอร์, โซเชียล, ภาษา, งานอดิเรก |
| `src/data/skills.ts`     | ทักษะพร้อมระดับ 1–5, personal skills, สิ่งที่ทำได้              |
| `src/data/projects.ts`   | โปรเจกต์ทั้งหมด (`featured: true` คือใบใหญ่บนสุด)               |
| `src/data/experience.ts` | การศึกษา / ฝึกงาน / กิจกรรม                                     |
| `src/data/navigation.ts` | รายการเมนูและลำดับ section                                      |
| `src/types/content.ts`   | รูปแบบข้อมูลทั้งหมด                                             |

ข้อความ placeholder เขียนในรูป `[อธิบายว่าช่องนี้ควรใส่อะไร]` — ค้นหาอักขระ `[` ในโฟลเดอร์
`src/data/` เพื่อไล่เก็บให้ครบ รวมถึงใน `index.html` (title, description, og tags)

**ลิงก์ที่ยังไม่ได้เติมจะไม่ถูกเรนเดอร์เป็นลิงก์** `isUsableHref` ใน
[src/lib/links.ts](src/lib/links.ts) เช็คว่า href ยังขึ้นต้นด้วย `[` อยู่หรือไม่ ถ้าใช่จะแสดงเป็น
ข้อความจาง ๆ แทน เพราะถ้าปล่อย `href="[ลิงก์ repo]"` ลงไปตรง ๆ เบราว์เซอร์จะตีเป็น relative URL
กดแล้วเด้งไป 404 แบบไม่มีอะไรเตือน

### รูปภาพและไฟล์ CV

ทุก field รูปตั้งเป็น `null` ไว้ ระบบจะแสดงกรอบ placeholder พร้อมคำบรรยายให้
([src/components/ui/Photo.tsx](src/components/ui/Photo.tsx)) เมื่อมีรูปจริงแล้วให้วางไฟล์ใน
`public/` แล้วใส่ path เช่น `imageSrc: '/profile.jpg'` เช่นเดียวกับ `cv.pdf` ที่วางใน `public/`
แล้วแก้ `href` ของรายการ `cv` ใน `src/data/profile.ts` เป็น `/cv.pdf`

รูปที่ต้องเตรียมมีสองใบ: `hero.imageSrc` (ภาพพื้นหลังหน้าแรก แนวนอน) และ `about.portraitSrc`
(รูปตัวเอง แนวตั้ง พื้นหลังเข้ม) นอกนั้นเป็น screenshot ของแต่ละโปรเจกต์

## ผังหน้า

```
NavBar (fixed)   Home   About   Resume   Portfolio            เบอร์โทร
─────────────────────────────────────────────────────────────────────
#home        ภาพพื้นหลังเต็มจอ + ชื่อตัวใหญ่ + ปุ่ม Resume/Portfolio
             + แถวไอคอนโซเชียลด้านล่าง
#about       ข้อความแนะนำตัว/ตำแหน่งที่มองหา/จุดแข็ง | รูปพอร์ตเทรต
#resume      ทักษะ+ภาษา+personal | ไทม์ไลน์+การศึกษา | ทำอะไรได้+งานอดิเรก
#portfolio   การ์ดใบเด่นเต็มความกว้าง แล้วใบที่เหลือ 2 คอลัมน์
footer       ลิงก์ติดต่อ 4 ช่อง + ปุ่ม CV
```

ทุก section สูงอย่างน้อยเต็มจอ (`min-h-dvh`) แต่ยืดตามเนื้อหาได้ ต่ำกว่า `lg` ทุกคอลัมน์
ยุบเป็นคอลัมน์เดียว และเมนูกลายเป็นแถบเลื่อนแนวนอน

## รายละเอียดที่ตั้งใจทำไว้แบบนั้น

**Scroll spy** — [useActiveSection.ts](src/hooks/useActiveSection.ts) ใช้ IntersectionObserver
ที่ `rootMargin: -45% 0px -45% 0px` คือเหลือแถบตัดสินแค่ 10% กลางจอ เมนูจึงเปลี่ยนตอน section
มาถึงกลางจอ ไม่ใช่ตอนเพิ่งโผล่ขอบล่าง และ hook เก็บ `Set` ของ section ที่มองเห็นไว้เอง
แทนการอ่าน entry ตัวสุดท้าย เพราะตอนเลื่อนเร็ว callback รอบเดียวจะได้ทั้งใบที่เข้าและใบที่ออก

**`scroll-smooth` ต้องปิดเองเมื่อผู้ใช้ขอ** — คลาสนี้ไม่สนใจ `prefers-reduced-motion`
จึงมี media query ปิด `scroll-behavior` ไว้ใน [src/index.css](src/index.css)

**ระดับทักษะเป็นคำ ไม่ใช่เปอร์เซ็นต์** — `skillLevelLabels` ใน
[src/data/skills.ts](src/data/skills.ts) แปลงเลข 1–5 เป็นข้อความอย่าง "ใช้ทำระบบจริงได้"
เพราะ "React 87%" ตอบไม่ได้ว่าวัดจากอะไรและมักโดนถามย้อนในห้องสัมภาษณ์ ส่วนแถบสีเป็น
`aria-hidden` เพราะระดับถูกบอกด้วยข้อความข้างบนอยู่แล้ว ถ้าใส่ aria ซ้ำจะโดนอ่านสองรอบ

**การ์ดโปรเจกต์ไม่ใช่ปุ่มทั้งใบ** — ตาม ARIA แล้ว element ที่เป็น `role="button"` จะถูกตัด
โครงสร้างลูกทิ้งหมด (presentational children) หัวข้อกับรายการข้างในจะหายจาก accessibility tree
การ์ดจึงเป็น `<article>` ปกติ แล้วมีปุ่ม "ดูรายละเอียด" จริงอยู่ท้ายการ์ดเป็นตัวเปิด modal

**modal ใช้ `<dialog>` ของ browser** จึงได้ focus trap, Escape และ backdrop มาฟรี และทั้ง
section ใช้ dialog ใบเดียวร่วมกัน ไม่ได้สร้างเท่าจำนวนโปรเจกต์
([src/components/ui/Modal.tsx](src/components/ui/Modal.tsx))

## ธีมสว่าง/มืดและ design token

สีทั้งหมดประกาศเป็น **semantic token** ใน `@theme` ของ [src/index.css](src/index.css)
component จึงไม่เรียกสีดิบอย่าง `slate-700` หรือ `bg-white/[0.04]` เลย

| Token                           | ใช้กับ                                            |
| ------------------------------- | ------------------------------------------------- |
| `canvas`                        | พื้นหลังหน้า                                      |
| `surface` / `surface-hover`     | พื้นการ์ด                                         |
| `fill` / `fill-hover`           | พื้นยกระดับบาง ๆ บนการ์ด เช่น chip, ปุ่มรอง       |
| `line` / `line-strong`          | เส้นขอบปกติ และตอน hover                          |
| `fg` / `fg-muted` / `fg-subtle` | หัวข้อ / เนื้อความ / caption                      |
| `brand-300/400`                 | ตัวอักษรสี brand (400 คือตอน hover เข้มกว่า)      |
| `brand-500`                     | เส้นขอบ ไล่สี และเงาเรืองแสง ไม่ใช้กับตัวอักษร    |
| `brand-600/700`                 | พื้นปุ่มทึบที่มีตัวอักษรขาวทับ และสีตอน hover     |
| `accent-400/500`                | ม่วง ใช้เฉพาะ glow ไม่ใช้กับตัวอักษร              |
| `warn`                          | ป้าย "กิจกรรม" ใช้สีเดียวทั้งขอบ พื้น และตัวอักษร |
| `backdrop`                      | ฉากหลังตอนเปิด modal                              |

ทุกค่าไล่จาก hue 265 เดียวกัน ธีมจึงดูเป็นชุดเดียวกัน ไม่ใช่เทากลาง ๆ

### การสลับธีมทำงานยังไง

ธีมมืดคือค่าเริ่มต้นที่อยู่ใน `@theme` ส่วนธีมสว่างเขียนทับ **token ชุดเดียวกัน** ในบล็อก
`:root[data-theme='light']` ไม่มี component ไหนรู้เลยว่าตอนนี้อยู่ธีมไหน และไม่มีคลาส
`light:` / `dark:` กระจายอยู่ในไฟล์ไหนทั้งสิ้น เพิ่มธีมที่สามก็แค่เพิ่มอีกบล็อก

- บล็อกธีมสว่าง**อยู่นอก `@layer`** จึงชนะ `:root` ที่ Tailwind สร้างจาก `@theme` เสมอ
  (สไตล์ที่ไม่อยู่ใน layer ชนะสไตล์ที่อยู่ใน layer ไม่เกี่ยวกับ specificity)
- [useTheme.ts](src/hooks/useTheme.ts) คุม `data-theme` บน `<html>` จำค่าลง `localStorage`
  และอัปเดต `<meta name="theme-color">` ให้แถบเบราว์เซอร์บนมือถือเปลี่ยนตาม
- **มี inline script ใน [index.html](index.html)** ตั้ง `data-theme` ตั้งแต่ก่อนวาดเฟรมแรก
  ไม่งั้นคนที่เลือกธีมสว่างไว้จะเห็นจอแวบดำก่อนแล้วค่อยเปลี่ยนเป็นขาวหลัง React โหลดเสร็จ
- ถ้าผู้ใช้ยังไม่เคยกดปุ่มสลับ เว็บจะ **ตามการตั้งค่าของเครื่อง** ต่อไปเรื่อย ๆ แม้ผู้ใช้
  เปลี่ยนธีมของ OS ระหว่างเปิดหน้าอยู่ พอกดปุ่มเมื่อไหร่ถึงจะยึดค่าที่เลือกเป็นหลัก

บนพื้นมืดตัวอักษร brand ต้องเป็นเฉดสว่าง (`brand-300` = 0.82) แต่บนพื้นสว่างต้องกลับเป็นเฉดเข้ม
(0.45) ธีมสว่างจึง**สลับความหมายของเลขในสเกล** ไม่ได้แค่ปรับความสว่างขึ้นลงทั้งชุด ส่วน
`brand-600` ที่เป็นพื้นปุ่มใช้ค่าเดียวกันทั้งสองธีม เพราะต้องเข้มพอให้ตัวอักษรขาวผ่าน WCAG AA
อยู่แล้ว และด้วยเหตุผลเดียวกัน **ปุ่มทึบจะเข้มลงตอน hover ไม่ใช่สว่างขึ้น** (`brand-700`)
เพราะถ้าสว่างขึ้น contrast กับตัวอักษรขาวจะตกต่ำกว่าเกณฑ์

เงาและไล่สีของการ์ดไม่ใช่ "สี" เดี่ยว ๆ จึงเก็บเป็นตัวแปรธรรมดา (`--card-tint-top`,
`--card-shadow`, `--card-shadow-raised`, `--shadow-overlay`, `--page-glow-opacity`) แล้วให้
`@utility` อ้างถึง ธีมมืดสร้างความหนาของการ์ดจากขอบไฮไลต์ขาวด้านบน ส่วนธีมสว่างใช้เงาล้วน ๆ

utility ที่เขียนเองอยู่ใน [src/index.css](src/index.css) ทั้งหมด: `card-surface`, `card-raise`,
`grid-pattern`, `scrollbar-subtle`

## โครงสร้าง component

```
src/
  App.tsx                     พื้นหลังหน้า + NavBar + ทุก section + footer
  lib/
    links.ts                  เช็คว่า href ยังเป็น placeholder อยู่หรือไม่
  hooks/
    useActiveSection.ts       บอกว่ากำลังเลื่อนอยู่ที่ section ไหน
    useTheme.ts               คุม data-theme บน <html> + จำค่าใน localStorage
  components/
    layout/
      NavBar.tsx              เมนู fixed + ไฮไลต์ active + เบอร์โทร + ปุ่มธีม
      Section.tsx             เปลือก section: min-h-dvh, scroll-mt, isolate
      SectionHeader.tsx       eyebrow + หัวข้อ
      SocialRail.tsx          แถวไอคอนโซเชียล
      ThemeToggle.tsx         ปุ่มสลับธีมสว่าง/มืด
      ContactFooter.tsx
    sections/
      HomeSection.tsx  AboutSection.tsx  ResumeSection.tsx
      PortfolioSection.tsx  ProjectCard.tsx  ProjectDetails.tsx
    ui/
      Photo.tsx               รูปจริงหรือกรอบ placeholder
      Icon.tsx                ไอคอนทุกตัวในเว็บ วาดด้วย stroke บน viewBox 24
      SkillBar.tsx  TimelineEntry.tsx  ColumnTitle.tsx
      Modal.tsx  Button.tsx  Tag.tsx  Chip.tsx
```

## หลักการที่ layout ยึดไว้

- **`Section` ไม่กำหนดการจัดวางแนวตั้งเอง** แต่ละ section ส่ง `justify-*` มาเอง เพราะถ้าใส่
  ค่าเริ่มต้นไว้แล้วอยากทับ จะกลายเป็นคลาสชนกันในสตริงเดียว ซึ่งลำดับใน stylesheet เป็นตัวตัดสิน
  ไม่ใช่ลำดับใน class attribute
- **ชั้นพื้นหลัง `-z-10` ต้องอยู่ใต้ element ที่ `isolate`** ไม่งั้นจะตกไปอยู่หลังพื้นหลังของ `<body>`
  แล้วหายไปเลย ทั้ง `App` และ `Section` จึงมี `isolate`
- **Animation แตะเฉพาะ `opacity`, `translate` และ `scale`** ซึ่งวิ่งบน compositor ไม่ trigger
  layout จึงไม่กระตุก และใส่ `motion-reduce:transition-none` เคารพ `prefers-reduced-motion`
- **entrance animation ใช้ `animation-fill-mode: backwards` ไม่ใช่ `both`** เพราะ `both`
  จะคงค่าเฟรมสุดท้ายไว้ตลอดแล้วไปทับ `translate` ตอน hover (animation ชนะ transition ใน cascade)
- **ฟอนต์ Noto Sans Thai** โหลดคู่กับ Inter และเพิ่ม line-height ของหัวข้อ ไม่ให้สระบน
  ของภาษาไทยถูกตัด
- **ปุ่มและลิงก์ที่กดได้สูงอย่างน้อย 44px** (`min-h-11`) ตามขนาดพื้นที่แตะที่แนะนำบนมือถือ
