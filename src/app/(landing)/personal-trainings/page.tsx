import BlurFade from "@/components/ui/blur-fade";
import Image from "next/image";
import StepsSection from "./_components/steps-section";
import BookingSection from "./_components/booking-section";
import { Button } from "@/components/ui/button";
import Link from "next/link";

function PersonalTrainingsPage() {
  return (
    <div className="w-full relative">
      <section className="bg-orangeMain text-orangeMainForeground flex flex-col items-center justify-center text-center min-h-screen ">
        <div className="container grid gap-8 lg:grid-cols-2 lg:gap-12">
          <BlurFade
            delay={0.25}
            inView
            className="flex flex-col justify-center space-y-8"
          >
            <div className="space-y-6 flex flex-col items-start text-left">
              <h1 className="font-heading text-4xl font-bold text-white sm:text-5xl md:text-6xl">
                Персональні тренування
                <span className="block text-2xl font-light opacity-90 sm:text-3xl md:text-4xl">
                  З врахуванням вашої мети
                </span>
              </h1>
              <p className="max-w-[600px] text-lg text-white/90 md:text-xl">
                Індивідуальний підхід! Кожне тренування розробляється з
                урахуванням ваших потреб, цілей та фізіологічних особливостей
                Тренування проходить у форматі відео дзвінка, що дає змогу
                контролювати вашу техніку виконання вправ, це допомагає уникнути
                травм та покращити результати.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button
                asChild
                className="border-2 border-orangeMainForeground bg-transparent px-8 text-orangeMainForeground hover:bg-orangeMainForeground hover:text-black"
                size="lg"
                variant="outline"
              >
                <Link href="#steps">Деталі</Link>
              </Button>
              <Button
                asChild
                className="bg-black px-8 text-white hover:bg-black/90"
                size="lg"
              >
                <Link href="#booking">Забронювати зайняття</Link>
              </Button>
            </div>
          </BlurFade>
          <BlurFade
            delay={0.25 * 2}
            inView
            className="relative aspect-square w-full max-w-2xl justify-self-end h-[600px] overflow-hidden rounded-3xl bg-black/10 lg:aspect-[4/5]"
          >
            <Image
              src="/images/personal-trainings-hero-img.jpg"
              alt="Personal Trainings"
              className="object-cover rounded-lg shadow-lg"
              fill
              priority
              quality={100}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </BlurFade>
        </div>
      </section>

      <StepsSection />
      <BookingSection />
    </div>
  );
}

export default PersonalTrainingsPage;
