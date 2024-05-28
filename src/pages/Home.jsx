import React from 'react'
import Navbar from '../components/navbar/Navbar'
import HeroSection from '../components/heroSection/HeroSection'
import ExploreMenu from '../components/exploreMenu/ExploreMenu'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <HeroSection/>
        <ExploreMenu/>
    </div>
  )
}

export default Home