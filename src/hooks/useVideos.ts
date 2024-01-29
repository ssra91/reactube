import { useQuery } from "@tanstack/react-query";
import { fetchVideos, VideosParams } from "../api/videos";

export const useVideos = (params: VideosParams) => {
  // react-query를 사용하여 비동기 통신 데이터를 가져온다.
  return useQuery(["videos", params], () => fetchVideos(params));
};
