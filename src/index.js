import React from "react";
import { Provider } from "react-redux";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./containers/App";
import { searchRobots, requestRobots } from "./reducers";
import { createLogger } from "redux-logger";
import thunkMiddleware from "redux-thunk";
import "tachyons";
import { configureStore, combineReducers } from "@reduxjs/toolkit";

const logger = createLogger();

const rootReducer = combineReducers({ searchRobots, requestRobots });
const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([thunkMiddleware, logger]),
});

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
