import { takeLatest } from "redux-saga/effects";
import { loginSaga, logoutSaga, verifyTokenSaga } from "./authSaga";
import { LOGIN, LOGOUT, VERIFY_TOKEN } from "../actions";

export default function* watchUserAuthentication() {
  yield takeLatest(LOGIN, loginSaga);
  yield takeLatest(VERIFY_TOKEN, verifyTokenSaga);
  yield takeLatest(LOGOUT, logoutSaga);
}
