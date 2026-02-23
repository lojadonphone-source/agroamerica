import { MessageCircle } from 'lucide-react'
import { cn } from '@/lib/utils'

export function FloatingWhatsApp() {
  const phoneNumber = '5549991350050'
  const message =
    'Quero um diagnóstico genético e de pastagem (JIGGS) para minha propriedade.'
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        'fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] rounded-full shadow-lg hover:bg-[#128C7E] transition-all duration-300 hover:scale-110',
        'animate-fade-in-up',
      )}
      aria-label="Falar no WhatsApp"
    >
      <span className="absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75 animate-ping"></span>
      <MessageCircle className="relative w-8 h-8 text-white fill-white" />
    </a>
  )
}
