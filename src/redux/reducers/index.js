import { combineReducers } from "redux";
import articles from "./reducer";
import auth from "./authReducer";
import { reducer as network } from "react-native-offline";

const reducers = {
  auth,
  articles,
  network,
};

const rootReducer = combineReducers(reducers);

export default rootReducer;
