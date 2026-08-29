import { experience } from '../../data/experience'
import DetailShell from './DetailShell'
import TimelineItem from './TimelineItem'

export default function ExperienceDetail() {
  return (
    <DetailShell eyebrow="Experience" title="ประสบการณ์และการศึกษา">
      <ol>
        {experience.map((item) => (
          <TimelineItem key={item.id} item={item} />
        ))}
      </ol>
    </DetailShell>
  )
}
