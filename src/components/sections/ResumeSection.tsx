import { educationExperience, workExperience } from '../../data/experience'
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
import Chip from '../ui/Chip'
import ColumnTitle from '../ui/ColumnTitle'
import Icon from '../ui/Icon'
import SkillBar from '../ui/SkillBar'
import TimelineEntry from '../ui/TimelineEntry'

function BulletList({ list }: { list: SkillList }) {
  return (
    <ul className="mt-4 space-y-2">
      {list.items.map((item) => (
        <li
          key={item}
          className="text-fg-muted flex gap-2 text-xs leading-relaxed"
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
                    <p className="text-fg-subtle text-[11px] font-semibold">
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
            <div>
              <ColumnTitle>Experience</ColumnTitle>
              <ol className="mt-5">
                {workExperience.map((item) => (
                  <TimelineEntry key={item.id} item={item} />
                ))}
              </ol>
            </div>

            <div>
              <ColumnTitle>Education</ColumnTitle>
              <ol className="mt-5">
                {educationExperience.map((item) => (
                  <TimelineEntry key={item.id} item={item} />
                ))}
              </ol>
            </div>
          </div>

          <div className="space-y-8">
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
              <ul className="mt-4 flex flex-wrap gap-2">
                {hobbies.map((hobby) => (
                  <li key={hobby.id}>
                    <Chip>
                      <Icon name={hobby.icon} className="mr-1.5 size-3.5" />
                      {hobby.label}
                    </Chip>
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
