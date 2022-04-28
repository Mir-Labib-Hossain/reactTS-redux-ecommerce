import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../../store/actions/productAction";
import ProductListingView from "./product-listing-view";

const ProductListing: React.FC = () => {
  console.log("ProductListing");

  const products = useSelector(
    (state: {
      productReducer: {
        products: [
          {
           
          }
        ];
      };
    }) => state.productReducer.products
  );
  const dispatch = useDispatch();

  const fetchData = async () => {
    //help
    const response: any = await axios.get("https://fakestoreapi.com/products").catch((error) => {
      console.log("Error while fetching data : " + error);
    });
    dispatch(setProducts(response.data));
  };

  useEffect(() => {
    fetchData();
  }, []);
  console.log("products: " + products);

  return <ProductListingView />;
};
export default ProductListing;
