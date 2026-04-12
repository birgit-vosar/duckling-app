'use client'

import { useTheme } from '../context/ThemeContext';



export default function Debugger() {
    const { darkMode, toggleTheme } = useTheme();

    return (

        <div className='grid grid-cols-8 min-h-screen'>
            <div className={darkMode ? 'bg-[#0f121a] col-span-1 border-r border-gray-800' : 'bg-zinc-100  col-span-1 border-r border-gray-300'}>
                <div className='flex flex-col h-screen'>

                    <div>
                        <a className={darkMode ? 'flex pl-4 py-3 gap-2' : 'flex pl-4 py-3 gap-2 text-zinc-800'}>
                            <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke-width='1.5' stroke='currentColor' className='size-4 mt-1'>
                                <path strokeLinecap='round' strokeLinejoin='round' d='M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18' />
                            </svg>
                            Back
                        </a>
                    </div>


                    <div className={darkMode ? 'flex justify-evenly py-2 w-full px-2 border-t border-gray-800' : 'flex justify-evenly py-2 w-full px-2 border-t border-gray-300' }>
                        <button className={darkMode ? 'w-full justify-center py-2 pl-4 border rounded-xl border-gray-800 text-sm font-bold text-left' : 'w-full justify-center py-2 pl-4 border rounded-xl border-gray-300 text-sm font-bold text-left text-zinc-700'}>+ New Conversation</button>
                    </div>

                    <div className={darkMode ? 'flex-1 pt-2 px-2' : 'flex-1 pt-2 px-2'}>
                        <button className={darkMode ? 'bg-[#1c212e] flex flex-row justify-center py-2 w-full border rounded-xl border-transparent gap-1 justify-start pl-4' : 'bg-[#1c212e] flex flex-row justify-center py-2 w-full border rounded-xl border-transparent gap-1 justify-start pl-4'}>
                            <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth='1.5' stroke='currentColor' className='size-5'>
                                <path strokeLinecap='round' strokeLinejoin='round' d='M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 0 1 1.037-.443 48.282 48.282 0 0 0 5.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z' />
                            </svg>
                            <p className='text-sm'>Session 1</p>
                        </button>
                    </div>
                </div>
            </div>
            <div className={darkMode ? 'bg-[#141822] col-span-7' : 'bg-stone-100 col-span-7 text-zinc-800'}>
                <div className='flex flex-col h-screen'>
                    <div className={darkMode ? 'border-b border-gray-800 flex justify-between  px-5' : 'border-b border-gray-300 flex justify-between  px-5'}>
                        <div className='content-center'>
                            <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth='1.5' stroke='currentColor' className='size-5'>
                                <path strokeLinecap='round' strokeLinejoin='round' d='M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15' />
                            </svg>
                        </div>
                        <div className='content-center flex'>
                            <button
                                onClick={() => toggleTheme(!darkMode)}
                                className='px-4 py-4'
                            >
                                {darkMode ? (
                                    <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth='1.5' stroke='currentColor' className='size-5'>
                                        <path strokeLinecap='round' strokeLinejoin='round' d='M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z' />
                                    </svg>
                                ) : (
                                    <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth='1.5' stroke='currentColor' className='size-5'>
                                        <path strokeLinecap='round' strokeLinejoin='round' d='M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z' />
                                    </svg>

                                )}
                            </button>
                            <button
                                onClick={() => toggleTheme(!darkMode)}
                                className='px-4 py-2 flex'
                            ><div className={ darkMode ? 'bg-gray-800 p-2 rounded-md' : 'border border-2 border-stone-200 p-2 rounded-md border-gray-300' }>
                                    {darkMode ? (
                                        <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth='1.5' stroke='currentColor' className='size-5'>
                                            <path strokeLinecap='round' strokeLinejoin='round' d='M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z' />
                                        </svg>

                                    ) : (
                                        <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth='1.5' stroke='currentColor' className='size-5 '>
                                            <path strokeLinecap='round' strokeLinejoin='round' d='M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z' />
                                        </svg>

                                    )}
                                </div>
                            </button>
                        </div>
                    </div>
                    <div className={darkMode ? 'border-b border-gray-800 flex justify-items-start gap-3 pl-5 py-4' : 'border-b border-gray-300 flex justify-items-start gap-3 pl-5 py-4'}>
                        <div className='flex-none'>
                            <p className='text-lg'>🦆</p>
                        </div>
                        <div className='grow'>
                            <p className='text-lg'>Session 1</p>
                            <p className='text-sm'>Explain your problem — sometimes that's all it takes.</p>
                        </div>
                    </div>
                    <div className={darkMode ? 'flex-1 border-b border-gray-800 min-w-full place-content-center' : 'flex-1 border-b border-gray-300 min-w-full place-content-center'}>
                        <div className='flex flex-col gap-4 min-w-full place-content-center items-center mb-16'>
                            <div className='flex flex-col items-center gap-4'>
                                <p className='text-6xl'>🦆</p>
                                <p className='text-xl font-bold'>What's bugging you?</p>
                            </div>
                            <p className='text-center text-gray-500 text-sm w-full max-w-1/3'>Describe your coding problem below. What are you trying to do? What's happening instead? What have you tried so far?</p>
                            <p className='text-center text-gray-500 text-sm w-full max-w-1/3'>Sometimes just explaining it to a rubber duck is enough. If not, hit 'Get AI Help' for suggestions.</p>
                        </div>
                    </div>
                    <div>
                        <footer>
                            <div className=' w-full flex flex-col gap-2 items-center'>
                                <form action='#' method='POST' className='items-center my-1 min-w-1/2'>
                                    <div className='w-full content-center'>
                                        <div className='mt-2.5'>
                                            <textarea id='message' name='message' rows='4' className={ darkMode ? 'block w-full rounded-md bg-white/5 px-3.5 py-2 text-base text-white text-sm border border-gray-800 placeholder:text-gray-500 focus:outline-2 border-2 focus:-outline-offset-2 focus:outline-indigo-500' : 'block w-full rounded-md bg-white/5 px-3.5 py-2 text-base text-gray-800 text-sm border border-2 border-gray-300 placeholder:text-zinc-800 focus:outline-2 focus:-outline-offset-2 focus:outline-gray-400' }></textarea>
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