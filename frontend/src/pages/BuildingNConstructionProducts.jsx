import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import SearchBar from "../components/SearchBar";
import FilterComp from "../components/FilterComp";
import ProductCard from "../components/ProductCard";

const BuildingNConstructionProducts = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get(
        `https://dull-lime-drill-veil.cyclic.app/products?category=construction`
      )
      .then((res) => setProducts(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <ProductPageWrapper>
      <section>
        <SearchBar productName={"Building & Construction"} />
      </section>
      <ProductDisplay>
        <FilterComp
          category={["Gold Plywood", "PVC Plywood"]}
          brand={["Centuryply Plywood ", "Greenply Plywood"]}
        />
        <ProductList>
          {products.product.length > 0 &&
            products.product.map((product) => {
              return <ProductCard key={product._id} {...product} />;
            })}
        </ProductList>
      </ProductDisplay>
    </ProductPageWrapper>
  );
};

export default BuildingNConstructionProducts;

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
  padding: 2em 2em;
  border: 1px solid black;
  border-radius: 1rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
`;
