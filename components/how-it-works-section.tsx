'use client'

import { Plug, Workflow, Zap, TrendingUp } from 'lucide-react'

export default function HowItWorksSection() {
  const steps = [
    {
      number: 1,
      title: 'Conecte seu sistema',
      description: 'Integração de uma vez com seus dados existentes',
      icon: Plug,
    },
    {
      number: 2,
      title: 'Configure seus fluxos',
      description: 'Crie fluxos personalizados com drag-and-drop',
      icon: Workflow,
    },
    {
      number: 3,
      title: 'Ative a IA',
      description: 'Inicie o atendimento automático com IA',
      icon: Zap,
    },
    {
      number: 4,
      title: 'Monitore resultados',
      description: 'Acompanhe métricas e otimize continuamente',
      icon: TrendingUp,
    },
  ]

  return (
    <section id="como-funciona" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-balance">
            Como Funciona
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            4 passos simples para começar
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6 relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-1/4 left-0 right-0 h-1 bg-gradient-to-r from-primary to-secondary -z-10"></div>

          {steps.map((step) => (
            <div key={step.number} className="relative">
              <div className="glass-effect rounded-2xl p-8 border border-primary/20 text-center hover:border-primary/50 transition-all transform hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4 border-4 border-background">
                  <step.icon size={32} className="text-primary-foreground" />
                </div>
                <div className="text-3xl font-bold text-primary mb-2">{step.number}</div>
                <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-sm">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
