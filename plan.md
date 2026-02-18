# Portfolio Feature Plan (Next.js)

## Goal

Extend the current Next.js homepage into a **basic portfolio website** that clearly showcases:

1. **About Me** section
2. **Projects** section with project descriptions

The implementation should stay simple, static-first, and aligned with the current App Router structure.

---

## Current State Summary

The app currently uses:

- `app/page.tsx` as a single static starter page
- `app/page.module.css` for page-specific styles
- `app/layout.tsx` + `app/globals.css` for global layout/theme
- Jest snapshot test in `__tests__/page.test.tsx`

This is a good base for a single-page portfolio.

---

## Implementation Strategy

### Phase 1: Replace starter content with portfolio structure

**Files to edit:**

- `nextjs/app/page.tsx`
- `nextjs/app/page.module.css`
- `nextjs/app/data/projects.ts` (new)

**Plan:**

- Keep one-page layout in `app/page.tsx`
- Add semantic sections:
  - Header/Hero (name + role)
  - About Me
  - Projects list
  - Optional footer contact links

### Example `app/page.tsx` structure

```tsx
import styles from "./page.module.css";
import { projects } from "./data/projects";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <header className={styles.hero}>
          <h1>Jane Doe</h1>
          <p>Frontend Developer building accessible web experiences.</p>
        </header>

        <section aria-labelledby="about-heading" className={styles.section}>
          <h2 id="about-heading">About Me</h2>
          <p>
            I build modern web applications with React and Next.js. I enjoy
            clean UI design, performance optimization, and writing maintainable code.
          </p>
        </section>

        <section aria-labelledby="projects-heading" className={styles.section}>
          <h2 id="projects-heading">Projects</h2>
          <ul className={styles.projectList}>
            {projects.map((project) => (
              <li key={project.id} className={styles.projectCard}>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <p className={styles.techStack}>
                  <strong>Tech:</strong> {project.tech.join(", ")}
                </p>
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  View Project
                </a>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
}
```

---

### Phase 2: Add clean portfolio styling

**File to edit:**

- `nextjs/app/page.module.css`

**Plan:**

- Keep existing dark/light behavior
- Replace starter-grid look with portfolio section spacing
- Add card styles for project items
- Keep mobile responsiveness with one-column layout

### Example CSS snippet

```css
.page {
  min-height: 100svh;
  padding: 48px 24px;
  display: flex;
  justify-content: center;
}

.main {
  width: 100%;
  max-width: 900px;
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.hero h1 {
  font-size: clamp(2rem, 4vw, 3rem);
  margin-bottom: 8px;
}

.section {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.projectList {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  gap: 16px;
}

.projectCard {
  border: 1px solid rgba(127, 127, 127, 0.25);
  border-radius: 12px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.techStack {
  font-size: 0.95rem;
  opacity: 0.85;
}

@media (max-width: 600px) {
  .page {
    padding: 32px 16px;
  }
}
```

---

### Phase 3: Improve metadata and page identity

**File to edit:**

- `nextjs/app/layout.tsx`

**Plan:**

- Update metadata title/description from starter defaults to portfolio branding

### Example snippet

```tsx
export const metadata: Metadata = {
  title: "Jane Doe | Portfolio",
  description: "Portfolio website showcasing about me and selected projects.",
};
```

---

### Phase 4: Required content extraction for maintainability

Project data **must** be extracted into a dedicated data module to keep `app/page.tsx`
focused on rendering and improve maintainability.

**New file (required):**

- `nextjs/app/data/projects.ts`

### Example snippet

```ts
export type Project = {
  id: string;
  title: string;
  description: string;
  tech: string[];
  link: string;
};

export const projects: Project[] = [
  {
    id: "proj-1",
    title: "Task Tracker",
    description:
      "A simple web app to create, organize, and complete daily tasks with a clean UI.",
    tech: ["Next.js", "TypeScript", "CSS Modules"],
    link: "#",
  },
  {
    id: "proj-2",
    title: "Weather Dashboard",
    description:
      "Displays current weather and forecasts by city using a third-party weather API.",
    tech: ["React", "REST API", "Jest"],
    link: "#",
  },
  {
    id: "proj-3",
    title: "Budget Planner",
    description:
      "Tracks income and expenses with monthly summaries and category breakdowns.",
    tech: ["Next.js", "Charting", "Local Storage"],
    link: "#",
  },
];
```

Then import into `app/page.tsx` and render via `projects.map(...)`.

---

## Detailed TODO List

Use this as the execution checklist for implementation. Keep tasks in order and mark each item complete only after verification.

### Phase 0: Pre-implementation setup

- [ ] Confirm branch is up to date and working tree is clean.
- [ ] Confirm all target files exist and paths are correct.
- [ ] Run `npm install` in `nextjs/` to ensure local tooling is available.
- [ ] Run baseline checks (`npm run lint`, `npm test`, `npm run build`) and record current failures/warnings.

### Phase 1: Build data layer (required extraction)

