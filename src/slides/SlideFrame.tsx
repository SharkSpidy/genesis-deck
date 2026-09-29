import type { ReactNode } from 'react'

export function HexGrid({ opacity = 0.16 }: { opacity?: number }) {
  return (
    <svg className="pointer-events-none absolute inset-0 h-full w-full" aria-hidden>
      <defs>
        <pattern id="hex" width="72" height="72" patternUnits="userSpaceOnUse">
          <path d="M72 0H0V72" fill="none" stroke="#f2c4b8" strokeOpacity={opacity} />
        </pattern>
        <radialGradient id="fade" cx="50%" cy="45%" r="70%">
          <stop offset="0%" stopColor="#fff" stopOpacity="1" />
          <stop offset="100%" stopColor="#fff" stopOpacity="0" />
        </radialGradient>
        <mask id="m"><rect width="100%" height="100%" fill="url(#fade)" /></mask>
      </defs>
      <rect width="100%" height="100%" fill="url(#hex)" mask="url(#m)" />
    </svg>
  )
}

export default function SlideFrame({ title, kicker, children }: { title: string; kicker?: string; children: ReactNode }) {
  return (
    <section className="relative h-full w-full overflow-x-hidden overflow-y-auto bg-[#151211]">
      <HexGrid opacity={0.1} />
      <div className="relative mx-auto flex min-h-full w-full max-w-[90rem] flex-col px-[clamp(1.25rem,5vw,5rem)] pb-36 pt-[clamp(2rem,5vh,3.5rem)]">
        {kicker && <p className="mb-3 text-xs font-semibold uppercase text-rose-300">{kicker}</p>}
        <h2 className="mb-8 max-w-5xl font-display text-4xl font-bold leading-tight text-[#fff6ec] sm:text-5xl md:mb-10 md:text-6xl">{title}</h2>
        {children}
      </div>
    </section>
  )
}
