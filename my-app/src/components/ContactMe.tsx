'use client'
import React, { useState } from 'react'
import emailJs from '@emailjs/browser'
import { useForm, SubmitHandler } from 'react-hook-form'

import Snackbar from '@mui/material/Snackbar'
import { EnvelopeIcon, MapIcon, PhoneIcon } from '@heroicons/react/24/outline'
import { Alert } from '@mui/material'

type Props = {}

type Inputs = {
    name: string
    email: string
    subject: string
    message: string
}

export default function ContactMe({}: Props) {
    const { register, handleSubmit, reset } = useForm<Inputs>()

    const [notification, setNotification] = useState({
        open: false,
        message: '',
        type: 'sucess', // ou 'error' para notificação de erro
    })

    const handleCloseNotification = () => {
        setNotification({ ...notification, open: false })
    }

    const showNotification = (message: string, type: 'success' | 'error') => {
        setNotification({
            open: true,
            message,
            type,
        })
    }

    const onSubmit: SubmitHandler<Inputs> = (data: Inputs) => {
        emailJs
            .send(
                'service_34byqco',
                'template_awzw9el',
                data,
                'SFmo1nuHc8kLxyjR_'
            )
            .then(() => {
                showNotification('Email enviado com sucesso', 'success')
                reset()
            })
            .catch(() => {
                showNotification('Erro ao enviar o email', 'error')
            })
    }

    return (
        <div className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
            <h3 className="absolute top-16 uppercase tracking-[1rem] text-gray-500 text-2xl">
                contato
            </h3>
            <div className="flex flex-col space-y-6 ">
                <h4 className="text-2xl font-semibold text-center uppercase">
                    Eu tenho aquilo que você precisa.
                    <br />
                    <span className="decoration-[#f7ab0a]/50 underline uppercase">
                        vamos conversar.
                    </span>
                </h4>
                <div className="space-y-10">
                    <div className=" flex items-center space-x-6 justify-center">
                        <PhoneIcon className="text-[#f7ab0a] h-6 w-6 animate-pulse" />
                        <p className="text-lg font-light">(62) 99698 3867</p>
                    </div>
                    <div className=" flex items-center space-x-6 justify-center">
                        <EnvelopeIcon className="text-[#f7ab0a] h-6 w-6 animate-pulse" />
                        <p className="text-lg font-light">
                            pedro.bessa.dev@gmail.com
                        </p>
                    </div>
                    <div className=" flex items-center space-x-6 justify-center">
                        <MapIcon className="text-[#f7ab0a] h-6 w-6 animate-pulse" />
                        <p className="text-lg font-light">Goiânia GO Brasil</p>
                    </div>
                </div>
                <div>
                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className="flex flex-col space-y-2 w-fit mx-auto"
                    >
                        <div className="flex space-x-2">
                            <input
                                {...register('name')}
                                required
                                className="contactInupt"
                                type="text"
                                placeholder="Nome"
                            />{' '}
                            <input
                                {...register('email')}
                                required
                                className="contactInupt"
                                type="email"
                                placeholder="E-mail"
                            />
                        </div>
                        <input
                            {...register('subject')}
                            className="contactInupt"
                            type="text"
                            placeholder="Assunto"
                        />
                        <textarea
                            {...register('message')}
                            required
                            className="contactInupt"
                            placeholder="Mensagem"
                        />
                        <button className="bg-[#f7ab0a] py-5 px-10 rounded-md text-black font-bold ">
                            Enviar
                        </button>
                    </form>
                </div>
            </div>
            <Snackbar
                open={notification.open}
                autoHideDuration={3000} // Duração em milissegundos
                onClose={handleCloseNotification}
            >
                <Alert onClose={handleCloseNotification} severity="success">
                    {notification.message}
                </Alert>
            </Snackbar>
        </div>
    )
}
