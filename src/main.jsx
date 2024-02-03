import React from "react";
import ReactDOM from "react-dom/client";

import { Provider } from "react-redux";
import store from "./app/store.jsx";
import CounterView from "./features/counterFeatures/CounterView.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <CounterView />
  </Provider>
);
