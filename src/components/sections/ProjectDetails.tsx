import { isUsableHref } from '../../lib/links'
import type { Project } from '../../types/content'
import Icon from '../ui/Icon'
import Tag from '../ui/Tag'

interface DetailBlockProps {
  label: string
  text?: string | null
  items?: string[]
}

/** ไม่เรนเดอร์หัวข้อที่ยังไม่มีเนื้อหา จะได้ไม่มีหัวข้อว่างลอยใน modal */
function DetailBlock({ label, text, items }: DetailBlockProps) {
  const hasText = Boolean(text)
  const hasItems = Boolean(items?.length)
  if (!hasText && !hasItems) return null

  return (
    <div>
      <h4 className="text-fg-subtle text-xs font-semibold tracking-wider uppercase">
        {label}
      </h4>
      <div className="mt-1.5">
        {hasText && (
          <p className="text-fg-muted text-sm leading-relaxed">{text}</p>
        )}
        {hasItems && (
          <ul className="space-y-1.5">
            {items?.map((item, index) => (
              <li
                key={index}
                className="text-fg-muted flex gap-2 text-sm leading-relaxed"
              >
                <span aria-hidden="true" className="text-brand-400 mt-px">
                  &bull;
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}

interface ProjectDetailsProps {
  project: Project
}

export default function ProjectDetails({ project }: ProjectDetailsProps) {
  const usableLinks = project.links.filter((link) => isUsableHref(link.href))

  return (
    <div>
      <p className="text-brand-300 text-xs font-semibold tracking-[0.2em] uppercase">
        {project.featured ? 'Featured Project' : 'Project'}
      </p>
      <h3 className="text-fg mt-1 text-xl font-bold">{project.title}</h3>

      <div className="mt-2 flex flex-wrap items-center gap-2">
        {project.status && <Tag>{project.status}</Tag>}
        <span className="text-fg-subtle text-xs">{project.period}</span>
      </div>

      <div className="mt-5 space-y-4">
        <p className="text-fg-muted text-sm leading-relaxed">
          {project.tagline}
        </p>

        <DetailBlock label="Problem" text={project.problem} />
        <DetailBlock label="Solution" text={project.solution} />
        <DetailBlock label="บทบาทของฉัน" items={project.contributions} />
        <DetailBlock label="Outcome" text={project.outcome} />

        {project.screenshots.length > 0 && (
          <div>
            <h4 className="text-fg-subtle text-xs font-semibold tracking-wider uppercase">
              Screenshots
            </h4>
            <ul className="mt-2 grid gap-2 sm:grid-cols-2">
              {project.screenshots.map((shot) => (
                <li key={shot.src}>
                  <img
                    src={shot.src}
                    alt={shot.alt}
                    className="border-line w-full rounded-lg border object-cover object-top"
                  />
                </li>
              ))}
            </ul>
          </div>
        )}

        <div>
          <h4 className="text-fg-subtle text-xs font-semibold tracking-wider uppercase">
            Tech Stack
          </h4>
          <div className="mt-2 flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <Tag key={tech} tone="brand">
                {tech}
              </Tag>
            ))}
          </div>
        </div>

        {usableLinks.length > 0 && (
          <ul className="border-line flex flex-wrap gap-x-5 gap-y-2 border-t pt-4">
            {usableLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-300 hover:text-brand-400 inline-flex items-center gap-1.5 text-sm font-semibold transition-colors motion-reduce:transition-none"
                >
                  {link.label}
                  <Icon name="external" className="size-3.5" />
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}
