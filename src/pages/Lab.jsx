import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Lab() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main className="pt-20">
        <section className="max-w-7xl mx-auto px-6 py-10">
          <h1 className="text-3xl sm:text-4xl font-semibold">Innovation Lab</h1>
          <p className="mt-2 text-white/70 max-w-2xl">Future Tech für dein Zuhause und dein Business – Raspberry Pi & Arduino Projekte.</p>

          <div className="mt-8 grid md:grid-cols-3 gap-6">
            {[{t:'Energy Dashboard'},{t:'Monitoring'},{t:'Automationen'}].map((c) => (
              <div key={c.t} className="rounded-xl bg-white/5 border border-white/10 p-6">
                <div className="h-28 rounded-lg bg-gradient-to-br from-[#1abcb5]/20 to-[#ff8a00]/20 border border-white/10" />
                <h3 className="mt-4 text-lg font-semibold">{c.t}</h3>
                <p className="mt-2 text-white/70 text-sm">Showcase & Live-Demos folgen – maßgeschneidert für dein Setup.</p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
