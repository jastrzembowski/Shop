import React from "react";
import Products from "./components/Products";
import data from "./data.json";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: data.products,
      size: "",
      sort: "",
    };
  }
  render() {
    return (
      <div className="grid-container">
        <header>
          <a href="/">React Shopping Cart</a>
        </header>
        <main>
          <div class="content">
              <div class="main">
          <Products products={this.state.products}></Products>
              </div>
              <div class="sidebar">
      Cart Items
              </div>
            </div>
            </main>
        <footer>All rights is reserved</footer>
      </div>
    );
  }
}
export default App;