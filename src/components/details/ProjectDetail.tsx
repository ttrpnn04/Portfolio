interface ProjectDetailProps {
  label: string
  /** ใช้กับเนื้อหาแบบย่อหน้า */
  text?: string | null
  /** ใช้กับเนื้อหาแบบรายการ เช่น หน้าที่ที่รับผิดชอบ */
  items?: string[]
}

export default function ProjectDetail({
  label,
  text,
  items,
}: ProjectDetailProps) {
  // ไม่เรนเดอร์หัวข้อที่ยังไม่มีเนื้อหา เพื่อไม่ให้เกิดหัวข้อว่างลอยใน popup
  const hasText = Boolean(text)
  const hasItems = Boolean(items?.length)
  if (!hasText && !hasItems) return null

  return (
    <div>
      <h4 className="text-fg-subtle text-xs font-semibold tracking-wider uppercase">
        {label}
      </h4>
      <div className="mt-1.5">
        {hasText && (
          <p className="text-fg-muted text-sm leading-relaxed">{text}</p>
        )}
        {hasItems && (
          <ul className="space-y-1.5">
            {items?.map((item, index) => (
              <li
                key={index}
                className="text-fg-muted flex gap-2 text-sm leading-relaxed"
              >
                <span aria-hidden="true" className="text-brand-400 mt-px">
                  &bull;
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}
