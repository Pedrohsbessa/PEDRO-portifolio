'use client'
import React from 'react'
import { motion } from 'framer-motion'
import Skill from './Skill'

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
            <div className="grid grid-cols-4 gap-5 md:mt-20">
                <motion.div
                    initial={{
                        x: 200,
                        opacity: 0,
                    }}
                    transition={{ duration: 1.2, ease: 'linear' }}
                    whileInView={{ opacity: 1, x: 0 }}
                >
                    {' '}
                    <Skill
                        image="https://cdn.worldvectorlogo.com/logos/html-1.svg"
                        proeficiency="90%"
                        name="HTML5"
                    />
                    {/* html */}
                    <Skill
                        image="https://cdn.worldvectorlogo.com/logos/css-3.svg"
                        proeficiency="90%"
                        name="CSS3"
                    />{' '}
                    {/* css */}
                    <Skill
                        image="https://cdn.worldvectorlogo.com/logos/logo-javascript.svg"
                        proeficiency="90%"
                        name="Javascript"
                    />{' '}
                    {/* Javascript */}
                    <Skill
                        image="https://cdn.worldvectorlogo.com/logos/typescript-2.svg"
                        proeficiency="85%"
                        name="Typescript"
                    />{' '}
                    {/* typescript */}
                </motion.div>
                <motion.div
                    initial={{
                        x: -200,
                        opacity: 0,
                    }}
                    transition={{ duration: 1.2, ease: 'linear' }}
                    whileInView={{ opacity: 1, x: 0 }}
                >
                    <Skill
                        image="https://cdn.worldvectorlogo.com/logos/react-2.svg"
                        proeficiency="90%"
                        name="React"
                    />{' '}
                    {/* react */}
                    <Skill
                        image="https://cdn.worldvectorlogo.com/logos/angular-icon-1.svg"
                        proeficiency="55%"
                        name="Angular"
                    />{' '}
                    {/* Angular */}
                    <Skill
                        image="https://cdn.worldvectorlogo.com/logos/tailwind-css-2.svg"
                        proeficiency="90%"
                        name="Tailwind CSS"
                    />{' '}
                    {/* tailwind */}
                    <Skill
                        image="https://cdn.worldvectorlogo.com/logos/styled-components-1.svg"
                        proeficiency="70%"
                    />{' '}
                    {/* Styled Components */}
                </motion.div>
                <motion.div
                    initial={{
                        x: 200,
                        opacity: 0,
                    }}
                    transition={{ duration: 1.2, ease: 'linear' }}
                    whileInView={{ opacity: 1, x: 0 }}
                >
                    {' '}
                    <Skill
                        image="https://cdn.worldvectorlogo.com/logos/next-js.svg"
                        proeficiency="70%"
                        name="Next JS"
                    />{' '}
                    {/* Nextjs */}
                    <Skill
                        image="https://cdn.worldvectorlogo.com/logos/nodejs-1.svg"
                        proeficiency="60%"
                        name="NodeJS"
                    />{' '}
                    {/* Node */}
                    <Skill
                        image="https://cdn.worldvectorlogo.com/logos/express-109.svg"
                        proeficiency="60%"
                        name="Express"
                    />{' '}
                    {/* express */}
                    <Skill
                        image="https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg"
                        proeficiency="60%"
                        name="MongoDB"
                    />{' '}
                    {/* Mongo */}
                </motion.div>
                <motion.div
                    initial={{
                        x: -200,
                        opacity: 0,
                    }}
                    transition={{ duration: 1.2, ease: 'linear' }}
                    whileInView={{ opacity: 1, x: 0 }}
                >
                    {' '}
                    <Skill
                        image="https://cdn.worldvectorlogo.com/logos/microsoft-sql-server-1.svg"
                        proeficiency="50%"
                        name="SQL Server"
                    />{' '}
                    {/* SQL */}
                    <Skill
                        image="https://docs.nestjs.com/assets/logo-small.svg"
                        proeficiency="50%"
                        name="Nest JS"
                    />{' '}
                    {/* Nestjs */}
                    <Skill
                        image="https://cdn.worldvectorlogo.com/logos/java-4.svg"
                        proeficiency="45%"
                        name="Java"
                    />{' '}
                    {/* java */}
                    <Skill
                        image="https://cdn.worldvectorlogo.com/logos/git-icon.svg"
                        proeficiency="90%"
                        name="Git e Github"
                    />{' '}
                    {/* git e versionamento */}
                </motion.div>
            </div>
        </motion.div>
    )
}
