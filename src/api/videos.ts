import { VideosResponse } from "../models/videos";
import { httpClient } from "./httpClient";

export interface VideosParams {
  part: string;
  chart?: "mostPopular";
  id?: string;
  myRating?: string;
  maxResults?: number;
  regionCode?: string;
  pageToken?: string;
}

export const fetchVideos = async (params: VideosParams) => {
  const { data } = await httpClient<VideosResponse>({
    url: "/videos",
    params,
  });
  return data;
};
