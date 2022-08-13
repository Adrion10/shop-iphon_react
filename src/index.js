import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import MyProvider from "./context/cart/MyProvider";

ReactDOM.render(
  <MyProvider>
    <App />
  </MyProvider>,
  document.querySelector("#root")
);
