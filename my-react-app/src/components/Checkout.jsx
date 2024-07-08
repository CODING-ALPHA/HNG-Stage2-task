import React from "react";
// import navLogo from "../assets/logo.png";
// import carticon from "../assets/cart-icon.png";
// import checkbxicon from "../assets/checkbx.png";
// import itempic1 from "../assets/pic11.png";
// import itempic2 from "../assets/pic9.png";
// import itempic3 from "../assets/pic10.png";
// import plusicon from "../assets/plus icon.png";
// import minusicon from "../assets/minus icon.png";
import arwlfticon from "../assets/arrow left.png";
// import Store from "./Store.jsx";

import { Link } from "react-router-dom";

// Function for the Navbar component
// function Navbar() {
//   return (
//     <header className="navbar">
//       <img src={navLogo} className="navlogo" alt="logo image" />
//       <div>
//         <Link to="./Cart">
//           <img src={carticon} className="navcart" alt="cart icon" />
//         </Link>
//         <p className="cartCAmt">3</p>{" "}
//         {/* Replace with actual cart item count */}
//       </div>
//     </header>
//   );
// }

function CheckOut() {
  return (
    <div className="shop_contdiv">
      <Link to={-1} className="shop_contdivlink">
        <div>
          <img src={arwlfticon} alt="arrow left icon" />
          <p>Continue Shopping</p>
        </div>
      </Link>
    </div>
  );
}

export default CheckOut;
