import type { ReactNode } from 'react'

export function HexGrid({ opacity = 0.16 }: { opacity?: number }) {
  return (
    <svg className="pointer-events-none absolute inset-0 h-full w-full" aria-hidden>
      <defs>
        <pattern id="hex" width="56" height="100" patternUnits="userSpaceOnUse">
          <path d="M28 66L0 50L0 16L28 0L56 16L56 50L28 66L28 100" fill="none" stroke="#facc15" strokeOpacity={opacity} />
          <path d="M28 0L28 34L0 50L0 84L28 100L56 84L56 50L28 34" fill="none" stroke="#facc15" strokeOpacity={opacity} />
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
    <section className="relative h-full w-full overflow-x-hidden overflow-y-auto bg-[#05070d]">
      <HexGrid opacity={0.1} />
      <div className="relative mx-auto flex min-h-full w-full max-w-[90rem] flex-col px-[clamp(1.25rem,5vw,5rem)] pb-36 pt-[clamp(2rem,5vh,3.5rem)]">
        {kicker && <p className="mb-2 text-sm font-medium text-yellow-300">{kicker}</p>}
        <h2 className="mb-8 max-w-5xl font-display text-3xl font-extrabold tracking-tight text-white md:text-5xl">{title}</h2>
        {children}
      </div>
    </section>
  )
}
