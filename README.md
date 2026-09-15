# PromptCanvas

> Turn rough ideas into structured, production-ready AI prompts with deterministic domain analysis and real-time quality scoring.

PromptCanvas is a full-featured web application that transforms vague one-line project concepts into detailed, 8-section architectural prompt specifications tailored for AI coding assistants and LLMs.

---

## Features

- **8-Section Deterministic Structuring**: Generates Project Goal, Target Audience, Design Direction, Core Features, Content Requirements, User Experience, Technical Requirements, and Constraints.
- **3 Generation Modes**: Quick (concise summary), Detailed (comprehensive context), and Builder (actionable engineering specs).
- **Prompt Quality Scoring Engine**: Evaluates completeness (0-100%) across goals, UX, features, technical bounds, and design clarity.
- **Auto-Sync History & Saved Prompts**: Automatically records generated prompts in chronological history and allows saving with tags and categories.
- **Domain Pattern Heuristics**: Automatic categorization for SaaS, E-commerce, Mobile Apps, Dashboards, Developer Tools, and Websites.
- **Template Library**: Curated pre-built prompt templates for common web and mobile archetypes.
- **Search & Filter**: Search across prompts, history, and templates with category and text filters.
- **Export & Copy**: One-click copy in Markdown, plain text, or JSON format.

---

## Prerequisites

- **Node.js**: `v18.0.0` or later (Node 20+ recommended)
- **Package Manager**: `npm` (v9+) or `bun`

---

## Installation

Clone the repository and install dependencies using the provided `package-lock.json` lockfile:

```bash
# Clone the repository
git clone <repository-url>
cd promptcanvas

# Install dependencies using the npm lockfile for reproducible builds
npm install
```

> **Note on Lockfile**: The repository includes `package-lock.json` to ensure reproducible and deterministic dependency resolution across environments.

---

## Build Instructions

To compile TypeScript and bundle the production assets with Vite:

```bash
# Production build
npm run build
```

This compiles TypeScript source files, resolves Tailwind CSS tokens, and outputs optimized static production assets to the `dist/` directory.

---

## Running the Application

### Development Mode

Start the local development server:

```bash
npm run dev
```

The development server binds to `http://localhost:3000` with hot reload enabled.

### Production Preview

To locally preview the production build output:

```bash
npm run preview
```

---

## Testing & Code Quality

The project uses [Vitest](https://vitest.dev/) with `@vitest/coverage-v8` for unit testing and code coverage reporting.

### Run All Tests

```bash
npm test
```

### Run Tests with Coverage Report

```bash
npm run test:coverage
```

Test coverage includes:
- `tests/promptEngine.test.ts`: Domain detection, subject extraction, prompt section synthesis, and contextual suggestions.
- `tests/qualityEngine.test.ts`: Dimension scoring (goal, UX, tech, design, constraints), weight calculation, and metric thresholds.
- `tests/formatPrompt.test.ts`: Markdown formatting, plain-text synthesis, and title generator heuristics.
- `tests/search.test.ts`: Normalization, multi-field prompt filtering, template tag matching, and history lookup.
- `tests/storage.test.ts`: Local persistence, state hydration, item deletion, and history clearing.

### Linting & Type Checking

```bash
npm run lint
```

---

## Project Structure

```
├── public/                 # Static assets and icons
├── src/
│   ├── components/         # Reusable UI components (Header, Sidebar, Modals, Cards)
│   ├── lib/                # Pure business logic and algorithmic engines
│   │   ├── formatPrompt.ts # Markdown, Text, and Title formatting
│   │   ├── promptEngine.ts # Domain profiling & 8-section prompt synthesis
│   │   ├── qualityEngine.ts# 0-100 Completeness scoring algorithm
│   │   ├── search.ts       # Query normalization & filtering
│   │   └── storage.ts      # LocalStorage abstraction & cross-component events
│   ├── pages/              # Application views (Builder, History, Saved, Templates)
│   ├── types/              # TypeScript interfaces and domain schemas
│   ├── App.tsx             # Root state management & navigation
│   └── main.tsx            # React application entry point
├── tests/                  # Vitest unit test suites
├── vitest.config.ts        # Vitest & V8 coverage configuration
├── vite.config.ts          # Vite configuration with Tailwind CSS plugin
├── package.json            # Scripts and dependencies manifest
├── package-lock.json       # Exact dependency lockfile
└── metadata.json           # Platform configuration
```

---

## License

MIT License.
