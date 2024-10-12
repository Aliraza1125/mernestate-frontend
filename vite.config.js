import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/api": {
        target: "https://mernestate-backend-3.onrender.com",
        secure: true, // Change to true if your backend is using HTTPS
        changeOrigin: true, // Add this to handle cross-origin issues
      },
    },
  },
  plugins: [react()],
});
