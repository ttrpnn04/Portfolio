import { experience, experienceKindLabels } from '../../data/experience'
import FaceHeading from './FaceHeading'

export default function ExperienceFace() {
  return (
    <>
      <FaceHeading eyebrow="Experience" title="ประสบการณ์" />
      <ul className="mt-3 space-y-2 lg:min-h-0 lg:flex-1 lg:overflow-hidden">
        {experience.map((item) => (
          <li key={item.id} className="flex items-baseline gap-2">
            <span className="text-fg-subtle shrink-0 text-[11px] font-medium">
              {experienceKindLabels[item.kind]}
            </span>
            <span className="text-fg-muted line-clamp-1 text-xs">
              {item.title}
            </span>
          </li>
        ))}
      </ul>
    </>
  )
}
