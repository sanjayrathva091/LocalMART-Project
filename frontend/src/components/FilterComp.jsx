import React from "react";
import styled from "styled-components";

const FilterComp = ({ category, brand }) => {
  return (
    <Wrapper>
      <div>
        <h2>Category Related</h2>
        {category.map((item, index) => {
          return (
            <div key={index}>
              <input type="checkbox" value={item} />
              <span>{item}</span>
            </div>
          );
        })}
      </div>

      <div>
        <h2>Brand Related</h2>
        {brand.map((item, index) => {
          return (
            <div key={index}>
              <input type="checkbox" value={item} />
              <span>{item}</span>
            </div>
          );
        })}
      </div>
    </Wrapper>
  );
};

export default FilterComp;

const Wrapper = styled.div`
  border: 1px solid black;
  border-radius: 1rem;
  text-align: left;
  padding: 1rem 1rem;
  > div > div {
    padding-left: 1.2rem;
  }
  h2 {
    font-weight: 600;
  }
`;
