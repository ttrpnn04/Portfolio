import type { ReactNode } from 'react'
import { contactLinks, contactNote } from '../../data/profile'
import type { ContactIconName } from '../../types/content'
import FaceHeading from './FaceHeading'

const icons: Record<ContactIconName, ReactNode> = {
  document: (
    <path d="M14 3H7a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V7zm0 0v4h4M9.5 13h5M9.5 17h5" />
  ),
  github: (
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 4.44-2.05 4.44-4.09a4.7 4.7 0 0 0-1.36-3.29 4.41 4.41 0 0 0-.08-3.29s-1.28-.38-4.2 1.6a12.6 12.6 0 0 0-6.72 0C4.22 2.61 2.94 3 2.94 3a4.41 4.41 0 0 0-.08 3.29A4.7 4.7 0 0 0 1.5 9.58c0 2.03 1.3 3.73 4.44 4.08a3.37 3.37 0 0 0-.94 2.58V20" />
  ),
  linkedin: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M7 10.5V17M7 7.5v.01M11.5 17v-6.5M11.5 13.5a2.5 2.5 0 0 1 5 0V17" />
    </>
  ),
  email: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3.5 7l8.5 6 8.5-6" />
    </>
  ),
}

export default function ContactFace() {
  return (
    <>
      <FaceHeading eyebrow="Contact" title="ติดต่อ" />
      <p className="text-fg-subtle mt-1 line-clamp-1 text-[11px]">
        {contactNote}
      </p>
      <ul className="mt-2 grid grid-cols-1 gap-1.5 sm:grid-cols-2 lg:min-h-0 lg:flex-1">
        {contactLinks.map((link) => (
          <li key={link.id}>
            <a
              href={link.href}
              target={link.href.startsWith('mailto:') ? undefined : '_blank'}
              rel="noreferrer"
              className={`flex h-full min-h-11 items-center gap-2 rounded-lg border px-2 py-1.5 transition-colors duration-150 motion-reduce:transition-none ${
                link.primary
                  ? 'border-brand-500 bg-brand-600 hover:bg-brand-500 text-white'
                  : 'border-line text-fg-muted hover:border-line-strong hover:text-fg hover:bg-white/[0.06]'
              }`}
            >
              <svg
                className="size-4 shrink-0"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                {icons[link.icon]}
              </svg>
              <span className="min-w-0">
                <span className="block text-[11px] font-semibold">
                  {link.label}
                </span>
                <span
                  className={`block truncate text-[10px] ${
                    link.primary ? 'text-white/85' : 'text-fg-subtle'
                  }`}
                >
                  {link.value}
                </span>
              </span>
            </a>
          </li>
        ))}
      </ul>
    </>
  )
}
