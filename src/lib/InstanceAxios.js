import axios from "axios";
import Cookies from "js-cookie";

export const instanceAxios = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
  timeout: 10000,
});

// Request interceptor to automatically attach authorization token
instanceAxios.interceptors.request.use(
  (config) => {
    const token = Cookies.get("token") || sessionStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

instanceAxios.interceptors.response.use(
  (response) => response,

  (error) => {
    if (!error.response) {
      return Promise.reject({
        ...error,
        messageKey: "errors.noInternet",
      });
    }

    const status = error.response.status;

    const statusMap = {
      403: "errors.forbidden",
      429: "errors.tooManyRequests",
      500: "errors.serverError",
      502: "errors.serverError",
      503: "errors.serverError",
      504: "errors.serverError",
    };

    return Promise.reject({
      ...error,
      messageKey: statusMap[status] || "errors.somethingWentWrong",
    });
  }
);