import styled from "@emotion/styled";
import React, { useEffect, useRef, useState } from "react";

interface Props {
  children: React.ReactNode;
  onNext: () => void;
}
const InfiniteScroll = ({ children, onNext }: Props) => {
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const options = {
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        setInView(entry.isIntersecting);
      });
    }, options);
    if (ref.current) {
      observer.observe(ref.current);
    }
  }, []);

  useEffect(() => {
    if (inView) onNext();
  }, [inView, onNext]);
  return (
    <Container>
      {children}
      <Detector ref={ref} />
    </Container>
  );
};

const Container = styled.div``;
const Detector = styled.div`
  width: 100%;
  height: 50px;
  background: red;
`;

export default InfiniteScroll;
