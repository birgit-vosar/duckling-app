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
    const { message, conversationId, mode } = body;

    const user = await getSessionUser(req);
    if (!user)
      return NextResponse.json(
        { error: 'User is unauthorized' },
        { status: 401 },
      );

    if (!message || typeof message !== 'string' || !message.trim()) {
      return NextResponse.json(
        { error: 'Message is required' },
        { status: 400 },
      );
    }

    if (mode !== 'Reflect' && mode !== 'Explore') {
      return NextResponse.json(
        { error: 'Invalid debugger mode' },
        { status: 400 },
      );
    }
    const systemPrompt = getSystemPrompt(mode);

    if (!conversationId) {
      const sessionResult = await pool.query(
        'INSERT INTO debugging_sessions (user_id, title) VALUES ($1, $2) RETURNING id',
        [user.id, message.slice(0, 25)],
      );

      const newSessionId = sessionResult.rows[0].id;

      await pool.query(
        'INSERT INTO discussions (session_id, role, content) VALUES ($1, $2, $3)',
        [newSessionId, 'user', message],
      );

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

      await pool.query(
        'INSERT INTO discussions (session_id, role, content) VALUES ($1, $2, $3)',
        [newSessionId, 'assistant', reply.text],
      );

      console.log('no id activated');

      return NextResponse.json(
        { response: reply.text, conversationId: newSessionId },
        { status: 200 },
      );
    }

    await pool.query(
      'INSERT INTO discussions (session_id, role, content) VALUES ($1, $2, $3)',
      [conversationId, 'user', message],
    );

    const discussionsResult = await pool.query(
      'SELECT role, content FROM discussions WHERE session_id = $1 ORDER BY created_at ASC',
      [conversationId],
    );
    const allDiscussions = discussionsResult.rows.map((msg) => ({
      role: msg.role as 'user' | 'assistant',
      content: msg.content,
    }));

    /* AI char and response */
    const response = await client.messages.create({
      model: 'claude-haiku-4-5-20251001',
      max_tokens: 1024,
      system: systemPrompt,
      messages: allDiscussions,
    });

    const reply = response.content[0];
    if (reply.type !== 'text') {
      return NextResponse.json(
        { error: 'Unexpected response type' },
        { status: 500 },
      );
    }

    /* table row making */

    await pool.query(
      'INSERT INTO discussions (session_id, role, content) VALUES ($1, $2, $3)',
      [conversationId, 'assistant', reply.text],
    );
    /* table row making end */

    console.log('id is there activated');

    return NextResponse.json({ response: reply.text }, { status: 200 });
  } catch (err) {
    console.error('Duckling API error:', err);
    return NextResponse.json(
      { error: 'connection to API failed' },
      { status: 500 },
    );
  }
}
