import { NextRequest, NextResponse } from 'next/server';
import { pool } from '@/app/lib/db';
import { cookies } from 'next/headers';

export async function POST(request: NextRequest) {
  try {
    const sessionToken = request.cookies.get('session_token');

    if (!sessionToken) {
      return NextResponse.json({ error: 'No session found' }, { status: 401 });
    }

    await pool.query('DELETE FROM sessions WHERE session_token = $1', [
      sessionToken.value,
    ]);

    const cookieStore = await cookies();
    cookieStore.delete('session_token');

    return NextResponse.json({ message: 'Logout successful' }, { status: 200 });
  } catch (error) {
    console.error('Logout failed', error);
    return NextResponse.json({ error: 'Logout failed' }, { status: 500 });
  }
}
