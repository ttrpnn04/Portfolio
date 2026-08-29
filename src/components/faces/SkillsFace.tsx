import { skillGroups } from '../../data/skills'
import Chip from '../ui/Chip'
import FaceHeading from './FaceHeading'

export default function SkillsFace() {
  return (
    <>
      <FaceHeading eyebrow="Skills" title="ทักษะ" />
      <ul className="mt-3 space-y-2.5 lg:min-h-0 lg:flex-1 lg:overflow-hidden">
        {skillGroups.map((group) => (
          <li key={group.id}>
            <p className="text-fg-subtle text-[11px] font-semibold">
              {group.title}
            </p>
            <div className="mt-1 flex flex-wrap gap-1">
              {/* โชว์แค่ 3 ตัวแรกต่อกลุ่ม ที่เหลือสรุปเป็น +N ให้ไปดูใน popup */}
              {group.items.slice(0, 3).map((item) => (
                <Chip key={item}>{item}</Chip>
              ))}
              {group.items.length > 3 && (
                <span className="text-fg-subtle px-1 py-0.5 text-[11px]">
                  +{group.items.length - 3}
                </span>
              )}
            </div>
          </li>
        ))}
      </ul>
    </>
  )
}
