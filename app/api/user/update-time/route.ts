import { NextResponse } from "next/server";
import { pool } from "@/app/lib/db";
import { getSessionUser } from "@/app/lib/auth";

export async function POST(req: Request) {
    const user = await getSessionUser(req);
    if (!user) return NextResponse.json({ error: 'User is unauthorized'}, { status: 401 });

    await pool.query(
        'UPDATE users SET total_minutes = total_minutes + 1 WHERE id = $1',
        [user.id]
    )

    return NextResponse.json({ ok: true });

}