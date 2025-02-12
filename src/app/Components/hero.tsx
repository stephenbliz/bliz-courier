'use client';
import { LiaCarSideSolid } from "react-icons/lia";
import { motion } from "motion/react";
import { slideInRightVariant, slideInTopVariant } from "../Utils/animations";

export default function Hero(){
    return(
        <section
            className="uppercase relative bg-[url('/images/heroImage.jpg')] bg-cover bg-center bg-no-repeat px-[5%] py-[6rem] md:p-[12%] border-b-4 border-primaryColor text-whiteColor font-semibold font-headerFont "
        >
            <div
                className="absolute inset-0 bg-black/50"
            ></div>
            <div
                className="relative z-[10] h-full flex-col items-center justify-items-center justify-between"
            >
                <motion.div
                    className="w-fit mb-[2rem] text-[4rem]"
                    variants={slideInRightVariant}
                    initial='hidden'
                    animate='visible'
                >
                    <LiaCarSideSolid />
                </motion.div>
                <motion.div
                    className="flex items-center mb-[2rem] text-sm  justify-center gap-2 w-fit"
                    variants={slideInTopVariant}
                    initial='hidden'
                    animate='visible'
                >
                    <div
                        className="w-fit "
                    >
                        fast
                    </div>
                    <div
                        className="w-fit "
                    >
                        .
                    </div>
                    <div
                        className="w-fit "
                    >
                        secured
                    </div>
                    <div
                        className="w-fit "
                    >
                        .
                    </div>
                    <div
                        className="w-fit "
                    >
                        worldwide
                    </div>

                </motion.div>
                <motion.h1
                    className="w-fit text-2xl md:text-4xl lg:text-5xl text-center"
                    variants={slideInTopVariant}
                    initial='hidden'
                    animate='visible'
                >
                    <span className="text-primaryColor">speed</span> meets <span className="text-primaryColor">security</span> in every delivery
                </motion.h1>
            </div>
            
        </section>
    )
}