import React from "react";
import styled from "styled-components";
import FilterComp from "../components/FilterComp";
import SearchBar from "../components/SearchBar";

const Plywood = () => {
  const productList = [
    {
      id: 1,
      productName: "Apple Plywood",
      price: 199,
    },
  ];
  return (
    <ProductPageWrapper>
      <section>
        <SearchBar productName={"Plywoods"} />
      </section>
      <ProductDisplay>
        <FilterComp
          category={["Gold Plywood", "PVC Plywood"]}
          brand={["Centuryply Plywood ", "Greenply Plywood"]}
        />
        <ProductList></ProductList>
      </ProductDisplay>
    </ProductPageWrapper>
  );
};

export default Plywood;

const ProductPageWrapper = styled.div`
  padding: 0 3em;
  background-color: #f0f0f0;
`;

const ProductDisplay = styled.section`
  display: grid;
  grid-template-columns: 250px 1fr;
  gap: 2em;
  > div {
    height: auto;
  }
`;

const ProductList = styled.div`
  border: 1px solid black;
  border-radius: 1rem;
`;
