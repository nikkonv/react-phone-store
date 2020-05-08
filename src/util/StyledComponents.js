import styled from "styled-components";

// styled components definitions
export const ButtonContainer = styled.button`
  background: transparent;
  border: 0.2em solid var(--lightBlue);
  border-color: ${(props) =>
    props.cart ? "var(--mainYellow)" : "var(--lightBlue)"};
  color: ${(props) => (props.cart ? "var(--mainYellow)" : "var(--lightBlue)")};
  border-radius: 8px;
  transition: all 0.5s, ease-in-out;
  &:hover {
    background: ${(props) =>
      props.cart ? "var(--mainYellow)" : "var(--lightBlue)"};
    color: var(--mainBlue);
  }
  &:focus {
    outline: none;
  }
`;

export const NavWrapper = styled.nav`
  background: var(--mainBlue);
`;

export const ProductWrapper = styled.div`
  .card {
    border-color: transparent;
    transition: all 0.5s linear;
    border-width: 2px;
  }
  .card-footer {
    border-top: transparent;
    transition: all 0.5s linear;
  }
  &:hover {
    .card {
      border: 0.04rem solid var(--lightBlue);
      box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.2);
      border-width: 2px;
    }
  }
  .img-container {
    position: relative;
    overflow: hidden;
  }
  .card-img-top {
    transition: all 0.15s linear;
  }
  .img-container:hover .card-img-top {
    transform: scale(1.2);
  }
  .cart-btn {
    position: absolute;
    bottom: 0;
    right: 0;
    padding: 0.2rem 0.4rem;
    background: var(--lightBlue);
    border: none;
    color: var(--mainWhite);
    font-size: 1.4rem;
    border-radius: 0.5rem 0 0 0;
    transform: translate(100%, 100%);
  }
  .img-container:hover .cart-btn {
    transform: translate(0, 0);
    transition: all 0.15s linear;
  }
  .cart-btn:hover {
    color: var(--mainBlue);
    cursor: pointer;
  }
`;

export const ProductFooter = styled.div`
  background-color: var(--mainBlue);
`;
