import { NextResponse, NextRequest } from 'next/server';
import { getSessionUser } from '@/app/lib/auth';
import { pool } from '@/app/lib/db';

export async function POST(req: NextRequest) {
  try {
    const { skin } = await req.json();

    const validSkins = ['skin_2', 'skin_3', 'skin_4', 'skin_5', 'skin_6', 'skin_7'];
    if (!skin || !validSkins.includes(skin)) {
      return NextResponse.json({ error: 'Invalid skin' }, { status: 400 });
    }

    const user = await getSessionUser(req);
    if (!user)
      return NextResponse.json(
        { error: 'User is unauthorized' },
        { status: 401 },
      );

    const result = await pool.query(
      'UPDATE users SET equipped_skin = $1 WHERE id = $2 RETURNING equipped_skin',
      [skin, user.id],
    );
    const newEquippedSkin = result.rows[0].equipped_skin;
    return NextResponse.json({ newEquippedSkin });
  } catch (err) {
    console.error('Failed to switch equipped skin', err);
    return NextResponse.json(
      { error: 'Failed to update skin in API' },
      { status: 500 },
    );
  }
}
