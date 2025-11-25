'use client'

import { Bot, Plug, Zap } from 'lucide-react'

export default function BenefitsSection() {
  const benefits = [
    {
      icon: Bot,
      title: 'Atendimento 24/7',
      description: 'IA responde seus clientes instantaneamente, sem filas',
    },
    {
      icon: Plug,
      title: 'Integração Nativa',
      description: 'Conecte-se diretamente ao seu sistema de gerenciamento',
    },
    {
      icon: Zap,
      title: 'Controle Total',
      description: 'Monte seu fluxo de atendimento sem precisar de programação',
    },
  ]

  return (
    <section id="beneficios" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-balance">
            Benefícios Principais
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tudo que você precisa para transformar seu atendimento
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              className="glass-effect rounded-2xl p-8 border border-primary/20 hover:border-primary/50 transition-all transform hover:scale-105 hover:shadow-lg hover:shadow-primary/20 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center mb-6">
                <benefit.icon size={28} className="text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
              <p className="text-muted-foreground">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
