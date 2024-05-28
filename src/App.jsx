import React from 'react'
import Home from './pages/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <div className='app'>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        {/*<Route path='/menu' element={<Home/>} />
        <Route path='/' element={<Home/>} />
        <Route path='/' element={<Home/>} />*/}
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App