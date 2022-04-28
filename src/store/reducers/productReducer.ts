import { ActionTypes } from "./../contants/action-types";
const initialState = {
  products: [],
};
interface Action {
  type: {};
  payload: {};
}
const productReducer = (state = initialState, { type, payload }: Action) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return { ...state, products: payload };

    default:
      return state;
  }
};
export default productReducer;
