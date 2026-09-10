import { socialLinks } from '../../data/profile'
import { isUsableHref } from '../../lib/links'
import Icon from '../ui/Icon'

const itemClasses =
  'border-line/70 text-fg-subtle bg-fill inline-flex size-11 items-center justify-center rounded-full border transition-colors duration-200 motion-reduce:transition-none'

/** แถวไอคอนโซเชียลมุมล่างของหน้าแรก */
export default function SocialRail() {
  return (
    <ul className="flex items-center gap-2">
      {socialLinks.map((link) => (
        <li key={link.id}>
          {isUsableHref(link.href) ? (
            <a
              href={link.href}
              target={link.href.startsWith('mailto:') ? undefined : '_blank'}
              rel="noopener noreferrer"
              aria-label={link.label}
              className={`${itemClasses} hover:border-brand-500/60 hover:text-brand-300 hover:bg-brand-500/10`}
            >
              <Icon name={link.icon} className="size-4" />
            </a>
          ) : (
            <span
              aria-label={`${link.label} — ยังไม่ได้ใส่ลิงก์`}
              role="img"
              className={`${itemClasses} opacity-40`}
            >
              <Icon name={link.icon} className="size-4" />
            </span>
          )}
        </li>
      ))}
    </ul>
  )
}
