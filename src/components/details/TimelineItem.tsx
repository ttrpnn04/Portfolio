import { experienceKindLabels } from '../../data/experience'
import type { ExperienceItem } from '../../types/content'

const kindToneClasses: Record<ExperienceItem['kind'], string> = {
  education: 'border-line bg-white/[0.06] text-fg-muted',
  internship: 'border-brand-500/40 bg-brand-500/12 text-brand-300',
  activity: 'border-amber-400/40 bg-amber-400/12 text-amber-300',
}

interface TimelineItemProps {
  item: ExperienceItem
}

export default function TimelineItem({ item }: TimelineItemProps) {
  return (
    <li className="group relative pb-6 pl-7 last:pb-0">
      {/* เส้นแนวตั้งวาดต่อจากจุดของแต่ละรายการ และตัดทิ้งที่รายการสุดท้าย */}
      <span
        aria-hidden="true"
        className="bg-line absolute top-2 bottom-0 left-[4px] w-px group-last:hidden"
      />
      <span
        aria-hidden="true"
        className="border-brand-400 bg-canvas absolute top-1.5 left-0 size-2.5 rounded-full border-2"
      />

      <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
        <span
          className={`inline-flex items-center rounded-md border px-2 py-0.5 text-xs font-medium ${kindToneClasses[item.kind]}`}
        >
          {experienceKindLabels[item.kind]}
        </span>
        <span className="text-fg-subtle text-xs">{item.period}</span>
      </div>

      <h4 className="text-fg mt-1.5 text-sm font-semibold">{item.title}</h4>
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
    </li>
  )
}
