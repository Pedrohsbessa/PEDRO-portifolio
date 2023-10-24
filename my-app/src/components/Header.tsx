'use client'
import React from 'react'
import { SocialIcon } from 'react-social-icons'
import { motion } from 'framer-motion'

type Props = {}

const Header = (props: Props) => {
    return (
        <header className="sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center">
            <motion.div
                initial={{
                    x: -500,
                    opacity: 0,
                    scale: 0.5,
                }}
                animate={{
                    x: 0,
                    opacity: 1,
                    scale: 0.8,
                }}
                transition={{
                    duration: 1.2,
                }}
                className="flex flex-row items-center"
            >
                {/* Social Icons */}
                <SocialIcon
                    fgColor="gray"
                    bgColor="transparent"
                    network="linkedin"
                    href="https://www.linkedin.com/in/pedro-bessa-4062aa274/"
                    target="_blank"
                />

                <SocialIcon
                    fgColor="gray"
                    bgColor="transparent"
                    network="github"
                    href="https://github.com/Pedrohsbessa"
                    target="_blank"
                />

                <SocialIcon
                    fgColor="gray"
                    bgColor="transparent"
                    network="instagram"
                    href="https://www.instagram.com/pedro.bessa.dev/"
                    target="_blank"
                />

                <SocialIcon
                    fgColor="gray"
                    bgColor="transparent"
                    network="youtube"
                    href="https://www.youtube.com/@LofiGirl"
                    target="_blank"
                />
            </motion.div>
            <motion.div
                initial={{
                    x: 500,
                    opacity: 0,
                    scale: 0.5,
                }}
                animate={{
                    x: 0,
                    opacity: 1,
                    scale: 0.8,
                }}
                transition={{
                    duration: 1.2,
                }}
                className="flex items-center flex-row text-gray-300 cursor-pointer"
            >
                <SocialIcon
                    fgColor="gray"
                    bgColor="transparent"
                    network="email"
                    href="#contact"
                    target="_blank"
                />
                <p className="uppercase hidden md:inline-flex text-sm text-gray-400">
                    entre em contato
                </p>
            </motion.div>
        </header>
    )
}

export default Header
