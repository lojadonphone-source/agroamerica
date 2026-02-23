import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { Card, CardContent } from '@/components/ui/card'

export function Gallery() {
  const photos = [
    {
      src: 'https://i.ibb.co/21V6yFqt/Chat-GPT-Image-18-de-fev-de-2026-09-45-42.png',
      alt: 'Vacas Jersey em pastagem JIGGS de alta qualidade',
      caption: 'Jersey em JIGGS de alta qualidade',
    },
    {
      src: 'https://i.ibb.co/xtF8jKdq/e9e270b3-34d6-4bb8-812d-c9b73d290ef7.jpg',
      alt: 'Rebanho Holandês com genética de ponta',
      caption: 'Genética Holandês de alta produção',
    },
    {
      src: 'https://i.ibb.co/MYK38LR/jiggs2.png',
      alt: 'Pastagem JIGGS vigorosa e bem manejada',
      caption: 'Pasto JIGGS: vigor e produtividade',
    },
    {
      src: 'https://img.usecurling.com/p/800/600?q=dairy%20cattle%20herd%20feeding&color=green',
      alt: 'Alimentação eficiente a pasto',
      caption: 'Eficiência alimentar a pasto',
    },
    {
      src: 'https://img.usecurling.com/p/800/600?q=girolando%20cows%20pasture&color=green',
      alt: 'Rusticidade e produção no campo',
      caption: 'Rusticidade com alta produção',
    },
  ]

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-brand mb-4">
            Resultados no Campo
          </h2>
          <p className="text-text-muted">
            A prova real da união entre genética Cogent e pastagem JIGGS.
          </p>
        </div>

        <div className="mx-auto max-w-6xl">
          <Carousel
            opts={{
              align: 'start',
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {photos.map((photo, index) => (
                <CarouselItem
                  key={index}
                  className="md:basis-1/2 lg:basis-1/3 pl-4"
                >
                  <div className="p-1">
                    <Card className="border-none shadow-md overflow-hidden rounded-xl bg-gray-50">
                      <CardContent className="p-0">
                        <div className="aspect-[4/3] overflow-hidden relative group">
                          <img
                            src={photo.src}
                            alt={photo.alt}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                          />
                          <div className="absolute bottom-0 left-0 right-0 bg-black/60 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                            <p className="text-white text-sm font-medium text-center">
                              {photo.caption}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-12 border-brand text-brand hover:bg-brand hover:text-white" />
            <CarouselNext className="hidden md:flex -right-12 border-brand text-brand hover:bg-brand hover:text-white" />
          </Carousel>
        </div>
      </div>
    </section>
  )
}
