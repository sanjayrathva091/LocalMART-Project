import React from "react";
import styled from "styled-components";

const ProductCard = ({
  _id,
  category,
  name,
  brand,
  condition,
  color,
  rating,
  price,
  discount_price,
  image,
}) => {
  return (
    <CardWrapper>
      <ImgWrapper>
        <img src={image} alt="product_img" />
      </ImgWrapper>
      <div>
        <Price>{`Rs. ${price}`}</Price>
        <h2>{`Color: ${color}`}</h2>
        <button>Add To Cart</button>
      </div>
    </CardWrapper>
  );
};

export default ProductCard;

const CardWrapper = styled.div`
  border: 1px solid black;
  padding: 0.5rem 0.5rem;
  > div button {
    background-color: pink;
    padding: 0.2rem 1rem;
    border-radius: 0.3rem;
  }
`;

const ImgWrapper = styled.div`
  width: 100%;
  img {
    border-radius: 0.4rem;
  }
`;

const Price = styled.h3`
  font-size: 1.2rem;
  font-weight: 500;
`;
