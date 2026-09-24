"use client"

import ApplyButtonClosure from "./ApplyButtonClosure"
import Image from "next/image"
import element3 from "../public/assets/images/bg-pattern-3.svg"
import { motion } from "motion/react"

const ClosingStatement = () => {
    return (
        <motion.div 
        initial={{opacity: 0, y: 20, x: 0}}
        whileInView={{opacity: 1, y: 0, x: 0}}
        viewport={{once: true}}
        transition={{duration: 0.5, delay: 0.2, ease: "easeOut"}}
        className="relative -mt-8 flex min-w-0 flex-col items-center gap-4 bg-dark-purple px-6 py-8 text-white md:col-span-9 md:col-start-4 md:row-start-1 md:mt-40 md:items-start md:p-10 lg:col-span-8 lg:col-start-5 lg:mt-44 lg:p-16">
            <h2 id="closure-title" className="text-center font-fraunces-semibold text-[32px] leading-tight md:text-left md:text-[48px]">
                Be the first to test 
            </h2>
            <p className="text-center text-[16px] leading-7 md:text-left">
                Hi, I&apos;m Louis Graham, the founder of the company. Book a demo call with me to become a beta tester for our app and kickstart your company. Apply for access below and I&apos;ll be in touch to schedule a call.
            </p>
            <ApplyButtonClosure />
            <Image src={element3} alt="" aria-hidden="true" className="pointer-events-none absolute -bottom-16 right-8 hidden h-auto w-40 md:block lg:right-16 lg:w-48" />
        </motion.div>
    )
} 

export default ClosingStatement
