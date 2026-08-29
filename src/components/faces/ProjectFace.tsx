import type { Project } from '../../types/content'
import Chip from '../ui/Chip'

interface ProjectFaceProps {
  project: Project
  variant: 'featured' | 'compact'
}

/**
 * บน lg การ์ดถูกล็อกความสูงตามแถวของ grid ภาพจึงยืดเต็มที่ว่างที่เหลือด้วย
 * flex-1 + min-h-0 ส่วนต่ำกว่า lg การ์ดสูงตามเนื้อหา ถ้าใช้ flex-1 ภาพจะยุบเป็น
 * เส้นบาง จึงต้องให้ความสูงจากอัตราส่วนภาพแทน
 */
const thumbnailClasses =
  'aspect-video max-h-44 w-full rounded-lg lg:aspect-auto lg:max-h-none lg:min-h-0 lg:flex-1'

function Thumbnail({ project }: { project: Project }) {
  if (project.imageSrc) {
    return (
      <img
        src={project.imageSrc}
        alt={project.imageAlt}
        className={`${thumbnailClasses} border border-white/10 object-cover`}
      />
    )
  }

  return (
    <div
      role="img"
      aria-label={project.imageAlt}
      className={`${thumbnailClasses} flex flex-col items-center justify-center gap-1.5 border border-white/10 bg-white/[0.02] px-2`}
    >
      <svg
        className="text-fg-subtle/50 size-6 shrink-0"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <rect x="3" y="4" width="18" height="16" rx="2" />
        <path d="M3 16l4.5-4.5 4 4 3-3L21 17" />
        <circle cx="9" cy="9" r="1.2" />
      </svg>
      <span className="text-fg-subtle line-clamp-2 text-center text-[11px]">
        {project.imageAlt}
      </span>
    </div>
  )
}

export default function ProjectFace({ project, variant }: ProjectFaceProps) {
  const isFeatured = variant === 'featured'
  const visibleTech = project.tech.slice(0, isFeatured ? 4 : 2)

  return (
    <>
      {/* แสงม่วงเยื้องมุมบนขวา ทำให้การ์ดผลงานหลักเด่นกว่าใบอื่นโดยไม่ต้องใช้สีจัด */}
      {isFeatured && (
        <div
          aria-hidden="true"
          className="bg-accent-500/20 pointer-events-none absolute -top-20 -right-16 size-56 rounded-full blur-3xl"
        />
      )}

      <div className="pr-6">
        <p className="text-brand-300 text-[10px] font-semibold tracking-[0.2em] uppercase">
          {isFeatured ? 'Featured Project' : 'Project'}
        </p>
        <h2
          className={`text-fg mt-1 line-clamp-1 font-bold ${isFeatured ? 'text-lg' : 'text-sm'}`}
        >
          {project.title}
        </h2>
        {isFeatured && (
          <p className="text-fg-muted mt-1 line-clamp-2 text-sm">
            {project.tagline}
          </p>
        )}
      </div>

      <div className="mt-3 flex flex-col lg:min-h-0 lg:flex-1">
        <Thumbnail project={project} />
      </div>

      <div className="mt-3 flex flex-wrap items-center gap-1">
        {visibleTech.map((tech) => (
          <Chip key={tech}>{tech}</Chip>
        ))}
        {project.tech.length > visibleTech.length && (
          <span className="text-fg-subtle text-[11px]">
            +{project.tech.length - visibleTech.length}
          </span>
        )}
      </div>
    </>
  )
}
