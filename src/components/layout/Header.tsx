import { useState, useEffect } from "react";
import logoIngrid from "../../assets/images/logo/medias-ingrid.png";
import { menuSections } from "../../data/menuSections";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center max-w-7xl mx-auto">
          <div className="flex items-center flex-shrink-0 pr-4 lg:pr-48">
            <a href="#hero">
              <img
                src={logoIngrid}
                alt="Ingrid Medias - Fábrica de medias por mayor"
                className={`w-auto object-contain transition-all duration-300 ${
                  isScrolled ? "h-14 md:h-16" : "h-18 md:h-20"
                }`}
                style={{ imageRendering: 'auto' }}
              />
            </a>
					</div>
					<div>
						<nav className="flex items-center gap-8 text-lg font-medium text-gray-600">
							{
								menuSections.map(section => (
									<a key={section.id} href={section.href} className="hover:text-gray-900 transition-colors after:w-full">
									{section.title}
									</a>
								))
							}
          	</nav>
					</div>
        </div>
      </div>
    </header>
  );
}

export default Header