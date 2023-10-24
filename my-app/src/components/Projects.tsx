'use client'
import React from 'react'
import { motion } from 'framer-motion'
import projectList from '../projects.json'
import ImagesModal from './ImagesModal'

const container: {
    hidden: {}
    visible: {
        transition: {
            staggerChildren: number
        }
    }
} = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.2,
        },
    },
}

type Props = {}

export default function Projects({}: Props) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className=" flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center z-0"
        >
            <h3 className="absolute top-24 uppercase tracking-[15px] text-gray-500 text-2xl">
                Projetos
            </h3>
            <section id="projects" className="pt-48 pb-48">
                {/* HEADINGS */}
                <motion.div
                    className="md:w-2/5 mx-auto text-center"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, y: -50 },
                        visible: { opacity: 1, y: 0 },
                    }}
                ></motion.div>

                {/* PROJECTS */}
                <div className="flex justify-center">
                    <motion.div
                        className="sm:grid sm:grid-cols-3"
                        variants={container}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        {/* ROW 1 */}
                        <div className="flex justify-center text-center items-center p-10 bg-geral/100 lg: max-w-[500px] max-h-[400px] text-2xl text-black font-semibold">
                            Belas interfaces...
                        </div>
                        {projectList.map((item) => (
                            <div className="m-3" key={item.id}>
                                <ImagesModal
                                    url={item.url}
                                    name={item.name}
                                    src={item.src}
                                    title={item.description}
                                    techs={item.techs}
                                />
                            </div>
                        ))}
                        <div
                            className="flex justify-center text-center items-center p-10 bg-gray-800
              max-w-[500px] max-h-[400px] text-2xl font-semibold"
                        >
                            ...Melhore a sua experiêcia
                        </div>
                    </motion.div>
                </div>
            </section>
        </motion.div>
    )
}
