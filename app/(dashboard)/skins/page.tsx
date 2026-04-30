'use client'

import { useNav } from '@/app/context/NavContext';
import Nav from '@/app/components/Nav';
import TopBar from '@/app/components/TopBar';
import { useTheme } from '@/app/context/ThemeContext';
import { useEffect, useState } from 'react';


export default function () {
    const { mobileMenu, toggleMobileNav } = useNav();
    const { darkMode } = useTheme();
    const [equippedSkin, setEquippedSkin] = useState('default');
    const [totalAmount, setTotalAmount] = useState(0);
    const [allSkins, setAllSkins] = useState([]);

    useEffect(() => {
        fetch('/api/cosmetics/equipped', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
        })
            .then(res => res.json())
            .then(data => {
                setEquippedSkin(data.equippedSkin);
            });
    }, []);

    useEffect(() => {
        fetch('/api/cosmetics/total', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
        })
            .then(res => res.json())
            .then(data => {
                setTotalAmount(data.totalAmount);
                setAllSkins(data.allSkins);
            });
    }, []);

    return (
        <div className='flex flex-row min-h-screen'>
            <Nav />
            {mobileMenu ? (<div className='fixed inset-0 bg-black/20 z-40 md:hidden' onClick={toggleMobileNav} />) : (<div className='md:hidden' />)}
            <div className='flex-1 bg-stone-100 text-zinc-800 dark:bg-[#0b111e] dark:text-white h-full'>
                <div className='flex flex-col h-screen'>
                    <TopBar />
                    {/* main */}
                    <div className='flex flex-col'>
                        <div className='flex dark:bg-[#0e1525] border border-gray-300 rounded-md dark:border-gray-800 m-6 gap-4 h-full p-4'>
                            <div className='relative w-[120px] h-[120px] mt-2'>
                                <img className='object-contain' src={darkMode ? '/assets/duck4.png' : '/assets/duck5.png'} />
                                <img className='object-contain absolute inset-0 -translate-y-4' src={`/assets/${equippedSkin}.png`} />
                            </div>
                            <div className='h-full content-center'>
                                <p className='dark:text-gray-600 text-xs uppercase'>Currently equipped</p>
                                <p className='dark:text-gray-400 text-mg font-semibold pt-1'>Wizard hat</p>
                                <p className='text-sm dark:text-gray-400'>Common</p>
                            </div>
                        </div>
                        <div className='flex gap-2 m-6 items-center'>
                            <p className='font-semibold font-sans text-sm'>Common</p>
                            <div className='dark:bg-sky-950 border border-gray-300 rounded-xl px-2.5 text-xs py-0.5'>
                                <p>{totalAmount}</p>
                            </div>
                            <div className='flex-1 h-px bg-gray-800'></div>
                        </div>
                        <div className='flex mx-6 gap-4 '>
                            {allSkins.map((skin, index) => (
                                <div className='group min-w-1/8'>
                                <div key={index} className='transition duration-300 group-hover:scale-98 flex flex-col items-center dark:bg-[#0e1525] border border-gray-300 rounded-md dark:border-gray-800 p-6 gap-1'>
                                    <img className='transition duration-300 ease-in-out group-hover:scale-125 object-contain' width={50} height={50} src={`/assets/${skin}-sm.png`} />
                                    <p className='text-white text-sm font-semibold'>Lorem ipsum</p>
                                    <p className='text-xs text-white dark:text-gray-400'>Not equipped</p>
                                </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}