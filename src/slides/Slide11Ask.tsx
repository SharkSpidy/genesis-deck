import Hex from '../components/Hex'

const WE_ASK = [
  'Confirmed February dates and campus grounds for a multi-day footprint',
  'Access for a hackathon hall, esports arena space, and an outdoor stage area',
  'Coordination on power, security and campus logistics with our discipline team',
  'Institutional sign-off to enable government and guest coordination',
]

const WE_BRING = [
  'Full production across all ten competitions, end to end',
  'Sponsorship-funded prize pools — over ₹10L already structured',
  'Guest and talent coordination for the government and film guest list',
  'A dedicated discipline and logistics function focused on protecting your campus',
]

export default function Slide11Ask() {
  return (
    <section className="slide" id="slide-11">
      <div className="slide-head">
        <p className="kicker">The partnership</p>
        <h2>What we're asking, and what we bring</h2>
      </div>
      <div className="ask-split">
        <div className="ask-col">
          <h3>What we're asking of Jain University</h3>
          <ul>
            {WE_ASK.map((item) => (
              <li key={item}>
                <Hex />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="ask-col we-bring">
          <h3>What HIVE brings</h3>
          <ul>
            {WE_BRING.map((item) => (
              <li key={item}>
                <Hex />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
