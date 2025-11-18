import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Ueber() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main className="pt-20">
        <section className="max-w-7xl mx-auto px-6 py-10">
          <h1 className="text-3xl sm:text-4xl font-semibold">Über digITall</h1>
          <div className="mt-4 grid md:grid-cols-2 gap-6">
            <div className="rounded-xl bg-white/5 border border-white/10 p-6">
              <h3 className="text-lg font-semibold">Wer wir sind</h3>
              <p className="mt-2 text-white/70 text-sm">Ein remote-first Tech-Dienstleister aus dem Ruhrgebiet. Klar, pragmatisch, zukunftsorientiert.</p>
            </div>
            <div className="rounded-xl bg-white/5 border border-white/10 p-6">
              <h3 className="text-lg font-semibold">Remote-first Ansatz</h3>
              <p className="mt-2 text-white/70 text-sm">Effiziente Prozesse, schnelle Reaktionszeiten – Support europaweit, Umsetzung lokal & remote.</p>
            </div>
            <div className="rounded-xl bg-white/5 border border-white/10 p-6">
              <h3 className="text-lg font-semibold">Standort Ruhrgebiet</h3>
              <p className="mt-2 text-white/70 text-sm">Verankert in Essen, unterwegs im gesamten Ruhrgebiet – mit Hands-on Mentalität.</p>
            </div>
            <div className="rounded-xl bg-white/5 border border-white/10 p-6">
              <h3 className="text-lg font-semibold">Werte</h3>
              <p className="mt-2 text-white/70 text-sm">Klarheit, Pragmatismus, Zukunftsorientierung – wir bauen Lösungen, die wirken.</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
