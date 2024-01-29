import { useInfiniteQuery } from "@tanstack/react-query";
import { fetchVideos, VideosParams } from "../api/videos";

export const useInfiniteVideos = (params: VideosParams) => {
  // react-query를 사용하여 비동기 통신 데이터를 가져온다.

  const query = useInfiniteQuery({
    queryKey: ["videos", params],
    queryFn: ({ pageParam }) => {
      console.log("@@ nextPageToken", pageParam);
      return fetchVideos({
        ...params,
        pageToken: pageParam,
      });
    },
    getNextPageParam: (lastPage) => lastPage.nextPageToken,
  });
  return {
    ...query,
    list: query.data?.pages.flatMap((page) => page.items) ?? [],
  };
};
