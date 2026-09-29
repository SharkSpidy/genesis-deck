import { Trophy } from 'lucide-react'
import SlideFrame from './SlideFrame'
import { PRIZE_GROUPS, PRIZE_POOL_TOTAL, formatINR } from '../data'

export default function Slide04Prizes() {
  return (
    <SlideFrame title="Detailed Prize Pool" kicker="Competitions">
      <div className="mb-6 flex flex-wrap items-center gap-4">
        <Trophy className="h-10 w-10 text-yellow-300" />
        <p className="font-display text-4xl font-extrabold text-white md:text-6xl">{formatINR(PRIZE_POOL_TOTAL)}</p>
        <p className="text-slate-400">total prize pool</p>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {PRIZE_GROUPS.map((g) => (
          <div key={g.id} className={`rounded-2xl border border-white/10 bg-white/[0.03] p-5 ${g.id === 'gaming' ? 'md:row-span-2' : ''}`}>
            <div className="mb-3 flex items-baseline justify-between gap-3">
              <h3 className="font-display text-lg font-bold text-white">{g.title}</h3>
              <span className="font-display font-bold text-yellow-300">{formatINR(g.amount)}</span>
            </div>
            {g.items?.map((it) => (
              <div key={it.id} className="border-t border-white/5 py-2 text-sm">
                <div className="flex justify-between text-slate-200"><span>{it.label}</span><span>{formatINR(it.amount)}</span></div>
                {it.note && <p className="text-slate-500">{it.note}</p>}
              </div>
            ))}
          </div>
        ))}
      </div>
    </SlideFrame>
  )
}
