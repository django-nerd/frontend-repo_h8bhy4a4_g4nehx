import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative h-[88vh] min-h-[560px] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/KeusF4lUkfKzhtGY/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black pointer-events-none"></div>

      <div className="relative h-full max-w-7xl mx-auto px-6 flex items-center">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-6">
            <span className="w-2 h-2 rounded-full bg-[#1abcb5] shadow-[0_0_18px_#1abcb5]"></span>
            <span className="text-xs text-white/80">Remote-first Tech aus dem Ruhrgebiet</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-white tracking-tight leading-tight drop-shadow-[0_8px_45px_rgba(26,188,181,0.25)]">
            Smart. Secure. Sustainable.
          </h1>
          <p className="mt-4 text-white/80 text-base sm:text-lg max-w-2xl">
            IT, Smart Home, Monitoring und moderne Weblösungen – lokal in Essen, remote überall.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="https://wa.me/4915750000000?text=Hallo%20digITall!%20Ich%20habe%20eine%20Anfrage." target="_blank" rel="noreferrer" className="inline-flex items-center justify-center px-5 py-3 rounded-md bg-[#1abcb5] text-black font-semibold hover:bg-[#15a8a1] transition-colors">
              WhatsApp anfragen
            </a>
            <a href="/kontakt" className="inline-flex items-center justify-center px-5 py-3 rounded-md bg-white/10 text-white hover:bg-white/20 border border-white/10">
              Kontakt aufnehmen
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
