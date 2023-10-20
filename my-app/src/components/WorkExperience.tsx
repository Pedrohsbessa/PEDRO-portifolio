'use client'
import React from 'react'
import { motion } from 'framer-motion'
import ExperienceCard from './ExperienceCard'

type Props = {}
function WorkExperience({}: Props) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.6 }}
            className="h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full sm:px-10 justify-evenly mx-auto items-center"
        >
            <h3 className="absolute top-16 uppercase tracking-[15px] text-gray-500 text-2xl">
                Experiências
            </h3>
            <div className="w-full mt-10 flex space-x-5 p-10 snap-x snap-mandatory justify-center">
                {/* Experience cards */}
                <ExperienceCard />
            </div>
        </motion.div>
    )
}

export default WorkExperience
