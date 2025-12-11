import { Phone, Mail, MapPin, Truck } from 'lucide-react'
import logo from '../../assets/images/logo/Logo Medias Ingrid.png'

const Footer = () => {
  return (
    <footer id="contacto" className="relative bg-gradient-to-r from-primary via-primary-dark to-purple-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="flex justify-center mb-12">
          <img
            src={logo}
            alt="Medias Ingrid"
            className="h-16 w-auto"
          />
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <div className="flex items-center gap-3 mb-4">
              <Phone size={24} />
              <h3 className="text-xl font-bold">Teléfonos</h3>
            </div>
            <div className="space-y-2 text-sm">
              <p>(54) 11 5496-0185</p>
              <p className="text-white/80">Pedidos personalizados</p>
              <p className="mt-4">(54) 11 3908-8038</p>
              <p className="text-white/80">Pedidos de línea</p>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <div className="flex items-center gap-3 mb-4">
              <Mail size={24} />
              <h3 className="text-xl font-bold">Email</h3>
            </div>
            <a 
              href="mailto:mediasingrid@gmail.com" 
              className="text-sm hover:underline"
            >
              mediasingrid@gmail.com
            </a>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <MapPin size={24} />
              <h3 className="text-xl font-bold">Ubicación</h3>
            </div>
            <div className="text-sm space-y-1">
              <p>Chivilcoy 6150</p>
              <p>Villa Ballester</p>
              <p>Provincia de Buenos Aires, Argentina</p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-center md:text-left">
              ING Socks Textil S.A. • Fabricantes de medias desde 1985
            </p>
            <div className="flex items-center gap-2 text-sm">
              <Truck size={18} />
              <span>Envíos a todo el país</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer


