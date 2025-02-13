import Hero from "./Components/hero"
import TrackSearch from "./Components/trackSearch"
import AboutSection from "./Components/aboutSection"

export default function Home(){
    return(
        <section
            className="mt-[5rem] relative"
        >
            <Hero />
            <TrackSearch />
            <section
                className="px-[5%] mt-[63%] sm:mt-[40%] md:mt-[25%] lg:mt-[20%]"
            >
                <h1>
                    about
                </h1>
                <AboutSection />
            </section>
        </section>
    )
}