import React from "react";
import food_1 from "../../assets/food_asset/food_1.png";
import food_2 from "../../assets/food_asset/food_2.png";
import food_3 from "../../assets/food_asset/food_3.png";
import food_4 from "../../assets/food_asset/food_4.png";
import food_5 from "../../assets/food_asset/food_5.png";
import food_6 from "../../assets/food_asset/food_6.png";
import food_7 from "../../assets/food_asset/food_7.png";
import food_8 from "../../assets/food_asset/food_8.png";
import food_9 from "../../assets/food_asset/food_9.png";
import food_10 from "../../assets/food_asset/food_10.png";
import food_11 from "../../assets/food_asset/food_11.png";
import food_12 from "../../assets/food_asset/food_12.png";
import food_13 from "../../assets/food_asset/food_13.png";
import food_14 from "../../assets/food_asset/food_14.png";
import food_15 from "../../assets/food_asset/food_15.png";
import food_16 from "../../assets/food_asset/food_16.png";
import { useDispatch} from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from "../../redux/slices/CartSlice";
import toast from "react-hot-toast";

const ExclusiveFood = () => {

  const  exclusiveItems = [
        {
            _id: "1",
            name: "Greek salad",
            image: food_1,
            price: 12,
            description: "Food provides essential nutrients for overall health and well-being",
            category: "Salad"
        },
        {
            _id: "2",
            name: "Veg salad",
            image: food_2,
            price: 18,
            description: "Food provides essential nutrients for overall health and well-being",
            category: "Salad"
        }, 
        {
            _id: "3",
            name: "Clover Salad",
            image: food_3,
            price: 16,
            description: "Food provides essential nutrients for overall health and well-being",
            category: "Salad"
        }, 
        {
            _id: "4",
            name: "Chicken Salad",
            image: food_4,
            price: 24,
            description: "Food provides essential nutrients for overall health and well-being",
            category: "Salad"
        }, 
        {
            _id: "5",
            name: "Lasagna Rolls",
            image: food_5,
            price: 14,
            description: "Food provides essential nutrients for overall health and well-being",
            category: "Rolls"
        }, 
        {
            _id: "6",
            name: "Peri Peri Rolls",
            image: food_6,
            price: 12,
            description: "Food provides essential nutrients for overall health and well-being",
            category: "Rolls"
        }, 
        {
            _id: "7",
            name: "Chicken Rolls",
            image: food_7,
            price: 20,
            description: "Food provides essential nutrients for overall health and well-being",
            category: "Rolls"
        }, 
        {
            _id: "8",
            name: "Veg Rolls",
            image: food_8,
            price: 15,
            description: "Food provides essential nutrients for overall health and well-being",
            category: "Rolls"
        }, 
        {
            _id: "9",
            name: "Ripple Ice Cream",
            image: food_9,
            price: 14,
            description: "Food provides essential nutrients for overall health and well-being",
            category: "Deserts"
        }, 
        {
            _id: "10",
            name: "Fruit Ice Cream",
            image: food_10,
            price: 22,
            description: "Food provides essential nutrients for overall health and well-being",
            category: "Deserts"
        }, 
        {
            _id: "11",
            name: "Jar Ice Cream",
            image: food_11,
            price: 10,
            description: "Food provides essential nutrients for overall health and well-being",
            category: "Deserts"
        }, 
        {
            _id: "12",
            name: "Vanilla Ice Cream",
            image: food_12,
            price: 12,
            description: "Food provides essential nutrients for overall health and well-being",
            category: "Deserts"
        },
        {
            _id: "13",
            name: "Chicken Sandwich",
            image: food_13,
            price: 12,
            description: "Food provides essential nutrients for overall health and well-being",
            category: "Sandwich"
        },
        {
            _id: "14",
            name: "Vegan Sandwich",
            image: food_14,
            price: 18,
            description: "Food provides essential nutrients for overall health and well-being",
            category: "Sandwich"
        }, 
        {
            _id: "15",
            name: "Grilled Sandwich",
            image: food_15,
            price: 16,
            description: "Food provides essential nutrients for overall health and well-being",
            category: "Sandwich"
        }, 
        {
            _id: "16",
            name: "Bread Sandwich",
            image: food_16,
            price: 24,
            description: "Food provides essential nutrients for overall health and well-being",
            category: "Sandwich"
        }
    ];

  const dispatch = useDispatch();

  return (
    <div>
       <h3 className="font-bold text-2xl my-5">Exclusive Food</h3>
      <div className="flex justify-between items-center flex-wrap">
        {exclusiveItems &&
          exclusiveItems.map((item, index) => {
            const { _id, image, name, price } = item;
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
                <p className="p-[10px]">
                  {item.description.slice(0, 40)}...
                  <Link
                    to="/food-detail"
                    className="text-red-400 underline mx-[5px]"
                  >
                    {" "}
                    Read more
                  </Link>
                </p>
                <div className="flex justify-between items-center px-[10px]">
                  <button
                    onClick={() => {
                      dispatch(
                        addToCart({ id: _id, image, name, price, qty: 1 })
                      );
                      toast.success("Item added to the cart");
                    }}
                    className="bg-orange-500 p-[10px] rounded-full hover:bg-orange-400"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default ExclusiveFood;
