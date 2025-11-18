import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const sections = [
  {
    title: 'Smart Home',
    points: [
      'Pakete & individuelle Automationen',
      'Energie-Monitoring & Effizienz',
      'Integration Home Assistant, KNX, Zigbee, Matter',
    ],
  },
  {
    title: 'Videoüberwachung / Sicherheit',
    points: [
      'Kameras, NVR, Zutrittskontrolle',
      'Benachrichtigungen & Remote-Zugriff',
      'Datenschutzgerechte Umsetzung',
    ],
  },
  {
    title: 'Remote IT & digitale Betreuung',
    points: [
      'Remote-Support & Monitoring',
      'Backups, Updates, Security',
      'Digitale Prozessberatung',
    ],
  },
  {
    title: 'Reparatur & Refurbish',
    points: [
      'Fehlerdiagnose, Ersatzteile',
      'Verlängerte Lebensdauer, weniger Elektroschrott',
      'Transparent & fair',
    ],
  },
  {
    title: 'Web & Landingpages',
    points: [
      'Info-Pages, Business-Websites, digitale Visitenkarten',
      'Landingpages mit klarer Conversion-Logik',
      'SEO-Basics & Performance optimiert',
    ],
  },
]

export default function Leistungen() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-3xl sm:text-4xl font-semibold">Leistungen</h1>
          <p className="mt-2 text-white/70">Übersicht über unsere Bereiche – modular kombinierbar.</p>

          <div className="mt-8 grid md:grid-cols-2 gap-6">
            {sections.map((s) => (
              <div key={s.title} className="rounded-xl bg-white/5 border border-white/10 p-6">
                <h3 className="text-xl font-semibold">{s.title}</h3>
                <ul className="mt-3 space-y-2 text-white/70 text-sm list-disc list-inside">
                  {s.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
