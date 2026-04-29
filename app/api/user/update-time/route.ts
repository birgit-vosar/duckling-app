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
  const newUnlock = isTreshhold ? `skin_${(newTotal/30)+1}` : null;

  return NextResponse.json({ response: newUnlock }, { status: 200 });
}
