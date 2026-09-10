import { createContext, useContext } from 'react'

export const IntroReadyContext = createContext(false)

/** true ตั้งแต่ overlay เริ่มเฟดออก — ใช้สั่ง card-in ของหน้าแรกให้เล่นตอนมองเห็น */
export default function useIntroReady() {
  return useContext(IntroReadyContext)
}
