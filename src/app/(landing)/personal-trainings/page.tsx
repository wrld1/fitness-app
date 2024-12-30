import StepsSection from "./_components/steps-section";
import BookingSection from "./_components/booking-section";
import TrainingsHeroSection from "./_components/trainings-hero-section";

function PersonalTrainingsPage() {
  return (
    <div className="w-full relative bg-orangeMain">
      <TrainingsHeroSection />
      <StepsSection />
      <BookingSection />
    </div>
  );
}

export default PersonalTrainingsPage;
