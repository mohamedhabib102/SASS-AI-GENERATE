# Task: Connect About, Service Details APIs and Implement Authentication Store

## Goal

Connect the existing About section and Service Details page with the backend APIs.

Also implement user authentication state management using Zustand and update the Header user avatar behavior.

The UI is already implemented.

Do not redesign or change existing UI.

---

# Part 1: About API Integration

## Feature

src/features/about/


## Requirements

Create API service:

src/features/about/api/
- here all endpoints in file service.js


Create React Query hook:

src/features/about/hooks/


Connect the existing About components with the API data.


## API Endpoint

Method:

GET

Endpoint:

/api/about


## Request

No request body.

Headers:

Use existing axios instance. name in instanceAxios


## Response Body Example

```json
{
  "status": true,
  "data": {
    "title": "About Us",
    "description": "....",
    "image": "image_url"
  }
}
```


## Rules

- Do not call axios inside components.
- Use React Query.
- Show current hooks and use it like 
- Add query key in:

src/lib/queryKeys.js

---

# Part 2: Service Details API Integration

## Feature

src/features/services/


## Goal

Connect the service details page with backend data.


## API Endpoint

Method:

GET


Endpoint:

/api/services/{id}


## Request

Path Parameter:

id

Example:

/api/services/5


No request body.


## Response Body Example

```json
{
  "status": true,
  "data": {
    "id": 5,
    "title": "Service Name",
    "description": "Service description",
    "image": "image_url",
    "features": [
      {
        "title": "Feature 1"
      }
    ]
  }
}
```


## Implementation

Create:

api/
    serviceDetails.api.js


hooks/
    useServiceDetails.js


Add query key:

src/lib/queryKeys.js


Use:

React Query Hook

inside:

Service Details Component


---

# Part 3: Authentication State Management

## Feature

src/features/auth/


## Goal

Implement authentication state using Zustand.


## Install

Install Zustand if it does not exist.


## Create

src/features/auth/store/authStore.js


The store should manage:

- user data
- user id
- authentication state


## User Data Example

```json
{
  "id": 10,
  "name": "Ahmed",
  "email": "user@example.com",
  "image": "profile_url"
}
```


## Auth Store Methods

Create:

login()

Purpose:

Store user data after successful authentication.


logout()

Purpose:

Remove user data and reset authentication state.


user()

Purpose:

Return current authenticated user data.


Example usage:

authStore.user

or

useAuthStore()


---

# Part 4: Header User Avatar

## Goal

Update Header avatar behavior.


## Requirements

If user is NOT authenticated:

Show default user avatar.


If user is authenticated:

Show user image from authStore.


Fallback:

If user exists but image is missing:

Show default avatar.


Do not duplicate authentication logic inside Header.


Header should only consume authStore.


---

# Data Flow

Authentication:

Login API
    ↓
authStore
    ↓
Header


Server Data:

API Service
    ↓
React Query Hook
    ↓
Component


---

# Query Keys

All new query keys must be added to:

src/lib/queryKeys.js


Example:

```js
export const queryKeys = {
  about: "about",
  serviceDetails: "serviceDetails",
  user: "user"
}
```

---

# Rules

Before implementation read:

.ai/context.md

.ai/project-structure.md

.ai/rules.md

.ai/coding-style.md




Follow project architecture.

Do not:

- use axios directly inside components
- use useEffect for API calls
- create duplicate components
- change existing UI
- create a new state management pattern
- dont change design ui compoents and pages


---

# Before Finishing

Check:

- APIs are separated.
- React Query hooks are created.
- Query keys are centralized.
- Auth state persists correctly if the project requires persistence.
- Header updates based on authentication state.
- Loading and error states are handled.