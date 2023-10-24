import { Box, Button, Modal, makeStyles } from '@mui/material'
import { Typography } from 'antd'
import React from 'react'

type Props = {
    name: string
    src: string
    title: string
    url: string
    techs: string
}

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    borderRadius: '25px',
    transform: 'translate(-50%, -50%)',
    bgcolor: '#f9f9f9',
    p: 3,
}

export default function ImagesModal({ name, src, title, url, techs }: Props) {
    const [open, setOpen] = React.useState(false)
    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)
    const redirect = () => {
        window.open(url, '_blank')
    }

    return (
        <div>
            <img
                className="shadow-md shadow-geral/40"
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
                <Box
                    sx={style}
                    style={{
                        boxShadow: '1px 10px 15px rgba(163, 206, 241, 1))',
                    }}
                >
                    <div className="flex flex-col items-center  space-y-8">
                        <h2 className="text-2xl font-bold">{name} </h2>
                        <h4 className="text-lg">{title}</h4>
                        <p>
                            Tecnologias:{' '}
                            <span className="text-gray-800">{techs} </span>{' '}
                        </p>
                        <button
                            className="border border-geral w-fit bg-geral/50 hover:bg-geral/70 rounded-lg p-3"
                            onClick={redirect}
                        >
                            Venha conhecer 🌍
                        </button>
                    </div>
                </Box>
            </Modal>
        </div>
    )
}
