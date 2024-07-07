import cardPic1 from "../assets/pic1.png";
import cardPic2 from "../assets/pic2.png";
import cardPic3 from "../assets/pic3.png";
import cardPic4 from "../assets/pic4.png";
import cardPic5 from "../assets/pic5.png";
import cardPic6 from "../assets/pic6.png";
import cardPic7 from "../assets/pic7.png";
import cardPic8 from "../assets/pic8.png";
import cardPic9 from "../assets/pic5.png";
import cardPic10 from "../assets/pic6.png";
import cardPic11 from "../assets/pic7.png";
import cardPic12 from "../assets/pic8.png";
import navLogo from "../assets/logo.png";
import carticon from "../assets/cart-icon.png";
import { Link } from "react-router-dom";

function ProductCard({ imageSrc, title, shirtType, boxColor, buttonText }) {
  return (
    <div className="inner_collections_cards">
      <div className="inner_imgdiv">
        <img src={imageSrc} alt="product image" />
      </div>
      <div className="innercard_typo">
        <div className="typo_titlediv">
          <p>{shirtType}</p>
          <div>
            <div className="clr_bx" style={{ background: boxColor }}></div>
            <p>$58</p>
          </div>
        </div>
        <p className="cardtitle">{title}</p>
        <button className="card_addbtn">
          <a href="#">{buttonText}</a>
        </button>
      </div>
    </div>
  );
}

