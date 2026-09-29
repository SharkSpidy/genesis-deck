export const TOTAL_BUDGET = 6_500_000 // ₹65,00,000

export interface PrizeLineItem { id: string; label: string; amount: number; note?: string; }
export interface PrizeGroup { id: string; title: string; amount: number; items?: PrizeLineItem[]; }
export interface BudgetCategory { id: string; label: string; amount: number; description: string; color: string; }

export const PRIZE_GROUPS: PrizeGroup[] = [
  {
    id: 'gaming',
    title: 'Gaming (Esports)',
    amount: 668_000,
    items: [
      { id: 'valorant', label: 'Valorant', amount: 200_000, note: 'Top 8 teams: 1L, 50k, 25k, rest 5k each' },
      { id: 'cod', label: 'Call of Duty', amount: 200_000, note: 'Top 8 teams: 1L, 50k, 25k, rest 5k each' },
      { id: 'pubg', label: 'PUBG', amount: 228_000, note: 'Top 25 teams: 80k, 40k, 20k, rest 4k each' },
      { id: 'pes', label: 'PES', amount: 40_000, note: 'Top 8 teams: 20k, 10k, 5k, rest 1k each' },
    ],
  },
  { id: 'band', title: 'Band Competition', amount: 230_000, items: [{id: 'band-prizes', label: 'Prizes', amount: 230000, note: '1st: 1L, 2nd: 80k, 3rd: 50k'}] },
  { id: 'hackathon', title: 'Hackathon', amount: 180_000, items: [{id: 'hack-prizes', label: 'Prizes', amount: 180000, note: '1st: 1L, 2nd: 50k, 3rd: 30k'}] },
  { id: 'film-reels', title: 'Film & Reels', amount: 210_000, items: [
      {id: 'film', label: 'Short Film', amount: 175000, note: '1st: 1L, 2nd: 50k, 3rd: 25k'},
      {id: 'reels', label: 'Reels', amount: 35000, note: '1st: 20k, 2nd: 10k, 3rd: 5k'}
  ]},
  { id: 'fashion-dance', title: 'Fashion & Dance', amount: 120_000 },
]

export const PRIZE_POOL_TOTAL = PRIZE_GROUPS.reduce((sum, g) => sum + g.amount, 0) // 1,408,000

export const BUDGET_CATEGORIES: BudgetCategory[] = [
  { id: 'prize-pool', label: 'Prize Pool', amount: PRIZE_POOL_TOTAL, description: 'Gaming, band, hackathon, film & reels, fashion and dance', color: '#22d3ee' },
  { id: 'esports-rigs', label: 'Esports Battle Stations', amount: 325_000, description: '10× RTX 4080/4090 rigs, 240Hz–360Hz displays, LAN infrastructure', color: '#34d399' },
  { id: 'celebrity', label: 'Celebrity & VIP Buffer', amount: 1_000_000, description: 'Appearance fees, hospitality, and travel contingency', color: '#a78bfa' },
  { id: 'stage-production', label: 'Stage & Production Logistics', amount: 1_100_000, description: 'Staging, sound, lighting, rigging, and crew logistics', color: '#fb923c' },
  { id: 'broadcast', label: 'YouTube Broadcast & Streaming Rig', amount: 225_000, description: 'Multi-cam capture, switcher, encoders, and caster desks', color: '#f472b6' },
  { id: 'marketing', label: 'Marketing & Digital Campaigns', amount: 420_000, description: 'Paid social, creator partnerships, and on-ground promo', color: '#facc15' },
  { id: 'tech-exhibits', label: 'Tech Exhibits & Media Production', amount: 300_000, description: 'Showcase builds, media walls, and content production', color: '#60a5fa' },
  { id: 'crew', label: 'Crew Honorarium', amount: 200_000, description: '100 crew × ₹2,000/head', color: '#4ade80' },
  { id: 'ticketing', label: 'Ticketing, RFID & Gate Security', amount: 150_000, description: 'Access control, RFID wristbands, and gate staffing', color: '#f87171' },
  { id: 'lanyards-tags', label: 'Lanyards & Tags', amount: 500_000, description: 'Event lanyards, badges, and attendee identification tags', color: '#c084fc' },
  { id: 'contingency', label: 'Contingency Buffer', amount: 600_000, description: 'Unallocated reserve for cost overruns', color: '#94a3b8' },
  { id: 'miscellaneous', label: 'Miscellaneous', amount: 272_000, description: 'Small incidentals to round the proposal to ₹65L', color: '#fbbf24' },
]

export function formatINR(amount: number): string { return `₹${amount.toLocaleString('en-IN')}` }
export function formatLakhs(amount: number, digits = 2): string { return `₹${(amount / 100_000).toFixed(digits)}L` }
