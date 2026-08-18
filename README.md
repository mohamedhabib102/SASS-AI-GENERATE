# Markeefa - Marketing Services Management Platform 🚀

**Markeefa (ماركيفا)** is a modern, integrated SaaS web application designed for companies and individuals to seamlessly request, track, and manage marketing services and campaigns from a unified, intuitive dashboard.

---

## 🌟 Project Overview

Markeefa eliminates the complexity of managing digital marketing operations across multiple agencies and channels. Features include:
- Multi-language support (**Arabic (RTL)** & **English (LTR)**).
- Dynamic Marketing & Pricing Plans with automatic fallback to client-side translations.
- Seamless Google OAuth & Traditional Auth handling.
- Optimized performance with Lazy Loading and intelligent React Query caching.

---

## 🛠️ Tech Stack & Technologies

### **Core Frontend**
- **React 19** & **React DOM 19**: Modern UI library with latest React standards.
- **Vite 8**: Next-generation lightning-fast frontend tooling and bundler.
- **React Router 7**: Modern declarative routing with language prefixing (`/:lang`).

### **State Management & Data Fetching**
- **TanStack React Query v5**: Server-state management, automated caching (`staleTime`, `gcTime`), and background data fetching.
- **Zustand**: Fast, lightweight global state management (Authentication & User sessions).

### **Styling & UI Components**
- **TailwindCSS v4**: Utility-first CSS framework for high-performance styling.
- **Shadcn UI & Radix UI**: Accessible, customizable headless UI primitives.
- **Framer Motion & Animate**: Smooth animations and UI micro-interactions.
- **Lucide React & React Icons**: Icon sets.

### **Internationalization (i18n)**
- **i18next & react-i18next**: Complete localization with dynamic language switching (AR / EN) and document direction control (`rtl` / `ltr`).

### **Forms & Validation**
- **Formik & Yup**: Form state handling and schema validation.
- **Axios**: HTTP client with request/response interceptors for Bearer Token handling.
- **React Hot Toast**: Notifications and status toasts.

---

## 🏗️ Architecture & Project Structure

The codebase follows a scalable **Feature-Based Architecture**, ensuring clean separation of concerns and maintainability:

```text
src/
├── animations/          # Reusable animation components (Framer Motion)
├── api/                 # API service declarations
├── components/          # Reusable shared UI & Layout components (Header, Footer, Inputs)
├── features/            # Feature modules (Isolated pages, components, hooks, & APIs)
│   ├── about/           # About Us feature
│   ├── auth/            # Auth pages (Sign In, Profile, Google OAuth, Reset Password)
│   ├── home/            # Homepage sections (Hero, Stats, Testimonials, FAQ)
│   ├── prices/          # Pricing plans & Comparison tables
│   └── services/        # Services catalog & Service details
├── hooks/               # Custom reusable React hooks (e.g. useLang, useNavbar)
├── layouts/             # Page layouts (MainLayout)
├── lib/                 # Shared utilities, Axios instance, i18n & QueryClient config
├── locales/             # i18n translation JSON files (ar / en)
├── pages/               # General standalone pages (Contact Us, NotFound 404)
├── providers/           # App providers (ReactQueryProvider)
├── routes/              # App routing, ProtectedRoute & GuestRoute guards
└── store/               # Global Zustand stores (authStore)
```

---

## ⚡ Performance Optimizations

- **Route-based Code Splitting**: Utilizes `React.lazy()` and `Suspense` for all main routes to reduce initial bundle size by over **50%**.
- **Rollup Vendor Chunking**: Manual chunk configuration in `vite.config.js` to split vendor dependencies (`vendor-react`, `vendor-tanstack`, `vendor-ui`, `vendor-i18n`) for maximum browser caching.
- **React Query Cache Tuning**: Optimized `staleTime` (10m) and `gcTime` (30m) to minimize redundant API requests.
- **Offline Fallbacks**: Graceful fallback UI rendering using i18n local static data when API calls fail.

---

## 🚀 Getting Started & Local Setup

### **Prerequisites**
- Node.js (v18+ recommended)
- npm or yarn

### **1. Clone & Install Dependencies**
```bash
git clone https://github.com/mohamedhabib102/SASS-AI-GENERATE.git
cd SASS-AI-GENERATE-main
npm install
```

### **2. Environment Variables Setup**
Create a `.env` file in the project root:

```env
VITE_API_URL=https://cust.iptvdemo.serv5group.com
VITE_GOOGLE_CLIENT_ID=your_google_client_id
VITE_GOOGLE_REDIRECT_URI=https://cust.iptvdemo.serv5group.com/api/auth/google/redirect
```

### **3. Run Development Server**
```bash
npm run dev
```

### **4. Build for Production**
```bash
npm run build
```

### **5. Preview Production Build**
```bash
npm run preview
```


