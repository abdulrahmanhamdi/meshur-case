# Meşhur Marketplace - Engineering Showcase

**Developed by: [Eng: Abdulrahman Hamdi](https://github.com/abdulrahmanhamdi)**
*Computer & AI Engineer | Fullstack Developer*

[Live Demo: meshur-case.vercel.app](https://meshur-case.vercel.app/tr)

High-performance, localized and SEO-optimized e-commerce storefront built with **Next.js 16 (App Router)** and **Tailwind CSS v4**.

This project serves as a technical case study demonstrating advanced architectural patterns, state normalization, and a robust data transformation layer.

## Architectural Core

1. **Data Transformation Layer (Service Pattern)**  
   - Decoupling: UI components are completely agnostic of backend data structure  
   - Mapping logic: Complex nested objects are flattened, cleaned and formatted before reaching components  
   - Async simulation: Artificial network latency added to test loading states & UX

2. **State Management & O(1) Normalization**  
   - Performance: Favorites stored as flat Set/Map of IDs → O(1) lookup time regardless of catalog size  
   - Persistence: zustand persist middleware syncs favorites with localStorage across sessions

3. **Atomic Design + Storybook Documentation**  
   - **Atoms**: Button, Input, Icon…  
   - **Molecules**: ProductCard, CategoryItem, ThemeToggle…  
   - **Organisms**: Navbar, Hero, Footer, TrustBar…  
   Every atom & molecule documented in **Storybook** for isolated development & visual regression testing

4. **Hybrid Adaptive Dark Mode**  
   - **Premium OLED \"Pitch Black\"**: True black (`#000000`) theme for maximum contrast and OLED energy efficiency  
   - **Zero-Flash Transition**: Custom `next-themes` CSS injection strategy eliminates white flashes during hydration

5. **Type-Safe i18n Infrastructure**  
   - **Strict Typing**: Localization built with TypeScript `typeof` + dynamic imports, guaranteeing dictionary keys at compile-time  
   - **Missing Key Prevention**: Full IntelliSense for EN/TR keys, preventing runtime UI translation errors

## Key Engineering Decisions

- **Advanced SEO & Semantic Web**  
  - **JSON-LD (Schema.org)**: Dynamically injected structured data for products to improve Google Rich Snippet visibility  
  - **Dynamic Metadata**: Locale-aware metadata generation (title, description, alternates) to maximize organic reach in both TR and EN markets

- **Next.js 16 + Turbopack**  
  - Leveraged the new **Turbopack** engine for near-instant HMR, significantly accelerating atomic component development

- **CSS-First Tailwind v4 Strategy**  
  - Reduced bundle size by removing legacy JS configuration in favor of native CSS variables and the Oxide engine

## Tech Stack / Dependencies


### Core
- next 16.1.1  
- react & react-dom  
- typescript  

### Styling & Theming
- tailwindcss 4  
- @tailwindcss/postcss  
- postcss  
- next-themes  

### State & Interactions
- zustand  
- framer-motion  
- lucide-react  

## Project Structure

```
src/
├── app/[locale]/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── components/
│   ├── atoms/
│   ├── molecules/
│   └── organisms/
├── data/
│   └── products.json
├── i18n/
│   ├── dictionaries/
│   └── get-dictionary.ts
├── services/
│   └── productService.ts
├── store/
│   └── useFavoriteStore.ts
├── types/
│   ├── product.ts
│   └── dictionary.ts
└── util/
    └── cn.ts
```

## Quick Start

```bash
# Install dependencies
npm install

# Development server (Turbopack)
npm run dev

# Component documentation
npm run storybook

# Production build
npm run build
```

## Engineering Metrics & Performance

| Feature | Technical Impact | Engineering Benefit |
| --- | --- | --- |
| **State Normalization** | O(1) lookup complexity for favorites | Constant performance regardless of catalog size |
| **Parallel Fetching** | `Promise.all` for `getDictionary` + `getProducts` | Reduced Time to First Byte (TTFB) |
| **Data Mapping** | Decoupled transformation layer (service mapping) | UI remains pure and backend-agnostic |

## Important Note for Reviewers

This project follows a **scale-first** philosophy.  
Every major architectural decision was made with future transition to real **GraphQL/REST API** (or multiple data sources) in mind — requiring minimal refactoring and preserving maximum maintainability.
