import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../logo.svg";
import { ButtonContainer, NavWrapper } from "../util/StyledComponents";

export default class Navbar extends Component {
  render() {
    return (
      <NavWrapper className="navbar navbar-expand-sm px-sm-5">
        <Link to="./">
          <img
            src={logo}
            alt="Home"
            className="navbar-brand"
            data-toggle="tooltip"
            title="Home"
          />
        </Link>
        <ul className="navbar-nav align-center">
          <li className="nav-item ml-5">
            <Link to="/" className="nav-link text-white">
              Productos
            </Link>
          </li>
        </ul>
        <Link to="/cart" className="ml-auto">
          <ButtonContainer>
            <i className="fa fa-cart-plus mr-2 text-white" />
            <span className="text-white">Carrito</span>
          </ButtonContainer>
        </Link>
      </NavWrapper>
    );
  }
}
