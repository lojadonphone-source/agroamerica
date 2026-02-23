import { TrendingUp, Droplets, HeartPulse, DollarSign } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

export function Metrics() {
  const metrics = [
    {
      label: 'Mais leite por vaca',
      icon: Droplets,
      color: 'text-blue-500',
      bg: 'bg-blue-50',
    },
    {
      label: 'Mais leite por hectare',
      icon: TrendingUp,
      color: 'text-green-600',
      bg: 'bg-green-50',
    },
    {
      label: 'Menos perdas reprodutivas',
      icon: HeartPulse,
      color: 'text-red-500',
      bg: 'bg-red-50',
    },
    {
      label: 'Menor custo por litro',
      icon: DollarSign,
      color: 'text-yellow-600',
      bg: 'bg-yellow-50',
    },
  ]

  return (
    <section className="py-12 bg-white border-b border-gray-100">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {metrics.map((metric, index) => (
            <Card
              key={index}
              className="border-none shadow-none bg-transparent"
            >
              <CardContent className="flex flex-col items-center justify-center p-0 text-center space-y-3">
                <div
                  className={`w-12 h-12 rounded-full ${metric.bg} flex items-center justify-center`}
                >
                  <metric.icon className={`h-6 w-6 ${metric.color}`} />
                </div>
                <h3 className="font-bold text-brand-dark text-lg md:text-xl leading-tight">
                  {metric.label}
                </h3>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
