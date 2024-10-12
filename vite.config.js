export default defineConfig({
  server: {
    proxy: {
      "/api": {
        target: "https://mernestate-backend-3.onrender.com",
        changeOrigin: true,
        secure: false, // Add this line
        rewrite: (path) => path.replace(/^\/api/, '') // Add this line
      },
    },
  },
  plugins: [react()],
});