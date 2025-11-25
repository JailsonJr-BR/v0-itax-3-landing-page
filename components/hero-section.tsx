'use client'

import { ArrowRight, Sparkles } from 'lucide-react'

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/20 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/20 rounded-full filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Floating particles grid effect */}
      <div className="absolute inset-0 -z-10 opacity-30">
        <div className="absolute w-1 h-1 bg-primary rounded-full" style={{ top: '20%', left: '10%', animation: 'float 4s ease-in-out infinite' }}></div>
        <div className="absolute w-1 h-1 bg-secondary rounded-full" style={{ top: '30%', left: '80%', animation: 'float 5s ease-in-out infinite', animationDelay: '1s' }}></div>
        <div className="absolute w-1 h-1 bg-primary rounded-full" style={{ top: '60%', left: '15%', animation: 'float 6s ease-in-out infinite', animationDelay: '2s' }}></div>
        <div className="absolute w-1 h-1 bg-secondary rounded-full" style={{ top: '70%', right: '10%', animation: 'float 4.5s ease-in-out infinite', animationDelay: '1.5s' }}></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 mb-6 glass-effect-light px-4 py-2 rounded-full">
          <Sparkles size={16} className="text-secondary" />
          <span className="text-sm text-muted-foreground">Com tecnologia de IA avançada.
</span>
        </div>

        {/* Main headline */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in">
          <span className="text-balance">
            Atendimento Inteligente para
            <br />
            <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent animate-gradient-shift">
              Provedores de Internet
            </span>
          </span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-balance">
          Automatize seu suporte com IA - totalmente autônomo ou semi-autônomo. Integração nativa com os principais sistemas do mercado.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <button className="px-8 py-4 bg-gradient-to-r from-primary to-secondary text-primary-foreground rounded-lg font-semibold flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-primary/50 transition-all transform hover:scale-105">
            Começar Agora
            <ArrowRight size={20} />
          </button>
          <button className="px-8 py-4 border border-primary/50 text-primary rounded-lg font-semibold hover:bg-primary/10 transition-all">
            Ver Demonstração
          </button>
        </div>

        {/* Floating badges */}
        <div className="flex flex-wrap justify-center gap-3 mt-12">
          {['Integração MK-Auth', 'SGP', 'IXC', 'ISPFY'].map((badge, index) => (
            <div
              key={badge}
              className="glass-effect px-4 py-2 rounded-lg text-sm text-muted-foreground animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              ✓ {badge}
            </div>
          ))}
        </div>

        {/* Dashboard preview mockup */}
        <div className="mt-16 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl blur-3xl opacity-40"></div>
          <div className="relative glass-effect rounded-2xl p-1 border border-primary/20">
            <div className="bg-gradient-to-b from-primary/10 to-transparent rounded-xl p-8 min-h-96 flex items-center justify-center">
              <div className="text-center">
                <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                  <Sparkles size={48} className="text-white" />
                </div>
                <p className="text-muted-foreground">Dashboard Preview</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
