"use client"

import { benefit } from "@/constants"
import { motion, stagger } from "motion/react"

const Benefit = () => {
    return (
        <motion.ol 
        initial={{opacity: 0, y: 20, x: 0}}
        whileInView={{opacity: 1, y: 0, x: 0}}
        viewport={{once: true}}
        transition={{delayChildren: stagger(0.2)}}
        role="list" className="mx-auto grid max-w-6xl grid-cols-1 gap-10 lg:grid-cols-3 lg:gap-8">
            {benefit.map((item) => (
                <motion.li 
                initial={{opacity: 0, y: 20, x: 0}}
                whileInView={{opacity: 1, y: 0, x: 0}}
                viewport={{once: true}}
                transition={{delay: 0.2}}
                key={item.id} 
                className="flex flex-col items-center gap-6 text-center md:flex-row md:gap-8 md:text-left lg:flex-col lg:text-center">
                    <span aria-hidden="true" className="flex size-12 shrink-0 items-center justify-center rounded-full border border-davy-grey font-fraunces text-[20px] text-dark-purple">{item.id}</span>
                    <div className="min-w-0">
                        <h2 className="font-fraunces text-[28px] leading-tight text-dark-purple">{item.title}</h2>
                        <p className="mt-4 text-[16px] leading-7 text-davy-grey">{item.description}</p>
                    </div>
                </motion.li>
            ))}
        </motion.ol>
    )
}

export default Benefit
