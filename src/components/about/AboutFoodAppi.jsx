import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import cook2 from "../../assets/about/cook2.jpg";
import cook3 from "../../assets/about/cook3.jpg";
import cook4 from "../../assets/about/cook4.jpg";
import cook1 from "../../assets/about/cook1.jpg";

const AboutFoodAppi = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="p-5">
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper mb-10"
      >
        <SwiperSlide>
          <img
            src={cook1}
            alt="Food 1"
            className="w-full h-96 object-cover rounded-lg shadow-lg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={cook2}
            alt="Food 2"
            className="w-full h-96 object-cover rounded-lg shadow-lg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={cook3}
            alt="Food 3"
            className="w-full h-96 object-cover rounded-lg shadow-lg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={cook4}
            alt="Food 4"
            className="w-full h-96 object-cover rounded-lg shadow-lg"
          />
        </SwiperSlide>
      </Swiper>
      <div>
        <h3 className="font-bold text-2xl my-5">About FoodAppi</h3>
        <p>
          Welcome to FoodAppi, your premier food delivery service dedicated to
          bringing high-quality meals right to your doorstep. At FoodAppi, our
          mission is simple: to make delicious, high-quality food accessible to
          everyone, anywhere. Whether you're a busy professional, a student, or
          just someone who loves good food, FoodAppi is here to serve you with a
          smile.
        </p>
      </div>
      <div>
        <h3 className="font-bold text-2xl my-5">Our Story</h3>
        <p>
          FoodAppi was founded with a passion for food and a commitment to
          exceptional service. We understand the joy of savoring a well-prepared
          meal and the convenience of having it delivered right to you. Our team
          is driven by these values, working tirelessly to connect you with the
          best local restaurants in your area. Born from the idea that everyone
          deserves access to great food without the hassle, FoodAppi has grown
          from a small startup to a trusted name in food delivery, serving
          thousands of satisfied customers every day.
        </p>
      </div>
      <div>
        <h3 className="font-bold text-2xl my-5">Our Partners</h3>
        <p>
          We partner with the finest local restaurants to offer a diverse range
          of cuisines that cater to all tastes and preferences. Whether you are
          craving a quick bite of fast food or indulging in a fine dining
          experience, FoodAppi has got you covered. Our curated selection of
          restaurant partners ensures that you have access to the highest
          quality meals, prepared with the freshest ingredients. From beloved
          local diners to upscale gourmet kitchens, our partners share our
          commitment to quality and customer satisfaction, ensuring every meal
          is a delight.
        </p>
      </div>
      <div>
        <h3 className="font-bold text-2xl my-5">Food Quality and Production</h3>
        <p>
          At FoodAppi, we prioritize food quality and production standards to
          deliver meals that are not only delicious but also safe and
          nutritious. Our restaurant partners adhere to strict hygiene and food
          safety protocols, ensuring that every dish meets our high standards.
          We work closely with them to source the best ingredients, emphasizing
          sustainability and local produce whenever possible. By fostering
          relationships with local farmers and suppliers, we help support the
          community and bring you fresher, better-tasting food. We believe in
          transparency and are proud to share that our food preparation
          processes meet rigorous industry standards, guaranteeing a dining
          experience you can trust.
        </p>
      </div>
      <div>
        <h3 className="font-bold text-2xl my-5">Our Promise</h3>
        <p>
          At FoodAppi, we are dedicated to providing quick, reliable, and
          delicious food delivery. We strive to exceed your expectations with
          every order, offering a seamless and enjoyable experience from
          browsing our app to the moment your food arrives. Our user-friendly
          interface makes it easy to explore various cuisines, customize your
          orders, and track your delivery in real-time. We understand that your
          time is valuable, and our efficient delivery network ensures that your
          food arrives hot and fresh, exactly when you want it. Our customer
          service team is always ready to assist you with any questions or
          concerns, making your satisfaction our top priority.
        </p>
      </div>
      <div>
        <h3 className="font-bold text-2xl my-5">Easy Payment Methods</h3>
        <p>
          To make your experience even more convenient, FoodAppi offers a
          variety of easy payment methods. Whether you prefer to pay by credit
          card, debit card, or through digital wallets like PayPal and Apple
          Pay, we have got you covered. Our secure payment system ensures that
          your information is protected, giving you peace of mind with every
          transaction. Additionally, for your convenience, we offer the option
          to save your payment details for future orders, making the checkout
          process faster and simpler. At FoodAppi, we believe that great food
          should come with hassle-free payments.
        </p>
      </div>
    </div>
  );
};

export default AboutFoodAppi;
