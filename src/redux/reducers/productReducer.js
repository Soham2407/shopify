import { ActionTypes } from "../constants/actionTypes";

const initialState = {
  products: [],
  selectedProduct: {},
};

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SET_PRODUCTS:
      return { ...state, products: action.payload };

    case ActionTypes.SET_SELECTED_PRODUCT:
      return { ...state, selectedProduct: { ...action.payload } };

    case ActionTypes.REMOVE_SELECTED_PRODUCT:
      return { ...state, selectedProduct: {} };

    default:
      return state;
  }
};
