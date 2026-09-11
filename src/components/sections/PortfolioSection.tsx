import { useRef, useState } from 'react'
import { featuredProject, otherProjects } from '../../data/projects'
import type { Project } from '../../types/content'
import Section from '../layout/Section'
import SectionHeader from '../layout/SectionHeader'
import Modal from '../ui/Modal'
import ProjectCard from './ProjectCard'
import ProjectDetails from './ProjectDetails'

function ProjectScroller({
  projects,
  onOpen,
}: {
  projects: Project[]
  onOpen: (project: Project) => void
}) {
  const scrollerRef = useRef<HTMLDivElement>(null)

  const scrollByCard = (direction: -1 | 1) => {
    const node = scrollerRef.current
    if (!node) return
    const card = node.querySelector('[data-project-slide]')
    const gap = 20
    const amount = card
      ? card.getBoundingClientRect().width + gap
      : node.clientWidth * 0.85
    node.scrollBy({ left: direction * amount, behavior: 'smooth' })
  }

  return (
    <div>
      <div className="mb-3 flex items-center justify-between gap-3">
        <p className="text-fg-subtle text-xs">เลื่อนดูโปรเจกต์อื่น</p>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => scrollByCard(-1)}
            aria-label="โปรเจกต์ก่อนหน้า"
            className="border-line text-fg-muted hover:border-brand-500/50 hover:text-fg inline-flex size-10 items-center justify-center rounded-full border transition-colors motion-reduce:transition-none"
          >
            <svg
              className="size-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M15 6l-6 6 6 6" />
            </svg>
          </button>
          <button
            type="button"
            onClick={() => scrollByCard(1)}
            aria-label="โปรเจกต์ถัดไป"
            className="border-line text-fg-muted hover:border-brand-500/50 hover:text-fg inline-flex size-10 items-center justify-center rounded-full border transition-colors motion-reduce:transition-none"
          >
            <svg
              className="size-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M9 6l6 6-6 6" />
            </svg>
          </button>
        </div>
      </div>

      <div
        ref={scrollerRef}
        tabIndex={0}
        aria-label="โปรเจกต์อื่น เลื่อนซ้ายขวาเพื่อดูเพิ่ม"
        className="scrollbar-subtle focus-visible:outline-brand-400 flex snap-x snap-mandatory gap-5 overflow-x-auto rounded-2xl pb-2 focus-visible:outline-2 focus-visible:outline-offset-2"
      >
        {projects.map((project) => (
          <div
            key={project.id}
            data-project-slide
            className="w-[min(20.5rem,85vw)] shrink-0 snap-start sm:w-[min(24rem,calc(50%-0.625rem))]"
          >
            <ProjectCard
              project={project}
              layout="compact"
              onOpen={() => onOpen(project)}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default function PortfolioSection() {
  // ใช้ modal ใบเดียวร่วมกันทุกการ์ด ไม่ต้องมี dialog ซ้อนกันในหน้าเท่าจำนวนโปรเจกต์
  const [activeProject, setActiveProject] = useState<Project | null>(null)

  // รับค่าที่ import มาใส่ตัวแปรในฟังก์ชันก่อน TypeScript ถึงจะยอมแคบชนิด
  // ให้ใน callback ได้ เพราะ binding ที่ import มาถูกมองว่าเปลี่ยนค่าได้
  const featured = featuredProject

  return (
    <Section id="portfolio" title="ผลงาน" className="justify-center">
      <div className="mx-auto w-full max-w-7xl px-4 pt-24 pb-20 sm:px-6 lg:px-10">
        <SectionHeader eyebrow="Portfolio" title="ผลงานที่ผ่านมา" />

        <div className="mt-10 space-y-5">
          {featured && (
            <ProjectCard
              project={featured}
              layout="wide"
              onOpen={() => setActiveProject(featured)}
            />
          )}

          {otherProjects.length > 0 && (
            <ProjectScroller
              projects={otherProjects}
              onOpen={setActiveProject}
            />
          )}
        </div>
      </div>

      <Modal
        label={
          activeProject
            ? `รายละเอียดโปรเจกต์ ${activeProject.title}`
            : 'รายละเอียดโปรเจกต์'
        }
        isOpen={activeProject !== null}
        onClose={() => setActiveProject(null)}
      >
        {activeProject && <ProjectDetails project={activeProject} />}
      </Modal>
    </Section>
  )
}
