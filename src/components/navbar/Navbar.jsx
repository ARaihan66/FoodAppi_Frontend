import { useState } from "react";
import logo from "../../assets/food_asset/food-appi-logo.png";
import { Link } from "react-router-dom";
import search_icon from "../../assets/food_asset/search_icon.png";
import basket_icon from "../../assets/food_asset/basket_icon.png";

const Navbar = () => {
  const [menu, setMenu] = useState("home");

  return (
    <div className="flex justify-between items-center py-[20px]">
      <Link to="/">
        <img src={logo} alt="" className="w-[200px] h-[100px]" />
      </Link>
      <ul className="flex justify-center items-center gap-10 text-xl font-semibold">
        <li
          onClick={() => setMenu("home")}
          className={`${menu === "home" ? "bg-gray-100 p-[5px] rounded-md" : ""}`}
        >
          <Link to="/">Home</Link>
        </li>
        <li
          onClick={() => setMenu("about")}
          className={`${menu === "about" ? "bg-gray-100 p-[5px] rounded-md": ""}`}
        >
          <Link to="/about">About</Link>
        </li>
        <li
          onClick={() => setMenu("menu")}
          className={`${menu === "menu" ? "bg-gray-100 p-[5px] rounded-md": ""}`}
        >
          <Link to="/">Menu</Link>
        </li>
        <li
          onClick={() => setMenu("contact")}
          className={`${menu === "contact" ? "bg-gray-100 p-[5px] rounded-md" : ""}`}
        >
          <Link to="/">Contact Us</Link>
        </li>
      </ul>

      <div className="flex justify-center items-center gap-10 relative ">
        <img src={search_icon} alt="search-icon" className="h-[20px] w-[20px]"/>
        <div>
         <Link to="/cart"> <img src={basket_icon} alt="" className="h-[20px] w-[20px]"/></Link>
          <div className="absolute bg-orange-900 min-h-[10px] min-w-[10px] rounded-full bottom-[50%] left-[40%] text-white p-[3px] font-bold">
            50
          </div>
        </div>
        <button className="bg-orange-400 border-solid	border-black rounded-md py-[5px] px-[10px] transition duration-300  hover:text-white">
          Sign up
        </button>
      </div>
    </div>
  );
};

export default Navbar;
