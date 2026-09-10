import useTheme from '../../hooks/useTheme'
import Icon from '../ui/Icon'

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <button
      type="button"
      onClick={toggleTheme}
      // บอกสิ่งที่จะเกิดขึ้นเมื่อกด ไม่ใช่สถานะปัจจุบัน จะได้ไม่ต้องเดาว่า
      // ไอคอนดวงอาทิตย์แปลว่า "ตอนนี้สว่าง" หรือ "กดแล้วจะสว่าง"
      aria-label={isDark ? 'เปลี่ยนเป็นธีมสว่าง' : 'เปลี่ยนเป็นธีมมืด'}
      title={isDark ? 'เปลี่ยนเป็นธีมสว่าง' : 'เปลี่ยนเป็นธีมมืด'}
      className="border-line/70 text-fg-subtle hover:border-line-strong hover:text-fg hover:bg-fill-hover inline-flex size-11 shrink-0 items-center justify-center rounded-full border transition-colors duration-200 motion-reduce:transition-none"
    >
      <Icon name={isDark ? 'sun' : 'moon'} className="size-4" />
    </button>
  )
}
