'use client'

import { MessageCircle } from 'lucide-react'

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/5511999999999"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 w-14 h-14 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-primary-foreground hover:shadow-lg hover:shadow-primary/50 transition-all transform hover:scale-110 z-40"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={24} />
    </a>
  )
}
