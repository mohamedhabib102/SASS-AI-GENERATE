# Data Fetching Rules

## API Pattern

Never call API requests directly inside components.

The flow must always be:

API Service
    ↓
React Query Hook
    ↓
Component


Example:

features/services/

api/
    service.js

hooks/
    useServices.js

pages/
services.jsx
components/
    ServicesSection.jsx


---

## API Services

API functions should only handle:

- Axios requests
- Request parameters
- Response handling if needed


Example:

getServices()


Do not put UI logic inside API files.


---

## React Query Hooks

All server state must be managed using React Query.

Hooks should:

- Call API services.
- Define queryKey.
- Handle enabled conditions when needed.
- Return React Query result.


Example:

useServices()


Components should consume hooks only.


---

# Query Keys

All React Query keys are centralized.

Location:

src/lib/queryKeys.js


Never write query keys directly inside components.


Example:

queryKey: [
    queryKeys.services,
    lang
]


Add every new endpoint key inside queryKeys.js.


---

# useEffect

Avoid using useEffect unless it is actually required.

Do not use useEffect for:

- API calls
- Data fetching
- Server state synchronization

Use React Query instead.


Use useEffect only for:

- Browser APIs
- Event listeners
- External libraries
- Side effects that cannot be handled by React Query.


---

# Component Data Usage

Components should:

- Receive data from hooks.
- Handle UI rendering only.
- Not contain API logic.


Example:

const { data, isLoading } = useServices()