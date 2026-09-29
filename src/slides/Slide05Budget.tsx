import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts'
import SlideFrame from './SlideFrame'
import { BUDGET_CATEGORIES, TOTAL_BUDGET, formatINR } from '../data'

export default function Slide05Budget() {
  return (
    <SlideFrame title="Financial Dashboard" kicker="The ask">
      <div className="grid items-start gap-8 lg:grid-cols-5">
        <div className="relative h-80 lg:col-span-2 lg:h-[420px]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie data={BUDGET_CATEGORIES} dataKey="amount" nameKey="label" innerRadius="62%" outerRadius="95%" paddingAngle={2} stroke="none">
                {BUDGET_CATEGORIES.map((c) => (<Cell key={c.id} fill={c.color} />))}
              </Pie>
              <Tooltip
                formatter={(v) => formatINR(Number(v))}
                contentStyle={{ background: '#0b1220', border: '1px solid #1e293b', borderRadius: 12, color: '#e6edf7' }}
                itemStyle={{ color: '#e6edf7' }}
              />
            </PieChart>
          </ResponsiveContainer>
          <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center text-center">
            <span className="text-sm text-slate-400">Total budget</span>
            <span className="font-display text-2xl font-extrabold text-white md:text-3xl">{formatINR(TOTAL_BUDGET)}</span>
          </div>
        </div>
        <ul className="grid gap-x-6 sm:grid-cols-2 lg:col-span-3">
          {BUDGET_CATEGORIES.map((c) => (
            <li key={c.id} className="flex items-start gap-3 border-b border-white/5 py-2.5">
              <span className="mt-1.5 h-3 w-3 shrink-0 rounded-full" style={{ background: c.color }} />
              <div className="min-w-0 flex-1">
                <div className="flex justify-between gap-2 text-sm">
                  <span className="font-medium text-slate-100">{c.label}</span>
                  <span className="shrink-0 font-display font-bold text-white">{formatINR(c.amount)}</span>
                </div>
                <p className="text-xs text-slate-500">{c.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </SlideFrame>
  )
}
