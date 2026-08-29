import { about } from '../../data/profile'
import Tag from '../ui/Tag'
import DetailShell from './DetailShell'

export default function AboutDetail() {
  return (
    <DetailShell eyebrow="About" title="เกี่ยวกับฉัน">
      {about.paragraphs.map((paragraph, index) => (
        <p key={index} className="text-fg-muted text-sm leading-relaxed">
          {paragraph}
        </p>
      ))}

      <div>
        <h4 className="text-fg-subtle text-xs font-semibold tracking-wider uppercase">
          ตำแหน่งที่กำลังมองหา
        </h4>
        <div className="mt-2 flex flex-wrap gap-2">
          {about.targetRoles.map((role) => (
            <Tag key={role} tone="brand">
              {role}
            </Tag>
          ))}
        </div>
      </div>

      <div>
        <h4 className="text-fg-subtle text-xs font-semibold tracking-wider uppercase">
          จุดแข็ง
        </h4>
        <ul className="mt-2 space-y-3">
          {about.strengths.map((strength) => (
            <li key={strength.title}>
              <p className="text-fg text-sm font-semibold">{strength.title}</p>
              <p className="text-fg-muted mt-0.5 text-sm leading-relaxed">
                {strength.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </DetailShell>
  )
}
