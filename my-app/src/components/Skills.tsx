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
                <Skill
                    directionLeft={true}
                    image="https://cdn.worldvectorlogo.com/logos/html-1.svg"
                    proeficiency="90%"
                    name="HTML5"
                />
                {/* html */}
                <Skill
                    directionLeft={true}
                    image="https://cdn.worldvectorlogo.com/logos/css-3.svg"
                    proeficiency="90%"
                    name="CSS3"
                />{' '}
                {/* css */}
                <Skill
                    directionLeft={true}
                    image="https://cdn.worldvectorlogo.com/logos/logo-javascript.svg"
                    proeficiency="90%"
                    name="Javascript"
                />{' '}
                {/* Javascript */}
                <Skill
                    directionLeft={true}
                    image="https://cdn.worldvectorlogo.com/logos/typescript-2.svg"
                    proeficiency="85%"
                    name="Typescript"
                />{' '}
                {/* typescript */}
                <Skill
                    directionLeft={false}
                    image="https://cdn.worldvectorlogo.com/logos/react-2.svg"
                    proeficiency="90%"
                    name="React"
                />{' '}
                {/* react */}
                <Skill
                    directionLeft={false}
                    image="https://cdn.worldvectorlogo.com/logos/angular-icon-1.svg"
                    proeficiency="55%"
                    name="Angular"
                />{' '}
                {/* Angular */}
                <Skill
                    directionLeft={false}
                    image="https://cdn.worldvectorlogo.com/logos/tailwind-css-2.svg"
                    proeficiency="90%"
                    name="Tailwind CSS"
                />{' '}
                {/* tailwind */}
                <Skill
                    directionLeft={false}
                    image="https://cdn.worldvectorlogo.com/logos/styled-components-1.svg"
                    proeficiency="70%"
                />{' '}
                {/* Styled Components */}
                <Skill
                    directionLeft={true}
                    image="https://cdn.worldvectorlogo.com/logos/next-js.svg"
                    proeficiency="70%"
                    name="Next JS"
                />{' '}
                {/* Nextjs */}
                <Skill
                    directionLeft={true}
                    image="https://cdn.worldvectorlogo.com/logos/nodejs-1.svg"
                    proeficiency="60%"
                    name="NodeJS"
                />{' '}
                {/* Node */}
                <Skill
                    directionLeft={true}
                    image="https://cdn.worldvectorlogo.com/logos/express-109.svg"
                    proeficiency="60%"
                    name="Express"
                />{' '}
                {/* express */}
                <Skill
                    directionLeft={true}
                    image="https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg"
                    proeficiency="60%"
                    name="MongoDB"
                />{' '}
                {/* Mongo */}
                <Skill
                    directionLeft={false}
                    image="https://cdn.worldvectorlogo.com/logos/microsoft-sql-server-1.svg"
                    proeficiency="50%"
                    name="SQL Server"
                />{' '}
                {/* SQL */}
                <Skill
                    directionLeft={false}
                    image="https://docs.nestjs.com/assets/logo-small.svg"
                    proeficiency="50%"
                    name="Nest JS"
                />{' '}
                {/* Nestjs */}
                <Skill
                    directionLeft={false}
                    image="https://cdn.worldvectorlogo.com/logos/java-4.svg"
                    proeficiency="45%"
                    name="Java"
                />{' '}
                {/* java */}
                <Skill
                    directionLeft={false}
                    image="https://cdn.worldvectorlogo.com/logos/git-icon.svg"
                    proeficiency="90%"
                    name="Git e Github"
                />{' '}
                {/* git e versionamento */}
            </div>
        </motion.div>
    )
}
