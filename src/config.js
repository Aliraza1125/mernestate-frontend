const config = {
  apiUrl: import.meta.env.VITE_NODE_ENV === 'production'
    ? 'https://mernestate-backend-a1uo.onrender.com/api'
    : 'https://mernestate-backend-a1uo.onrender.com/api'
};

export default config;