# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
# Install dependencies (from repo root)
bun install

# Run both client and server concurrently
bun run index.ts
# or
bun run dev

# Client only (packages/client)
bun run dev         # Vite dev server with HMR (port 5173)
bun run build       # TypeScript compile + Vite bundle
bun run lint        # ESLint

# Server only (packages/server)
bun run dev         # Watch mode with auto-reload (port 2121)
bun run start       # Production start

# Formatting (repo root)
bun run format      # Prettier on all files
```

## Runtime: Bun

**Always use Bun** — not Node.js, npm, pnpm, or yarn.

- `bun install` (not `npm install`)
- `bun test` (not jest/vitest)
- Prefer Bun built-ins (`Bun.serve()`, `bun:sqlite`, `Bun.redis`, `Bun.sql`) over third-party equivalents where applicable

## Architecture

Monorepo with two packages: `packages/client` (React frontend) and `packages/server` (Express backend). The root `index.ts` starts both concurrently via the `concurrently` package.

**Client → Server communication:** Vite proxies `/api/*` requests to `http://localhost:2121`, so client code calls `/api/...` without specifying the server URL.

**Frontend stack:** React 19 + Vite + TypeScript + Tailwind CSS v4 + shadcn/ui (new-york style, stone base color, lucide icons). Path alias `@` maps to `packages/client/src/`.

**Backend stack:** Express 5 + TypeScript running on Bun. Environment variables loaded via `.env` (see `.env.example` in `packages/server/`). The package includes `@anthropic-ai/claude-agent-sdk` and `openai` for AI integration.

**Component patterns:** shadcn/ui components use CVA (class-variance-authority) for variants and a `cn()` utility (clsx + tailwind-merge) for class merging. New shadcn components go in `packages/client/src/components/ui/`.

## Code Style

Prettier enforced via pre-commit hook (Husky + lint-staged):
- Single quotes, semicolons, trailing commas (ES5), print width 80, tab width 3
