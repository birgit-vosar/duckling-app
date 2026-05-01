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
        <>{canCollect === false ? <div className='flex flex-col gap-2'><p className='font-bold'>Skin achievements</p><p>gotta be patient man, get outta here!</p></div> : <div className='flex justify-between'><p>Oh! a button appeared! click on it!!!</p><button className='dark:bg-sky-950 dark:hover:bg-sky-900 cursor-pointer border rounded-4xl dark:border-sky-800 py-2 px-4 text-white' onClick={handleCollect}>{newSkin ? <img src={`/assets/${newSkin}-sm.png`} width={80} height={80} /> : 'Click NOW'}</button></div>}</>
    )
}