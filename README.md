# design-system-example

Visual reference for `@kristjanjansen/design-system`. Shows all components in all states.

## Setup

```
brew install vite-plus
vp install
vp dev
```

## For agents

1. Read `node_modules/@kristjanjansen/design-system/CLAUDE.md` then `DESIGN.md` for design decisions
2. Read `src/index.ts` for exports, `src/components/{Name}/{Name}.tsx` for props
3. Read `src/variables.css` for tokens, `src/themes/` for brand overrides
4. `value` + `onChange` = controlled. `defaultValue` = uncontrolled. Don't use `value` without `onChange`
5. `import { Button, Input, ... } from "@kristjanjansen/design-system"` + `import "@kristjanjansen/design-system/css/style.css"`

## Tailwind

Tailwind v4 for page layout. DS components use their own CSS.

```css
/* src/app.css */
@import "tailwindcss";
```

DS CSS imported via JS in `main.tsx` after Tailwind.
