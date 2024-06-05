
import { IoIosHeartEmpty } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from "../../redux/slices/CartSlice";

const FoodCard = ({ foodItem }) => {
  //const food = useSelector((state)=> console.log(state) )
  const dispatch = useDispatch();

  return (
    <div className="flex justify-around items-center flex-wrap">
      {foodItem &&
        foodItem.map((item, index) => {
          const { _id,image, name, price,} = item;
          return (
            <div
              key={index}
              className="bg-gray-200 h-[400px] w-[300px] my-[20px] rounded-xl"
            >
              <img
                src={image}
                alt="food-image"
                className="h-[60%] w-[100%] p-[10px]"
              />
              <div className="flex justify-between px-[10px]">
                <h2 className="font-bold text-xl">{name}</h2>
                <h3 className="font-semibold text-l">$ {price}</h3>
              </div>
              <p className="p-[10px]">{item.description.slice(0, 40)}...<Link to="/food-detail" className="text-red-400 underline mx-[5px]"> Read more</Link></p>
              <div className="flex justify-between items-center px-[10px]">
              <button
                  onClick={() => {
                    dispatch(addToCart({ id: _id, image, name, price, qty: 1 }));
                  }}
                  className="bg-orange-500 p-[10px] rounded-full hover:bg-orange-400"
                >
                  Add to Cart
                </button>
                <IoIosHeartEmpty className="h-[30px] w-[30px] cursor-pointer hover:text-orange-600" />
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default FoodCard;
