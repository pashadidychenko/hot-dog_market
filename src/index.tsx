import * as React from "react";
import { render } from "react-dom";
import App from "./components/App";
import { Provider } from "react-redux";
import store from "./Redux/store";
import Modal from "react-modal";

const rootEl = document.getElementById("root");

Modal.setAppElement(rootEl);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootEl,
);
