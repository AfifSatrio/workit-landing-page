import Image from "next/image"
import element1 from "../public/assets/images/bg-pattern-1.svg"
import element2 from "../public/assets/images/bg-pattern-2.svg"

const HeroElement = () => {
    return (
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 hidden overflow-hidden md:block">
            <Image src={element1} alt="element1" className="absolute -left-56 top-8 h-auto w-85.25 lg:-left-40" />
            <Image src={element2} alt="element2" className="absolute -right-20 top-60 h-auto w-37.5" />
        </div>
    )
}

export default HeroElement