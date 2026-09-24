import Image from "next/image"
import { socialmedia } from "@/constants"

const SocialMedia = () => {
    return (
        <div className="flex items-center justify-center mt-12 gap-6">
            {socialmedia.map((item) => (
                <Image src={item.src} alt={item.alt} width={item.width} height={item.height} key={item.id} className="cursor-pointer"/>
            ))}
        </div>
    )
}

export default SocialMedia 