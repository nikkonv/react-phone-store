import React from "react";

export default function CartItem({ item, value }) {
  const { id, price, title, img, total, count, company } = item;
  const { increment, decrement, removeItem } = value; // methods

  return (
    <div className="row my-1 text-center">
      <div className="col-10 mx-auto col-lg-2">
        <img
          src={img}
          alt="product"
          style={{ width: "5rem", height: "5rem" }}
          className="img-fluid"
        />
      </div>

      <div className="col-10 mx-auto col-lg-2">
        <span className="d-lg-none">Product: </span>
        {company} {title}
      </div>

      <div className="col-10 mx-auto col-lg-2">
        <span className="d-lg-none">Price: </span>${price}
      </div>

      <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
        <div className="d-flex-justify-content-center">
          <div>
            <span className="btn btn-black mx-1" onClick={() => decrement(id)}>
              <strong>&ndash;</strong>
            </span>
            <span className="btn btn-black mx-1">{count}</span>
            <span className="btn btn-black mx-1" onClick={() => increment(id)}>
              <strong>+</strong>
            </span>
          </div>
        </div>
      </div>

      <div className="col-10 mx-auto col-lg-2">
        <div className="cart-icon" onClick={() => removeItem(id)}>
          <i
            className="fa fa-trash"
            style={{ color: "red", transform: "scale(1.2)" }}
          ></i>
        </div>
      </div>

      <div className="col-10 mx-auto col-lg-2">
        <strong>Item total: ${total}</strong>
      </div>
    </div>
  );
}
