import React from "react";
import { Link } from "react-router-dom";
import { Header, Paragraph } from "../../styles/common.styled";
import { CardImg, ProductCard } from "./styled";
const ProductComponentView: React.FC<IProduct> = ({ id, image, title, category, description, price, rating }) => {
  return (
    <Link to={`/product/${id}`}>
      <ProductCard>
        <CardImg bg={image} />
        <Header fontSize="20px">{title}</Header>
        <Paragraph>${price}</Paragraph>
        <Paragraph>{category}</Paragraph>
      </ProductCard>
    </Link>
  );
};
export default ProductComponentView;
