import { motion } from 'framer-motion'

const AcercaDe = () => {
  return (
    <section id="acerca" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Más de 40 años fabricando medias en Argentina
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            En <span className="font-bold text-primary">Medias Ingrid</span> somos fabricantes directos, 
            especializados en medias para mujer, niño, bebé y diseños personalizados. Producimos en nuestra propia 
            planta y ofrecemos precios por docena y pedidos mayoristas desde todo el país.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default AcercaDe


