import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'
import heroImage from '../../assets/images/hero/hero.png'

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center bg-gradient-to-r from-primary/10 via-white to-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h1 className="text-5xl md:text-6xl font-semibold text-gray-900">
              Fábrica de <span className="text-primary">medias</span>
            </h1>
            <p className="text-xl text-gray-700">
              Diseños personalizados y de línea al por mayor, con envíos a todo el país.
            </p>
            
            <a
              href="https://wa.me/5491139088038?text=Hola,%20vi%20su%20sitio%20web%20y%20me%20interesa%20conocer%20más%20sobre%20sus%20productos."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 text-white px-8 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
              style={{ backgroundColor: '#25D366' }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#1ea952'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#25D366'}
            >
              <MessageCircle className="w-6 h-6" />
              Contactar por WhatsApp
            </a>

            <div className="grid grid-cols-3 gap-6 pt-8">
              <div>
                <div className="text-3xl font-bold text-primary">+40</div>
                <div className="text-sm text-gray-600">Años de experiencia</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">+80</div>
                <div className="text-sm text-gray-600">Diseños disponibles</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">100%</div>
                <div className="text-sm text-gray-600">Fabricación nacional</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute -inset-4 rounded-3xl blur-2xl opacity-20" />

            <div className="relative bg-white p-8 rounded-3xl shadow-2xl">
              <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-slate-50">
                <img
                  src={heroImage}
                  alt="Medias premium ING Socks"
                  className="w-full h-full object-cover"
                  style={{ imageRendering: 'auto' }}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero


