'use client'

import { MessageCircle, GitBranch, BarChart3 } from 'lucide-react'

export default function FeaturesSection() {
  const features = [
    {
      title: 'Chatbot WhatsApp Inteligente',
      description: 'Automatize os principais processos de atendimento',
      capabilities: [
        'Envio automático de 2ª via de faturas',
        'Desbloqueio de confiança automático',
        'Abertura e acompanhamento de chamados',
        'PIX dinâmico com baixa automática',
      ],
      icon: MessageCircle,
    },
    {
      title: 'Construtor de Fluxos Visual',
      description: 'Crie fluxos de atendimento sem programação',
      capabilities: [
        'Interface drag-and-drop intuitiva',
        'Templates prontos para provedores',
        'Personalização completa de respostas',
        'Histórico e versioning automático',
      ],
      icon: GitBranch,
    },
    {
      title: 'Central de Atendimento Unificada',
      description: 'Gerencie todos os canais em um único lugar',
      capabilities: [
        'Todos os canais em um só lugar',
        'Histórico completo do cliente',
        'Transferência inteligente para humanos',
        'Analytics em tempo real',
      ],
      icon: BarChart3,
    },
  ]

  return (
    <section id="recursos" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-balance">
            Recursos Poderosos
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tudo integrado em uma plataforma inteligente
          </p>
        </div>

        <div className="space-y-16">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 items-center`}
            >
              <div className="flex-1">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center mb-4">
                  <feature.icon size={28} className="text-primary-foreground" />
                </div>
                <h3 className="text-3xl font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground mb-6">{feature.description}</p>
                <ul className="space-y-3">
                  {feature.capabilities.map((capability) => (
                    <li key={capability} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-muted-foreground">{capability}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex-1">
                <div className="glass-effect rounded-2xl p-8 border border-primary/20 min-h-96 flex items-center justify-center">
                  <div className="text-center">
                    <feature.icon size={64} className="mx-auto mb-4 text-primary opacity-50" />
                    <p className="text-muted-foreground">{feature.title}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
