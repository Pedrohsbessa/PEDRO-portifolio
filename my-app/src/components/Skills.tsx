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
                <>
                <PopoverImg
                    name="HTML5"
                    image="assets/HTML5.svg"
                    imagepopover="https://www.freecodecamp.org/portuguese/news/content/images/2022/01/html-examples.jpeg"
                    content="HTML (Hypertext Markup Language) é a linguagem de marcação usada para criar páginas web. Ele define a estrutura e o conteúdo de uma página, utilizando etiquetas para indicar como o texto e os elementos devem ser exibidos no navegador. HTML fornece a base para a criação de documentos web, permitindo a inclusão de texto, imagens, links e outros recursos, tornando a informação acessível na internet."
                    documentation="https://developer.mozilla.org/en-US/docs/Glossary/HTML5"
                />
                </>
                
            </div>
        </motion.div>
    )
}
