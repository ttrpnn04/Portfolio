import Icon from './Icon'

interface PhotoProps {
  src: string | null
  alt: string
  /** ใส่ขนาดและ rounded ผ่านตรงนี้ ตัว component ไม่กำหนดขนาดเอง */
  className?: string
  /** ปิดคำบรรยายในกรอบ placeholder เวลาใช้เป็นภาพพื้นหลัง */
  showCaption?: boolean
}

/**
 * รูปจริงถ้ามี path ไม่งั้นเป็นกรอบไล่สีพร้อมคำบรรยาย เพื่อให้เห็นตั้งแต่ตอน dev
 * ว่าช่องนี้ต้องเติมรูปอะไร และ layout ไม่ยุบเพราะภาพหาย
 */
export default function Photo({
  src,
  alt,
  className = '',
  showCaption = true,
}: PhotoProps) {
  if (src) {
    return <img src={src} alt={alt} className={`object-cover ${className}`} />
  }

  return (
    <div
      role="img"
      aria-label={alt}
      className={`from-brand-500/20 via-surface to-accent-500/15 relative flex items-center justify-center overflow-hidden bg-gradient-to-br ${className}`}
    >
      <div
        aria-hidden="true"
        className="grid-pattern absolute inset-0 opacity-[0.12]"
      />
      {showCaption && (
        <span className="text-fg-subtle relative flex max-w-xs flex-col items-center gap-2 px-4 text-center text-xs leading-relaxed">
          <Icon name="camera" className="size-6 opacity-70" />
          {alt}
        </span>
      )}
    </div>
  )
}
