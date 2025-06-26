import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import Checker from 'vite-plugin-checker';

export default ({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

  return defineConfig({
    plugins: [
      react(),
      Checker({
        typescript: true,
        overlay: true,
      }),
    ],
    define: {
      global: 'globalThis',
  },
    server: {
      host: true,        // Enables LAN access (0.0.0.0)
      port: 5173,        // Optional: fix the port
      strictPort: true,
      allowedHosts: [
        'f8bb-112-196-113-3.ngrok-free.app',
         'f94c-112-196-113-3.ngrok-free.app'
        // :point_left: Add your ngrok host here
      ],  // Optional: throws error if 5173 is unavailable
    },
  });
};
