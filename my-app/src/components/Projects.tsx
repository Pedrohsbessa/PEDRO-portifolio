'use client'
import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

export default function ({}: Props) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.6 }}
            className="h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center"
        >
            <h3 className="absolute top-24 uppercase tracking-[15px] text-gray-500 text-2xl">
                Projetos
            </h3>
        </motion.div>
    )
}
