import { hero } from '../../data/profile'
import useIntroReady from '../../hooks/useIntroReady'
import Button from '../ui/Button'
import Photo from '../ui/Photo'
import Section from '../layout/Section'
import SocialRail from '../layout/SocialRail'

export default function HomeSection() {
  const introReady = useIntroReady()

  return (
    <Section id="home" title="หน้าแรก" className="overflow-hidden">
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        <Photo
          src={hero.imageSrc}
          alt={hero.imageAlt}
          showCaption={false}
          className="size-full"
        />
        {/*
         * ไล่สีทับสองชั้น: จากซ้ายเพื่อให้ตัวอักษรอ่านออกไม่ว่ารูปจะสว่างแค่ไหน
         * และจากล่างเพื่อเชื่อมเข้ากับ section ถัดไปอย่างไม่มีรอยต่อ
         */}
        <div className="from-canvas via-canvas/80 absolute inset-0 bg-gradient-to-r to-transparent" />
        <div className="from-canvas absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t to-transparent" />
      </div>

      <div className="mx-auto flex w-full max-w-7xl flex-1 items-center px-4 pt-28 pb-16 sm:px-6 lg:px-10">
        <div
          className={`max-w-2xl ${introReady ? 'animate-card-in' : 'opacity-0'}`}
        >
          <p className="text-fg-subtle text-xs font-medium tracking-[0.22em] uppercase">
            {hero.status}
          </p>

          <h1 className="mt-4">
            <span className="text-fg/85 block text-3xl font-light tracking-[0.12em] sm:text-4xl lg:text-5xl">
              {hero.firstName}
            </span>
            <span className="text-fg block text-5xl font-black tracking-tight sm:text-6xl lg:text-7xl">
              {hero.lastName}
            </span>
          </h1>

          <p className="text-brand-300 mt-3 text-xs font-semibold tracking-[0.28em] uppercase sm:text-sm">
            {hero.headline}
          </p>

          <p className="text-fg-muted mt-6 max-w-xl text-sm leading-relaxed sm:text-base">
            {hero.intro}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="#resume" variant="outline" pill>
              Resume
            </Button>
            <Button href="#portfolio" variant="outline" pill>
              Portfolio
            </Button>
          </div>
        </div>
      </div>

      <div className="mx-auto flex w-full max-w-7xl flex-wrap items-center justify-between gap-4 px-4 pb-10 sm:px-6 lg:px-10">
        <SocialRail />
        <p className="text-fg-subtle text-xs">{hero.location}</p>
      </div>
    </Section>
  )
}
