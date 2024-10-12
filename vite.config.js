import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/api": {
        target: "https://mernestate-backend-3.onrender.com",
        changeOrigin: true, 
      },
    },
  },
  plugins: [react()],
});
