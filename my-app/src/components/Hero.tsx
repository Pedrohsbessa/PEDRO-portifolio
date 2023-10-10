"use client"
import React from 'react'
import { Cursor, Typewriter } from 'react-simple-typewriter';

type Props = {}


const Hero = (props: Props) => {
  return (
    <div>
        <Typewriter 
            words={['Olá eu sou o Pedro', 
            '<um cara-apaixonado-por-café.tsx/>☕', 
            '<Também apaixonado por programar/>']}
            loop={0}
            cursor
            delaySpeed={2000}
        />
        <Cursor/>
    </div>
  )
}

export default Hero