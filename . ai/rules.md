# Project Rules

## General

- Always inspect the existing code before creating new files.
- Follow the current project architecture.
- Do not introduce a new architecture or folder structure.
- Reuse existing components, hooks, utilities, and styles whenever possible.
- Avoid duplicate code.
- Keep changes limited to the requested task.
- Do not modify unrelated files.

---

# Architecture Rules

- This project uses Feature-Based Architecture.

- Every feature should keep its own:

    - api/
    - hooks/
    - schema/
    - components/
    - pages/


- Global reusable code belongs outside features.

Examples:

Global components:
src/components/

Feature components:
src/features/{feature}/components/

---

# Components Rules

- Do not create a component if a similar reusable component already exists.
- Prefer composition over large components.
- Keep components focused on one responsibility.
- Shared components should be placed in:

src/components/shared

- shadcn/ui components are located in:

src/components/ui

- Do not modify shadcn/ui components unless required.

---

# API Rules

- Never call axios directly inside components.
- Never use useEffect for API calls or data fetching.
- All server state must be handled using React Query.

The required flow is:

API Service
↓
React Query Hook
↓
Component


- Feature API services belong to:

src/features/{feature}/api


- Global API utilities belong to:

src/api


- API files should only handle:
    - Axios requests
    - Request parameters
    - Response handling when needed

- Do not put UI logic inside API files.

---

# React Query Rules

- Always use centralized query keys.

Location:

src/lib/queryKeys.js


- Never create inline query keys inside components or hooks.

Example:

Use:

queryKey: [queryKeys.services]

Instead of:

queryKey: ["services"]


- Every new endpoint must add its query key inside:

src/lib/queryKeys.js


- Components should consume data through custom hooks only.

Example:

useServices()

Not:

axios.get() inside components.

---

# useEffect Rules

Avoid using useEffect unless it is actually required.

Do not use useEffect for:

- API calls
- Data fetching
- Server state management
- Replacing React Query functionality


Use useEffect only for real side effects such as:

- Timers
- setTimeout / setInterval
- Event listeners
- Browser APIs
- DOM interactions
- Third-party library initialization
- External subscriptions


Example:

Allowed:

useEffect(() => {
  const timer = setInterval(() => {
    setCount(prev => prev - 1)
  }, 1000)

  return () => clearInterval(timer)
}, [])


Not allowed:

useEffect(() => {
  axios.get("/users")
}, [])

---

# Styling Rules

- Use Tailwind CSS v4.
- Use shadcn/ui components when suitable.
- Follow existing design tokens and CSS variables.

Global styles:

src/index.css


- Do not create unnecessary CSS files.
- Do not use inline styles.
- Do not hardcode colors when a project variable exists.

---

# Animation Rules

- Reuse existing animations.

Location:

src/animations


- Use Framer Motion for component animations.
- Do not add animations unless required by the design.

---

# Forms Rules

- Follow the existing form pattern.
- Keep validation schemas separated.

Schema location:

features/{feature}/schema


---

# Routing Rules

- Do not create routes outside the routing system.
- Add routes only through:

src/routes


- Keep layouts separated from pages.

---

# Localization Rules

- All user-facing text must support translations.
- Do not hardcode text inside components.

Translation files:

src/locales


Use:

react-i18next

---

# Dependencies Rules

- Do not install new packages without approval.
- Check existing dependencies before adding anything.

---

# Before Finishing Any Task

Make sure:

- The code follows the project structure.
- No duplicated logic exists.
- Existing components are reused when possible.
- Loading states are handled.
- Error states are handled.
- Empty states are handled when needed.
- Existing UI is not changed unless requested.