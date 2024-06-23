import React, { useEffect } from "react";

const PlaceOrder = () => {
    useEffect(()=>{
        window.scrollTo(0,0)
    },[])

  return (
    <div className="flex justify-between gap-5 my-10">
      <div className="flex-1 border-2 border-gray-300 rounded-lg p-5">
        <h3 className="font-bold text-2xl my-10">Delivery Information</h3>
        <form className="mb-10 w-full">
          
          <div>
            <input
              type="text"
              placeholder="First Name"
              className="outline-none bg-gray-200 py-2 px-3 rounded-md"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="outline-none bg-gray-200 py-2 px-3 rounded-md ml-1 my-2"
            />
          </div>
          <input
            type="email"
            placeholder="Email Address"
            className="outline-none bg-gray-200 py-2 px-3 rounded-md my-2 w-full"
          />
          <div>
            <input
              type="text"
              placeholder="City"
              className="outline-none bg-gray-200 py-2 px-3 rounded-md my-2"
            />
            <input
              type="text"
              placeholder="Street"
              className="outline-none bg-gray-200 py-2 px-3 rounded-md ml-1 my-2"
            />
          </div>
          <input
            type="tel"
            placeholder="Phone"
            className="outline-none bg-gray-200 py-2 px-3 rounded-md  my-2 w-full"
          />
        </form>
      </div>
      <div className="flex-1 border-2 border-gray-300 rounded-lg p-5">
        <h3 className="font-bold text-2xl my-10">Cart Totals</h3>
        <div className="flex justify-between">
          <p>Subtotal</p> <p>$0</p>
        </div>
        <hr className="my-2" />
        <div className="flex justify-between">
          <p>Delivery Fee</p> <p>$0</p>
        </div>
        <hr className="my-2" />
        <div className="flex justify-between">
          <h4 className="font-bold text-xl">Total</h4> <p>$0</p>
        </div>
        <div className="flex justify-center items-center mt-6">
          <button className="uppercase bg-orange-400 py-2 px-5 rounded-lg">Proceed To Payment</button>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;
