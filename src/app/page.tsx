import Hero from "./Components/hero"
import TrackSearch from "./Components/trackSearch"
import AboutSection from "./Components/aboutSection"
// import Image from "next/image"
import CostCalculation from "./Components/costCalculation"
import DeliveryMan from "./Components/deliveryMan"

export default function Home(){
    return(
        <section
            className="mt-[5rem] relative overflow-hidden"
        >
            <Hero />
            <TrackSearch />
            <section
                className="px-[5%] relative pb-[5rem] md:pb-[7rem] border-b border-gray-200 mt-[63%] sm:mt-[40%] md:mt-[25%] lg:mt-[20%]"
            >
                <div
                    className="absolute w-[75%] border-[3px] border-primaryColor -bottom-[2.5px] left-[50%] -translate-x-[50%]"
                ></div>
                <h1
                    className="uppercase text-lg md:text-2xl font-bold mb-4 text-headerColor font-headerFont"
                >
                    about us
                </h1>
                <AboutSection />
            </section>
            <section
                className="px-[5%] py-[5rem] flex flex-wrap justify-between items-start"
            >
                
                <DeliveryMan />
                <div
                    className="md:w-[48%]"
                >
                    <h1
                        className="uppercase text-lg md:text-2xl font-bold mb-4 text-headerColor font-headerFont"
                    >
                        calculate your cost
                    </h1>
                    <p
                        className="mb-8"
                    >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Voluptatem quisquam vitae impedit ullam, enim aliquid nostrum 
                        soluta mollitia ipsum numquam harum pariatur! Neque cum 
                    </p>
                    <CostCalculation />
                </div>
            </section>
        </section>
    )
}