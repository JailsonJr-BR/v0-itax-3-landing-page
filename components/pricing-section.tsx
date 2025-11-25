'use client'

import { Check } from 'lucide-react'

export default function PricingSection() {
  const tiers = [
    {
      name: 'Starter',
      description: 'Para provedores até 500 clientes',
      price: 'Sob consulta',
      features: [
        'Até 500 clientes',
        'Chatbot WhatsApp',
        'Básico suporte',
        'Integração básica',
        '99.5% uptime',
      ],
      highlighted: false,
    },
    {
      name: 'Professional',
      description: 'Para provedores até 2.000 clientes',
      price: 'Sob consulta',
      features: [
        'Até 2.000 clientes',
        'Chatbot WhatsApp + Email',
        'Suporte prioritário',
        'Integração completa',
        '99.9% uptime',
        'Analytics avançados',
        'Templates customizados',
      ],
      highlighted: true,
    },
    {
      name: 'Enterprise',
      description: 'Para provedores ilimitados',
      price: 'Sob consulta',
      features: [
        'Clientes ilimitados',
        'Todos os canais',
        'Suporte 24/7 dedicado',
        'Integrações customizadas',
        '99.99% uptime',
        'Analytics em tempo real',
        'White-label disponível',
        'Roadmap customizado',
      ],
      highlighted: false,
    },
  ]

  return (
    <section id="preco" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-balance">
            Planos Flexíveis
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Escolha o plano que melhor se adequa ao seu negócio
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {tiers.map((tier, index) => (
            <div
              key={tier.name}
              className={`rounded-2xl p-8 border transition-all transform hover:scale-105 ${
                tier.highlighted
                  ? 'glass-effect border-primary/50 bg-gradient-to-b from-primary/10 to-transparent ring-2 ring-primary/30'
                  : 'glass-effect border-primary/20'
              }`}
            >
              {tier.highlighted && (
                <div className="inline-block bg-gradient-to-r from-primary to-secondary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold mb-4">
                  Mais Popular
                </div>
              )}
              <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
              <p className="text-muted-foreground mb-6 text-sm">{tier.description}</p>
              <div className="text-3xl font-bold mb-6">{tier.price}</div>
              <button
                className={`w-full py-3 rounded-lg font-semibold mb-8 transition-all ${
                  tier.highlighted
                    ? 'bg-gradient-to-r from-primary to-secondary text-primary-foreground hover:shadow-lg hover:shadow-primary/50'
                    : 'border border-primary/50 text-primary hover:bg-primary/10'
                }`}
              >
                Solicitar Demo
              </button>
              <div className="space-y-4">
                {tier.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-3">
                    <Check size={20} className="text-secondary flex-shrink-0" />
                    <span className="text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
