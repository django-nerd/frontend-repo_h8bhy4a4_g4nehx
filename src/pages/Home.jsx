import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import FeatureCards from '../components/FeatureCards'
import WhyUs from '../components/WhyUs'
import Testimonials from '../components/Testimonials'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main className="pt-16">
        <Hero />
        <FeatureCards />
        <WhyUs />
        <Testimonials />
      </main>
      <Footer />
    </div>
  )
}
