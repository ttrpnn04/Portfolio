import type { Project } from '../../types/content'
import Tag from '../ui/Tag'
import DetailShell from './DetailShell'
import ProjectDetail from './ProjectDetail'
import ProjectLinks from './ProjectLinks'

interface ProjectDetailPanelProps {
  project: Project
}

export default function ProjectDetailPanel({
  project,
}: ProjectDetailPanelProps) {
  return (
    <DetailShell
      eyebrow={project.featured ? 'Featured Project' : 'Project'}
      title={project.title}
      meta={
        <div className="flex flex-wrap items-center gap-2">
          {project.status && <Tag>{project.status}</Tag>}
          <span className="text-fg-subtle text-xs">{project.period}</span>
        </div>
      }
    >
      <p className="text-fg-muted text-sm leading-relaxed">{project.tagline}</p>

      <ProjectDetail label="Problem" text={project.problem} />
      <ProjectDetail label="Solution" text={project.solution} />
      <ProjectDetail label="บทบาทของฉัน" items={project.contributions} />
      <ProjectDetail label="Outcome" text={project.outcome} />

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

      <div className="border-line border-t pt-3">
        <ProjectLinks links={project.links} />
      </div>
    </DetailShell>
  )
}
