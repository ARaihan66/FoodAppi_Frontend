import { MdDelete } from "react-icons/md";
import { FaPlus, FaMinus } from "react-icons/fa";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import toast from 'react-hot-toast';
import { removeFromCart, incrementQty, decrementQty } from "../../redux/slices/CartSlice";
import { Link } from "react-router-dom";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cart);
  const totalQty = cartItems.reduce((totalQty, item) => {
    return totalQty + item.qty;
  }, 0);

  const totalPrice = cartItems.reduce((totalPrice, item) => {
    return totalPrice + item.qty * item.price;
  }, 0);


  const handleIncrement = (id) => {
    const item = cartItems.find((item) => item.id === id);
    if (item && item.qty >= 10) {
        toast.success("Cannot add more than 10 items")
    } else {
        dispatch(incrementQty({ id: item.id }))
    }
  };


  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="my-[50px]">
      <h2 className="text-2xl font-bold">Cart Items</h2>
      {cartItems.length > 0 ? (
        cartItems.map((item) => (
          <div
            key={item.id}
            className="flex justify-between items-center my-[20px] bg-gray-50 rounded-2xl shadow-xl p-[20px]"
          >
            <div className="flex justify-between items-center gap-10">
              <MdDelete
                className="text-2xl text-red-700 cursor-pointer"
                onClick={() => {
                    dispatch(removeFromCart({ id: item.id }));
                    toast.success("Item remove from the cart")
                }}
              />
              <img src={item.image} alt={item.name} className="w-[120px] h-[120px] rounded-md" />
            </div>
            <div>
              <h3 className="text-xl font-bold">{item.name}</h3>
              <p>{item.description}</p>
              <div className="flex text-orange-400">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStarHalfAlt />
              </div>
            </div>
            <div className="flex justify-center items-center gap-5">
              <FaPlus
                className="cursor-pointer hover:text-red-300"
                onClick={() => handleIncrement (item.id)}
              />
              {item.qty}
              <FaMinus
                className="cursor-pointer hover:text-red-300"
                onClick={() => dispatch(decrementQty({ id: item.id }))}
              />
            </div>
            <div>
              <h2 className="text-xl">${(item.price * item.qty).toFixed(2)}</h2>
            </div>
          </div>
        ))
      ) : (
        <p className="text-center my-[20px] font-semibold">Your cart is empty.</p>
      )}
      <hr className="my-[10px]"/>
      <div className="flex justify-between ">
        <h3 className="font-bold">Total Items : {totalQty}</h3>
        <h3 className="font-bold">Total Items : {totalPrice}</h3>
      </div>
      <div className="flex justify-center items-center my-[5px]">
        <Link to="/order" className="uppercase font-bold py-[10px] px-[50px] bg-orange-600 rounded-full">Check Out</Link>
      </div>
    </div>
  );
};

export default Cart;
