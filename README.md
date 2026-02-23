# Travel & Tour SaaS App

A full-stack SaaS platform for travel and tour businesses, built with modern web technologies.

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) 16 with App Router
- **Language**: TypeScript with strict mode
- **Styling**: Tailwind CSS 4 with CSS variables
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/) (New York style)
- **Backend & Auth**: [Supabase](https://supabase.com/) (PostgreSQL + Auth + Storage)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Testing**: Jest (unit tests) + Playwright (E2E tests)
- **Linting**: ESLint with Next.js config

## Project Structure

```
.
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── (auth)/             # Auth route group
│   │   │   ├── login/          # Login page
│   │   │   └── signup/         # Signup page
│   │   ├── (dashboard)/        # Dashboard route group
│   │   │   ├── dashboard/      # Dashboard page
│   │   │   └── layout.tsx      # Dashboard layout
│   │   ├── api/                # API routes
│   │   ├── globals.css         # Global styles
│   │   ├── layout.tsx          # Root layout
│   │   └── page.tsx            # Home page
│   ├── components/
│   │   ├── providers/          # Context providers
│   │   ├── shared/             # Shared components
│   │   └── ui/                 # shadcn/ui components
│   ├── config/
│   │   └── site.ts             # Site configuration
│   ├── hooks/                  # Custom React hooks
│   ├── lib/
│   │   ├── supabase/           # Supabase client/config
│   │   └── utils.ts            # Utility functions (cn, etc.)
│   ├── types/
│   │   ├── database.ts         # Database types
│   │   └── index.ts            # Shared types
│   └── middleware.ts           # Next.js middleware
├── __tests__/                  # Unit/integration tests
│   ├── components/             # Component tests
│   └── lib/                    # Utility tests
├── e2e/                        # Playwright E2E tests
├── public/                     # Static assets
├── components.json             # shadcn/ui configuration
├── jest.config.ts              # Jest configuration
├── playwright.config.ts        # Playwright configuration
└── next.config.ts              # Next.js configuration
```

## Getting Started

### Prerequisites

- Node.js 18+ (recommended: use latest LTS)
- npm or yarn
- A Supabase project (free tier works fine)

### Environment Setup

1. Copy the example environment file:

   ```bash
   cp .env.example .env.local
   ```

2. Fill in your Supabase credentials in `.env.local`:

   ```env
   NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
   NEXT_PUBLIC_APP_URL=http://localhost:3000
   ```

   Get these values from your [Supabase dashboard](https://supabase.com/dashboard) under Project Settings > API.

### Installation

```bash
npm install
```

### Running the App

```bash
# Development server (http://localhost:3000)
npm run dev

# Production build
npm run build

# Start production server
npm run start
```

## Code Style Guidelines

### TypeScript

- Use strict TypeScript with explicit types
- Prefer `interface` over `type` for object shapes
- Use `type` for unions, tuples, and utility types
- Export types from `src/types/index.ts`

### Components

- Use functional components with hooks
- Follow shadcn/ui patterns for UI components
- Use `cn()` utility for conditional class merging
- Use `@/` path alias for imports (e.g., `@/components/ui/button`)
- Props interface should be named `{ComponentName}Props`

### File Naming

- Components: PascalCase (e.g., `Button.tsx`)
- Utilities/Hooks: camelCase (e.g., `useAuth.ts`)
- Test files: `{name}.test.ts` or `{name}.spec.ts`

### Styling

- Use Tailwind CSS utility classes
- Use CSS variables for theming (defined in `globals.css`)
- Follow the shadcn/ui design system
- Use `lucide-react` for icons

### Example Component Pattern

```tsx
import * as React from "react"
import { cn } from "@/lib/utils"

interface MyComponentProps {
  className?: string
  children: React.ReactNode
}

export function MyComponent({ className, children }: MyComponentProps) {
  return <div className={cn("base-classes", className)}>{children}</div>
}
```

## Testing

### Unit Tests (Jest)

```bash
# Run all unit tests
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage report
npm run test:coverage
```

Unit tests are located in `__tests__/` and use:

- **Jest** as the test runner
- **React Testing Library** for component testing
- **jsdom** environment for DOM simulation

### E2E Tests (Playwright)

```bash
# Run all E2E tests (headless)
npm run test:e2e

# Run E2E tests with UI mode
npm run test:e2e:ui
```

E2E tests are located in `e2e/` and test full user flows.

### Creating a Test Case

#### Unit Test Example

Create a file in `__tests__/components/MyComponent.test.tsx`:

```tsx
import { render, screen } from "@testing-library/react"
import { MyComponent } from "@/components/MyComponent"

describe("MyComponent", () => {
  it("renders correctly", () => {
    render(<MyComponent>Test Content</MyComponent>)
    expect(screen.getByText("Test Content")).toBeInTheDocument()
  })

  it("applies custom className", () => {
    render(<MyComponent className='custom-class'>Test</MyComponent>)
    expect(screen.getByText("Test")).toHaveClass("custom-class")
  })
})
```

#### E2E Test Example

Create a file in `e2e/my-feature.spec.ts`:

```tsx
import { test, expect } from "@playwright/test"

test.describe("My Feature", () => {
  test("should perform action", async ({ page }) => {
    await page.goto("/my-page")
    await page.getByRole("button", { name: /click me/i }).click()
    await expect(page.getByText("Success")).toBeVisible()
  })
})
```

## Available Scripts

| Script                  | Description                  |
| ----------------------- | ---------------------------- |
| `npm run dev`           | Start development server     |
| `npm run build`         | Build for production         |
| `npm run start`         | Start production server      |
| `npm run lint`          | Run ESLint                   |
| `npm run typecheck`     | Run TypeScript type checking |
| `npm test`              | Run Jest unit tests          |
| `npm run test:watch`    | Run Jest in watch mode       |
| `npm run test:coverage` | Run Jest with coverage       |
| `npm run test:e2e`      | Run Playwright E2E tests     |
| `npm run test:e2e:ui`   | Run Playwright with UI       |

## Adding UI Components

This project uses shadcn/ui. To add new components:

```bash
npx shadcn add button
npx shadcn add card
# etc.
```

Components are installed to `src/components/ui/`.

## Supabase Integration

- Authentication is handled via `@supabase/ssr` for server-side rendering support
- Database types are in `src/types/database.ts`
- Supabase client utilities are in `src/lib/supabase/`

## License

[MIT](LICENSE)

NOTE: this will be updated upon changes on the features.
