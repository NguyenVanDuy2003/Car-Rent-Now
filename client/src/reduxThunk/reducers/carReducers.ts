import { ActionTypes } from "../contants/action-types";

const intialState = {
  products: [],
};

export const productsReducer = (state = intialState, { type, payload }:any) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return { ...state, products: payload };
    case ActionTypes.FETCH_PRODUCTS:
      return { ...state, products: payload };
    default:
      return state;
  }
};
export const selectedProductsReducer = (state = {}, { type, payload }:any) => {
  switch (type) {
    case ActionTypes.SET_PRODUCT:
      return { ...state, ...payload };
    default:
      return state;
  }
};
