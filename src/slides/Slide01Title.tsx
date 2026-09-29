import { HexGrid } from './SlideFrame'

export default function Slide01Title() {
  return (
    <section className="relative h-full w-full overflow-y-auto overflow-x-hidden bg-[#151211]">
      <div className="absolute inset-0 grid grid-cols-2 opacity-35" aria-hidden>
        <img className="h-full w-full object-cover object-center" src="https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=1100&q=85" alt="" />
        <img className="h-full w-full object-cover object-center" src="https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=1100&q=85" alt="" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-[#151211] via-[#151211]/90 to-[#151211]/35" />
      <HexGrid opacity={0.14} />
      <div className="relative mx-auto flex min-h-full w-full max-w-[90rem] flex-col justify-center px-[clamp(1.25rem,5vw,5rem)] pb-36 pt-12 lg:flex-row lg:items-center lg:gap-12">
        <div className="max-w-4xl py-8 lg:w-[58%]">
          <p className="mb-6 text-xs font-bold uppercase text-rose-200 sm:text-sm">Jain University · Partnership &amp; Event Proposal</p>
          <h1 className="font-display text-6xl font-semibold leading-[0.88] text-[#fff6ec] sm:text-7xl lg:text-8xl">
            HIVE:<br /><span className="text-rose-200">GENESIS 27</span>
          </h1>
          <p className="mt-8 max-w-xl text-base leading-relaxed text-white/80 sm:text-xl">
            A campus-wide celebration of ideas, style, sound and movement.
          </p>
          <div className="mt-8 flex flex-wrap gap-x-5 gap-y-2 text-xs font-semibold uppercase text-white/65 sm:text-sm">
            <span>Runway</span><span>Dance</span><span>Culture</span><span>Competition</span>
          </div>
        </div>
        <div className="hidden h-[min(68vh,42rem)] w-[42%] grid-cols-[1.2fr_0.8fr] items-center gap-3 lg:grid">
          <div className="h-[88%] overflow-hidden rounded-sm border border-white/20">
            <img className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=900&q=85" alt="Fashion model on a runway" />
          </div>
          <div className="mt-24 h-[72%] overflow-hidden rounded-sm border border-white/20">
            <img className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=700&q=85" alt="Live dance performance" />
          </div>
        </div>
      </div>
    </section>
  )
}
