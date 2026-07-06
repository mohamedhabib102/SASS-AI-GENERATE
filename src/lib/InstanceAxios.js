import axios from "axios";

export const instanceAxios = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: false,
  timeout: 10000,
});

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