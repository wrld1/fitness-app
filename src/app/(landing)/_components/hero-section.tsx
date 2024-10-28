import BlurFade from "@/components/ui/blur-fade";
import BoxReveal from "@/components/ui/box-reveal";
import { Button } from "@/components/ui/button";
import Image from "next/image";

function HeroSection() {
  return (
    <div className="container flex items-center justify-between min-h-screen">
      <div className="size-full max-w-lg items-start flex flex-col justify-center overflow-hidden pt-8">
        <BoxReveal boxColor={"#94BFF0"} duration={0.5}>
          <h1 className="text-[3.5rem] font-semibold">
            Найкращі курси з фітнесу<span className="text-[#94BFF0]">.</span>
          </h1>
        </BoxReveal>

        <BoxReveal boxColor={"#94BFF0"} duration={0.5}>
          <p className="mt-[.5rem] text-[1rem]">
            Стань кращою версією <span className="text-[#94BFF0]">себе</span>
          </p>
        </BoxReveal>

        <BoxReveal boxColor={"#94BFF0"} duration={0.5}>
          <div className="mt-6">
            <p>
              -&gt; Обирай зручний для себе формат
              <span className="font-semibold text-[#94BFF0]">
                {" "}
                Персональні тренування
              </span>
              ,
              <span className="font-semibold text-[#94BFF0]">
                {" "}
                Онлайн тренування
              </span>
              ,<span className="font-semibold text-[#94BFF0]"> Марафони</span>
              . <br />
              -&gt; Змінюй своє життя на краще <br />
            </p>
          </div>
        </BoxReveal>

        <BoxReveal boxColor={"#94BFF0"} duration={0.5}>
          <Button
            className="mt-[1.6rem] px-4 py-2 text-white rounded-full text-xl "
            size="2xl"
          >
            Детальніше
          </Button>
        </BoxReveal>
      </div>
      {/* <div className="mt-4 flex flex-col gap-y-4">
          <BlurFade delay={0.6} inView>
            <h2 className="text-4xl font-semibold">
              Стань кращою версією себе 🧘
            </h2>
          </BlurFade>
          <BlurFade delay={0.6 * 2} inView>
            <Button
              className="mt-2 px-4 py-2 text-white rounded-full text-xl w-2/3"
              size="2xl"
            >
              Як саме?
            </Button>
          </BlurFade>
        </div> */}

      <BlurFade delay={0.25} inView>
        <Image
          src="/images/hero-image.png"
          alt="Sporty Image"
          className="rounded-full "
          width={800}
          height={800}
        />
      </BlurFade>
    </div>
  );
}

export default HeroSection;
