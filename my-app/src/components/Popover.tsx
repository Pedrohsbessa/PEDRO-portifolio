import { Popover } from '@mui/material'
import Typography from '@mui/material/Typography'

import React from 'react'

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
    const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null)

    const handlePopoverOpen = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget)
    }

    const handlePopoverClose = () => {
        setAnchorEl(null)
    }

    const open = Boolean(anchorEl)

    return (
        <div>
            <img
                src={image}
                alt={name}
                aria-owns={open ? 'mouse-over-popover' : undefined}
                aria-haspopup="true"
                onMouseEnter={handlePopoverOpen}
                onMouseLeave={handlePopoverClose}
                className="rounded-full w-[60px] h-[60px] sm:w-16 sm:h-16 md:h-20 md:w-20  object-contain bg-white"
            />

            <Popover
                id="mouse-over-popover"
                sx={{
                    pointerEvents: 'none',
                }}
                open={open}
                anchorEl={anchorEl}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
                onClose={handlePopoverClose}
                disableRestoreFocus
            >
                <div className="z-[999] grid w-fit grid-cols-2 overflow-hidden p-0">
                    <div className="p-1">
                        <h2 className="mb-2 text-lg font-bold">{name}</h2>
                        <p className="mb-14 font-normal text-xs sm:text-sm text-blue-gray-500">
                            {content}
                        </p>
                        <a href="#" className="-ml-3 inline-block">
                            <button
                                onClick={redirect}
                                className="flex items-center gap-x-2 capitalize"
                            >
                                Saiba mais
                            </button>
                        </a>
                    </div>
                    <div className="min-h-full !w-full p-3">
                        <img
                            src={imagepopover}
                            alt="image"
                            className="h-full w-full rounded-lg object-cover sm:object-cover"
                        />
                    </div>
                </div>
            </Popover>
        </div>
    )
}
