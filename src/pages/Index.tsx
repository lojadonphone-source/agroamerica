import { Navbar } from '@/components/Navbar'
import { Hero } from '@/components/sections/Hero'
import { Metrics } from '@/components/sections/Metrics'
import { Services } from '@/components/sections/Services'
import { Process } from '@/components/sections/Process'
import { About } from '@/components/sections/About'
import { Gallery } from '@/components/sections/Gallery'
import { Testimonials } from '@/components/sections/Testimonials'
import { ContactForm } from '@/components/sections/ContactForm'
import { FAQ } from '@/components/sections/FAQ'
import { Footer } from '@/components/Footer'
import { FloatingWhatsApp } from '@/components/FloatingWhatsApp'

const Index = () => {
  return (
    <div className="min-h-screen font-sans bg-white selection:bg-brand-accent selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Metrics />
        <Services />
        <Process />
        <About />
        <Gallery />
        <Testimonials />
        <ContactForm />
        <FAQ />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  )
}

export default Index
