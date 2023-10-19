import About from '@/components/About'
import ContactMe from '@/components/ContactMe'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import WorkExperience from '@/components/WorkExperience'

export default function Home() {
    return (
        <div className="bg-background text-white h-screen snap-y snap-mandatory overflow-scroll overflow-x-hidden z-0">
            {/* HEADER */}
            <Header />
            {/* MAIN */}
            <section id="hero" className="sm:snap-start">
                <Hero />
            </section>
            {/* ABOUT */}
            <section id="about" className="sm:snap-center">
                <About />
            </section>
            {/* EXPERIENCE */}
            <section id="experience" className="sm:snap-center">
                <WorkExperience />
            </section>
            {/* SKILLS */}
            <section id="skills" className="md:snap-center">
                <Skills />
            </section>
            {/* PROJECTS */}
            <section id="projects" className="sm:snap-start">
                <Projects />
            </section>

            {/* CONTACT ME */}
            <section id="contact" className="sm:snap-start">
                <ContactMe />
            </section>
        </div>
    )
}
