import  { useState } from "react";
import food_1 from '../../assets/food_asset/food_1.png'
import food_2 from '../../assets/food_asset/food_2.png'
import food_3 from '../../assets/food_asset/food_3.png'
import food_4 from '../../assets/food_asset/food_4.png'
import food_5 from '../../assets/food_asset/food_5.png'
import food_6 from '../../assets/food_asset/food_6.png'
import food_7 from '../../assets/food_asset/food_7.png'
import food_8 from '../../assets/food_asset/food_8.png'
import food_9 from '../../assets/food_asset/food_9.png'
import food_10 from '../../assets/food_asset/food_10.png'
import food_11 from '../../assets/food_asset/food_11.png'
import food_12 from '../../assets/food_asset/food_12.png'
import food_13 from '../../assets/food_asset/food_13.png'
import food_14 from '../../assets/food_asset/food_14.png'
import food_15 from '../../assets/food_asset/food_15.png'
import food_16 from '../../assets/food_asset/food_16.png'
import food_17 from '../../assets/food_asset/food_17.png'
import food_18 from '../../assets/food_asset/food_18.png'
import food_19 from '../../assets/food_asset/food_19.png'
import food_20 from '../../assets/food_asset/food_20.png'
import food_21 from '../../assets/food_asset/food_21.png'
import food_22 from '../../assets/food_asset/food_22.png'
import food_23 from '../../assets/food_asset/food_23.png'
import food_24 from '../../assets/food_asset/food_24.png'
import food_25 from '../../assets/food_asset/food_25.png'
import food_26 from '../../assets/food_asset/food_26.png'
import food_27 from '../../assets/food_asset/food_27.png'
import food_28 from '../../assets/food_asset/food_28.png'
import food_29 from '../../assets/food_asset/food_29.png'
import food_30 from '../../assets/food_asset/food_30.png'
import food_31 from '../../assets/food_asset/food_31.png'
import food_32 from '../../assets/food_asset/food_32.png'
import FoodCard from "./FoodCard";

const ExploreMenu = () => {


    const food_list = [
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
        }, {
            _id: "3",
            name: "Clover Salad",
            image: food_3,
            price: 16,
            description: "Food provides essential nutrients for overall health and well-being",
            category: "Salad"
        }, {
            _id: "4",
            name: "Chicken Salad",
            image: food_4,
            price: 24,
            description: "Food provides essential nutrients for overall health and well-being",
            category: "Salad"
        }, {
            _id: "5",
            name: "Lasagna Rolls",
            image: food_5,
            price: 14,
            description: "Food provides essential nutrients for overall health and well-being",
            category: "Rolls"
        }, {
            _id: "6",
            name: "Peri Peri Rolls",
            image: food_6,
            price: 12,
            description: "Food provides essential nutrients for overall health and well-being",
            category: "Rolls"
        }, {
            _id: "7",
            name: "Chicken Rolls",
            image: food_7,
            price: 20,
            description: "Food provides essential nutrients for overall health and well-being",
            category: "Rolls"
        }, {
            _id: "8",
            name: "Veg Rolls",
            image: food_8,
            price: 15,
            description: "Food provides essential nutrients for overall health and well-being",
            category: "Rolls"
        }, {
            _id: "9",
            name: "Ripple Ice Cream",
            image: food_9,
            price: 14,
            description: "Food provides essential nutrients for overall health and well-being",
            category: "Deserts"
        }, {
            _id: "10",
            name: "Fruit Ice Cream",
            image: food_10,
            price: 22,
            description: "Food provides essential nutrients for overall health and well-being",
            category: "Deserts"
        }, {
            _id: "11",
            name: "Jar Ice Cream",
            image: food_11,
            price: 10,
            description: "Food provides essential nutrients for overall health and well-being",
            category: "Deserts"
        }, {
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
        }, {
            _id: "15",
            name: "Grilled Sandwich",
            image: food_15,
            price: 16,
            description: "Food provides essential nutrients for overall health and well-being",
            category: "Sandwich"
        }, {
            _id: "16",
            name: "Bread Sandwich",
            image: food_16,
            price: 24,
            description: "Food provides essential nutrients for overall health and well-being",
            category: "Sandwich"
        }, {
            _id: "17",
            name: "Cup Cake",
            image: food_17,
            price: 14,
            description: "Food provides essential nutrients for overall health and well-being",
            category: "Cake"
        }, {
            _id: "18",
            name: "Vegan Cake",
            image: food_18,
            price: 12,
            description: "Food provides essential nutrients for overall health and well-being",
            category: "Cake"
        }, {
            _id: "19",
            name: "Butterscotch Cake",
            image: food_19,
            price: 20,
            description: "Food provides essential nutrients for overall health and well-being",
            category: "Cake"
        }, {
            _id: "20",
            name: "Sliced Cake",
            image: food_20,
            price: 15,
            description: "Food provides essential nutrients for overall health and well-being",
            category: "Cake"
        }, {
            _id: "21",
            name: "Garlic Mushroom ",
            image: food_21,
            price: 14,
            description: "Food provides essential nutrients for overall health and well-being",
            category: "Pure Veg"
        }, {
            _id: "22",
            name: "Fried Cauliflower",
            image: food_22,
            price: 22,
            description: "Food provides essential nutrients for overall health and well-being",
            category: "Pure Veg"
        }, {
            _id: "23",
            name: "Mix Veg Pulao",
            image: food_23,
            price: 10,
            description: "Food provides essential nutrients for overall health and well-being",
            category: "Pure Veg"
        }, {
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
        }, {
            _id: "27",
            name: "Creamy Pasta",
            image: food_27,
            price: 16,
            description: "Food provides essential nutrients for overall health and well-being",
            category: "Pasta"
        }, {
            _id: "28",
            name: "Chicken Pasta",
            image: food_28,
            price: 24,
            description: "Food provides essential nutrients for overall health and well-being",
            category: "Pasta"
        }, {
            _id: "29",
            name: "Buttter Noodles",
            image: food_29,
            price: 14,
            description: "Food provides essential nutrients for overall health and well-being",
            category: "Noodles"
        }, {
            _id: "30",
            name: "Veg Noodles",
            image: food_30,
            price: 12,
            description: "Food provides essential nutrients for overall health and well-being",
            category: "Noodles"
        }, {
            _id: "31",
            name: "Somen Noodles",
            image: food_31,
            price: 20,
            description: "Food provides essential nutrients for overall health and well-being",
            category: "Noodles"
        }, {
            _id: "32",
            name: "Cooked Noodles",
            image: food_32,
            price: 15,
            description: "Food provides essential nutrients for overall health and well-being",
            category: "Noodles"
        }
    ]
    

  const menuItems = [...new Set( food_list.map((Val) => Val.category))];


  return (
    <section id="explore">
     <h2 className="font-bold text-3xl my-[20px]">Explore Our Menu</h2>
     <p>Our aim is to provide quality service and your setisfection is our priority. Give your order and take satisfection from us. </p>
    <div className="flex justify-between my-[20px]">
    <button  className="bg-orange-400 h-[100px] w-[100px] rounded-full hover:bg-orange-300">All</button>
      {menuItems &&
       menuItems.map((item, index) => {
          return (
                <button key={index} className="bg-orange-400 h-[100px] w-[100px] rounded-full hover:bg-orange-300">{item}</button>
          )
        })}
    </div>
    <FoodCard food_list = {food_list}/>
    </section>
  );
};

export default ExploreMenu;