'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'

interface HeaderProps {
  scrolled: boolean
}

export default function Header({ scrolled }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'glass-effect backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <Link href="#" className="flex items-center gap-2">
          <Image
            src="/logoiax3.png"
            alt="ITAX3 Logo"
            width={80}
            height={80}
            className="object-contain"
          />
        </Link>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#beneficios" className="hover:text-primary transition-colors">
            Benefícios
          </a>
          <a href="#recursos" className="hover:text-primary transition-colors">
            Recursos
          </a>
          <a href="#como-funciona" className="hover:text-primary transition-colors">
            Como Funciona
          </a>
          <a href="#preco" className="hover:text-primary transition-colors">
            Preço
          </a>
          <a href="#seguranca" className="hover:text-primary transition-colors">
            Segurança
          </a>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <button className="px-6 py-2 rounded-lg border border-primary text-primary hover:bg-primary/10 transition-colors">
            Entrar
          </button>
          <button className="px-6 py-2 rounded-lg bg-gradient-to-r from-primary to-accent text-primary-foreground hover:shadow-lg hover:shadow-primary/50 transition-all">
            Começar Agora
          </button>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-effect border-t border-primary/20 px-4 py-4 space-y-4">
          <a href="#beneficios" className="block hover:text-primary transition-colors">
            Benefícios
          </a>
          <a href="#recursos" className="block hover:text-primary transition-colors">
            Recursos
          </a>
          <a href="#como-funciona" className="block hover:text-primary transition-colors">
            Como Funciona
          </a>
          <a href="#preco" className="block hover:text-primary transition-colors">
            Preço
          </a>
          <a href="#seguranca" className="block hover:text-primary transition-colors">
            Segurança
          </a>
          <div className="flex flex-col gap-3 pt-4">
            <button className="px-6 py-2 rounded-lg border border-primary text-primary hover:bg-primary/10 transition-colors">
              Entrar
            </button>
            <button className="px-6 py-2 rounded-lg bg-gradient-to-r from-primary to-accent text-primary-foreground hover:shadow-lg">
              Começar Agora
            </button>
          </div>
        </div>
      )}
    </header>
  )
}
