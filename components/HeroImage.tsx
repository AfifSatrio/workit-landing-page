import Image from "next/image"
import heroImg from '../public/assets/images/image-hero.webp'

const HeroImage = () => {
    return (
        <div className="relative mx-auto top- mt-12 w-[calc(100%-2rem)] max-w-80 md:mt-16 md:max-w-120 lg:max-w-160">
            <Image src={heroImg} alt="hero img" sizes="(min-width: 1024px) 640px, (min-width: 768px) 480px, (min-width: 352px) 320px, calc(100vw - 2rem)" className="h-auto w-full" />
        </div>
    )
}

export default HeroImage
