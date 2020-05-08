import React, { Component } from "react";
import { ProductConsumer } from "../context";
import { ButtonContainer } from "../util/StyledComponents";
import { Link } from "react-router-dom";
import { ModalContainer } from "../util/StyledComponents";

export default class Modal extends Component {
  render() {
    return (
      <ProductConsumer>
        {(value) => {
          const { modalOpen, closeModal } = value;
          const { img, title, price } = value.modalProduct;
          if (!modalOpen) {
            return null;
          } else {
            return (
              <ModalContainer>
                <div className="container">
                  <div className="row">
                    <div
                      id="modal"
                      className="col-8 mx-auto col-md-6 col-lg-4 text-center p-5"
                    >
                      <h5>Item added to cart</h5>
                      <img src={img} alt="product" className="img-fluid" />
                      <h5>{title}</h5>
                      <h5 className="text-muted">Price: ${price}</h5>
                      <Link to="/">
                        <ButtonContainer
                          className="my-2"
                          onClick={() => closeModal()}
                        >
                          Continue shopping
                        </ButtonContainer>
                      </Link>
                      <Link to="/cart">
                        <ButtonContainer cart onClick={() => closeModal()}>
                          Go to cart
                        </ButtonContainer>
                      </Link>
                    </div>
                  </div>
                </div>
              </ModalContainer>
            );
          }
        }}
      </ProductConsumer>
    );
  }
}
