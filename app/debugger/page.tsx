'use client'

import { useTheme } from '../context/ThemeContext'
import Nav from '../components/Nav'

export default function Debugger() {
  const { toggleTheme, darkMode } = useTheme()

  return (
    <div className='grid grid-cols-8 min-h-screen'>

      <Nav />

      <div className='bg-stone-100 text-zinc-800 dark:bg-[#0b111e] dark:text-white col-span-7'>
        <div className='flex flex-col h-screen'>

          {/* topbar */}
          <div className='border-b border-gray-300 dark:border-[#182543] flex justify-between px-5'>
            <div className='cursor-pointer content-center'>
              <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth='1.5' stroke='currentColor' className='size-5'>
                <path strokeLinecap='round' strokeLinejoin='round' d='M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15' />
              </svg>
            </div>
            <div className='content-center flex'>
              <button onClick={toggleTheme} className='cursor-pointer px-4 py-4'>
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
              <button onClick={toggleTheme} className='px-4 py-2 flex'>
                <div className='cursor-pointer p-2 rounded-md border border-gray-300 dark:border-transparent dark:bg-gray-800'>
                  <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth='1.5' stroke='currentColor' className='size-5'>
                    <path strokeLinecap='round' strokeLinejoin='round' d='M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z' />
                  </svg>
                </div>
              </button>
            </div>
          </div>

          {/* main content */}
          <div className='grid grid-cols-12 h-full'>

            {/* sessions sidebar */}
            <div className='col-span-2 border-r border-gray-300 dark:border-[#182543]'>
              <div className='flex flex-col'>
                <div className='border-b border-gray-300 dark:border-gray-800'>
                  <p className='pl-4 py-3 text-zinc-800 dark:text-white'>Sessions</p>
                </div>
                <div className='px-2'>
                  <div className='flex justify-evenly py-2 w-full px-2'>
                    <button className='cursor-pointer w-full justify-center py-2 pl-4 border rounded-xl text-sm font-bold text-left text-zinc-700 border-gray-300 dark:border-gray-800 dark:text-white hover:bg-[#D2EAF1] active:bg-[#D2EAF1 hover:text-zinc-700 hover:border-blue-100 dark:hover:bg-blue-900 dark:hover:text-gray-200 dark:hover:border-blue-950 dark:active:bg-blue-700'>
                      + New Conversation
                    </button>
                  </div>
                  <div className='flex-1 pt-2 px-2'>
                    <button className='cursor-pointer flex flex-row py-2 w-full border rounded-xl border-transparent gap-1 justify-start pl-4 bg-gray-200 dark:bg-[#1c212e]'>
                      <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth='1.5' stroke='currentColor' className='size-5'>
                        <path strokeLinecap='round' strokeLinejoin='round' d='M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 0 1 1.037-.443 48.282 48.282 0 0 0 5.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z' />
                      </svg>
                      <p className='text-sm'>Session 1</p>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* chat area */}
            <div className='col-span-10 flex flex-col h-full'>
              <div className='flex-none border-b border-gray-300 dark:border-[#182543] flex justify-items-start gap-3 pl-5 py-4'>
                <div className='flex-none'>
                  <p className='text-lg'>🦆</p>
                </div>
                <div className='grow'>
                  <p className='text-lg'>Session 1</p>
                  <p className='text-sm text-gray-500'>Explain your problem — sometimes that's all it takes.</p>
                </div>
              </div>

              <div className='flex-1 border-b border-gray-300 dark:border-[#182543] min-w-full place-content-center'>
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
                <div className='w-full flex flex-col gap-2 items-center'>
                  <div className='items-center my-1 min-w-1/2 w-1/2'>
                    <div className='mt-2.5'>
                      <textarea
                        id='message'
                        name='message'
                        rows={4}
                        className='block w-full rounded-md px-3.5 py-2 text-sm border-2 focus:outline-2 focus:-outline-offset-2
                          bg-transparent text-gray-800 border-gray-300 placeholder:text-zinc-400 focus:outline-gray-400
                          dark:bg-white/5 dark:text-white dark:border-gray-800 dark:placeholder:text-gray-500 dark:focus:outline-indigo-500'
                      />
                    </div>
                    <div className='flex flex-row gap-4 w-full justify-end my-2'>
                      <button className='cursor-pointer border px-3 py-1 border-gray-500 rounded-lg text-sm hover:bg-[#D2EAF1] active:bg-[#D2EAF1] hover:text-zinc-700 hover:border-blue-100 dark:bg-[#1c212e] dark:hover:bg-blue-900 dark:hover:text-white dark:active:bg-blue-700'>Reflect / Guide</button>
                      <button className='cursor-pointer border px-3 py-1 border-gray-500 rounded-lg text-sm hover:bg-[#D2EAF1] active:bg-[#D2EAF1 hover:text-zinc-700 hover:border-blue-100 dark:bg-[#1c212e] dark:hover:bg-blue-900 dark:hover:text-white dark:active:bg-blue-700'>Submit</button>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}