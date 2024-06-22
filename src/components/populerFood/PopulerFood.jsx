import React from "react";
import food_17 from "../../assets/food_asset/food_17.png";
import food_18 from "../../assets/food_asset/food_18.png";
import food_19 from "../../assets/food_asset/food_19.png";
import food_20 from "../../assets/food_asset/food_20.png";
import food_21 from "../../assets/food_asset/food_21.png";
import food_22 from "../../assets/food_asset/food_22.png";
import food_23 from "../../assets/food_asset/food_23.png";
import food_24 from "../../assets/food_asset/food_24.png";
import food_25 from "../../assets/food_asset/food_25.png";
import food_26 from "../../assets/food_asset/food_26.png";
import food_27 from "../../assets/food_asset/food_27.png";
import food_28 from "../../assets/food_asset/food_28.png";
import food_29 from "../../assets/food_asset/food_29.png";
import food_30 from "../../assets/food_asset/food_30.png";
import food_31 from "../../assets/food_asset/food_31.png";
import food_32 from "../../assets/food_asset/food_32.png";
import { useDispatch} from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from "../../redux/slices/CartSlice";
import toast from "react-hot-toast";

const PopulerFood = () => {
    const popularItems = [
        {
            _id: "17",
            name: "Cup Cake",
            image: food_17,
            price: 14,
            description: "Food provides essential nutrients for overall health and well-being",
            category: "Cake"
        }, 
        {
            _id: "18",
            name: "Vegan Cake",
            image: food_18,
            price: 12,
            description: "Food provides essential nutrients for overall health and well-being",
            category: "Cake"
        }, 
        {
            _id: "19",
            name: "Butterscotch Cake",
            image: food_19,
            price: 20,
            description: "Food provides essential nutrients for overall health and well-being",
            category: "Cake"
        }, 
        {
            _id: "20",
            name: "Sliced Cake",
            image: food_20,
            price: 15,
            description: "Food provides essential nutrients for overall health and well-being",
            category: "Cake"
        }, 
        {
            _id: "21",
            name: "Garlic Mushroom",
            image: food_21,
            price: 14,
            description: "Food provides essential nutrients for overall health and well-being",
            category: "Pure Veg"
        }, 
        {
            _id: "22",
            name: "Fried Cauliflower",
            image: food_22,
            price: 22,
            description: "Food provides essential nutrients for overall health and well-being",
            category: "Pure Veg"
        }, 
        {
            _id: "23",
            name: "Mix Veg Pulao",
            image: food_23,
            price: 10,
            description: "Food provides essential nutrients for overall health and well-being",
            category: "Pure Veg"
        }, 
        {
            _id: "24",
            name: "Rice Zucchini",
            image: food_24,
            price: 12,
            description: "Food provides essential nutrients for overall health and well-being",
            category: "Pure Veg"
        },
        {
            _id: "25",
            name: "Cheese Pasta",
            image: food_25,
            price: 12,
            description: "Food provides essential nutrients for overall health and well-being",
            category: "Pasta"
        },
        {
            _id: "26",
            name: "Tomato Pasta",
            image: food_26,
            price: 18,
            description: "Food provides essential nutrients for overall health and well-being",
            category: "Pasta"
        }, 
        {
            _id: "27",
            name: "Creamy Pasta",
            image: food_27,
            price: 16,
            description: "Food provides essential nutrients for overall health and well-being",
            category: "Pasta"
        }, 
        {
            _id: "28",
            name: "Chicken Pasta",
            image: food_28,
            price: 24,
            description: "Food provides essential nutrients for overall health and well-being",
            category: "Pasta"
        }, 
        {
            _id: "29",
            name: "Buttter Noodles",
            image: food_29,
            price: 14,
            description: "Food provides essential nutrients for overall health and well-being",
            category: "Noodles"
        }, 
        {
            _id: "30",
            name: "Veg Noodles",
            image: food_30,
            price: 12,
            description: "Food provides essential nutrients for overall health and well-being",
            category: "Noodles"
        }, 
        {
            _id: "31",
            name: "Somen Noodles",
            image: food_31,
            price: 20,
            description: "Food provides essential nutrients for overall health and well-being",
            category: "Noodles"
        }, 
        {
            _id: "32",
            name: "Cooked Noodles",
            image: food_32,
            price: 15,
            description: "Food provides essential nutrients for overall health and well-being",
            category: "Noodles"
        }
    ];

  const dispatch = useDispatch();

  return (
    <section id="#explore">
      <h2 className="font-bold text-3xl my-[20px]">Explore Our Menu</h2>
      <p className="text-justify">
      Our aim is to provide quality service and your satisfaction is our priority. At FoodAppi, we strive to create a seamless and enjoyable experience from browsing our app to enjoying your meal.We partner with top local restaurants to ensure you receive fresh, safe, and delicious meals. Our diverse menu caters to all tastes and dietary preferences.Give your order and take satisfaction from us. We offer convenient payment methods and real-time order tracking, so you know exactly when to expect your food.Thank you for choosing FoodAppi. We look forward to serving you.
      </p>

       <h3 className="font-bold text-2xl my-5">Popular Food</h3>
      <div className="flex justify-between items-center flex-wrap">
        {popularItems &&
          popularItems.map((item, index) => {
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
    </section>
  );
};

export default PopulerFood;
