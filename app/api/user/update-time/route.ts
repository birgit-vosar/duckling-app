import { NextResponse } from "next/server";
import { pool } from "@/app/lib/db";
import { getSessionUser } from "@/app/lib/auth";

export async function POST(req: Request) {
  const user = await getSessionUser(req);
  if (!user)
    return NextResponse.json(
      { error: "User is unauthorized" },
      { status: 401 },
    );

  const result = await pool.query(
    "UPDATE users SET total_minutes = total_minutes + 1 WHERE id = $1 RETURNING total_minutes",
    [user.id],
  );

  const newTotal: number = result.rows[0].total_minutes;
  const isTreshhold = newTotal % 30 === 0 && newTotal <= 120;
  const newSkin = isTreshhold ? `skin_${newTotal / 30 + 1}` : null;

  const MILESTONES = [30, 60, 90, 120];
  const nextMilestone = MILESTONES.find((m) => m > newTotal) ?? null;
  const secondsUntilNext = nextMilestone
    ? (nextMilestone - newTotal) * 60
    : null;

  if (newSkin) {
    await pool.query(
      `INSERT INTO item_unlocks (user_id, item_id, collected_at) 
       VALUES ($1, $2, NULL) 
       ON CONFLICT (user_id, item_id) DO NOTHING`,
      [user.id, newSkin],
    );
  }

  const resultCollected = await pool.query(
    "SELECT EXISTS (SELECT 1 FROM item_unlocks WHERE user_id = $1 AND collected_at IS NULL)",
    [user.id],
  );

  const canCollect = resultCollected.rows[0].exists;

  return NextResponse.json({ ok: true, canCollect, secondsUntilNext });
}
