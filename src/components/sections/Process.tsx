import { ClipboardList, FileSpreadsheet, Sprout } from 'lucide-react'

export function Process() {
  const steps = [
    {
      number: '01',
      title: 'Diagnóstico do Sistema',
      description:
        'Avaliamos sua propriedade: rebanho atual, instalações, qualidade do solo e manejo. Entendemos onde estão os gargalos que impedem seu crescimento.',
      icon: ClipboardList,
    },
    {
      number: '02',
      title: 'Plano Genético',
      description:
        'Definimos o melhor acasalamento com touros Cogent para corrigir defeitos e potencializar virtudes, focando no que paga a conta: sólidos e volume.',
      icon: FileSpreadsheet,
    },
    {
      number: '03',
      title: 'Plano de Pastagem',
      description:
        'Implementamos o JIGGS com técnica: preparo do solo, plantio e definição de piquetes para garantir oferta constante de alimento de alta qualidade.',
      icon: Sprout,
    },
  ]

  return (
    <section className="py-20 bg-brand text-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Diagnóstico Técnico em 3 Etapas
          </h2>
          <p className="text-brand-accent text-lg max-w-2xl mx-auto">
            Metodologia clara e validada para transformar sua propriedade.
          </p>
        </div>

        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-8">
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-white/20 z-0"></div>

          {steps.map((step, index) => (
            <div
              key={index}
              className="relative z-10 flex flex-col items-center text-center group"
            >
              <div className="w-24 h-24 rounded-full bg-brand-light border-4 border-brand-accent flex items-center justify-center mb-6 shadow-elevation group-hover:scale-110 transition-transform duration-300">
                <step.icon className="h-10 w-10 text-white" />
              </div>
              <div className="bg-white/5 rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-colors w-full h-full">
                <span className="text-5xl font-bold text-white/10 absolute top-4 right-4">
                  {step.number}
                </span>
                <h3 className="text-xl font-bold text-white mb-3 relative">
                  {step.title}
                </h3>
                <p className="text-gray-300 relative leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
