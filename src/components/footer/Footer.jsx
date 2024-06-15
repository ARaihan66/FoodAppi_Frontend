
import { Link } from "react-router-dom";
import logo from "../../assets/food_asset/food-appi-logo.png";
import facebook from "../../assets/socialmedia/facebook.png";
import linkedin from "../../assets/socialmedia/linkedin.png";
import twitter from "../../assets/socialmedia/twitter.png";
import copy from "../../assets/copyright/copyright.png"

const Footer = () => {

  return (
    <div className="bg-yellow-100 rounded-md">
    <div className="flex justify-center items-center gap-10 my-[40px]p-10">
    <div className="flex-1 flex flex-col">
    <div className="flex justify-center items-center">
    <img src={logo} alt="foodappi" className=" w-[100px] h-[100px] my-[10px]"/>
    </div>
    <p className="text-justify">
    FoodAppi was founded to make high-quality food accessible to everyone, anywhere. Passionate about food and dedicated to exceptional service, we partner with the finest local restaurants to offer a diverse range of cuisines. From fast food to fine dining, FoodAppi is your go-to for quick, reliable, and delicious delivery.
    </p>
    <div className="flex gap-10 my-5">
        <Link to="*">
        <img src={facebook} alt="facebook" className="w-[30px] h-[30px] cursor-pointer"/>
        </Link>
        <Link to="#">
        <img src={linkedin} alt="linkedin" className="w-[30px] h-[30px] cursor-pointer"/>
        </Link>
        <Link to="#">
        <img src={twitter} alt="twitter" className="w-[30px] h-[30px] cursor-pointer"/>
        </Link>
    </div>
      </div>
      <div className="flex-1 flex flex-col justify-between items-center gap-5 mt-7">
      <h3 className="font-bold text-xl text-center">Company</h3>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/terms-conditions">Terms & Conditions</Link>
        <Link to="/privacy-policy">Privacy Policy</Link>
      </div>
      <div className="flex-1 flex flex-col gap-2 justify-center items-center">
      <h3 className="font-bold text-xl text-center">Get in touch</h3>
      <p>+88 01767013859</p>
      <p>or</p>
      <p>+88 01521324145</p>
      <p>foodappi2023@gmail.com</p>
      <p>D-Block, Lalmatia, Mohammadpur</p>
      <p>Dhaka, Bangladesh</p>
      </div>
    </div>
    <hr className="text-black mx-10"/>
    <div className="flex justify-center items-center my-5">Copyright {new Date().getFullYear()} <img src={copy} alt="copyright" className="w-[20px] h-[20px] mx-3"/> FoodAppi.com - All Rights Reserved.</div>
    </div>
  )
}

export default Footer
