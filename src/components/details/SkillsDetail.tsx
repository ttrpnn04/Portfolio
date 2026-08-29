import { skillGroups } from '../../data/skills'
import Tag from '../ui/Tag'
import DetailShell from './DetailShell'

export default function SkillsDetail() {
  return (
    <DetailShell eyebrow="Skills" title="ทักษะทั้งหมด">
      {skillGroups.map((group) => (
        <div key={group.id}>
          <h4 className="text-fg text-sm font-semibold">{group.title}</h4>
          <p className="text-fg-subtle mt-0.5 text-xs">{group.caption}</p>
          <div className="mt-2 flex flex-wrap gap-2">
            {group.items.map((item) => (
              <Tag key={item}>{item}</Tag>
            ))}
          </div>
        </div>
      ))}
    </DetailShell>
  )
}
