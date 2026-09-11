import type { Project } from '../../types/content'
import Chip from '../ui/Chip'
import Icon from '../ui/Icon'
import Photo from '../ui/Photo'
import ProjectCover from './ProjectCover'

/** จำนวน tech ที่โชว์บนการ์ด ที่เหลือสรุปเป็น +N แล้วไปดูเต็มใน modal */
const VISIBLE_TECH = 4

interface ProjectCardProps {
  project: Project
  /** wide = ใบเด่น ภาพอยู่ซ้ายเนื้อหาอยู่ขวา, compact = ภาพบนเนื้อหาล่าง */
  layout: 'wide' | 'compact'
  onOpen: () => void
}

export default function ProjectCard({
  project,
  layout,
  onOpen,
}: ProjectCardProps) {
  const isWide = layout === 'wide'
  const visibleTech = project.tech.slice(0, VISIBLE_TECH)

  return (
    /*
     * การ์ดเป็น <article> ไม่ใช่ปุ่มทั้งใบ เพราะ role="button" จะทำให้ screen reader
     * ตัดโครงสร้างข้างในทิ้งหมดเหลือแค่ชื่อเดียว ปุ่มจริงอยู่ท้ายการ์ดแทน
     */
    <article
      className={`card-surface border-line hover:border-brand-500/50 hover:card-raise group relative flex flex-col overflow-hidden rounded-2xl border transition-[border-color,box-shadow,translate] duration-300 ease-out hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:translate-y-0 ${
        isWide ? 'md:grid md:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)]' : ''
      }`}
    >
      {/*
       * ใบเด่นวางภาพเป็น grid item ตรง ๆ แล้วสั่ง h-full ภาพจึงสูงเท่าคอลัมน์
       * ข้อความเสมอ ไม่ว่าเนื้อหาจะยาวแค่ไหน
       */}
      {project.imageSrc ? (
        <Photo
          src={project.imageSrc}
          alt={project.imageAlt}
          className={`aspect-video w-full object-top ${isWide ? 'md:aspect-auto md:h-full' : ''}`}
        />
      ) : (
        <ProjectCover
          title={project.coverTitle ?? project.title}
          kicker={project.coverKicker ?? 'Project'}
          icon={project.coverIcon ?? 'code'}
          alt={project.imageAlt}
          className={`aspect-video w-full ${isWide ? 'md:aspect-auto md:h-full' : ''}`}
        />
      )}

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <p className="text-brand-300 text-2xs font-semibold tracking-[0.2em] uppercase">
          {project.featured ? 'Featured Project' : 'Project'}
        </p>

        <h3
          className={`text-fg mt-1.5 font-bold ${isWide ? 'text-xl' : 'text-base'}`}
        >
          {project.title}
        </h3>

        <p className="text-fg-muted mt-2 text-sm leading-relaxed">
          {project.tagline}
        </p>

        <div className="text-fg-subtle mt-3 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs">
          <span>{project.period}</span>
          {project.status && (
            <>
              <span aria-hidden="true">·</span>
              <span className="text-brand-300">{project.status}</span>
            </>
          )}
        </div>

        <div className="mt-4 flex flex-wrap items-center gap-1.5">
          {visibleTech.map((tech) => (
            <Chip key={tech}>{tech}</Chip>
          ))}
          {project.tech.length > visibleTech.length && (
            <span className="text-fg-subtle text-xs">
              +{project.tech.length - visibleTech.length}
            </span>
          )}
        </div>

        <div className="mt-auto pt-5">
          <button
            type="button"
            onClick={onOpen}
            className="text-brand-300 hover:text-brand-400 focus-visible:outline-brand-400 -mx-2 inline-flex min-h-11 items-center gap-1.5 rounded-lg px-2 text-sm font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 motion-reduce:transition-none"
          >
            ดูรายละเอียด
            <span className="sr-only">ของ {project.title}</span>
            <Icon
              name="external"
              className="size-3.5 transition-transform duration-300 group-hover:translate-x-0.5 motion-reduce:transition-none"
            />
          </button>
        </div>
      </div>
    </article>
  )
}
