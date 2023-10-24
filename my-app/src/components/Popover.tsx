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
                <Typography sx={{ p: 1 }}>{content}</Typography>
            </Popover>
        </div>
    )
}
