import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { pool } from "@/app/lib/db";

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

    const saltRounds = 10;
    const hash = await bcrypt.hash(password, saltRounds);

    try {
      await pool.query(
        "INSERT INTO users (email, password_hash) VALUES ($1, $2)",
        [email, hash],
      );
    } catch (err: any) {
      if (err.code === "23505") {
        return NextResponse.json(
          { error: "Email already exists" },
          { status: 409 },
        );
      }
    }

    return NextResponse.json({ message: "User created" }, { status: 201 });
  } catch (err) {
    console.log("Error adding person to database.", err);
    return NextResponse.json({ error: "Signup failed" }, { status: 500 });
  }
}
