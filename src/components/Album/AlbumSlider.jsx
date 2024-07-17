'use client'
import { useState } from 'react'

import useSWR from 'swr'
import Image from 'next/image'

import { AudioPlayer } from 'react-audio-play'

import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'

const data = [
        {
            "id": 1,
            "img": "/assets/albums/cover/cover-1.png",
            "name": "album 1",
            "tracks": [
                {
                    "name": "Serenata de Medianoche",
                    "src": "assets/freedom.mp3"
                },
                {
                    "name": "Ecos de la Eternidad",
                    "src": "assets/freedom.mp3"
                },
                {
                    "name": "Susurros en el Viento",
                    "src": "assets/freedom.mp3"
                },
                {
                    "name": "Sonata de Luz Estelar",
                    "src": "assets/freedom.mp3"
                },
                {
                    "name": "Sueños del Mañana",
                    "src": "assets/freedom.mp3"
                },
                {
                    "name": "Perdido en el Paraíso",
                    "src": "assets/freedom.mp3"
                },
                {
                    "name": "Recuerdos Dorados",
                    "src": "assets/freedom.mp3"
                },
                {
                    "name": "Cielos de Zafiro",
                    "src": "assets/freedom.mp3"
                },
                {
                    "name": "Bosque Encantado",
                    "src": "assets/freedom.mp3"
                },
                {
                    "name": "Melodías del Atardecer",
                    "src": "assets/freedom.mp3"
                }
            ]
        },
        {
            "id": 2,
            "img": "/assets/albums/cover/cover-2.png",
            "name": "album 2",
            "tracks": [
                {
                    "name": "Serenata de Medianoche",
                    "src": "assets/freedom.mp3"
                },
                {
                    "name": "Ecos de la Eternidad",
                    "src": "assets/freedom.mp3"
                },
                {
                    "name": "Susurros en el Viento",
                    "src": "assets/freedom.mp3"
                },
                {
                    "name": "Sonata de Luz Estelar",
                    "src": "assets/freedom.mp3"
                },
                {
                    "name": "Sueños del Mañana",
                    "src": "assets/freedom.mp3"
                },
                {
                    "name": "Perdido en el Paraíso",
                    "src": "assets/freedom.mp3"
                },
                {
                    "name": "Recuerdos Dorados",
                    "src": "assets/freedom.mp3"
                },
                {
                    "name": "Cielos de Zafiro",
                    "src": "assets/freedom.mp3"
                },
                {
                    "name": "Bosque Encantado",
                    "src": "assets/freedom.mp3"
                },
                {
                    "name": "Melodías del Atardecer",
                    "src": "assets/freedom.mp3"
                }
            ]
        },
        {
            "id": 3,
            "img": "/assets/albums/cover/cover-3.png",
            "name": "album 3",
            "tracks": [
                {
                    "name": "Serenata de Medianoche",
                    "src": "assets/freedom.mp3"
                },
                {
                    "name": "Ecos de la Eternidad",
                    "src": "assets/freedom.mp3"
                },
                {
                    "name": "Susurros en el Viento",
                    "src": "assets/freedom.mp3"
                },
                {
                    "name": "Sonata de Luz Estelar",
                    "src": "assets/freedom.mp3"
                },
                {
                    "name": "Sueños del Mañana",
                    "src": "assets/freedom.mp3"
                },
                {
                    "name": "Perdido en el Paraíso",
                    "src": "assets/freedom.mp3"
                },
                {
                    "name": "Recuerdos Dorados",
                    "src": "assets/freedom.mp3"
                },
                {
                    "name": "Cielos de Zafiro",
                    "src": "assets/freedom.mp3"
                },
                {
                    "name": "Bosque Encantado",
                    "src": "assets/freedom.mp3"
                },
                {
                    "name": "Melodías del Atardecer",
                    "src": "assets/freedom.mp3"
                }
            ]
        },
        {
            "id": 4,
            "img": "/assets/albums/cover/cover-4.png",
            "name": "album 4",
            "tracks": [
                {
                    "name": "Serenata de Medianoche",
                    "src": "assets/freedom.mp3"
                },
                {
                    "name": "Ecos de la Eternidad",
                    "src": "assets/freedom.mp3"
                },
                {
                    "name": "Susurros en el Viento",
                    "src": "assets/freedom.mp3"
                },
                {
                    "name": "Sonata de Luz Estelar",
                    "src": "assets/freedom.mp3"
                },
                {
                    "name": "Sueños del Mañana",
                    "src": "assets/freedom.mp3"
                },
                {
                    "name": "Perdido en el Paraíso",
                    "src": "assets/freedom.mp3"
                },
                {
                    "name": "Recuerdos Dorados",
                    "src": "assets/freedom.mp3"
                },
                {
                    "name": "Cielos de Zafiro",
                    "src": "assets/freedom.mp3"
                },
                {
                    "name": "Bosque Encantado",
                    "src": "assets/freedom.mp3"
                },
                {
                    "name": "Melodías del Atardecer",
                    "src": "assets/freedom.mp3"
                }
            ]
        },
        {
            "id": 5,
            "img": "/assets/albums/cover/cover-5.png",
            "name": "album 5",
            "tracks": [
                {
                    "name": "Serenata de Medianoche",
                    "src": "assets/freedom.mp3"
                },
                {
                    "name": "Ecos de la Eternidad",
                    "src": "assets/freedom.mp3"
                },
                {
                    "name": "Susurros en el Viento",
                    "src": "assets/freedom.mp3"
                },
                {
                    "name": "Sonata de Luz Estelar",
                    "src": "assets/freedom.mp3"
                },
                {
                    "name": "Sueños del Mañana",
                    "src": "assets/freedom.mp3"
                },
                {
                    "name": "Perdido en el Paraíso",
                    "src": "assets/freedom.mp3"
                },
                {
                    "name": "Recuerdos Dorados",
                    "src": "assets/freedom.mp3"
                },
                {
                    "name": "Cielos de Zafiro",
                    "src": "assets/freedom.mp3"
                },
                {
                    "name": "Bosque Encantado",
                    "src": "assets/freedom.mp3"
                },
                {
                    "name": "Melodías del Atardecer",
                    "src": "assets/freedom.mp3"
                }
            ]
        },
        {
            "id": 6,
            "img": "/assets/albums/cover/cover-6.png",
            "name": "album 6",
            "tracks": [
                {
                    "name": "Serenata de Medianoche",
                    "src": "assets/freedom.mp3"
                },
                {
                    "name": "Ecos de la Eternidad",
                    "src": "assets/freedom.mp3"
                },
                {
                    "name": "Susurros en el Viento",
                    "src": "assets/freedom.mp3"
                },
                {
                    "name": "Sonata de Luz Estelar",
                    "src": "assets/freedom.mp3"
                },
                {
                    "name": "Sueños del Mañana",
                    "src": "assets/freedom.mp3"
                },
                {
                    "name": "Perdido en el Paraíso",
                    "src": "assets/freedom.mp3"
                },
                {
                    "name": "Recuerdos Dorados",
                    "src": "assets/freedom.mp3"
                },
                {
                    "name": "Cielos de Zafiro",
                    "src": "assets/freedom.mp3"
                },
                {
                    "name": "Bosque Encantado",
                    "src": "assets/freedom.mp3"
                },
                {
                    "name": "Melodías del Atardecer",
                    "src": "assets/freedom.mp3"
                }
            ]
        },
        {
            "id": 7,
            "img": "/assets/albums/cover/cover-7.png",
            "name": "album 7",
            "tracks": [
                {
                    "name": "Serenata de Medianoche",
                    "src": "assets/freedom.mp3"
                },
                {
                    "name": "Ecos de la Eternidad",
                    "src": "assets/freedom.mp3"
                },
                {
                    "name": "Susurros en el Viento",
                    "src": "assets/freedom.mp3"
                },
                {
                    "name": "Sonata de Luz Estelar",
                    "src": "assets/freedom.mp3"
                },
                {
                    "name": "Sueños del Mañana",
                    "src": "assets/freedom.mp3"
                },
                {
                    "name": "Perdido en el Paraíso",
                    "src": "assets/freedom.mp3"
                },
                {
                    "name": "Recuerdos Dorados",
                    "src": "assets/freedom.mp3"
                },
                {
                    "name": "Cielos de Zafiro",
                    "src": "assets/freedom.mp3"
                },
                {
                    "name": "Bosque Encantado",
                    "src": "assets/freedom.mp3"
                },
                {
                    "name": "Melodías del Atardecer",
                    "src": "assets/freedom.mp3"
                }
            ]
        }
    ]

