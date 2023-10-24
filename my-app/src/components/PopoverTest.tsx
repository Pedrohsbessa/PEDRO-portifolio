import React from 'react'
import {
    Popover,
    PopoverHandler,
    PopoverContent,
    Button,
    Typography,
} from '@material-tailwind/react'

type Props = {
    name: string
    content: string
    image: string
    imagepopover: string
    documentation: string
}

export default function PopoverImg({
    image,
    imagepopover,
    name,
    content,
    documentation,
}: Props) {
    const redirect = () => {
        window.open(documentation, '_blank')
    }
    const [openPopover, setOpenPopover] = React.useState(false)

    const triggers = {
        onMouseEnter: () => setOpenPopover(true),
        onMouseLeave: () => setOpenPopover(false),
    }
    return (
        <Popover open={openPopover} handler={setOpenPopover}>
            <PopoverHandler {...triggers}>
                <img
                    src={image}
                    alt=""
                    className="rounded-full w-[60px] h-[60px] sm:w-16 sm:h-16 md:h-20 md:w-20  object-contain bg-white"
                />
            </PopoverHandler>
            <PopoverContent
                {...triggers}
                className="z-[999] grid w-fit grid-cols-2 overflow-hidden p-0"
            >
                <div className="p-1">
                    <Typography
                        color="blue-gray"
                        className="mb-2 text-lg font-bold"
                    >
                        {name}
                    </Typography>
                    <Typography
                        variant="small"
                        color="gray"
                        className="mb-14 font-normal text-xs sm:text-sm text-blue-gray-500"
                    >
                        {content}
                    </Typography>
                    <a href="#" className="-ml-3 inline-block">
                        <Button
                            size="sm"
                            variant="text"
                            className="flex items-center gap-x-2 capitalize"
                            onClick={redirect}
                        >
                            Saiba mais
                            <svg
                                width="7"
                                height="12"
                                viewBox="0 0 7 12"
                                fill="none"
                            >
                                <path
                                    d="M1.25 1.91669L5.33333 6.00002L1.25 10.0834"
                                    stroke="#212121"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                            </svg>
                        </Button>
                    </a>
                </div>

                <div className="min-h-full !w-full p-3">
                    <img
                        src={imagepopover}
                        alt="image"
                        className="h-full w-full rounded-lg object-cover sm:object-cover"
                    />
                </div>
            </PopoverContent>
        </Popover>
    )
}
