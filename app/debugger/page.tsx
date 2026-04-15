'use client'

import { useTheme } from '../context/ThemeContext';



export default function Debugger() {
    const { darkMode, toggleTheme } = useTheme();

    return (

        <div className='grid grid-cols-8 min-h-screen'>
            <div className={darkMode ? 'bg-[#090e18] col-span-1 border-r border-[#182543]' : 'bg-zinc-100  col-span-1 border-r border-gray-300'}>
                <div className='flex flex-col h-screen'>

                    <div>
                        <a className={darkMode ? 'flex pl-4 py-3 gap-2' : 'flex pl-4 py-3 gap-2 text-gray-500'}>
                            <p className='text-3xl'>🦆</p>
                            <div className='flex flex-col'>
                                <p className={darkMode ? 'font-semibold text-foreground' : 'font-semibold text-gray-500'}>duckling.dev</p>
                                <p className='text-xs text-muted-foreground'>Productivity Hub</p>
                            </div>
                        </a>
                    </div>

                    <div className={darkMode ? 'flex-1 pt-2 px-2 ' : 'flex-1 pt-2 px-2'}>
                        <button className={darkMode ? 'cursor-pointer items-center flex flex-row py-2 w-full border rounded-xl border-transparent gap-3 pl-4 text-gray-400 hover:bg-blue-950 hover:text-gray-200' : 'cursor-pointer items-center flex flex-row py-2 w-full border rounded-xl border-transparent gap-1 pl-4 text-gray-500'}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                            </svg>

                            <p className='text-sm'>Dashboard</p>
                        </button>
                        <button className={darkMode ? 'cursor-pointer items-center flex flex-row py-2 w-full border rounded-xl border-transparent gap-3 pl-4 text-gray-400 hover:bg-blue-950 hover:text-gray-200' : 'cursor-pointer items-center flex flex-row py-2 w-full border rounded-xl border-transparent gap-1  pl-4 text-gray-500'}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                            </svg>

                            <p className='text-sm'>Notes</p>
                        </button>
                        <button className={darkMode ? 'cursor-pointer items-center flex flex-row py-2 w-full border rounded-xl border-transparent gap-3  pl-4 text-gray-400 hover:bg-blue-950 hover:text-gray-200' : 'cursor-pointer items-center flex flex-row py-2 w-full border rounded-xl border-transparent gap-1 pl-4 text-gray-500'}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
                            </svg>

                            <p className='text-sm'>Calendar</p>
                        </button>
                        <button className={darkMode ? 'cursor-pointer items-center flex flex-row py-2 w-full border rounded-xl border-transparent gap-3 pl-4 text-gray-400 hover:bg-blue-950 hover:text-gray-200' : 'cursor-pointer items-center flex flex-row py-2 w-full border rounded-xl border-transparent gap-1 pl-4 text-gray-500'}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            </svg>

                            <p className='text-sm'>Pomodoro</p>
                        </button>
                        <button className={darkMode ? 'cursor-pointer items-center flex flex-row py-2 w-full border rounded-xl border-transparent gap-3  pl-4 text-gray-400 hover:bg-blue-950 hover:text-gray-200' : 'cursor-pointer items-center flex flex-row py-2 w-full border rounded-xl border-transparent gap-1 pl-4 text-gray-500'}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 0 1 3 3h-15a3 3 0 0 1 3-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 0 1-.982-3.172M9.497 14.25a7.454 7.454 0 0 0 .981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 0 0 7.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 0 0 2.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 0 1 2.916.52 6.003 6.003 0 0 1-5.395 4.972m0 0a6.726 6.726 0 0 1-2.749 1.35m0 0a6.772 6.772 0 0 1-3.044 0" />
                            </svg>

                            <p className='text-sm'>Achievements</p>
                        </button>
                        <button className={darkMode ? 'cursor-pointer items-center flex flex-row py-2 w-full border rounded-xl border-transparent gap-3 pl-4 text-gray-400 hover:bg-blue-950 hover:text-gray-200' : 'cursor-pointer items-center flex flex-row py-2 w-full border rounded-xl border-transparent gap-1 pl-4 text-gray-500'}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 9.75a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 0 1 .778-.332 48.294 48.294 0 0 0 5.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
                            </svg>
                            <p className='text-sm'>Duck Debugger</p>
                        </button>
                    </div>
                </div>
            </div>
            <div className={darkMode ? 'bg-[#0b111e] col-span-7 ' : 'bg-stone-100 col-span-7 text-zinc-800'}>
                <div className='flex flex-col h-screen'>
                    <div className={darkMode ? 'border-b border-[#182543] flex justify-between  px-5' : 'border-b border-gray-300 flex justify-between  px-5'}>
                        <div className='cursor-pointer content-center'>
                            <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth='1.5' stroke='currentColor' className='size-5'>
                                <path strokeLinecap='round' strokeLinejoin='round' d='M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15' />
                            </svg>
                        </div>
                        <div className='content-center flex'>
                            <button
                                onClick={() => toggleTheme(!darkMode)}
                                className='cursor-pointer px-4 py-4'
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
                            ><div className={darkMode ? 'cursor-pointer bg-gray-800 p-2 rounded-md' : 'cursor-pointer border border-2 border-stone-200 p-2 rounded-md border-gray-300'}>
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
                    <div className='grid grid-cols-12 h-full'>
                        <div className={darkMode ? 'col-span-2 border-r border-[#182543]' : 'col-span-2 border-r border-gray-300'}>
                            <div className='flex flex-col'>

                                <div className={darkMode ? 'border-b border-gray-800' : 'border-b border-gray-300'}>
                                    <p className={darkMode ? 'flex pl-4 py-3 gap-2' : 'flex pl-4 py-3 gap-2 text-zinc-800'}>Sessions</p>
                                </div>

                                <div className='px-2'>
                                    <div className={darkMode ? 'flex justify-evenly py-2 w-full px-2 ' : 'flex justify-evenly py-2 w-full px-2 '}>
                                        <button className={darkMode ? 'cursor-pointer w-full justify-center py-2 pl-4 border rounded-xl border-gray-800 text-sm font-bold text-left hover:bg-blue-900 hover:text-gray-200' : 'cursor-pointer w-full justify-center py-2 pl-4 border rounded-xl border-gray-300 text-sm font-bold text-left text-zinc-700'}>+ New Conversation</button>
                                    </div>

                                    <div className={darkMode ? 'flex-1 pt-2 px-2' : 'flex-1 pt-2 px-2'}>
                                        <button className={darkMode ? 'cursor-pointer bg-[#1c212e] flex flex-row py-2 w-full border rounded-xl border-transparent gap-1 justify-start pl-4' : 'cursor-pointer bg-gray-200 flex flex-row py-2 w-full border rounded-xl border-transparent gap-1 justify-start pl-4'}>
                                            <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth='1.5' stroke='currentColor' className='size-5'>
                                                <path strokeLinecap='round' strokeLinejoin='round' d='M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 0 1 1.037-.443 48.282 48.282 0 0 0 5.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z' />
                                            </svg>
                                            <p className='text-sm'>Session 1</p>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='col-span-10 flex flex-col h-full'>

                            <div className={darkMode ? 'flex-none border-b border-[#182543] flex justify-items-start gap-3 pl-5 py-4' : 'border-b border-gray-300 flex justify-items-start gap-3 pl-5 py-4'}>
                                <div className='flex-none'>
                                    <p className='text-lg'>🦆</p>
                                </div>
                                <div className='grow'>
                                    <p className='text-lg'>Session 1</p>
                                    <p className='text-sm'>Explain your problem — sometimes that's all it takes.</p>
                                </div>
                            </div>
                            <div className={darkMode ? 'flex-1 border-b border-[#182543] min-w-full place-content-center' : 'flex-1 border-b border-gray-300 min-w-full place-content-center'}>
                                <div className='flex flex-col gap-4 min-w-full place-content-center items-center mb-16'>
                                    <div className='flex flex-col items-center gap-4'>
                                        <p className='text-6xl'>🦆</p>
                                        <p className='text-xl font-bold'>What's bugging you?</p>
                                    </div>
                                    <p className='text-center text-gray-500 text-sm w-full max-w-1/3'>Describe your coding problem below. What are you trying to do? What's happening instead? What have you tried so far?</p>
                                    <p className='text-center text-gray-500 text-sm w-full max-w-1/3'>Sometimes just explaining it to a rubber duck is enough. If not, hit 'Get AI Help' for suggestions.</p>
                                </div>
                            </div>
                            <div className='flex-none'>
                                <footer>
                                    <div className=' w-full flex flex-col gap-2 items-center'>
                                        <form action='#' method='POST' className='items-center my-1 min-w-1/2'>
                                            <div className='w-full content-center'>
                                                <div className='mt-2.5'>
                                                    <textarea id='message' name='message' rows='4' className={darkMode ? 'block w-full rounded-md bg-white/5 px-3.5 py-2 text-base text-white text-sm border border-gray-800 placeholder:text-gray-500 focus:outline-2 border-2 focus:-outline-offset-2 focus:outline-indigo-500' : 'block w-full rounded-md bg-transparent px-3.5 py-2 text-base text-gray-800 text-sm border border-2 border-gray-300 placeholder:text-zinc-800 focus:outline-2 focus:-outline-offset-2 focus:outline-gray-400'}></textarea>
                                                </div>
                                                <div className='flex flex-row gap-4 w-full justify-end my-2'>
                                                    <button className='cursor-pointer border px-3 py-1 border-gray-500 rounded-lg text-sm'>Reflect / Guide</button>
                                                    <button className='cursor-pointer border px-3 py-1 border-gray-500 rounded-lg text-sm'>Submit</button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </footer>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}