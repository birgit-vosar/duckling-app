import { NextResponse } from "next/server";
import { pool } from '@/app/lib/db';
import { getSessionUser } from "@/app/lib/auth";


export async function POST(req: Request) {
    const user = await getSessionUser(req);
    if (!user)
    return NextResponse.json(
      { error: 'User is unauthorized' },
      { status: 401 },
    );


    const result = await pool.query(
        'SELECT item_id FROM item_unlocks WHERE collected_at IS NULL AND user_id = $1', [user.id]
    );

    if(result.rows.length === 0) {
        return NextResponse.json(
            {response: 'No skin to collect.'}
        );
    };

    const itemId = result.rows[0].item_id;

    await pool.query(
        'UPDATE item_unlocks SET collected_at = NOW() WHERE user_id = $1 AND item_id = $2',
        [user.id, itemId]
    );


    return NextResponse.json({ newSkin : itemId });
}