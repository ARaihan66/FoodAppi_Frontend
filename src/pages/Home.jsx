import HeroSection from "../components/heroSection/HeroSection";
import PopularFood from "../components/populerFood/PopulerFood";
import TopRatedFood from "../components/topFoodItem/TopRatedFood";
import { Faqs } from "../components/faqs/Faqs";
import ClientReview from "../components/clientReview/ClientReview";
import ClientReviewComment from "../components/clientComment/ClientReviewComment";
import ExclusiveFood from "../components/exclusiveFood/ExclusiveFood";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <PopularFood />
      <ExclusiveFood/>
      <TopRatedFood />
      <ClientReview />
      <ClientReviewComment />
      <Faqs />
    </div>
  );
};

export default Home;
