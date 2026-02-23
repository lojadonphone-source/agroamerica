import { Button } from '@/components/ui/button'
import { ArrowRight, TrendingUp } from 'lucide-react'

export function Hero() {
  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToServices = () => {
    document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://i.ibb.co/LzPhmq0k/022fe75c-9177-433a-a109-4c534212f190.jpg"
          alt="Pastagem verde com gado de leite ao fundo"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-accent/30 to-brand/80 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <div className="container mx-auto px-4 z-10 relative">
        <div className="max-w-4xl space-y-8 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-light/90 backdrop-blur-sm rounded-full text-white text-sm font-semibold tracking-wide border border-white/20">
            <TrendingUp className="h-4 w-4" />
            <span>Especialista com +20 anos de experiência</span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight font-display drop-shadow-lg">
            Genética que evolui. <br />
            <span className="text-brand-accent">Pastagem que sustenta</span>.
          </h1>

          <p className="text-lg md:text-xl text-gray-100 max-w-2xl leading-relaxed drop-shadow-md">
            Maximize os resultados da sua propriedade leiteira unindo a{' '}
            <strong>Genética Cogent Brasil</strong> com a produtividade das{' '}
            <strong>Pastagens JIGGS</strong>.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button
              size="lg"
              className="bg-brand-light hover:bg-brand-light/90 text-white font-bold text-base h-14 px-8 rounded-full shadow-lg shadow-brand-light/20 transition-all hover:scale-105"
              onClick={scrollToContact}
            >
              Solicitar Diagnóstico Técnico
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent border-white text-white hover:bg-white/10 hover:text-white font-bold text-base h-14 px-8 rounded-full transition-all"
              onClick={scrollToServices}
            >
              Conhecer Soluções
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
