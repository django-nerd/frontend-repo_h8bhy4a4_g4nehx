export default function Testimonials() {
  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-[#0b0b0b] to-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold text-white">Kundenstimmen</h2>
            <p className="mt-2 text-white/70">Echte Bewertungen – folgen in Kürze.</p>
          </div>
          <a href="/kontakt" className="hidden sm:inline-flex px-4 py-2 rounded-md border border-white/10 text-white hover:bg-white/10">Kontakt</a>
        </div>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1,2,3].map((i) => (
            <div key={i} className="rounded-xl bg-white/5 border border-white/10 p-6">
              <div className="h-3 w-24 rounded bg-[#1abcb5]/30" />
              <p className="mt-4 text-white/80 text-sm leading-relaxed">Platzhalter für Kundenfeedback. Qualität, Verlässlichkeit und klare Kommunikation stehen im Fokus.</p>
              <div className="mt-4 h-2 w-12 rounded bg-[#ff8a00]/60" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
