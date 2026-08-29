import { featuredProject, otherProjects } from '../../data/projects'
import useHoverCapable from '../../hooks/useHoverCapable'
import AboutDetail from '../details/AboutDetail'
import ExperienceDetail from '../details/ExperienceDetail'
import HeroDetail from '../details/HeroDetail'
import ProjectDetailPanel from '../details/ProjectDetailPanel'
import SkillsDetail from '../details/SkillsDetail'
import AboutFace from '../faces/AboutFace'
import ContactFace from '../faces/ContactFace'
import ExperienceFace from '../faces/ExperienceFace'
import HeroFace from '../faces/HeroFace'
import ProjectFace from '../faces/ProjectFace'
import SkillsFace from '../faces/SkillsFace'
import BentoCard from './BentoCard'

/**
 * ผัง bento บน lg (4 คอลัมน์ x 4 แถว) อาศัย auto-placement ตามลำดับลูก
 * จึงไม่ต้องระบุ col-start/row-start เลย
 *
 *   HERO (2x2)      | ABOUT (1x2) | SKILLS (1x2)
 *   FEATURED (2x2)  | PROJ 2      | PROJ 3
 *                   | EXPERIENCE  | CONTACT
 */
/** ระยะห่างของ entrance animation แต่ละใบ */
const STAGGER_MS = 60

export default function BentoGrid() {
  const hoverCapable = useHoverCapable()

  return (
    <div className="bg-canvas relative isolate p-4 sm:p-6 lg:h-dvh lg:overflow-hidden">
      {/* สองชั้นนี้ทำให้พื้นหลังไม่แบน: แสงจาง ๆ หลังการ์ด Hero กับลายตารางบาง ๆ */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-70"
        style={{
          backgroundImage:
            'radial-gradient(60rem 40rem at 12% 0%, color-mix(in oklab, var(--color-brand-500) 16%, transparent), transparent 65%), radial-gradient(45rem 35rem at 92% 100%, color-mix(in oklab, var(--color-accent-500) 12%, transparent), transparent 65%)',
        }}
      />
      <div
        aria-hidden="true"
        className="grid-pattern pointer-events-none absolute inset-0 -z-10 [mask-image:radial-gradient(70%_70%_at_50%_40%,black,transparent)] opacity-[0.18]"
      />

      <div className="grid gap-3 sm:gap-4 md:grid-cols-2 lg:h-full lg:grid-cols-4 lg:grid-rows-4">
        <BentoCard
          label="โปรไฟล์"
          hoverCapable={hoverCapable}
          delayMs={0}
          detail={<HeroDetail />}
          className="md:col-span-2 lg:row-span-2"
        >
          <HeroFace />
        </BentoCard>

        <BentoCard
          label="เกี่ยวกับฉัน"
          hoverCapable={hoverCapable}
          delayMs={STAGGER_MS}
          detail={<AboutDetail />}
          className="lg:row-span-2"
        >
          <AboutFace />
        </BentoCard>

        <BentoCard
          label="ทักษะ"
          hoverCapable={hoverCapable}
          delayMs={STAGGER_MS * 2}
          detail={<SkillsDetail />}
          className="lg:row-span-2"
        >
          <SkillsFace />
        </BentoCard>

        {featuredProject && (
          <BentoCard
            label={`โปรเจกต์เด่น: ${featuredProject.title}`}
            hoverCapable={hoverCapable}
            delayMs={STAGGER_MS * 3}
            featured
            detail={<ProjectDetailPanel project={featuredProject} />}
            className="md:col-span-2 lg:row-span-2"
          >
            <ProjectFace project={featuredProject} variant="featured" />
          </BentoCard>
        )}

        {otherProjects.map((project, index) => (
          <BentoCard
            key={project.id}
            label={`โปรเจกต์: ${project.title}`}
            hoverCapable={hoverCapable}
            delayMs={STAGGER_MS * (4 + index)}
            detail={<ProjectDetailPanel project={project} />}
          >
            <ProjectFace project={project} variant="compact" />
          </BentoCard>
        ))}

        <BentoCard
          label="ประสบการณ์และการศึกษา"
          hoverCapable={hoverCapable}
          delayMs={STAGGER_MS * (4 + otherProjects.length)}
          detail={<ExperienceDetail />}
        >
          <ExperienceFace />
        </BentoCard>

        {/* การ์ดนี้ไม่มี popup เพราะเนื้อหาคือลิงก์ที่ต้องกดได้ตรง ๆ */}
        <BentoCard
          label="ช่องทางติดต่อ"
          hoverCapable={hoverCapable}
          delayMs={STAGGER_MS * (5 + otherProjects.length)}
        >
          <ContactFace />
        </BentoCard>
      </div>
    </div>
  )
}
