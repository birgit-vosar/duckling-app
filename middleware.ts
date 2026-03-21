export const config = {
  runtime: 'nodejs',
};

import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';
import { pool } from '@/app/lib/db';

export async function middleware(request: NextRequest) {
    const path = request.nextUrl.pathname;

    const publicPaths = ['/login', '/signup', '/_next', '/favicon.ico'];
    if (publicPaths.includes(path) || path.startsWith('/api/auth') || path.startsWith('/_next')) {
        return NextResponse.next();
    }
    
    const sessionToken = request.cookies.get('session_token');

    if (!sessionToken) {
        return NextResponse.redirect(new URL('/login', request.url));
    }

    const result = await pool.query(
        'SELECT * FROM sessions WHERE session_token = $1 AND expires_at > NOW()', [sessionToken.value]
    );

    if (result.rows.length === 0) {
        return NextResponse.redirect(new URL('/login', request.url));
    }

    return NextResponse.next();
}