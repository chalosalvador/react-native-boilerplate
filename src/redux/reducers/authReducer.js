import {
  LOGIN_ERROR,
  LOGIN_SUCCESS,
  LOGOUT_ERROR,
  LOGOUT_SUCCESS,
} from "../actions";

const initialAuth = {
  user: null,
  token: null,
  isAuthenticated: null,
};

const auth = (state = initialAuth, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload.user || action.payload, // todo The API should return always the same data structure
        token: action.token,
        isAuthenticated: true,
      };
    case LOGIN_ERROR:
    case LOGOUT_SUCCESS:
    case LOGOUT_ERROR:
      return {
        ...state,
        user: null,
        token: null,
        isAuthenticated: false,
      };
    default:
      return state;
  }
};

export default auth;
