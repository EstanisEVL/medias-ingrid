import { useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'

import { catalogItems } from '../../data/categories';

function ImageCarousel({ images, title }: { images: string[]; title: string }) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  return (
    <div className="relative aspect-[4/3] overflow-hidden bg-slate-100 group/carousel">
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-500 ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={image}
            alt={`${title} - ${index + 1}`}
            className="w-full h-full object-cover"
            style={{ imageRendering: 'auto' }}
          />
        </div>
      ))}

      {images.length > 1 && (
        <>
          <button
            onClick={prevImage}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg opacity-0 group-hover/carousel:opacity-100 transition-opacity z-10"
            aria-label="Imagen anterior"
          >
            <ChevronLeft className="w-5 h-5" style={{ color: '#1A1A1A' }} />
          </button>
          <button
            onClick={nextImage}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg opacity-0 group-hover/carousel:opacity-100 transition-opacity z-10"
            aria-label="Imagen siguiente"
          >
            <ChevronRight className="w-5 h-5" style={{ color: '#1A1A1A' }} />
          </button>

          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 z-10">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex
                    ? 'bg-white w-6'
                    : 'bg-white/60 hover:bg-white/80'
                }`}
                aria-label={`Ir a imagen ${index + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  )
}

const Categories = () => {
  return (
    <section id="categories" className="py-24 bg-gradient-to-b from-white to-slate-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-4"
          >
            <h2 className="text-4xl md:text-5xl" style={{ color: '#1A1A1A' }}>
              Conocé nuestros productos
            </h2>
            <p className="text-xl text-slate-600">
              Algunas líneas destacadas
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {catalogItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="aspect-[4/3] overflow-hidden bg-slate-100">
                  <ImageCarousel images={item.images} title={item.title} />
                </div>
                <div className="p-6 space-y-2">
                  <h3 className="text-xl" style={{ color: '#1A1A1A' }}>
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-600">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center pt-8 space-y-6"
          >
            <p className="text-2xl text-slate-700 max-w-3xl mx-auto">
              Descubrí más diseños en nuestro Instagram
            </p>
            <a
              href="https://www.instagram.com/medias.ingrid/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 text-white"
              style={{ backgroundColor: '#E6007E' }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#c0006a'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#E6007E'}
            >
              Visitar Instagram
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Categories


