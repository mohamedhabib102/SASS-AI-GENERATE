import { defineConfig, loadEnv } from 'vite'
import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'
import tailwindcss from '@tailwindcss/vite'
import path from "path";
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  const apiUrl = env.VITE_API_URL || 'http://localhost:8000';

  return {
    plugins: [
      react(),
      tailwindcss(),
      babel({ presets: [reactCompilerPreset()] })
    ],

    build: {
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (id.includes('node_modules/react/') || id.includes('node_modules/react-dom/') || id.includes('node_modules/react-router-dom/')) {
              return 'vendor-react';
            }
            if (id.includes('node_modules/@tanstack/')) {
              return 'vendor-tanstack';
            }
            if (id.includes('node_modules/i18next') || id.includes('node_modules/react-i18next')) {
              return 'vendor-i18n';
            }
            if (id.includes('node_modules/lucide-react') || id.includes('node_modules/framer-motion')) {
              return 'vendor-ui';
            }
          },
        },
      },
    },

    server: {
      port: 5173,
      proxy: {
        '/api': {
          target: apiUrl,
          changeOrigin: true,
        },
        '/admin': {
          target: apiUrl,
          changeOrigin: true,
        },
        '/livewire': {
          target: apiUrl,
          changeOrigin: true,
          ws: true,
        },
        '/uploads': {
          target: apiUrl,
          changeOrigin: true,
        },
        '/storage': {
          target: apiUrl,
          changeOrigin: true,
        },
        '/filament': {
          target: apiUrl,
          changeOrigin: true,
        },
        '/css/filament': {
          target: apiUrl,
          changeOrigin: true,
        },
        '/js/filament': {
          target: apiUrl,
          changeOrigin: true,
        },
        '/fonts/filament': {
          target: apiUrl,
          changeOrigin: true,
        },
      }
    },

    resolve:{
      alias:{
        "@": path.resolve(__dirname, "./src")
      }
    }
  }
})
