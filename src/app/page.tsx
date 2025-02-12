import Hero from "./Components/hero"
import TrackSearch from "./Components/trackSearch"

export default function Home(){
    return(
        <section
            className="mt-[5rem] relative"
        >
            <Hero />
            <TrackSearch />
        </section>
    )
}