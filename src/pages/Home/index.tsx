import styled from "@emotion/styled";
import Dots from "../components/Dots";
import { useInfiniteVideos } from "../../hooks/useInfiniteVideos";
import MainVideos from "./components/MainVideos";
import InfiniteScroll from "../components/InfiniteScroll";

const Home = () => {
  const { list, data, isLoading, isError, fetchNextPage } = useInfiniteVideos({
    part: "snippet",
    chart: "mostPopular",
    maxResults: 10,
    regionCode: "KR",
  });

  if (isLoading) {
    return <Dots />;
  }

  return (
    <Container>
      <InfiniteScroll onNext={fetchNextPage}>
        <MainVideos data={list} />
      </InfiniteScroll>
      <button type="button" onClick={() => fetchNextPage()}>
        더보기
      </button>
    </Container>
  );
};

const Container = styled.div``;

export default Home;
