# Portfolio Web App

เว็บ portfolio สำหรับสมัครตำแหน่ง Junior Full-Stack Developer จัดวางแบบ **bento grid
หนึ่งหน้าจอ** (ไม่ต้องเลื่อนบน desktop) ธีมมืด การ์ดแต่ละใบแสดงเนื้อหาย่อ และเผยรายละเอียดเต็ม
เมื่อชี้เมาส์ (desktop) หรือแตะ (มือถือ)

ตอนนี้เป็นโครงสร้างและ layout ที่ใส่ placeholder text ไว้ทั้งหมด รอเติมเนื้อหาจริง

## Tech stack

| ส่วน       | เทคโนโลยี                                         |
| ---------- | ------------------------------------------------- |
| Build tool | Vite 8                                            |
| UI         | React 19 + TypeScript                             |
| Styling    | Tailwind CSS 4 (`@theme` ใน CSS ไม่มีไฟล์ config) |
| Lint       | oxlint                                            |
| Format     | Prettier + prettier-plugin-tailwindcss            |

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
โดยไม่ต้องแตะไฟล์ layout และ TypeScript จะเตือนถ้าใส่ field ไม่ครบหรือผิดชนิด

| ไฟล์                     | เนื้อหาที่คุม                                              |
| ------------------------ | ---------------------------------------------------------- |
| `src/data/profile.ts`    | Hero, About (จุดแข็ง/ตำแหน่งที่มองหา), ลิงก์ติดต่อ         |
| `src/data/skills.ts`     | ทักษะ 4 กลุ่ม (Programming / Framework / Database / Tools) |
| `src/data/projects.ts`   | โปรเจกต์ทั้งหมด (`featured: true` คือการ์ดใหญ่)            |
| `src/data/experience.ts` | การศึกษา / ฝึกงาน / กิจกรรม                                |
| `src/types/content.ts`   | รูปแบบข้อมูลของทุกการ์ด                                    |

ข้อความ placeholder เขียนในรูป `[อธิบายว่าช่องนี้ควรใส่อะไร]` — ค้นหาอักขระ `[` ในโฟลเดอร์
`src/data/` เพื่อไล่เก็บให้ครบ

**ข้อควรรู้เรื่องความยาวเนื้อหา:** หน้าย่อบนการ์ดใช้ `line-clamp` ตัดข้อความ ส่วนเนื้อหาเต็ม
แสดงใน popup ดังนั้นเขียนยาวได้ตามต้องการ แต่ **ประโยคแรกของแต่ละ field ควรได้ใจความ**
เพราะเป็นส่วนที่ถูกเห็นบนการ์ด

### รูปภาพและไฟล์ CV

ทุก field `imageSrc` ตั้งเป็น `null` ไว้ ระบบจะแสดงกรอบ placeholder ให้ เมื่อมีรูปจริงแล้ว
ให้วางไฟล์ใน `public/` แล้วใส่ path เช่น `imageSrc: '/profile.jpg'` เช่นเดียวกับ `cv.pdf`
ที่วางใน `public/` แล้วแก้ `href` ของรายการ `cv` ใน `src/data/profile.ts` เป็น `/cv.pdf`

## ผัง bento บน desktop

4 คอลัมน์ x 4 แถว เต็มความสูงจอ (`lg:h-dvh`) โดยอาศัย auto-placement ของ CSS Grid
เรียงตามลำดับลูกใน [src/components/bento/BentoGrid.tsx](src/components/bento/BentoGrid.tsx)
จึงไม่ต้องระบุ `col-start` / `row-start` เลย

```
┌─────────────────────┬──────────┬──────────┐
│   HERO  (2x2)       │  ABOUT   │  SKILLS  │
│                     │  (1x2)   │  (1x2)   │
├─────────────────────┼──────────┼──────────┤
│  PROJECT (featured) │ PROJ 2   │ PROJ 3   │
│        (2x2)        ├──────────┼──────────┤
│                     │ EXPER.   │ CONTACT  │
└─────────────────────┴──────────┴──────────┘
```

- Desktop (`lg` ขึ้นไป): 4 คอลัมน์ ล็อกความสูงจอ ไม่มี scroll
- Tablet (`md`): 2 คอลัมน์ ความสูงตามเนื้อหา scroll ได้
- Mobile: 1 คอลัมน์ scroll ได้

