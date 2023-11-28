import { Box, Button, Modal, makeStyles, useMediaQuery } from '@mui/material'
import { Typography } from 'antd'
import React from 'react'

type Props = {
    name: string
    src: string
    title: string
    url: string
    techs: string
}

export default function ImagesModal({ name, src, title, url, techs }: Props) {
    const [open, setOpen] = React.useState(false)
    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)
    const redirect = () => {
        window.open(url, '_blank')
    }

    // Use the useMediaQuery hook to check screen size
    const isMobile = useMediaQuery('(max-width: 600px')

    // Define styles for the modal based on screen size
    const modalStyle = {
        position: 'absolute' as 'absolute',
        top: '50%',
        left: '50%',
        width: isMobile ? '100%' : '50%',
        // borderRadius: '25px',
        transform: 'translate(-50%, -50%)',
        bgcolor: '#242424',
        p: 3,
        // boxShadow: isMobile ? 'none' : '1px 2px 4px rgba(163, 206, 241, .6)',
    }

    return (
        <div>
            <img
                className="shadow-sm rounded-md sm:bg-red-50 shadow-geral/40 cursor-pointer"
                onClick={handleOpen}
                src={src}
                alt={name}
            />
            <Modal
                sx={{}}
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={modalStyle}>
                    <div className="flex flex-col items-center border-0 space-y-8">
                        <h2 className="text-2xl font-bold text-gray-100">
                            {name}{' '}
                        </h2>
                        <h4 className="text-lg text-gray-100">{title}</h4>
                        <p className="text-gray-100">
                            Tecnologias:{' '}
                            <span className="text-geral">{techs} </span>{' '}
                        </p>
                        <button
                            className="flex items-center gap-2 border border-geral w-fit bg-white hover:bg-transparent hover:text-white rounded-lg p-3"
                            onClick={redirect}
                        >
                            Venha conhecer!
                            <img className='w-6' src="/assets/click.gif" alt="a" />
                        </button>
                    </div>
                </Box>
            </Modal>
        </div>
    )
}
