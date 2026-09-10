interface ColumnTitleProps {
  children: string
}

/** หัวข้อย่อยในคอลัมน์ของ section Resume */
export default function ColumnTitle({ children }: ColumnTitleProps) {
  return (
    <h3 className="border-line/70 text-brand-300 border-b pb-2 text-[11px] font-semibold tracking-[0.22em] uppercase">
      {children}
    </h3>
  )
}
