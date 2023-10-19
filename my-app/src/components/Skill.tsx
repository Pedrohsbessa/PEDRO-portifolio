import React from 'react'
import { motion } from 'framer-motion'

type Props = {
    directionLeft?: boolean
    image?: string
    proeficiency?: string
    name?: string
}

export default function Skill({
    directionLeft,
    image,
    proeficiency,
    name,
}: Props) {
    return (
        <div className="group relative flex cursor-pointer ">
            <motion.img
                initial={{
                    x: directionLeft ? -200 : 200,
                    opacity: 0,
                }}
                transition={{ duration: 1.2, ease: 'linear' }}
                whileInView={{ opacity: 1, x: 0 }}
                src={image}
                className="rounded-full border border-gray-500 object-contain w-12 h-12 md:w-20 md:h-20 filter group-hover:grayscale transition duration-300 ease-in-out bg-gray-200"
            />
            <div className="absolute opacity-0 group-hover:opacity-75 transition duration-300 ease-in-out group-hover:bg-gray-100 w-12 md:w-20 h-12 md:h-20 rounded-full z-0 ">
                <div className="flex items-center justify-center h-full flex-col">
                    <p className="text-base font-bold text-black opacity-100">
                        {proeficiency}
                    </p>
                    <p className="text-[8px] md:text-xs text-black opacity-100 font-bold">
                        {name}
                    </p>
                </div>
            </div>
        </div>
    )
}
