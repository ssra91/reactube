import { AxiosError } from "axios";

export const apiErrorHandler = (error: AxiosError) => {
  console.log("@@ apiErrorHandler", error?.response?.config.url);
  if (error?.response?.status === 403) {
    // 인증에러처리
    console.log("403 error");
    // 로그인으로 리다이렉트
  }
  return Promise.reject(error);
};
//
// try {
//   // 로직
// } catch (error) {
//   console.log("@@ error", error);
// }
