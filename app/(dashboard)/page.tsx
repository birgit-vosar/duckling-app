'use client'

import { useNav } from '@/app/context/NavContext';
import Nav from '@/app/components/Nav';
import TopBar from '@/app/components/TopBar';
import Card from '@/app/components/Card';
import Link from 'next/link';
import { useTheme } from '@/app/context/ThemeContext';
import { useEffect, useState } from 'react';
import { SkinReward } from '@/app/components/SkinReward';



export default function DashboardPage() {
    const { mobileMenu, toggleMobileNav } = useNav();
    const { darkMode } = useTheme();
    const [equippedSkin, setEquippedSkin] = useState('default');
    const [loading, setLoading] = useState(true);

    

    useEffect(() => {
        fetch('/api/cosmetics/equipped', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
        })
            .then(res => res.json())
            .then(data => {
                setEquippedSkin(data.equippedSkin);
            })
            .catch(err => console.error('Failed to fetch equipped skin:', err))
            .finally(() => setLoading(false));
    }, []);

    return (
        <div className='flex flex-row min-h-screen'>
            <Nav />
            {mobileMenu ? (<div className='fixed inset-0 bg-black/20 z-40 md:hidden' onClick={toggleMobileNav} />) : (<div className='md:hidden' />)}
            <div className={`flex-1 bg-stone-100 text-zinc-800 dark:bg-[#0b111e] dark:text-white min-h-screen`}>
                <div className='flex flex-col min-h-screen'>
                    <TopBar />
                    {/* main */}
                    <div className='grow flex flex-col lg:flex-row'>
                            <div className='flex-[4] dark:bg-[#0f121a]'>
                                <div className='flex flex-col px-6 pt-6 sm:p-6 gap-6'>
                                    <Card className='flex-1 px-2'>
                                        <div className='flex flex-row justify-between items-center px-4 py-6 mt-2'>
                                            <div className='flex flex-col gap-2'>
                                                <p className='font-mono text-xl font-semibold'>Welcome to dashboard!</p>
                                                <p className='text-sm text-gray-600 dark:text-gray-400'>Keep up the great momentum!</p>
                                            </div>
                                            <div className='relative w-[120px] h-[120px] mt-2'>
                                                {loading ? (<div className='flex items-center justify-center mt-8'>
                                                    <div className='min-w-8 min-h-8 w-8 h-8 border-4 border-gray-300 border-t-transparent rounded-full animate-spin'></div>
                                                </div>) : (<><img className='object-contain' src={darkMode ? '/assets/duck4.png' : '/assets/duck5.png'} />
                                                    <img className='object-contain absolute inset-0 -translate-y-4' src={`/assets/${equippedSkin}.png`} /></>)}
                                            </div>
                                        </div>
                                    </Card>
                                    <Card className='flex-4'>
                                        <div className="space-y-2 p-6">
                                            <p className='text-sm text-gray-400'>Here come notes.</p>
                                            <div className="h-0 border-b border-gray-200 dark:border-gray-800 w-full"></div>
                                            <div className="h-5 border-b border-gray-200 dark:border-gray-800  w-full"></div>
                                            <div className="h-5 border-b border-gray-200 dark:border-gray-800  w-full"></div>
                                            <div className="h-5 border-b border-gray-200 dark:border-gray-800 w-full"></div>
                                            <div className="h-5 border-b border-gray-200 dark:border-gray-800  w-full"></div>
                                            <div className="h-5 border-b border-gray-200 dark:border-gray-800  w-1/4"></div>
                                        </div>
                                    </Card>
                                    <div className='flex-3'>
                                        <div className='grid lg:grid-cols-2 grid-col-reverse gap-4'>
                                            <Card className='col-span-1 order-2 lg:order-1 text-gray-600' >
                                                <div className='p-6'>
                                                    <p className='text-sm'>This achievements feature is currently in development</p>
                                                </div>
                                            </Card>
                                            <Card className='col-span-1 order-1 lg:order-2' >
                                                <div className='flex flex-col p-6 gap-8'>
                                                    <div className='flex flex-col'>
                                                    <p className='tracking-wider text-xs text-gray-500 uppercase font-semibold'>Rubber duck</p>
                                                    <p className='text-lg font-medium my-2'>Stuck on something?</p>
                                                    <p className='text-sm text-gray-500'>If you've got a messy problem, unclear situation or tangled thoughts about code, drop it and I'll clean it up for you.</p>
                                                    </div>
                                                    <Link href='/debugger' className='dark:hover:bg-gray-900 hover:bg-gray-200 tracking-wider text-sm font-medium dark:text-white text-center border rounded-xl border-gray-300 bg-white dark:bg-[#0f121a] dark:border-[#1e2841] py-3'>Talk to Duck</Link>
                                                </div>
                                            </Card>
                                        </div>

                                    </div>

                                </div>
                            </div>
                            <div className='flex-[2] lg:col-span-2 dark:bg-grey-800'>
                                <div className='flex flex-col p-6 gap-6 text-gray-600 min-h-full'>
                                    <Card className='flex-4'>
                                        <div className='p-6'>
                                            <p className='text-sm'>This calendar feature is currently in development</p>
                                        </div>
                                    </Card>
                                    <Card className='flex-4' >
                                        <div className='p-6'>
                                            <p className='text-sm'>This pomodoro feature is currently in development</p>
                                        </div>
                                    </Card>
                                    <Card className='group flex-1 dark:text-gray-400 text-sm lg:mb-30 max-h-25 ' >
                                        <div className='flex-1 flex flex-col dark:group-hover:text-slate-200'>
                                            <SkinReward />
                                        </div>
                                    </Card>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

