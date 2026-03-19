'use client'

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Signup() {
    const [error, setError] = useState('');
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

            router.push('/login');
        } catch (err) {
            setError('Something went wrong with signup.')
        }
    }

    return (
        <div className='bg-[#0b111e] flex flex-col items-center justify-center min-h-screen  '>
            <div className='bg-[#0e1525] p-6 border border-[#182543] rounded-lg w-full max-w-md'>
                <div>
                    <h2 className='mb-6 text-center font-semibold text-2xl/9 tracking-tight'>🦆 WorkFlow Companion</h2>
                </div>
                <div>
                    <form onSubmit={handleSubmit} className='space-y-6'>
                        {error && (
                            <div className="bg-red-500/10 border border-red-500 text-red-500 px-4 py-2 rounded">
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
                            <button type='submit' className='items-center justify-center rounded-md text-sm font-medium bg-blue-500 h-10 w-full'>
                                Sign up
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}