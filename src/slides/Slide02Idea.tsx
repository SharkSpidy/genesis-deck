import { Code2, Gamepad2, sneaker, Clapperboard, Music, Car } from 'lucide-react'
import SlideFrame from './SlideFrame'

const ARENAS = [
  { icon: Code2, name: 'Hackathon', sub: '75 Teams / 300 Participants', color: 'text-cyan-300' },
  { icon: Gamepad2, name: 'Esports Arena', sub: 'Valorant, Call of Duty, PUBG, PES', color: 'text-emerald-300' },
  { icon: sneaker, name: 'Dance & Fashion', sub: 'Dance and fashion competitions', color: 'text-pink-300' },
  { icon: Clapperboard, name: 'Film & Reels', sub: 'Short film and reels track', color: 'text-amber-300' },
  { icon: Music, name: 'Band Competition', sub: 'Live band finals', color: 'text-violet-300' },
  { icon: Car, name: 'Auto-Show & Pro-Show', sub: 'Headline evening show', color: 'text-orange-300' },
]

export default function Slide02Idea() {
  return (
    <SlideFrame title="Six Worlds, One Campus" kicker="The idea">
      <p className="max-w-3xl text-lg leading-relaxed text-slate-300 md:text-xl">
        HIVE stitches a hackathon, three esports arenas, dance and fashion competitions, a short film and reels track,
        a band competition, and a headline auto-show and pro-show into a single continuous event.
      </p>
      <div className="mt-6 inline-flex w-fit items-center rounded-full border border-cyan-400/50 bg-cyan-400/10 px-5 py-2 font-display text-sm font-bold text-cyan-200">
        ZERO PRE-EVENTS. Pure Finals Only.
      </div>
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {ARENAS.map(({ icon: Icon, name, sub, color }) => (
          <div key={name} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <Icon className={`mb-4 h-8 w-8 ${color}`} />
            <h3 className="font-display text-xl font-bold text-white">{name}</h3>
            <p className="mt-1 text-slate-400">{sub}</p>
          </div>
        ))}
      </div>
    </SlideFrame>
  )
}
