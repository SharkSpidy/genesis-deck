import SlideFrame from './SlideFrame'

export default function Slide02About() {
  return (
    <SlideFrame title="What is HIVE?" kicker="About HIVE · The Briefing">
      <div className="max-w-4xl rounded-3xl border border-yellow-400/25 bg-gradient-to-br from-yellow-400/10 to-transparent p-8 md:p-12">
        <p className="text-lg leading-relaxed text-slate-200 md:text-2xl md:leading-relaxed">
          HIVE — Hub for Innovation, Ventures &amp; Experience — is a multidisciplinary community and ecosystem designed to bring together people with different interests, skills, ideas and ambitions. HIVE is built on the belief that people do not need to be the same to grow together. A developer, designer, filmmaker, marketer, communicator, entrepreneur, organiser or someone who is still discovering their interests can all have a place within the HIVE.
        </p>
      </div>
    </SlideFrame>
  )
}
