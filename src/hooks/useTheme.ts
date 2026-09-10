import { useCallback, useEffect, useState } from 'react'
import { flushSync } from 'react-dom'

export type Theme = 'light' | 'dark'

const STORAGE_KEY = 'theme'

/** สีแถบเบราว์เซอร์บนมือถือ ต้องตรงกับ --color-canvas ของแต่ละธีม */
const THEME_COLORS: Record<Theme, string> = {
  dark: '#141721',
  light: '#f3f4f9',
}

function readStoredTheme(): Theme | null {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY)
    return stored === 'light' || stored === 'dark' ? stored : null
  } catch {
    // บางเบราว์เซอร์ในโหมดส่วนตัวห้ามแตะ localStorage
    return null
  }
}

function storeTheme(theme: Theme) {
  try {
    window.localStorage.setItem(STORAGE_KEY, theme)
  } catch {
    // เขียนไม่ได้ก็แค่จำค่าข้ามการรีเฟรชไม่ได้ ไม่ต้องทำอะไรต่อ
  }
}

function applyThemeToDocument(theme: Theme) {
  document.documentElement.dataset.theme = theme
  document
    .querySelector('meta[name="theme-color"]')
    ?.setAttribute('content', THEME_COLORS[theme])
}

function prefersReducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

/**
 * จุดที่วงกลมขยายออกมา และรัศมีที่ต้องคลุมมุมจอที่ไกลที่สุด
 * เก็บเป็น CSS variable ให้ keyframe clip-path อ่านตอนเล่น view transition
 */
function setRevealOrigin(x: number, y: number) {
  const radius = Math.hypot(
    Math.max(x, window.innerWidth - x),
    Math.max(y, window.innerHeight - y),
  )
  const root = document.documentElement
  root.style.setProperty('--theme-x', `${x}px`)
  root.style.setProperty('--theme-y', `${y}px`)
  root.style.setProperty('--theme-radius', `${Math.ceil(radius)}px`)
}

/**
 * คุมธีมสว่าง/มืดผ่าน data-theme บน <html>
 *
 * ค่าเริ่มต้นอ่านจาก DOM ไม่ใช่คำนวณใหม่ เพราะ inline script ใน index.html
 * ตั้ง data-theme ไว้ตั้งแต่ก่อน React เริ่มทำงาน ถ้าคำนวณซ้ำที่นี่แล้วได้คนละค่า
 * จะเกิดอาการจอกระพริบสลับธีมตอนโหลด
 */
export default function useTheme() {
  const [theme, setTheme] = useState<Theme>(() =>
    document.documentElement.dataset.theme === 'light' ? 'light' : 'dark',
  )

  useEffect(() => {
    applyThemeToDocument(theme)
  }, [theme])

  useEffect(() => {
    const query = window.matchMedia('(prefers-color-scheme: light)')
    const handleChange = (event: MediaQueryListEvent) => {
      // ตามการตั้งค่าของเครื่องต่อไป ตราบใดที่ผู้ใช้ยังไม่เคยกดปุ่มสลับเอง
      if (readStoredTheme() !== null) return
      setTheme(event.matches ? 'light' : 'dark')
    }

    query.addEventListener('change', handleChange)
    return () => query.removeEventListener('change', handleChange)
  }, [])

  const toggleTheme = useCallback(
    (origin?: { clientX: number; clientY: number }) => {
      const next: Theme = theme === 'dark' ? 'light' : 'dark'

      const apply = () => {
        storeTheme(next)
        applyThemeToDocument(next)
        // ต้องวาดเฟรมใหม่ให้จบใน callback ของ view transition
        // ไม่งั้น browser จะถ่าย snapshot ก่อน React อัปเดตสวิตช์
        flushSync(() => setTheme(next))
      }

      if (
        prefersReducedMotion() ||
        typeof document.startViewTransition !== 'function'
      ) {
        apply()
        return
      }

      const x = origin?.clientX ?? window.innerWidth - 40
      const y = origin?.clientY ?? 32
      setRevealOrigin(x, y)
      document.startViewTransition(apply)
    },
    [theme],
  )

  return { theme, toggleTheme }
}
