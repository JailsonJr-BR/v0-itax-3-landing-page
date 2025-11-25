import { Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-card border-t border-primary/20 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center font-bold text-sm">
                IT
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                ITAX3
              </span>
            </div>
            <p className="text-muted-foreground text-sm">
              Atendimento inteligente para provedores de internet
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-semibold mb-4">Produto</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Recursos</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Preços</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Segurança</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Roadmap</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4">Empresa</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Sobre</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Contato</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Carreiras</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contato</h4>
            <div className="space-y-3 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Mail size={16} />
                <a href="mailto:contact@itax3.com.br" className="hover:text-primary transition-colors">contact@itax3.com.br</a>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={16} />
                <a href="tel:+5511999999999" className="hover:text-primary transition-colors">+55 (11) 9999-9999</a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={16} />
                <span>São Paulo, Brasil</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>&copy; 2025 ITAX3. Todos os direitos reservados.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-primary transition-colors">Privacidade</a>
              <a href="#" className="hover:text-primary transition-colors">Termos</a>
              <a href="#" className="hover:text-primary transition-colors">LGPD</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
