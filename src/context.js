import React, { Component, createContext } from "react";
import { storeProducts, detailProduct } from "./data";

const ProductContext = createContext();

/*
 * provider will be user in index.js for high level access to all app
 */

// provider
// consumer

class ProductProvider extends Component {
  /*
  componentDidMount will help us to access the value of the data,
  while assignment to a variable like this

  state = {
    products: storeProducts,
    detailProduct: detailProduct,
  };

  is only passing a reference of the data, not the real value

  */

  state = {
    products: [],
    detailProduct: detailProduct,
  };
  componentDidMount() {
    this.setProducts();
  }

  // this method solve the referencing problem
  setProducts = () => {
    let tempProducts = [];
    storeProducts.forEach((item) => {
      const singleItem = { ...item };
      tempProducts = [...tempProducts, singleItem];
    });
    this.setState(() => {
      return { products: tempProducts };
    });
  };

  handleDetail = () => {
    console.log("from detail");
  };

  addToCart = (id) => {
    console.log(id);
  };
  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          handleDetail: this.handleDetail,
          addToCart: this.addToCart,
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
