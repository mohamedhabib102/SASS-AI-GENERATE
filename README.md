# Project Structure
## Architecture

This project follows a **Feature-Based Architecture**, where each feature is isolated with its own:

- API layer
- React Query hooks
- Components
- Pages
- Validation schemas
- Constants

This structure improves scalability, maintainability, and code organization for medium and large React applications.

```text
src/
│
├── app/                                        
│   ├── App.jsx                                  
│   ├── router.jsx                              
│   ├── providers.jsx                           
│   └── queryClient.js                          
│
├── api/                                        
│   ├── axios.js                                 
│   └── interceptors.js                         
│
├── auth/                                       
│   ├── api/
│   │   └── auth.api.js
│   ├── hooks/
│   │   ├── useLogin.js
│   │   ├── useLogout.js
│   │   ├── useRefresh.js
│   │   └── useProfile.js
│   ├── schemas/
│   │   ├── login.schema.js
│   │   ├── register.schema.js
│   │   ├── forgotPassword.schema.js
│   │   ├── resetPassword.schema.js
│   │   └── verifyOtp.schema.js
│   ├── context/
│   │   └── AuthProvider.jsx
│   ├── store/
│   │   └── auth.store.js
│   ├── guards/
│   │   ├── ProtectedRoute.jsx
│   │   ├── GuestRoute.jsx
│   │   ├── AdminRoute.jsx
│   │   └── PermissionRoute.jsx
│   ├── permissions.js
│   └── index.js
│
├── features/
│   ├── home/
│   ├── products/
│   ├── categories/
│   ├── blogs/
│   ├── services/
│   ├── orders/
│   ├── profile/
│   ├── wishlist/
│   ├── search/
│   └── checkout/
│
├── pages/
├── components/
├── layouts/
├── hooks/
├── lib/
├── store/
├── constants/
├── assets/
├── styles/
├── main.jsx
└── vite.config.js
```

## Folder Overview

| Folder | Purpose |
|---------|----------|
| `app/` | Application configuration (Router, Providers, React Query). |
| `api/` | Shared Axios instance and interceptors. |
| `auth/` | Authentication & Authorization logic. |
| `features/` | Feature-based modules (Products, Orders, Profile, etc.). |
| `components/` | Reusable UI and shared components. |
| `layouts/` | Application layouts. |
| `pages/` | Global pages (404, Unauthorized, 500...). |
| `hooks/` | Reusable custom hooks. |
| `lib/` | Utility/helper functions. |
| `store/` | Global Zustand stores. |
| `constants/` | Shared constants and configs. |
| `assets/` | Images, fonts, icons. |
| `styles/` | Global styles. |

