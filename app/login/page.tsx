'use client'

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Login() {
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        const formData = new FormData(e.currentTarget);
        const email = formData.get('email') as string;
        const password = formData.get('password') as string;

        if (!email || !password) {
            setError('Please fill in all fields');
            setLoading(false);
            return;
        }

        try {
            const response = await fetch('/api/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password })
            });

            const data = await response.json();

            if (!response.ok) {
                setError(data.error || 'Login failed');
                setLoading(false);
                return
            }

            router.push('/');
        } catch (err) {
            console.error('Login error', err)
            setError('Something went wrong with login.')
            setLoading(false);
        }
    }

    return (
        <div className='bg-[#0b111e] flex flex-col items-center justify-center min-h-screen  '>
            <div className='bg-[#0e1525] p-6 border border-[#182543] rounded-lg w-full max-w-md'>
                <div>
                    <h2 className='mb-1 text-center font-semibold text-2xl/9 tracking-tight'>🦆 WorkFlow Companion</h2>
                    <p className='mb-6 text-center text-gray-300 text-md/9 '>welcome to login</p>
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
                            <button type='submit' className='cursor-pointer hover:bg-blue-600 active:bg-blue-700 items-center justify-center rounded-md text-sm font-medium bg-blue-500 h-10 w-full'>
                                {loading ? 'Logging in...' : "Log in"}
                            </button>
                        </div>
                    </form>
                    <div className='mt-4 text-center text-sm'>
                        <span className='text-gray-400'>Don't have an account? </span>
                        <a href='/signup' className='text-blue-500 hover:text-blue-400'>
                        Sign up
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}