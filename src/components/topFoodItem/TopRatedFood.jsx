import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

import food_1 from '../../assets/food_asset/food_1.png';
import food_2 from '../../assets/food_asset/food_2.png';
import food_3 from '../../assets/food_asset/food_3.png';
import food_4 from '../../assets/food_asset/food_4.png';
import food_5 from '../../assets/food_asset/food_5.png';
import food_6 from '../../assets/food_asset/food_6.png';
import food_7 from '../../assets/food_asset/food_7.png';
import food_8 from '../../assets/food_asset/food_8.png';
import food_9 from '../../assets/food_asset/food_9.png';
import food_10 from '../../assets/food_asset/food_10.png';

const TopRatedFood = () => {
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
  return (
    <div className="container mx-auto my-10">
      <h3 className="font-bold text-2xl my-5">Top Rated Food Items</h3>
      <Swiper
        spaceBetween={30}
        slidesPerView={4}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
       {food_list && food_list.map((item, index)=>{
         return(
          <SwiperSlide key={index} className='relative'>
            <h4 className='absolute text-black top-[50%] left-[35%] text-xl font-bold' >{item.name}</h4>
          <img src={item.image} alt="image" className='rounded-md opacity-50'/>
         </SwiperSlide>
         )
       })}
        
      </Swiper>
    </div>
  );
};

export default TopRatedFood;
