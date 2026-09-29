import { Users, Landmark, Radio } from 'lucide-react'
import SlideFrame from './SlideFrame'

const VIPS = ['Chief Minister', 'IT Minister', 'Education Minister', 'Nivin Pauly', 'Director Crews']

export default function Slide03Value() {
  return (
    <SlideFrame title="What Jain University Gets" kicker="Value proposition">
      <div className="grid gap-6 lg:grid-cols-5">
        <div className="rounded-3xl border border-cyan-400/30 bg-gradient-to-br from-cyan-400/15 to-transparent p-8 lg:col-span-3">
          <Users className="mb-4 h-9 w-9 text-cyan-300" />
          <p className="font-display text-6xl font-extrabold text-white md:text-8xl">10,000+</p>
          <p className="mt-3 text-xl text-slate-300">verified student attendees on one campus</p>
        </div>
        <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 lg:col-span-2">
          <Landmark className="mb-4 h-9 w-9 text-violet-300" />
          <h3 className="mb-4 font-display text-xl font-bold text-white">VIPs</h3>
          <ul className="space-y-2 text-lg text-slate-300">
            {VIPS.map((v) => (<li key={v} className="border-b border-white/5 pb-2">{v}</li>))}
          </ul>
        </div>
        <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 lg:col-span-5">
          <Radio className="mb-4 h-9 w-9 text-pink-300" />
          <h3 className="font-display text-xl font-bold text-white">Tier-1 Infrastructure Showcase</h3>
          <p className="mt-2 text-lg text-slate-300">Delivered through a live national broadcast.</p>
        </div>
      </div>
    </SlideFrame>
  )
}
