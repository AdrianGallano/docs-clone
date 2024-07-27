import React, { ReactNode } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import LogoSVG from '../public/assets/icons/logo.svg'
import LogoIconSVG from '../public/assets/icons/logo-icon.svg'
import { cn } from '@/lib/utils'


const Header = ({ children, className }: HeaderProps) => {
    return (
        <div className={cn("header", className)}>
            <Link href="/" className='md:flex1'>
                <Image
                    src={LogoSVG}
                    width={120}
                    height={32}
                    alt='Logo'
                    className='hidden md:block'
                />
                <Image
                    src={LogoIconSVG}
                    width={32}
                    height={32}
                    alt='Logo'
                    className='mr-2 md:hidden'
                />
            </Link>
            {children}
        </div>
    )
}

export default Header