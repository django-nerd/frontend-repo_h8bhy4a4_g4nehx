import { Shield, Home, Wrench, Globe, Cpu, Zap, Clock, Leaf } from 'lucide-react'

const pillars = [
  { icon: Clock, title: 'Schnelligkeit', desc: 'Kurze Wege, schnelle Umsetzung und direkter Support.' },
  { icon: Shield, title: 'Ehrlichkeit', desc: 'Transparente Beratung – ohne Buzzword-Bingo.' },
  { icon: Leaf, title: 'Nachhaltigkeit', desc: 'Refurbish statt Wegwerfen. Effiziente Systeme statt Overkill.' },
  { icon: Cpu, title: 'Tech-Know-how', desc: 'Von Smart Home bis Web – wir bauen, was wirklich funktioniert.' },
]

const areas = [
  { icon: Home, title: 'Smart & Secure Home/Office', points: ['Automationen & Szenen', 'Energie-Monitoring', 'Videoüberwachung'] },
  { icon: Wrench, title: 'Remote IT & Repair', points: ['Remote-Support', 'Troubleshooting', 'Refurbish & Upgrade'] },
  { icon: Globe, title: 'Web & Landingpages', points: ['Info-Pages', 'Business-Websites', 'Digitale Visitenkarten'] },
]

export default function Features() {
  return (
    <section className="relative py-20">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(60%_60%_at_80%_0%,#1abcb522,transparent)]" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-6">
          {areas.map(({ icon: Icon, title, points }) => (
            <div key={title} className="group rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.03] p-6 hover:border-[#1abcb5]/40 transition relative overflow-hidden">
              <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-[#1abcb5]/10 blur-xl" />
              <div className="flex items-center gap-3">
                <div className="h-11 w-11 rounded-xl bg-[#1abcb5]/15 flex items-center justify-center ring-1 ring-[#1abcb5]/30">
                  <Icon className="h-5 w-5 text-[#1abcb5]" />
                </div>
                <h3 className="text-white font-semibold text-lg">{title}</h3>
              </div>
              <ul className="mt-4 space-y-2 text-white/70 text-sm">
                {points.map((p) => (
                  <li key={p} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#1abcb5]" /> {p}
                  </li>
                ))}
              </ul>
              <div className="mt-6 inline-flex items-center text-[#1abcb5] text-sm font-medium">
                Mehr erfahren →
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <h2 className="text-white text-2xl font-bold mb-6">Warum digITall</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                <div className="h-10 w-10 rounded-lg bg-[#1abcb5]/10 flex items-center justify-center ring-1 ring-[#1abcb5]/30 mb-3">
                  <Icon className="h-5 w-5 text-[#1abcb5]" />
                </div>
                <h3 className="text-white font-semibold">{title}</h3>
                <p className="text-white/70 text-sm mt-2">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
