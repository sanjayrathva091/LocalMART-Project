import React from "react";
import styled from "styled-components";

const SearchBar = ({ productName }) => {
  return (
    <Wrapper>
      <PageTitle>
        <div>{productName}</div>
        <div>
          view by:
          <button>List</button>
          <button>Grid</button>
        </div>
      </PageTitle>
      <SearchBarBox>
        <span>Location</span>
        <input type="text" placeholder="Enter city" />
        <ul>
          <li>India</li>
          <li>Ahmedabad</li>
          <li>Pune</li>
          <li>Kolkata</li>
          <li>Bengalore</li>
        </ul>
      </SearchBarBox>
    </Wrapper>
  );
};

export default SearchBar;

const Wrapper = styled.div`
  border: 1px solid black;
  border-radius: 1rem;
  padding: 2em 2em;
  margin: 1rem 0;
`;

const SearchBarBox = styled.div`
  display: flex;
  gap: 2em;
  font-size: 1.2rem;
  input {
    border: 2px solid black;
    font-size: 1.2rem;
    box-sizing: border-box;
    border-radius: 0.3rem;
    padding-left: 0.5rem;
  }
  ul {
    display: flex;
    list-style-type: none;
    gap: 3em;
  }
`;

const PageTitle = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 1.2rem;
  > div:first-of-type {
    font-weight: 600;
  }
  button {
    padding: 0.3rem 0.6rem;
  }
`;
