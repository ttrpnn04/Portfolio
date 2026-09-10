import { useState } from 'react'
import { featuredProject, otherProjects } from '../../data/projects'
import type { Project } from '../../types/content'
import Section from '../layout/Section'
import SectionHeader from '../layout/SectionHeader'
import Modal from '../ui/Modal'
import ProjectCard from './ProjectCard'
import ProjectDetails from './ProjectDetails'

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
            <div className="grid gap-5 sm:grid-cols-2">
              {otherProjects.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  layout="compact"
                  onOpen={() => setActiveProject(project)}
                />
              ))}
            </div>
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
