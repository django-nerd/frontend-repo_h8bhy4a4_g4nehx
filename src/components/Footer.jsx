export default function Footer() {
  return (
    <footer className="relative bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-md bg-gradient-to-br from-[#1abcb5] to-[#0ea5a3] ring-1 ring-[#1abcb5]/50" />
              <span className="text-white font-semibold">digITall</span>
            </div>
            <p className="mt-3 text-white/60 text-sm max-w-sm">
              Remote-first Tech-Dienstleister aus dem Ruhrgebiet. Smart Home, Monitoring, IT-Support, Reparatur & Web.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold">Kontakt</h4>
            <p className="mt-2 text-white/70 text-sm">Essen • Remote europaweit</p>
            <div className="mt-3 flex flex-col sm:flex-row gap-3">
              <a
                href="https://wa.me/4915750000000?text=Hallo%20digITall!%20Ich%20habe%20eine%20Anfrage."
                target="_blank"
                rel="noreferrer"
                className="inline-flex justify-center rounded-md bg-[#1abcb5] text-black font-semibold px-4 py-2 hover:bg-[#15a8a1]"
              >
                WhatsApp
              </a>
              <a
                href="mailto:hi@digitall.example?subject=Anfrage%20digITall&body=Hallo%20digITall,%5Cn%5Cnich%20habe%20folgende%20Anfrage:%20"
                className="inline-flex justify-center rounded-md border border-white/15 text-white px-4 py-2 hover:bg-white/10"
              >
                E-Mail
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold">Rechtliches</h4>
            <ul className="mt-2 text-white/60 text-sm space-y-1">
              <li>Datenschutz • DSGVO-konform</li>
              <li>Impressum (Platzhalter)</li>
              <li>AGB (Platzhalter)</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/10 text-white/50 text-xs">
          © {new Date().getFullYear()} digITall. Alle Rechte vorbehalten.
        </div>
      </div>
    </footer>
  )
}
