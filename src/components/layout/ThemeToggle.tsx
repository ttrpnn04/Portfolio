import useTheme from '../../hooks/useTheme'
import Icon from '../ui/Icon'

/**
 * สวิตช์สองสถานะ ไม่ใช่ปุ่มไอคอนเดี่ยว
 *
 * ซ้าย = สว่าง (ดวงอาทิตย์) ขวา = มืด (พระจันทร์)
 * ลูกบิดเลื่อนไปทับฝั่งที่เลือกอยู่ ส่วนฝั่งตรงข้ามยังเห็นไอคอนจาง ๆ
 * จึงอ่านสถานะปัจจุบันได้โดยไม่ต้องเดาว่าไอคอนหมายถึงอะไร
 *
 * role="switch" + aria-checked บอก AT ว่านี่คือสวิตช์ ไม่ใช่ปุ่มกดครั้งเดียว
 * checked = ธีมมืดเปิดอยู่
 *
 * ตัวสวิตช์สูง 28px แต่ปุ่มหุ้มสูง 44px ตามขนาดพื้นที่แตะที่แนะนำบนมือถือ
 */
export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <button
      type="button"
      role="switch"
      aria-checked={isDark}
      aria-label="ธีมมืด"
      title={isDark ? 'เปลี่ยนเป็นธีมสว่าง' : 'เปลี่ยนเป็นธีมมืด'}
      onClick={(event) => toggleTheme(event)}
      className="group inline-flex min-h-11 min-w-14 shrink-0 items-center justify-center rounded-full"
    >
      <span className="border-line/70 bg-fill group-hover:border-line-strong group-hover:bg-fill-hover relative inline-flex h-7 w-14 items-center rounded-full border transition-colors duration-200 motion-reduce:transition-none">
        <span
          aria-hidden="true"
          className={`pointer-events-none absolute left-1.5 transition-opacity duration-200 motion-reduce:transition-none ${
            isDark ? 'text-fg-subtle opacity-70' : 'opacity-0'
          }`}
        >
          <Icon name="sun" className="size-3.5" />
        </span>
        <span
          aria-hidden="true"
          className={`pointer-events-none absolute right-1.5 transition-opacity duration-200 motion-reduce:transition-none ${
            isDark ? 'opacity-0' : 'text-fg-subtle opacity-70'
          }`}
        >
          <Icon name="moon" className="size-3.5" />
        </span>

        <span
          aria-hidden="true"
          className={`bg-surface text-brand-300 pointer-events-none absolute top-0.5 left-0.5 inline-flex size-6 items-center justify-center rounded-full shadow-sm transition-transform duration-200 ease-out motion-reduce:transition-none ${
            isDark ? 'translate-x-7' : 'translate-x-0'
          }`}
        >
          <Icon name={isDark ? 'moon' : 'sun'} className="size-3.5" />
        </span>
      </span>
    </button>
  )
}
