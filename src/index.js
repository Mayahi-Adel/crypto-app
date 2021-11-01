import React from "react";
import ReactDom from "react-dom";
import { BrowserRouter as Route } from "react-router-dom";
import { Provider } from "react-redux";

import App from "./App";
import store from "./app/store";
import "antd/dist/antd.css";

ReactDom.render(
  <Route>
    <Provider store={store}>
      <App />
    </Provider>
  </Route>,
  document.getElementById("root")
);
