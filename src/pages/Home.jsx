import HeroSection from "../components/heroSection/HeroSection";
import ExploreMenu from "../components/exploreMenu/ExploreMenu";
import TopRatedFood from "../components/topFoodItem/TopRatedFood";
import MapLocation from "../components/mapLocation/MapLocation";
import { Faqs } from "../components/faqs/Faqs";
import ClientReview from "../components/clientReview/ClientReview";



const Home = () => {
  return (
    <div>
      <HeroSection />
      <ExploreMenu />
     <TopRatedFood/>
     <ClientReview/>
     <Faqs/>
     <MapLocation/>
    </div>
  );
};

export default Home;
