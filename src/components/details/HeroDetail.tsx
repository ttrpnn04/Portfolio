import { contactLinks, hero } from '../../data/profile'
import Button from '../ui/Button'
import DetailShell from './DetailShell'

export default function HeroDetail() {
  const cvLink = contactLinks.find((link) => link.id === 'cv')

  return (
    <DetailShell
      eyebrow="Profile"
      title={hero.name}
      meta={
        <p className="text-brand-300 text-sm font-semibold">{hero.headline}</p>
      }
    >
      <p className="text-fg-muted text-sm leading-relaxed">{hero.status}</p>
      <p className="text-fg-muted text-sm leading-relaxed">{hero.intro}</p>
      <p className="text-fg-subtle text-sm">{hero.location}</p>
      {cvLink && (
        <Button href={cvLink.href} external>
          ดาวน์โหลด CV
        </Button>
      )}
    </DetailShell>
  )
}
