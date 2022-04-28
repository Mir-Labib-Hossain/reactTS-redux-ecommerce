import React from "react";
import { useSelector } from "react-redux";
import ProductDetailsView from "./product-details-view";

export interface ProductDetailsProps {
  product: [
    {
      id: number;
      title: string;
      category: string;
    }
  ];
}

const ProductDetails: React.FC = () => {
  console.log("ProductDetails");
  
  const product = useSelector(
    (state: {
      productReducer: {
        products: [
          {
            id: number;
            title: string;
            category: string;
          }
        ];
      };
    }) => state.productReducer.products
  );
  
  return <ProductDetailsView product={product} />;
};
export default ProductDetails;
