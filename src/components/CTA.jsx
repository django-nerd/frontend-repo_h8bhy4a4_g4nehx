export default function CTA() {
  return (
    <section className="py-16 sm:py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="rounded-2xl border border-[#1abcb5]/30 bg-gradient-to-br from-[#1abcb5]/10 to-transparent p-8 sm:p-12">
          <div className="max-w-3xl">
            <h2 className="text-2xl sm:text-3xl font-semibold text-white">Bereit für den nächsten Schritt?</h2>
            <p className="mt-2 text-white/80">Schreib uns auf WhatsApp oder sende eine kurze Anfrage – wir melden uns schnell.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="https://wa.me/4915750000000?text=Hallo%20digITall!%20Ich%20habe%20eine%20Anfrage." target="_blank" rel="noreferrer" className="inline-flex items-center justify-center px-5 py-3 rounded-md bg-[#1abcb5] text-black font-semibold hover:bg-[#15a8a1]">WhatsApp</a>
              <a href="/kontakt" className="inline-flex items-center justify-center px-5 py-3 rounded-md bg-white/10 text-white hover:bg-white/20 border border-white/10">Kontakt</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
