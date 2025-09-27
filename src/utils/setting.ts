import axios, {
  AxiosHeaders,
  type AxiosResponse,
  type InternalAxiosRequestConfig,
} from "axios";
import history from "@/history";
import commonSettings from "@/helpers/storage";
import { ACCESS_TOKEN } from "@/constants/auth.constants";

const httpClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 3000,
});

httpClient.interceptors.request.use((request: InternalAxiosRequestConfig) => {
  const token = commonSettings.getStorage<string>(ACCESS_TOKEN);
  if (!request.headers) {
    request.headers = new AxiosHeaders();
  }

  request.headers.set("Accept", "application/json");
  request.headers.set("TokenCybersoft", import.meta.env.VITE_TOKEN_CYBERSOFT);
  if (token) {
    request.headers.set("Authorization", `Bearer ${token}`);
  }

  return request;
});

httpClient.interceptors.response.use(
  (response: AxiosResponse) => response,
  (error: unknown) => {
    if (axios.isAxiosError(error) && error.response) {
      const status = error.response.status;

      if (status === 400 || status === 404) {
        console.error("Client error:", error.response.data);
        // history.push('/');
      }

      if (status === 401 || status === 403) {
        console.warn("Unauthorized access - redirecting to login");
        history.push("/login");
      }
    } else {
      console.error("Unexpected error:", error);
    }

    return Promise.reject(error);
  }
);

export { httpClient, commonSettings };
