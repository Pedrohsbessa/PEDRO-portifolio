import React from 'react'
import About from '@/components/About'
import ContactMe from '@/components/ContactMe'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import WorkExperience from '@/components/WorkExperience'

export default function Home() {
    return (
        <div
            id="home"
            className="bg-background text-white h-screen snap-y snap-always overflow-y-scroll overflow-x-hidden scrollbar-thin scrollbar-track-gray-400/2 scrollbar-thumb-[#f7ab0a]/80"
        >
            <Header />
            <section id="hero" className="snap-start mt-10">
                <Hero />
            </section>
            <section id="about" className="snap-center mt-10">
                <About />
            </section>
            <section id="experience" className="snap-center mt-10">
                <WorkExperience />
            </section>
            <section id="skills" className=" snap-center mt-10 mb-10">
                <Skills />
            </section>
            <section id="projects" className="snap-center mt-10">
                <Projects />
            </section>
            <section id="contact" className="snap-center mt-10">
                <ContactMe />
            </section>
        </div>
    )
}
