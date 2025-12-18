import { useState, useEffect } from "react";
import { Menu } from "lucide-react";
import logoIngrid from "../../assets/images/logo/medias-ingrid.png";
import { menuSections } from "../../data/menuSections";
import MobileMenu from "./MobileMenu";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (): void => {
    setIsMenuOpen(prev => !prev);
  }

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between lg:justify-center max-w-7xl mx-auto">
            <div className="flex items-center flex-shrink-0 pr-4 lg:pr-48 h-16 sm:h-20">
              <a href="#hero">
                <img
                  src={logoIngrid}
                  alt="Ingrid Medias - Fábrica de medias por mayor"
                  className={`w-auto object-contain transition-all duration-300 ${
                    isScrolled ? "h-12 sm:h-14 md:h-16" : "h-14 sm:h-16 md:h-20"
                  }`}
                  style={{ imageRendering: 'auto' }}
                />
              </a>
            </div>
            <div className="lg:hidden">
              <button
                className="h-12 w-12 flex items-center justify-center text-gray-700 rounded-md"
                onClick={handleClick}
                aria-label="Abrir menú"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
            <div className="hidden lg:flex">
              <nav className="lg:flex items-center gap-8 text-lg font-medium text-gray-600">
                {
                  menuSections.map(section => (
                    <a key={section.id} href={section.href} className="hover:text-gray-900 transition-colors">
                    {section.title}
                    </a>
                  ))
                }
              </nav>
            </div>
          </div>
        </div>
      </header>
      {isMenuOpen && <MobileMenu handleClick={handleClick} isMenuOpen={isMenuOpen} menuSections={menuSections}/>}
    </>
  );
}

export default Header