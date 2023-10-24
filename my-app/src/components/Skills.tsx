'use client'
import React from 'react'
import { motion } from 'framer-motion'
import PopoverImg from './PopoverTest'
import content from '../popovers.json'

type Props = {}

export default function Skills({}: Props) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.6 }}
            className="h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center"
        >
            <h3 className="absolute top-16 uppercase tracking-[15px] text-gray-500 text-2xl">
                Skills
            </h3>
            <h3 className="absolute top-36 uppercase tracking-[3px] text-gray-500 text-xs">
                Passe por cima da skill e veja minha proeficiência nela
            </h3>
            <div className="grid grid-cols-4 gap-5 mt-20">
                {content.map((itens) => (
                    <PopoverImg
                        key={itens.id}
                        name={itens.name}
                        image={itens.image}
                        imagepopover={itens.imagepopover}
                        content={itens.content}
                        documentation={itens.documentation}
                    />
                ))}
            </div>
        </motion.div>
    )
}
