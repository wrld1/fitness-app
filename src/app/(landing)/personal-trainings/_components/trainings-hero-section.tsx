import BlurFade from "@/components/ui/blur-fade";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

function TrainingsHeroSection() {
  return (
    <section className="pt-36 lg:pt-0 px-4 bg-orangeMain text-orangeMainForeground flex flex-col items-center justify-center text-center min-h-screen ">
      <div className="container grid gap-8 lg:grid-cols-2 lg:gap-12">
        <BlurFade
          delay={0.25}
          inView
          className="flex flex-col justify-center space-y-8"
        >
          <div className="space-y-6 flex flex-col items-start text-left">
            <h1 className="font-heading text-4xl font-bold text-orangeMainForeground sm:text-5xl md:text-6xl">
              Персональні тренування
            </h1>
            <p className="max-w-[600px] text-lg text-orangeMainForeground/90 md:text-xl">
              Індивідуальний підхід! Кожне тренування розробляється з
              урахуванням ваших потреб, цілей та фізіологічних особливостей.
              <br />
              Тренування проходить у форматі відео дзвінка, що дає змогу
              контролювати вашу техніку виконання вправ, це допомагає уникнути
              травм та покращити результати.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Button
              asChild
              className="border-2 border-orangeMainForeground bg-transparent px-8 text-orangeMainForeground hover:bg-orangeMainForeground hover:text-white w-full md:w-auto"
              size="lg"
              variant="outline"
            >
              <Link href="#steps">Деталі</Link>
            </Button>
            <Button
              asChild
              className="bg-orangeMainForeground px-8 text-white hover:bg-orangeMainForeground/90 w-full md:w-auto"
              size="lg"
            >
              <Link href="#booking">Забронювати зайняття</Link>
            </Button>
          </div>
        </BlurFade>
        <BlurFade
          delay={0.25 * 2}
          inView
          className="relative aspect-square w-full lg:max-w-2xl lg:justify-self-end h-[500px] md:h-[600px] overflow-hidden rounded-3xl bg-black/10 lg:aspect-[4/5] flex justify-start"
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
  );
}

export default TrainingsHeroSection;
