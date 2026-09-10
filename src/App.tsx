import ContactFooter from './components/layout/ContactFooter'
import NavBar from './components/layout/NavBar'
import IntroProvider from './components/layout/IntroProvider'
import AboutSection from './components/sections/AboutSection'
import HomeSection from './components/sections/HomeSection'
import PortfolioSection from './components/sections/PortfolioSection'
import ResumeSection from './components/sections/ResumeSection'

export default function App() {
  return (
    <IntroProvider>
      {/* isolate กันไม่ให้ชั้นพื้นหลัง -z-10 ตกไปอยู่หลังพื้นหลังของ <body> */}
      <div className="relative isolate">
        <div
          aria-hidden="true"
          className="pointer-events-none fixed inset-0 -z-10"
          style={{
            opacity: 'var(--page-glow-opacity)',
            backgroundImage:
              'radial-gradient(60rem 40rem at 10% 0%, color-mix(in oklab, var(--color-brand-500) 14%, transparent), transparent 65%), radial-gradient(45rem 35rem at 95% 100%, color-mix(in oklab, var(--color-accent-500) 12%, transparent), transparent 65%)',
          }}
        />

        <NavBar />

        <main>
          <HomeSection />
          <AboutSection />
          <ResumeSection />
          <PortfolioSection />
        </main>

        <ContactFooter />
      </div>
    </IntroProvider>
  )
}
