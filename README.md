# Duckling 🦆

An AI-powered rubber duck debugger that guides junior developers instead of solving for them — because getting unstuck shouldn't feel like cheating.

## The Problem It Solves

Junior developers often feel shame about using AI tools at work. Duckling reframes the experience: instead of handing you the answer, the Duck Debugger asks Socratic questions that help you reason through the problem yourself. You learn. You slay. No shame.

## Features (V1 - In Development)

- **Duck Debugger** — AI chat interface powered by Claude Haiku. Responds with guiding questions, not solutions. Maintains conversation history per debugging session.
- **Custom Auth** — Signup/login with bcrypt password hashing and server-side session tokens. No third-party auth providers.
- **Duck Cosmetics** — Unlock duck skins and hats based on cumulative time spent in the app. Linear unlock system at 30/60/90/120 minute milestones.
- **Dark Mode** — Persisted per user in the database, not just localStorage.
- **Protected Routes** — Middleware-based session validation on all authenticated pages.


## Tech Stack

| Frontend/Backend | Next.js 15 + TypeScript |
| Styling | Tailwind CSS (utility classes only) |
| Database | PostgreSQL via Supabase, raw SQL with `pg` |
| Auth | Custom bcrypt + session tokens |
| AI | Anthropic Claude API (Haiku 4.5) |
| Deployment | Vercel |

## Getting Started

1. Clone the repository
2. Install dependencies:
```bash
   npm install
```
3. Create `.env.local` file with your credentials:
```
   DATABASE_URL=your_supabase_url
   ANTHROPIC_API_KEY=your_api_key
```
4. Run the development server:
```bash
   npm run dev
```
5. Open [http://localhost:3000](http://localhost:3000)

## Project Status

Currently building V1 - targeting completion by summer 2026.

## Roadmap

- **V1** *(current)* — Auth, Duck Debugger, cosmetics, dark mode
- **V2** — Quick notes, Pomodoro timer, random cosmetic drops
- **V3** — Achievements, streak tracking, cosmetics fusion
- **V4** — Resizable dashboard widgets, pop-up reminders

## License

MIT