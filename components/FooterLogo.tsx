import Image from "next/image"
import footerLogo from "../public/assets/images/logo-dark.svg"

const FooterLogo = () => {
    return (
        <div className="flex items-center justify-center">
            <Image src={footerLogo} alt="Workit" className="h-auto w-25" />
        </div>
    )
}

export default FooterLogo 
