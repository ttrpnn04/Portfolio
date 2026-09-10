import { experienceKindLabels } from '../../data/experience'
import type { ExperienceItem } from '../../types/content'

const kindToneClasses: Record<ExperienceItem['kind'], string> = {
  education: 'border-line-strong bg-fill text-fg-muted',
  internship: 'border-brand-500/50 bg-brand-500/12 text-brand-300',
  activity: 'border-warn/40 bg-warn/12 text-warn',
}

interface TimelineEntryProps {
  item: ExperienceItem
}

export default function TimelineEntry({ item }: TimelineEntryProps) {
  return (
    <li className="group relative flex gap-4 pb-7 last:pb-0">
      <div className="relative flex flex-col items-center">
        <span
          className={`z-10 flex size-11 shrink-0 items-center justify-center rounded-full border px-1 text-center text-[10px] leading-tight font-semibold ${kindToneClasses[item.kind]}`}
        >
          {item.badge}
        </span>
        {/* เส้นต่อลงไปยังรายการถัดไป ตัดทิ้งที่รายการสุดท้าย */}
        <span
          aria-hidden="true"
          className="bg-line absolute top-12 bottom-0 w-px group-last:hidden"
        />
      </div>

      <div className="min-w-0 pt-0.5 pb-1">
        <p className="text-fg-subtle text-[10px] font-medium tracking-[0.14em] uppercase">
          {experienceKindLabels[item.kind]} · {item.period}
        </p>
        <h4 className="text-fg mt-1 text-sm font-semibold">{item.title}</h4>
        <p className="text-fg-muted mt-0.5 text-xs">
          {item.organization}
          {item.location && (
            <span className="text-fg-subtle"> · {item.location}</span>
          )}
        </p>

        <ul className="mt-2 space-y-1">
          {item.bullets.map((bullet, index) => (
            <li
              key={index}
              className="text-fg-muted flex gap-2 text-xs leading-relaxed"
            >
              <span aria-hidden="true" className="text-fg-subtle">
                &bull;
              </span>
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      </div>
    </li>
  )
}
