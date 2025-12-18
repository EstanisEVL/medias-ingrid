import { useEffect } from "react";
import { X } from "lucide-react";
import logoIngrid from "../../assets/images/logo/medias-ingrid.png";
import type { MobileMenu } from '../../interfaces'

const MobileMenu = ({ handleClick, isMenuOpen, menuSections}: MobileMenu) => {
	useEffect(() => {
		document.body.style.overflow = isMenuOpen ? "hidden" : "auto";
		return () => {
			document.body.style.overflow = "auto";
		};
	}, [isMenuOpen]);

	return(
		<div className="fixed inset-0 z-[100] bg-white flex flex-col">
			<div className="flex items-center justify-between px-4 py-5 border-b">
				<div className="flex items-center flex-shrink-0 pr-4 lg:pr-48 h-16 sm:h-20">
					<a href="#hero">
						<img
							src={logoIngrid}
							alt="Ingrid Medias - Fábrica de medias por mayor"
							className="h-14 sm:h-16 w-auto object-contain"
							style={{ imageRendering: 'auto' }}
						/>
					</a>
				</div>
				<button
					onClick={handleClick}
					aria-label="Cerrar menú"
					className="h-12 w-12 flex items-center justify-center rounded-md hover:bg-gray-100 transition"
				>
					<X className="w-6 h-6" />
				</button>
			</div>

			{/* Navegación */}
			<nav className="flex flex-col gap-6 px-6 py-8 text-xl font-medium text-gray-800">
				{menuSections.map(section => (
					<a
						key={section.id}
						href={section.href}
						onClick={handleClick}
						className="py-2 border-b border-gray-100"
					>
						{section.title}
					</a>
				))}
			</nav>
		</div>
	)
}

export default MobileMenu