'use client';
import Image from "next/image";
import { TfiRocket } from "react-icons/tfi";
import { MdOutlineSecurity } from "react-icons/md";
import { FaTruckFront } from "react-icons/fa6";
import { motion } from "motion/react";
import { leftRotateVariant, slideInLeftVariant, slideInTopVariant } from "../Utils/animations";

export default function AboutSection(){
    const features = [
        {name: 'fast delivery', desc: "Speed is our priority! We guarantee timely deliveries, whether it's same-day, next-day, or express shipping.", icon: <TfiRocket />, id: 1},
        {name: 'secured service', desc: 'Your package is safe with us. We handle every shipment with care, using secure packaging and real-time tracking for peace of mind.', icon: <MdOutlineSecurity />, id: 2},
        {name: 'worldwide shipping', desc: 'We deliver to any destination across the globe, ensuring your packages reach you no matter where you are.', icon: <FaTruckFront />, id: 3},
    ];

    return(
        <div
            className="flex flex-wrap items-start justify-between"
        >
            <div
                className="w-full md:w-[48%] mb-8 md:mb-0"
            >
                <motion.p
                    className="mb-8 "
                    variants={slideInTopVariant}
                    initial='hidden'
                    whileInView='visible'
                    viewport={{once:true, amount: 0.2}}
                >
                     We are committed to providing fast, reliable, and 
                     secure courier delivery services tailored to meet 
                     your needs. Whether it&apos;s personal packages, business 
                     shipments, or urgent deliveries, we ensure that 
                     your items reach their destination safely and on time.
                </motion.p>
                <div>
                    {
                        features.map((feature)=>(
                            <div
                                className="flex items-center justify-start gap-[2rem] mb-4 last:mb-0"
                                key={feature.id}
                            >
                                <motion.div
                                    className="w-fit text-[2.5rem]"
                                    variants={slideInTopVariant}
                                    initial='hidden'
                                    whileInView='visible'
                                    viewport={{once:true, amount: 0.5}}
                                >
                                    {feature.icon}
                                </motion.div>
                                <motion.h2
                                    className="w-fit origin-right"
                                    variants={leftRotateVariant}
                                    initial='hidden'
                                    whileInView='visible'
                                    viewport={{once: true, amount: 0.6}}
                                >
                                    <span
                                        className=" uppercase font-semibold block font-headerFont text-headerColor "
                                    >
                                        {feature.name}
                                    </span>
                                    <span>
                                        {feature.desc}
                                    </span>
                                </motion.h2>
                            </div>
                        ))
                    }
                </div>
            </div>
            <motion.div
                className="w-full md:w-[48%]"
                variants={slideInLeftVariant}
                initial='hidden'
                whileInView='visible'
                viewport={{once: true, amount: 0.7}}
            >
                <Image 
                    src='/images/deliveryVan.png'
                    alt="Image of a delivery van"
                    className="w-full scale-125"
                    width={400}
                    height={300}
                />
            </motion.div>
        </div>
    )
}