import axios from "axios";
import React, { memo, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { removeSelectedProducts, selectedProducts } from "../../store/actions/productAction";
import ProductDetailsView from "./product-details-view";
 
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
    return () => {
      dispatch(removeSelectedProducts({}));
    };
  }, [productId]);

  const product = useSelector((state: ISelectedProductReducer) => state.selectedProductReducer.product);
 
  return product && <ProductDetailsView product={product} />;
};
export default memo(ProductDetails);
