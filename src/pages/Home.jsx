import HeroSection from "../components/heroSection/HeroSection";
import ExploreMenu from "../components/exploreMenu/ExploreMenu";
import TopRatedFood from "../components/topFoodItem/TopRatedFood";
import { Faqs } from "../components/faqs/Faqs";
import ClientReview from "../components/clientReview/ClientReview";
import ClientReviewComment from "../components/clientComment/ClientReviewComment";



const Home = () => {
  return (
    <div>
      <HeroSection />
      <ExploreMenu />
     <TopRatedFood/>
     <ClientReview/>
     <ClientReviewComment/>
     <Faqs/>
    </div>
  );
};

export default Home;
