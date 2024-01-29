import styled from "@emotion/styled";
import { VideosItem } from "../../../models/videos";

interface Props {
  data?: VideosItem[];
}
const MainVideos = ({ data = [] }: Props) => {
  console.log("@@ data", data);
  return (
    <Container>
      {data?.map((item) => (
        <Item key={item.id}>
          <img src={item.snippet.thumbnails.high.url} alt="" />
        </Item>
      ))}
    </Container>
  );
};

const Container = styled.div``;

const Item = styled.div`
  min-height: 300px;
`;

export default MainVideos;
