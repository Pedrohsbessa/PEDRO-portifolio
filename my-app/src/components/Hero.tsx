'use client'
import React from 'react'
import { Cursor, Typewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles'
import Link from 'next/link'

type Props = {}

const Hero = (props: Props) => {
    return (
        <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
            <BackgroundCircles />
            <img
                className="relative rounded-full h-32 w-32 mx-auto object-cover"
                src="/assets/img-perfil.png"
                alt="Imagem de perfil"
            />
            <h2 className="text-center text-sm uppercase text-gray-500 pb-2 tracking-[1.8rem]">
                Software Engineer
            </h2>
            <h1 className="text-2xl lg:text-3xl font-semibold px-10 z-20">
                <span className="mr-3">
                    <Typewriter
                        words={[
                            'Olá eu sou o Pedro',
                            '<um-cara-que-ama-café/>.tsx☕',
                            '<e-ama-ainda-mais-programar/>.tsx❤️',
                        ]}
                        cursor
                        cursorColor="#726d6d"
                        loop={0}
                        delaySpeed={2000}
                    />
                </span>
            </h1>
            <div className="pt-6 z-40">
                <Link href="#about">
                    <button className=" px-6 py-2 border border-[#242424] rounded-full uppercase text-xs tracking-widest text-gray-500 transition-all hover:border-[#f7ab0a]/40 hover:text-[#f7ab0a]/40">
                        Sobre
                    </button>
                </Link>
                <Link href="#experience">
                    <button className=" px-6 py-2 border border-[#242424] rounded-full uppercase text-xs tracking-widest text-gray-500 transition-all hover:border-[#f7ab0a]/40 hover:text-[#f7ab0a]/40">
                        Experiência
                    </button>
                </Link>
                <Link href="#skills">
                    <button className=" px-6 py-2 border border-[#242424] rounded-full uppercase text-xs tracking-widest text-gray-500 transition-all hover:border-[#f7ab0a]/40 hover:text-[#f7ab0a]/40">
                        Skills
                    </button>
                </Link>
                <Link href="#projects">
                    <button className=" px-6 py-2 border border-[#242424] rounded-full uppercase text-xs tracking-widest text-gray-500 transition-all hover:border-[#f7ab0a]/40 hover:text-[#f7ab0a]/40">
                        Projetos
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default Hero
