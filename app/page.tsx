'use client'

import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function Home() {
  const router = useRouter();

  const handleLogout = async () => {
    try {
      const response = await fetch('/api/auth/logout', {
        method: 'POST',
      });

      if (response.ok) {
        router.push('/login');
      } else {
        console.error('Logout failed');
      }
    } catch (error) {
      console.error('Logout error:', error);
    }
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-2xl mb-4">🦆 welcome to duckling</h1>
        <p className="mb-6">you're logged in!</p>
        <div className='flex flex-row gap-4 justify-center'>
          <Link href='/dashboard'
            className="bg-[#2d4583] hover:bg-blue-700 text-white px-4 py-2 rounded"
          >
            Dashboard
          </Link>
          <button
            onClick={handleLogout}
            className="hover:bg-red-600 text-white px-4 py-2 rounded border border-gray-500"
          >
            logout
          </button>
        </div>
      </div>
    </div>
  )
}