import BlurFade from "@/components/ui/blur-fade";
import Image from "next/image";
import { TabsImage } from "./tabs-image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

function HeroSection() {
  return (
    <div className="relative px-6 w-full pt-14 lg:px-8 min-h-screen overflow-visible">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/hero-image.jpg"
          alt="Hero Background"
          fill
          priority
          className="object-cover brightness-75"
          sizes="100vw"
          quality={100}
        />
      </div>

      <div className="mx-auto py-32 flex justify-center flex-col gap-20 items-center sm:py-48 lg:py-56">
        <div className="text-center">
          <BlurFade delay={0.25} inView>
            <h1 className="font-heading text-4xl font-bold sm:text-5xl md:text-7xl text-secondary">
              Стань кращою
            </h1>
            <p className="mt-8 text-secondary/80 text-pretty text-lg font-medium  sm:text-xl/8">
              Курси фітнесу для будь-кого
            </p>
          </BlurFade>

          <BlurFade delay={0.5} inView>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button
                asChild
                variant="outline"
                className="rounded-full px-10 py-6 text-2xl font-semibold shadow-sm tracking-wide bg-transparent text-secondary hover:text-foreground transition-colors"
              >
                <Link href="#about-me">Детальніше</Link>
              </Button>
            </div>
          </BlurFade>
        </div>
      </div>

      <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 translate-y-1/2 z-20">
        <TabsImage />
      </div>
    </div>
  );
}

export default HeroSection;
