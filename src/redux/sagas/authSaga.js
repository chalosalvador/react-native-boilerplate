import { call, put } from "redux-saga/effects";
import { login, logout, verifyToken } from "../../services/authService";
import {
  LOGIN_ERROR,
  LOGIN_SUCCESS,
  LOGOUT_ERROR,
  LOGOUT_SUCCESS,
} from "../actions";
import AsyncStorage from "@react-native-async-storage/async-storage";

export function* loginSaga(action) {
  console.log("loginSaga", action);
  yield put({ type: LOGIN_SUCCESS, payload: { name: "Test" } });

  // TODO uncomment this to activate real login logic
  // try {
  //   const response = yield call(login, action.payload);
  //   // console.log("response", response);
  //   AsyncStorage.setItem("token", response.data.token);
  //   yield put({ type: LOGIN_SUCCESS, payload: response.data });
  // } catch (error) {
  //   console.log("error", error.request);
  //   yield put({ type: LOGIN_ERROR, error });
  // }
}

export function* verifyTokenSaga(action) {
  try {
    console.log("verifyTokenSaga", action.payload);
    const response = yield call(verifyToken, action.payload);
    console.log("resposne", response.data);
    yield put({ type: LOGIN_SUCCESS, payload: response.data });
  } catch (error) {
    console.log("verifyTokenSaga failed", error);
    yield put({ type: LOGIN_ERROR, error });
  }
}

export function* logoutSaga(action) {
  try {
    console.log("logoutSaga", action.payload);
    const response = yield call(logout);
    AsyncStorage.removeItem("token");
    yield put({ type: LOGOUT_SUCCESS });
  } catch (error) {
    console.log("verifyTokenSaga failed", error.response);
    yield put({ type: LOGOUT_ERROR, error });
  }
}
