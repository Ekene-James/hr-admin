import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


import { compose, createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import rootReducer from "./redux/reducers/rootReducer";
import {composeWithDevTools} from "redux-devtools-extension";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";

const middleWare = [thunk];
const store = createStore(
  rootReducer,
   compose(composeWithDevTools(applyMiddleware(...middleWare))));
   const storePersistor = persistStore(store);

ReactDOM.render(
  <Provider store={store}> <PersistGate persistor={storePersistor}>
  <App />
</PersistGate></Provider>
    
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();