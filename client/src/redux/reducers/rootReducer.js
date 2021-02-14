import { combineReducers } from "redux";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";
import loadingReducer from "./loadingReducer";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { reducer as formReducer } from 'redux-form';

import contentsReducer from "./contentsReducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth","form"]
};

const rootReducer = combineReducers({
  
  auth: authReducer,
  error: errorReducer,
  loading: loadingReducer,
  form : formReducer,
  employee : contentsReducer
});
export default persistReducer(persistConfig, rootReducer);
