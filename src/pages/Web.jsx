import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Web() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main className="pt-20">
        <section className="max-w-7xl mx-auto px-6 py-10">
          <h1 className="text-3xl sm:text-4xl font-semibold">Web & Landingpages</h1>
          <p className="mt-2 text-white/70 max-w-2xl">Unterschied zwischen Info-Page, Landingpage und Website – inkl. Prozess und Preismodell.</p>

          <div className="mt-10 grid lg:grid-cols-3 gap-6">
            <div className="rounded-xl bg-white/5 border border-white/10 p-6">
              <h3 className="text-xl font-semibold">Info-Page</h3>
              <p className="mt-2 text-white/70 text-sm">Eine kompakte, moderne Seite mit allen wichtigen Infos – ideal für Veranstaltungen, temporäre Aktionen oder als digitale Visitenkarte.</p>
              <p className="mt-3 text-[#1abcb5] font-semibold">ab 299€</p>
            </div>
            <div className="rounded-xl bg-white/5 border border-white/10 p-6">
              <h3 className="text-xl font-semibold">Landingpage</h3>
              <p className="mt-2 text-white/70 text-sm">Fokus auf Conversion: klare Botschaft, starke CTAs, Tracking & Performance optimiert.</p>
              <p className="mt-3 text-[#1abcb5] font-semibold">ab 499€</p>
            </div>
            <div className="rounded-xl bg-white/5 border border-white/10 p-6">
              <h3 className="text-xl font-semibold">Business-Website</h3>
              <p className="mt-2 text-white/70 text-sm">Mehrseitige Website mit Struktur, SEO-Basics, Kontaktmöglichkeiten und skalierbarer Architektur.</p>
              <p className="mt-3 text-[#1abcb5] font-semibold">ab 1290€</p>
            </div>
          </div>

          <div className="mt-12 grid md:grid-cols-2 gap-6">
            <div className="rounded-xl bg-white/5 border border-white/10 p-6">
              <h3 className="text-lg font-semibold">Prozess</h3>
              <ol className="mt-3 text-white/70 text-sm space-y-2 list-decimal list-inside">
                <li>Briefing – Zielgruppe, Inhalt, Look & Feel</li>
                <li>Prototyp – klickbarer Entwurf im Browser</li>
                <li>Launch – feingeschliffen, performant, DSGVO-freundlich</li>
              </ol>
            </div>
            <div className="rounded-xl bg-white/5 border border-white/10 p-6">
              <h3 className="text-lg font-semibold">Beispiele / Mockups</h3>
              <div className="mt-3 grid grid-cols-2 gap-3">
                {[1,2,3,4].map((i) => (
                  <div key={i} className="h-28 rounded-lg bg-gradient-to-br from-[#1abcb5]/20 to-[#ff8a00]/20 border border-white/10" />
                ))}
              </div>
            </div>
          </div>

          <div className="my-12 flex flex-wrap gap-3">
            <a href="https://wa.me/4915750000000?text=Webprojekt%20anfragen" target="_blank" rel="noreferrer" className="inline-flex px-5 py-3 rounded-md bg-[#1abcb5] text-black font-semibold">Webprojekt anfragen</a>
            <a href="/kontakt" className="inline-flex px-5 py-3 rounded-md border border-white/10 text-white hover:bg-white/10">Kontakt aufnehmen</a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
