import { ScanLine, Megaphone, BadgeCheck, Cog } from 'lucide-react'
import SlideFrame from './SlideFrame'

const ITEMS = [
  { icon: ScanLine, color: 'text-yellow-300', stat: '10,000+', title: 'Verified Admissions Leads', body: 'Every ticket/entry verified via RFID for deep prospective student data.' },
  { icon: Megaphone, color: 'text-pink-300', stat: '1.5M+', title: 'Institutional Branding & PR', body: '1.5M+ Digital Impressions, National YouTube Broadcast.' },
  { icon: BadgeCheck, color: 'text-violet-300', stat: 'VIPs', title: 'High-Level Validation', body: 'Hosting Chief Minister, IT Minister, Education Minister, and actor Nivin Pauly.' },
  { icon: Cog, color: 'text-emerald-300', stat: 'Zero', title: 'Turnkey Execution', body: 'Zero faculty burden; fully managed by the 15-cell HIVE operational engine.' },
]

export default function Slide06Roi() {
  return (
    <SlideFrame title="Scope of the Event & Partnership ROI" kicker="What Jain University gets">
      <div className="grid gap-5 md:grid-cols-2">
        {ITEMS.map(({ icon: Icon, color, stat, title, body }, i) => (
          <div key={title} className="rounded-3xl border border-white/10 bg-white/[0.03] p-7">
            <div className="mb-4 flex items-center justify-between">
              <Icon className={`h-8 w-8 ${color}`} />
              <span className="text-sm text-slate-500">Highlight {i + 1}</span>
            </div>
            <p className={`font-display text-4xl font-extrabold md:text-5xl ${color}`}>{stat}</p>
            <h3 className="mt-3 font-display text-xl font-bold text-white">{title}</h3>
            <p className="mt-2 text-slate-300">{body}</p>
          </div>
        ))}
      </div>
    </SlideFrame>
  )
}
