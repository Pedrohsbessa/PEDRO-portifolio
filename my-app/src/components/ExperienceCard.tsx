import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

export default function ExperienceCard({}: Props) {
    return (
        <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[rgb(41,41,41)] p-10 hover:opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">
            <motion.img
                initial={{
                    y: -100,
                    opacity: 0,
                }}
                transition={{ duration: 1.3 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="rounded-full overflow-hidden max-w-32 max-h-32 xl:h-[200px] object-cover object-center"
                src="assets/freelancer.png"
            />
            <div className="px-0 md:px-10">
                <h4 className="text-3xl font-light">
                    Desenvolvedor full stack
                </h4>
                <p className="text-xl font-bold mt-1">Freelancer</p>
                <div className="flex space-x-3 my-2">
                    {/* Tech used */}
                    <img
                        className="h-10 w-10 rounded-full"
                        src="/assets/react.svg"
                        alt=""
                    />
                    <img
                        className="h-10 w-10 rounded-full bg-gray-300"
                        src="assets/next-js.svg"
                        alt=""
                    />
                    <img
                        className="h-10 w-10 rounded-full"
                        src="assets/typescript.svg"
                        alt=""
                    />
                    <img
                        className="h-10 w-10 rounded-full"
                        src="assets/nodejs.svg"
                        alt=""
                    />
                    <img
                        className="h-10 w-10 rounded-full"
                        src="assets/mongodb.svg"
                        alt=""
                    />
                    <img
                        className="h-10 w-10 rounded-full"
                        src="assets/sql.svg"
                        alt=""
                    />
                    {/* Tech used */}
                    {/* Tech used */}
                    {/* Tech used */}
                    {/* Tech used */}
                </div>
                <p className="uppercase py-5 text-gray-300">09/2022 - atual</p>
                <ul className="list-disc space-y-4 ml-5 text-lg">
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
