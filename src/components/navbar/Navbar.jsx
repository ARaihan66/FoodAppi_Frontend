import React, { useState } from "react";
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
      <ul className="flex gap-6 text-xl font-semibold">
        <li
          onClick={() => setMenu("home")}
          className={`${menu === "home" ? "underline" : ""}`}
        >
          <Link to="/">Home</Link>
        </li>
        <li
          onClick={() => setMenu("about")}
          className={`${menu === "about" ? "underline" : ""}`}
        >
          <Link to="/">About</Link>
        </li>
        <li
          onClick={() => setMenu("menu")}
          className={`${menu === "menu" ? "underline" : ""}`}
        >
          <Link to="/">Menu</Link>
        </li>
        <li
          onClick={() => setMenu("contact")}
          className={`${menu === "contact" ? "underline" : ""}`}
        >
          <Link to="/">Contact Us</Link>
        </li>
      </ul>

      <div className="flex gap-8 relative ">
        <img src={search_icon} alt="" />
        <div>
          <img src={basket_icon} alt="" />
          <div className="absolute bg-orange-900 min-h-[10px] min-w-[10px] rounded-full top-[-16px] left-[82px] text-white">
            300
          </div>
        </div>
        <button className="bg-orange-500 border-solid	border-black rounded-md py-[5px] px-[10px] transition duration-300  hover:text-white">
          Sign up
        </button>
      </div>
    </div>
  );
};

export default Navbar;
