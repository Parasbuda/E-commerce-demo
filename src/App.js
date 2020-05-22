import React, { Component } from 'react';
import "./App.css"
import {BrowserRouter } from "react-router-dom"
import  {Switch,Route} from "react-router-dom"
import "../src/css/bootstrap.min.css"
import "@fortawesome/fontawesome-free/css/all.css"

import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import ProductDetails from './components/ProductDetails';
import Cart from './components/Cart/Cart';
import Default from './components/Default';
import { ProductProvider } from "./components/Context"
import Modal from './components/Modal';


class App extends Component {
  render(){
  return (
    <React.Fragment >
      <ProductProvider>
      <BrowserRouter>
      <Navbar/>
      <Switch>
        <Route exact path="/" component={ProductList}></Route>
        <Route path="/detail" component={ProductDetails}></Route>
        <Route path="/cart" component={Cart}></Route>
        <Route  component={Default}></Route>
      </Switch>
      <Modal/>
      </BrowserRouter>
      </ProductProvider>
    </React.Fragment>
  );
}
}

export default App;
