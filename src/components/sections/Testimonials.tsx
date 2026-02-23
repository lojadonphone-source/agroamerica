import { Star, Quote } from 'lucide-react'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

export function Testimonials() {
  const testimonials = [
    {
      name: 'Neivo Pires',
      role: 'Guarujá do Sul',
      content:
        'Recomendo o serviço do Felipe, obtive muito lucro com a produção de Feno, recomendo! ',
      avatar: 'NP',
      image:
        'https://i.ibb.co/W4pS0FQm/Whats-App-Image-2026-02-19-at-10-03-34.jpg',
    },
    {
      name: 'INPASA BRASIL',
      role: 'Inpasa Brasil/ unidades de dourados e sidrolandia MS',
      content:
        'Usamos a pastagem Jiggs nas áreas de destinação de afluentes, recomendamos os serviços do Felipe',
      avatar: 'IB',
      image: 'https://i.ibb.co/8g8DWSZ0/Screenshot-15.png',
    },
    {
      name: 'Sr Claudir Ângelo Mocelin',
      role: 'Proprietário da Dielo Sorvetes São miguel do Oeste',
      content:
        'Nós somos produtores de Touros Campeões da raça Brangus e contratamos os serviços para implantação de nossas pastagens com o Felipe Eberts e estamos satisfeitos com o resultado, Recomendamos o trabalho do Felipe',
      avatar: 'CM',
      image:
        'https://i.ibb.co/RGw3ybWH/Whats-App-Image-2026-02-19-at-10-11-25-1.jpg',
    },
  ]

  return (
    <section id="testimonials" className="py-20 bg-brand-muted relative">
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-white to-transparent"></div>

      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-brand mb-4">
            O que dizem os produtores
          </h2>
          <div className="h-1 w-20 bg-brand-light mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <Card
              key={i}
              className="border-none shadow-lg bg-white relative overflow-visible mt-6 flex flex-col"
            >
              <div className="absolute -top-6 left-8 bg-brand-light rounded-full p-3 shadow-lg z-10">
                <Quote className="h-6 w-6 text-white fill-white" />
              </div>
              <CardContent className="pt-12 pb-6 flex-grow">
                <div className="flex gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star
                      key={s}
                      className="h-4 w-4 text-yellow-400 fill-yellow-400"
                    />
                  ))}
                </div>
                <p className="text-text-muted italic leading-relaxed mb-6">
                  "{t.content}"
                </p>
              </CardContent>
              <CardFooter className="border-t bg-gray-50/50 p-6 flex items-center gap-4">
                <Avatar className="h-10 w-10 border-2 border-brand-light/20">
                  <AvatarImage
                    src={
                      t.image ||
                      `https://img.usecurling.com/ppl/thumbnail?gender=male&seed=${i + 15}`
                    }
                    className="object-cover"
                  />
                  <AvatarFallback>{t.avatar}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-bold text-brand text-sm">{t.name}</p>
                  <p className="text-xs text-text-muted">{t.role}</p>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
