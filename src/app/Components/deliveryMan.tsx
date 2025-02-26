'use client';
import Image from "next/image"
import { motion } from "motion/react"
import { slideInRightVariant2 } from "../Utils/animations"

export default function DeliveryMan(){
    return(
        <motion.div
            className="md:w-[48%]"
            variants={slideInRightVariant2}
            initial='hidden'
            whileInView='visible'
            viewport={{once: true, amount: 0.5}}
        >
            <Image 
                src='/images/rollingTrolley.jpg'
                alt="Delivery man"
                width={400}
                height={300}
                className="w-full"
            />
        </motion.div>
    )
}