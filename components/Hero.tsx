import HeroTitle from './HeroTitle'
import LearnMoreButton from './LearnMoreButton'
import HeroImage from './HeroImage'
import HeroElement from './HeroElement'

const Hero = () => {
    return (
        <section aria-labelledby="hero-title" className="relative isolate bg-ghost-white pt-8 md:pt-12">
            <div aria-hidden="true" className="absolute inset-x-0 top-0 bottom-16 -z-10 rounded-[0_0_100%_100%/0_0_10%_10%] bg-dark-purple md:bottom-24 lg:bottom-32" />
            <HeroElement />
            <HeroTitle />
            <LearnMoreButton />
            <HeroImage />
        </section>
    )
}

export default Hero
