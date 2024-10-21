import Image from "next/image";
import { FadeText } from "./ui/fade-text";
import { Button } from "./ui/button";
import BlurFade from "./ui/blur-fade";

function HeroSection() {
  return (
    <div className="container flex items-center justify-between h-screen">
      <div className="flex flex-col items-center justify-around h-full flex-1">
        <div className="grid grid-cols-4 grid-rows-4 gap-4 font-normal">
          <div className="col-start-1 row-start-1 text-center">
            <FadeText
              className="text-4xl  "
              direction="up"
              framerProps={{
                show: { transition: { delay: 0.2 } },
              }}
              text="Струнка"
            />
          </div>
          <div className="col-start-2 row-start-2 text-center">
            <FadeText
              className="text-4xl"
              direction="right"
              framerProps={{
                show: { transition: { delay: 0.4 } },
              }}
              text="Підтянута"
            />
          </div>
          <div className="col-start-3 row-start-3 text-center">
            <FadeText
              className="text-4xl"
              direction="down"
              framerProps={{
                show: { transition: { delay: 0.6 } },
              }}
              text="Спортивна"
            />
          </div>
          <div className="col-start-4 row-start-4 text-center">
            <FadeText
              className="text-4xl"
              direction="left"
              framerProps={{
                show: { transition: { delay: 0.8 } },
              }}
              text="Красива"
            />
          </div>
        </div>
        <div className="mt-4 flex flex-col gap-y-4">
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
        </div>
      </div>

      <div className="">
        <Image
          src="/images/hero-image.png"
          alt="Sporty Image"
          className="rounded-full "
          width={800}
          height={800}
        />
      </div>
    </div>
  );
}

export default HeroSection;