จะเพิ่มโปรเจกต์ใบที่ 4 ต้องปรับผัง (เช่นเปลี่ยนเป็น 5 แถว) ไม่งั้นการ์ดจะไหลเกินจอ

## Interaction

| อุปกรณ์           | การเปิดรายละเอียด                        | การปิด                          |
| ----------------- | ---------------------------------------- | ------------------------------- |
| Desktop (มีเมาส์) | ชี้ที่การ์ด ขึ้น popover ข้างการ์ด       | เลื่อนเมาส์ออก หรือกด Escape    |
| Mobile / จอสัมผัส | แตะที่การ์ด เปิด modal                   | ปุ่ม X, แตะพื้นหลัง หรือ Escape |
| คีย์บอร์ด         | Tab ไปที่การ์ด (popover) / Enter (modal) | Escape                          |

แยกสองโหมดด้วย `matchMedia('(hover: hover) and (pointer: fine)')` ใน
[src/hooks/useHoverCapable.ts](src/hooks/useHoverCapable.ts) ไม่ใช้ความกว้างจอตัดสิน
เพราะจอสัมผัสขนาดใหญ่ก็ต้องได้ modal

รายละเอียดที่ทำให้ hover popup ใช้งานได้จริง:

- หน่วงเปิด 70ms กัน popup แวบตอนลากเมาส์ผ่าน และหน่วงปิด 130ms
- **ยกเลิกการปิดเมื่อเมาส์เลื่อนเข้าไปใน popover เอง** ทำให้กดลิงก์ GitHub ข้างในได้
- popover วางด้วย `position: fixed` ผ่าน portal ไป `document.body` เลือกฝั่งที่มีที่ว่าง
  แล้ว clamp ให้เว้นขอบจอ 16px เสมอ ([usePopoverPosition.ts](src/hooks/usePopoverPosition.ts))
- วัดขนาด popover จาก `offsetWidth/offsetHeight` ไม่ใช่ `getBoundingClientRect`
  เพราะตอนวัดมันยังถูก `scale` ของ transition อยู่ ค่าจาก rect จะเล็กกว่าจริง
- modal ใช้ `<dialog>` ของ browser จึงได้ focus trap, Escape และ backdrop มาฟรี

## ธีมมืดและ design token

สีทั้งหมดประกาศเป็น **semantic token** ใน `@theme` ของ [src/index.css](src/index.css)
component จึงไม่เรียกสีดิบอย่าง `slate-700` เลย เวลาปรับธีมจึงแก้ที่เดียว

| Token                           | ใช้กับ                               |
| ------------------------------- | ------------------------------------ |
| `canvas`                        | พื้นหลังหน้า มืดที่สุด               |
| `surface` / `surface-hover`     | พื้นการ์ด                            |
| `line` / `line-strong`          | เส้นขอบปกติ และตอน hover             |
| `fg` / `fg-muted` / `fg-subtle` | หัวข้อ / เนื้อความ / caption         |
| `brand-300…700`                 | สีหลัก (300–400 ใช้กับตัวอักษร)      |
| `accent-400/500`                | ม่วง ใช้เฉพาะ glow ไม่ใช้กับตัวอักษร |

ทุกค่าไล่จาก hue 265 เดียวกัน ธีมจึงดูเป็นชุดเดียวกัน ไม่ใช่เทากลาง ๆ และบนพื้นมืด
ต้องใช้เฉด **สว่าง** เป็นตัวอักษร (`brand-300`) ไม่ใช่ `brand-600` ที่ใช้เป็นพื้นปุ่ม

ความลึกของธีมมาจากการซ้อนชั้น ไม่ใช่แค่สลับขาวเป็นดำ

- พื้นหลังหน้ามี radial glow จาง ๆ กับลายตารางบาง ๆ (`grid-pattern` + mask)
- การ์ดสว่างกว่าพื้นด้วยไล่สีขาวโปร่ง 5.5% → 1.5% พร้อมเส้น highlight ในขอบบน
  (`inset` shadow) ซึ่งเป็นรายละเอียดที่ทำให้การ์ดดูมีความหนา
