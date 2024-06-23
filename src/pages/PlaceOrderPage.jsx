import React, { useEffect } from 'react'
import PlaceOrder from '../components/placeOrder/PlaceOrder';

const PlaceOrderPage = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
    <PlaceOrder/>
    </div>
  )
}

export default PlaceOrderPage