import React, { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";

// components
import Navbar from "./components/Navbar";
import Details from "./components/Details";
import ProductList from "./components/ProductList";
import Default from "./components/Default";
import Cart from "./components/Cart";

function App() {
  return (
    <Fragment>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={ProductList}></Route>
          <Route exact path="/details" component={Details}></Route>
          <Route exact path="/cart" component={Cart}></Route>
          <Route component={Default}></Route>
        </Switch>
      </Router>
    </Fragment>
  );
}

export default App;
