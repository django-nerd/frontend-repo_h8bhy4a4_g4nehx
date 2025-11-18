import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Kontakt() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main className="pt-20">
        <section className="max-w-7xl mx-auto px-6 py-10">
          <h1 className="text-3xl sm:text-4xl font-semibold">Kontakt</h1>
          <p className="mt-2 text-white/70 max-w-2xl">WhatsApp, E-Mail oder Formular – wir melden uns schnell.</p>

          <div className="mt-8 grid md:grid-cols-2 gap-6">
            <div className="rounded-xl bg-white/5 border border-white/10 p-6">
              <h3 className="text-lg font-semibold">Direkt</h3>
              <div className="mt-3 flex flex-wrap gap-3">
                <a href="https://wa.me/4915750000000?text=Hallo%20digITall!%20Ich%20habe%20eine%20Anfrage." target="_blank" rel="noreferrer" className="inline-flex px-4 py-2 rounded-md bg-[#1abcb5] text-black font-semibold">WhatsApp</a>
                <a href="mailto:hi@digitall.example?subject=Anfrage%20digITall" className="inline-flex px-4 py-2 rounded-md border border-white/10">E-Mail</a>
              </div>

              <div className="mt-6 text-white/70 text-sm">
                <p>Standort: Essen (Ruhrgebiet)</p>
                <p>Ladenlokal: Platzhalter</p>
              </div>
            </div>

            <div className="rounded-xl bg-white/5 border border-white/10 p-6">
              <h3 className="text-lg font-semibold">Kontaktformular</h3>
              <form className="mt-3 grid gap-3">
                <input className="bg-black/40 border border-white/15 rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-[#1abcb5]/40" placeholder="Name" />
                <input className="bg-black/40 border border-white/15 rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-[#1abcb5]/40" placeholder="E-Mail" />
                <textarea rows="5" className="bg-black/40 border border-white/15 rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-[#1abcb5]/40" placeholder="Nachricht" />
                <button type="button" className="mt-1 inline-flex justify-center px-4 py-2 rounded-md bg-[#1abcb5] text-black font-semibold">Abschicken</button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
