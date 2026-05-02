'use client'

import { useState, useEffect } from 'react';
import { useTimeTracker } from '@/app/hooks/useTimeTracker';

export function SkinReward() {
    const { canCollect, setCanCollect, loading } = useTimeTracker();
    const [newSkin, setNewSkin] = useState('');

    if (loading) return null;

    async function handleCollect() {
        try {
            const response = await fetch('/api/cosmetics/collect', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
            });

            const data = await response.json();
            setNewSkin(data.newSkin);
            setTimeout(() => {
                setCanCollect(false);
                setNewSkin('');
            }, 3000)
        } catch (error) {
            console.error('Error:', error);
        }
    }

    return (
        <>
            {canCollect === false ?
                <div className='flex justify-between absolute inset-0 p-6 h-23 border rounded-lg border-gray-300 dark:border-[#1e2841]'>
                    <div className='flex gap-3 items-center'>
                        <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='size-8 text-gray-500 dark:text-gray-400'>
                            <path strokeLinecap='round' strokeLinejoin='round' d='M21 11.25v8.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 1 0 9.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1 1 14.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z' />
                        </svg>

                        <div>
                            <p className='text-sm font-semibold text-gray-500 text-left'>Free Skin Drop</p>
                            <p className='text-xs dark:text-gray-400 text-gray-500'>Come back soon for your reward!</p>
                        </div>
                    </div>
                    <p className='font-bold text-gray-400 dark:text-gray-500 text-xl font-sans content-center mr-3'>29:59</p>
                </div>
                :
                <div className='flex justify-between absolute inset-0 p-6 h-23 border rounded-lg dark:border-yellow-400 text-white hover:scale-101 transition duration-300'>
                    <div className='flex gap-3 items-center'>
                        <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='size-8 dark:text-yellow-400'>
                            <path strokeLinecap='round' strokeLinejoin='round' d='M21 11.25v8.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 1 0 9.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1 1 14.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z' />
                        </svg>

                        <div>
                            <p className='text-sm font-semibold text-left'>Free Skin Drop</p>
                            <p className='text-xs dark:text-gray-400 text-gray-500'>Tap to claim your skin!</p>
                        </div>
                    </div>
                    <button className='dark:bg-yellow-400 uppercase dark:hover:bg-yellow-300 dark:hover:border-yellow-300 cursor-pointer transition duration-300 border rounded-3xl px-5 dark:border-yellow-400 py-2 px-4 font-bold dark:text-[#0a0a0a]' onClick={handleCollect}>{newSkin ? <img src={`/assets/${newSkin}-sm.png`} width={80} height={80} /> : 'Claim'}</button>
                </div>
            }
        </>
    )
}

<div className='p-6 dark:group-hover:text-slate-200'>
    <SkinReward />
</div>