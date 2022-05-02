import { ActionTypes } from "./../contants/action-types";
const initialState = {
  products: [{}],
};

interface Action {
  type: {};
  payload: {};
}

export const productReducer = (state = initialState, { type, payload }: Action) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return { ...state, products: payload };

    default:
      return state;
  }
};

export const selectedProductReducer = (state = {}, { type, payload }: Action) => {
  console.log("payload" + payload);

  switch (type) {
    case ActionTypes.SELECTED_PRODUCT:
      return { ...state, product: payload };

    case ActionTypes.REMOVE_SELECTED_PRODUCT:
      return {};

    default:
      return state;
  }
};
