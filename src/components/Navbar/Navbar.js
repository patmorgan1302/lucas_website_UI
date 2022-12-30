import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import "./Navbar.css";
import { connect } from "react-redux";

const Navbar = ({ cart }) => {
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    let count = 0;
    cart.forEach((item) => {
      count += item.qty;
    });

    setCartCount(count);
  }, [cart, cartCount]);

  return (
    <div>
      <div className={styles.navbar}>
        <Link to="/">
          <h2 className={styles.navbar__logo}>
          <div class="jumbotron jumbotron-fluid" id="animate-area" style={{ minHeight: '250px' }}>
          <div class="logo"><b>y<span>u<span></span>n</span>gla<span>d</span>c<span>o.</span></b></div>
        </div></h2>
        </Link>
        <Link to="/cart">

          <div className={styles.navbar__cart}>
            <h3 className={styles.cart__title}>Cart</h3>
            <div className={styles.cart__counter}>{cartCount}</div>
          </div>
        </Link>
      </div>
    </div>   
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.shop.cart,
  };
};

export default connect(mapStateToProps)(Navbar);
