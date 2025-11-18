import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Legal({ type = 'impressum' }) {
  const isImpressum = type === 'impressum'
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main className="pt-20">
        <section className="max-w-5xl mx-auto px-6 py-10">
          <h1 className="text-3xl sm:text-4xl font-semibold">{isImpressum ? 'Impressum' : 'Datenschutzerklärung'}</h1>
          <div className="mt-6 space-y-6 text-sm leading-relaxed text-white/75">
            {isImpressum ? (
              <>
                <p>Angaben gemäß § 5 TMG – Platzhalter-Inhalte.</p>
                <p>
                  digITall<br />
                  Musterstraße 1<br />
                  45127 Essen
                </p>
                <p>E-Mail: hi@digitall.example</p>
                <p>Umsatzsteuer-ID: DE000000000 (Platzhalter)</p>
              </>
            ) : (
              <>
                <p>Hinweise zur Datenverarbeitung nach DSGVO – Platzhalter-Inhalte.</p>
                <p>Wir verarbeiten personenbezogene Daten nur, soweit dies zur Bereitstellung einer funktionsfähigen Website sowie unserer Inhalte und Leistungen erforderlich ist.</p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Verantwortlicher: digITall, Essen</li>
                  <li>Rechtsgrundlagen: Art. 6 Abs. 1 DSGVO</li>
                  <li>Speicherdauer: entsprechend gesetzlicher Vorgaben</li>
                  <li>Ihre Rechte: Auskunft, Berichtigung, Löschung, Widerspruch</li>
                </ul>
              </>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
