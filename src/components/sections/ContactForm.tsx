import { MessageCircle, Phone } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card'

export function ContactForm() {
  const phoneNumber = '5549991350050'
  const message =
    'Olá, gostaria de solicitar um diagnóstico para minha propriedade.'
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`

  return (
    <section
      id="contact"
      className="py-20 bg-brand text-white relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
        <img
          src="https://img.usecurling.com/p/1920/1080?q=dna%20helix%20structure%20abstract&color=white"
          className="w-full h-full object-cover"
          alt="bg"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-5xl font-bold leading-tight">
              Dê o próximo passo para <br />
              <span className="text-brand-accent">lucrar mais.</span>
            </h2>
            <p className="text-gray-300 text-lg max-w-md">
              Entre em contato diretamente pelo WhatsApp para receber um
              diagnóstico inicial gratuito e descobrir onde sua propriedade pode
              evoluir com Genética e Pastagem.
            </p>
            <div className="flex flex-col gap-4 pt-4 text-gray-300">
              <p className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-brand-accent"></span>
                Análise personalizada do seu rebanho
              </p>
              <p className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-brand-accent"></span>
                Suporte direto pelo WhatsApp
              </p>
              <p className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-brand-accent"></span>
                Planejamento focado no ROI
              </p>
            </div>
          </div>

          <div>
            <Card className="shadow-2xl border-none">
              <CardHeader className="bg-white rounded-t-xl pb-2 text-center pt-8">
                <CardTitle className="text-2xl font-bold text-brand">
                  Fale com um Especialista
                </CardTitle>
                <CardDescription className="text-lg">
                  Atendimento ágil e personalizado.
                </CardDescription>
              </CardHeader>
              <CardContent className="bg-white rounded-b-xl pb-10 px-8 flex flex-col items-center gap-6">
                <div className="w-24 h-24 bg-[#25D366]/10 rounded-full flex items-center justify-center animate-pulse">
                  <MessageCircle className="w-12 h-12 text-[#25D366]" />
                </div>

                <p className="text-center text-text-muted text-lg max-w-sm">
                  Clique no botão abaixo para iniciar uma conversa no WhatsApp.
                  Nossa equipe está pronta para atender você.
                </p>

                <Button
                  className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white font-bold h-16 text-lg rounded-full shadow-xl shadow-green-200 transition-all hover:scale-105 flex items-center justify-center gap-3"
                  onClick={() => window.open(whatsappUrl, '_blank')}
                >
                  <MessageCircle className="h-6 w-6" />
                  Solicitar Diagnóstico via WhatsApp
                </Button>

                <div className="flex items-center gap-2 text-sm text-gray-500 mt-2">
                  <Phone className="w-4 h-4" />
                  <span>(49) 99135-0050</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
