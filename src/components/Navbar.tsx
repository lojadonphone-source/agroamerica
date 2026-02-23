import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Menu } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Início', href: '#hero' },
    { name: 'Serviços', href: '#services' },
    { name: 'Sobre', href: '#about' },
    { name: 'Depoimentos', href: '#testimonials' },
    { name: 'Contato', href: '#contact' },
  ]

  const scrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault()
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  // Using the provided image URL from the user story
  const logoUrl =
    'https://i.ibb.co/W49CYM62/af8e2d98-d3e2-4f38-b5e3-b1e7c3c16a86.jpg'
  // Fallback logo URL in case the provided link doesn't render
  const logoFallback =
    'https://img.usecurling.com/i?q=Agro%20America%20Leaf&color=spring-green'

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-40 transition-all duration-300 border-b border-transparent',
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-gray-200 py-3'
          : 'bg-transparent py-5',
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="flex items-center gap-3">
            <img
              src={logoUrl}
              alt="Agro América Soluções Logo"
              onError={(e) => {
                e.currentTarget.src = logoFallback
              }}
              className="h-12 w-auto object-contain rounded-md"
            />
            <span
              className={cn(
                'font-bold text-xl tracking-tight hidden sm:block',
                isScrolled ? 'text-brand' : 'text-white',
              )}
            >
              Agro América <span className="text-brand-accent">Soluções</span>
            </span>
            <span
              className={cn(
                'font-bold text-xl tracking-tight sm:hidden',
                isScrolled ? 'text-brand' : 'text-white',
              )}
            >
              Agro América
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className={cn(
                'text-sm font-medium transition-colors hover:text-brand-accent uppercase tracking-wider',
                isScrolled ? 'text-text' : 'text-white/90 hover:text-white',
              )}
            >
              {link.name}
            </a>
          ))}
          <Button
            className="bg-brand-light hover:bg-brand-light/90 text-white font-bold rounded-full px-6"
            onClick={(e) => {
              e.preventDefault()
              document
                .querySelector('#contact')
                ?.scrollIntoView({ behavior: 'smooth' })
            }}
          >
            Diagnóstico
          </Button>
        </div>

        {/* Mobile Nav */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className={isScrolled ? 'text-brand' : 'text-white'}
              >
                <Menu className="h-6 w-6" />
                <span className="sr-only">Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col gap-6 mt-10">
                <div className="flex items-center gap-2 mb-4">
                  <img
                    src={logoUrl}
                    onError={(e) => {
                      e.currentTarget.src = logoFallback
                    }}
                    alt="Agro América Logo"
                    className="h-10 w-auto rounded-md"
                  />
                  <span className="font-bold text-lg text-brand">
                    Agro América
                  </span>
                </div>
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => scrollToSection(e, link.href)}
                    className="text-lg font-medium text-text hover:text-brand-light transition-colors border-b pb-2"
                  >
                    {link.name}
                  </a>
                ))}
                <Button
                  className="bg-brand-light hover:bg-brand-light/90 text-white w-full mt-4"
                  onClick={(e) => {
                    e.preventDefault()
                    document
                      .querySelector('#contact')
                      ?.scrollIntoView({ behavior: 'smooth' })
                  }}
                >
                  Solicitar Diagnóstico
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  )
}
