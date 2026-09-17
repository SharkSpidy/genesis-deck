type Row = {
  track: string
  field: string
  first: string
  second: string
  third: string
  rest: string
}

const ROWS: Row[] = [
  { track: 'Valorant & COD', field: 'Top 8 teams', first: '₹1,00,000', second: '₹50,000', third: '₹25,000', rest: '₹5,000 each' },
  { track: 'PUBG', field: 'Top 25 teams', first: '₹80,000', second: '₹40,000', third: '₹20,000', rest: '₹4,000 each' },
  { track: 'PES', field: 'Top 8 teams', first: '₹20,000', second: '₹10,000', third: '₹5,000', rest: '₹1,000 each' },
]

export default function Slide05Esports() {
  return (
    <section className="slide" id="slide-5">
      <div className="slide-head">
        <p className="kicker">Competitive gaming</p>
        <h2>The Esports Arena</h2>
        <p className="lede">
          Three titles, three formats, one prize structure built to reward depth of field — not
          just the podium.
        </p>
      </div>
      <table className="prize-table">
        <thead>
          <tr>
            <th>Track</th>
            <th>Field</th>
            <th>1st</th>
            <th>2nd</th>
            <th>3rd</th>
            <th>Remaining teams</th>
          </tr>
        </thead>
        <tbody>
          {ROWS.map((r) => (
            <tr key={r.track}>
              <td className="track">{r.track}</td>
              <td>{r.field}</td>
              <td className="gold">{r.first}</td>
              <td>{r.second}</td>
              <td>{r.third}</td>
              <td>{r.rest}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="prize-total">
        <span className="amt">₹4,68,000</span>
        <span className="txt">total prize pool across all three gaming tracks</span>
      </div>
    </section>
  )
}
