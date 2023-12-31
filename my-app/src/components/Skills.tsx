'use client'
import React, { lazy } from 'react'
import { motion } from 'framer-motion'
import content from '../popovers.json'
// import PopoverItem from './Popover'

const PopoverItem = lazy(() => import('./Popover'))

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
            <h3 className="absolute top-36 uppercase tracking-[3px] text-gray-500 text-xs text-center">
                Passe por cima da skill e entenda melhor
            </h3>
            <div className="grid grid-cols-4 gap-5 mt-10 overflow-hidden">
                {content.map((item) => (
                    <PopoverItem
                        name={item.name}
                        key={item.name}
                        image={item.image}
                        content={item.content}
                        imagepopover={item.imagepopover}
                        documentation={item.documentation}
                    />
                ))}
            </div>
        </motion.div>
    )
}
