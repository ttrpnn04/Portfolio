import { about } from '../../data/profile'
import FaceHeading from './FaceHeading'

export default function AboutFace() {
  return (
    <>
      <FaceHeading eyebrow="About" title="เกี่ยวกับฉัน" />
      <p className="text-fg-muted mt-3 line-clamp-4 text-sm leading-relaxed">
        {about.paragraphs[0]}
      </p>
      <ul className="mt-4 space-y-1.5 lg:mt-auto lg:pt-3">
        {about.strengths.map((strength) => (
          <li key={strength.title} className="text-fg-muted flex gap-2 text-xs">
            <span aria-hidden="true" className="text-brand-400">
              &bull;
            </span>
            <span className="line-clamp-1">{strength.title}</span>
          </li>
        ))}
      </ul>
    </>
  )
}
