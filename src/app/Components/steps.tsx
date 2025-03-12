'use client';
import ImageComponent from "./imageComponent";
import { useEffect, useState } from "react";
import { motion, Variants } from "motion/react";
import { slideInRightVariant2} from "../Utils/animations";

export default function Steps(){
    const [scale, setScale] = useState<number | undefined>(undefined);
    
    useEffect(()=>{
        const updateScale = () => {
            if(window.innerWidth < 640){
                setScale(1.7);
            }else if(window.innerWidth < 1024){
                setScale(1.5);
            }else{
                setScale(1.1);
            }
        }
        updateScale();
        window.addEventListener('resize', updateScale);
        return ()=> window.removeEventListener('resize', updateScale);
        
    }, [])

    const steps = [
        {number: '1.', title: 'order',  des: 'Place your delivery request by providing package details and destination', id: 1},
        {number: '2.', title: 'wait',  des: 'Sit back while our team processes your order and assigns a courier for pickup', id: 2},
        {number: '3.', title: 'deliver',  des: 'Your package is swiftly delivered to its destination with real-time tracking for peace of mind', id: 3},
    ];
    const slideInLeftVariant2: Variants = {
        hidden: {
            opacity: 0,
            x: 100,
            scale: scale!
        },
        visible: {
            opacity: 1,
            x: 0,
            scale: scale!,
            transition: {
                duration: 0.3,
                type: 'spring',
                stiffness: 120
            }
        }
    }
    return(
        <section
                className="px-[5%] py-[5rem] bg-[url('/images/heroImage.jpg')] bg-cover bg-no-repeat bg-center relative"
            >
                <div
                    className="absolute inset-0 bg-black/50"
                ></div>
                <ImageComponent 
                    variant={slideInLeftVariant2}
                    src="/images/deliveryVan.png"
                    alt="A delivery van"
                    position="absolute lg:-right-[15%] md:-right-[10%] -right-[25%] lg:-bottom-[13%] md:bottom-0 bottom-4 scale-[1.7] md:scale-[1.5] lg:scale-[1.1]"
                />
                <div
                    className="flex relative flex-wrap justify-between gap-y-[1rem] items-center md:w-[80%] lg:w-[75%]"
                >
                    {
                        steps.map((step)=>(
                            <div
                                className="w-[90%] md:w-[47%] lg:w-[30%] flex justify-start gap-[5%] lg:gap-0 md:justify-center items-center"
                                key={step.id}
                            >
                                <div
                                    className="w-[10%] lg:w-[30%] text-[2rem] lg:text-[3rem] text-whiteColor font-headerFont font-bold"
                                >
                                    {step.number}
                                </div>
                                <motion.div
                                    className="lg:w-[70%] w-[85%]"
                                    variants={slideInRightVariant2}
                                    initial='hidden'
                                    whileInView='visible'
                                    viewport={{once: true, amount: 0.5}}
                                >
                                    <h3
                                        className="text-lg md:text-xl uppercase font-black text-whiteColor font-headerFont"
                                    >
                                        {step.title}
                                    </h3>
                                    <p>{step.des}</p>
                                </motion.div>
                            </div>
                        ))
                    }
                </div>
            </section>
    )
}