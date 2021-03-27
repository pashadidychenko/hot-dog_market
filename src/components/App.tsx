import * as React from "react";
import { hot } from "react-hot-loader";
import ProductPage from "./ProductPage";
import ProductList from "./ProductList";
import AddProductForm from "./AddProductForm";

class App extends React.Component<Record<string, unknown>, undefined> {
  public render() {
    return (
      <>
        <ProductPage />
        <ProductList />
        <AddProductForm />
      </>
    );
  }
}

declare let module: Record<string, unknown>;

export default hot(module)(App);
