import styled from "@emotion/styled";

const Dots = () => {
  return (
    <Container>
      <DotContainer>
        <div className="dot" />
        <div className="dot" />
        <div className="dot" />
      </DotContainer>
    </Container>
  );
};

const Container = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const DotContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  .dot {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background-color: #bbb;
  }
`;

export default Dots;
