// Centralized runtime config. Set VITE_API_URL in your environment (.env for
// local dev, Vercel project settings for production) to point at your
// deployed backend, e.g. https://your-app.up.railway.app
const API_ORIGIN = import.meta.env.VITE_API_URL || 'http://localhost:5000';

export const API_BASE_URL = `${API_ORIGIN}/api`;
export { API_ORIGIN };
