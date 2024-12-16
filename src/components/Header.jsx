
import weFrame from "../assets/OtherImages/logo img.webp";
import { NavLink } from "react-router-dom";
import heart from "../assets/OtherImages/heart.svg";
import Cart from "../assets/OtherImages/cart-large-minimalistic-svgrepo-com.svg";
import video from "../assets/BackgroundVideo/12193997_3840_2160_25fps.mp4";

export default function Header({cartAllProduct}) {
  return (
    <>
      <div id="header">
        <video src={video} autoPlay loop muted></video>

        <h2 id="header-input-box-above">
          The Best Platform for Your day to day wear
        </h2>
        <div id="header-input-box">
          <input
            id="header-input"
            type="text"
            name="query"
            placeholder="Search for Products"
          />
          {/* <img src={search} alt="" />  */}
        </div>
    <div id="header-abovemost">
        <div className="header-div">
          <li>
            <img id="logo-img" src={weFrame} alt="" />
          </li>
        </div>
        <div className="header-div">
          <li>
            {/* <img src={bulb} alt="" /> */}
           <span><button id="about-button">About</button></span>
          </li>
          <li >
            <img src={heart} alt="" />
            <span>Favourites</span>
          </li>
          <li id="header-div-img">
            <button>
              <NavLink to="/cart">
            <img src={Cart} alt="" />
            <span>{cartAllProduct.filter(obj => obj.id !== undefined && obj.id !== null).length}</span>
            </NavLink>
            </button>
          </li>
        </div>
        </div>
      </div>
    </>
  );
}

