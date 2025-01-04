import { Metadata } from "next";
import AboutTrainingsSection from "./_components/about-trainings-section";
import OnlineTrainingsHeroSection from "./_components/online-trainings-hero-section";
import TrainingsList from "./_components/trainings-list";

export const metadata: Metadata = {
  title: "Body Update by Liza Fabis | Курси",
  description: "Отримай програму для прокачки тіла",
};

export default function OnlineTrainingsPage() {
  return (
    <>
      <OnlineTrainingsHeroSection />
      <AboutTrainingsSection />
      <TrainingsList />
    </>
  );
}
