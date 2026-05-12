export const config = {
  runtime: 'nodejs',
};

import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';
import { pool } from '@/app/lib/db';

export async function middleware(req: NextRequest) {
    const path = req.nextUrl.pathname;

    const publicPaths = ['/login', '/signup', '/_next', '/favicon.ico', '/api/debug/chat'];
    if (publicPaths.includes(path) || path.startsWith('/api/auth') || path.startsWith('/api/user') || path.startsWith('/_next')) {
        return NextResponse.next();
    }
    
    const sessionToken = req.cookies.get('session_token');

    if (!sessionToken) {
        return NextResponse.redirect(new URL('/login', req.url));
    }

    const result = await pool.query(
        'SELECT * FROM sessions WHERE session_token = $1 AND expires_at > NOW()', [sessionToken.value]
    );

    if (result.rows.length === 0) {
        return NextResponse.redirect(new URL('/login', req.url));
    }

    return NextResponse.next();
}