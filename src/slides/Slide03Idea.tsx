import { Code2, Gamepad2, Shirt, Footprints, Clapperboard, Music, Car } from 'lucide-react'
import SlideFrame from './SlideFrame'

const ARENAS = [
  { icon: Code2, name: 'Hackathon', sub: '75 Teams / 300 Participants', color: 'text-cyan-300' },
  { icon: Gamepad2, name: 'Esports Arena', sub: 'Valorant, Call of Duty, PUBG, PES', color: 'text-emerald-300' },
  { icon: Shirt, name: 'Fashion Runway', sub: 'Original looks, styling and a live runway', color: 'text-rose-300', image: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=800&q=80', alt: 'Fashion model walking a runway' },
  { icon: Footprints, name: 'Dance Showcase', sub: 'Solo and crew performances across styles', color: 'text-amber-200', image: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=800&q=80', alt: 'Dance performance under stage lights' },
  { icon: Clapperboard, name: 'Film & Reels', sub: 'Short film and reels track', color: 'text-amber-300' },
  { icon: Music, name: 'Band Competition', sub: 'Live band finals', color: 'text-violet-300' },
  { icon: Car, name: 'Auto-Show & Pro-Show', sub: 'Headline evening show', color: 'text-orange-300' },
]

export default function Slide03Idea() {
  return (
    <SlideFrame title="One Campus, Seven Stages" kicker="The idea">
      <p className="max-w-3xl text-lg leading-relaxed text-slate-300 md:text-xl">
        HIVE brings a hackathon, esports, fashion runway, dance, film, live music and a headline auto-show together
        as one continuous campus event.
      </p>
      <div className="mt-6 inline-flex w-fit items-center rounded-sm border border-rose-300/50 bg-rose-300/10 px-5 py-2 font-display text-sm font-bold text-rose-100">
        ZERO PRE-EVENTS. Pure Finals Only.
      </div>
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {ARENAS.map(({ icon: Icon, name, sub, color, image, alt }) => (
          <div key={name} className="rounded-sm border border-white/10 bg-white/[0.04] p-5 sm:p-6">
            {image && <img className="mb-5 aspect-[16/9] w-full object-cover" src={image} alt={alt} />}
            <Icon className={`mb-4 h-8 w-8 ${color}`} />
            <h3 className="font-display text-xl font-bold text-white">{name}</h3>
            <p className="mt-1 text-slate-400">{sub}</p>
          </div>
        ))}
      </div>
    </SlideFrame>
  )
}
