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
    <section className="bg-blueMain text-blueMainForeground w-full overflow-hidden min-h-screen flex items-center">
      <div className="container mx-auto px-4 ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="flex flex-col items-start">
            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl mb-6">
              Курси
            </h1>

            <BlurFade
              delay={0.25 * 2}
              inView
              className="relative aspect-square w-full max-w-2xl h-[600px] overflow-hidden rounded-3xl bg-black/10 lg:aspect-[4/5]"
            >
              <Image
                src="/images/courses-hero.jpg"
                alt="Personal Trainings"
                className="object-cover rounded-lg shadow-lg"
                fill
                priority
                quality={100}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
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
