import { Users, Landmark, Radio } from 'lucide-react'
import SlideFrame from './SlideFrame'

const VIPS = ['Chief Minister', 'IT Minister', 'Education Minister', 'Influencers', 'Director Crews', 'Content Creators', 'Celebrities', 'Media Houses', 'Industry Leaders', 'Investors', 'Venture Capitalists', 'Startup Founders']

export default function Slide03Value() {
  return (
    <SlideFrame title="What Jain University Gets" kicker="Value proposition">
      <div className="grid gap-4 lg:grid-cols-5">
        <div className="rounded-2xl border border-cyan-400/30 bg-gradient-to-br from-cyan-400/15 to-transparent p-6 lg:col-span-2">
          <Users className="mb-3 h-8 w-8 text-cyan-300" />
          <p className="font-display text-6xl font-extrabold text-white md:text-7xl">10,000+</p>
          <p className="mt-2 text-lg text-slate-300">verified student attendees on one campus</p>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 lg:col-span-3">
          <div className="mb-3 flex items-center gap-3">
            <Landmark className="h-7 w-7 text-violet-300" />
            <h3 className="font-display text-xl font-bold text-white">VIPs</h3>
          </div>
          <ul className="grid gap-x-4 sm:grid-cols-2 lg:grid-cols-3">
            {VIPS.map((v) => (<li key={v} className="border-b border-white/5 py-1.5 text-sm text-slate-300">{v}</li>))}
          </ul>
        </div>
        <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5 lg:col-span-5">
          <Radio className="h-8 w-8 shrink-0 text-pink-300" />
          <div>
            <h3 className="font-display text-lg font-bold text-white">Tier-1 Infrastructure Showcase</h3>
            <p className="mt-1 text-slate-300">Delivered through a live national broadcast.</p>
          </div>
        </div>
      </div>
    </SlideFrame>
  )
}
