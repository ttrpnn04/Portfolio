import type { IconName } from '../../types/content'
import Icon from '../ui/Icon'

interface ProjectCoverProps {
  title: string
  kicker: string
  icon: IconName
  alt: string
  className?: string
}

/**
 * ปกกราฟิกตอนยังไม่มีสกรีนช็อต จงใจไม่เลียนแบบหน้าจอแอป
 * ใช้สีและฟอนต์ชุดเดียวกับธีมเว็บ จึงสลับมืด/สว่างตามหน้าได้
 */
export default function ProjectCover({
  title,
  kicker,
  icon,
  alt,
  className = '',
}: ProjectCoverProps) {
  return (
    <div
      role="img"
      aria-label={alt}
      className={`from-brand-500/20 via-surface to-accent-500/20 relative flex items-center justify-center overflow-hidden bg-gradient-to-br ${className}`}
    >
      <div
        aria-hidden="true"
        className="grid-pattern absolute inset-0 opacity-[0.14]"
      />
      <div
        aria-hidden="true"
        className="bg-brand-500/25 absolute -top-10 -right-8 size-36 rounded-full blur-3xl"
      />
      <div
        aria-hidden="true"
        className="bg-accent-500/20 absolute -bottom-12 -left-6 size-40 rounded-full blur-3xl"
      />

      <div className="relative flex flex-col items-center px-6 text-center">
        <span className="border-brand-500/40 bg-fill text-brand-300 inline-flex size-14 items-center justify-center rounded-2xl border">
          <Icon name={icon} className="size-7" />
        </span>
        <p className="text-brand-300 text-2xs mt-4 font-semibold tracking-[0.22em] uppercase">
          {kicker}
        </p>
        <p className="text-fg mt-1.5 text-lg font-bold tracking-tight">
          {title}
        </p>
      </div>
    </div>
  )
}
