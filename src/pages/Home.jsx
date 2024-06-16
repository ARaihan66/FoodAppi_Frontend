import HeroSection from "../components/heroSection/HeroSection";
import ExploreMenu from "../components/exploreMenu/ExploreMenu";
import TopRatedFood from "../components/topFoodItem/TopRatedFood";
import MapLocation from "../components/mapLocation/MapLocation";



const Home = () => {
  return (
    <div>
      <HeroSection />
      <ExploreMenu />
     <TopRatedFood/>
     <MapLocation/>
    </div>
  );
};

export default Home;
