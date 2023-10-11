import About from '@/components/About'
import Header from '@/components/Header'
import Hero from '@/components/Hero'

export default function Home() {
    return (
        <div className="bg-background text-white h-screen snap-y snap-mandatory overflow-scroll z-0">
            {/* HEADER */}
            <Header />
            {/* MAIN */}
            <section id="hero" className="snap-start">
                <Hero />
            </section>
            {/* ABOUT */}
            <section id="about" className="snap-center">
                <About />
            </section>
            {/* SKILLS */}
            {/* PROJECTS */}
            {/* EXPERIENCE */}
            {/* CONTACT ME */}
        </div>
    )
}
