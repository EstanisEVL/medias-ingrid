import hero1 from '../../assets/images/hero/hero1.png'
import hero2 from '../../assets/images/hero/Hero2.png'
import hero3 from '../../assets/images/hero/hero3.jpg'

const images = [hero1, hero2, hero3]

const HeroMedia = () => {
	return (
		<div className="relative w-full h-full">
			{images.map((src, index) => (
				<img
					key={index}
					src={src}
					alt=""
					className="
						absolute inset-0
						w-full h-full
						object-cover
						opacity-0
						animate-heroFade
					"
					style={{
						animationDelay: `${index * 3}s`,
					}}
				/>
			))}
			<div className="absolute inset-0 bg-gradient-to-tr from-pink-500/10 via-transparent to-white/20" />
		</div>
	)
}

export default HeroMedia
