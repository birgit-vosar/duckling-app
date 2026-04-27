import crypto from "crypto";
import { pool } from "@/app/lib/db";
import { NextRequest } from "next/server";

export function generateSessionToken(): string {
  return crypto.randomBytes(32).toString("hex");
}

export async function createUserSession(userId: number) {
  const sessionToken = generateSessionToken();

  if (!sessionToken) return null

  const expiresAt = new Date();
  expiresAt.setDate(expiresAt.getDate() + 7);

  // Delete old sessions (one session per user policy)
  await pool.query("DELETE FROM sessions WHERE user_id = $1", [userId]);

  await pool.query(
    "INSERT INTO sessions (user_id, session_token, expires_at) VALUES ($1, $2, $3)",
    [userId, sessionToken, expiresAt],
  );

  return sessionToken;
}

export async function getSessionUser(req: NextRequest) {
  const sessionToken = req.cookies.get('session_token')?.value;
  if (!sessionToken) return null;

  const result = await pool.query(
    `SELECT u.id, u.email, u.dark_mode, u.total_minutes
    FROM sessions s
    JOIN users u ON s.user_id = u.id
    WHERE s.session_token = $1 AND s.expires_at > NOW()`,
    [sessionToken]
  );

  return result.rows[0] ?? null;
}
