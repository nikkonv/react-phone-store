import React, { Component } from "react";
import { Link } from "react-router-dom";
import { ProductConsumer } from "../context";
import { ProductWrapper, ProductFooter } from "../util/StyledComponents";

export default class Product extends Component {
  render() {
    const { id, company, title, img, price, inCart } = this.props.product;
    return (
      <ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
        <div className="card">
          <div className="img-container p-5" onClick={console.log("click")}>
            <Link to="/details">
              <img src={img} alt="product" className="card-img-top" />
            </Link>
            <button
              className="cart-btn"
              disabled={inCart ? true : false}
              onClick={() => console.log("added")}
            >
              {inCart ? (
                <p className="mb-0" disabled>
                  En el carro
                </p>
              ) : (
                <i className="fa fa-cart-plus" />
              )}
            </button>
          </div>
          <ProductFooter className="card-footer ">
            <p className="text-center mb-0 text-white">
              {company} {title}
            </p>
            <br />
            <h5 className="text-white text-center">
              Compralo desde
              <span> $</span>
              <strong>{price}</strong>
            </h5>
          </ProductFooter>
        </div>
      </ProductWrapper>
    );
  }
}
