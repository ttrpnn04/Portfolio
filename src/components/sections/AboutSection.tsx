import { about } from '../../data/profile'
import { isUsableHref } from '../../lib/links'
import Section from '../layout/Section'
import SectionHeader from '../layout/SectionHeader'
import Icon from '../ui/Icon'
import Photo from '../ui/Photo'
import Tag from '../ui/Tag'

export default function AboutSection() {
  const emailHref = `mailto:${about.email}`

  return (
    <Section id="about" title="เกี่ยวกับฉัน" className="justify-center">
      <div className="mx-auto grid w-full max-w-7xl flex-1 items-center gap-10 px-4 pt-24 pb-8 sm:px-6 lg:grid-cols-[minmax(0,1fr)_auto] lg:gap-16 lg:px-10">
        <div>
          <SectionHeader eyebrow="About" title="เกี่ยวกับฉัน">
            {isUsableHref(emailHref) ? (
              <a
                href={emailHref}
                className="text-fg-subtle hover:text-brand-300 inline-flex items-center gap-2 text-sm transition-colors motion-reduce:transition-none"
              >
                <Icon name="email" className="size-4" />
                {about.email}
              </a>
            ) : (
              <span className="text-fg-subtle inline-flex items-center gap-2 text-sm">
                <Icon name="email" className="size-4" />
                {about.email}
              </span>
            )}
          </SectionHeader>

          <div className="mt-8 space-y-4">
            {about.paragraphs.map((paragraph, index) => (
              <p key={index} className="text-fg-muted text-sm leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="mt-8">
            <h3 className="text-fg-subtle text-xs font-semibold tracking-[0.2em] uppercase">
              ตำแหน่งที่กำลังมองหา
            </h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {about.targetRoles.map((role) => (
                <Tag key={role} tone="brand">
                  {role}
                </Tag>
              ))}
            </div>
          </div>

          <ul className="mt-8 space-y-4">
            {about.strengths.map((strength) => (
              <li key={strength.title} className="flex gap-3">
                <span
                  aria-hidden="true"
                  className="bg-brand-400 mt-2 size-1.5 shrink-0 rounded-full"
                />
                <div>
                  <h4 className="text-fg text-sm font-semibold">
                    {strength.title}
                  </h4>
                  <p className="text-fg-muted mt-1 text-xs leading-relaxed">
                    {strength.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="order-first flex justify-center lg:order-none lg:justify-end">
          <Photo
            src={about.portraitSrc}
            alt={about.portraitAlt}
            className="aspect-[5/6] w-48 rounded-2xl sm:w-56 lg:w-72"
          />
        </div>
      </div>

      <div className="mx-auto w-full max-w-7xl px-4 pb-12 sm:px-6 lg:px-10">
        <p className="text-fg-subtle flex items-center justify-center gap-2 text-center text-xs">
          <Icon name="location" className="size-4 shrink-0" />
          {about.address}
        </p>
      </div>
    </Section>
  )
}
