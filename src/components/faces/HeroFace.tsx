import { hero } from '../../data/profile'

export default function HeroFace() {
  return (
    <div className="flex h-full min-h-0 flex-col justify-center gap-4 sm:flex-row sm:items-center sm:gap-6">
      {hero.imageSrc ? (
        <img
          src={hero.imageSrc}
          alt={hero.imageAlt}
          className="size-20 shrink-0 rounded-2xl border border-white/10 object-cover sm:size-28 lg:size-32"
        />
      ) : (
        <div
          role="img"
          aria-label={hero.imageAlt}
          className="from-brand-500/25 to-accent-500/15 flex size-20 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-gradient-to-br sm:size-28 lg:size-32"
        >
          <span className="text-fg text-xl font-bold tracking-wide sm:text-2xl">
            {hero.initials}
          </span>
        </div>
      )}

      <div className="min-w-0">
        <p className="text-fg-subtle line-clamp-1 text-[11px] font-medium tracking-[0.18em] uppercase">
          {hero.status}
        </p>
        <h1 className="text-fg mt-1.5 text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl xl:text-5xl">
          {hero.name}
        </h1>
        <p className="text-brand-300 mt-1.5 line-clamp-2 text-sm font-semibold sm:text-base">
          {hero.headline}
        </p>
        <p className="text-fg-muted mt-2 line-clamp-3 text-sm leading-relaxed">
          {hero.intro}
        </p>
      </div>
    </div>
  )
}
