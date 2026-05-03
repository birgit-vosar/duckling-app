'use client'

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Signup() {
    const [error, setError] = useState('');
    const [userCreated, setUserCreated] = useState(false);
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError('');

        const formData = new FormData(e.currentTarget);

        const email = formData.get('email') as string;
        const password = formData.get('password') as string;

        try {
            const response = await fetch('/api/auth/signup', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password })
            });

            const data = await response.json();

            if (!response.ok) {
                setError(data.error || 'Signup failed');
                return
            }

            setUserCreated(true);

            setTimeout(() => {
                router.push('/login');
            }, 2000)


        } catch (err) {
            console.error('Signup error:', err);
            setError('Something went wrong with signup.')
        }
    }

    return (
        <div className='bg-[#0b111e] flex flex-col items-center justify-center min-h-screen  '>
            <div className='bg-[#0e1525] p-6 border border-[#182543] rounded-lg w-full max-w-md'>
                <div className={`${userCreated === true && 'hidden'}`}>
                    <h2 className='mb-6 text-center font-semibold text-2xl/9 tracking-tight'>WorkFlow Companion</h2>
                </div>
                <div>
                    {userCreated === true ?
                        (<div className='flex gap-2 justify-center zoom-in animate-duration-700'>
                            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' className='text-lime-500 size-6'>
                                <path fillRule='evenodd' d='M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z' clipRule='evenodd' />
                            </svg>


                            <p className='text-md'>User successfully created</p>
                        </div>)
                        :
                        (<form onSubmit={handleSubmit} className='space-y-6'>
                            {error && (
                                <div className='bg-red-500/10 border border-red-500 text-red-500 px-4 py-2 rounded'>
                                    {error}
                                </div>
                            )}
                            <div>
                                <label>
                                    Email
                                </label>
                                <div className='mt-2'>
                                    <input
                                        id='email' name='email' type='email' required autoComplete='email'
                                        className='bg-[#0b111e] w-full outline-1 -outline-offset-1 outline-[#182543] placeholder:text-muted-foreground
                                    px-3 py-1.5
                                    rounded-md 
                                    sm:text-sm/6
                                    '
                                        placeholder='you@example.com'
                                    />
                                </div>
                            </div>
                            <div>
                                <label>
                                    Password
                                </label>
                                <div className='mt-2'>
                                    <input
                                        id='password' name='password' type='password' required autoComplete='current-password'
                                        className='bg-[#0b111e] w-full outline-1 -outline-offset-1 outline-[#182543] placeholder:text-muted-foreground
                                    px-3 py-1.5
                                    rounded-md
                                    sm:text-sm/6
                                    '
                                        placeholder='••••••••'
                                    />
                                </div>
                            </div>
                            <div>
                                <button type='submit' className='cursor-pointer hover:bg-blue-600 active:bg-blue-700 items-center justify-center rounded-md text-sm font-medium bg-blue-500 h-10 w-full'>
                                    Sign up
                                </button>
                            </div>
                        </form>)}

                </div>
            </div>
        </div>
    )
}