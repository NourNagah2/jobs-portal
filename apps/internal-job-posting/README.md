# internal-job-posting

## Folder structure

```text
apps/internal-job-posting
├── app/[seoLocale]          # Next.js routes/layout per SEO locale
├── assets/                  # SVG React components and asset exports
├── components/              # UI components
├── helpers/                 # Domain helpers (seo locale helpers)
├── lib/                     # App-level library wrappers (i18n hooks)
├── mocks/                   # Mocked app data/constants
├── styles/                  # Global SCSS and design tokens
└── utils/                   # Small reusable utilities
```

## Translation flow (current implementation)

1. Locale is part of the URL segment: `/[seoLocale]` (example: `/uae-en`).
2. `proxy.ts` ensures locale exists in the path and syncs `nloc` cookie.
3. Server components use `useTranslationServer` (from `@/lib`) to get `t()`.
4. Client components use `useTranslationClient` (from `@/lib`) to read and switch language.
5. Dictionaries live in `_core/i18n/en.json` and `_core/i18n/ar.json`.

## SVG component pattern

- Add icon components under `assets/icons`.
- Export them from `assets/index.tsx`.
- Use them like:

```tsx
import { Plus } from '@/assets';

<Plus width={16} height={16} />
```
