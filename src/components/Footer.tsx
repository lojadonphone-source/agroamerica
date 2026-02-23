import { Facebook, Instagram, MapPin, Mail, Phone } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-brand text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold flex items-center gap-2">
              Agro América <span className="text-brand-accent">Soluções</span>
            </h3>
            <p className="text-gray-300 max-w-sm">
              Especialistas em melhoramento genético (Cogent Brasil) e manejo de
              pastagens (JIGGS) para maximizar a produtividade leiteira.
            </p>
            <div className="flex gap-4 pt-4">
              <a
                href="https://www.instagram.com/felipejreberts/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/10 rounded-full hover:bg-brand-light transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://www.facebook.com/FelipeJuniorEberts"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/10 rounded-full hover:bg-brand-light transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold border-b border-brand-accent/30 pb-2 inline-block">
              Serviços
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#services"
                  className="text-gray-300 hover:text-brand-accent transition-colors"
                >
                  Genética Cogent
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-gray-300 hover:text-brand-accent transition-colors"
                >
                  Pastagem JIGGS
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-gray-300 hover:text-brand-accent transition-colors"
                >
                  Consultoria Técnica
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-300 hover:text-brand-accent transition-colors"
                >
                  Diagnóstico Gratuito
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold border-b border-brand-accent/30 pb-2 inline-block">
              Contato
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-gray-300">
                <MapPin className="h-5 w-5 text-brand-accent shrink-0 mt-0.5" />
                <span>Atendimento no Sul do Brasil</span>
              </li>
              <li className="flex items-center gap-3 text-gray-300">
                <Phone className="h-5 w-5 text-brand-accent shrink-0" />
                <span>(49) 99135-0050</span>
              </li>
              <li className="flex items-center gap-3 text-gray-300">
                <Mail className="h-5 w-5 text-brand-accent shrink-0" />
                <a
                  href="mailto:felipejunioreberts@icloud.com"
                  className="hover:text-brand-accent transition-colors break-all"
                >
                  felipejunioreberts@icloud.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400 gap-4">
          <p>
            © {currentYear} Agro América Soluções. Todos os direitos reservados.
          </p>
          <p>Felipe Júnior Eberts.</p>
        </div>
      </div>
    </footer>
  )
}
