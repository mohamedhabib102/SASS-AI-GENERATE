# Project Context

## Project Overview

This is a Frontend application built with React using a Feature-Based Architecture.

The codebase is organized to keep business logic isolated inside features while keeping reusable code in shared folders.

Always follow the existing architecture.

---

# Tech Stack

- React 19
- Vite
- React Router v7
- React Query v5
- Axios
- Tailwind CSS v4
- shadcn/ui
- Framer Motion
- Zustand (if used)
- React Hook Form / Formik (depending on feature)
- Yup Validation
- i18next
- react-i18next
- Lucide React
- React Icons
- Swiper
- react-hot-toast

---

# Styling

The project uses:

- Tailwind CSS v4
- shadcn/ui
- tw-animate-css

UI customization should always be done using Tailwind utilities.

Global theme variables are located inside:

src/index.css

Do not create another design system.

Use the existing CSS variables.

---

# Icons

Preferred:

- lucide-react
- react-icons

Use react-icons only when required.

---

# API

The project uses:

- Axios
- React Query

Every request should have:

- API Service
- React Query Hook
- QueryKyes in lib forlder

Never call axios directly inside components.

---

# Routing

The project uses React Router v7.

Follow the existing routing structure.

---

# Localization

The project supports multiple languages.

Library:

- react-i18next

Translation files are inside:

src/locales

Always keep translations compatible.

---

# Animations

Global reusable animations are located inside:

src/animations

Reuse existing animations whenever possible.

---

# Components

The project uses reusable components.

Prefer existing components before creating new ones.

Use shadcn/ui components whenever appropriate.

---

# Goal

Write clean, reusable, maintainable code that follows the existing project architecture.

## Before Writing Code

Before implementing any task:

1. Inspect the existing project.
2. Reuse existing components whenever possible.
3. Follow the same coding patterns already used.
4. Do not duplicate logic.
5. Keep consistency with the existing architecture.