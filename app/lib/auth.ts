import crypto from "crypto";
import { pool } from "@/app/lib/db";

export function generateSessionToken(): string {
  return crypto.randomBytes(32).toString("hex");
}

export async function createUserSession(userId: number) {
  const sessionToken = generateSessionToken();

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
