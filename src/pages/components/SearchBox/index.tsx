import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";

const SearchBox = () => {
  const navigate = useNavigate();
  const [value, setValue] = useState("");
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate(`/search/${value}`);
  };
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <input type="text" value={value} onChange={handleInputChange} />
      </form>
    </Container>
  );
};

const Container = styled.div``;

export default SearchBox;
