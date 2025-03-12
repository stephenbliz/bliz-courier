import Hero from "./Components/hero"
import TrackSearch from "./Components/trackSearch"
import AboutSection from "./Components/aboutSection"
import CostCalculation from "./Components/costCalculation"
import ImageComponent from "./Components/imageComponent"
import { slideInRightVariant } from "./Utils/animations"
import Steps from "./Components/steps"

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
                
                <ImageComponent 
                    variant={slideInRightVariant}
                    alt='A delivery man pushing trolley'
                    src="/images/rollingTrolley.jpg"
                />
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
                       Easily estimate your shipment cost with our transparent pricing system.
                       Get started now and enjoy fast, reliable delivery at the best rates!
                    </p>
                    <CostCalculation />
                </div>
            </section>
            <Steps />
        </section>
    )
}