import { contactLinks, contactNote, fullName } from '../../data/profile'
import { isUsableHref } from '../../lib/links'
import Icon from '../ui/Icon'

const itemClasses =
  'flex min-h-16 items-center gap-3 rounded-xl border px-4 py-3 transition-colors duration-200 motion-reduce:transition-none'

export default function ContactFooter() {
  return (
    <footer className="border-line/60 border-t">
      <div className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-10">
        <p className="text-brand-300 text-xs font-semibold tracking-[0.3em] uppercase">
          Contact
        </p>
        <h2 className="text-fg mt-2 text-2xl font-bold tracking-tight sm:text-3xl">
          ติดต่อได้เลย
        </h2>
        <p className="text-fg-muted mt-3 max-w-2xl text-sm leading-relaxed">
          {contactNote}
        </p>

        <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {contactLinks.map((link) => {
            const toneClasses = link.primary
              ? 'border-brand-500 bg-brand-600 text-white'
              : 'border-line text-fg-muted'

            const content = (
              <>
                <Icon name={link.icon} className="size-5 shrink-0" />
                <span className="min-w-0">
                  <span className="block text-xs font-semibold">
                    {link.label}
                  </span>
                  {/*
                   * ไม่ลดความทึบของตัวอักษรขาวบนพื้นปุ่ม เพราะแค่ 13.5px
                   * ที่ opacity 85% ก็ตกเกณฑ์ contrast แล้ว ใช้น้ำหนักฟอนต์
                   * แยกลำดับความสำคัญแทน
                   */}
                  <span
                    className={`block truncate text-xs ${
                      link.primary ? 'text-white' : 'text-fg-subtle'
                    }`}
                  >
                    {link.value}
                  </span>
                </span>
              </>
            )

            return (
              <li key={link.id}>
                {isUsableHref(link.href) ? (
                  <a
                    href={link.href}
                    target={
                      link.href.startsWith('mailto:') ? undefined : '_blank'
                    }
                    rel="noopener noreferrer"
                    className={`${itemClasses} ${toneClasses} ${
                      link.primary
                        ? 'hover:bg-brand-700'
                        : 'hover:border-line-strong hover:text-fg hover:bg-fill-hover'
                    }`}
                  >
                    {content}
                  </a>
                ) : (
                  <span className={`${itemClasses} ${toneClasses} opacity-50`}>
                    {content}
                  </span>
                )}
              </li>
            )
          })}
        </ul>

        <p className="text-fg-subtle mt-12 text-xs">
          &copy; {new Date().getFullYear()} {fullName}
        </p>
      </div>
    </footer>
  )
}
