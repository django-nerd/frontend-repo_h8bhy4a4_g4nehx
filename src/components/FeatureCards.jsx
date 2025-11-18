import { Shield, Home, Wrench, Globe } from 'lucide-react'

const features = [
  {
    title: 'Smart & Secure Home/Office',
    desc: 'Automation, Energie-Monitoring und Videoüberwachung – sicher und effizient.',
    icon: <Home className="text-[#1abcb5]" size={24} />,
  },
  {
    title: 'Remote IT & Repair',
    desc: 'Schnelle Hilfe per Remote-Zugriff, Reparatur & Refurbish von Geräten.',
    icon: <Wrench className="text-[#1abcb5]" size={24} />,
  },
  {
    title: 'Web & Landingpages',
    desc: 'Moderne Websites, Info-Pages und konvertierende Landingpages.',
    icon: <Globe className="text-[#1abcb5]" size={24} />,
  },
]

export default function FeatureCards() {
  return (
    <section className="relative py-16 sm:py-24 bg-gradient-to-b from-black to-[#0b0b0b]">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#1abcb505] via-transparent to-transparent pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <div key={f.title} className="group relative rounded-xl bg-white/5 border border-white/10 p-6 backdrop-blur-sm hover:border-[#1abcb5]/40 transition-all">
              <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 bg-gradient-to-br from-[#1abcb5]/10 to-transparent transition-opacity" />
              <div className="relative flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#1abcb5]/10 flex items-center justify-center border border-[#1abcb5]/30">
                  {f.icon}
                </div>
                <h3 className="text-white font-semibold tracking-tight">{f.title}</h3>
              </div>
              <p className="relative mt-3 text-white/70 text-sm leading-relaxed">
                {f.desc}
              </p>
              <div className="relative mt-5 flex items-center gap-2 text-[#1abcb5] text-sm">
                <span>Mehr erfahren</span>
                <Shield size={16} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
