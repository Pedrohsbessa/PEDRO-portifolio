'use client'
import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

export default function About({}: Props) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5 }}
            className="h-screen flex flex-col items-center justify-center text-center md:text-left max-w-7xl mx-auto px-4 md:px-10"
        >
            <h3 className="uppercase text-gray-500 text-2xl md:text-3xl mb-14">
                Sobre mim
            </h3>
            <div className="flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0">
                <motion.img
                    initial={{
                        x: -200,
                        opacity: 0,
                    }}
                    animate={{
                        x: 0,
                        opacity: 1,
                    }}
                    transition={{
                        duration: 1.2,
                    }}
                    className="mb-6 md:mb-0 w-32 h-32 md:w-64 md:h-72 lg:w-96 lg:h-96 rounded-full object-cover"
                    src="assets/about-img.jpg"
                    alt="Imagem de perfil"
                />
                <div className="space-y-6 px-2 md:px-6 text-xs md:text-sm">
                    <h4 className="text-xl md:text-2xl lg:text-3xl font-semibold">
                        Um {''}
                        <span className="text-geral">pouco</span>
                        {''} sobre mim
                    </h4>
                    <p>
                        Olá! Sou Pedro, um desenvolvedor apaixonado por desafios
                        e tecnologia. Atuo como freelancer desde setembro de
                        2022, e ao longo desta jornada, tenho aprimorado minhas
                        habilidades em React, Node e as principais bibliotecas
                        relacionadas, criando soluções web de alto nível. 📊💻
                        Quando não estou codificando, você pode me encontrar
                        explorando mundos virtuais em jogos eletrônicos 🎮,
                        absorvendo conhecimento por meio da leitura 📚 e
                        aplicando minha criatividade em aventuras de RPG 🎲.
                        Esses interesses me inspiram a encontrar soluções únicas
                        e inovadoras para os desafios de desenvolvimento.👨‍💻⚙️
                        Vamos construir o futuro juntos, um código de cada vez.
                        Se você busca um desenvolvedor apaixonado por tecnologia
                        e sempre pronto para novos desafios, estou à disposição
                        para colaborar em projetos empolgantes. 🤝💡
                    </p>
                </div>
            </div>
        </motion.div>
    )
}
