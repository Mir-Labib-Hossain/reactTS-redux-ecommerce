import React from "react";
import { Header } from "../../styles/common.styled";
import ProductComponent from "../productComponent";
const ProductListingView: React.FC = () => {
  return (
    <>
      <Header>Product List</Header>
      <ProductComponent/>
    </>
  );
};
export default ProductListingView;
