import { GET_COUNT, SET_LOADING_TRUE } from "./actionTypes.js";

export const getCount = (data) => {
  return { type: GET_COUNT, payload: data };
};

export const setLoadingTrue = () => {
  return { type: SET_LOADING_TRUE };
};
