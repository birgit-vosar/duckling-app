'use client'

import { useTheme } from '../context/ThemeContext';



export default function Debugger() {
    const { darkMode, toggleTheme } = useTheme();

    return (

        <div className='grid grid-cols-8 min-h-screen'>
            <div className={darkMode ? 'bg-[#0b0e14] col-span-1 border-r border-gray-800' : 'bg-[#fbfaf9]  col-span-1 border-r border-gray-800'}>
                <div className='flex flex-col h-screen '>
                    <div className='flex-1 '>
                        <div className='flex justify-evenly py-2 w-full px-2'>
                            <button className={darkMode ? 'w-full justify-center py-2 pl-4 border rounded-xl border-gray-800 text-sm font-bold text-left' : 'justify-center py-2 px-7 border rounded-xl border-transparent text-black'}>+ New Conversation</button>
                        </div>
                    </div>
                    <div className={darkMode ? 'border-y border-gray-800 flex-17 pt-2 px-2' : 'border-y border-gray-800 flex-17 pt-2'}>
                        <div className={darkMode ? 'bg-[#1c212e] flex flex-row justify-center py-2 w-full border rounded-xl border-transparent gap-1 justify-start pl-4' : 'flex flex-row justify-center py-2 mx-4 border rounded-xl border-transparent text-black'}>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 0 1 1.037-.443 48.282 48.282 0 0 0 5.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
                                </svg>
                            </div>
                            <p className='text-sm'>Session 1</p>
                        </div>
                    </div>
                    <div className='flex-1'>
                        <div className='flex justify-around py-3'>🦆 Duck Debugger</div>
                    </div>
                </div>
            </div>
            <div className={darkMode ? 'bg-[#0f121a] col-span-7' : 'bg-[#faf9f7] col-span-7'}>
                <div className='flex flex-col h-screen'>
                    <div className={darkMode ? 'flex-1 border-b border-gray-800 flex justify-between  px-5' : 'flex-1 border-b border-gray-800 flex justify-between py-3  px-2 text-black'}>
                        <div className='content-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                            </svg>
                        </div>
                        <div className='content-center'>
                            <button
                                onClick={() => toggleTheme(!darkMode)}
                                className="px-4 pt-2"
                            >
                                {darkMode ? (
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
                                    </svg>
                                ) : (
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
                                    </svg>

                                )}
                            </button>
                        </div>
                    </div>
                    <div className={darkMode ? 'flex-1 border-b border-gray-800 flex justify-items-start gap-3 pl-5 py-4' : 'flex-1 border-b border-gray-800 flex justify-items-start gap-3'}>
                        <div className='flex-none'>
                            <p className='text-lg'>🦆</p>
                        </div>
                        <div className='grow'>
                            <p className='text-lg'>Session 1</p>
                            <p className='text-sm'>Explain your problem — sometimes that's all it takes.</p>
                        </div>
                    </div>
                    <div className={darkMode ? 'flex-14 border-b border-gray-800 min-w-full place-content-center' : 'flex-14 border-b border-gray-800'}>
                        <div className='flex flex-col gap-4 min-w-full place-content-center items-center mb-15'>
                            <div className='flex flex-col items-center gap-4'>
                                <p className='text-6xl'>🦆</p>
                                <p className='text-xl font-bold'>What's bugging you?</p>
                            </div>
                            <p className='text-center text-gray-500 text-sm w-full max-w-1/3'>Describe your coding problem below. What are you trying to do? What's happening instead? What have you tried so far?</p>
                            <p className='text-center text-gray-500 text-sm w-full max-w-1/3'>Sometimes just explaining it to a rubber duck is enough. If not, hit "Get AI Help" for suggestions.</p>
                        </div>
                    </div>
                    <div className={darkMode ? 'flex-3' : 'flex-3'}>
                        <footer>
                            <div className=" w-full flex flex-col gap-2 items-center">
                                <form action="#" method="POST" className="items-center my-1 min-w-1/2">
                                        <div className="w-full content-center">
                                            <div className="mt-2.5">
                                                <textarea id="message" name="message" rows="4" className="block w-full rounded-md bg-white/5 px-3.5 py-2 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500"></textarea>
                                            </div>
                                            <div className='flex flex-row gap-4 w-full justify-end my-2'>
                                                <button className='border px-3 py-1 border-gray-500 rounded-lg text-sm'>Reflect / Guide</button>
                                                <button className='border px-3 py-1 border-gray-500 rounded-lg text-sm'>Submit</button>
                                            </div>
                                    </div>
                                </form>
                            </div>
                        </footer>
                    </div>
                </div>
            </div>
        </div>
    );
}