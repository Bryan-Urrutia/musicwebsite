'use client'
import React from 'react';
import Image from "next/image";
import { RiMapPin2Fill } from "react-icons/ri";
import { Button } from "../ui/button";
import { motion } from 'framer-motion';
import { fadeIn } from "@/utils/variants";

const EventBox = ({ events }) => {
    return <motion.div
        variants={fadeIn('up', 0.4)}
        initial='hidden'
        whileInView={'show'}
        viewport={{ once: false, amount: 0.3 }}
        className="bg-secondary2/60 rounded-[10px] p-4 xl:p-12 relative">
        <div className="flex flex-col xl:flex-row justify-between h-[620px] xl:h-full gap-x-4">
            {/* image */}
            <div className="hidden xl:flex w-[400px]">
                <Image src={'/assets/events/singer.png'} width={358} height={489} priority quality={100} alt="" />
            </div>
            {/* event list */}
            <div className="flex-1 bg-purple-400/10 h-[500px] flex flex-col justify-between overflow-y-scroll scrollbar-thin scrollbar-thumb-accent2 scrollbar-track-white/10 xl:pr-6">
                {events.map((event) => {
                    return <div key={event.id} className="flex flex-col xl:flex-row items-center justify-between gap-y-4 xl:gap-y-0 text-center xl:text-left my-4 xl:my-0 border-b border-white/10 pb-10 xl:py-3 last-of-type:border-none first-of-type:pt-0">
                        <div className="flex flex-col xl:flex-row items-center gap-x-4 gap-y-4">
                            <div className="flex flex-col justify-center items-center leading-tight w-[80px] mb-4 xl:mb-0">
                                <div className="text-[44px] font-black text-accent2">{event.date.day}</div>
                                <div className="text-[20px] font-extrabold">{event.date.month}</div>
                            </div>
                            <div className="w-60 flex flex-col gap-y-2">
                                <div className="text-lg leading-none font-bold">{event.location.city}, {event.location.country}</div>
                                <div className="flex items-center gap-x-2 justify-center xl:justify-start">
                                    <div className="text-accent2 text-lg"><RiMapPin2Fill /> </div>
                                    <div className="font-light">{event.location.address}</div>
                                </div>
                            </div>
                            <div className="w-[180px] text-[17px] text-center text-accent2 font-bold">
                                {event.priceRange}
                            </div>
                            <Button className='bg-accent2 rounded-full hover:bg-accent2/50 transition-all duration-300' >Obtener tickets</Button>
                        </div>
                    </div>
                })}
            </div>
        </div>
    </motion.div>
}

export default EventBox