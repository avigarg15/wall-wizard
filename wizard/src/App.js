import React from 'react';
import './index.css';
import Login from './components/Login';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home from "./components/Home";
import NavBar from './components/NavBar';
//import { Route } from 'react-router-dom';
// import About from "./components/About";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ExistingWall from './components/ExistingWall';
import NewWall from './components/NewWall';
import ContactUs from './components/ContactUs';
import Products from './components/Products';
import AddProducts from './components/AddProducts';
import EstimateForm from './components/EstimateForm';
import ProductList from './components/getProducts';
import AsainProducts from './components/asainProducts';
import DuluxProducts from './components/duluxProducts';
import BergerProducts from './components/bergerProducts';
import IndigoProducts from './components/indigoProducts';
import ShalimarProducts from './components/shalimarProducts';
// import Data from './components/data';
const App = () => {
  return (
    <div id='my-div' >
      <NavBar />
      <Routes>
        <Route exact path='/' Component={Home} />
        {/* <Route exact path='/About' Component={About} /> */}
        <Route exact path='/Login' Component={Login} />
        <Route exact path='/ExistingWall' Component={ExistingWall} />
        <Route exact path='/NewWall' Component={NewWall} />
        <Route exact path='/ContactForm' Component={ContactUs} />
        <Route exact path='/Products' Component={Products} />
        <Route exact path='/AddProducts' Component={AddProducts} />
        <Route exact path='/EstimateForm' Component={EstimateForm} />
        <Route exact path='/Data' Component={ProductList} />
        <Route exact path='/asainProducts' Component={AsainProducts} />
        <Route exact path='/duluxProducts' Component={DuluxProducts} />
        <Route exact path='/bergerProducts' Component={BergerProducts} />
        <Route exact path='/indigoProducts' Component={IndigoProducts} />
        <Route exact path='/shalimarProducts' Component={ShalimarProducts} />
      </Routes>
    </div>
  );
};

export default App;
