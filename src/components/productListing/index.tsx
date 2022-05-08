import axios from "axios";
import React, { memo, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../../store/actions/productAction";
import ProductListingView from "./product-listing-view";

const ProductListing: React.FC = () => {
  console.log("ProductListing");

  const dispatch = useDispatch();
  const fetchData = async () => {
    const response: any = await axios.get("https://fakestoreapi.com/products").catch((error) => {
      console.log("Error while fetching data : " + error);
    });
    dispatch(setProducts(response.data));
  };

  useEffect(() => {
    fetchData();
  }, []);

  const products = useSelector((state: IProductsReducer) => state.productReducer.products);

  return <ProductListingView products={products} />;
};

export default memo(ProductListing);
