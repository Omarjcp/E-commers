import { GET_PRODUCTS, LOGIN } from "./actions";

const initialState = {
  products: [],
  userData: {},
  isAdmin: false,
  msgLogin: "",
  token: "",
};

export default function rootReducer(state = initialState, action) {
  switch (key) {
    case LOGIN:
      return {
        userData: action.payload.user,
        token: action.payload.token,
        isAdmin: action.payload.isAdmin,
        msgLogin: action.payload.msg,
      };
    case GET_PRODUCTS:
      return {
        ...state,
        products: action.payload.data,
      };

    default:
      return state;
  }
}
