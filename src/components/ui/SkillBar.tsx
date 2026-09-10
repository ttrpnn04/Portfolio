import { skillLevelLabels } from '../../data/skills'
import type { SkillLevel } from '../../types/content'

interface SkillBarProps {
  name: string
  level: SkillLevel
  /** ข้อความแทนชื่อระดับ ใช้กับภาษาที่อยากบอกละเอียดกว่าคำสั้น ๆ */
  note?: string
}

export default function SkillBar({ name, level, note }: SkillBarProps) {
  return (
    <li>
      <div className="flex items-baseline justify-between gap-3">
        <span className="text-fg-muted min-w-0 text-xs">{name}</span>
        <span className="text-fg-subtle shrink-0 text-[10px]">
          {note ?? skillLevelLabels[level]}
        </span>
      </div>
      {/*
       * แถบเป็นภาพประกอบล้วน ระดับถูกบอกด้วยข้อความข้างบนอยู่แล้ว
       * ถ้าใส่ role/aria ให้แถบด้วย screen reader จะอ่านซ้ำสองรอบ
       */}
      <div
        aria-hidden="true"
        className="bg-line mt-1.5 h-1 w-full overflow-hidden rounded-full"
      >
        <div
          className="from-brand-500 to-accent-400 h-full rounded-full bg-gradient-to-r"
          style={{ width: `${level * 20}%` }}
        />
      </div>
    </li>
  )
}
