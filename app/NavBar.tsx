'use client';

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import { FaBugs } from 'react-icons/fa6'
import classnames from 'classnames';

const NavBar = () => {
    const currentPath = usePathname();
    const links = [
        {label: 'Dashboard', href: '/'},
        {label: 'Tickets', href: '/tickets'},
    ]
  return (
    <nav className='flex space-x-6 border-b mb-5 px-5 h-14 items-center'>
        <Link href="/" className='flex gap-2 items-center'><FaBugs className='h-8 w-8 text-slate-800' /><span className='font-bold text-3xl bg-gradient-to-r from-slate-600 to-orange-600 text-transparent bg-clip-text hover:cursor-pointer'>Ticket-X</span></Link>
        <ul className='flex space-x-6'>
            {
                links.map(link => <Link key={link.href} href={link.href} className={classnames({'text-slate-700 font-semibold': link.href === currentPath, 'text-slate-500 font-semibold': link.href !==currentPath, 'text-xl hover:text-orange-500 transition-colors': true})}>{link.label}</Link>)
            }
        </ul>
    </nav>
  )
}

export default NavBar