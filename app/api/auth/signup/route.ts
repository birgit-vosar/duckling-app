import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { Pool } from "pg";


export async function POST(req: Request) {
    try {
        const body = await req.json();
        const {email, password} = body;

        if (!email || email.trim()==="") {
            return NextResponse.json({error:"Email is required"}, {status:400});
        }

        if (!password || password.trim()==="") {
            return NextResponse.json({error:"Password is required"}, {status:400});
        }

        const pool = new Pool({
            connectionString: process.env.DATABASE_URL,
            ssl: { rejectUnauthorized: false }
        });

        const saltRounds = 10;
        const hash = await bcrypt.hash(password, saltRounds);
        const result = await pool.query(
                    "INSERT INTO users (email, password_hash) VALUES ($1, $2)",
                    [email, hash]
                );

        return NextResponse.json( 
            { message: "User created" },
            { status: 201 }
        )

    } catch (err) {
        console.log("Error adding person to database.");
        return NextResponse.json({error: "Signup failed"}, {status: 500});
    }
}