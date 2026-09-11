import {
  educationExperience,
  projectExperience,
  workExperience,
} from '../../data/experience'
import { hobbies, languages } from '../../data/profile'
import {
  capabilities,
  personalSkills,
  skillGroups,
  workingStyle,
} from '../../data/skills'
import type { SkillList } from '../../types/content'
import Section from '../layout/Section'
import SectionHeader from '../layout/SectionHeader'
import ColumnTitle from '../ui/ColumnTitle'
import Icon from '../ui/Icon'
import SkillBar from '../ui/SkillBar'
import TimelineEntry from '../ui/TimelineEntry'

function BulletList({ list }: { list: SkillList }) {
  return (
    <ul className="mt-4 space-y-2.5">
      {list.items.map((item) => (
        <li
          key={item}
          className="text-fg-muted flex gap-2 text-sm leading-relaxed"
        >
          <span aria-hidden="true" className="text-brand-400">
            &bull;
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}

export default function ResumeSection() {
  return (
    <Section id="resume" title="เรซูเม่" className="justify-center">
      <div className="mx-auto w-full max-w-7xl px-4 pt-24 pb-20 sm:px-6 lg:px-10">
        <SectionHeader eyebrow="Resume" title="ทักษะและประสบการณ์" />

        <div className="mt-10 grid gap-10 lg:grid-cols-3 lg:gap-x-12">
          <div className="space-y-8">
            <div>
              <ColumnTitle>Technical Skills</ColumnTitle>
              <div className="mt-4 space-y-5">
                {skillGroups.map((group) => (
                  <div key={group.id}>
                    <p className="text-fg-subtle text-xs font-semibold">
                      {group.title}
                    </p>
                    <ul className="mt-2 space-y-2.5">
                      {group.items.map((skill) => (
                        <SkillBar
                          key={skill.name}
                          name={skill.name}
                          level={skill.level}
                        />
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <ColumnTitle>Languages</ColumnTitle>
              <ul className="mt-4 space-y-2.5">
                {languages.map((language) => (
                  <SkillBar
                    key={language.name}
                    name={language.name}
                    level={language.level}
                    note={language.note}
                  />
                ))}
              </ul>
            </div>

            <div>
              <ColumnTitle>{personalSkills.title}</ColumnTitle>
              <BulletList list={personalSkills} />
            </div>
          </div>

          <div className="space-y-8">
            {workExperience.length > 0 && (
              <div>
                <ColumnTitle>Experience</ColumnTitle>
                <ol className="mt-5">
                  {workExperience.map((item) => (
                    <TimelineEntry key={item.id} item={item} />
                  ))}
                </ol>
              </div>
            )}

            {projectExperience.length > 0 && (
              <div>
                <ColumnTitle>Projects</ColumnTitle>
                <ol className="mt-5">
                  {projectExperience.map((item) => (
                    <TimelineEntry key={item.id} item={item} />
                  ))}
                </ol>
              </div>
            )}
          </div>

          <div className="space-y-8">
            <div>
              <ColumnTitle>Education</ColumnTitle>
              <ol className="mt-5">
                {educationExperience.map((item) => (
                  <TimelineEntry key={item.id} item={item} />
                ))}
              </ol>
            </div>

            <div>
              <ColumnTitle>{capabilities.title}</ColumnTitle>
              <BulletList list={capabilities} />
            </div>

            <div>
              <ColumnTitle>{workingStyle.title}</ColumnTitle>
              <BulletList list={workingStyle} />
            </div>

            <div>
              <ColumnTitle>Hobbies &amp; Interests</ColumnTitle>
              <ul className="mt-4 space-y-3">
                {hobbies.map((hobby) => (
                  <li key={hobby.id} className="flex gap-3">
                    <span className="border-line bg-fill text-brand-300 mt-0.5 inline-flex size-8 shrink-0 items-center justify-center rounded-lg border">
                      <Icon name={hobby.icon} className="size-3.5" />
                    </span>
                    <div className="min-w-0">
                      <p className="text-fg text-sm font-medium">
                        {hobby.label}
                      </p>
                      {hobby.note && (
                        <p className="text-fg-muted mt-0.5 text-xs leading-relaxed">
                          {hobby.note}
                        </p>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}
