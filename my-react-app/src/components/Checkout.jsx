import React from "react";
import navLogo from "../assets/logo.png";
import carticon from "../assets/cart-icon.png";
import checkbxicon from "../assets/checkbx.png";
import itempic1 from "../assets/pic11.png";
import itempic2 from "../assets/pic9.png";
import itempic3 from "../assets/pic10.png";
import plusicon from "../assets/plus icon.png";
import minusicon from "../assets/minus icon.png";
import arwlfticon from "../assets/arrow left.png";
import cardtype from "../assets/card type.png";
// import Store from "./Store.jsx";

import { Link } from "react-router-dom";

// Function for the Navbar component
function Navbar() {
  return (
    <header className="navbar">
      <img src={navLogo} className="navlogo" alt="logo image" />
      <div>
        <Link to="/Cart">
          <img src={carticon} className="navcart" alt="cart icon" />
        </Link>
        <p className="cartCAmt">3</p>{" "}
        {/* Replace with actual cart item count */}
      </div>
    </header>
  );
}

function CartItem({ itempic, title }) {
  return (
    <div>
      <div className="cont1_itm1 ffg">
        <div className="cont1_typo">
          <div className="cont_typodiv1">
            <div className="item_imgdiv">
              <img src={itempic} className="itm_img" alt="itm image" />
            </div>
            <div className="typo_div">
              <p>Vintage tee</p>
              <h4>{title}</h4>
              <p>Remove</p>
            </div>
          </div>
        </div>
        <div className="itm_pricediv ffg4">
          <p>$58.90</p>
          <p>$58.90</p>
        </div>
      </div>
      <hr className="hr" />
    </div>
  );
}

function CheckOut() {
  return (
    <>
      <Navbar />
      <section className="cart_section">
        <h2 className="check_h2">Shopping Cart</h2>
        <div className="Shpcart_cont ffg2">
          <div className="Shpcart_cont_1 ffg3">
            <div className="Shpcart_cont_1_title">
              <h4 className="cart_title check_h4">Select Items To Checkout</h4>
            </div>
            <hr className="full_hr" />
            <div className="cont1_itmdiv">
              <CartItem itempic={itempic1} title="Grey slim T-shirt" />
              <CartItem itempic={itempic2} title="Brown slim T-shirt" />
              <CartItem itempic={itempic3} title="Basic slim T-shirt" />
            </div>
          </div>

          {/* second container */}

          <section className="checkoutdiv">
            <div className="payment_div">
              <h4>Payment Info</h4>
              <hr className="full_hr" />
              <div className="type_div">
                <h5>Card Type</h5>
                <img src={cardtype} alt="" />
              </div>
              <form>
                <div className="name_div">
                  <h5>Cardholder Name</h5>
                  <input type="number" />
                </div>
                <div className="Number_div">
                  <h5>Card Number</h5>
                  <input type="number" />
                </div>
                <div className="exp_cvv">
                  <div className="exp">
                    <h5>Expiration Date</h5>
                    <input type="date" />
                  </div>
                  <div className="cvv">
                    <h5>CVV</h5>
                    <input type="number" />
                  </div>
                </div>
                <hr className="btn_hr" />

                <button type="submit" className="checkout_btn">
                  Pay <span>$176.7</span>
                </button>
              </form>
            </div>
          </section>
        </div>
      </section>

      <div className="shop_contdiv">
        <Link to="/" className="shop_contdivlink">
          <div>
            <img src={arwlfticon} alt="arrow left icon" />
            <p>Continue Shopping</p>
          </div>
        </Link>
      </div>
    </>
  );
}

export default CheckOut;
