import React from 'react'
import Home from './pages/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import PlaceOrder from './pages/PlaceOrder'
import Navbar from './components/navbar/Navbar'
import FoodDetails from './pages/FoodDetails'
import CartPage from './pages/CartPage'
import { Toaster } from 'react-hot-toast';
import Footer from './components/footer/Footer'
import About from './pages/About'

const App = () => {
  return (
    <div className='app'>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/food-detail' element={<FoodDetails/>} />
        <Route path='/cart' element={<CartPage/>} />
        <Route path='/order' element={<PlaceOrder/>} />
      </Routes>
      <Toaster />
      <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App