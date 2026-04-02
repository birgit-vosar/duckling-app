import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { pool } from "@/app/lib/db";
import { error } from "console";

export async function GET(req: NextRequest) {
  try {
    const sessionToken = req.cookies.get("session_token");

    if (!sessionToken) {
      return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
    }

    const result = await pool.query(
      "SELECT users.dark_mode FROM sessions JOIN users ON sessions.user_id = users.id WHERE session_token = $1",
      [sessionToken.value],
    );

    if (result.rows.length === 0) {
        return NextResponse.json(
            { error: 'Invalid or missing session' },
            { status: 401 }
        );
    }
    
    return NextResponse.json (
        { darkMode: result.rows[0].dark_mode },
        { status: 200 }
    )

  } catch (err) {
    console.error("Error changing dark mode", err);
    return NextResponse.json(
      { error: "Dark mode switch failed" },
      { status: 500 },
    );
  }
}
