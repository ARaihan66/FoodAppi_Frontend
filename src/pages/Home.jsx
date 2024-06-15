import HeroSection from '../components/heroSection/HeroSection'
import ExploreMenu from '../components/exploreMenu/ExploreMenu'
import { useEffect } from 'react';

const Home = () => {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
        <HeroSection/>
        <ExploreMenu/>
    </div>
  )
}

export default Home