import React, { useEffect } from "react";
import { Carousel, Typography, Button } from "@material-tailwind/react";
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

const Menu = () => {
  const food_list = [
    {
      name: "Greek salad",
      image: food_1,
    },
    {
      name: "Veg salad",
      image: food_2,
    },
    {
      name: "Clover Salad",
      image: food_3,
    },
    {
      name: "Chicken Salad",
      image: food_4,
    },
    {
      name: "Lasagna Rolls",
      image: food_5,
    },
    {
      name: "Peri Peri Rolls",
      image: food_6,
    },
    {
      name: "Chicken Rolls",
      image: food_7,
    },
    {
      name: "Veg Rolls",
      image: food_8,
    },
    {
      name: "Ripple Ice Cream",
      image: food_9,
    },
    {
      name: "Fruit Ice Cream",
      image: food_10,
    },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Carousel
        autoplay={true}
        autoplayDelay={2000}
        loop={true}
        className="rounded-xl my-5"
      >
        {food_list &&
          food_list.map((item, index) => {
            return (
              <div key={index} className="relative h-[350px] w-full">
                <img
                  src={item.image}
                  alt="image"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
                  <div className="w-3/4 text-center md:w-2/4">
                    <Typography
                      variant="h1"
                      color="white"
                      className="mb-4 text-3xl md:text-4xl lg:text-5xl"
                    >
                      {item.name}
                    </Typography>
                    {/*<div className="flex justify-center gap-2">
                  <Button size="lg" color="white">
                    Explore
                  </Button>
                  <Button size="lg" color="white" variant="text">
                    Gallery
                  </Button>
                </div>*/}
                  </div>
                </div>
              </div>
            );
          })}
      </Carousel>

      <div>
        <h3 className="font-bold text-2xl my-5">Populer Menu's</h3>
        
      </div>
    </div>
  );
};

export default Menu;
