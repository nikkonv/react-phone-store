import React, { Component, Fragment } from "react";
import Product from "./Product.js";
import Title from "./Title";
import { ProductConsumer } from "../context";

export default class ProductList extends Component {
  render() {
    return (
      <Fragment>
        <div className="py-5">
          <div className="container">
            <Title name="Nuestros" title="Productos" />
            <div className="row">
              <ProductConsumer>
                {(data) => {
                  return data.products.map((prod) => {
                    return <Product product={prod} key={prod.id} />;
                  });
                }}
              </ProductConsumer>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}
