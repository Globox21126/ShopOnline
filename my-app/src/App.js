import React from 'react';
import './App.scss';
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import ShoppingCart from "./Components/ShoppingCart";
import Products from "./Components/Products";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";


function App() {
  return (

    <Router>
      <Header />
        <Switch>
          <Route path="/products" component={Products}/>
          <Route path="/shoppingcart" component={ShoppingCart} />
        </Switch>
      <Footer />
    </Router>
  );
}

export default App;
