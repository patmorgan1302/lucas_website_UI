import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link
} from "react-router-dom";
import "./App.css";

import { connect } from "react-redux";
import Navbar from "./components/Navbar/Navbar";
import Products from "./components/Products/Products";
import Cart from "./components/Cart/Cart";
import SingleItem from "./components/SingleItem/SingleItem";
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Commissions from './components/Routes/comissions_page';
import FollowPage from './components/Routes/follow_page';

function App({ current }) {

  return (
    <Router>
      <div className="app">
        <Navbar/>

        <AppBar id="appbar" position="sticky" color="transparent">
          <span  style={{ marginBottom: '35px'}}>  
            <Link to="/"><Button id="appbar-button">shop</Button></Link>
            <Link to="commissions"><Button id="appbar-button">commissions</Button></Link>
            <Link to="follow"><Button id="appbar-button">follow</Button></Link> 
            
          </span>
       
        <Switch>     

          <Route exact path="/" component={Products} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/commissions" component={Commissions} />
          <Route exact path="/follow" component={FollowPage} />


          {!current ? (
            <Redirect to="/" />
          ) : (
            <Route exact path="/product/:id" component={SingleItem} />
          )}
        </Switch>
        </AppBar>
      </div>
      
      <div id="copyrights">
      <p style={{ marginBottom: "6px" }}>All work is copyrighted by ⓒyoungladco.</p>
      <p >Site Provided by ⓒSprigg Diddy Designs</p>

      </div>
    </Router>
    // <Outlet id="outlet"/>
  );
}

const mapStateToProps = (state) => {
  return {
    current: state.shop.currentItem,
  };
};

export default connect(mapStateToProps)(App);
