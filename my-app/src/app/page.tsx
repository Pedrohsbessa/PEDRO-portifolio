import About from '@/components/About'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import WorkExperience from '@/components/WorkExperience'

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
            {/* EXPERIENCE */}
            <section id="experience" className="snap-center">
                <WorkExperience />
            </section>
            {/* SKILLS */}
            <section id="skills" className="snap-center">
                <Skills />
            </section>
            {/* PROJECTS */}
            <section id="projects" className="snap-start">
                <Projects />
            </section>

            {/* CONTACT ME */}
            <section id="contact" className=""></section>
        </div>
    )
}
