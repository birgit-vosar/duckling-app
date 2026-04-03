import { NextRequest, NextResponse } from 'next/server';
import { pool } from '@/app/lib/db';

export async function GET(req: NextRequest) {
  try {
    const sessionToken = req.cookies.get('session_token');

    if (!sessionToken) {
      return NextResponse.json ({ error: 'Not authenticated' }, { status: 401 });
    }

    const result = await pool.query(
      'SELECT users.dark_mode FROM sessions JOIN users ON sessions.user_id = users.id WHERE session_token = $1',
      [sessionToken.value],
    );

    if (result.rows.length === 0) {
        return NextResponse.json (
            { error: 'Invalid session' },
            { status: 401 }
        );
    }
    
    return NextResponse.json (
        { darkMode: result.rows[0].dark_mode },
        { status: 200 }
    )

  } catch (err) {
    console.error('Error changing dark mode:', err);
    return NextResponse.json (
      { error: 'Dark mode switch failed' },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {

    try {
    const sessionToken = req.cookies.get('session_token');

    if (!sessionToken) {
        return NextResponse.json (
            { error: 'Not authenticated' },
            { status: 401 }
        )
    }

    const body = await req.json();
    const { darkMode } = body;

    const idResult = await pool.query(
        'SELECT user_id FROM sessions WHERE session_token = $1', [sessionToken.value]
    )

    if (idResult.rows.length === 0) {
        return NextResponse.json (
            { error: 'Invalid session' },
            { status: 401 }
        )
    }

    const id = idResult.rows[0].user_id;

    await pool.query(
        'UPDATE users SET dark_mode = $1 WHERE id = $2', [darkMode, id]
    )

    return NextResponse.json (
        { message: 'Darkmode updated' },
        { status: 200 }
    );

    } catch (err) {
        console.error('Darkmode update error:', err);
        return NextResponse.json (
            { error: 'Failed to update darkmode' },
            { status: 500 }
        );
    }
}
