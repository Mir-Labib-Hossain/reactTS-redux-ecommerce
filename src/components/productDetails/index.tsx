import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectedProducts,removeSelectedProducts } from "../../store/actions/productAction";
import ProductDetailsView from "./product-details-view";
export interface ProductProps {
  product: {
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
  };
}
const ProductDetails: React.FC = () => {
  console.log("ProductDetails");
  const { productId } = useParams();
  const dispatch = useDispatch();
  const fetchData = async () => {
    //help
    const response: any = await axios.get(`https://fakestoreapi.com/products/${productId}`).catch((error) => {
      console.log("Error while fetching data : " + error);
    });
    dispatch(selectedProducts(response.data));
  };

  useEffect(() => {
    productId && fetchData();
    return()=>{
      dispatch(removeSelectedProducts({}));
    }
  }, [productId]);

  const product = useSelector(
    (state: {
      selectedProductReducer: {
        product: {
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
        };
      };
    }) => state.selectedProductReducer.product
  );
  console.log(product);

  return product && <ProductDetailsView product={product} />;
};
export default ProductDetails;
