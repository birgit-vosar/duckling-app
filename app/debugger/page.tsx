'use client'

import { useTheme } from '../context/ThemeContext';



export default function Debugger() {
    const { darkMode, toggleTheme } = useTheme();

    return (

        <div className='grid grid-cols-8 min-h-screen'>
            <div className={darkMode ? 'bg-[#0b0e14] col-span-1 border-r border-gray-800' : 'bg-[#fbfaf9]  col-span-1 border-r border-gray-800'}>
                <div className='flex flex-col h-screen '>
                    <div className='flex-1 '>
                        <div className='flex justify-evenly py-2'>
                            <button className={darkMode ? 'bg-[#1c212e] justify-center py-2 px-7 border rounded-xl border-transparent' : 'justify-center py-2 px-7 border rounded-xl border-transparent text-black'}>+ New Conversation</button>
                        </div>
                    </div>
                    <div className={darkMode ? 'border-y border-gray-800 flex-17 pt-2' : 'border-y border-gray-800 flex-17 pt-2'}>
                        <div className={darkMode ? 'bg-[#1c212e] flex flex-row justify-center py-2 mx-4 border rounded-xl border-transparent' : 'flex flex-row justify-center py-2 mx-4 border rounded-xl border-transparent text-black'}>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 0 1 1.037-.443 48.282 48.282 0 0 0 5.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
                                </svg>
                            </div>
                            <div>
                                Session 1
                            </div>
                        </div>
                    </div>
                    <div className='flex-1'>
                        <div className='flex justify-around py-3'>🦆 Duck Debugger</div>
                    </div>
                </div>
            </div>
            <div className={darkMode ? 'bg-[#0f121a] col-span-7' : 'bg-[#faf9f7] col-span-7'}>
                <div className='flex flex-col h-screen'>
                    <div className={darkMode ? 'flex-1 border-b border-gray-800 flex justify-between py-3  px-2' : 'flex-1 border-b border-gray-800 flex justify-between py-3  px-2 text-black'}>
                        <div className='content-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                            </svg>
                        </div>
                        <div className='content-center'>
                            <button
                                onClick={() => toggleTheme(!darkMode)}
                                className="px-4 py-1"
                            >
                                {darkMode ? (
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
                                    </svg>
                                ) : (
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
                                    </svg>

                                )}
                            </button>
                        </div>
                    </div>
                    <div className={darkMode ? 'flex-2 border-b border-gray-800' : 'flex-2 border-b border-gray-800'}>

                    </div>
                    <div className={darkMode ? 'flex-12 border-b border-gray-800' : 'flex-12 border-b border-gray-800'}>

                    </div>
                    <div className={darkMode ? 'flex-4' : 'flex-4'}>

                    </div>
                </div>
            </div>
        </div>
    );
}