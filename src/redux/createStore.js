import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import { createNetworkMiddleware } from "react-native-offline";
import { persistStore, persistReducer } from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";

import rootSaga from "./sagas";
import rootReducer from "./reducers";

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default function createReduxStore({ queueReleaseThrottle = 1000 } = {}) {
  const networkMiddleware = createNetworkMiddleware({
    regexActionType: /^START/,
    // actionTypes: ["ADD_ONE", "SUB_ONE"],
    queueReleaseThrottle,
  });
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [networkMiddleware, sagaMiddleware];
  const store = createStore(persistedReducer, applyMiddleware(...middlewares));
  sagaMiddleware.run(rootSaga);
  let persistor = persistStore(store);
  return { store, persistor };
}
