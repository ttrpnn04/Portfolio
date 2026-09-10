/**
 * ค่าใน src/data/ ที่ยังไม่ได้เติมจะอยู่ในรูป [คำอธิบาย] ถ้าปล่อยลง href ตรง ๆ
 * เบราว์เซอร์จะตีเป็น relative URL กดแล้วเด้งไปหน้า 404 แบบไม่มีอะไรเตือน
 * จึงต้องเช็คก่อนทุกครั้งแล้วเรนเดอร์เป็นข้อความเฉย ๆ แทนลิงก์
 */
export function isPlaceholder(value: string) {
  return value.trim().startsWith('[')
}

/** mailto:[...] และ tel:[...] ก็เป็น placeholder เหมือนกัน แค่มี scheme นำหน้า */
export function isUsableHref(href: string) {
  const withoutScheme = href.replace(/^(mailto:|tel:)/, '')
  return !isPlaceholder(withoutScheme)
}
