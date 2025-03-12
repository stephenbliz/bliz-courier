'use client';
import Image from "next/image"
import { motion } from "motion/react"
import { imageComponentProp } from "../Utils/types";

export default function ImageComponent({position, variant, alt, src}:imageComponentProp){
    return(
        <motion.div
            className={`md:w-[48%] ${position}`}
            variants={variant}
            initial='hidden'
            whileInView='visible'
            viewport={{once: true, amount: 0.2}}
        >
            <Image 
                src={src}
                alt={alt}
                width={400}
                height={300}
                className="w-full"
            />
        </motion.div>
    )
}