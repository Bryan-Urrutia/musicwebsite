'use client'

import Image from "next/image"
import { useEffect, useState } from "react"
import Link from "next/link"

const Header = () => {
    const [active, setActive] = useState(false);

    useEffect(() => {
        const scrollYPos = window.addEventListener('scroll', () => {
            window.scrollY > 100 ? setActive(true) : setActive(false);
        })

        return () => window.removeEventListener('scroll', scrollYPos);
    }, [])

    return <header className={`fixed z-50 w-full ${active ? 'bg-[#030315] py-6' : 'bg-transparent py-8'}`}>
        <div className="container mx-auto flex flex-col xl:flex-row items-center">
            <Link href={'#'} className="relative flex w-[226px] h-[37.64px] transition-all mb-4 xl:mb-0">
                <Image src={'/assets/header/logo.svg'} fill alt="" />
            </Link>
        </div>
    </header>
}

export default Header