import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import './css/App.css'
import './css/Product.css'
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./feature/store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
  <Provider store={store}>
    <App />
  </Provider>
  </BrowserRouter>
);
