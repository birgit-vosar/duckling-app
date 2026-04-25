'use client'

import { useNav } from '../context/NavContext'
import Nav from '../components/Nav'
import TopBar from '../components/TopBar'
import { useState } from 'react'
import DebuggerLoading from '../components/DebuggerLoading'

export default function () {
  const { mobileMenu, toggleMobileNav } = useNav();
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const [pageText, setPageText] = useState<{ role: 'user' | 'assistant'; content: string }[]>([]);


  async function handleSubmit() {
        if (!message) {
      setError('Please describe your problem first');
      return;
    }

    setPageText(prev =>
      [
        ...prev,
        { content: message, role: 'user' }
      ]
    )

    setIsLoading(true);
    setMessage('');


    try {

      const response = await fetch('/api/debug/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message })
      })
      const data = await response.json();

      if (!response.ok) {
        setError(data.error || 'submitting text to endpoint failed');
        return;
      }

      setPageText(prev =>
        [
          ...prev,
          { content: data.response, role: 'assistant' }
        ]
      )

      setIsLoading(false);

    } catch (err) {
      console.log('Textarea error', err);
      setError('Something went wrong with submitting text.')
    }

  }

  return (
    <div className='flex flex-row min-h-screen'>
      <Nav />
      {mobileMenu ? (<div className='fixed inset-0 bg-black/20 z-40 md:hidden' onClick={toggleMobileNav} />) : (<div className='md:hidden' />)}

      <div className='bg-stone-100 text-zinc-800 dark:bg-[#0b111e] dark:text-white flex-1'>
        <div className='flex flex-col h-screen'>
          <TopBar />
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
                    <button className='cursor-pointer w-full justify-center py-2 pl-4 border rounded-xl text-sm font-bold text-left text-zinc-700 border-gray-300 dark:border-gray-800 dark:text-white hover:bg-[#D2EAF1] active:bg-[#bed7df] hover:text-zinc-700 hover:border-blue-100 dark:hover:bg-blue-900 dark:hover:text-gray-200 dark:hover:border-blue-950 dark:active:bg-blue-700  transition duration-300'>
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

              <div className='flex-1 border-b border-gray-300 dark:border-[#182543] min-w-full px-92 place-content-center'>

                {pageText.length === 0 ?
                  (
                    <div className='flex flex-col gap-4 min-w-full place-content-center items-center mb-16'><div className='flex flex-col items-center gap-4'>
                      <p className='text-6xl'>🦆</p>
                      <p className='text-xl font-bold'>What's bugging you?</p>
                    </div>
                      <p className='text-center text-gray-500 text-sm w-full max-w-2/3'>Describe your coding problem below. What are you trying to do? What's happening instead? What have you tried so far?</p>
                      <p className='text-center text-gray-500 text-sm w-full max-w-2/3'>Sometimes just explaining it to a rubber duck is enough. If not, hit 'Get AI Help' for suggestions.</p></div>
                  ) :
                  (
                    <div className='min-w-full flex flex-col w-full h-full justify-end overflow-hidden text-sm' id='page-text-div'>
                      {pageText.map((text, index) => (
                        (text.role === 'user' ?
                          (
                            <div key={index} className='mb-6 px-5 py-2 dark:bg-slate-800 w-fit max-w-md place-self-end border rounded-md dark:border-transparent'>
                              <div className='w-fit'>{text.content}</div>
                            </div>
                          ) :
                          (
                            <div key={index} className='mb-6 px-5 py-2 dark:bg-slate-900 border rounded-md dark:border-[#182543] w-fit max-w-md'>
                              <div className='w-fit'>{text.content}</div>
                            </div>
                          )
                        )
                      ))}
                      {isLoading && (
                        <div className='mb-6 flex justify-start'>
                          <DebuggerLoading />
                        </div>
                      )}
                    </div>
                  )}

              </div>

              <div className='flex-none bg-zinc-100 dark:bg-[#0b111e]'>
                <div className='w-full flex flex-col gap-2 items-center'>
                  <div className='items-center my-1 min-w-1/2 w-1/2'>
                    <div className='mt-2.5'>
                      <textarea
                        id='message'
                        name='message'
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder={'Whats the bug?'}
                        rows={4}
                        className='block w-full rounded-md px-3.5 py-2 text-sm border-2 focus:outline-2 focus:-outline-offset-2
                          bg-white dark:bg-transparent text-gray-800 border-gray-200 placeholder:text-zinc-400 focus:outline-gray-400
                           dark:text-white dark:border-gray-800 dark:placeholder:text-gray-500 dark:focus:outline-indigo-500'
                      />
                    </div>
                    <div className='flex flex-row gap-4 w-full justify-end my-2'>
                      <button className='cursor-pointer border px-3 py-1 border-gray-500 rounded-lg text-sm hover:bg-[#D2EAF1] active:bg-[#bed7df] hover:text-zinc-700 hover:border-blue-100 dark:bg-[#1c212e] dark:hover:bg-blue-900 dark:hover:text-white dark:active:bg-blue-700 transition duration-300'>Reflect / Guide</button>
                      <button onClick={handleSubmit} className='cursor-pointer border px-3 py-1 border-gray-500 rounded-lg text-sm hover:bg-[#D2EAF1] active:bg-[#bed7df] hover:text-zinc-700 hover:border-blue-100 dark:bg-[#1c212e] dark:hover:bg-blue-900 dark:hover:text-white dark:active:bg-blue-700 transition duration-300'>Submit</button>
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