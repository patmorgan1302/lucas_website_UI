import React from "react";
import styles from "./Products.module.css";

// Redux
import { connect } from "react-redux";

import Product from "./Product/Product";

const Products = ({ products }) => {
  return (
    <div className={styles.products}>
      <h1 style={{ fontSize: '45px', color: '#ffff33', textShadow: '4px 4px 5px green', marginBottom: '13px'}}>Welcome To The Shop!</h1>
      <h2 style={{  color: '#ffff33', textShadow: '4px 4px 5px green', marginBottom: '46px' }}>Stay awhile and check it out ya mooks</h2>

      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.shop.products,
  };
};

export default connect(mapStateToProps)(Products);
