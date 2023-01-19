import React, { Component } from "react";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import Counter from "./Counter";
import "./cartStyle.css";

class Cart extends Component {
  state = {
    totalPrice: 0,
  };

  updateTotalPrice = (price) => {
    this.setState({ totalPrice: price });
  };

  getTotalPrice = () => {
    this.setState({
      totalPrice: JSON.parse(localStorage.getItem("totalPrice")) ?? 0,
    });
  };

  componentDidMount() {
    this.getTotalPrice();
  }

  render() {
    const { totalPrice } = this.state;
    const { cartProduct, checkOut } = this.props;
    const products =
      cartProduct ?? JSON.parse(localStorage.getItem("products"));
    return (
      <>
        <div className="cart-container">
          <Link to="/">
            <FontAwesomeIcon icon={faArrowLeft} className="back-btn" />
          </Link>
          <h1>Pets in your cart:</h1>
          <section className="products-cart-section">
            <ul className="cart-products-list">
              {products.length ? (
                products.map((product) => (
                  <Counter
                    key={product.id}
                    product={product}
                    totalPrice={totalPrice}
                    updateTotalPrice={this.updateTotalPrice}
                    {...this.props}
                  />
                ))
              ) : (
                <div>
                  <h1 className="cart-not__found">
                    You have no pets in your cart
                  </h1>
                  <img
                    className="empty-cart-img"
                    src="../img/empty-cart.png"
                    alt="crying cat"
                    width="300px"
                  />
                </div>
              )}
            </ul>
            {products.length !== 0 && (
              <div className="total-cost-holder">
                <h3 className="total-cost">
                  Total Cost: <span>${totalPrice.toFixed(2)}</span>
                </h3>
                <button
                  title="Check Out"
                  className="checkout-btn"
                  onClick={checkOut}
                >
                  Check out
                </button>
              </div>
            )}
          </section>
        </div>
      </>
    );
  }
}
export default Cart;
