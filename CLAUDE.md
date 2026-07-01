# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm dev        # Start development server
pnpm build      # Production build to dist/
```

No test or lint scripts are configured.

## Architecture

**Stack:** React 18 + Vite 6 + Tailwind CSS v4 + shadcn/ui (Radix UI primitives) + React Router v7. Package manager is **pnpm**.

**Domain:** An academic blog documenting a PMBOK 6th Edition project management plan for HEVES (Hospital de Emergencias Villa El Salvador), an ITSM implementation project.

### App structure

`src/main.tsx` → `src/app/App.tsx` (layout shell with Navigation + Sidebar + routed content).

- **Navigation** (`components/Navigation.tsx`): top bar with sidebar toggle and scroll-to-section links for the home page.
- **Sidebar** (`components/Sidebar.tsx`): fixed left panel with collapsible menu items. The `menuItems` array is the single source of truth for navigation structure — adding a new process here adds it to the sidebar.
- **Routes** are defined inline in `App.tsx`; each route wraps its page component in the same `<section>` + `<div className="max-w-7xl">` shell.
- **Home page** (`/` and `*`): renders `InicioSection` and `EquipoSection` from `MainSections.tsx`.

### PMBOK process pattern

Each PMBOK process has exactly 3 pages (Entradas, Herramientas y Técnicas, Salidas). To add a new process, make changes in 3 files:

1. **Create 3 page files** in `src/app/pages/` — use `PlanParticipacionEntradasPage.tsx` as template.
2. **Add routes** in `App.tsx` (import + 3 `<Route>` entries).
3. **Add sidebar entry** in `Sidebar.tsx` (`menuItems` array + include the id in the initial `expandedItems` state).

### Shared section components

Reusable content blocks live in `src/app/components/sections/` and are barrel-exported from `sections/index.ts`. Each input/tool has two variants:
- **Generic** (e.g., `<EntradaFactoresAmbientales />`) — accepts `description?`, `items?`, `children?` props.
- **HEVES-specific** (e.g., `<EntradaFactoresAmbientalesHEVES />`) — pre-filled with real HEVES institutional data including tables; accepts only `idx: number`.

| Component | File |
|---|---|
| `EntradaFactoresAmbientales` / `HEVES` | `sections/inputs/FactoresAmbientales.tsx` |
| `EntradaActivosProcesos` / `HEVES` | `sections/inputs/ActivosProcesos.tsx` |
| `HerramientaJuicioExpertos` | `sections/tools/HerramientaJuicioExpertos.tsx` |
| `HerramientaRecopilacionDatos` | `sections/tools/HerramientaRecopilacionDatos.tsx` |
| `HerramientaRepresentacionDatos` | `sections/tools/HerramientaRepresentacionDatos.tsx` |
| `HerramientaReuniones` | `sections/tools/HerramientaReuniones.tsx` |
| `HerramientaMatrizPoderInteres` | `sections/tools/HerramientaMatrizPoderInteres.tsx` |
| `PageTitle` | `sections/PageTitle.tsx` |
| `LinkCard` | `sections/LinkCard.tsx` — navigates to another page (used when content is moved to a dedicated page) |
| `SectionCard` | `sections/SectionCard.tsx` — styled card via Emotion; used for generic content blocks |

### Styling approach

Two styling systems coexist:
- **Tailwind CSS v4** (utility classes) — primary approach for most components.
- **Emotion** (`@emotion/styled`) — used in `SectionCard` and a few other places.

**Theming:** CSS custom properties defined in `src/styles/theme.css` (`:root` for light, `.dark` for dark mode). Dark mode is toggled by adding/removing the `.dark` class on the root element via `next-themes`. Use these variables (`--card`, `--border`, `--foreground`, `--muted-foreground`, etc.) instead of hardcoded colors.

### Vite specifics

- **`figma:asset/<filename>` imports** resolve to `src/assets/<filename>` via the custom `figmaAssetResolver` plugin in `vite.config.ts`. This is a Figma Make artifact.
- **`@` alias** maps to `src/`.
- Raw asset imports supported for `.svg` and `.csv`.
