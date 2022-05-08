import { REMOVE_SELECTED_PRODUCT, SELECTED_PRODUCT, SET_PRODUCTS } from "./../contants/action-types";
export const setProducts = (products: {}) => {
  return {
    type: SET_PRODUCTS,
    payload: products,
  };
};

export const selectedProducts = (product: {}) => {
  return {
    type: SELECTED_PRODUCT,
    payload: product,
  };
};

export const removeSelectedProducts = (product: {}) => {
  return {
    type: REMOVE_SELECTED_PRODUCT,
    payload: product,
  };
};
