import { ActionTypes } from "../contants/action-types";
// import fakeApis from "../../fakeApis/index";

// export const fetchProducts = () => async (dispatch: any) => {
//   const response = await fakeApis.get("/api/cars");

//   dispatch({ type: ActionTypes.FETCH_PRODUCTS, payload: [response.data.cars] });
// };

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
