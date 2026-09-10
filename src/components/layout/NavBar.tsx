import { useEffect, useState } from 'react'
import { navSectionIds, navSections } from '../../data/navigation'
import { hero } from '../../data/profile'
import useActiveSection from '../../hooks/useActiveSection'
import { isUsableHref } from '../../lib/links'
import Icon from '../ui/Icon'
import ThemeToggle from './ThemeToggle'

/** ระยะที่เลื่อนแล้วถือว่าออกจากหัวหน้าแรก แถบเมนูจะทึบขึ้นเพื่อให้อ่านออก */
const SOLID_AFTER_PX = 24

export default function NavBar() {
  const activeId = useActiveSection(navSectionIds)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > SOLID_AFTER_PX)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const phoneHref = `tel:${hero.phone.replace(/[^\d+]/g, '')}`
  const hasPhone = isUsableHref(hero.phone)

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 motion-reduce:transition-none ${
        isScrolled
          ? 'border-line/60 bg-canvas/85 backdrop-blur-xl'
          : 'border-transparent'
      }`}
    >
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-10">
        <nav aria-label="เมนูหลัก" className="-mx-1 min-w-0 overflow-x-auto">
          <ul className="flex items-center gap-0.5 px-1 sm:gap-1">
            {navSections.map((section) => {
              const isActive = section.id === activeId
              return (
                <li key={section.id}>
                  <a
                    href={`#${section.id}`}
                    aria-current={isActive ? 'page' : undefined}
                    className={`inline-flex min-h-11 items-center rounded-lg px-2.5 text-sm font-medium whitespace-nowrap transition-colors duration-200 motion-reduce:transition-none sm:px-3 ${
                      isActive
                        ? 'text-brand-300'
                        : 'text-fg-subtle hover:text-fg'
                    }`}
                  >
                    {section.label}
                  </a>
                </li>
              )
            })}
          </ul>
        </nav>

        <div className="flex shrink-0 items-center gap-3">
          {hasPhone ? (
            <a
              href={phoneHref}
              className="text-fg-subtle hover:text-fg hidden items-center gap-2 text-xs transition-colors motion-reduce:transition-none sm:inline-flex"
            >
              <Icon name="phone" className="size-3.5" />
              {hero.phone}
            </a>
          ) : (
            <span className="text-fg-subtle hidden items-center gap-2 text-xs sm:inline-flex">
              <Icon name="phone" className="size-3.5" />
              {hero.phone}
            </span>
          )}

          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}
