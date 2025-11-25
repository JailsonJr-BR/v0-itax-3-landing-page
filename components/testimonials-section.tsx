'use client'

import { Quote } from 'lucide-react'

export default function TestimonialsSection() {
  const testimonials = [
    {
      quote: 'Aumentamos nossa capacidade de atendimento em 300% com a ITAX3. Nossas equipes agora focam em casos mais complexos.',
      author: 'Carlos Silva',
      company: 'TechNet Telecom',
      role: 'CEO',
    },
    {
      quote: 'A integração com nossos sistemas foi perfeita. Implementamos em 48 horas e já estamos economizando 40% em custos operacionais.',
      author: 'Maria Costa',
      company: 'Internet Brasil',
      role: 'Diretora de Operações',
    },
    {
      quote: 'Nossos clientes adoram o atendimento rápido no WhatsApp. A taxa de satisfação subiu para 95%.',
      author: 'João Pereira',
      company: 'Conexão Rápida',
      role: 'Gerente de Atendimento',
    },
  ]

  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-balance">
            O Que Dizem Nossos Clientes
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Provedores de internet confiando em ITAX3
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.author}
              className="glass-effect rounded-2xl p-8 border border-primary/20 hover:border-primary/50 transition-all transform hover:scale-105 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Quote size={24} className="text-primary mb-4" />
              <p className="text-muted-foreground mb-6 italic">"{testimonial.quote}"</p>
              <div className="border-t border-primary/20 pt-4">
                <p className="font-semibold">{testimonial.author}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                <p className="text-sm text-muted-foreground">{testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
