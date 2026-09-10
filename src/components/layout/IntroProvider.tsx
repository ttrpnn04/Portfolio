import { useState, type ReactNode } from 'react'
import { IntroReadyContext } from '../../hooks/useIntroReady'
import PageLoader from './PageLoader'

interface IntroProviderProps {
  children: ReactNode
}

/**
 * ครอบทั้งหน้า: โชว์ overlay โหลดตอนเข้าเว็บ แล้วปลด inert ของเนื้อหา
 * พอเริ่มเฟดออก เพื่อให้แอนิเมชัน card-in ของหน้าแรกวิ่งพร้อมกับ overlay หาย
 * ไม่ใช่เล่นจบไปข้างหลังจอทึบ
 */
export default function IntroProvider({ children }: IntroProviderProps) {
  const [ready, setReady] = useState(false)

  return (
    <IntroReadyContext value={ready}>
      <PageLoader onReveal={() => setReady(true)} />
      <div inert={!ready}>{children}</div>
    </IntroReadyContext>
  )
}
