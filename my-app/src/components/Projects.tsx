'use client'
import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

export default function Projects({}: Props) {
    let projects = [1, 2, 3, 4, 5]
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center z-0"
        >
            <h3 className="absolute top-24 uppercase tracking-[15px] text-gray-500 text-2xl">
                Projetos
            </h3>
            <div className="w-full absolute top-[15%] bg-[#f7ab0a]/10 left-0 h-[400px] -skew-y-12" />
            <div className=" relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-thin scrollbar-track-gray-400/2 scrollbar-thumb-[#f7ab0a]/80">
                {projects.map((project, i) => (
                    <div
                        key={i}
                        className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-4 md:p-8 sm:p-10 h-screen"
                    >
                        <motion.img
                            initial={{ opacity: 0 }}
                            transition={{ duration: 1.2 }}
                            whileInView={{ opacity: 1 }}
                            src="https://integrum.inf.br/wp-content/uploads/projeto.png"
                            alt={`Projeto ${i + 1}`}
                            className="max-w-full w-80 md:w-96 lg:w-108 xl:w-120"
                        />
                        <div className="space-y-10 px-0 md:px-10 max-w-6xl">
                            <h4 className="text-2xl font-semibold text-center">
                                <span className="underline decoration-[#f7ab0a]/50">
                                    Projeto {i + 1} de {projects.length}:
                                </span>{' '}
                                Space app
                            </h4>
                            <p className="text-sm text-center md:text-left">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Porro, culpa. Atque numquam
                                aspernatur est sed ut adipisci optio quisquam
                                asperiores dicta nisi unde quae quos eveniet
                                officiis nulla, non odit!
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </motion.div>
    )
}
