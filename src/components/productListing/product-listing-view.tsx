import React from "react";
import ProductComponent from "../productComponent";
import { List } from "./styled";
const ProductListingView: React.FC<IProducts> = ({ products }) => {
  console.log(products);

  const productList = products.map(({ id, image, title, category, description, price, rating }, index) => {
    return <ProductComponent key={index} id={id} image={image} title={title} category={category} description={description} price={price} rating={rating} />;
  });

  return <List>{productList}</List>;
};
export default ProductListingView;
