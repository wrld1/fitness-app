import BlurFade from "@/components/ui/blur-fade";
import BoxReveal from "@/components/ui/box-reveal";
import Image from "next/image";
import StepsSection from "./_components/steps-section";
import BookingSection from "./_components/booking-section";
import { ReviewsSection } from "./_components/reviews-section";

function PersonalTrainingsPage() {
  return (
    <>
      <section className="relative bg-sage-50 overflow-hidden min-h-screen">
        <div className="container mx-auto px-4 ">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Left content */}
            <div>
              <BoxReveal duration={0.5}>
                <h1 className="font-display text-3xl md:text-4xl lg:text-5xl mb-6">
                  Персональні <span className="text-[#94BFF0]">тренування</span>
                </h1>
              </BoxReveal>
              <BoxReveal duration={0.5}>
                <p className="text-lg md:text-xl">
                  Кожне персональне тренування – це набагато більше, аніж
                  взаємини &quot;тренер-клієнт&quot;. Для мене важливо відчувати
                  людину, настрій та ціль. Тому на кожного чекають особливі
                  класи та підбір навантаження та вправ під запит!
                </p>
              </BoxReveal>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-full overflow-hidden">
                <BlurFade delay={0.25} inView>
                  <Image
                    src="/images/personal-trainings-hero.png"
                    alt="Personal training"
                    className="w-full h-full object-cover"
                    width={550}
                    height={550}
                  />
                </BlurFade>
              </div>

              <div className="absolute -z-10 w-full h-full">
                <div className="absolute top-10 left-10">
                  <StarIcon className="w-8 h-8 text-sage-200" />
                </div>
                <div className="absolute bottom-20 right-0">
                  <StarIcon className="w-6 h-6 text-sage-200" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <StepsSection />
      <BookingSection />
      <ReviewsSection />
    </>
  );
}

// You can create this component separately or use an icon library
function StarIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 0L14.59 8.41L23 11L14.59 13.59L12 22L9.41 13.59L1 11L9.41 8.41L12 0Z" />
    </svg>
  );
}

export default PersonalTrainingsPage;
