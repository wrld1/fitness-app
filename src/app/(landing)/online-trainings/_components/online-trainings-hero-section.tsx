import BlurFade from "@/components/ui/blur-fade";
import BoxReveal from "@/components/ui/box-reveal";

function OnlineTrainingsHeroSection() {
  return (
    <section className="bg-sage-50 overflow-hidden min-h-[80vh] flex items-center">
      <div className="container mx-auto px-4 ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <BoxReveal duration={0.5}>
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl mb-6">
                Курси
              </h1>
            </BoxReveal>
            <BoxReveal duration={0.5}>
              <p className="text-lg md:text-xl">
                шлях до тіла поза часом та простором
              </p>
            </BoxReveal>
          </div>

          <BlurFade delay={0.25} inView>
            <div className="bg-secondary rounded-full px-12 py-10">
              <p className="text-lg md:text-2xl">
                Курси підійдуть для тебе, якщо
              </p>
              <ul className="list-disc pl-5 mt-2">
                <li>Ти хочеш здорове та підтягнуте тіло</li>
                <li>Хочеш кайфувати від результатів тренувань та від себе</li>
                <li>
                  Не вистачає мотивації та дисципліни тренуватись регулярно
                </li>
                <li>
                  Хочеш забути про біль у спині та подобатись собі у дзеркалі
                </li>
                <li>Не хочеш витрачати багато часу на дорогу в зал</li>
              </ul>
            </div>
          </BlurFade>
        </div>
      </div>
    </section>
  );
}

export default OnlineTrainingsHeroSection;
