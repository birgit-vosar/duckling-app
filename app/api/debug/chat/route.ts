import Anthropic from '@anthropic-ai/sdk';
import { NextResponse } from 'next/server';
import { pool } from '@/app/lib/db';
import { getSessionUser } from '@/app/lib/auth';
import { getSystemPrompt } from '@/app/lib/prompts';

const client = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { message, mode } = body;

    const user = await getSessionUser(req);
    if (!user)
      return NextResponse.json(
        { error: 'User is unauthorized' },
        { status: 401 },
      );

      if (!message || typeof message !== 'string' || !message.trim()) {
        return NextResponse.json({ error: 'Message is required' }, { status: 400 });
      }

      if (mode !== 'Reflect' && mode !== 'Explore') {
        return NextResponse.json({ error: 'Invalid debugger mode' }, { status: 400 });
      }

      const sessionResult = await pool.query(
      'INSERT INTO debugging_sessions (user_id, title) VALUES ($1, $2) RETURNING id',
      [user.id, message.slice(0, 25)],
    );

      await pool.query(
      'INSERT INTO discussions (session_id, role, content) VALUES ($1, $2, $3)',
      [sessionResult.rows[0].id, 'user', message],
    );

    const systemPrompt = getSystemPrompt(mode);

    /* AI char and response */
    const response = await client.messages.create({
      model: 'claude-haiku-4-5-20251001',
      max_tokens: 1024,
      system: systemPrompt,
      messages: [{ role: 'user', content: message }],
    });

    const reply = response.content[0];
    if (reply.type !== 'text') {
      return NextResponse.json(
        { error: 'Unexpected response type' },
        { status: 500 },
      );
    }

    /* AI char and response end */

    /* table row making */
    

    

    await pool.query(
      'INSERT INTO discussions (session_id, role, content) VALUES ($1, $2, $3)',
      [sessionResult.rows[0].id, 'assistant', reply.text],
    );
    /* table row making end */

    return NextResponse.json({ response: reply.text }, { status: 200 });
  } catch (err) {
    console.error('Duckling API error:', err);
    return NextResponse.json(
      { error: 'connection to API failed' },
      { status: 500 },
    );
  }
}