function Store() {
  const cardOneBg = "#576aa4";
  const cardTwoBg = "#141414";
  const cardThreeBg = "#c39d6c";
  const cardFourBg = "#30302e";
  const cardFiveBg = "#2F2E2A";
  const cardSixBg = "#DCDFE8";
  const cardSevenBg = "#30302E";
  const cardEightBg = "#E1D9CB";
  // const cardNineBg = "#DCDFE8";
  // const cardTenBg = "#DCDFE8";
  // const cardElevenBg = "#DCDFE8";
  // const cardTwelveBg = "#DCDFE8";

  return (
    <>
      {/* <Navbar></Navbar> */}

      <header className="navbar">
        <img src={navLogo} className="navlogo" alt="logo image" />
        <div>
          <Link to="./Cart">
            <img src={carticon} className="navcart" alt="cart icon" />
          </Link>
          <p className="cartCAmt">3</p>
        </div>
      </header>

      <section className="collections">
        <h2>Explore collections</h2>
        <div className="collections_contents">
          <div className="inner_collectiondiv">
            <div className="inner_collection_title">
              <h4>Men's Tees</h4>
            </div>
            <div className="inner_cards">
              <ProductCard
                imageSrc={cardPic1}
                title="Basic slim T-shirt"
                shirtType="Vintage tee"
                boxColor={cardOneBg}
                buttonText="Add To Cart"
              />
              {/* -------Card2 */}
              <ProductCard
                imageSrc={cardPic2}
                title="Basic slim T-shirt"
                shirtType="Vintage tee"
                boxColor={cardTwoBg}
                buttonText="Add To Cart"
              />
              {/* ---------Card3 */}
              <ProductCard
                imageSrc={cardPic3}
                title="Basic slim T-shirt"
                shirtType="Vintage tee"
                boxColor={cardThreeBg}
                buttonText="Add To Cart"
              />
              {/* ---------Card4 */}
              <ProductCard
                imageSrc={cardPic4}
                title="Basic slim T-shirt"
                shirtType="Vintage tee"
                boxColor={cardFourBg}
                buttonText="Add To Cart"
              />
            </div>
          </div>
          {/* ---------second products batch------------------- */}
          <div className="inner_collectiondiv">
            <div className="inner_collection_title">
              <h4>Casual fits</h4>
            </div>
            <div className="inner_cards">
              <ProductCard
                imageSrc={cardPic5}
                title="Basic Patchwork T-shirt"
                shirtType="Patchwork tee"
                boxColor={cardFiveBg}
                buttonText="Add To Cart"
              />
              {/* -------Card2 */}
              <ProductCard
                imageSrc={cardPic6}
                title="Basic Blockair T-shirt"
                shirtType="Blackair tee"
                boxColor={cardSixBg}
                buttonText="Add To Cart"
              />
              {/* ---------Card3 */}
              <ProductCard
                imageSrc={cardPic7}
                title="Eastern V up and down"
                shirtType="Eastern V"
                boxColor={cardSevenBg}
                buttonText="Add To Cart"
              />
              {/* ---------Card4 */}
              <ProductCard
                imageSrc={cardPic8}
                title="Casual Shinko jacket"
                shirtType="Shinko jacket"
                boxColor={cardEightBg}
                buttonText="Add To Cart"
              />
            </div>
          </div>

          {/* ---------Third products batch------------------- */}

          <div className="inner_collectiondiv">
            <div className="inner_collection_title">
              <h4>Featured</h4>
            </div>
            <div className="inner_cards">
              <ProductCard
                imageSrc={cardPic9}
                title="Basic Patchwork T-shirt"
                shirtType="Patchwork tee"
                boxColor={cardFiveBg}
                buttonText="Add To Cart"
              />
              {/* -------Card2 */}
              <ProductCard
                imageSrc={cardPic10}
                title="Basic Blackair T-shirt"
                shirtType="Blackair tee"
                boxColor={cardSixBg}
                buttonText="Add To Cart"
              />
              {/* ---------Card3 */}
              <ProductCard
                imageSrc={cardPic11}
                title="Eastern V up and down"
                shirtType="Eastern V"
                boxColor={cardSevenBg}
                buttonText="Add To Cart"
              />
              {/* ---------Card4 */}
              <ProductCard
                imageSrc={cardPic12}
                title="Casual Shinko jacket"
                shirtType="Shinko jacket"
                boxColor={cardEightBg}
                buttonText="Add To Cart"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Store;

// import cardPic1 from "./assets/pic1.png";
// import cardPic2 from "./assets/pic2.png";

// function Card() {
//   return (
//     <section className="collections">
//       <h2>Explore collections</h2>
//       <div className="collections_contents">
//         <div className="inner_collectiondiv">
//           <div className="inner_collection_title">
//             <h4>Men's Tees</h4>
//           </div>
//           <div className="inner_cards">
//             {/* ------Card1---------------------------------------- */}
//             <div className="inner_collections_cards">
//               <div className="inner_imgdiv">
//                 <img src={cardPic1} alt="tshirt image" />
//               </div>
//               <div className="innercard_typo">
//                 {/* vintage teee */}
//                 <div className="typo_titlediv">
//                   <p>Vintage tee</p>
//                   <div>
//                     <div className="clr_bx"></div>
//                     <p>+8</p>
//                   </div>
//                 </div>{" "}
//                 {/*endss here vintage teee */}
//                 <h4>Basic slim T-shirt</h4>
//                 <button className="card_addbtn">
//                   <a href="#">Add To Cart</a>
//                 </button>
//               </div>
//             </div>
//             {/* Card1 Ends here */}

//             {/* -----Card2----------------------------- */}
//             <div className="inner_collections_cards">
//               <div className="inner_imgdiv">
//                 <img src={cardPic2} alt="tshirt image" />
//               </div>
//               <div className="innercard_typo">
//                 {/* vintage teee */}
//                 <div className="typo_titlediv">
//                   <p>Vintage tee</p>
//                   <div>
//                     <div className="clr_bx2"></div>
//                     <p>+8</p>
//                   </div>
//                 </div>{" "}
//                 {/*ends here vintage teee */}
//                 <h4>Basic slim T-shirt</h4>
//                 <button className="card_addbtn">
//                   <a href="#">Add To Cart</a>
//                 </button>
//               </div>
//             </div>
//             {/* Card2 Ends here */}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Card;
