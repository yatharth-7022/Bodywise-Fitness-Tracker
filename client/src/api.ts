const API_CONFIG = {
  baseUrl: import.meta.env.VITE_API_URL || "http://localhost:5000",
  timeout: Number(import.meta.env.VITE_API_TIMEOUT) || 30000,
  endpoints: {
    auth: {
      login: "/api/auth/login",
      signup: "/api/auth/signup",
      user: "/api/auth/user",
    },
    weight: {
      log: "/api/weight",
      recent: "/api/weight/recent-weights",
      all: "/api/weight",
    },
    routines: {
      default: "/api/routines/routines/default",
      byId: "/api/routines/routines/",
    },
    exercises: {
      all: "/api/exercises/exercises",
    },
  },
} as const;

const buildUrl = (endpoint: string) => `${API_CONFIG.baseUrl}${endpoint}`;

export const LOGIN = buildUrl(API_CONFIG.endpoints.auth.login);
export const SIGNUP = buildUrl(API_CONFIG.endpoints.auth.signup);
export const USER_INFO = buildUrl(API_CONFIG.endpoints.auth.user);
export const WEIGHT_LOG = buildUrl(API_CONFIG.endpoints.weight.log);
export const RECENT_WEIGHTS = buildUrl(API_CONFIG.endpoints.weight.recent);
export const ALL_WEIGHTS = buildUrl(API_CONFIG.endpoints.weight.all);
export const DEFAULT_ROUTINE = buildUrl(API_CONFIG.endpoints.routines.default);
export const ROUTINE_BY_ID = buildUrl(API_CONFIG.endpoints.routines.byId);
export const ALL_EXERCISES = buildUrl(API_CONFIG.endpoints.exercises.all);

export { API_CONFIG };
