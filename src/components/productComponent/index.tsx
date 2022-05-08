import React, { memo } from "react";
import ProductComponentView from "./product-component-view";

export interface ProductProps {
  id: number;
  image: string;
  title: string;
  category: string;
  description: string;
  price: number;
  rating: {
    count: number;
    rate: number;
  };
}
const ProductComponent: React.FC<ProductProps> = ({ id, image, title, category, description, price, rating }) => {
  console.log("ProductComponent");

  return <ProductComponentView id={id} image={image} title={title} category={category} description={description} price={price} rating={rating} />;
};
export default memo(ProductComponent);
