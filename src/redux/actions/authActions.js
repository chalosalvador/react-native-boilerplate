import { LOGIN, LOGOUT, VERIFY_TOKEN } from "./index";

export const loginAction = (data) => ({
  type: LOGIN,
  payload: data,
});

export const verifyTokenAction = (token) => ({
  type: VERIFY_TOKEN,
  payload: token,
});

export const logoutAction = () => ({
  type: LOGOUT,
});
