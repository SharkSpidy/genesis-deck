import { Ticket } from 'lucide-react'
import SlideFrame from './SlideFrame'

const TIERS = [
  { name: 'Silver', qty: 5000, color: 'text-slate-300', border: 'border-slate-400/40' },
  { name: 'Gold', qty: 3000, color: 'text-amber-300', border: 'border-amber-400/40' },
  { name: 'Diamond', qty: 2000, color: 'text-yellow-200', border: 'border-yellow-400/40' },
]

export default function Slide07Appendix() {
  return (
    <SlideFrame title="Ticketing Tiers" kicker="Appendix · Backup Data">
      <span className="-mt-4 mb-6 inline-block w-fit rounded-full border border-amber-400/50 bg-amber-400/10 px-4 py-1 font-display text-xs font-bold uppercase tracking-widest text-amber-300">
        Appendix / Backup Slide
      </span>
      
      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {TIERS.map((t) => (
          <div key={t.name} className={`rounded-2xl border ${t.border} bg-white/[0.03] p-6`}>
            <Ticket className={`mb-3 h-7 w-7 ${t.color}`} />
            <h3 className={`font-display text-2xl font-bold ${t.color}`}>{t.name}</h3>
            <p className="mt-3 text-xl font-semibold text-white">
              {t.qty.toLocaleString('en-IN')} tickets
            </p>
          </div>
        ))}
      </div>
    </SlideFrame>
  )
}