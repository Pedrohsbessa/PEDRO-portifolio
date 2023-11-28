'use client'
import React, { useState } from 'react'
import emailJs from '@emailjs/browser'
import { useForm, SubmitHandler } from 'react-hook-form'
import { EnvelopeIcon, MapIcon, PhoneIcon } from '@heroicons/react/24/outline'

type Props = {}

type Inputs = {
    name: string
    email: string
    subject: string
    message: string
}

export default function ContactMe({}: Props) {
    const { register, handleSubmit, reset } = useForm<Inputs>()

    const onSubmit: SubmitHandler<Inputs> = (data: Inputs) => {
        emailJs
            .send(
                'service_34byqco',
                'template_awzw9el',
                data,
                'SFmo1nuHc8kLxyjR_'
            )
            .then(() => {
                reset()
            })
            .catch(() => {})
    }
    const redirect = () => {
        window.open(
            'http://api.whatsapp.com/send?phone=5562996983867&text=Olá',
            '_blank'
        )
    }
    return (
        <div className="h-screen flex relative flex-col text-center md:text-left md:flex-row px-1 sm:px-10 justify-evenly mx-auto items-center">
            <h3 className="absolute top-16 uppercase tracking-[1rem] text-gray-500 text-2xl">
                contato
            </h3>
            <div className="flex flex-col space-y-2  sm:space-y-4 mt-20">
                <h4 className="sm:text-2xl font-semibold text-center uppercase">
                    Eu tenho aquilo que você precisa.
                    <br />
                    <span
                        className="text-geral uppercase flex items-center justify-center 
                    "
                    >
                        vamos conversar
                        <img
                            className="w-7 ml-3"
                            src="/assets/aperto-de-mao.gif"
                            alt=""
                        />
                    </span>
                </h4>
                <div className="space-y-2 flex flex-col ">
                    <button
                        onClick={redirect}
                        className=" flex items-center space-x-1 justify-center"
                    >
                        {/* <PhoneIcon className="text-geral h-6 w-6 animate-pulse" /> */}
                        <img
                            className="w-7"
                            src="/assets/balao-de-fala.gif"
                            alt=""
                        />
                        <p className="sm:text-lg font-light">(62) 99698 3867 - Whatsapp</p>
                    </button>
                    <button className=" flex items-center space-x-1 justify-center cursor-auto">
                        {/* <EnvelopeIcon className="text-geral h-6 w-6 animate-pulse" /> */}
                        <img
                            className="w-7 "
                            src="/assets/mensagem.gif"
                            alt=""
                        />
                        <p className="sm:text-lg font-light">
                            pedro.bessa.dev@gmail.com
                        </p>
                    </button>
                    <button className=" flex items-center space-x-1 justify-center">
                        {/* <MapIcon className="text-geral h-6 w-6 animate-pulse" /> */}
                        <img className="w-7" src="/assets/mapa.gif" alt="" />
                        <p className="sm:text-lg font-light">
                            Goiânia GO Brasil
                        </p>
                    </button>
                </div>
                <div className="">
                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className="flex flex-col space-y-2 w-fit mx-auto"
                    >
                        <div className="flex flex-col sm:flex sm:flex-row sm:space-x-2">
                            <input
                                {...register('name')}
                                required
                                className="outline-none bg-transparent shadow-sm shadow-geral/30 rounded-sm border-b px-6 py-4 border-[#242424] placeholder-gray-400 transition-all focus:border-geral/40 focus:text-geral/70  hover:border-geral/40"
                                type="text"
                                placeholder="Nome"
                            />{' '}
                            <input
                                {...register('email')}
                                required
                                className="outline-none bg-transparent shadow-sm shadow-geral/30 rounded-sm border-b px-6 py-4 border-[#242424] placeholder-gray-400 transition-all focus:border-geral/40 focus:text-geral/70  hover:border-geral/40"
                                type="email"
                                placeholder="E-mail"
                            />
                        </div>
                        <input
                            {...register('subject')}
                            className="outline-none bg-transparent shadow-sm shadow-geral/30 rounded-sm border-b px-6 py-4 border-[#242424] placeholder-gray-400 transition-all focus:border-geral/40 focus:text-geral/70  hover:border-geral/40"
                            type="text"
                            placeholder="Assunto"
                        />
                        <textarea
                            {...register('message')}
                            required
                            className="outline-none bg-transparent shadow-sm shadow-geral/30 rounded-sm border-b px-6 py-4 border-[#242424] placeholder-gray-400 transition-all focus:border-geral/40 focus:text-geral/70  hover:border-geral/40"
                            placeholder="Mensagem"
                        />
                        <button className="bg-geral py-5 px-10 rounded-md text-black font-bold ">
                            Enviar
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}
