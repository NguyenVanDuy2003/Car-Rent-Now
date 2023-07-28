import { ActionTypes } from "../contants/action-types";
import axios from "axios";
import fakeApis from "../../fakeApis/index";
import Data from "../../Data/data";

export const fetchProducts = () => async (dispatch: any) => {
  const response = await fakeApis.get("/api/cars");

  dispatch({ type: ActionTypes.FETCH_PRODUCTS, payload: [response.data.cars] });
};

export const setProducts = (products: any) => {
  return {
    type: ActionTypes.SET_PRODUCTS,
    payload: products,
  };
};
export const products = (products: any) => {
  return {
    type: ActionTypes.SET_PRODUCT,
    payload: products,
  };
};
