'use client'

import { useNav } from '@/app/context/NavContext';
import Nav from '@/app/components/Nav';
import TopBar from '@/app/components/TopBar';
import Card from '@/app/components/Card';
import { useTheme } from '@/app/context/ThemeContext';

export default function () {
    const { mobileMenu, toggleMobileNav } = useNav();
    const { darkMode } = useTheme();

    return (
        <div className='flex flex-row min-h-screen'>
            <Nav />
            { mobileMenu ? ( <div className='fixed inset-0 bg-black/20 z-40 md:hidden' onClick={toggleMobileNav}/>) : (<div className='md:hidden'/>)}
            <div className={`flex-1 bg-stone-100 text-zinc-800 dark:bg-[#0b111e] dark:text-white h-full`}>
                <div className='flex flex-col h-screen'>
                    <TopBar />
                    {/* main */}
                    <div className='grow'>
                        <div className='grid grid-cols-6 min-h-full'>
                            <div className='col-span-4 dark:bg-grey-700 h-full'>
                                <div className='flex flex-col h-full p-6 gap-6'>
                                    <Card className='flex-1 px-2'>
                                        <div className='flex flex-row justify-between items-center px-4 py-6'>
                                            <div className='flex flex-col gap-2'>
                                                <p className='font-mono text-xl font-semibold'>Welcome to dashboard!</p>
                                                <p className='text-sm text-gray-600 dark:text-gray-400'>Keep up the great momentum!</p>
                                            </div>
                                            <div><img width={120} height={120} src={ darkMode ? '/assets/duck4.png' : '/assets/duck5.png' } className='mr-6'/></div>
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
                                        <div className='flex flex-row gap-4'>
                                            <Card className='flex-1' >
                                                <div className='p-6'>
                                                    <p className='text-sm'>This achievements feature is currently in development</p>
                                                </div>
                                            </Card>
                                            <Card className='flex-1' >
                                                <div className='p-6'>
                                                    <p className='text-sm w-3/4 mb-1'>This duck debugger feature is currently in development, but will come pretty soon.</p>
                                                    <a href='/debugger' className='text-xs text-blue-800 dark:text-blue-400 underline underline-offset-2'>Get a glimpse »</a>
                                                </div>
                                            </Card>
                                        </div>

                                    </div>

                                </div>
                            </div>
                            <div className='col-span-2 dark:bg-grey-800 h-full'>
                                <div className='flex flex-col h-full p-6 gap-6 text-gray-600'>
                                    <Card className='flex-3'>
                                        <div className='p-6'>
                                            <p className='text-sm'>This calendar feature is currently in development</p>
                                        </div>
                                    </Card>
                                    <Card className='flex-3' >
                                        <div className='p-6'>
                                            <p className='text-sm'>This pomodoro feature is currently in development</p>
                                        </div>
                                    </Card>
                                    <Card className='flex-1 mb-30' >
                                        <div className='p-6'>
                                            <p className='text-sm'>This pomodoro feature is currently in development</p>
                                        </div>
                                    </Card>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

