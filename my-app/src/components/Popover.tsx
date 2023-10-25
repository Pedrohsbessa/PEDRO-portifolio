import Typography from '@mui/material/Typography'

import React from 'react'
import { Popover } from 'antd'
import { Fade } from '@mui/material'
import {
    ArrowRightCircleIcon,
    ArrowRightIcon,
} from '@heroicons/react/24/outline'

type Props = {
    name: string
    content: string
    image: string
    imagepopover: string
    documentation: string
}

export default function PopoverItem({
    image,
    imagepopover,
    name,
    content,
    documentation,
}: Props) {
    const redirect = () => {
        window.open(documentation, '_blank')
    }
    const body = (
        <div className="">
            <div className=" grid w-full sm:w-[50rem] grid-cols-2">
                <div className="p-2 flex flex-col justify-between">
                    <h2 className="mb-2 text-lg font-bold text-gray-500">
                        {name}
                    </h2>
                    <p className="mb-14 font-normal text-xs text-gray-500">
                        {content}
                    </p>
                    <a href="#" className=" inline-block">
                        <button
                            onClick={redirect}
                            className="flex items-center gap-x-2 capitalize bg-geral/50 text-gray-500 border border-geral rounded-lg p-1 hover:bg-geral/20"
                        >
                            Saiba Mais
                        </button>
                    </a>
                </div>
                <div className="h-full w-full p-0">
                    <img
                        src={imagepopover}
                        alt="image"
                        className="h-full w-full rounded-lg object-cover sm:object-cover hidden sm:block"
                    />
                    <img
                        src="/assets/gifCoding.gif"
                        alt="image"
                        className="h-full w-full rounded-lg object-contain sm:hidden"
                    />
                </div>
            </div>
        </div>
    )
    return (
        <Fade timeout={4000}>
            <Popover content={body}>
                <img
                    src={image}
                    alt={name}
                    className="rounded-full w-[60px] h-[60px] sm:w-16 sm:h-16 md:h-20 md:w-20  object-contain bg-white"
                />
            </Popover>
        </Fade>
    )
}
