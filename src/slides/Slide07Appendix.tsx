import { Ticket } from 'lucide-react'
import SlideFrame from './SlideFrame'
import { formatINR } from '../data'

const TIERS = [
  { name: 'Silver', qty: 5000, price: 300, color: 'text-slate-300', border: 'border-slate-400/40' },
  { name: 'Gold', qty: 3000, price: 500, color: 'text-amber-300', border: 'border-amber-400/40' },
  { name: 'Diamond', qty: 2000, price: 1000, color: 'text-cyan-300', border: 'border-cyan-400/40' },
]
const TOTAL = TIERS.reduce((s, t) => s + t.qty * t.price, 0)

export default function Slide07Appendix() {
  return (
    <SlideFrame title="Revenue Model" kicker="Appendix · Backup Data">
      <span className="-mt-4 mb-6 inline-block w-fit rounded-sm border border-amber-400/50 bg-amber-400/10 px-4 py-1 font-display text-xs font-bold uppercase text-amber-300">Appendix / Backup Slide</span>
      <div className="mb-8 rounded-sm border border-emerald-400/30 bg-emerald-400/10 p-6 md:p-8">
        <p className="text-slate-300">Target Ticket Income</p>
        <p className="font-display text-4xl font-extrabold text-white md:text-6xl">₹50 Lakhs <span className="text-2xl font-bold text-emerald-300 md:text-3xl">(Final Profit)</span></p>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        {TIERS.map((t) => (
          <div key={t.name} className={`rounded-sm border ${t.border} bg-white/[0.04] p-6`}>
            <Ticket className={`mb-3 h-7 w-7 ${t.color}`} />
            <h3 className={`font-display text-2xl font-bold ${t.color}`}>{t.name}</h3>
            <p className="mt-3 text-lg text-white">{t.qty.toLocaleString('en-IN')} tickets @ Rs. {t.price.toLocaleString('en-IN')}</p>
            <p className="mt-2 text-slate-400">{formatINR(t.qty * t.price)}</p>
          </div>
        ))}
      </div>
      <p className="mt-6 text-right text-lg text-slate-300">Total across tiers: <span className="font-display font-bold text-white">{formatINR(TOTAL)}</span></p>
    </SlideFrame>
  )
}
