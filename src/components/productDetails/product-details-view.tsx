import React from "react";
import { ProductDetailsProps } from ".";
import { ProductDetailsWrapper } from "./styled";
const ProductDetailsView: React.FC<ProductDetailsProps> = ({ product }) => {
  const { id, title, category } = product[0];
  return <ProductDetailsWrapper>{title} e</ProductDetailsWrapper>;
};
export default ProductDetailsView;
