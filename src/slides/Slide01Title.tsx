import { HexGrid } from './SlideFrame'

export default function Slide01Title() {
  return (
    <section className="relative flex h-full w-full items-center justify-center overflow-hidden bg-[#05070d]">
      <HexGrid opacity={0.28} />
      <div className="absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/20 blur-[140px]" />
      <div className="relative px-6 pb-24 text-center">
        <h1 className="font-display text-6xl font-extrabold tracking-tighter text-white drop-shadow-[0_0_30px_rgba(34,211,238,0.55)] md:text-9xl">
          HIVE: <span className="text-cyan-300">Flagship Event</span>
        </h1>
        <p className="mx-auto mt-8 max-w-xl text-lg text-slate-300 md:text-2xl">
          Partnership &amp; Event Proposal for Jain University
        </p>
        <p className="mt-5 text-sm text-cyan-100/70">Fashion · Dance · Culture</p>
      </div>
    </section>
  )
}
