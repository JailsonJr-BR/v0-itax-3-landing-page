'use client'

import { Shield, Lock, Server, CheckCircle } from 'lucide-react'

export default function SecuritySection() {
  const securityFeatures = [
    {
      icon: Lock,
      title: 'LGPD Compliant',
      description: 'Totalmente aderente à Lei Geral de Proteção de Dados',
    },
    {
      icon: Shield,
      title: 'Criptografia SSL/TLS',
      description: 'Proteção máxima para seus dados em trânsito',
    },
    {
      icon: Server,
      title: '99.9% Uptime',
      description: 'Infraestrutura redundante e monitoramento 24/7',
    },
    {
      icon: CheckCircle,
      title: 'Backup Automático',
      description: 'Seus dados sempre protegidos e recuperáveis',
    },
  ]

  return (
    <section id="seguranca" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-balance">
            Segurança & Conformidade
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Seus dados estão sempre protegidos e em conformidade com as regulamentações
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {securityFeatures.map((feature, index) => (
            <div
              key={feature.title}
              className="glass-effect rounded-2xl p-8 border border-primary/20 text-center hover:border-primary/50 transition-all transform hover:scale-105 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center mx-auto mb-4">
                <feature.icon size={28} className="text-primary-foreground" />
              </div>
              <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
