import BlurFade from "@/components/ui/blur-fade";
import { CheckCircle } from "lucide-react";
import Image from "next/image";

function OnlineTrainingsHeroSection() {
  const benefits = [
    "Ти хочеш здорове та підтягнуте тіло",
    "Хочеш кайфувати від результатів тренувань та від себе",
    "Не вистачає мотивації та дисципліни тренуватись регулярно",
    "Хочеш забути про біль у спині та подобатись собі у дзеркалі",
    "Не хочеш витрачати багато часу на дорогу в зал",
  ];

  return (
    <section className="pt-36 lg:pt-0 pb-14 md:pb-0 bg-blueMain text-blueMainForeground w-full overflow-hidden min-h-screen flex items-center">
      <div className="container mx-auto px-4 ">
        <div className="flex flex-col gap-8 items-center md:py-[150px]">
          <div className="flex flex-col items-center gap-2">
            <BlurFade
              delay={0.25}
              inView
              className="relative aspect-square w-[350px] h-[350px] max-w-2xl overflow-hidden rounded-3xl bg-black/10 lg:aspect-[4/5]"
            >
              <Image
                src="/images/courses-hero-img.jpg"
                alt="Personal Trainings"
                className="object-cover rounded-lg shadow-lg"
                fill
                priority
                quality={100}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </BlurFade>
            <BlurFade
              delay={0.25 * 2}
              inView
              className="relative aspect-square w-[200px] h-[200px] max-w-2xl overflow-hidden rounded-3xl lg:aspect-[4/5]"
            >
              <Image
                src="/logos/logo2-black.png"
                alt="Personal Trainings"
                className="object-cover rounded-lg shadow-lg"
                fill
                priority
                quality={100}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </BlurFade>

            <BlurFade delay={0.25 * 2}>
              <h1 className="font-heading text-center font-bold text-primary-foreground text-4xl sm:text-5xl md:text-6xl my-6">
                Шлях до твоєї досконалості
              </h1>
            </BlurFade>
          </div>

          <BlurFade delay={0.25} inView>
            <div className="mt-8">
              <h2 className="mb-4 text-xl font-semibold">
                Курси підійдуть для тебе, якщо:
              </h2>
              <ul className="space-y-3">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-primary-foreground flex-shrink-0 mt-0.5" />
                    <span className="text-lg">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </BlurFade>
        </div>
      </div>
    </section>
  );
}

export default OnlineTrainingsHeroSection;
