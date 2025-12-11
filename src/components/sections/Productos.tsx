import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'

const Productos = () => {
  return (
    <section id="productos" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Conocé nuestros productos
          </h2>
          <p className="text-xl text-gray-600">
            Algunas líneas destacadas
          </p>
        </motion.div>

        <div className="flex justify-center mb-12">
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-primary/10 rounded-2xl p-8 flex flex-col"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Productos en línea
            </h3>
            <p className="text-gray-700 mb-2">
              Nuestros valores dependen del modelo, material y cantidad. El pedido mínimo por artículo y talle es de{' '}
              <span className="font-bold text-primary">1 docena</span>.
            </p>
            <p className="text-gray-700 mb-6 flex-grow">
              Consultá por disponibilidad, tiempos y promociones por volumen.
            </p>
            <a
              href="https://wa.me/5491139088038?text=Hola,%20quiero%20consultar%20precios%20de%20productos%20en%20línea"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 text-white px-8 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
              style={{ backgroundColor: '#25D366' }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#1ea952'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#25D366'}
            >
              <MessageCircle className="w-6 h-6" />
              Consultar precios
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-blue-50 rounded-2xl p-8 flex flex-col"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Productos personalizados
            </h3>
            <p className="text-gray-700 mb-2">
              El pedido mínimo es de{' '}
              <span className="font-bold text-primary">5 docenas</span> por modelo y variante de color.
            </p>
            <p className="text-gray-700 mb-6 flex-grow">
              Consultá disponibilidad, tiempos y promociones por volumen.
            </p>
            <a
              href="https://wa.me/5491154960185?text=Hola,%20quiero%20consultar%20sobre%20productos%20personalizados"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 text-white px-8 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
              style={{ backgroundColor: '#25D366' }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#1ea952'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#25D366'}
            >
              <MessageCircle className="w-6 h-6" />
              Consultar personalizados
            </a>
          </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Productos

