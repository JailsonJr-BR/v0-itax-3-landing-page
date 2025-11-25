'use client'

import { ArrowRight } from 'lucide-react'

export default function CTASection() {
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20"></div>
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/30 rounded-full filter blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/30 rounded-full filter blur-3xl opacity-30 animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-balance">
          Comece a Automatizar Seu Atendimento Hoje
        </h2>
        <p className="text-lg text-muted-foreground mb-8">
          Junte-se a centenas de provedores de internet que já transformaram seu suporte com ITAX3
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <div className="flex-1 sm:flex-none">
            <input
              type="email"
              placeholder="seu@email.com"
              className="w-full px-6 py-4 bg-primary-foreground/10 border border-primary/30 rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary transition-colors"
            />
          </div>
          <button className="px-8 py-4 bg-gradient-to-r from-primary to-secondary text-primary-foreground rounded-lg font-semibold flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-primary/50 transition-all transform hover:scale-105 whitespace-nowrap">
            Solicitar Demonstração
            <ArrowRight size={20} />
          </button>
        </div>

        <p className="text-sm text-muted-foreground">
          ✓ Sem cartão de crédito necessário • ✓ Setup em 48 horas • ✓ Suporte dedicado
        </p>
      </div>
    </section>
  )
}
