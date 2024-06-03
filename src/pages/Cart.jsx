import food from "../assets/food_asset/food_3.png";
import { MdDelete } from "react-icons/md";
import { FaPlus, FaMinus  } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";
import { FaStarHalfAlt } from "react-icons/fa";

const Cart = () => {
  return (
    <div className="my-[50px]">
      <h2 className="text-2xl font-bold">Cart Items</h2>
      <div>
      <div className="flex justify-between items-center my-[20px] bg-gray-200 rounded-2xl shadow-xl p-[20px]">
        <div className="flex justify-berween items-center gap-10">
        <MdDelete className="text-2xl text-red-700 cursor-pointer"/>
          <img src={food} alt="" className="w-[120px] h-[120px] rounded-md"/>
        </div>
        <div className="">
          <h3 className="flex justify-start items-center text-xl font-bold">Greek salad</h3>
          <p>Food provides essential nutrients for overall health and well-being</p>
          <div className="flex text-orange-400"><FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStarHalfAlt /></div>
        </div>
        <div className="flex justify-center items-center gap-5">
        <FaPlus className="cursor-pointer hover:text-red-300"/> 2 <FaMinus className="cursor-pointer hover:text-red-300"/>
        </div>
        <div>
        <h2 className="text-xl"> $43</h2>
        </div>
      </div>
    </div>
    <div>
      <div className="flex justify-between items-center my-[20px] bg-gray-200 rounded-2xl shadow-xl p-[20px]">
        <div className="flex justify-berween items-center gap-10">
        <MdDelete className="text-2xl text-red-700 cursor-pointer"/>
          <img src={food} alt="" className="w-[120px] h-[120px] rounded-md"/>
        </div>
        <div className="">
          <h3 className="flex justify-start items-center text-xl font-bold">Greek salad</h3>
          <p>Food provides essential nutrients for overall health and well-being</p>
          <div className="flex text-orange-400"><FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStarHalfAlt /></div>
        </div>
        <div className="flex justify-center items-center gap-5">
        <FaPlus className="cursor-pointer hover:text-red-300"/> 2 <FaMinus className="cursor-pointer hover:text-red-300"/>
        </div>
        <div>
        <h2 className="text-xl"> $43</h2>
        </div>
      </div>
    </div>
    <div>
      <div className="flex justify-between items-center my-[20px] bg-gray-200 rounded-2xl shadow-xl p-[20px]">
        <div className="flex justify-berween items-center gap-10">
        <MdDelete className="text-2xl text-red-700 cursor-pointer"/>
          <img src={food} alt="" className="w-[120px] h-[120px] rounded-md"/>
        </div>
        <div className="">
          <h3 className="flex justify-start items-center text-xl font-bold">Greek salad</h3>
          <p>Food provides essential nutrients for overall health and well-being</p>
          <div className="flex text-orange-400"><FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStarHalfAlt /></div>
        </div>
        <div className="flex justify-center items-center gap-5">
        <FaPlus className="cursor-pointer hover:text-red-300"/> 2 <FaMinus className="cursor-pointer hover:text-red-300"/>
        </div>
        <div>
        <h2 className="text-xl"> $43</h2>
        </div>
      </div>
    </div>
    <div>
      <div className="flex justify-between items-center my-[20px] bg-gray-200 rounded-2xl shadow-xl p-[20px]">
        <div className="flex justify-berween items-center gap-10">
        <MdDelete className="text-2xl text-red-700 cursor-pointer"/>
          <img src={food} alt="" className="w-[120px] h-[120px] rounded-md"/>
        </div>
        <div className="">
          <h3 className="flex justify-start items-center text-xl font-bold">Greek salad</h3>
          <p>Food provides essential nutrients for overall health and well-being</p>
          <div className="flex text-orange-400"><FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStarHalfAlt /></div>
        </div>
        <div className="flex justify-center items-center gap-5">
        <FaPlus className="cursor-pointer hover:text-red-300"/> 2 <FaMinus className="cursor-pointer hover:text-red-300"/>
        </div>
        <div>
        <h2 className="text-xl"> $43</h2>
        </div>
      </div>
    </div>
    <hr className="h-[10px]" />
    <div className="flex justify-between">
      <h3 className="text-xl font-semibold">Total Items: 3</h3>
      <h3 className="text-xl font-semibold">Total Amounts: $ 120</h3>
    </div>
   <div className="flex justify-center items-center my-[50px]">
   <button className="bg-orange-400 py-[15px] px-[50px] rounded-md">Check Out</button>
   </div>
    </div>
  );
};

export default Cart;
