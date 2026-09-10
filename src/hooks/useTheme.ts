import { useCallback, useEffect, useState } from 'react'

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
    document.documentElement.dataset.theme = theme
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute('content', THEME_COLORS[theme])
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

  const toggleTheme = useCallback(() => {
    setTheme((current) => {
      const next: Theme = current === 'dark' ? 'light' : 'dark'
      storeTheme(next)
      return next
    })
  }, [])

  return { theme, toggleTheme }
}
