import food from "../assets/food_asset/food_1.png";
import { FaStar } from "react-icons/fa6";
import { FaStarHalfAlt,FaHeart, FaRegHeart } from "react-icons/fa";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const FoodDetails = () => {
  const food = useSelector((state)=> console.log(state.cart.cart));
    const [love, setLove] = useState(false)
    const [size, setSize] = useState("small")


    const handleSetSize = (newSize)=>{
        setSize(newSize)
    }

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);


  return (
    <div className="bg-gray-100 py-8 my-[50px] shadow-lg rounded">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row -mx-4">
          <div className="md:flex-1 px-4">
            <div className="h-[350px] rounded-lgmb-4">
              <img
                className="w-full h-full object-cover rounded-md"
                src={food}
                alt="Product"
              />
            </div>
            <div className="flex justify-between items-center gap-10">
              <div className=" px-2">
                <button className="w-full my-6 py-[10px] px-[30px] rounded-full font-bold bg-orange-500 hover:bg-orange-400">
                  Add to Cart
                </button>
              </div>
              <div className=" px-2">
                {love ? <FaHeart onClick={()=> setLove(!love)} className="h-[30px] w-[30px] cursor-pointer"/> : <FaRegHeart onClick={()=> setLove(!love)} className="h-[30px] w-[30px] cursor-pointer" />}
              </div>
            </div>
          </div>
          <div className="md:flex-1 px-4">
            <h2 className="text-2xl font-bold mb-2">Product Name</h2>
            <div className="flex text-orange-400 my-[10px]">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStarHalfAlt />
            </div>
            <div className="flex mb-4">
              <div className="mr-4">
                <span className="font-bold">Price:</span>
                <span className="text-gray-60 ml-[10px]">$29.99</span>
              </div>
              <div>
                <span className="font-bold">Availability:</span>
                <span className="text-gray-60 ml-[10px]">In Stock</span>
              </div>
            </div>
            <div className="mb-4">
              <span className="font-bold">Select Size:</span>
              <div className="flex items-center mt-2">
                <button onClick={()=> handleSetSize("small")} className={`py-2 px-4 rounded-full font-semibold mr-2 bg-white  ${size === "small" && "py-2 px-4 rounded-full font-semibold mr-2 bg-orange-600"}`}>
                  Small
                </button>
                <button onClick={()=> handleSetSize("medium")} className={`py-2 px-4 rounded-full font-semibold mr-2 bg-white ${size === "medium" && "py-2 px-4 rounded-full font-semibold mr-2 bg-orange-600"}`}>
                  Medium
                </button>
                <button onClick={()=> handleSetSize("large")} className={`py-2 px-4 rounded-full font-semibold mr-2 bg-white ${size === "large" && "py-2 px-4 rounded-full font-semibold mr-2 bg-orange-600"}`}>
                  Large
                </button>
              </div>
            </div>
            <div>
              <span className="font-bold">Food Item Description:</span>
              <p className="text-gray-60 text-sm mt-2">
              A refreshing blend of crisp lettuce, juicy tomatoes, cucumbers, olives, and feta cheese. Drizzled with a tangy vinaigrette, this Greek Salad is perfect for a light and healthy meal.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodDetails;
