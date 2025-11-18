const points = [
  { title: 'Schnelligkeit', text: 'Kurze Reaktionszeiten, pragmatische Lösungen – ohne Blabla.' },
  { title: 'Ehrlichkeit', text: 'Transparente Beratung, klare Preise, kein Vendor-Lock-in.' },
  { title: 'Nachhaltigkeit', text: 'Refurbish statt Wegwerfen, effiziente Systeme, lange Lebensdauer.' },
  { title: 'Tech-Know-how', text: 'Raspberry, Arduino, Smart Home, Web – aus einer Hand.' },
]

export default function WhyUs() {
  return (
    <section className="py-16 sm:py-24 bg-[#0b0b0b]">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-2xl sm:text-3xl font-semibold text-white">Warum digITall</h2>
        <p className="mt-2 text-white/70 max-w-2xl">Remote-first Dienstleister aus Essen – klar, schnell, zukunftsorientiert.</p>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {points.map((p) => (
            <div key={p.title} className="rounded-xl bg-white/5 border border-white/10 p-6">
              <h3 className="text-white font-semibold">{p.title}</h3>
              <p className="mt-2 text-white/70 text-sm">{p.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
