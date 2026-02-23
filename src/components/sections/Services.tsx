import { Dna, Sprout, LineChart } from 'lucide-react'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card'

export function Services() {
  const services = [
    {
      title: 'Genética Cogent Brasil',
      partner: 'Melhoramento Genético',
      description:
        'Acesso à genética de elite mundial. Sêmen sexado e convencional com foco em fertilidade, saúde e longevidade. Corrigimos aprumos e úbere para você ter vacas que duram e produzem mais.',
      icon: Dna,
      color: 'text-blue-500',
      bg: 'bg-blue-50',
    },
    {
      title: 'Pastagem JIGGS',
      partner: 'Nutrição e Manejo',
      description:
        'O capim JIGGS é a chave para reduzir o custo de produção. Implementamos o plantio e manejo correto para garantir alta taxa de lotação e valor nutricional superior, transformando pasto em leite.',
      icon: Sprout,
      color: 'text-green-600',
      bg: 'bg-green-50',
    },
    {
      title: 'Consultoria Integrada',
      partner: 'Estratégia e Resultado',
      description:
        'Unimos as pontas: o melhor animal na melhor comida. Realizamos o acasalamento dirigido e o planejamento forrageiro para que sua propriedade atinja o potencial máximo de lucro.',
      icon: LineChart,
      color: 'text-brand-light',
      bg: 'bg-brand-muted',
    },
  ]

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-brand mb-4">
            Soluções Integradas para Alta Performance
          </h2>
          <p className="text-text-muted text-lg">
            A sinergia perfeita entre genética de ponta e nutrição eficiente a
            pasto.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group border-border/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden h-full"
            >
              <div
                className={`h-2 w-full ${service.color.replace('text-', 'bg-')}`}
              ></div>
              <CardHeader>
                <div
                  className={`w-14 h-14 rounded-2xl ${service.bg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <service.icon className={`w-8 h-8 ${service.color}`} />
                </div>
                <div className="text-sm font-semibold text-text-muted uppercase tracking-wider mb-1">
                  {service.partner}
                </div>
                <CardTitle className="text-2xl font-bold text-brand">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed text-text-muted">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
