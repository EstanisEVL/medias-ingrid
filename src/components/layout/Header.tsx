import { MessageCircle } from 'lucide-react'

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <h1 className="text-2xl font-bold text-gray-900">Ingrid</h1>
          <span className="text-sm text-gray-600">medias</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          <a href="#productos" className="text-gray-700 hover:text-primary transition-colors">
            Productos
          </a>
          <a href="#acerca" className="text-gray-700 hover:text-primary transition-colors">
            Acerca de
          </a>
          <a href="#categorias" className="text-gray-700 hover:text-primary transition-colors">
            Categorías
          </a>
          <a href="#clientes" className="text-gray-700 hover:text-primary transition-colors">
            Clientes
          </a>
        </div>

        <a
          href="#contacto"
          className="flex items-center gap-2 bg-secondary text-white px-4 py-2 rounded-lg hover:bg-secondary-dark transition-colors"
        >
          <MessageCircle size={18} />
          <span className="hidden sm:inline">Contactar</span>
        </a>
      </nav>
    </header>
  )
}

export default Header


