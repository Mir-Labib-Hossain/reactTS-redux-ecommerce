import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../../store/actions/productAction";
import ProductListingView from "./product-listing-view";

export interface ProductsProps {
  products: [
    {
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
  ];
}

const ProductListing: React.FC = () => {
  console.log("ProductListing");

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

  const products = useSelector(
    (state: {
      productReducer: {
        products: [
          {
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
        ];
      };
    }) => state.productReducer.products
  );

  return <ProductListingView products={products} />;
};

export default ProductListing;
