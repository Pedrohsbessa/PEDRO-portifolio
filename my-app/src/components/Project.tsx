'use client'
import React from 'react'
import { motion } from 'framer-motion'

type Props = { name: string; src: string; title: string; url: string }

const projectVariant: {
    hidden: { opacity: number; scale: number }
    visible: { opacity: number; scale: number }
} = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
}
export default function Project({ name, src, title, url }: Props) {
    const redirect = () => {
        window.open(`${url}`, '_blank')
    }

    return (
        <motion.div
            initial={{
                x: -200,
                opacity: 0,
            }}
            whileInView={{
                x: 0,
                opacity: 1,
            }}
            transition={{
                duration: 1.2,
            }}
            className="relative mb-6 p-2 rounded-lg  "
        >
            <img src={src} alt={name} />
            <div className="space-y-2">
                <p className="text-base text-gray-500">{name}</p>
                <p className="text-xs text-gray-500">{title}</p>

                <button
                    onClick={redirect}
                    className="w-full bg-geral hover:bg-geral/80 p-1 text-black font-semibold rounded-lg"
                >
                    Conheça
                </button>
            </div>
        </motion.div>
    )
}
