import React from 'react';
import './App.scss';
import Header from "./Components/Header";
import AboutUs from "./Components/AboutUs";
import Footer from "./Components/Footer";
import ShoppingCart from "./Components/ShoppingCart";
import Products from "./Components/Products";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import OrderItems from './Components/OrderItems';


function App() {
  return (

    <Router>
      <Header />
        <Switch>
          <Route path="/products" component={Products}/>
          <Route path="/shoppingcart" component={ShoppingCart}/>
          <OrderItems path="/orderitems" component={OrderItems}/>
          <AboutUs path="/aboutus" component={AboutUs}/>
        </Switch>
      <Footer />
    </Router>
  );
}

export default App;
