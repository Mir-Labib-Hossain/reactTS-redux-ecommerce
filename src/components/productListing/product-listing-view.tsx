import React from "react";
import { ProductsProps } from ".";
import { Header } from "../../styles/common.styled";
import ProductComponent from "../productComponent";
import { List } from "./styled";
const ProductListingView: React.FC<ProductsProps> = ({ products }) => {
  console.log(products);
  const productList = products.map(({ id, image, title, category, description, price, rating }) => {
    return <ProductComponent id={id} image={image} title={title} category={category} description={description} price={price} rating={rating} />;
  });
  return (
    <>
      <Header fontSize="20px">Product List</Header>
      <List>{productList}</List>
    </>
  );
};
export default ProductListingView;
