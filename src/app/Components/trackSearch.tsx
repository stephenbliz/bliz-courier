'use client';
import { useState } from "react";
import { motion } from "motion/react";

export default function TrackSearch(){
    const [id, setId] = useState('');

    return(
        <motion.form
            className="absolute w-[90%] md:w-[60%] py-[2rem] shadow-lg shadow-shadowColor bg-whiteColor rounded z-[20] top-[22rem] sm:top-[20rem] md:top-[22rem] lg:top-[27.5rem] left-[50%] -translate-x-[50%]"
            initial={{y: 60, x: "-50%", opacity: 0}}
            whileInView={{y: 0, x: "-50%", opacity: 1, transition: {duration:0.5}}}
            viewport={{once: true}}
        >
            <div
                className="flex items-center justify-between mb-8"
            >
                <div
                    className="border-2 border-primaryColor w-[15%] md:w-[25%] lg:w-[30%]"
                ></div>
                <h2
                    className="w-fit uppercase text-sm md:text-lg font-bold text-headerColor font-headerFont"
                >
                    track your product
                </h2>
                <div
                    className="border-2 border-primaryColor w-[15%] md:w-[25%] lg:w-[30%]"
                ></div>
            </div>
            <div
                className="w-[90%] mx-auto flex flex-wrap gap-y-4 items-center justify-between"
            >
                <input 
                    type="text"
                    placeholder="Enter your product id" 
                    value={id}
                    onChange={(e)=>setId(e.target.value)}
                    className="h-[3rem] border rounded border-shadowColor w-full md:w-[45%] px-4 py-2 outline-none shadow-lg placeholder:text-sm placeholder:text-gray-300 focus:border-primaryColor focus:shadow-none shadow-shadowColor transition-all duration-300 ease-linear"
                />
                <button
                    type="submit"
                    className="uppercase w-full md:w-[45%] text-whiteColor hover:bg-headerColor transition-all duration-300 ease-linear bg-primaryColor py-3 rounded"
                >
                    track your product
                </button>
            </div>
        </motion.form>
    )
}