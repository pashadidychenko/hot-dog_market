import * as React from "react";
import { render } from "react-dom";
import App from "./components/App";
import Modal from "react-modal";

const rootEl = document.getElementById("root");

Modal.setAppElement(rootEl);

render(<App />, rootEl);
