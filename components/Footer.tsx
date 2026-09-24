import FooterLogo from "./FooterLogo"
import SocialMedia from "./SocialMedia"

const Footer = () => {
    return (
        <footer className="flex flex-col items-center bg-white px-4 pt-20 pb-16 md:pt-32 md:pb-20">
            <FooterLogo />
            <SocialMedia />
        </footer>
    )
}

export default Footer
