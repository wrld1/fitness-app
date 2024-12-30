import AboutMeSection from "./_components/about-me-section";
import Description from "./_components/description";
import HeroSection from "./_components/hero-section";
import { ReviewsSection } from "./_components/reviews-section";
import TrainingTypesSection from "./_components/training-types-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Description />
      <AboutMeSection />
      <TrainingTypesSection />
      <ReviewsSection />
    </>
  );
}
