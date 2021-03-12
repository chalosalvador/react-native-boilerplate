import { all, call, fork, put, takeEvery } from "redux-saga/effects";
import { networkSaga } from "react-native-offline";
import Data from "../../services/data";
import watchUserAuthentication from "./watchers";

function* doSideEffect({ type }) {
  try {
    console.log("SAGA EFFECT", type);
    const articles = yield call(Data.getData);
    yield put({
      type: "SUCCESS_FETCH_EXAMPLE",
      payload: articles,
    });
  } catch (error) {
    console.log("error", error.request);
    yield put({
      type: "FAILED_FETCH_EXAMPLE",
    });
  }
}

export default function* rootSaga() {
  console.log("ROOT SAGA");
  yield all([
    yield takeEvery(["START_FETCH_EXAMPLE"], doSideEffect),
    fork(watchUserAuthentication),
    fork(networkSaga, { pingInterval: 1000 }),
  ]);
}
