import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import bullbenny from '../../assets/images/clientes/Cliente - Bullbenny.png'
import complot from '../../assets/images/clientes/Cliente - Complot.png'
import frixion from '../../assets/images/clientes/Cliente - Frixion.png'
import hardway from '../../assets/images/clientes/Cliente - Hardway.png'
import nv from '../../assets/images/clientes/Cliente - NV.png'
import procer from '../../assets/images/clientes/Cliente - Procer.png'
import unitivo from '../../assets/images/clientes/Cliente - Unitivo.png'

const clientes = [
  { name: 'Bullbenny', logo: bullbenny },
  { name: 'Complot', logo: complot },
  { name: 'Frixion', logo: frixion },
  { name: 'Hardway', logo: hardway },
  { name: 'NV', logo: nv },
  { name: 'Procer', logo: procer },
  { name: 'Unitivo', logo: unitivo },
]

const Clientes = () => {
  return (
    <section id="clientes" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Marcas que confían en nosotros
          </h2>
          <p className="text-xl text-gray-600">
            Trabajamos con las mejores marcas del mercado
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 3,
              },
              1024: {
                slidesPerView: 4,
              },
            }}
            navigation
            pagination={{ clickable: true }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            loop
            className="pb-12"
          >
            {clientes.map((cliente) => (
              <SwiperSlide key={cliente.name}>
                <div className="bg-white rounded-xl shadow-md p-6 h-32 flex items-center justify-center hover:shadow-lg transition-shadow">
                  <img
                    src={cliente.logo}
                    alt={cliente.name}
                    className="max-h-20 max-w-full object-contain"
                    loading="lazy"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  )
}

export default Clientes


