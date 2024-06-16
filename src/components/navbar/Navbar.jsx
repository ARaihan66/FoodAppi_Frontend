import { useState } from "react";
import logo from "../../assets/food_asset/food-appi-logo.png";
import { Link } from "react-router-dom";
import search_icon from "../../assets/food_asset/search_icon.png";
import basket_icon from "../../assets/food_asset/basket_icon.png";
import { useSelector } from "react-redux";
import { AiOutlineClose } from "react-icons/ai";


const Navbar = () => {
  const cartItems = useSelector((state) => state.cart.cart);
  const totalQty = cartItems.reduce((totalQty, item) => {
    return totalQty + item.qty;
  }, 0);

  const [isSearchBarVisible, setIsSearchBarVisible] = useState(false);

  const toggleSearchBar = () => {
    setIsSearchBarVisible(!isSearchBarVisible);
  };

  const [menu, setMenu] = useState("home");

  return (
    <div className="sticky top-0 rounded flex justify-between items-center py-[15px] bg-gray-50 z-10 shadow">
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

      <div className="flex justify-center items-center gap-10 relative pr-5">
        <img  onClick={toggleSearchBar}  src={search_icon} alt="search-icon" className="h-[20px] w-[20px] cursor-pointer"/>
        <div>
        {isSearchBarVisible && (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 z-40 flex justify-center items-center">
          <div className="bg-white rounded-lg shadow-lg p-4">
            <AiOutlineClose onClick={toggleSearchBar} className="fixed text-white text-3xl cursor-pointer right-10 top-10"/>
            <input
              type="text"
              placeholder="Search item here..."
              className="w-[500px] p-2 rounded-l-md border-2 border-r-0 border-gray-300 focus:outline-none focus:border-blue-500 transition duration-300"
            />
            <button className="p-2 bg-orange-500 text-white rounded-r-md border-2 border-orange-500 hover:bg-orange-600 transition duration-300">
              Search
            </button>
          </div>
        </div>
      )}
         <Link to="/cart"> <img src={basket_icon} alt="" className="h-[20px] w-[20px]"/></Link>
          <div className="absolute bg-orange-900 min-h-[10px] min-w-[10px] rounded-full bottom-[50%] left-[40%] text-white p-[3px] font-bold">
            {totalQty}
          </div>
        </div>
        <button className="bg-orange-400 border-solid	border-black rounded-md py-[5px] px-[10px] transition duration-300 hover:text-white">
          Sign up
        </button>
      </div>
    </div>
  );
};

export default Navbar;