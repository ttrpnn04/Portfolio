import type { ProjectLink } from '../../types/content'

interface ProjectLinksProps {
  links: ProjectLink[]
}

export default function ProjectLinks({ links }: ProjectLinksProps) {
  if (links.length === 0) return null

  return (
    <ul className="flex flex-wrap gap-x-5 gap-y-2">
      {links.map((link) => (
        <li key={link.label}>
          <a
            href={link.href}
            target="_blank"
            rel="noreferrer"
            className="text-brand-300 hover:text-brand-400 inline-flex items-center gap-1.5 text-sm font-semibold transition-colors"
          >
            {link.label}
            <svg
              className="size-3.5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              aria-hidden="true"
            >
              <path d="M7 17L17 7M9 7h8v8" />
            </svg>
          </a>
        </li>
      ))}
    </ul>
  )
}
