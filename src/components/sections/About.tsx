import { Button } from '@/components/ui/button'
import { CheckCircle2 } from 'lucide-react'

export function About() {
  const specialistPhotoUrl =
    'https://i.ibb.co/LhBfpRsQ/8477f735-ced2-4653-94e2-ef788384cd30.jpg'
  // Fallback if the link fails
  const specialistPhotoFallback =
    'https://img.usecurling.com/ppl/large?gender=male&seed=45'

  return (
    <section id="about" className="py-20 bg-brand-muted">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Image Side */}
          <div className="w-full lg:w-1/2 relative animate-fade-in-left">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white aspect-[3/4] max-w-md mx-auto lg:max-w-full">
              <img
                src={specialistPhotoUrl}
                alt="Felipe Júnior Eberts"
                onError={(e) => {
                  e.currentTarget.src = specialistPhotoFallback
                }}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-8">
                <p className="text-white font-bold text-2xl">
                  Felipe Júnior Eberts
                </p>
                <p className="text-brand-accent text-lg">
                  Especialista em Pecuária Leiteira
                </p>
              </div>
            </div>
            {/* Decorative background element */}
            <div className="absolute -z-10 top-6 -right-6 w-full h-full rounded-2xl bg-brand/10 border border-brand/20 transform rotate-2"></div>
          </div>

          {/* Content Side */}
          <div className="w-full lg:w-1/2 space-y-6 animate-fade-in-right">
            <h2 className="text-3xl md:text-4xl font-bold text-brand">
              +20 anos de experiência <br />
              <span className="text-brand-light">ao lado do produtor.</span>
            </h2>

            <p className="text-text leading-relaxed text-lg font-medium border-l-4 border-brand-accent pl-4">
              Atuando diretamente no campo, entendo as dores e os desafios de
              quem vive do leite. Meu foco é transformar propriedades comuns em
              negócios altamente produtivos e rentáveis.
            </p>

            <p className="text-text leading-relaxed">
              Minha trajetória no setor leiteiro me permitiu validar uma
              metodologia única que une duas pontas essenciais:{' '}
              <strong>Melhoramento Genético</strong> (com a tecnologia da Cogent
              Brasil) e <strong>Intensificação de Pastagens</strong> (com o
              capim JIGGS). Não entrego apenas insumos, entrego uma estratégia
              de crescimento.
            </p>

            <ul className="space-y-3 pt-4">
              {[
                'Especialista em Genética Cogent Brasil',
                'Expert em manejo de pastagens JIGGS',
                'Foco em redução de custos e aumento de margem',
                'Consultoria técnica presencial e personalizada',
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="text-brand-light h-6 w-6 shrink-0" />
                  <span className="text-text-muted font-medium">{item}</span>
                </li>
              ))}
            </ul>

            <div className="pt-6">
              <Button
                onClick={() =>
                  document
                    .querySelector('#contact')
                    ?.scrollIntoView({ behavior: 'smooth' })
                }
                className="bg-brand hover:bg-brand/90 text-white font-bold rounded-full px-8 py-6 shadow-lg shadow-brand/20"
              >
                Falar com o Felipe
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
