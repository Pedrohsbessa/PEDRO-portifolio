'use client'
import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

export default function About({}: Props) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
        >
            <h3 className="absolute top-24 uppercase tracking-[15px] text-gray-500 text-2xl">
                Sobre mim
            </h3>
            <motion.img
                initial={{
                    x: -200,
                    opacity: 0,
                }}
                transition={{
                    duration: 1.2,
                }}
                // as duas propriedades abaixo podem fazer animação contínua
                // basta menipular o once e usar o whileInView no lugar de animation
                whileInView={{
                    x: 0,
                    opacity: 1,
                }}
                viewport={{
                    once: false,
                }}
                className="-mb-28  md:mb-0 flex-shrink-0 w-28 rounded-full object-cover md:rounded-lg md:w-64 md:h-82 xl:w-[400px] xl:h-[500px]"
                src="assets/about-img.jpg"
            />
            <div className="space-y-10 px-0 md:px-10">
                <h4 className="text-4xl font-semibold">
                    Um{' '}
                    <span className="underline decoration-[#f7ab0a]/50">
                        pouco
                    </span>{' '}
                    sobre mim
                </h4>
                <p className="text-base">
                    Olá! Sou Pedro, um desenvolvedor apaixonado por desafios e
                    tecnologia. Atuo como freelancer desde setembro de 2022, e
                    ao longo desta jornada, tenho aprimorado minhas habilidades
                    em React, Node e as principais bibliotecas relacionadas,
                    criando soluções web de alto nível. <br /> 📊💻 Quando não
                    estou codificando, você pode me encontrar explorando mundos
                    virtuais em jogos eletrônicos 🎮, absorvendo conhecimento
                    por meio da leitura 📚 e aplicando minha criatividade em
                    aventuras de RPG 🎲. <br /> Esses interesses me inspiram a
                    encontrar soluções únicas e inovadoras para os desafios de
                    desenvolvimento.
                    <br /> 👨‍💻✨ Vamos construir o futuro juntos, um código de
                    cada vez.
                    <br /> Se você busca um desenvolvedor apaixonado por
                    tecnologia e sempre pronto para novos desafios, estou à
                    disposição para colaborar em projetos empolgantes. 🤝💡
                </p>
            </div>
        </motion.div>
    )
}
