import React from 'react'
import Home from './pages/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Cart from './pages/Cart'
import PlaceOrder from './pages/PlaceOrder'

const App = () => {
  return (
    <div className='app'>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        {/*<Route path='/menu' element={<Home/>} />*/}
        <Route path='/cart' element={<Cart/>} />
        <Route path='/order' element={<PlaceOrder/>} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App