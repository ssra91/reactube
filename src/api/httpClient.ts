import axios from "axios";
import { apiErrorHandler } from "../errors/apiErrorHandler";

export const httpClient = axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  timeout: 6000,
  params: {},
});

// 통신 전 - key값 설정
httpClient.interceptors.request.use(
  (config) => {
    console.log("@@ config", config);
    config.params = {
      ...config.params,
      key: process.env.REACT_APP_YOUTUBE_API_KEY,
    };

    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);
// 통신 후 - 에러처리
httpClient.interceptors.response.use(
  (response) => {
    console.log("@@ response", response);
    return response;
  },
  (error) => apiErrorHandler(error),
);
