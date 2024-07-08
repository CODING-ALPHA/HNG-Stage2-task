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
// import Store from "./Store.jsx";
import { Link } from "react-router-dom";

// Function for the Navbar component
function Navbar() {
  // const navLogo = "../assets/logo.png"; // Assuming image path
  // const carticon = "../assets/cart-icon.png"; // Assuming image path
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

// Function for the CartItem component
function CartItem({ itempic, title }) {
  return (
    <div>
      <div className="cont1_itm1">
        <div className="checkicon_div">
          <img src={checkbxicon} alt="checkbox icon" />
        </div>
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
          <div className="itm_amt">
            <div>
              <img src={minusicon} alt="" />
              <span className="itm_amt_count">1</span>{" "}
              <img src={plusicon} alt="" />
            </div>
            <p>$58.90</p>
          </div>
        </div>
        <div className="itm_pricediv">
          <p>$58.90</p>
          <p>$58.90</p>
        </div>
      </div>
      <hr className="hr" />
    </div>
  );
}

// Function for the Cart component
function Cart() {
  return (
    <>
      <Navbar />
      <section className="cart_section">
        <h2>Shopping Cart</h2>
        <div className="Shpcart_cont">
          <div className="Shpcart_cont_1">
            <div className="Shpcart_cont_1_title">
              <h4 className="cart_title">Select Items To Checkout</h4>
            </div>
            <hr className="full_hr" />
            <div className="cont1_itmdiv">
              <CartItem itempic={itempic1} title="Grey slim T-shirt" />
              <CartItem itempic={itempic2} title="Brown slim T-shirt" />
              <CartItem itempic={itempic3} title="Basic slim T-shirt" />
            </div>
          </div>

          {/* second container */}
          <div className="Shpcartcont2">
            <h4>Order Summary</h4>
            <hr className="cont2_hr" />
            <div className="cont2_flex">
              <p className="flex_title">Total</p>
              <p className="flex_price">$58.90</p>
            </div>
            <hr className="cont2_hr" />

            <div className="cont2_flex">
              <p className="flex_title">Delivery Fee</p>
              <p className="flex_price">$55.50</p>
            </div>
            <hr className="cont2_hr" />

            <div className="ship_info">
              <p className="info_head">Shipping info</p>
              <p>
                Modern shipping containers revolutionized the global trade
                industry. Introduced in the 1950s, these standardized containers
                drastically reduced shipping times and costs
              </p>
            </div>
            <hr className="cont2_hr" />

            <div className="info_btn">
              <Link
                to="/CheckOut"
                style={{
                  textDecoration: "none",
                  color: "var(--white)",
                  background: "yellow",
                }}
              >
                <button>CHECK OUT</button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="shop_contdiv">
        <Link to={-1} className="shop_contdivlink">
          <div>
            <img src={arwlfticon} alt="arrow left icon" />
            <p>Continue Shopping</p>
          </div>
        </Link>
      </div>
    </>
  );
}

export default Cart;

// import React from "react";
// import navLogo from "../assets/logo.png";
// import carticon from "../assets/cart-icon.png";
// import { Link } from "react-router-dom";
// import checkbxicon from "../assets/checkbx.png";
// import itempic1 from "../assets/pic4.png";
// import plusicon from "../assets/plus icon.png";
// import minusicon from "../assets/minus icon.png";

// function Cart() {
//   return (
//     <>
//       <header className="navbar">
//         <img src={navLogo} className="navlogo" alt="logo image" />
//         <div>
//           <Link to="./Cart">
//             <img src={carticon} className="navcart" alt="cart icon" />
//           </Link>
//           <p className="cartCAmt">3</p>
//         </div>
//       </header>
//       {/* -----------------section */}
//       <section className="Cart_section">
//         <h2>Shopping Cart</h2>
//         <div className="Shpcart_cont">
//           <div className="Shpcart_cont_1">
//             <div className="Shpcart_cont_1_title">
//               <h4>Select items</h4>
//             </div>
//             <div className="cont1_itmdiv">
//               <div className="div">
//                 <div className="cont1_itm1">
//                   <div className="checkicon_div">
//                     <img src={checkbxicon} alt="checkbox icon" />
//                   </div>
//                   <div className="cont1_typo">
//                     <div className="cont_typodiv1">
//                       <div className="item_imgdiv">
//                         <img
//                           src={itempic1}
//                           className="itm_img"
//                           alt="itm image"
//                         />
//                       </div>
//                       <div className="typo_div">
//                         <p>Vintage tee</p>
//                         <h4>Basic slim T-shirt</h4>
//                         <p>Remove</p>
//                       </div>
//                     </div>
//                     <div className="itm_amt">
//                       <img src={minusicon} alt="" />
//                       <span className="itm_amt_count">1</span>
//                       <img src={plusicon} alt="" />
//                     </div>
//                   </div>
//                   <div className="itm_pricediv">
//                     <p>$58.90</p>
//                     <p>$58.90</p>
//                   </div>
//                 </div>
//                 <hr />
//               </div>
//               {/* -------------------------------------------------------- */}
//               <div className="cont1_itm1">
//                 <div className="checkicon_div">
//                   <img src={checkbxicon} alt="checkbox icon" />
//                 </div>

//                 <div className="cont1_typo">
//                   <div className="cont_typodiv1">
//                     <div className="item_imgdiv">
//                       <img src={itempic1} className="itm_img" alt="itm image" />
//                     </div>
//                     <div className="typo_div">
//                       <p>Vintage tee</p>
//                       <h4>Basic slim T-shirt</h4>
//                       <p>Remove</p>
//                     </div>
//                   </div>

//                   <div className="itm_amt">
//                     <img src={minusicon} alt="" />
//                     <span className="itm_amt_count">1</span>
//                     <img src={plusicon} alt="" />
//                   </div>
//                 </div>
//                 <div className="itm_pricediv">
//                   <p>$58.90</p>
//                   <p>$58.90</p>
//                 </div>
//               </div>
//             </div>
//             {/* <hr /> */}
//           </div>
//           <div className="Shpcartcont2">
//             hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }

// export default Cart;
