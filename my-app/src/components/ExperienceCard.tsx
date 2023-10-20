import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

type Props = {}

export default function ExperienceCard({}: Props) {
    return (
        <article className="flex flex-col rounded-lg items-center space-y-4 flex-shrink-0 w-full md:w-[500px] xl:w-[600px] bg-[rgb(41,41,41)] p-6 md:p-10 hover:scale-105 cursor-pointer transition-opacity overflow-hidden mt-6 md:mt-10">
            <motion.img
                initial={{
                    y: -100,
                    opacity: 0,
                }}
                transition={{ duration: 1.3 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="rounded-full max-w-24 max-h-24 md:h-[100px] md:w-[100px] object-cover object-center"
                src="assets/freelancer.png"
                alt="Imagem do trabalho freelancer"
            />
            <div className="px-0 md:px-10">
                <h4 className="text-base md:text-lg font-light">
                    Desenvolvedor web
                </h4>
                <p className="text-lg font-bold mt-1">Freelancer</p>
                <div className="flex space-x-3 my-2">
                    {/* Tech used */}
                    <Link href="https://react.dev/" target="_blank">
                        <img
                            className="h-8 w-8 md:h-10 md:w-10 rounded-full cursor-pointer hover:scale-105"
                            src="/assets/react.svg"
                            alt="React"
                        />
                    </Link>

                    <Link href="https://nextjs.org/" target="_blank">
                        <img
                            className="h-8 w-8 md:h-10 md:w-10 rounded-full cursor-pointer hover:scale-105"
                            src="assets/next-js.svg"
                            alt="Next.js"
                        />
                    </Link>
                    <Link
                        href="https://www.typescriptlang.org/docs/"
                        target="_blank"
                    >
                        <img
                            className="h-8 w-8 md:h-10 md:w-10 rounded-full cursor-pointer hover:scale-105"
                            src="assets/typescript.svg"
                            alt="TypeScript"
                        />
                    </Link>
                    <Link href="https://nodejs.org/pt-br/docs" target="_blank">
                        <img
                            className="h-8 w-8 md:h-10 md:w-10 rounded-full cursor-pointer hover:scale-105"
                            src="assets/nodejs.svg"
                            alt="Node.js"
                        />
                    </Link>
                    <Link href="https://www.mongodb.com/docs/" target="_blank">
                        <img
                            className="h-8 w-8 md:h-10 md:w-10 rounded-full cursor-pointer hover:scale-105"
                            src="assets/mongodb.svg"
                            alt="MongoDB"
                        />
                    </Link>
                    <Link href="https://dev.mysql.com/doc/" target="_blank">
                        <img
                            className="h-8 w-8 md:h-10 md:w-10 rounded-full cursor-pointer hover:scale-105"
                            src="assets/sql.svg"
                            alt="SQL"
                        />
                    </Link>
                </div>
                <p className="uppercase py-2 md:py-3 text-gray-300">
                    09/2022 - atual
                </p>
                <ul className="list-disc space-y-1 sm:space-y-3 md:space-y-5 ml-3 md:ml-5 text-xs sm:text-sm">
                    <li>Desenvolvimento web e servidor.</li>
                    <li>Manutenção e atualizações de sistemas.</li>
                    <li>Comunicação com clientes.</li>
                    <li>Gerenciamento de projetos.</li>
                    <li>Aquisição de clientes e marketing.</li>
                </ul>
            </div>
        </article>
    )
}
