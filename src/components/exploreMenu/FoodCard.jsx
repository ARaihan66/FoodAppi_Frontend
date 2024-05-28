import React from 'react'
import { IoIosHeartEmpty } from "react-icons/io";

const FoodCard = ({food_list}) => {
  return (
    <div className='flex justify-around items-center flex-wrap'>
        {food_list && food_list.map((item, index)=>{
           return(
            <div key={index} className='bg-gray-200 h-[400px] w-[300px] my-[20px] rounded-xl'>
            <img src={item.image} alt="food-image" className='h-[60%] w-[100%] p-[10px]'/>
            <div className='flex justify-between px-[10px]'>
            <h2 className='font-bold text-xl'>{item.name}</h2>
            <h3 className='font-semibold text-l'>{item.price} $</h3>
            </div>
            <p className='p-[10px]'>{item.description}</p>
            <div className='flex justify-between items-center px-[10px]'>
            <button className='bg-orange-500 p-[10px] rounded-full hover:bg-orange-400'>Add to Cart</button>
            <IoIosHeartEmpty className='h-[30px] w-[30px] cursor-pointer hover:text-orange-600'/>
            </div>
            </div>
           )
        })}
    </div>
  )
}

export default FoodCard