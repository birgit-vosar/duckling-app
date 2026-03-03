import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { Pool } from "pg";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email, password } = body;

    if (!email || email.trim() === "") {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    if (!password || password.trim() === "") {
      return NextResponse.json(
        { error: "Password is required" },
        { status: 400 },
      );
    }

    const pool = new Pool({
      connectionString: process.env.DATABASE_URL,
      ssl: { rejectUnauthorized: false },
    });

    const result = await pool.query(
      "SELECT id, email, password_hash FROM users WHERE email = $1",
      [email],
    );

    if (result.rows.length === 0) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    const user = result.rows[0];

    const isMatch = await bcrypt.compare(password, user.password_hash);

    if (!isMatch) {
        return NextResponse.json({error: "Invalid password"}, {status: 401});
    } else {
        return NextResponse.json({message: "Login successful"}, {status: 200});
    }

  } catch (error) {
    console.log("Error logging person with database", error);
    return NextResponse.json({ error: "Login failed" }, { status: 500 });
  }
}
