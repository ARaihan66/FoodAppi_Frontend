import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import avater from "../../assets/avater/avater.png";

const reviewData = [
    {
      imgurl: avater,
      name: "John Doe",
      comment: "FoodAppi has completely changed my dining experience. The variety of cuisines available is amazing, and the delivery is always prompt. Highly recommend!"
    },
    {
      imgurl: avater,
      name: "Jane Smith",
      comment: "I love using FoodAppi! The app is so easy to use, and the customer service is top-notch. Plus, the food quality is consistently great."
    },
    {
      imgurl: avater,
      name: "Sam Wilson",
      comment: "FoodAppi offers the best food delivery service in town. The meals are always fresh and delicious. A fantastic service overall!"
    },
    {
      imgurl: avater,
      name: "Lisa Brown",
      comment: "I've been using FoodAppi for months now, and it never disappoints. The selection of restaurants is excellent, and the delivery is always fast and reliable."
    },
    {
      imgurl: avater,
      name: "Michael Lee",
      comment: "The convenience and quality of FoodAppi are unmatched. I love being able to order from my favorite local restaurants with just a few taps. Awesome service!"
    },
    {
      imgurl: avater,
      name: "Emily Davis",
      comment: "FoodAppi's service is exceptional. The food always arrives hot and the delivery times are impressively fast. I couldn't ask for a better food delivery app."
    },
    {
      imgurl: avater,
      name: "James Taylor",
      comment: "I appreciate the variety of options available on FoodAppi. Whether I'm in the mood for a quick snack or a gourmet meal, FoodAppi has it all. Highly satisfied!"
    },
    {
      imgurl: avater,
      name: "Olivia Martinez",
      comment: "The best part about FoodAppi is the seamless user experience. Ordering food has never been so easy and enjoyable. I recommend it to all my friends!"
    },
    {
      imgurl: avater,
      name: "David Anderson",
      comment: "FoodAppi consistently delivers high-quality food from my favorite restaurants. The app is intuitive and the delivery service is reliable. Thumbs up!"
    },
    {
      imgurl: avater,
      name: "Sophia Johnson",
      comment: "What I love about FoodAppi is the attention to detail. The food presentation is always excellent, and the delivery personnel are courteous. Truly a five-star experience!"
    }
  ];

const ClientReview = () => {
  return (
    <div className="">
        <h3 className='font-bold text-2xl my-5'>Clients Reviews</h3>
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper mb-10"
      >
        {reviewData.map((review, index) => (
          <SwiperSlide key={index} className="flex flex-col items-center text-center p-5 bg-brown-50 rounded">
            <img src={review.imgurl} alt={`Avatar of ${review.name}`} className="rounded-full w-[100px] h-[100px] mb-4 shadow-lg" />
            <h4 className="font-bold text-lg">{review.name}</h4>
            <p className="text-gray-600 my-4">"{review.comment}"</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default ClientReview;
