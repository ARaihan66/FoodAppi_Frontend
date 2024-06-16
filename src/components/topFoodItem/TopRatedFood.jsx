import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

import food_1 from '../../assets/food_asset/food_1.png';
import food_2 from '../../assets/food_asset/food_2.png';
import food_3 from '../../assets/food_asset/food_3.png';

const TopRatedFood = () => {
  return (
    <div className="container mx-auto my-10">
      <h3 className="font-bold text-2xl my-5">Top Rated Food Items</h3>
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={food_1} alt="Food 1" className="rounded-lg shadow-lg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={food_2} alt="Food 2" className="rounded-lg shadow-lg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={food_3} alt="Food 3" className="rounded-lg shadow-lg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={food_1} alt="Food 1" className="rounded-lg shadow-lg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={food_2} alt="Food 2" className="rounded-lg shadow-lg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={food_3} alt="Food 3" className="rounded-lg shadow-lg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={food_1} alt="Food 1" className="rounded-lg shadow-lg" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default TopRatedFood;