- [ ] Create `nextjs/app/data/projects.ts`.
- [ ] Define and export `Project` type.
- [ ] Add an exported `projects` array with at least 3 entries.
- [ ] Ensure every project has `id`, `title`, `description`, `tech`, and `link`.
- [ ] Ensure each `id` is unique and stable (no duplicate values).
- [ ] Ensure data file has no UI logic or JSX.

### Phase 2: Implement portfolio page structure

- [ ] Update `nextjs/app/page.tsx` to import `projects` from `app/data/projects.ts`.
- [ ] Replace starter content with semantic portfolio structure.
- [ ] Add hero/header with portfolio identity (name + role/summary line).
- [ ] Add About Me section with `aria-labelledby` and matching heading id.
- [ ] Add Projects section with `aria-labelledby` and matching heading id.
- [ ] Render projects using `projects.map(...)`.
- [ ] Use stable React keys (`project.id`) for rendered project cards.
- [ ] Include per-project title and description in each card.
- [ ] Include a tech stack line in each card.
- [ ] Include project link with `target="_blank"` and `rel="noopener noreferrer"`.

### Phase 3: Apply portfolio-specific styling

- [ ] Refactor `nextjs/app/page.module.css` from starter layout to portfolio layout.
- [ ] Add container width constraints and section spacing.
- [ ] Add readable typography rules for headings/body copy.
- [ ] Add project card visuals (border, radius, spacing).
- [ ] Ensure link styles have hover/focus affordances.
- [ ] Preserve light/dark mode compatibility.
- [ ] Add/confirm mobile breakpoint behavior for small screens.
- [ ] Validate no overflow or clipped content at narrow widths.

### Phase 4: Update metadata and page identity

- [ ] Update `nextjs/app/layout.tsx` metadata title.
- [ ] Update metadata description for portfolio context.
- [ ] Remove starter references (e.g., "Create Next App" wording).

### Phase 5: Update tests

- [ ] Replace snapshot-only assertions in `nextjs/__tests__/page.test.tsx` with targeted checks.
- [ ] Add assertion for About Me heading.
- [ ] Add assertion for Projects heading.
- [ ] Add assertion that at least one project item renders.
- [ ] Add assertion for one known project title from `projects` data.
- [ ] Remove or regenerate obsolete snapshot file only if snapshot strategy is retained.

### Phase 6: Verification and quality gates

- [ ] Run `npm run lint` and resolve only relevant issues.
- [ ] Run `npm test` and ensure portfolio tests pass.
- [ ] Run `npm run build` and ensure production build succeeds.
- [ ] Manually verify UI in browser at desktop and mobile widths.
- [ ] Manually verify dark mode readability and contrast.
- [ ] Confirm all external links open safely in a new tab.

### Phase 7: Final review and handoff

- [ ] Confirm Definition of Done items are all satisfied.
- [ ] Review changed files for scope control (no unrelated edits).
- [ ] Prepare concise summary of what changed and why.
- [ ] Prepare follow-up ideas (optional) without implementing them.

---

## Testing Plan

### 1) Update existing page test

**File to edit:**

- `nextjs/__tests__/page.test.tsx`

Replace snapshot-only testing with targeted assertions (more stable and meaningful).

Also add one assertion tied to extracted data (for example, a known project title) so
tests fail if data wiring breaks.

### Example test snippet

```tsx
import { render, screen } from "@testing-library/react";
import Home from "../app/page";

describe("Portfolio Home Page", () => {
  it("renders About Me section", () => {
    render(<Home />);
    expect(screen.getByRole("heading", { name: /about me/i })).toBeInTheDocument();
  });

  it("renders Projects section and project cards", () => {
    render(<Home />);
    expect(screen.getByRole("heading", { name: /projects/i })).toBeInTheDocument();
    expect(screen.getAllByRole("listitem").length).toBeGreaterThan(0);
    expect(screen.getByRole("heading", { name: /task tracker/i })).toBeInTheDocument();
  });
});
```

### 2) Commands

```bash
npm install
npm run lint
npm test
npm run build
```

If snapshots remain in use, update them intentionally after verifying UI changes.

---

## Accessibility and UX Checklist

- Use semantic headings with correct order (`h1` → `h2` → `h3`)
- Keep sufficient color contrast in both light and dark mode
- Ensure links have clear labels (e.g., “View Project” + project name if needed)
- Preserve keyboard focus visibility
- Keep responsive behavior usable on small screens

---

## Definition of Done

The feature is complete when:

1. Homepage clearly shows an About Me section and Projects section.
2. Each project includes a title and description.
3. Layout is responsive and readable in light/dark modes.
4. Metadata reflects portfolio identity (no starter copy).
5. Project data lives in `app/data/projects.ts` and is imported by `app/page.tsx`.
6. Lint/build run successfully.
7. Tests pass (or are updated intentionally to match new UI).

---

## Suggested Commit Sequence

1. `feat(portfolio): replace starter homepage with about and projects sections`
2. `refactor(portfolio): move project data to app/data/projects.ts`
3. `style(portfolio): add responsive portfolio layout and project card styles`
4. `chore(meta): update page metadata for portfolio branding`
5. `test(portfolio): replace snapshot with section-level assertions`

This keeps review clear and rollback straightforward.
