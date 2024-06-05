import { useEffect, useState } from "react";
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
import FoodCard from "./FoodCard";
import { useDispatch, useSelector } from "react-redux";

import { setCategory } from "../../redux/slices/CategorySlice";
const food_list = [
  {
    _id: "1",
    name: "Greek Salad",
    image: food_1,
    price: 12,
    description:
      "A refreshing blend of crisp lettuce, juicy tomatoes, cucumbers, olives, and feta cheese. Drizzled with a tangy vinaigrette, this Greek Salad is perfect for a light and healthy meal.",
    category: "Salad",
  },
  {
    _id: "2",
    name: "Veg Salad",
    image: food_2,
    price: 18,
    description:
      "Packed with a variety of fresh vegetables like carrots, bell peppers, and cherry tomatoes, this Veg Salad is both nutritious and delicious. Topped with a light olive oil dressing.",
    category: "Salad",
  },
  {
    _id: "3",
    name: "Clover Salad",
    image: food_3,
    price: 16,
    description:
      "A unique salad featuring clover sprouts, avocado, and mixed greens, complemented by a lemon-herb dressing. Perfect for those looking for a nutritious and tasty option.",
    category: "Salad",
  },
  {
    _id: "4",
    name: "Chicken Salad",
    image: food_4,
    price: 24,
    description:
      "Grilled chicken breast served atop a bed of mixed greens, with cucumbers, tomatoes, and a creamy ranch dressing. A hearty and satisfying salad for any meal.",
    category: "Salad",
  },
  {
    _id: "5",
    name: "Lasagna Rolls",
    image: food_5,
    price: 14,
    description:
      "Delicious lasagna noodles rolled with a savory ricotta and spinach filling, topped with marinara sauce and melted mozzarella cheese. A fun twist on a classic dish.",
    category: "Rolls",
  },
  {
    _id: "6",
    name: "Peri Peri Rolls",
    image: food_6,
    price: 12,
    description:
      "Spicy Peri Peri chicken wrapped in soft tortillas with fresh vegetables and a zesty sauce. These rolls pack a flavorful punch with every bite.",
    category: "Rolls",
  },
  {
    _id: "7",
    name: "Chicken Rolls",
    image: food_7,
    price: 20,
    description:
      "Juicy chicken strips, seasoned to perfection, wrapped in a soft roll with crisp lettuce and creamy mayo. A perfect on-the-go meal.",
    category: "Rolls",
  },
  {
    _id: "8",
    name: "Veg Rolls",
    image: food_8,
    price: 15,
    description:
      "A variety of fresh vegetables, including bell peppers, carrots, and cucumbers, wrapped in a soft roll with a tangy dressing. A healthy and satisfying choice.",
    category: "Rolls",
  },
  {
    _id: "9",
    name: "Ripple Ice Cream",
    image: food_9,
    price: 14,
    description:
      "Creamy vanilla ice cream swirled with rich chocolate and caramel ripples. This indulgent treat is perfect for dessert lovers.",
    category: "Desserts",
  },
  {
    _id: "10",
    name: "Fruit Ice Cream",
    image: food_10,
    price: 22,
    description:
      "A delightful mix of real fruit chunks blended into creamy ice cream. Enjoy the refreshing taste of strawberries, mangoes, and blueberries in every scoop.",
    category: "Desserts",
  },
  {
    _id: "11",
    name: "Jar Ice Cream",
    image: food_11,
    price: 10,
    description:
      "Conveniently packed in a jar, this ice cream is perfect for on-the-go indulgence. Available in a variety of flavors to satisfy your sweet tooth.",
    category: "Desserts",
  },
  {
    _id: "12",
    name: "Vanilla Ice Cream",
    image: food_12,
    price: 12,
    description:
      "Classic vanilla ice cream made with the finest vanilla beans. Smooth, creamy, and timelessly delicious.",
    category: "Desserts",
  },
  {
    _id: "13",
    name: "Chicken Sandwich",
    image: food_13,
    price: 12,
    description:
      "Grilled chicken breast, fresh lettuce, and tomato slices served on a toasted bun with a touch of mayo. A classic sandwich that's perfect for lunch.",
    category: "Sandwich",
  },
  {
    _id: "14",
    name: "Vegan Sandwich",
    image: food_14,
    price: 18,
    description:
      "A delicious vegan option with roasted vegetables, hummus, and fresh greens on whole grain bread. Packed with flavor and nutrition.",
    category: "Sandwich",
  },
  {
    _id: "15",
    name: "Grilled Sandwich",
    image: food_15,
    price: 16,
    description:
      "Melted cheese and your choice of fillings, grilled to perfection. A comforting and satisfying sandwich for any time of day.",
    category: "Sandwich",
  },
  {
    _id: "16",
    name: "Bread Sandwich",
    image: food_16,
    price: 24,
    description:
      "Simple yet delicious, this bread sandwich features fresh ingredients like lettuce, tomato, and cheese, layered between slices of artisan bread.",
    category: "Sandwich",
  },
  {
    _id: "17",
    name: "Cup Cake",
    image: food_17,
    price: 14,
    description:
      "Moist and fluffy cupcakes available in a variety of flavors, topped with rich and creamy frosting. Perfect for a sweet treat.",
    category: "Cake",
  },
  {
    _id: "18",
    name: "Vegan Cake",
    image: food_18,
    price: 12,
    description:
      "A delightful vegan cake made with plant-based ingredients, offering a moist texture and delicious flavor without any animal products.",
    category: "Cake",
  },
  {
    _id: "19",
    name: "Butterscotch Cake",
    image: food_19,
    price: 20,
    description:
      "Rich and decadent butterscotch cake layered with creamy butterscotch frosting. A perfect choice for celebrations and special occasions.",
    category: "Cake",
  },
  {
    _id: "20",
    name: "Sliced Cake",
    image: food_20,
    price: 15,
    description:
      "Individual slices of cake in a variety of flavors, perfect for when you want just a taste. Each slice is moist and flavorful.",
    category: "Cake",
  },
  {
    _id: "21",
    name: "Garlic Mushroom",
    image: food_21,
    price: 14,
    description:
      "Sautéed mushrooms infused with garlic and herbs, offering a savory and aromatic side dish that's perfect for any meal.",
    category: "Pure Veg",
  },
  {
    _id: "22",
    name: "Fried Cauliflower",
    image: food_22,
    price: 22,
    description:
      "Crispy fried cauliflower bites served with a tangy dipping sauce. A delicious and healthy appetizer that's sure to please.",
    category: "Pure Veg",
  },
  {
    _id: "23",
    name: "Mix Veg Pulao",
    image: food_23,
    price: 10,
    description:
      "A flavorful rice dish cooked with a mix of fresh vegetables and aromatic spices. A wholesome and satisfying meal.",
    category: "Pure Veg",
  },
  {
    _id: "24",
    name: "Rice Zucchini",
    image: food_24,
    price: 12,
    description:
      "Tender zucchini slices mixed with rice and seasoned with herbs. A light and nutritious dish that's perfect as a side or main course.",
    category: "Pure Veg",
  },
  {
    _id: "25",
    name: "Cheese Pasta",
    image: food_25,
    price: 12,
    description:
      "Creamy pasta loaded with melted cheese, offering a rich and comforting flavor that's perfect for cheese lovers.",
    category: "Pasta",
  },
  {
    _id: "26",
    name: "Tomato Pasta",
    image: food_26,
    price: 18,
    description:
      "Pasta tossed in a tangy tomato sauce, with fresh basil and a hint of garlic. A classic Italian dish that's always a favorite.",
    category: "Pasta",
  },
  {
    _id: "27",
    name: "Creamy Pasta",
    image: food_27,
    price: 16,
    description:
      "Pasta coated in a rich and creamy sauce, with a hint of garlic and herbs. A luxurious dish that's perfect for a special meal.",
    category: "Pasta",
  },
  {
    _id: "28",
    name: "Chicken Pasta",
    image: food_28,
    price: 24,
    description:
      "Tender pieces of chicken mixed with pasta and a creamy Alfredo sauce. A hearty and delicious meal for any pasta lover.",
    category: "Pasta",
  },
  {
    _id: "29",
    name: "Butter Noodles",
    image: food_29,
    price: 14,
    description:
      "Simple yet delicious, these noodles are tossed with butter and herbs, offering a comforting and flavorful dish.",
    category: "Noodles",
  },
  {
    _id: "30",
    name: "Veg Noodles",
    image: food_30,
    price: 12,
    description:
      "Stir-fried noodles with a mix of fresh vegetables, seasoned with soy sauce and spices. A healthy and tasty meal.",
    category: "Noodles",
  },
  {
    _id: "31",
    name: "Somen Noodles",
    image: food_31,
    price: 20,
    description:
      "Thin Japanese noodles served in a light broth, with fresh vegetables and a sprinkle of sesame seeds. A delicate and flavorful dish.",
    category: "Noodles",
  },
  {
    _id: "32",
    name: "Cooked Noodles",
    image: food_32,
    price: 15,
    description:
      "Perfectly cooked noodles tossed with a savory sauce and fresh vegetables. A versatile and satisfying meal for any time.",
    category: "Noodles",
  },
];


