import { motion } from 'framer-motion'
import { Factory, Award, Users } from 'lucide-react'

const features = [
  {
    icon: Factory,
    title: 'Fábrica directa',
    description: 'Sin intermediarios, precios mayoristas',
  },
  {
    icon: Award,
    title: 'Calidad premium',
    description: 'Materias primas de primera línea',
  },
  {
    icon: Users,
    title: 'Atención personalizada',
    description: 'Asesoramiento mayorista y atención al cliente',
  },
]

const Features = () => {
  return (
    <section id='features' className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-900">
            ¿Por qué elegirnos?
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow text-center"
              >
                <div className="bg-primary rounded-lg w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Icon size={32} className="text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-600">
                  {feature.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Features


