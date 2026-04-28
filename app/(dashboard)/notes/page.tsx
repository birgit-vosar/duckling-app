'use client'

import { useNav } from '@/app/context/NavContext'
import Nav from '@/app/components/Nav'
import TopBar from '@/app/components/TopBar'

export default function () {
    const { mobileMenu, toggleMobileNav } = useNav()

    return (
        <div className='flex flex-row min-h-screen'>
            <Nav />
            { mobileMenu ? ( <div className='fixed inset-0 bg-black/20 z-40 md:hidden' onClick={toggleMobileNav}/>) : (<div className='md:hidden'/>)}
            <div className='flex-1 bg-stone-100 text-zinc-800 dark:bg-[#0b111e] dark:text-white h-full'>
                <div className='flex flex-col h-screen'>
                    <TopBar />
                    {/* main */}
                    <div>
                        <p className='ml-4 mt-4 text-lg'>This is notes page.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}