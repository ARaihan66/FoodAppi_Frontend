import React from 'react';
import bg_pic from "../../assets/food_asset/hero.jpg"

const HeroSection = () => {
  return (
    <div className='w-full h-[80vh] relative'>
        <img src={bg_pic} alt="" className='w-[100%] h-[100%] rounded-lg opacity-70'/>
        <div className='absolute top-[45%] left-[10%]'>
            <h2 className='text-white text-3xl uppercase bg-blue-400 inline-block p-[10px] rounded-lg'>Order Your Favourite Food from FoodAppi</h2>
            <p className='text-white font-semibold text-justify w-[75%]'>FoodAppi was founded with a mission to make high-quality food accessible to everyone, anywhere. Our team is passionate about food and dedicated to providing exceptional service. Partnering with the finest local restaurants, we offer a diverse range of cuisines to satisfy all tastes. From fast food to fine dining, FoodAppi is your go-to solution for quick, reliable, and delicious food delivery.</p>
        </div>
    </div>
  )
}

export default HeroSection