- hover ทำงานสามชั้นพร้อมกัน: ยกการ์ด, ขอบเรืองแสงสี brand, และ **spotlight ตามเมาส์**
  ที่อัปเดตตำแหน่งผ่าน CSS variable `--spotlight-x/y` ตรง ๆ ใน `onPointerMove`
  ไม่ผ่าน React state จึงไม่ rerender ทุกเฟรม
- การ์ดโผล่ไล่กันทีละ 60ms ด้วย keyframe `card-in`

utility ที่เขียนเองอยู่ใน [src/index.css](src/index.css) ทั้งหมด: `card-surface`,
`card-raise`, `card-spotlight`, `grid-pattern`, `scrollbar-subtle`

## โครงสร้าง component

```
src/
  App.tsx
  hooks/
    useHoverCapable.ts        แยกโหมด hover กับ touch
    usePopoverPosition.ts     คำนวณตำแหน่ง popover ให้อยู่ในจอ
  components/
    bento/
      BentoGrid.tsx           ผัง grid + ประกอบการ์ดทั้ง 8 ใบ
      BentoCard.tsx           เปลือกการ์ด + ตรรกะ hover/tap/keyboard
      CardPopover.tsx         popup ตอน hover (portal + fixed)
      CardModal.tsx           modal ตอนแตะ (native dialog)
    faces/                    หน้าย่อบนการ์ด
      HeroFace  AboutFace  SkillsFace  ProjectFace
      ExperienceFace  ContactFace  FaceHeading
    details/                  เนื้อหาเต็ม ใช้ร่วมกันทั้ง popover และ modal
      HeroDetail  AboutDetail  SkillsDetail
      ProjectDetailPanel  ExperienceDetail
      DetailShell  ProjectDetail  ProjectLinks  TimelineItem
    ui/
      Button.tsx  Tag.tsx  Chip.tsx
```

## หลักการที่ layout ยึดไว้

- **Desktop ต้องพอดีจอเดียว** ทุกการ์ดใช้ `min-h-0 overflow-hidden` และหน้าย่อใช้
  `line-clamp` เพื่อไม่ให้เนื้อหาดันความสูงเกินแถวของ grid
- **คลาสที่ทำให้ยุบตัวได้ (`flex-1`, `min-h-0`, `mt-auto`) ใส่เฉพาะ `lg:`** เพราะต่ำกว่านั้น
  การ์ดสูงตามเนื้อหา ถ้าใส่ทุกขนาดจอ thumbnail จะยุบเป็นเส้นบาง
- **Animation แตะเฉพาะ `opacity`, `translate` และ `scale`** ซึ่งวิ่งบน compositor ไม่ trigger
  layout จึงไม่กระตุก และใส่ `motion-reduce:transition-none` เคารพ `prefers-reduced-motion`
- **entrance animation ใช้ `animation-fill-mode: backwards` ไม่ใช่ `both`** เพราะ `both`
  จะคงค่าเฟรมสุดท้ายไว้ตลอดแล้วไปทับ `translate` ตอน hover (animation ชนะ transition ใน cascade)
- **`prefers-reduced-motion` ต้องปิด animation ทั้งก้อน** ไม่ใช่แค่ทำให้เร็วขึ้น ไม่งั้น
  การ์ดที่ยังไม่ถึงคิว fade in จะค้างที่ opacity 0 คือเนื้อหาหายไปเลย
- **ฟอนต์ Noto Sans Thai** โหลดคู่กับ Inter และเพิ่ม line-height ของหัวข้อ ไม่ให้สระบน
  ของภาษาไทยถูกตัด
- ตรวจแล้วที่ 375px, 768px และ 1440x900: desktop ไม่มี vertical scroll, ไม่มี horizontal
  scroll ทุกขนาด, ไม่มีการ์ดที่เนื้อหาล้นกรอบ
- **contrast ratio** วัดจากพิกเซลจริงที่เรนเดอร์ออกมา ไม่ใช่คำนวณจาก CSS เพราะพื้นการ์ด
  เป็นสีขาวโปร่งแสงซ้อนบนพื้นหลังที่มี glow ผลที่ได้: ตัวอักษรทุกระดับผ่าน WCAG AA
  (ต่ำสุดคือ caption 10px ที่ 5.4:1 เกณฑ์คือ 4.5:1)
