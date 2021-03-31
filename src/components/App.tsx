import * as React from "react";
import { hot } from "react-hot-loader";
import { Provider } from "react-redux";
import store from "../Redux/store";
import ProductPage from "./ProductPage";
import ProductList from "./ProductList";
import AddProductForm from "./AddProductForm";

class App extends React.Component<Record<string, unknown>, undefined> {
  public render() {
    return (
      <Provider store={store}>
        <ProductPage />
        <ProductList />
        <AddProductForm />
      </Provider>
    );
  }
}

declare let module: Record<string, unknown>;

export default hot(module)(App);
