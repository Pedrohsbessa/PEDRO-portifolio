import { motion } from 'framer-motion';
import React from 'react'

type Props = {}

const BackgroundCircles = (props: Props) => {
  return (
    <motion.div
      initial={{
        opacity:0
      }}
      animate={{
        scale:[1,2,2,3,1],
        opacity:[0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
        borderRadius:['20%','20%','50%','80%','20%',]
      }}
      transition={{
        duration:2.5
      }}
      className='relative flex justify-center items-center'>
      <div className='absolute border border-gray-700 rounded-full h-[12.5rem] w-[12.5rem] mt-52 animate-ping'/>
      <div className='absolute border border-gray-700 opacity-50 rounded-full h-[18.75rem] w-[18.75rem] mt-52'/>
      <div className='absolute border border-gray-700 opacity-50 rounded-full h-[31.25rem] w-[31.25rem] mt-52'/>
      <div className='absolute border border-gray-700 rounded-full h-[40.625rem] w-[40.625rem] animate-pulse mt-52 opacity-20'/>
      <div className='absolute border border-gray-700 opacity-50 animate-pulse rounded-full h-[50rem] w-[50rem] mt-52'/>
    </motion.div>
    )
}

export default BackgroundCircles