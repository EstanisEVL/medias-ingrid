import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import bullbenny from '../../assets/images/clients/Bullbenny.png'
import complot from '../../assets/images/clients/Complot.png'
import frixion from '../../assets/images/clients/Frixion.png'
import hardway from '../../assets/images/clients/Hardway.png'
import nv from '../../assets/images/clients/Nv.png'
import procer from '../../assets/images/clients/Procer.png'
import unitivo from '../../assets/images/clients/Unitivo.png'

const clients = [
  { id: 1, name: 'Bullbenny', logo: bullbenny },
  { id: 2, name: 'Complot', logo: complot },
  { id: 3, name: 'Frixion', logo: frixion },
  { id: 4, name: 'Hardway', logo: hardway },
  { id: 5, name: 'Nv', logo: nv },
  { id: 6, name: 'Procer', logo: procer },
  { id: 7, name: 'Unitivo', logo: unitivo },
]

const Clients = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  // Crear array con duplicados para el efecto infinito
  const extendedClients = [...clients, ...clients, ...clients];
  const visibleCards = 3;

  const nextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev + 1);
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev - 1);
  };

  // Handlers para arrastre
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX);
    setDragOffset(0);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    
    const diff = e.pageX - startX;
    setDragOffset(diff);
  };

  const handleMouseUp = () => {
    if (!isDragging) return;
    
    setIsDragging(false);
    
    // Determinar si cambiar de slide basado en el desplazamiento
    const threshold = carouselRef.current ? carouselRef.current.offsetWidth / (visibleCards * 3) : 100;
    
    if (dragOffset > threshold) {
      prevSlide();
    } else if (dragOffset < -threshold) {
      nextSlide();
    }
    
    setDragOffset(0);
  };

  const handleMouseLeave = () => {
    if (isDragging) {
      handleMouseUp();
    }
  };

  // Resetear cuando llegamos al final o inicio para crear efecto infinito
  useEffect(() => {
    if (!isTransitioning) return;

    const timer = setTimeout(() => {
      setIsTransitioning(false);
      
      // Si llegamos al final del segundo grupo, volver al inicio del segundo grupo
      if (currentIndex >= clients.length * 2) {
        setCurrentIndex(clients.length);
      }
      // Si llegamos antes del primer grupo, saltar al final del primer grupo
      if (currentIndex < clients.length) {
        setCurrentIndex(clients.length * 2 - 1);
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [currentIndex, isTransitioning]);

  // Auto-play opcional (pausar cuando se está arrastrando)
  useEffect(() => {
    if (isDragging) return;
    
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex, isDragging]);

  return (
    <section className="py-24 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Título */}
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl" style={{ color: '#1A1A1A' }}>
              Marcas que confían en nosotros
            </h2>
            <p className="text-xl text-slate-600">
              Trabajamos con las mejores marcas del mercado
            </p>
          </div>

          {/* Carrusel */}
          <div 
            ref={carouselRef}
            className="relative overflow-hidden group select-none"
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
            style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
          >
            <div 
              className={`flex gap-8 ${isTransitioning && !isDragging ? 'transition-transform duration-500 ease-in-out' : ''}`}
              style={{
                transform: `translateX(calc(-${(currentIndex * (100 / visibleCards))}% + ${dragOffset}px))`
              }}
            >
              {extendedClients.map((client, index) => (
                <div 
                  key={`${client.id}-${index}`}
                  className="flex-shrink-0 bg-white rounded-2xl p-12 flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 aspect-square"
                  style={{ 
                    width: `calc((100% - ${(visibleCards - 1) * 2}rem) / ${visibleCards})`,
                    pointerEvents: isDragging ? 'none' : 'auto'
                  }}
                >
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="w-full h-full object-contain"
                    style={{ imageRendering: 'auto' }}
                    draggable={false}
                  />
                </div>
              ))}
            </div>

            {/* Botones de navegación */}
            <button
              onClick={prevSlide}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity z-10"
              aria-label="Marca anterior"
            >
              <ChevronLeft className="w-6 h-6" style={{ color: '#1A1A1A' }} />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity z-10"
              aria-label="Marca siguiente"
            >
              <ChevronRight className="w-6 h-6" style={{ color: '#1A1A1A' }} />
            </button>

            {/* Indicadores de puntos */}
            <div className="flex justify-center gap-2 mt-8">
              {clients.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    if (!isTransitioning) {
                      setIsTransitioning(true);
                      setCurrentIndex(clients.length + index);
                    }
                  }}
                  className={`w-2 h-2 rounded-full transition-all ${
                    (currentIndex % clients.length) === index
                      ? 'w-6'
                      : 'hover:bg-slate-400'
                  }`}
                  style={{ 
                    backgroundColor: (currentIndex % clients.length) === index ? '#E6007E' : '#cbd5e1'
                  }}
                  aria-label={`Ir a marca ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Clients


