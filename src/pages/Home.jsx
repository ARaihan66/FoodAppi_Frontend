import HeroSection from "../components/heroSection/HeroSection";
import ExploreMenu from "../components/exploreMenu/ExploreMenu";
import TopRatedFood from "../components/topFoodItem/TopRatedFood";



const Home = () => {
  return (
    <div>
      <HeroSection />
      <ExploreMenu />
     <TopRatedFood/>
    </div>
  );
};

export default Home;
