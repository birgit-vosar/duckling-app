import { NextResponse, NextRequest } from 'next/server';
import { pool } from '@/app/lib/db';
import { getSessionUser } from '@/app/lib/auth';

export async function POST(req: NextRequest) {
  try {
    const user = await getSessionUser(req);
    if (!user)
      return NextResponse.json(
        { error: 'User is unauthorized' },
        { status: 401 },
      );

    const result = await pool.query(
      'SELECT equipped_skin FROM users WHERE id = $1', [user.id]
    );

    const equippedSkin = result.rows[0].equipped_skin;

    return NextResponse.json({ equippedSkin: equippedSkin });
  } catch (err) {
    console.error('Failed to fetch equipped skin', err);
    return NextResponse.json({ error: 'Failed to fetch equipped skin' }, { status: 500 });
  }

}
