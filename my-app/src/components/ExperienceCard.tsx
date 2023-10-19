import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

type Props = {}

export default function ExperienceCard({}: Props) {
    return (
        <article className="flex flex-col rounded-lg items-center space-y-4 flex-shrink-0 w-[400px] md:w-[500px] xl:w-[600px] snap-center bg-[rgb(41,41,41)] p-10 hover:scale-105 cursor-pointer transition-opacity overflow-hidden mt-20">
            <motion.img
                initial={{
                    y: -100,
                    opacity: 0,
                }}
                transition={{ duration: 1.3 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="rounded-full max-w-24 max-h-24 xl:h-[100px] xl:w-[100px] object-cover object-center"
                src="assets/freelancer.png"
            />
            <div className="px-0 md:px-10">
                <h4 className="text-lg font-light">Desenvolvedor web</h4>
                <p className="text-base font-bold mt-1">Freelancer</p>
                <div className="flex space-x-3 my-2">
                    {/* Tech used */}
                    <Link href="https://react.dev/" target="_blank">
                        <img
                           className="h-10 w-10 rounded-full cursor-pointer hover:scale-105"
                            src="/assets/react.svg"
                            alt=""
                        />
                    </Link>

                    <Link href="https://nextjs.org/" target="_blank">
                        <img
                            className="max-h-10 w-10 rounded-full object-cover cursor-pointer hover:scale-105"
                            src="assets/next-js.svg"
                            alt=""
                        />
                    </Link>
                    <Link
                        href="https://www.typescriptlang.org/docs/"
                        target="_blank"
                    >
                        <img
                            className="max-h-10 w-10 rounded-full object-cover  cursor-pointer hover:scale-105"
                            src="assets/typescript.svg"
                            alt=""
                        />
                    </Link>
                    <Link href="https://nodejs.org/pt-br/docs" target="_blank">
                        <img
                           className="max-h-10 w-10 rounded-full object-cover  cursor-pointer hover:scale-105"
                            src="assets/nodejs.svg"
                            alt=""
                        />
                    </Link>
                    <Link href="https://www.mongodb.com/docs/" target="_blank">
                        <img
                            className="h-10 w-10 rounded-full cursor-pointer hover:scale-105"
                            src="assets/mongodb.svg"
                            alt=""
                        />
                    </Link>
                    <Link href="https://dev.mysql.com/doc/" target="_blank">
                        <img
                            className="h-10 w-10 rounded-full cursor-pointer hover:scale-105"
                            src="assets/sql.svg"
                            alt=""
                        />
                    </Link>
                </div>
                <p className="uppercase py-3 text-gray-300">09/2022 - atual</p>
                <ul className="list-disc space-y-5 ml-5 text-base">
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
