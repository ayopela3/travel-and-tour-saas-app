# Next.js 15 SaaS Base Project Setup

## Overview
Create a professional base setup for a SaaS application using Next.js 15, Supabase, Tailwind CSS, shadcn/ui, and testing tools (Jest + Playwright).

## Tech Stack
- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript (strict mode)
- **Backend**: Supabase (client setup only, no migrations)
- **Styling**: Tailwind CSS v4 + shadcn/ui
- **Testing**: Jest + React Testing Library (unit/integration), Playwright (E2E)
- **Package Manager**: npm

## Implementation Plan

### Step 1: Initialize Next.js 15 Project
- Run `npx create-next-app@latest` with TypeScript, Tailwind CSS, ESLint, App Router
- Configure `tsconfig.json` with strict mode and path aliases

### Step 2: Configure Project Structure
Create professional folder structure:
```
src/
├── app/                    # Next.js App Router
│   ├── (auth)/            # Auth route group
│   │   ├── login/
│   │   └── signup/
│   ├── (dashboard)/       # Protected routes group
│   │   └── dashboard/
│   ├── api/               # API routes
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── ui/                # shadcn components
│   └── shared/            # Shared components
├── lib/
│   ├── supabase/          # Supabase client config
│   │   ├── client.ts      # Browser client
│   │   ├── server.ts      # Server client
│   │   └── middleware.ts  # Auth middleware helper
│   └── utils.ts           # Utility functions
├── hooks/                 # Custom React hooks
├── types/                 # TypeScript types
│   ├── database.ts        # Supabase types placeholder
│   └── index.ts
└── config/                # App configuration
    └── site.ts
```

### Step 3: Install and Configure Supabase
- Install `@supabase/supabase-js` and `@supabase/ssr`
- Create browser client (`lib/supabase/client.ts`)
- Create server client (`lib/supabase/server.ts`)
- Create middleware for auth session refresh
- Add environment variables template (`.env.example`)

### Step 4: Install and Configure shadcn/ui
- Run `npx shadcn@latest init`
- Install base components: Button, Card, Input, Form, Toast
- Configure `components.json` for the project

### Step 5: Set Up Jest + React Testing Library
- Install Jest, `@testing-library/react`, `@testing-library/jest-dom`
- Install `jest-environment-jsdom`, `ts-jest`
- Create `jest.config.ts` with Next.js support
- Create `jest.setup.ts` for global test configuration
- Add test utilities and mocks for Supabase

### Step 6: Set Up Playwright for E2E
- Install Playwright with `npm init playwright@latest`
- Configure `playwright.config.ts` for Next.js
- Create base E2E test structure
- Add example smoke test

### Step 7: Configure ESLint and Prettier
- Extend ESLint config with testing plugins
- Add Prettier configuration
- Configure lint-staged for pre-commit hooks (optional)

### Step 8: Create Base Pages and Components
- Landing page (`app/page.tsx`)
- Login page placeholder (`app/(auth)/login/page.tsx`)
- Signup page placeholder (`app/(auth)/signup/page.tsx`)
- Dashboard placeholder (`app/(dashboard)/dashboard/page.tsx`)
- Auth provider component

### Step 9: Add npm Scripts
```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "test": "jest",
    "test:watch": "jest --watch",
    "test:coverage": "jest --coverage",
    "test:e2e": "playwright test",
    "test:e2e:ui": "playwright test --ui",
    "typecheck": "tsc --noEmit"
  }
}
```

### Step 10: Write Initial Tests
- Unit test for utility functions
- Component test example
- E2E smoke test for home page

## Files to Create/Modify

### New Files
- `src/lib/supabase/client.ts`
- `src/lib/supabase/server.ts`
- `src/lib/supabase/middleware.ts`
- `src/lib/utils.ts`
- `src/types/database.ts`
- `src/types/index.ts`
- `src/config/site.ts`
- `src/app/(auth)/login/page.tsx`
- `src/app/(auth)/signup/page.tsx`
- `src/app/(dashboard)/dashboard/page.tsx`
- `src/app/(dashboard)/layout.tsx`
- `src/components/providers/supabase-provider.tsx`
- `src/middleware.ts`
- `jest.config.ts`
- `jest.setup.ts`
- `playwright.config.ts`
- `e2e/home.spec.ts`
- `__tests__/lib/utils.test.ts`
- `.env.example`
- `.env.local` (template)

### Modified Files
- `package.json` (scripts, dependencies)
- `tsconfig.json` (strict mode, paths)
- `next.config.ts` (if needed)
- `.eslintrc.json` (testing plugins)

## Verification

1. **Build Check**: `npm run build` - should complete without errors
2. **Type Check**: `npm run typecheck` - should pass
3. **Lint Check**: `npm run lint` - should pass
4. **Unit Tests**: `npm run test` - should pass
5. **E2E Tests**: `npm run test:e2e` - should pass (basic smoke test)
6. **Dev Server**: `npm run dev` - should start and render landing page

## Notes
- No database migrations will be created (as requested)
- Supabase types file will be a placeholder ready for generated types
- Auth flows will be placeholder pages ready for implementation
- All shadcn components will be installed in `src/components/ui/`
