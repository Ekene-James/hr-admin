import { combineReducers } from "redux";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";
import loadingReducer from "./loadingReducer";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import contentsReducer from "./contentsReducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth"]
};

const rootReducer = combineReducers({
  
  auth: authReducer,
  error: errorReducer,
  loading: loadingReducer,
 
  course : contentsReducer
});
export default persistReducer(persistConfig, rootReducer);
