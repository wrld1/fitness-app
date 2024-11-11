import BlurFade from "@/components/ui/blur-fade";
import BoxReveal from "@/components/ui/box-reveal";
import { Button } from "@/components/ui/button";
import Image from "next/image";

function HeroSection() {
  return (
    // <div className="container flex items-center justify-between min-h-screen">
    //   <div className="size-full max-w-lg items-start flex flex-col justify-center overflow-hidden pt-8">
    //     <BoxReveal boxColor={"#94BFF0"} duration={0.5}>
    //       <h1 className="text-[3.5rem] font-semibold">
    //         Найкращі курси з фітнесу<span className="text-[#94BFF0]">.</span>
    //       </h1>
    //     </BoxReveal>

    //     <BoxReveal boxColor={"#94BFF0"} duration={0.5}>
    //       <p className="mt-[.5rem] text-[1rem]">
    //         Стань кращою версією <span className="text-[#94BFF0]">себе</span>
    //       </p>
    //     </BoxReveal>

    //     <BoxReveal boxColor={"#94BFF0"} duration={0.5}>
    //       <div className="mt-6">
    //         <p>
    //           -&gt; Обирай зручний для себе формат
    //           <span className="font-semibold text-[#94BFF0]">
    //             {" "}
    //             Персональні тренування
    //           </span>
    //           ,
    //           <span className="font-semibold text-[#94BFF0]">
    //             {" "}
    //             Онлайн тренування
    //           </span>
    //           ,<span className="font-semibold text-[#94BFF0]"> Марафони</span>
    //           . <br />
    //           -&gt; Змінюй своє життя на краще <br />
    //         </p>
    //       </div>
    //     </BoxReveal>

    //     <BoxReveal boxColor={"#94BFF0"} duration={0.5}>
    //       <Button
    //         className="mt-[1.6rem] px-4 py-2 text-white rounded-full text-xl "
    //         size="2xl"
    //       >
    //         Детальніше
    //       </Button>
    //     </BoxReveal>
    //   </div>
    //   <BlurFade delay={0.25} inView>
    //     <Image
    //       src="/images/hero-image.png"
    //       alt="Sporty Image"
    //       className="rounded-full "
    //       width={800}
    //       height={800}
    //     />
    //   </BlurFade>
    // </div>
    <div className="relative isolate px-6 pt-14 lg:px-8 min-h-screen">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
        />
      </div>
      <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
        <div className="text-center">
          <BlurFade delay={0.25} inView>
            <h1 className="text-balance text-5xl font-semibold tracking-tight sm:text-7xl">
              Стань кращою
            </h1>
            <p className="mt-8 text-pretty text-lg font-medium text-gray-500 sm:text-xl/8">
              Курси фітнесу для будь-кого
            </p>
          </BlurFade>

          <BlurFade delay={0.5} inView>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#about-me"
                className="rounded-lg bg-[#0284c7] px-5 py-2.5 text-2xl font-semibold text-white shadow-sm hover:bg-[#0369a1] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 tracking-wide"
              >
                Детальніше
              </a>
            </div>
          </BlurFade>
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
        />
      </div>
    </div>
  );
}

export default HeroSection;
