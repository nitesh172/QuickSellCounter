import { SET_LOADING_TRUE, GET_COUNT } from "./actionTypes.js";

export const reducer = (store, action) => {
  switch (action.type) {
    case GET_COUNT:
      return { ...store, count: action.payload, loadings: false };
    case SET_LOADING_TRUE:
      return { ...store, loadings: true };
    default:
      return store;
  }
};
