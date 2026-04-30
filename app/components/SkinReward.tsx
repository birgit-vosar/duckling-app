'use client'

import { useState, useEffect } from 'react';

export function SkinReward() {
    const [pendingSkin, setPendingSkin] = useState<string | null>(null);
    const [newSkin, setNewSkin] = useState('');

    useEffect(() => {
        fetch('/api/user/update-time', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
        })
            .then(res => res.json())
            .then(data => {console.log('this is data: ', data); setPendingSkin(data.pendingSkin)});
    }, []);

    

    async function handleCollect() {
        try {
            const response = await fetch('/api/cosmetics/collect', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
            });

            const data = await response.json();
            setNewSkin(data.newSkin);
            setTimeout(() => {
                setPendingSkin('waiting');
                setNewSkin('');
            }, 5000)
        } catch (error) {
            console.error('Error:', error);
        }
    }

    return (
        <>{pendingSkin !== null ?  <div className='flex flex-col gap-2'><p className='font-bold'>Skin achievements</p><p>gotta be patient man, get outta here!</p></div>: <div className='flex justify-between'><p>Oh! a button appeared! click on it!!!</p><button className='dark:bg-sky-950 dark:hover:bg-sky-900 cursor-pointer border rounded-4xl dark:border-sky-800 py-2 px-4 text-white' onClick={handleCollect}>{newSkin ? <img src={`/assets/${newSkin}.png`} width={80} height={80}/> : 'Dont click on this'}</button></div>}</>
    )
}