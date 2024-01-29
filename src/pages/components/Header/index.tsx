import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import SearchBox from "../SearchBox";

const Header = () => {
  return (
    <Container>
      <Link to="/">Home</Link>
      <Link to="/search">Search</Link>
      <SearchBox />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 20px;
`;

export default Header;
