import { NextResponse } from "next/server";
import { getSessionUser } from "@/app/lib/auth";
import { pool } from "@/app/lib/db";

export async function POST(req: Request) {
  const { skin } = await req.json();

  const user = await getSessionUser(req);
  if (!user)
    return NextResponse.json(
      { error: "User is unauthorized" },
      { status: 401 },
    );

  try {
    const result = await pool.query(
      "UPDATE users SET equipped_skin = $1 WHERE id = $2 RETURNING equipped_skin",
      [skin, user.id],
    );
    const newEquippedSkin = result.rows[0].equipped_skin;
    return NextResponse.json({ newEquippedSkin });
  } catch (err) {
    console.log(err);
    return NextResponse.json(
      { error: "Failed to update skin in API" },
      { status: 500 },
    );
  }
}