const AlbumSlider = () => {
    // const { data, error } = useSWR('http://localhost:4000/albums', fetcher);
    // // console.log(data);
    // if (error) return 'Failed to fetch data';
    // if (!data) return 'Loading...';

    return <>
        <Swiper>
            {data.map((album) => {
                return <SwiperSlide key={album.id} className='mb-12'>
                    <div className='w-full bg-secondary2/80 rounded-[10px] flex flex-col xl:flex-row items-center p-6 xl:p-12 gap-x-12'>
                        <div className='hidden xl:flex w-[300px] h-[300px] xl:w-[500px] xl:h-[500px] relative cursor-pointer rounded-[10px] overflow-hidden'>
                            <Image src={album.img} fill alt='' priority />
                        </div>
                        <div className='flex flex-1 w-full h-fit'>
                            <div className='flex-1 flex flex-col'>
                                {album.tracks?.map((track, index) => {
                                    return <div key={index} className='flex flex-col xl:flex-row flex-1 w-full h-[500px]'>
                                        <div className='flex flex-1 items-center gap-x-2 capitalize font-semibold xl:font-extrabold'>
                                            <div className='text-accent2 text-sm xl:text-lg'>{index < 9 ? `0${index + 1}` : index + 1}.</div>
                                            <div>{track.name}</div>
                                        </div>
                                        <div className='flex flex-1'>
                                            <AudioPlayer
                                                loop
                                                preload='none'
                                                color='#fff'
                                                volume={20}
                                                src={track.src}
                                                volumePlacement='top'
                                                width={'100%'}
                                                style={{
                                                    background: 'transparent',
                                                    boxShadow: 'none'
                                                }} />
                                        </div>
                                    </div>
                                })}
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            })}
        </Swiper>
    </>
}

export default AlbumSlider