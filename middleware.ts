import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';

export async function middleware(req: NextRequest) {
    const path = req.nextUrl.pathname;

    const publicPaths = ['/login', '/signup', '/_next', '/favicon.ico'];
    if (publicPaths.includes(path) || path.startsWith('/api/auth') || path.startsWith('/api/user') || path.startsWith('/_next')) {
        return NextResponse.next();
    }

    const sessionToken = req.cookies.get('session_token');

    if (!sessionToken) {
        return NextResponse.redirect(new URL('/login', req.url));
    }

    return NextResponse.next();
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
};