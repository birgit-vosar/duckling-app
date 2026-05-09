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
      'SELECT item_id FROM item_unlocks WHERE user_id = $1 AND collected_at IS NOT NULL', [user.id]
    );

    const allSkins = result.rows.map(row => row.item_id);

    const totalAmount = result.rows.length;

    return NextResponse.json({ totalAmount: totalAmount, allSkins: allSkins });

  } catch (err) {
    console.error('Failed to fetch all skins', err);
    return NextResponse.json({ error: 'Failed to fetch all skins' }, { status: 500 })
  }

}
