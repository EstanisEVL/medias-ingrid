import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { clients } from '../../data/clients';

const Clients = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3);
  const carouselRef = useRef<HTMLDivElement>(null);

  const extendedClients = [...clients, ...clients, ...clients];

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

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    setStartX(e.touches[0].pageX);
    setDragOffset(0);
  };
  
  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
  
    const diff = e.touches[0].pageX - startX;
    setDragOffset(diff);
  };
  
  const handleTouchEnd = () => {
    if (!isDragging) return;
  
    setIsDragging(false);
  
    const threshold = carouselRef.current
      ? carouselRef.current.offsetWidth / (visibleCards * 3)
      : 100;
  
    if (dragOffset > threshold) {
      prevSlide();
    } else if (dragOffset < -threshold) {
      nextSlide();
    }
  
    setDragOffset(0);
  };  

  useEffect(() => {
    const updateVisibleCards = () => {
      if (window.innerWidth < 640) {
        setVisibleCards(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCards(2);
      } else {
        setVisibleCards(3);
      }
    };
  
    updateVisibleCards();
    window.addEventListener("resize", updateVisibleCards);
    return () => window.removeEventListener("resize", updateVisibleCards);
  }, []);

  useEffect(() => {
    if (!isTransitioning) return;

    const timer = setTimeout(() => {
      setIsTransitioning(false);
      
      if (currentIndex >= clients.length * 2) {
        setCurrentIndex(clients.length);
      }
      if (currentIndex < clients.length) {
        setCurrentIndex(clients.length * 2 - 1);
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [currentIndex, isTransitioning]);

  useEffect(() => {
    if (isDragging || visibleCards === 1) return;
  
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);
  
    return () => clearInterval(interval);
  }, [currentIndex, isDragging, visibleCards]);

  useEffect(() => {
    setCurrentIndex(clients.length);
  }, []);

  const slidePercentage = visibleCards === 1 ? 100 : 100 / visibleCards;

  return (
    <section id="clients" className="py-24 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl" style={{ color: '#1A1A1A' }}>
              Marcas que confían en nosotros
            </h2>
            <p className="text-xl text-slate-600">
              Trabajamos con las mejores marcas del mercado
            </p>
          </div>

          <div 
            ref={carouselRef}
            className="relative overflow-hidden group select-none"
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
          >
            <div
              className={`flex ${
                isTransitioning && !isDragging
                  ? 'transition-transform duration-500 ease-in-out'
                  : ''
              }`}
              style={{
                transform: `translateX(calc(-${currentIndex * slidePercentage}% + ${dragOffset}px))`
              }}
            >
              {extendedClients.map((client, index) => (
                <div
                  key={`${client.id}-${index}`}
                  className="flex-shrink-0 flex justify-center"
                  style={{
                    width: visibleCards === 1
                      ? '100%'
                      : `calc((100% - ${(visibleCards - 1) * 2}rem) / ${visibleCards})`,
                    pointerEvents: isDragging ? 'none' : 'auto'
                  }}
                >
                  <div className="bg-white rounded-2xl p-6 sm:p-10 lg:p-12 flex items-center justify-center shadow-lg aspect-square w-[85%] max-w-sm">
                    <img
                      src={client.logo}
                      alt={client.name}
                      className="w-full h-full object-contain"
                      draggable={false}
                    />
                  </div>
                </div>
              ))}
            </div>

            {visibleCards > 1 && (
              <>
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
              </>
            )}

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


