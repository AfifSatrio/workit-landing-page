"use client"

import Image from "next/image"
import founderImg from "../public/assets/images/image-founder.webp"
import { motion } from "motion/react"

const FounderPhoto = () => {
    return (
        <motion.div 
            initial={{ opacity: 0, x: 20, y: 20 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mx-auto w-full max-w-72 md:col-span-5 md:col-start-1 md:row-start-1 md:mx-0 md:max-w-none">
            <Image src={founderImg} alt="founder" sizes="(min-width: 1152px) 454px, (min-width: 768px), 288px" className="h-auto w-full" />
        </motion.div> 
    )
}

export default FounderPhoto 
