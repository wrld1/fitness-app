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
                Онлайн <span className="text-[#A4D84F]">тренування</span>
              </h1>
            </BoxReveal>
            <BoxReveal duration={0.5}>
              <p className="text-lg md:text-xl">
                шлях до тіла поза часом та простором
              </p>
            </BoxReveal>
          </div>

          <BlurFade delay={0.25} inView>
            <div className="bg-secondary rounded-full px-10 py-20">
              <p className="text-lg md:text-2xl">
                Сьогодні онлайн тренування – це найзручніший формат для клієнта:
                адже ви можете займатися у будь-який час та будь-де, відвідуючи
                клас в записі або прямому ефірі.
              </p>
            </div>
          </BlurFade>
        </div>
      </div>
    </section>
  );
}

export default OnlineTrainingsHeroSection;