const ExploreMenu = () => {

    const [foodItem, setFoodItem] = useState(food_list);

    const selectedCategory = useSelector((state)=> state.category.category)

    const dispatch = useDispatch(); 
  
    const menuItems = [...new Set(food_list.map((Val) => Val.category))];

    useEffect(() => {
        handleFilterFood();
      }, [selectedCategory]);
    
      const handleFilterFood = () => {
        if (selectedCategory === "All") {
          setFoodItem(food_list);
        } else {
          const newFoodItem = food_list.filter(
            (item) => item.category === selectedCategory
          );
          setFoodItem(newFoodItem);
        }
      };
    return (
      <section id="explore">
        <h2 className="font-bold text-3xl my-[20px]">Explore Our Menu</h2>
        <p>
          Our aim is to provide quality service and your satisfaction is our
          priority. Give your order and take satisfaction from us.
        </p>
        <div className="flex justify-between my-[20px]">
          <button
            onClick={() => {
                dispatch(setCategory("All"));
            }}
            className={`bg-orange-400 h-[100px] w-[100px] rounded-full hover:bg-orange-300 ${selectedCategory==="All" && "bg-red-600 text-white"}`}
          >
            All
          </button>
          {menuItems &&
            menuItems.map((category, index) => {
              return (
                <button
                  onClick={() =>{ 
                    dispatch(setCategory(category))
                }}
                  key={index}
                  className={`bg-orange-400 h-[100px] w-[100px] rounded-full hover:bg-orange-300 ${selectedCategory === category && "bg-red-600 text-white"}`}
                >
                  {category}
                </button>
              );
            })}
        </div>
        <FoodCard foodItem={foodItem} />
      </section>
    );
  };
  
  export default ExploreMenu;